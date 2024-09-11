// Event listener untuk form Luas segitiga
document.getElementById('area-form-tri').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Retrieve input values from the form
    const base = parseFloat(document.getElementById('tri-base').value);
    const height = parseFloat(document.getElementById('tri-height').value);

    // Calculate area
    const area = (base * height) / 2;

    // Display the calculated area
    document.getElementById('display-tri-base').textContent = base.toFixed(1);
    document.getElementById('display-tri-height').textContent = height.toFixed(1);
    document.getElementById('tri-area').textContent = area.toFixed(2);
});

// Event listener untuk form Keliling
document.getElementById('perimeter-form-tri').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Retrieve input values from the form
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    // Check if all sides form a valid triangle
    if (isValidTriangle(side1, side2, side3)) {
        // Calculate perimeter
        const perimeter = side1 + side2 + side3;

        // Display the calculated perimeter
        document.getElementById('perimeter-result').textContent = perimeter.toFixed(2);
    } else {
        alert('Nilai sisi-sisi tidak membentuk segitiga yang valid.');
    }
});

// Function to check if the given sides form a valid triangle
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Luas jajar genjang
document.getElementById('area-form-par').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Retrieve input values from the form
    const parbase = parseFloat(document.getElementById('par-base').value);
    const parheight = parseFloat(document.getElementById('par-height').value);

    // Calculate area
    const pararea = (parbase * parheight);

    // Display the calculated area
    document.getElementById('display-par-base').textContent = parbase.toFixed(1);
    document.getElementById('display-par-height').textContent = parheight.toFixed(1);
    document.getElementById('par-area').textContent = pararea.toFixed(2);
});


//Keliling Jajar Genjang
document.getElementById('perimeter-form-par').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Retrieve input values from the form
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    

    const perimeter = 2 * (side1 + side2);

    // Display the calculated parallelogram perimeter
    document.getElementById('perimeter-result-par').textContent = perimeter.toFixed(2);
    
});