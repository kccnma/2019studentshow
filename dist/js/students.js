//todo THIS IS THE STUDENT SELECTOR GRID

// //! Selected State
const options = document.querySelectorAll('.options li');
const allStudents = document.querySelector('#all-students');
const designers = document.querySelector('#designers');
const animators = document.querySelector('#animation')

//! Student grid populate data
const studentBox = document.querySelectorAll('.student-box');

studentBox.forEach(box => {
    const name = box.querySelector('.name');
    const overlay = box.querySelector('.overlay');
    // const insta = box.querySelector('.insta');
    const website = box.querySelector('.website');

    studentIndex = box.classList[1];
    const studentName = students[studentIndex];

    //? Populate Data here
    if (box.classList.contains = studentIndex) {
        name.innerHTML = studentName.name;
        box.style.backgroundImage = `url(./img/${studentName.img})`;
        overlay.style.backgroundImage = `url(./img/${studentName.altImg})`;
        website.setAttribute('href', `http://${studentName.website}`);
    }

})

//todo Use MAP and FILTER to show different majors
// Filter through students and major selected and return them
// else display none
