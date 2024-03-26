let form = document.querySelector("form");
let filterSelect = document.getElementById("filterSelect");

const addBtn = document.getElementById("addButton");
let students = [
    { name: "Eman", grade: 50, department: "SD" },
    { name: "Esraa", grade: 90, department: "SD" },
    { name: "Marwa", grade: 96, department: "El" },
    { name: "Omar", grade: 30, department: "OS" },

];
// Add student to students array
function addStudent() {
    const name = document.getElementById("studentName").value;
    const grade = parseInt(document.getElementById("studentGrade").value);
    const department = document.querySelector('input[name="Department"]:checked').value;

    // Validate name and grade
    if (!isValidName(name) || !isValidGrade(grade)) {
        return;
    }

     // Check for duplicate names
     if (isDuplicateName(name)) {
        alert("Student name must be unique.");
        return;
    }

    students.push({ name, grade, department });
    
    // show the inormation of students 
    displayStudentDetails();
}


function displayStudents() {
    const filterValue = document.getElementById("filterSelect").value.toLowerCase();
    const searchValue = document.getElementById("searchTxt").value.toLowerCase();

    const filteredStudents = students.filter(student => {
        return (filterValue === "all" || (filterValue === "success" && student.grade >= 60) || (filterValue === "fail" && student.grade < 60)) &&
            (searchValue === "" || student.name.toLowerCase().includes(searchValue));
    });

    const sortValue = document.getElementById("sortSelect").value;
    if (sortValue === "name") {
        filteredStudents.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase());

    } else if (sortValue === "grade") {
        filteredStudents.sort((a, b) => a.grade - b.grade);
    }

    const table = document.getElementById("studentsTable");
    table.innerHTML = "";

    const headerRow = 
    `<tr><th>Name</th>
    <th>Grade</th>
    <th>Department</th>
    </tr>`;
    const bodyRows = filteredStudents.map((student) => 
    `<tr class="${student.department}">
    <td>${student.name}</td>
    <td>${student.grade}</td>
    <td>${student.department}</td>
    </tr>`);

    table.innerHTML = headerRow + bodyRows.join('');
}

// Validate student name
function isValidName(name) {
    const isValid = name.trim() !== ""; // Check if the name is not empty
    const errorName = document.getElementById("nameError");

    if (isValid) {
        errorName.classList.add("hidden");
    } else {
        errorName.classList.remove("hidden");
    }

    return isValid;
}

// Validate student grade
function isValidGrade(grade) {
    const isValid = !isNaN(grade) && grade >= 0 && grade <= 100;
    const errorGrade = document.getElementById("gradeError");
    errorGrade.style.display = isValid ? "none" : "inline";
    return isValid;
}

// Check for duplicate names
function isDuplicateName(name) {
    return students.some(student => student.name.toLowerCase() === name.toLowerCase());
}
addBtn.addEventListener("click", addStudent);

//student details 
function displayStudentDetails() {
    const detailsDiv = document.getElementById("studentDetails");
    detailsDiv.innerHTML = "<p>Student Details:</p>";

    for (const student of students) {
        detailsDiv.innerHTML = `
        <p>Name: ${student.name}  Grade: ${student.grade}  Department: ${student.department}`;
    }
}


filterSelect.addEventListener("change", displayStudents);

const sortSelect = document.createElement("select");
sortSelect.id = "sortSelect";
sortSelect.innerHTML =`<option value="name">Name</option>
<option value="grade">Grades</option>`;
form.appendChild(sortSelect);
sortSelect.addEventListener("change", displayStudents);






displayStudents();