const educationbox = document.createElement('div');
educationbox.innerHTML = `
        <div class="education-box">
            <div class="content">
                <div onclick="EducationForm(event)" class="inside-box">
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

function EducationBox(event) {
    const container = event.target.parentNode.parentNode;
    const item = educationbox.cloneNode(true);
    container.appendChild(item);
}

function DeleteBox(event) {
    const currentEducationBox = event.target.parentNode.parentNode.parentNode;
    const container = currentEducationBox.parentNode;
    
    container.removeChild(currentEducationBox);
}