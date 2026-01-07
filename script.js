const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfL6SrnZFLrJlrLBCAUo7jeZrO1kkqPuc-Vdze43jEQFidsOUyRT7_iVF1QJMSn_6ZyzXm9YxAZO1_/pub?output=csv";

fetch(URL)
    .then(res => res.text())
    .then(data => {
        const filas = data.split("\n").slice(1);
        const catalogo = document.getElementById("catalogo");

        filas.forEach(fila => {
            const columnas = fila.split(",");

            const modelo = columnas[0];
            const almacenamiento = columnas[1];
            const ram = columnas[2];
            const precio = columnas[3];
            const detalles = columnas[4];
            const estado = columnas[5];

            // Si tiene algo en "estado", NO se muestra
            if (estado && estado.trim() !== "") return;

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <!-- TITULO -->
                <div class="titulo-celular">
                    ${modelo}
                </div>

                <!-- INFO -->
                <div class="info-row">

                    <!-- MEMORIA / RAM -->
                    <div class="info-left">
                        <div class="btn-info">
                            <span class="label">MEMORIA:</span>
                            <span class="value">${almacenamiento}</span>
                        </div>
                        <div class="btn-info">
                            <span class="label">RAM:</span>
                            <span class="value">${ram}</span>
                        </div>
                    </div>

                    <!-- PRECIO -->
                    <div class="info-center">
                        <span class="precio">${precio}</span>
                    </div>

                    <!-- BOTONES -->
                    <div class="info-right">
                        <img src="img/plus.png" class="btn-icon" alt="+">
                        <img src="img/whatsapp.png" class="btn-icon" alt="WhatsApp">
                    </div>

                </div>

                <!-- LINEA -->
                <div class="separador"></div>
            `;

            catalogo.appendChild(card);
        });
    });

// MODAL
const modal = document.getElementById("modal");
const texto = document.getElementById("modal-texto");
document.getElementById("cerrar").onclick = () => modal.style.display = "none";

function verMas(detalle) {
    texto.innerText = detalle;
    modal.style.display = "block";
}

window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
}
