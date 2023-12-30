
function generate() {
  let btn = document.querySelector('#download');
  btn.addEventListener('click', downloadPDF)

  async function downloadPDF(e) {
    document.body.style.zoom = '67%';

    let downloadButton = document.querySelector('#download');
    downloadButton.textContent = "Currently downloading...."

    // Downloading
    let downloading = document.querySelector('.container');
    let doc = new jsPDF(1, "pt");

    await html2canvas(downloading, {
        allowTaint: true,
        useCORS: true,
        width: 1175,
        height: 1320,
    }).then((canvas) => {

        // Canvas (Convert to PNG)
        doc.addImage(canvas.toDataURL("image/png"), 'PNG', 0, 0, 700, 842);
    })

    document.body.style.zoom = '100%';
    doc.save("Document.pdf");
    btn.textContent = "Prind And Generate PDF";
  }
}

