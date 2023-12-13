const textarea = document.getElementById("textarea");

function f2(e) {
  if (textarea.style.fontWeight == "bold") {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
  }
}

function f3(e) {
  if (textarea.style.fontStyle == "italic") {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
  }
}

function f4(e) {
  if (textarea.style.textDecoration == "underline") {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = "underline";
    e.classList.add("active");
  }
}

function f8(e) {
  if (textarea.style.textTransform == "uppercase") {
    textarea.style.textTransform = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "uppercase";
    e.classList.add("active");
  }
}

function f9(e) {
  textare;
}

function f10(e) {
  let value = e.value;
  textarea.style.color = value;
}

window.addEventListener("load"),
  () => {
    textarea.value = "";
  };


function loadSkills() {
  const divEl = document.getElementsByClassName('skills-forms')[0];
  if(divEl.style.display == 'none') {
    divEl.style.display='inline'

  } else {
    divEl.style.display='none'
  }
}
