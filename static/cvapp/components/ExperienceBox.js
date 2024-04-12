const experiencebox = document.createElement('div');
experiencebox.innerHTML = `
    <div class="experience-box">
        <div class="content">
            <div onclick="ExperienceForm(event)" class="inside-box">
                <p class="profession">Add your profession</p>
                <small class="time-working">Start - End date</small>
                <i class="fa-solid fa-arrow-down-short-wide dropdown-btn"></i>
            </div>
        </div>

        <div class="trash">
            <i class="fa-solid fa-trash" onclick="DeleteBox(event)"></i>
        </div>
    </div>
    `;

function ExperienceBox(event) {
    const container = event.target.parentNode.parentNode;
    const item = experiencebox.cloneNode(true);
    container.appendChild(item);
}

function DeleteBox(event) {
    const currentExperienceBox = event.target.parentNode.parentNode.parentNode;
    const container = currentExperienceBox.parentNode;
    
    container.removeChild(currentExperienceBox);
}