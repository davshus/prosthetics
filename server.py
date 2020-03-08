from flask import Flask, request, send_file, render_template, send_from_directory
import socket
import time
import json
import zipfile
import os

app = Flask(__name__)


@app.route('/')
def hello_world():
    return app.send_static_file("index.html")
    # return render_template("static/index.html")


@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('static', str(path))


@app.route("/getSTL", methods=["GET"])
def getSTLFile():
    # if request.method == "GET":
    #     if request.args == []:
    #         return "Empty string"
	#
    #     fileTitle = f"C:\\\\tmp\\{send(request.args)}"
    #     zipfile.ZipFile('model.zip', mode='w').write(fileTitle)
    #     return send_file("model.zip", mimetype="zip")
    # return "use GET request"
    if request.method == "GET":
        if request.args == []:
            return "Empty string"

        zip = zipfile.ZipFile('model.zip', mode='w')
        folderTitle = f"C:\\tmp\\{send(request.args)}"
        for root, dirs, files in os.walk(folderTitle):
            for file in files:
                zip.write(os.path.join(root, file))
        zip.close()
        return send_file("model.zip", mimetype="zip")
    return "use GET request"


TCP_IP = '127.0.0.1'
TCP_PORT = 5005
BUFFER_SIZE = 1024


s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((TCP_IP, TCP_PORT))


def send(args):

    # message = ("{\"legHeight\": \"" + str(legHeight) + "\", \"dogGirth\": \"" + str(dogGirth) + "\"}").encode('ascii')
    message = json.dumps(args)
    s.send(message.encode('ascii'))

    data = s.recv(BUFFER_SIZE)
    uqid = data.decode('ascii')
    print(f"data: {uqid}")
    return uqid


if __name__ == "__main__":
    app.run(host="0.0.0.0")
    # send("10", "20")
