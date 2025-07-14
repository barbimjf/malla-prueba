document.addEventListener('DOMContentLoaded', () => {
    const ramos = document.querySelectorAll('.ramo'); // Seleccionamos elementos con la clase 'ramo'
    let approvedRamos = new Set(); // Para almacenar los IDs de los ramos aprobados

    // Cargar estado guardado (si existe)
    loadState();

    // Inicializar el estado de los ramos (bloqueado/desbloqueado)
    updateRamoStates();

    ramos.forEach(ramo => {
        ramo.addEventListener('click', () => {
            const ramoId = ramo.dataset.id;

            // Si el ramo no está aprobado y no está bloqueado, se puede "aprobar"
            if (!ramo.classList.contains('approved') && !ramo.classList.contains('locked')) {
                // Marcar como aprobado
                ramo.classList.add('approved');
                approvedRamos.add(ramoId);
                console.log(`Ramo aprobado: ${ramo.textContent}`);

                // Guardar el estado
                saveState();

                // Actualizar el estado de todos los ramos
                updateRamoStates();
            } else if (ramo.classList.contains('locked')) {
                // Mostrar un mensaje si el ramo está bloqueado
                alert(`Para tomar "${ramo.textContent}", primero debes aprobar los requisitos.`);
            }
        });
    });

    // Función para actualizar el estado de los ramos (bloqueado/desbloqueado/aprobado)
    function updateRamoStates() {
        ramos.forEach(ramo => {
            const ramoId = ramo.dataset.id;
            const requires = ramo.dataset.requires ? ramo.dataset.requires.split(',').map(req => req.trim()) : []; // Limpiar espacios

            if (approvedRamos.has(ramoId)) {
                ramo.classList.add('approved');
                ramo.classList.remove('locked', 'unlocked');
            } else {
                // Verificar si todos los requisitos están aprobados
                const allRequirementsMet = requires.every(reqId => approvedRamos.has(reqId));

                if (requires.length === 0 || allRequirementsMet) {
                    ramo.classList.remove('locked');
                    ramo.classList.add('unlocked');
                } else {
                    ramo.classList.add('locked');
                    ramo.classList.remove('unlocked');
                }
            }
        });
    }

    // Función para guardar el estado en el almacenamiento local
    function saveState() {
        localStorage.setItem('approvedRamosUNABPsicologia', JSON.stringify(Array.from(approvedRamos)));
    }

    // Función para cargar el estado del almacenamiento local
    function loadState() {
        const savedState = localStorage.getItem('approvedRamosUNABPsicologia');
        if (savedState) {
            approvedRamos = new Set(JSON.parse(savedState));
        }
    }
});
