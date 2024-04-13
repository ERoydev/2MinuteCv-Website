function createExperienceItem () {
    const experienceContainer  = document.createElement('div');
    experienceContainer.classList.add('experience-container');
    experienceContainer.style.display='block';
    experienceContainer.innerHTML = `
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Job Title</label>
        
                            <input
                            type="text"
                            class="form-control"
                            name="experience_job_title"
                            />
                        </div>
        
                        <div class="form-group col-md-6">
                            <label>Employer</label>
        
                            <input
                            type="text"
                            class="form-control"
                            name="experience_employer"
                            />
                        </div>
        
                    </div>
        
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label>Start Date</label>
        
                            <input
                            type="date"
                            class="form-control"
                            name="experience_start"
                            />
                        </div>
        
                        <div class="form-group col-md-3">
                            <label>End Date</label>
        
                            <input
                            type="date"
                            class="form-control"
                            name="experience_end"
                            />
                        </div>
        
                        <div class="form-group col-md-6">
                            <label>City</label>
        
                            <input
                            type="text"
                            class="form-control"
                            name="experience_city"
                            />
                        </div>
                    </div>
        
                    <div class="form-group col-md-12">
                        <div class="col2">
                            <label>Description</label>
        
                            <textarea class="form-control" name="experience_description" style="height: 200px!important;"></textarea>
                        </div>
        
                        <label>Write 200+ characters to increase your chances.</label>
                    </div>
            `;
        return experienceContainer;
};


function ExperienceForm(event) {
    const divEl = event.target.parentNode.parentNode.parentNode;
    const experienceItem = createExperienceItem();
    divEl.appendChild(experienceItem)
};

function openExperienceForm(event) {
    const currentBox = event.target.parentNode.parentNode.parentNode;
    const currentExperienceContainer = currentBox.querySelector('.experience-container');

    if (!currentExperienceContainer) {
        ExperienceForm(event);
    } else {
        if (currentExperienceContainer.style.display == 'block') {
            currentExperienceContainer.style.display='none';
        } else {
            currentExperienceContainer.style.display='block';
        }
    }
};