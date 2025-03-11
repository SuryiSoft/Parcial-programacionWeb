const text1 = "El bosque despertaba con los primeros rayos del sol. Los árboles, altos y majestuosos, se mecían con la brisa matutina, mientras el canto de los pájaros llenaba el aire con una sinfonía natural. A lo lejos, el murmullo de un arroyo rompía el silencio, sus aguas cristalinas reflejaban el cielo azul y las hojas danzantes.<br><br> Cada gota que salpicaba las rocas contaba historias antiguas, de lluvias pasajeras y estaciones que cambiaban con el tiempo. Entre los matorrales, pequeños animales salían de sus madrigueras, explorando el nuevo día con cautela y curiosidad. Las mariposas revoloteaban entre las flores silvestres, pintando el paisaje con sus alas de colores vibrantes. En medio de esa tranquilidad, un viajero avanzaba por un sendero oculto, dejando tras de sí huellas efímeras en la tierra húmeda.<br><br> No buscaba un destino, solo quería sentir la conexión con la naturaleza, escuchar su lenguaje, comprender su ritmo y perderse en su belleza. El tiempo parecía detenerse en aquel rincón del mundo. Solo existía el bosque, el viento y la vida en su forma más pura.";

const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel repudiandae vero, praesentium consequuntur autem quam dolores odit sint provident modi tempora aperiam, nemo at ipsum. Rem nemo earum unde.<br><br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel repudiandae vero, praesentium consequuntur autem quam dolores odit sint provident modi tempora aperiam, nemo at ipsum. Rem nemo earum unde.<br><br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel repudiandae vero, praesentium consequuntur autem quam dolores odit sint provident modi tempora aperiam, nemo at ipsum. Rem nemo earum unde."


function cambiarContenido(){
    let textoActual = document.getElementById("text").innerHTML;
    if(textoActual === text1 ){
        document.getElementById("text").innerHTML = text2;
    }else{
        document.getElementById("text").innerHTML = text1;
    }
}


function cambiarFondo(){  
    const colorActual = window.getComputedStyle(document.body).backgroundColor;
    if(colorActual === "rgba(205, 203, 203, 0.52)" || colorActual === "rgb(205, 203, 203)"){
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("text").style.color = "black";
    }else{
        document.body.style.backgroundColor = "rgba(205, 203, 203, 0.52)";
        document.getElementById("text").style.color = "rgb(248, 72, 72)";
    }
}

/*Scripts Register y Login*/

function mostrarDatos() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Usuario: " + username + "\nContraseña: " + password);
    }
}

function mostrarDatos1() {
    // Capturar los valores de los inputs
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let estrato = document.getElementById("estrato").value;
    let fecha = document.getElementById("fecha").value;
    let sangre = document.getElementById("sanguineo").value;

    // Validar que no haya campos vacíos
    if (!nombre || !apellido || !email || !telefono || !estrato || !fecha || !sangre) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar los datos en un alert
    alert(
        "Datos ingresados:\n" +
        "Nombre: " + nombre + "\n" +
        "Apellidos: " + apellido + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Estrato: " + estrato + "\n" +
        "Fecha de nacimiento: " + fecha + "\n" +
        "Grupo Sanguíneo: " + sangre
    );
}


let tamañoOriginal = "16px"; 
let colorOriginal = "black"; 

function cambiarTamano() {
    let texto = document.getElementById("texto");
    texto.style.fontSize = texto.style.fontSize === "24px" ? tamañoOriginal : "24px";
}

function cambiarColor() {
    let texto = document.getElementById("texto");
    texto.style.color = texto.style.color === "red" ? colorOriginal : "red";
}


function mostrarDatos() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Usuario: " + username + "\nContraseña: " + password);
    }
}

function mostrarDatos1() {
    // Capturar los valores de los inputs
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let estrato = document.getElementById("estrato").value;
    let fecha = document.getElementById("fecha").value;
    let sangre = document.getElementById("sanguineo").value;

    // Validar que no haya campos vacíos
    if (!nombre || !apellido || !email || !telefono || !estrato || !fecha || !sangre) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let generoSeleccionado = document.querySelector('input[name="flexRadioDefault"]:checked');
let genero = generoSeleccionado ? generoSeleccionado.nextElementSibling.textContent.trim() : "No seleccionado";

// Capturar las actividades seleccionadas (checkboxes)
let actividadesSeleccionadas = [];
document.querySelectorAll('.form-check-input[type="checkbox"]:checked').forEach((checkbox) => {
let actividad = checkbox.nextElementSibling.textContent.trim();
actividadesSeleccionadas.push(actividad);
});

// Validar que no haya campos vacíos (excepto actividades, que son opcionales)
if (!nombre || !apellido || !email || !telefono || !estrato || !fecha || !sangre || !generoSeleccionado) {
alert("Por favor, completa todos los campos obligatorios.");
return;
}

// Mostrar los datos en un alert
alert(
"Datos ingresados:\n" +
"Nombre: " + nombre + "\n" +
"Apellidos: " + apellido + "\n" +
"Email: " + email + "\n" +
"Teléfono: " + telefono + "\n" +
"Estrato: " + estrato + "\n" +
"Fecha de nacimiento: " + fecha + "\n" +
"Grupo Sanguíneo: " + sangre + "\n" +
"Género: " + genero + "\n" +
"Actividades favoritas: " + (actividadesSeleccionadas.length > 0 ? actividadesSeleccionadas.join(", ") : "Ninguna seleccionada")
);
}

function Mostrar() {
    let textoIngresado = document.getElementById("search").value;   
    alert("Buscaste: " + textoIngresado); 
}
