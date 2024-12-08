// Asegúrate de incluir la biblioteca html2pdf.js en tu proyecto.
// Puedes añadirla con un enlace CDN:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>

// Función para descargar la página como PDF
function downloadPageAsPDF() {
    // Seleccionar el contenido que deseas exportar a PDF
    const element = document.body; // Puedes especificar otro elemento, como un div específico

    // Opciones de configuración para el PDF
    const options = {
        margin: 1, // Márgenes en cm
        filename: 'pagina-web.pdf', // Nombre del archivo PDF
        image: { type: 'jpeg', quality: 0.98 }, // Calidad de las imágenes
        html2canvas: { scale: 2 }, // Mejora la resolución del PDF
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' } // Configuración del documento PDF
    };

    // Generar y descargar el PDF
    html2pdf().set(options).from(element).save();
}

// Crear un botón de descarga y agregarlo dinámicamente
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

// Agregar evento al botón
downloadButton.addEventListener('click', downloadPageAsPDF);
