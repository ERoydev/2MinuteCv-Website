
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