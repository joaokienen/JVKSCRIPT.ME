import $ from "jquery";
import '../all/interconst';

if (typeof window === 'object') {
    setTimeout(() => {
        $("#fakeLetsGo, #btnLetsGo").css("opacity", "1");
    }, 15000);

    setTimeout(() => {
        $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #76D7C4, #373635)");
        $("#fakeLetsGo").css("border-image", "radial-gradient(#76D7C4, #000000) 0 100%");
    }, 3000);

    setTimeout(() => {
        $("#cursorKamr").css("color", "#76D7C4");
        $("#fakeScr00").css("border-image", "radial-gradient(#76D7C4, #000000) 1 100%");
    }, 8000);

    setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 14000);
}

export const karm = () => {
    if ($('#btnLetsGo').text() == "Elevar consciência") {
        setTimeout(() => {
            $("#btnLetsGo").text("Pix copiado");
            $("#btnLetsGo").css("opacity", "0.4");  
        }, 1000);
        setTimeout(() => {
            $("#btnLetsGo").text("Elevar consciência");
            $("#btnLetsGo").css("opacity", "1");  
        }, 10000);
    }
}