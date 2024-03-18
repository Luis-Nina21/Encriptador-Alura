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
