import nookies from 'nookies';
import { destRouter } from './routes';
import $ from "jquery";

if (typeof window === 'object') {
  
  setTimeout(() => {$("#fakeButtonsX").addClass("fakeButtonsX");}, 2000);

  setTimeout(() => {
    $("#cursorZipo").css("color", "#848884");
    $("#fakeScr0").css("border-image", "radial-gradient(#848884, #000000) 1 100%");
    $("#btn").css("background-color", "#848884");
    $("#fakeButtonsX").css("border", "0.5px solid #848884");
    $("#fakeButtonsA").css("background-image", "radial-gradient(#848884 30%, #000000 100%)");
    $("#fakeButtonsB").css("background-image", "radial-gradient(#848884 30%, #000000 100%)");
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #848884, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#848884, #000000) 0 100%");
  }, 3000);

}

export const returnd = () => {
    window.location.href = '/home';
  }

const nextd = () => {
  nookies.set(null, 'CODEKEYZipo', 'XLR8zipo', { maxAge: 200, path: '/' });
  nookies.set(null, 'CODEKEYConsts', `XLR8${destRouter}`, {maxAge: 300, path: '/'});
  window.location.href = `/zipo/${destRouter}`;
}

export const contnext = () => {
    $("#cursorE").css("opacity", "0.2");
    $("#fakeLetsGo, #opacyt").css("opacity", "0");
    setTimeout(() => {nextd()}, 1000);
}
