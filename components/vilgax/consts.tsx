import { zeroName, zeroFrase, zeroEmocional, zeroEspiritual, zeroIntelectual, zeroMaterial } from "./vardestin"
import nookies from 'nookies';
import $ from "jquery";

let clicked = false;

if (typeof window === 'object') {
  
  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8vilgax', {maxAge: 200, path: '/'});}, 2000);

  setTimeout(() => {
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #C04000, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#C04000, #000000) 0 100%");
  }, 3000);

  setTimeout(() => {
    $("#cursorVilgax").css("color", "#C04000");
    $("#fakeScr00").css("border-image", "radial-gradient(#C04000, #000000) 1 100%");
  }, 8000);

  setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 16000);
  setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 17000);
  setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 18000);
  setTimeout(() => {$("#cursorD").css("opacity", "0.2");}, 26000);
  setTimeout(() => {$("#cursor0A").css("opacity", "0.2");}, 22000);
  setTimeout(() => {$("#cursor0B").css("opacity", "0.2");}, 23000);
}

export const destiny = (e) => {
    if (!clicked) {

      clicked = true;
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.borderColor = 'white';
      e.currentTarget.style.backgroundColor = 'rgb(12, 12, 12)';
      e.currentTarget.style.opacity = '1';
      $("#cursorE").css("opacity", "0.2");

      if (e.target.outerText == "Material") {
        setTimeout(() => {$('#demo_frase').text(zeroFrase)}, 2000);
        setTimeout(() => {$("#demo_frase").css("color", "#f77744");}, 3000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_name').text(zeroName)}, 10000);
        setTimeout(() => {$("#demo_name").css("color", "#f77744");}, 11000);
        setTimeout(() => {$("#demo_name").css("opacity", "0.2");}, 25000);
        setTimeout(() => {$('#demo_main').text(zeroMaterial)}, 15000);
        setTimeout(() => {$("#demo_main").css("color", "#f77744");}, 16000);
      } 
      if (e.target.outerText == "Emocional") {
        setTimeout(() => {$('#demo_frase').text(zeroFrase)}, 2000);
        setTimeout(() => {$("#demo_frase").css("color", "#f77744");}, 3000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_name').text(zeroName)}, 10000);
        setTimeout(() => {$("#demo_name").css("color", "#f77744");}, 11000);
        setTimeout(() => {$("#demo_name").css("opacity", "0.2");}, 25000);
        setTimeout(() => {$('#demo_main').text(zeroEmocional)}, 15000);
        setTimeout(() => {$("#demo_main").css("color", "#f77744");}, 16000);
      } 
      if (e.target.outerText == "Espiritual") {
        setTimeout(() => {$('#demo_frase').text(zeroFrase)}, 2000);
        setTimeout(() => {$("#demo_frase").css("color", "#f77744");}, 3000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_name').text(zeroName)}, 10000);
        setTimeout(() => {$("#demo_name").css("color", "#f77744");}, 11000);
        setTimeout(() => {$("#demo_name").css("opacity", "0.2");}, 25000);
        setTimeout(() => {$('#demo_main').text(zeroEspiritual)}, 15000);
        setTimeout(() => {$("#demo_main").css("color", "#f77744");}, 16000);
      } 
      if (e.target.outerText == "Intelectual") {
        setTimeout(() => {$('#demo_frase').text(zeroFrase)}, 2000);
        setTimeout(() => {$("#demo_frase").css("color", "#f77744");}, 3000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_name').text(zeroName)}, 10000);
        setTimeout(() => {$("#demo_name").css("color", "#f77744");}, 11000);
        setTimeout(() => {$("#demo_name").css("opacity", "0.2");}, 25000);
        setTimeout(() => {$('#demo_main').text(zeroIntelectual)}, 15000);
        setTimeout(() => {$("#demo_main").css("color", "#f77744");}, 16000);
      } 

      setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 20000);
    }
}
