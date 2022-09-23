import { badZ } from './varbad';
import nookies from 'nookies';
import $ from "jquery";

if (typeof window === 'object') {

  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8atlas', {maxAge: 200, path: '/'});}, 2000);

    setTimeout(() => {
      setTimeout(() => {$('#demo_main').text(badZ);}, 1000);
      setTimeout(() => {$("#demo_main").css("color", "#8da4b6");}, 2000);
      setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 7000);
    }, 22000);

    setTimeout(() => {
      $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #4682B4, #373635)");
      $("#fakeLetsGo").css("border-image", "radial-gradient(#4682B4, #000000) 0 100%");
    }, 3000);

    setTimeout(() => {
      $("#cursorAtlas").css("color", "#4682B4");
      $("#fakeScr00").css("border-image", "radial-gradient(#4682B4, #000000) 1 100%");
  }, 8000);

    setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 14000);
    setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 18000);
    setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 24000);
    setTimeout(() => {$("#cursor0A").css("opacity", "0.2");}, 15000);
    setTimeout(() => {$("#cursor0B").css("opacity", "0.2");}, 19000);
}
