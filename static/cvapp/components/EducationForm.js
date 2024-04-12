
const educationContainer  = document.createElement('div');
educationContainer.innerHTML = `
    <div class="education-container">
                  <div class="row">
                        <div class="form-group col-md-6">
                            <label>School/University</label>
                            <input
                              type="text"
                              class="form-control"
                              name="education_school"
                            />
                          </div>
                        <div class="form-group col-md-6">
                            <label>Degree</label>
                            <input
                              type="text"
                              class="form-control"
                              name="education_degree"
                            />
                          </div>
                    </div>
      
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label>Start Date</label>
                            <input
                              type="date"
                              class="form-control"
                              name="education_start"
                            />
                          </div>
                        <div class="form-group col-md-3">
                            <label>End Date</label>
                            <input
                              type="date"
                              class="form-control"
                              name="education_end"
                            />
                          </div>
                        <div class="form-group col-md-6">
                            <label>City</label>
                            <input
                              type="text"
                              class="form-control"
                              name="education_city"
                            />
                          </div>
                    </div>
      
                <div class="form-group col-md-12">
                    <div class="col2">
                        <label>Description</label>
                        <textarea class="form-control" name="education_description" style="height: 200px!important;"></textarea>
                    </div>

                    <label>Write 200+ characters to increase your chances.</label>
                </div>
              </div>
            </div>
        `;


function EducationForm(event) {
    const divEl = event.target.parentNode.parentNode.parentNode;
    const attr = divEl.getAttribute('opened');
    
    if (!attr) {
      divEl.setAttribute('opened', true);
      educationContainer.style.display ='block';
    } else {
      divEl.removeAttribute('opened');
      educationContainer.style.display = 'none';
    }
    
    divEl.appendChild(educationContainer);
  }