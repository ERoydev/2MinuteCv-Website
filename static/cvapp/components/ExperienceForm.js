
const experienceContainer  = document.createElement('div');
experienceContainer.innerHTML = `
    <div class="experience-container">
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
    
                        <textarea class="form-control" style="height: 200px!important;"></textarea>
                    </div>
    
                    <label>Write 200+ characters to increase your chances.</label>
                </div>
            </div>


        `
function ExperienceForm(event) {
    const divEl = event.target.parentNode.parentNode.parentNode;
    const attr = divEl.getAttribute('opened');

    if (!attr) {
        divEl.setAttribute('opened', true);
        divEl.appendChild(experienceContainer);
    } else {
        divEl.removeAttribute('opened');
        divEl.removeChild(experienceContainer);
    }
}