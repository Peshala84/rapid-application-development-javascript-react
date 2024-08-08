// Import the fs (file system) module
const fs = require('fs');

// Read the JSON file asynchronously
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    
    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Access and display the "name" and "age" properties
        console.log(`Name: ${jsonData.name}`);
        console.log(`Age: ${jsonData.age}`);
    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});
