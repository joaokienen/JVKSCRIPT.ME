import { neuroZx1, neuroZx2, neuroZx3, neuroZx4, neuroZx5, neuroZx6, neuroF1, 
  neuroV1, neuroA1, neuroF2, neuroV2, neuroA2, neuroF3, neuroV3, neuroA3, neuroF4, neuroV4, 
  neuroA4, neuroF5, neuroV5, neuroA5, neuroF6, neuroV6, neuroA6 } from './varneuro'
import nookies from 'nookies';
import $ from "jquery";

let clicked = false;

if (typeof window === 'object') {

  setTimeout(() => {nookies.set(null, 'CODEKEYMain', 'XLR8hero', {maxAge: 200, path: '/'});}, 2000);

  setTimeout(() => {
    $("#btnLetsGo").css("border-image-source", "linear-gradient(to right, #C2B280, #373635)");
    $("#fakeLetsGo").css("border-image", "radial-gradient(#C2B280, #000000) 0 100%");
  }, 3000);

  setTimeout(() => {
    $("#fakeScr00").css("border-image", "radial-gradient(#C2B280, #000000) 1 100%");
    $("#cursorHero").css("color", "#C2B280");
  }, 8000);

  setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 15000);
  setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 16000);
  setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 17000);
  setTimeout(() => {$("#cursor0A").css("opacity", "0.2");}, 20000);

}

export const destiny = (e) => {
    if (!clicked) {

      clicked = true;
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.borderColor = 'white';
      e.currentTarget.style.backgroundColor = 'rgb(12, 12, 12)';
      e.currentTarget.style.opacity = '1';
      $("#cursorD").css("opacity", "0.2");

      if (e.target.outerText == neuroZx1) {
        setTimeout(() => {$('#demo_frase').text(neuroF1);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV1)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA1)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 
      if (e.target.outerText == neuroZx2 || e.target.outerText == "Alegres") {
        if (e.target.outerText == "Alegres") {setTimeout(() => {$('#demo_name').text(neuroZx5);}, 1000); setTimeout(() => {$("#demo_name").css("color", "#eedfb1");}, 3000);}
        setTimeout(() => {$('#demo_frase').text(neuroF2);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV2)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA2)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 
      if (e.target.outerText == neuroZx3 || e.target.outerText == "Neutros") {
        if (e.target.outerText == "Neutros") {setTimeout(() => {$('#demo_name').text(neuroZx5);}, 1000); setTimeout(() => {$("#demo_name").css("color", "#eedfb1");}, 3000);}
        setTimeout(() => {$('#demo_frase').text(neuroF3);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV3)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA3)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 
      if (e.target.outerText == neuroZx4 || e.target.outerText == "Tristes") {
        if (e.target.outerText == "Tristes") {setTimeout(() => {$('#demo_name').text(neuroZx5);}, 1000); setTimeout(() => {$("#demo_name").css("color", "#eedfb1");}, 3000);}
        setTimeout(() => {$('#demo_frase').text(neuroF4);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV4)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA4)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 
      if (e.target.outerText == neuroZx5 || e.target.outerText == "---") {
        if (e.target.outerText == "---") {setTimeout(() => {$('#demo_name').text(neuroZx5);}, 1000); setTimeout(() => {$("#demo_name").css("color", "#eedfb1");}, 3000);}
        setTimeout(() => {$('#demo_frase').text(neuroF5);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV5)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA5)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 
      if (e.target.outerText == neuroZx6) {
        setTimeout(() => {$('#demo_frase').text(neuroF6);}, 4000);
        setTimeout(() => {$("#demo_frase").css("color", "#eedfb1");}, 5000);
        setTimeout(() => {$("#demo_frase").css("opacity", "0.2");}, 20000);
        setTimeout(() => {$('#demo_visao').text(neuroV6)}, 16000);
        setTimeout(() => {$("#demo_visao").css("color", "#eedfb1");}, 17000);
        setTimeout(() => {$("#demo_visao").css("opacity", "0.2");}, 35000);
        setTimeout(() => {$('#demo_acao').text(neuroA6)}, 30000);
        setTimeout(() => {$("#demo_acao").css("color", "#eedfb1");}, 31000);
      } 

      setTimeout(() => {$("#fakeLetsGo, #btnLetsGo").css("opacity", "1");}, 39000);
    }
}
