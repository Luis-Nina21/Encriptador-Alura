
window.onload = function() {
    document.getElementById("textoSalida").style.display = "none";
    document.getElementById("Copiar").style.display = "none";
    document.getElementById("imagenMensaje").style.marginTop="80px";
    document.getElementById("imagenMensaje").style.marginBottom="40px";
    document.getElementById("mensajetexto").style.padding="20px 40px 30px 40px";
    document.getElementById("mensajetexto").style.fontSize="14px"

}


// Función para encriptar un texto
function encriptarTexto() {
    const texto = document.getElementById('textoEntrada').value;
    
    // Validar que el texto solo contenga letras minúsculas y espacios
    if (!/^[a-z\s]+$/.test(texto)) {
        alert('Solo se aceptan letras minúsculas sin caracteres especiales.');
        return '';
    }

    // Convertir el texto a su equivalente encriptado
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Si es una letra minúscula
            charCode = ((charCode - 97 + 13) % 26) + 97; // Aplicar cifrado César con desplazamiento de 13 posiciones
        }
        textoEncriptado += String.fromCharCode(charCode);
    }

    // Mostrar el texto encriptado en el segundo textarea
    document.getElementById('textoSalida').value = textoEncriptado;

    document.getElementById("textoSalida").style.display = "block";
    document.getElementById("imagenMensaje").style.display = "none";
    document.getElementById("mensajeTitulo").style.display = "none";
    document.getElementById("mensajetexto").style.display = "none";
    document.getElementById("Copiar").style.display = "block";
    document.getElementById("Copiar").style.margin="0 auto"
    document.getElementById("Copiar").style.float="botton";



    // Limpiar el primer textarea
    document.getElementById('textoEntrada').value = '';
}

// Función para desencriptar un texto
function desencriptarTexto() {
    const texto = document.getElementById('textoSalida').value;

    
    
    // Validar que el texto solo contenga letras minúsculas y espacios
    if (!/^[a-z\s]+$/.test(texto)) {
        alert('Solo se aceptan letras minúsculas sin caracteres especiales.');
        return '';
    }

    // Convertir el texto a su equivalente desencriptado
    let textoDesencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Si es una letra minúscula
            charCode = ((charCode - 97 - 13 + 26) % 26) + 97; // Aplicar descifrado César con desplazamiento de 13 posiciones
        }
        textoDesencriptado += String.fromCharCode(charCode);
    }

    // Mostrar el texto desencriptado en el primer textarea
    document.getElementById('textoSalida').value = textoDesencriptado;


    document.getElementById("textoSalida").style.display = "block";
    document.getElementById("imagenMensaje").style.display = "none";
    document.getElementById("mensajeTitulo").style.display = "none";
    document.getElementById("mensajetexto").style.display = "none";
    document.getElementById("Copiar").style.display = "block";
    document.getElementById("Copiar").style.margin="0 auto"
    document.getElementById("Copiar").style.float="botton";


    // Limpiar el segundo textarea
    document.getElementById('textoEntrada').value = '';
}


// Función para copiar el texto encriptado
function copiarTexto() {
    const texto = document.getElementById('textoSalida').value;
    
    // Copiar el texto encriptado al portapapeles
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado al portapapeles.');
        })
        .catch((error) => {
            console.error('Error al copiar el texto:', error);
        });
}




function cambiarEstiloTexto() {
    var textarea = document.getElementById("textoEntrada");
    var textarea2 = document.getElementById("textoSalida");
    textarea.style.fontSize = "30px"; // Cambiar el tamaño del texto
    textarea.style.color = "rgba(10, 56, 113, 1)"; // Cambiar el color del texto
    textarea2.style.fontSize = "30px"; // Cambiar el tamaño del texto
    textarea2.style.color = "rgba(10, 56, 113, 1)"; // Cambiar el color del texto
}

// Llamar a la función cuando se haya cargado completamente la página
document.addEventListener("DOMContentLoaded", cambiarEstiloTexto);






