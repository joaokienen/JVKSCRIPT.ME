import nookies from 'nookies';
import $ from "jquery";
import { animalZ1, animalZ2, animalZ3, animalZ4, animalF1, animalV1, animalF2, animalV2, animalF3, animalV3, animalF4, animalV4 } from './varanimalx'

let clicked = false;

if (typeof window === 'object') {

  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8fauno', {maxAge: 200, path: '/'});}, 2000);
  
  setTimeout(() => {
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #006d00, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#006d00, #000000) 0 100%");
  }, 3000);

  setTimeout(() => {
    $("#fakeScr00").css("border-image", "radial-gradient(#006d00, #000000) 1 100%");
    $("#cursorFauno").css("color", "#006d00");
  }, 8000);

  setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 19000);
}

export const destiny = (e) => {
  if (!clicked) {

    clicked = true;
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.borderColor = 'white';
    e.currentTarget.style.backgroundColor = 'rgb(12, 12, 12)';
    e.currentTarget.style.opacity = '1';
    $("#cursorB").css("opacity", "0.2");

    if (e.target.outerText == animalZ1 || e.target.outerText == "Norte") {
      if (e.target.outerText == "Norte") {setTimeout(() => {$('#demo_name').text(animalZ1)}, 2000); setTimeout(() => {$("#demo_name").css("color", "#69a769");}, 3000);}
      setTimeout(() => {$('#demo_visao').text(animalV1)}, 4000);
      setTimeout(() => {$("#demo_visao").css("color", "#69a769");}, 5000);
      setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 20000);
      setTimeout(() => {$('#demo_frase').text(animalF1)}, 10000);
      setTimeout(() => {$("#demo_frase").css("color", "#69a769");}, 11000);
    } 
    if (e.target.outerText == animalZ2 || e.target.outerText == "Sul") {
      if (e.target.outerText == "Sul") {setTimeout(() => {$('#demo_name').text(animalZ2)}, 2000); setTimeout(() => {$("#demo_name").css("color", "#69a769");}, 3000);}
      setTimeout(() => {$('#demo_visao').text(animalV2)}, 4000);
      setTimeout(() => {$("#demo_visao").css("color", "#69a769");}, 4000);
      setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 20000);
      setTimeout(() => {$('#demo_frase').text(animalF2)}, 10000);
      setTimeout(() => {$("#demo_frase").css("color", "#69a769");}, 11000);
    } 
    if (e.target.outerText == animalZ3 || e.target.outerText == "Leste") {
      if (e.target.outerText == "Leste") {setTimeout(() => {$('#demo_name').text(animalZ3)}, 2000); setTimeout(() => {$("#demo_name").css("color", "#69a769");}, 3000);}
      setTimeout(() => {$('#demo_visao').text(animalV3)}, 4000);
      setTimeout(() => {$("#demo_visao").css("color", "#69a769");}, 5000);
      setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 20000);
      setTimeout(() => {$('#demo_frase').text(animalF3)}, 10000);
      setTimeout(() => {$("#demo_frase").css("color", "#69a769");}, 11000);
    } 
    if (e.target.outerText == animalZ4 || e.target.outerText == "Oeste") {
      if (e.target.outerText == "Oeste") {setTimeout(() => {$('#demo_name').text(animalZ4)}, 2000); setTimeout(() => {$("#demo_name").css("color", "#69a769");}, 3000);}
      setTimeout(() => {$('#demo_visao').text(animalV4)}, 4000);
      setTimeout(() => {$("#demo_visao").css("color", "#69a769");}, 5000);
      setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 20000);
      setTimeout(() => {$('#demo_frase').text(animalF4)}, 10000);
      setTimeout(() => {$("#demo_frase").css("color", "#69a769");}, 11000);
    } 

    setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 20000);
  }
}
