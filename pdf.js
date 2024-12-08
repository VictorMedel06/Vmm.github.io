// Asegúrate de incluir la biblioteca html2pdf.js en tu proyecto.
// Puedes añadirla con un enlace CDN:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>

// Función para descargar la página como PDF
function downloadPageAsPDF() {
    const element = document.body; // Seleccionar todo el contenido de la página
    const options = {
        margin: 1,
        filename: 'pagina-web.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}

// Crear un botón de descarga PDF
const downloadButton = document.createElement('button');
downloadButton.textContent = 'Descargar como PDF';
downloadButton.style.position = 'fixed';
downloadButton.style.top = '10px';
downloadButton.style.right = '10px';
downloadButton.style.padding = '10px 15px';
downloadButton.style.backgroundColor = '#007BFF';
downloadButton.style.color = 'white';
downloadButton.style.border = 'none';
downloadButton.style.borderRadius = '5px';
downloadButton.style.cursor = 'pointer';
downloadButton.style.zIndex = '1000';
document.body.appendChild(downloadButton);

downloadButton.addEventListener('click', downloadPageAsPDF);

// Crear un botón para cambiar idioma
const languageButton = document.createElement('button');
languageButton.textContent = 'Cambiar a Inglés';
languageButton.style.position = 'fixed';
languageButton.style.top = '10px';
languageButton.style.left = '10px';
languageButton.style.padding = '10px 15px';
languageButton.style.backgroundColor = '#28A745';
languageButton.style.color = 'white';
languageButton.style.border = 'none';
languageButton.style.borderRadius = '5px';
languageButton.style.cursor = 'pointer';
languageButton.style.zIndex = '1000';
document.body.appendChild(languageButton);

// Función para cambiar el idioma de la página
function switchToEnglish() {
  window.location.href = "/english/index english.html"; // Ruta correcta al archivo traducido
}

function switchToSpanish() {
  window.location.href = "/index.html"; // Ruta de la versión en español
}

languageButton.addEventListener('click', switchToEnglish);



backToSpanishButton.addEventListener('click', switchToSpanish);
