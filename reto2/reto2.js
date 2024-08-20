document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores ingresados por el usuario
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let lenguaje = document.getElementById('lenguaje').value;

    // Mostrar la información ingresada
    let responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p>Tu nombre es ${nombre}.</p>
        <p>Tienes ${edad} años.</p>
        <p>Estás estudiando ${lenguaje}.</p>
    `;

    // Mostrar la pregunta adicional
    let questionText = document.getElementById('questionText');
    questionText.textContent = `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`;

    document.getElementById('questionSection').style.display = 'block';
});

function responder(opcion) {
    let message = '';

    if (opcion === 1) {
        message = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    } else if (opcion === 2) {
        message = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    }

    // Mostrar el mensaje basado en la respuesta
    document.getElementById('response').innerHTML += `<p>${message}</p>`;
    document.getElementById('questionSection').style.display = 'none'; // Ocultar los botones después de la respuesta
}
