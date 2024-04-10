// Array of names
var names = ["John", "Jane", "Jack", "Jill", "James", "Alice", "Bob"];

// Loop over the array of names
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];
    
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toUpperCase() === 'J') {
        // Print 'Goodbye' to the console
        console.log("Goodbye " + name);
    } else {
        // Print 'Hello' to the console
        console.log("Hello " + name);
    }
}