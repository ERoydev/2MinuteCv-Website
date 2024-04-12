
async function loadTemplateOnHalf() {
    const div = document.querySelector('.right-side');
    const result = await fetch('template/');
    const template = await result.text();

    div.innerHTML = template
    div.style.transform = 'scale(0.9)';
    div.style.transformOrigin = 'top left'
}

async function downloadPDF(e) {
    document.body.style.zoom = '67%';

    // Downloading
    let downloading = document.querySelector('.template-container');
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
    }

function experienceField(id_v) {
    const Boxes = Array.from(document.querySelectorAll('.experience-box'));
    const currentBox = Boxes[id_v];
    const fieldBoxElement = currentBox.children[1];

    if(currentBox.children[1].value) {
        fieldBoxElement.innerHTML = '';
        fieldBoxElement.value=false;
        return;
    }

    const experienceContainer = document.querySelector('.experience-container');
    const fieldBox = experienceContainer.cloneNode(true);

    fieldBoxElement.appendChild(fieldBox);
    fieldBox.style.display='block';
    fieldBoxElement.value=true;
}

function educationField(id_v) {
    const Boxes = Array.from(document.querySelectorAll('.education-box'));
    const currentBox = Boxes[id_v];
    const fieldBoxElement = currentBox.children[1];

    if(currentBox.children[1].value) {
        fieldBoxElement.innerHTML = '';
        fieldBoxElement.value=false;
        return;
    }

    const experienceContainer = document.querySelector('.education-container');
    const fieldBox = experienceContainer.cloneNode(true);

    fieldBoxElement.appendChild(fieldBox);
    fieldBox.style.display='block';
    fieldBoxElement.value=true;

}

function loadSkills() {
  const divEl = document.getElementsByClassName('skills-forms')[0];
  if(divEl.style.display == 'none') {
    divEl.style.display='inline'

  } else {
    divEl.style.display='none'
  }
}

function getCsrfToken() {
    const csrftoken = document.querySelector('[name="csrfmiddlewaretoken"]').value;
    return csrftoken;
}

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('template/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCsrfToken(),
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        loadTemplateOnHalf();
    })
    .catch(error => {
        console.log('Error submiting form', error)
    });

}