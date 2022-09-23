import $ from "jquery";

if (typeof window === 'object') {

    setTimeout(() => {
        $("#fakeButtonsX").addClass("fakeButtonsX");
        $("#cursorZipo00").css("color", "#848884");
    }, 2000);
    
    setTimeout(() => {
        $("#fakeScr0").css("border-image", "radial-gradient(#848884, #000000) 1 100%");
        $("#btn").css("background-color", "#848884");
        $("#fakeButtonsX, #fakeButtonsA").css("border", "0.5px solid #848884");
        $("#fakeButtonsB").css("background-image", "radial-gradient(#848884 30%, #000000 100%)");
    }, 3000);
    setTimeout(() => {$("#cursorZipo01").css("color", "#848884");}, 6000);
    setTimeout(() => {$("#cursorZipo01").css("opacity", "0.2");}, 8000);
}