import React, {Component} from 'react';
import '../../../css/DataEntry.css';
import {scrollScreen, scrollScreenNext} from "../../helpers";

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fieldNames = props.fieldNames;
        this.props = props;
        this.fields = Object.keys(this.fieldNames);
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(id, val) {
        this.setState((prevState, props) => {
            return {
                [id]: val
            }
        });
    }
    componentDidMount() {
        //hardcoded now
        scrollScreen(2);
        this.updateValue('title', this.props.title)
    }

    render() {
        return <div className="entry-container">
            <div className="card entry-frame">
                <div className="entry-diagram-container">
                    <img src={this.props.diagram} className="entry-diagram" />
                </div>
                <div className="side-container">
                    <div className="entry-field-container" style={{'flex':'1'}}>
                    {this.fields.map((i,j,k)=>{
                        return <div className="input-container" key={i}>
                            <label>{this.fieldNames[i]}</label>
                            <input type="text" onChange={e=>{
                                const {value} = e.target;
                                this.updateValue(i, value);
                            }} />
                        </div>
                    })}
                    </div>
                    <a style={{'display': 'block', 'textAlign': 'center'}} href={`/getSTL?${Object.keys(this.state).map(i=>i+'='+this.state[i]).join('&')}`} ><img style={{'display': 'inline'}} className="download" src="img/chevron.svg"/></a>
                </div>
            </div>
        </div>
    }
}
export default DataEntry;