function createEducationItem () { 
  const educationContainer  = document.createElement('div');
  educationContainer.classList.add('education-container');
  educationContainer.style.display='block';
  educationContainer.innerHTML = `
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
          `;

        return educationContainer;
}  

function EducationForm(event) {
    const divEl = event.target.parentNode.parentNode.parentNode;
    const educationItem = createEducationItem();
    divEl.appendChild(educationItem);
  }


function openEducationForm(event) {
    const currentBox = event.target.parentNode.parentNode.parentNode;
    const currentEducationContainer = currentBox.querySelector('.education-container');

    if (!currentEducationContainer) {
        EducationForm(event);
    } else {
        if (currentEducationContainer.style.display == 'block') {
            currentEducationContainer.style.display='none';
        } else {
            currentEducationContainer.style.display='block';
        }
    }
};