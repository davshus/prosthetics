function scrollScreen(n) {
    window.scroll({
        left: 0,
        top: window.innerHeight * n,
        behavior: "smooth"
    })
}
function scrollScreenNext() {
    console.log(window.scrollY)
    let currentScreen = Math.floor(window.scrollY / window.innerHeight);
    console.log(currentScreen);
    scrollScreen(currentScreen+1);
}
export {scrollScreen, scrollScreenNext};