<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malla TEC. EN PREVENCIÓN DE RIESGOS – IPLACEX</title>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 20px;
            background: #e0f2f7; /* Azul pastel muy claro */
            color: #333; /* Texto negro para mejor contraste */
        }
        h1 {
            text-align: center;
            color: #2196f3; /* Azul medio para el título principal */
            margin-bottom: 5px;
        }
        .author-info {
            text-align: center;
            color: #1976d2; /* Tono más oscuro del azul para la autoría */
            font-size: 0.9em;
            margin-bottom: 20px;
        }

        /* Contenedor principal de información (contador y PPA) */
        .info-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
        }

        .info-box {
            background: #bbdefb; /* Azul pastel más claro */
            color: #1a237e; /* Azul oscuro para texto */
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border: 1px solid #90caf9;
            text-align: center;
        }

        /* Estilos de la malla principal */
        .malla {
            display: flex;
            overflow-x: auto;
            gap: 20px;
            padding-bottom: 40px;
            justify-content: flex-start;
        }

        /* Agrupación por año */
        .year-group {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            min-width: 400px;
            padding: 10px;
            background: #e3f2fd; /* Azul muy claro para el grupo de año */
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border: 1px solid #90caf9;
        }

        /* Título del año dentro del grupo */
        .year-group .anio {
            writing-mode: horizontal-tb;
            transform: none;
            border-left: none;
            border-bottom: 4px solid #2196f3; /* Azul medio */
            padding: 8px 15px;
            width: fit-content;
            margin-bottom: 5px;
            font-size: 1.3em;
            color: #2196f3;
            background: #bbdefb;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        /* Contenedor de los bimestres dentro de un año (grid para mejor control) */
        .bimestres-del-anio {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        /* Para el último año que solo tiene 1 bimestre en la primera fila */
        .year-group:last-of-type .bimestres-del-anio {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }


        .bimestre {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-radius: 10px;
            padding: 10px;
            min-width: 180px;
            border: 1px solid #90caf9;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .bimestre h3 {
            text-align: center;
            color: #2196f3; /* Azul medio */
            margin: 5px 0;
            font-size: 1.1em;
        }
        .ramo {
            padding: 8px;
            border-radius: 8px;
            margin: 5px 0;
            cursor: pointer;
            text-align: center;
            transition: 0.3s;
            opacity: 0.5;
            font-size: 0.9em;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            color: #333333; /* Texto negro */
        }
        .ramo.activo {
            opacity: 1;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .ramo.aprobado {
            text-decoration: line-through;
            background-color: #1976d2 !important; /* Azul más oscuro para aprobados */
            color: white; /* Texto blanco en ramos aprobados */
            opacity: 1;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        /* Estilos para los separadores de Título (VERTICALES) */
        .separator, .titulo-final {
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            text-align: center;
            font-weight: bold;
            color: #1976d2; /* Azul oscuro */
            background: #bbdefb; /* Azul pastel */
            padding: 10px;
            border-left: 4px solid #2196f3; /* Azul medio */
            font-size: 1.1em;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 10px;
            flex-shrink: 0;
        }

        .titulo-final {
            border-color: #2196f3;
            color: #2196f3;
            background: #bbdefb;
        }

        /* Colores de los ámbitos (tonos azules pastel) */
        .ambito1 { background: #e3f2fd; } /* Azul muy claro */
        .ambito2 { background: #bbdefb; } /* Azul claro */
        .ambito3 { background: #90caf9; } /* Azul medio claro */
        .ambito4 { background: #64b5f6; } /* Azul medio */
        .ambito5 { background: #42a5f5; } /* Azul un poco más intenso */
        .reconocimiento { background: #cfd8dc; } /* Gris azulado pastel */

        /* Sección de Notas */
        .grades-section {
            margin-top: 40px;
            background: #e3f2fd;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            border: 1px solid #90caf9;
        }

        .grades-section h2 {
            text-align: center;
            color: #2196f3;
            margin-bottom: 25px;
            font-size: 1.8em;
        }

        #gradesInputContainer {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .grade-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            background: #fff;
            border-radius: 8px;
            border: 1px solid #90caf9;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .grade-item span {
            font-size: 1em;
            color: #555;
            flex-grow: 1;
            margin-right: 10px;
        }

        .grade-item input[type="number"] {
            width: 70px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            font-size: 1em;
            -moz-appearance: textfield;
            color: #333333; /* Texto negro */
        }
        .grade-item input[type="number"]::-webkit-outer-spin-button,
        .grade-item input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Estilo para inputs deshabilitados */
        .grade-item input[type="number"]:disabled {
            background-color: #f0f0f0;
            cursor: not-allowed;
        }

        /* Leyenda de Ámbitos */
        .leyenda {
            margin-top: 40px;
            margin-bottom: 40px;
            background: #e3f2fd;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            border: 1px solid #90caf9;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        /* Asegura que los items de la leyenda tomen el color de su ámbito */
        .leyenda-item {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.9em;
            padding: 5px 10px;
            border-radius: 5px;
            border: 1px solid #90caf9;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            color: #333333; /* Texto negro */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .malla {
                flex-direction: column;
                align-items: center;
            }
            .year-group {
                min-width: unset;
                width: 95%;
            }
            .bimestres-del-anio {
                grid-template-columns: 1fr;
            }
            .leyenda, .grades-section {
                padding: 15px;
            }
            #gradesInputContainer {
                grid-template-columns: 1fr;
            }
            .separator, .titulo-final {
                font-size: 1.2em;
                padding: 10px 20px;
                writing-mode: horizontal-tb;
                transform: none;
                border-left: none;
                border-bottom: 4px solid;
                margin: 20px auto;
            }
        }
    </style>
</head>
<body>

    <h1>MALLA TEC. EN PREVENCIÓN DE RIESGOS – IPLACEX</h1>
    <p class="author-info">Por Barbi Jerez Figueroa</p>

    <div class="info-container">
        <div class="info-box">
            Ramos Aprobados: <span id="ramosAprobadosCount">0</span>
        </div>
        <div class="info-box">
            PPA: <span id="ppaValue">N/A</span>
        </div>
    </div>

    <div class="malla" id="malla">
        <!-- Los grupos de años y bimestres se insertarán aquí por JavaScript -->
    </div>

    <!-- La leyenda de ámbitos se mueve aquí, entre la malla y la sección de notas -->
    <div class="leyenda">
        <div class="leyenda-item ambito1">Diplomado en Prevención e Investigación en Riesgos Laborales</div>
        <div class="leyenda-item ambito2">Diplomado en Legislación y Salud Ocupacional</div>
        <div class="leyenda-item ambito3">Diplomado en Protección Personal e Higiene</div>
        <div class="leyenda-item ambito4">Diplomado en Comunicación en Idioma Inglés Básico</div>
        <div class="leyenda-item ambito5">Diplomado en Prevención y Control de Emergencias</div>
        <div class="leyenda-item reconocimiento">Reconocimiento</div>
    </div>

    <div class="grades-section">
        <h2>Ingreso de Notas</h2>
        <div id="gradesInputContainer">
            <!-- Las entradas de notas se generarán aquí por JavaScript -->
        </div>
    </div>

    <script>
        // Definición de los ramos con sus IDs, nombres, bimestres, ámbitos, prerrequisitos y CRÉDITOS
        // Los 'bimestres' se mapean a 'semestre' para la lógica interna (1-10)
        const ramos = [
            // PRIMER AÑO - BIMESTRE I (semestre 1)
            { id: 'orientacion_prevencion', nombre: 'ORIENTACIÓN A LA PREVENCIÓN DE RIESGOS', semestre: 1, ambito: 'ambito1', prereq: [], creditos: 8 },
            { id: 'riesgos_laborales', nombre: 'RIESGOS LABORALES', semestre: 1, ambito: 'ambito1', prereq: [], creditos: 6 },
            { id: 'nivelacion_matematica', nombre: 'NIVELACIÓN DE MATEMÁTICA', semestre: 1, ambito: 'reconocimiento', prereq: [], creditos: 8 },

            // PRIMER AÑO - BIMESTRE II (semestre 2)
            { id: 'gestion_prevencion', nombre: 'GESTIÓN DE LA PREVENCIÓN DE RIESGOS', semestre: 2, ambito: 'ambito1', prereq: [], creditos: 10 },
            { id: 'lectura_planos', nombre: 'LECTURA DE PLANOS', semestre: 2, ambito: 'ambito1', prereq: [], creditos: 6 },
            { id: 'comunicacion_redaccion', nombre: 'COMUNICACIÓN Y REDACCIÓN', semestre: 2, ambito: 'reconocimiento', prereq: [], creditos: 6 },

            // PRIMER AÑO - BIMESTRE III (semestre 3)
            { id: 'tecnicas_investigacion', nombre: 'TÉCNICAS DE INVESTIGACIÓN Y CREACIÓN DE INFORMES', semestre: 3, ambito: 'ambito2', prereq: [], creditos: 8 },
            { id: 'legislacion_accidentes', nombre: 'LEGISLACIÓN DE ACCIDENTES Y ENFERMEDADES PROFESIONALES', semestre: 3, ambito: 'ambito2', prereq: [], creditos: 10 },
            { id: 'tecnologia_informacion', nombre: 'TECNOLOGÍA DE LA INFORMACIÓN', semestre: 3, ambito: 'reconocimiento', prereq: [], creditos: 6 },

            // PRIMER AÑO - BIMESTRE IV (semestre 4)
            { id: 'introduccion_programacion', nombre: 'INTRODUCCIÓN A LA PROGRAMACIÓN', semestre: 4, ambito: 'reconocimiento', prereq: [], creditos: 6 },
            { id: 'procesos_riesgo', nombre: 'PROCESOS DE ALTO Y BAJO RIESGO', semestre: 4, ambito: 'ambito2', prereq: [], creditos: 8 },

            // PRIMER AÑO - BIMESTRE V (semestre 5)
            { id: 'salud_ocupacional', nombre: 'SALUD OCUPACIONAL Y ERGONOMÍA', semestre: 5, ambito: 'ambito2', prereq: [], creditos: 10 },
            { id: 'primeros_auxilios', nombre: 'PRIMEROS AUXILIOS', semestre: 5, ambito: 'ambito2', prereq: [], creditos: 8 },

            // SEGUNDO AÑO - BIMESTRE VI (semestre 6)
            { id: 'ingles1_iplacex', nombre: 'INGLÉS I', semestre: 6, ambito: 'ambito4', prereq: [], creditos: 8 },
            { id: 'quimica_organica', nombre: 'QUÍMICA ORGÁNICA E INORGÁNICA', semestre: 6, ambito: 'ambito3', prereq: [], creditos: 8 },
            { id: 'etica_profesional', nombre: 'ÉTICA PROFESIONAL', semestre: 6, ambito: 'reconocimiento', prereq: [], creditos: 4 },

            // SEGUNDO AÑO - BIMESTRE VII (semestre 7)
            { id: 'ingles2_iplacex', nombre: 'INGLÉS II', semestre: 7, ambito: 'ambito4', prereq: [], creditos: 8 },
            { id: 'elementos_proteccion', nombre: 'ELEMENTOS DE PROTECCIÓN PERSONAL', semestre: 7, ambito: 'ambito3', prereq: [], creditos: 6 },
            { id: 'emprendimiento', nombre: 'EMPRENDIMIENTO', semestre: 7, ambito: 'reconocimiento', prereq: [], creditos: 6 },

            // SEGUNDO AÑO - BIMESTRE VIII (semestre 8)
            { id: 'transporte_sustancias', nombre: 'TRANSPORTE Y ALMACENAMIENTO DE SUSTANCIAS', semestre: 8, ambito: 'ambito5', prereq: [], creditos: 8 },
            { id: 'higiene_industrial', nombre: 'HIGIENE INDUSTRIAL', semestre: 8, ambito: 'ambito3', prereq: [], creditos: 10 },
            { id: 'practica_profesional', nombre: 'PRÁCTICA PROFESIONAL', semestre: 8, ambito: 'reconocimiento', prereq: [], creditos: 1 }, // Prereqs set below

            // SEGUNDO AÑO - BIMESTRE IX (semestre 9)
            { id: 'estadistica', nombre: 'ESTADÍSTICA', semestre: 9, ambito: 'ambito5', prereq: [], creditos: 8 },
            { id: 'psicologia_emergencia', nombre: 'PSICOLOGÍA DE LA EMERGENCIA', semestre: 9, ambito: 'ambito5', prereq: [], creditos: 8 },

            // SEGUNDO AÑO - BIMESTRE X (semestre 10)
            { id: 'administracion_proyectos', nombre: 'ADMINISTRACIÓN DE PROYECTOS', semestre: 10, ambito: 'reconocimiento', prereq: [], creditos: 6 },
            { id: 'proyecto_titulacion', nombre: 'PROYECTO DE TITULACIÓN', semestre: 10, ambito: 'reconocimiento', prereq: [], creditos: 8 }, // Prereqs set below

            // Separators (using 'semestre' for positioning, but they are not real courses)
            { id: 'tecnico_separator', nombre: 'TÉCNICO EN PREVENCIÓN DE RIESGOS', semestre: 8.5, separator: true, creditos: 0 },
            { id: 'titulo_profesional_separator', nombre: 'TÍTULO PROFESIONAL: TÉCNICO EN PREVENCIÓN DE RIESGOS', semestre: 10.5, separator: true, creditos: 0 }
        ];

        // --- Lógica de Prerrequisitos ---
        // Se asume que si un curso "abre" otro, entonces el segundo curso tiene al primero como prerrequisito.
        // PRÁCTICA PROFESIONAL requiere todos los cursos desde el Bimestre I hasta el Bimestre VII.
        const prereqsForPracticaProfesional = ramos
            .filter(ramo => ramo.semestre <= 7 && !ramo.separator && ramo.id !== 'practica_profesional' && ramo.id !== 'proyecto_titulacion')
            .map(ramo => ramo.id);
        const practicaProfesional = ramos.find(r => r.id === 'practica_profesional');
        if (practicaProfesional) {
            practicaProfesional.prereq = prereqsForPracticaProfesional;
        }

        // PROYECTO DE TITULACIÓN requiere todos los cursos desde el Bimestre I hasta el Bimestre IX,
        // Y además requiere PRÁCTICA PROFESIONAL.
        const prereqsForProyectoTitulacion = ramos
            .filter(ramo => ramo.semestre <= 9 && !ramo.separator && ramo.id !== 'proyecto_titulacion')
            .map(ramo => ramo.id);
        const proyectoTitulacion = ramos.find(r => r.id === 'proyecto_titulacion');
        if (proyectoTitulacion) {
            proyectoTitulacion.prereq = [...prereqsForProyectoTitulacion, 'practica_profesional'];
        }

        // Referencias a elementos del DOM
        const contenedorMalla = document.getElementById('malla');
        const ramosAprobadosCountElement = document.getElementById('ramosAprobadosCount');
        const ppaValueElement = document.getElementById('ppaValue');
        const gradesInputContainer = document.getElementById('gradesInputContainer');

        // Cargar datos persistentes de localStorage
        const approvedRamosSet = new Set(JSON.parse(localStorage.getItem('approvedRamos_iplacex')) || []);
        const grades = JSON.parse(localStorage.getItem('mallaGrades_iplacex')) || {};

        // Función para obtener el nombre del año en texto
        function getNombreAño(num) {
            const nombres = ["PRIMER", "SEGUNDO"]; // Solo dos años para esta malla
            return nombres[num - 1] || `AÑO ${num}`;
        }

        // Función para actualizar el contador de ramos aprobados
        function updateApprovedCounter() {
            ramosAprobadosCountElement.textContent = approvedRamosSet.size;
        }

        // Función para calcular y actualizar el PPA
        function calculatePPA() {
            let totalPuntos = 0;
            let totalCreditos = 0;

            ramos.forEach(ramo => {
                const grade = grades[ramo.id];
                // Solo considera ramos que no son separadores y que tienen una nota válida
                if (!ramo.separator && grade !== undefined && grade !== null && !isNaN(grade) && grade >= 1.0 && grade <= 7.0) {
                    totalPuntos += grade * ramo.creditos;
                    totalCreditos += ramo.creditos;
                }
            });

            if (totalCreditos === 0) {
                ppaValueElement.textContent = 'N/A';
            } else {
                const ppa = totalPuntos / totalCreditos;
                ppaValueElement.textContent = ppa.toFixed(2);
            }
        }

        // Función para actualizar el estado 'activo' de todos los ramos
        function updateRamoStates() {
            document.querySelectorAll('.ramo').forEach(ramoEl => {
                const prereqs = JSON.parse(ramoEl.dataset.prereq);
                const cumplePrereqs = prereqs.every(p => approvedRamosSet.has(p));

                if (cumplePrereqs) {
                    ramoEl.classList.add('activo');
                } else {
                    ramoEl.classList.remove('activo');
                    if (ramoEl.classList.contains('aprobado')) {
                        ramoEl.classList.remove('aprobado');
                        approvedRamosSet.delete(ramoEl.dataset.id);
                    }
                }
            });
            localStorage.setItem('approvedRamos_iplacex', JSON.stringify(Array.from(approvedRamosSet)));
            updateApprovedCounter();
            updateGradeInputStates();
            calculatePPA();
        }

        // Función para actualizar el estado (habilitado/deshabilitado) de todos los inputs de notas
        function updateGradeInputStates() {
            document.querySelectorAll('#gradesInputContainer input[type="number"]').forEach(inputEl => {
                const ramoId = inputEl.dataset.id;
                if (approvedRamosSet.has(ramoId)) {
                    inputEl.disabled = false;
                } else {
                    inputEl.disabled = true;
                    inputEl.value = '';
                    delete grades[ramoId];
                    localStorage.setItem('mallaGrades_iplacex', JSON.stringify(grades));
                }
            });
            calculatePPA();
        }

        // Función para manejar el clic en un ramo (marcar/desmarcar como aprobado)
        function toggleAprobado(el) {
            const ramoId = el.dataset.id;
            const wasApproved = el.classList.contains('aprobado');

            if (!el.classList.contains('activo') && !wasApproved) {
                return;
            }

            if (wasApproved) {
                el.classList.remove('aprobado');
                approvedRamosSet.delete(ramoId);
            } else {
                el.classList.add('aprobado');
                approvedRamosSet.add(ramoId);
            }
            
            updateRamoStates();
        }

        // Función para poblar la sección de ingreso de notas
        function populateGradesInput() {
            gradesInputContainer.innerHTML = '';
            ramos.forEach(ramo => {
                if (ramo.separator) return;

                const gradeItem = document.createElement('div');
                gradeItem.className = 'grade-item';
                
                const inputDisabled = !approvedRamosSet.has(ramo.id) ? 'disabled' : '';
                const inputValue = grades[ramo.id] || '';

                gradeItem.innerHTML = `
                    <span>${ramo.nombre} (${ramo.creditos} Créditos):</span>
                    <input type="number" step="0.1" min="1.0" max="7.0" data-id="${ramo.id}" value="${inputValue}" ${inputDisabled}>
                `;
                gradesInputContainer.appendChild(gradeItem);

                gradeItem.querySelector('input').addEventListener('change', (event) => {
                    const value = parseFloat(event.target.value);
                    if (value >= 1.0 && value <= 7.0) {
                        grades[ramo.id] = value;
                    } else {
                        event.target.value = '';
                        delete grades[ramo.id];
                    }
                    localStorage.setItem('mallaGrades_iplacex', JSON.stringify(grades));
                    calculatePPA();
                });
            });
        }

        // --- Lógica de Construcción de la Malla ---
        const totalAños = 2; // Solo 2 años para esta malla (Primer y Segundo Año)

        for (let año = 1; año <= totalAños; año++) {
            const yearGroup = document.createElement('div');
            yearGroup.className = 'year-group';
            contenedorMalla.appendChild(yearGroup);

            const anioDiv = document.createElement('div');
            anioDiv.className = 'anio';
            anioDiv.innerText = `${getNombreAño(año)} AÑO`;
            yearGroup.appendChild(anioDiv);

            const bimestresDelAño = document.createElement('div');
            bimestresDelAño.className = 'bimestres-del-anio';
            yearGroup.appendChild(bimestresDelAño);

            // Determinar los bimestres para cada año
            let bimestreInicial, bimestreFinal;
            if (año === 1) {
                bimestreInicial = 1;
                bimestreFinal = 5;
            } else { // año === 2
                bimestreInicial = 6;
                bimestreFinal = 10;
            }

            for (let i = bimestreInicial; i <= bimestreFinal; i++) {
                const bim = document.createElement('div');
                bim.className = 'bimestre';
                bim.id = 'sem' + i; // Mantener 'sem' para compatibilidad con el ID del ramo
                const h = document.createElement('h3');
                h.textContent = `Bimestre ${i}`;
                bim.appendChild(h);
                bimestresDelAño.appendChild(bim);
            }

            // Inserta el separador de TÉCNICO EN PREVENCIÓN DE RIESGOS después del 1er año (Bimestre 8)
            // Se coloca después del grupo del segundo año, pero antes de los últimos bimestres
            if (año === 2) { // Después del segundo año (que contiene hasta el Bimestre 10)
                const tecnicoSeparator = ramos.find(r => r.id === 'tecnico_separator');
                if (tecnicoSeparator) {
                    const sepDiv = document.createElement('div');
                    sepDiv.className = 'separator';
                    sepDiv.innerText = tecnicoSeparator.nombre;
                    contenedorMalla.appendChild(sepDiv);
                }
            }
        }

        // Añade el título profesional al final de la malla principal
        const tituloProfesionalData = ramos.find(r => r.id === 'titulo_profesional_separator');
        if (tituloProfesionalData) {
            const tituloProfesionalDiv = document.createElement('div');
            tituloProfesionalDiv.className = 'titulo-final';
            tituloProfesionalDiv.innerText = tituloProfesionalData.nombre;
            contenedorMalla.appendChild(tituloProfesionalDiv);
        }

        // --- Renderizado de Ramos y Inicialización ---
        ramos.forEach(ramo => {
            if (ramo.separator) return;

            const div = document.createElement('div');
            div.className = `ramo ${ramo.ambito}`;
            div.dataset.id = ramo.id;
            div.dataset.prereq = JSON.stringify(ramo.prereq);
            div.textContent = ramo.nombre;

            div.onclick = () => toggleAprobado(div);

            if (approvedRamosSet.has(ramo.id)) {
                div.classList.add('aprobado');
            }

            const bimestreElement = document.getElementById('sem' + ramo.semestre);
            if (bimestreElement) {
                bimestreElement.appendChild(div);
            } else {
                console.warn(`Advertencia: No se encontró el elemento para el bimestre ${ramo.semestre} para el ramo ${ramo.nombre}.`);
            }
        });

        // Llama a las funciones de inicialización
        updateRamoStates();
        populateGradesInput();
        calculatePPA();
    </script>

</body>
</html>
