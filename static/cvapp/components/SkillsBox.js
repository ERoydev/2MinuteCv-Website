const skillItem = document.createElement('div');
skillItem.innerHTML = `
    <div class="row skills-row">
        <div class="form-group col-md-6">
            <label>Skill</label>
            <input
                type="text"
                class="form-control"
                name="skill_name1"
            />
        </div>

        <div class="form-group col-md-6">
            <label>Skill Level</label>
            <input
                type="range"
                class="form-range"
                name="skill_range1"
            />
        </div>

        <div class="trash">
            <i class="fa-solid fa-trash" onclick="DeleteSkillBox(event)"></i>
        </div>
    </div>     
`;



function SkillsBox(event) {
    const container = event.target.parentNode.parentNode.querySelector('.skills-container');
    const newItem = skillItem.cloneNode(true);
    container.appendChild(newItem);
}

function DeleteSkillBox(event) {
    const currentSkillBox = event.target.parentNode.parentNode.parentNode;
    const container = currentSkillBox.parentNode;

    container.removeChild(currentSkillBox);

}