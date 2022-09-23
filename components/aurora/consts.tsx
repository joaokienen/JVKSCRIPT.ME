import nookies from 'nookies';
import { auroraZ } from './vardestin';
import $ from "jquery";

if (typeof window === 'object') {

  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8aurora', {maxAge: 200, path: '/'});}, 2000);

  setTimeout(() => {
    setTimeout(() => {$('#demo_oraculo').text(auroraZ);}, 4000);
    setTimeout(() => {$("#demo_oraculo").css("color", "#e69f9f");}, 5000);
    setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 10000);
  }, 30000);

  setTimeout(() => {
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #986868, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#986868, #000000) 0 100%");
  }, 3000);

  setTimeout(() => {
    $("#cursorAurora").css("color", "#986868");
    $("#fakeScr00").css("border-image", "radial-gradient(#986868, #000000) 1 100%");
}, 8000);

  setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 13000);
  setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 15000);
  setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 17000);
  setTimeout(() => {$("#cursorD").css("opacity", "0.2");}, 19000);
  setTimeout(() => {$("#cursorE").css("opacity", "0.2");}, 21000);
  setTimeout(() => {$("#cursorF").css("opacity", "0.2");}, 23000);
  setTimeout(() => {$("#cursorG").css("opacity", "0.2");}, 27000);
  setTimeout(() => {$("#cursorH").css("opacity", "0.2");}, 29000);
  setTimeout(() => {$("#cursor0A").css("opacity", "0.2");}, 35000);
  setTimeout(() => {$("#cursorI").css("opacity", "0.2");}, 37000);
}
