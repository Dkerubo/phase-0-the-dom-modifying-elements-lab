// Write your code here!

// Remove the <main> element with id main.
// Create a new <h1> element and assign it to the newHeader variable.
// Set the id of the new <h1> element to victory.
// Set the content of the <h1> element to "YOUR-NAME is the champion", replacing "YOUR-NAME" with your actual name.
 
// Step 1: Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
main.remove();

// Step 2: Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Step 3: Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Step 4: Set the inner HTML content of the <h1> to "YOUR-NAME is the champion"
newHeader.innerHTML = 'Damaris Kerry is the champion';

// Append the new header to the body (if needed)
document.body.append(newHeader);
