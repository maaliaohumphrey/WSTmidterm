const enrolleeForm = document.getElementById("enrollee-form");
const enrolleeTable = document.getElementById("enrollee-table");
const enrolleeList = document.getElementById("enrollee-list");
const searchBar = document.getElementById("search-bar");

// Array to store enrollee data
const enrollees = [];

// Function to add an enrollee to the table
function addEnrolleeToTable(enrollee) {
    const newRow = enrolleeList.insertRow();
    newRow.innerHTML = `
        <td>${enrollee.firstName}</td>
        <td>${enrollee.middleName}</td>
        <td>${enrollee.lastName}</td>
        <td>${enrollee.age}</td>
        <td>${enrollee.gender}</td>
        <td>${enrollee.birthday}</td>
        <td>${enrollee.course}</td>
        <td>${enrollee.schoolYear}</td>
        <td>
            <button onclick="editEnrollee(${enrolleeList.rows.length - 1})">Edit</button>
            <button onclick="deleteEnrollee(${enrolleeList.rows.length - 1})">Delete</button>
        </td>
    `;
}

// Function to add a new enrollee
function addEnrollee() {
    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;
    const course = document.getElementById("course").value;
    const schoolYear = document.getElementById("school-year").value;

    const enrollee = {
        firstName,
        middleName,
        lastName,
        age,
        gender,
        birthday,
        course,
        schoolYear,
    };

    enrollees.push(enrollee);
    addEnrolleeToTable(enrollee);

    // Clear the form inputs
    enrolleeForm.reset();
}

// Function to edit an enrollee
function editEnrollee(index) {
    // You can implement the edit functionality here
    // Update the table and enrollees array with the edited data
}

// Function to delete an enrollee
function deleteEnrollee(index) {
    enrolleeList.deleteRow(index);
    enrollees.splice(index, 1);
}

// Function to search enrollees by name
function searchEnrollees() {
    const query = searchBar.value.toLowerCase();
    const filteredEnrollees = enrollees.filter((enrollee) => {
        const fullName = `${enrollee.firstName} ${enrollee.middleName} ${enrollee.lastName}`.toLowerCase();
        return fullName.includes(query);
    });

    // Clear the table
    enrolleeList.innerHTML = "";

    // Re-populate the table with search results
    filteredEnrollees.forEach((enrollee) => {
        addEnrolleeToTable(enrollee);
    });
}

enrolleeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addEnrollee();
});

searchBar.addEventListener("input", searchEnrollees);
