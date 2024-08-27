// Función para encriptar el texto
function encryptText() {
    // Obtiene el texto ingresado en el área de texto de entrada
    const inputText = document.getElementById('inputText').value;
    // Obtiene el elemento donde se muestran mensajes de validación
    const validationMessage = document.getElementById('validationMessage');

    // Verifica si el texto ingresado es válido (sin mayúsculas ni caracteres especiales)
    if (!isValidInput(inputText)) {
        // Si no es válido, muestra una alerta y un mensaje de error
        validationMessage.textContent = alert('No se aceptarán mayúsculas ni caracteres especiales.');
        return; // Sale de la función sin encriptar el texto
    } else {
        // Si el texto es válido, limpia cualquier mensaje de error previo
        validationMessage.textContent = '';
    }

    // Reemplaza las vocales por sus respectivas "palabras clave" para encriptar el texto
    const encodedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    // Muestra el texto encriptado en el área de texto de salida
    document.getElementById('outputText').value = encodedText;
    // Limpia el área de texto de entrada después de la encriptación
    document.getElementById('inputText').value = '';
}

// Función para desencriptar el texto
function decryptText() {
    // Obtiene el texto encriptado del área de texto de salida
    const inputText = document.getElementById('outputText').value;
    // Obtiene el elemento donde se muestran mensajes de validación
    const validationMessage = document.getElementById('validationMessage');

    // Verifica si el texto ingresado es válido (sin mayúsculas ni caracteres especiales)
    if (!isValidInput(inputText)) {
        // Si no es válido, muestra un mensaje de error
        validationMessage.textContent = 'No se aceptarán mayúsculas ni caracteres especiales.';
        return; // Sale de la función sin desencriptar el texto
    } else {
        // Si el texto es válido, limpia cualquier mensaje de error previo
        validationMessage.textContent = '';
    }

    // Reemplaza las "palabras clave" por las vocales originales para desencriptar el texto
    const decodedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    // Muestra el texto desencriptado en el área de texto de salida
    document.getElementById('outputText').value = decodedText;
}

// Función para validar si el texto ingresado es válido
function isValidInput(text) {
    // Define un patrón que permite solo letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;
    // Retorna verdadero si el texto cumple con el patrón, falso si no lo hace
    return regex.test(text);
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copyText() {
    // Obtiene el texto en el área de texto de salida
    const outputText = document.getElementById('outputText');
    // Selecciona el texto para copiarlo
    outputText.select();
    // Ejecuta el comando para copiar el texto al portapapeles
    document.execCommand('copy');
    // Muestra una alerta indicando que el texto ha sido copiado
    alert('Texto "'+outputText.value+'" copiado al portapapeles');
}
