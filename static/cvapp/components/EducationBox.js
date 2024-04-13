function createEducationBox () {
    const educationbox = document.createElement('div');
    educationbox.innerHTML = `
            <div class="education-box">
                <div class="content">
                    <div onclick="openEducationForm(event)" class="inside-box">
                        <p class="education-type">Add your education</p>
                        <small class="study-time">Start - End date</small>
                        <i class="fa-solid fa-arrow-down-short-wide dropdown-btn"></i>
                    </div>
                </div>
    
                <div class="trash">
                    <i class="fa-solid fa-trash" onclick="DeleteBox(event)"></i>
                </div>
            </div>
        `;

    return educationbox;

}

function EducationBox(event) {
    const EducationContainer = event.target.parentNode.parentNode;
    const Educationitem = createEducationBox();
    EducationContainer.appendChild(Educationitem);
}

function DeleteBox(event) {
    const currentEducationBox = event.target.parentNode.parentNode.parentNode;
    const container = currentEducationBox.parentNode;
    
    container.removeChild(currentEducationBox);
}