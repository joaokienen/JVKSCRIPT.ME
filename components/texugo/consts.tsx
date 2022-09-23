import nookies from 'nookies';
import { expanY } from './varexpa';
import $ from "jquery";

if (typeof window === 'object') {

  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8texugo', {maxAge: 200, path: '/'});}, 2000);

  setTimeout(() => {$("#demo_expaY").text(expanY);}, 24000);
  setTimeout(() => {$("#demo_expaY").css("color", "#cdd46a");}, 25000);
  setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 35000);

  setTimeout(() => {
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #747a14, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#747a14, #000000) 0 100%");
  }, 3000);

  setTimeout(() => {
    $("#cursorTexugo").css("color", "#747a14");
    $("#fakeScr00").css("border-image", "radial-gradient(#747a14, #000000) 1 100%");
  }, 8000);

  setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 14000);
  setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 15000);
  setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 18000);
  setTimeout(() => {$("#cursorD").css("opacity", "0.2");}, 22000);
  setTimeout(() => {$("#cursor0A").css("opacity", "0.2");}, 20000);
}
