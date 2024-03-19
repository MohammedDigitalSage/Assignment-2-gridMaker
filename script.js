// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Function to add a row
function addR() {
    let table = document.getElementById("grid");
    let newRow = table.insertRow();
    numRows++;

    // If it's the first row, set number of columns to 1
    if (numCols === 0) {
        numCols = 1;
    }

    // Add cells to the new row
    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        // Add event listener to each cell for color selection
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
    }
}

// Function to add a column
function addC() {
    let table = document.getElementById("grid");
    numCols++;

    // If it's the first column and there are no rows, add a row
    if (numRows === 0) {
        addR();
    } else {
        // Add cells to each row
        for (let i = 0; i < numRows; i++) {
            let newRow = table.rows[i];
            let newCell = newRow.insertCell(0);
            // Add event listener to each cell for color selection
            newCell.addEventListener("click", function() {
                newCell.style.backgroundColor = colorSelected;
            });
        }
    }
}

// Function to remove a row
function removeR() {
    let table = document.getElementById("grid");
    if (numRows > 0) {
        table.deleteRow(numRows - 1);
        numRows--;
    }
}

// Function to remove a column
function removeC() {
    let table = document.getElementById("grid");
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
    }
}

// Function to set the selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
}

// Function to fill all uncolored cells with selected color
function fillU() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            if (!cells[j].style.backgroundColor || cells[j].style.backgroundColor === "white") {
                cells[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Function to fill all cells with selected color
function fillAll() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Function to clear all cells
function clearAll() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = "white";
        }
    }
}
