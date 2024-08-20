document.addEventListener('DOMContentLoaded', function () {
    let gameDiv = document.getElementById('game');
    let technologies = [];

    // Fase 1: Elegir Front-End o Back-End
    gameDiv.innerHTML = `
        <p>¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?</p>
        <button onclick="chooseArea('Front-End')">Front-End</button>
        <button onclick="chooseArea('Back-End')">Back-End</button>
    `;

    window.chooseArea = function(area) {
        if (area === 'Front-End') {
            gameDiv.innerHTML = `
                <p>Estás en el área de Front-End. ¿Quieres aprender React o aprender Vue?</p>
                <button onclick="chooseFramework('React')">React</button>
                <button onclick="chooseFramework('Vue')">Vue</button>
            `;
        } else {
            gameDiv.innerHTML = `
                <p>Estás en el área de Back-End. ¿Quieres aprender C# o aprender Java?</p>
                <button onclick="chooseFramework('C#')">C#</button>
                <button onclick="chooseFramework('Java')">Java</button>
            `;
        }
    };

    window.chooseFramework = function(framework) {
        gameDiv.innerHTML = `
            <p>Has elegido ${framework}. ¿Quieres seguir especializándote en esta área o convertirte en Fullstack?</p>
            <button onclick="choosePath('Especialización', '${framework}')">Especialización</button>
            <button onclick="choosePath('Fullstack', '${framework}')">Fullstack</button>
        `;
    };

    window.choosePath = function(path, framework) {
        let message = path === 'Especialización' ?
            `¡Gran elección! La especialización en ${framework} te llevará lejos.` :
            `¡Impresionante! Convertirse en Fullstack te dará muchas oportunidades.`;

        gameDiv.innerHTML = `
            <p>${message}</p>
            <p>¿Hay alguna otra tecnología que te gustaría aprender?</p>
            <input type="text" id="techInput" placeholder="Nombre de la tecnología">
            <button onclick="addTechnology()">Añadir</button>
            <div id="technologies"></div>
            <div id="additionalTechs"></div>
        `;
    };

    window.addTechnology = function() {
        let techInput = document.getElementById('techInput');
        let techName = techInput.value.trim();
        
        if (techName !== '') {
            technologies.push(techName);
            let techDiv = document.getElementById('technologies');
            techDiv.innerHTML += `<p>Interesante elección: ${techName}. ¡Vale la pena investigarlo!</p>`;
            techInput.value = '';

            // Preguntar si quiere añadir más tecnologías
            if (confirm("¿Hay alguna otra tecnología que te gustaría aprender?")) {
                techInput.focus();
            } else {
                showAdditionalTechs();
            }
        }
    };

    function showAdditionalTechs() {
        let additionalTechsDiv = document.getElementById('additionalTechs');
        additionalTechsDiv.innerHTML = '<h2>Elige una de las nuevas tecnologías:</h2>';
        technologies.forEach(tech => {
            additionalTechsDiv.innerHTML += `<button onclick="chooseFramework('${tech}')">${tech}</button>`;
        });
    }
});
