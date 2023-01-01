
function encriptar() {
    
    var texto = document.querySelector(".ingText").value;
    validarTexto(texto);
    var textoCodificado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    var muneco = document.querySelector(".muneco");
    var frame5 = document.querySelector(".frame5");
    muneco.style.display = "none";
    frame5.style.display = "none";
    var frame5Dos = document.querySelector(".frame5Dos");
    frame5Dos.style.visibility = "visible";
    var btncopiar = document.querySelector(".contenedor-btn-copiar");
    btncopiar.style.visibility = "visible";
    adaptarPantalla();
    var textoED = document.querySelector(".textoED");
    textoED.textContent = textoCodificado;
    console.log(textoCodificado);
}

btnEncriptar = document.querySelector(".encriptar");

btnEncriptar.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector(".ingText").value;
    validarTexto(texto);
    var textoDecodificado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    var muneco = document.querySelector(".muneco");
    var frame5 = document.querySelector(".frame5");
    muneco.style.display = "none";
    frame5.style.display = "none";
    var frame5Dos = document.querySelector(".frame5Dos");
    frame5Dos.style.visibility = "visible";
    var btncopiar = document.querySelector(".contenedor-btn-copiar");
    btncopiar.style.visibility = "visible";
    adaptarPantalla();
    var textoED = document.querySelector(".textoED");
    textoED.textContent = textoDecodificado;
    console.log(textoDecodificado);
}

btnDesencriptar = document.querySelector(".desencriptar");

btnDesencriptar.onclick = desencriptar;



function limpiarPantalla() {
    var pantallaALimpiar = document.querySelector(".ingText");
    var nuevoValor = (pantallaALimpiar.value = "");
    var muneco = document.querySelector(".muneco");
    var frame5 = document.querySelector(".frame5");
    var container = document.querySelector(".container");
    var containerStyle = window.getComputedStyle(container);
    var containerWidth = containerStyle.getPropertyValue('width');
    containerWidth = containerWidth.slice(0, containerWidth.length - 2);
    containerWidth = parseInt(containerWidth);
    console.log(containerWidth);
    if (containerWidth > 800) {
        muneco.style.display = "inline-block";
    }
    frame5.style.display = "flex";
    var frame5Dos = document.querySelector(".frame5Dos");
    frame5Dos.style.visibility = "hidden";
    var btncopiar = document.querySelector(".contenedor-btn-copiar");
    btncopiar.style.visibility = "hidden";
    console.log(nuevoValor);
    window.location.reload();
}


btnLimpiar = document.querySelector(".btnLimpiar");
btnLimpiar.onclick = limpiarPantalla;


function copiar() {
   let copyText = document.querySelector(".textoED").textContent;
   console.log(copyText);
   navigator.clipboard.writeText(copyText).then(()=>{
      alert("Copiado Correctamente!!!");
   });
}
btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.onclick = copiar;

function adaptarPantalla() {
    var recta1=document.querySelector(".recta1");
    var ingText=document.querySelector(".ingText");
    var excla=document.querySelector(".excla");
    var btn=document.querySelector(".btn");
    var container = document.querySelector(".container");
    var containerStyle = window.getComputedStyle(container);
    var containerWidth = containerStyle.getPropertyValue('width');
    containerWidth = containerWidth.slice(0, containerWidth.length - 2);
    containerWidth = parseInt(containerWidth);
    console.log(containerWidth);
    if (containerWidth<=800 && containerWidth >=380) {
        recta1.style.height="343px";
    }
    else if (containerWidth<380) {
        container.style.height="1715px";
        recta1.style.height="595px";
        recta1.style.width="343px" ;
        recta1.style.top="1096px";
        ingText.style.height="624px";
        excla.style.top="840px";
        btn.style.top="874px";
    } 
}

function validarTexto(texto){
    
    if(/[A-Z&%$#]/.test(texto)){
        alert("¡Tiene una mayúscula o carácter especial, elimínala y vuelva a escribir el mensaje!");
        limpiarPantalla();
    }
   
}
/*efecto particulas*/

particlesJS({
            "particles": {
              "number": {
                "value": 50,
                "density": {
                  "enable": true,
                  "value_area": 700
                }
              },
              "color": {
                "value": "#0a3871"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0a3871",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          })
 
    