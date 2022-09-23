import $ from "jquery";

export const stealth = () => {
  let x = window.matchMedia("(max-width: 600px)")
  if (x.matches) {
    $("#ButtonScr1").css("width", "30%");
    $("#ButtonScr1").css("opacity", "0");
    setTimeout(() => {
      $("#ButtonScr1").css("display", "none");
      $("#journy, #coder, #karm").css("display", "inline-block");
    }, 2000);
    setTimeout(() => {
      $("#journy, #coder, #karm").css("opacity", "1");
      $("#journy").css("width", "90%");
      $("#coder, #karm").css("width", "80%");
      $("#coder").css("margin-bottom", "30px");
    }, 2500);
    $("#ButtonScr0").css("margin-top", "0");
  } else {
    if ($('#ButtonScr0').css('height') == '35px') {
      $("#ButtonScr1").css("animation", "none");
      $("#ButtonScr0").css("border-image", "radial-gradient(#2c2d2e, #000000) 1 100%");
      $("#ButtonScr1").css("opacity", "0.2");
      $("#ButtonScr1").css("width", "60%");
      setTimeout(() => {
        $("#journy, #coder, #karm").css("opacity", "1");
      }, 1000);
      $("#ButtonScr0").css("height", "200px");
      $("#journy, #coder, #karm").css("display", "inline-block");
    } else {
      $("#ButtonScr0").css("border-image", "radial-gradient(transparent, transparent) 1 100%");
      $("#ButtonScr1").css("opacity", "1");
      $("#ButtonScr0").css("height", "35px");
      $("#ButtonScr1").css("width", "90%");
      $("#journy, #coder, #karm").css("opacity", "0");
      setTimeout(() => {
        $("#journy, #coder, #karm").css("display", "none");
      }, 5000);
    }
  } 
}

export const journy = () => {
    $("#journy").css("backgroundColor", "#000000");
    setTimeout(() => {$("#journy").css("opacity", "0.1");}, 1000);
    setTimeout(() => {window.open('https://kscriptme.com', '_blank');}, 2000);
    setTimeout(() => {$("#journy").css("opacity", "1");}, 10000);
}
export const karm = () => {
  $("#karm").css("backgroundColor", "#000000");
  setTimeout(() => {$("#karm").css("opacity", "0.1");}, 1000);
  setTimeout(() => {window.open('/karma', '_blank');}, 2000);
  setTimeout(() => {$("#karm").css("opacity", "1");}, 10000);
}
export const coder = () => {
  $("#coder").css("backgroundColor", "#000000");
  setTimeout(() => {$("#coder").css("opacity", "0.1");}, 1000);
  setTimeout(() => {window.open('https://github.com/user/project', '_blank');}, 2000);
  setTimeout(() => {$("#coder").css("opacity", "1");}, 10000);
}
