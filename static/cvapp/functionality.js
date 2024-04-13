
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

function educationFormData(formData) {
   const obj = {};

    const educationFields = ['education_school',
            'education_degree',
            'education_start',
            'education_end',
            'education_city', 
            'education_description'
        ]
    
    let serial = 1;
    let counter = 0;
    for(let item of formData) {
        if(educationFields.includes(item[0])) {
            obj[`${item[0]}${serial}`] = item[1]
            counter += 1

            if (counter == 6) {
                counter = 0;
                serial += 1;
            }
        }
    }

    return obj
}
function experienceFormData(formData) {
    const obj = {};

    const experienceFields = ['experience_job_title',
            'experience_employer',
            'experience_start',
            'experience_end',
            'experience_city', 
            'experience_description'
        ]
    
    let serial = 1;
    let counter = 0;
    for(let item of formData) {
        if(experienceFields.includes(item[0])) {
            obj[`${item[0]}${serial}`] = item[1]
            counter += 1

            if (counter == 6) {
                counter = 0;
                serial += 1;
            }
        }
    }

    return obj
}

function deleteFromFinalObject(data) {
    const propertiesToRemove = [
            'experience_job_title',
            'experience_employer',
            'experience_start',
            'experience_end',
            'experience_city', 
            'experience_description',
            'csrfmiddlewaretoken',
            'education_school',
            'education_degree',
            'education_start',
            'education_end',
            'education_city', 
            'education_description',
        ]

    for (const prop of propertiesToRemove) {
        delete data[prop];
    }
    return data;
}

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const experienceData = experienceFormData(formData);
    console.log(experienceData)
    const educationData = educationFormData(formData);
    console.log(educationData)
    let data = Object.fromEntries(formData.entries());
    data = {...deleteFromFinalObject(data), ...experienceData, ...educationData};
    console.log(data)

    fetch('template/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': getCsrfToken(),
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        loadTemplateOnHalf();
    })
    .catch(error => {
        console.log('Error submiting form', error)
    });

}