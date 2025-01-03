const textElement = document.querySelector(".inner-text");
const lines = ["Welcome to the Portfolio","I am Siva Prasanna", "a Btech student", "explore my projects and achievements"]; // Array of lines
let lineIndex = 0; // Track the current line
let charIndex = 0; // Track the current character
let isTyping = true; // Typing or erasing state

function typeText() {
    if (isTyping) {
        // Typing logic
        textElement.textContent += lines[lineIndex][charIndex];
        // lineIndex++;
        charIndex++;

        // When a line is fully typed
        if (charIndex === lines[lineIndex].length) {
            isTyping = false; // Start erasing
            setTimeout(typeText, 1000); // Pause before erasing
            return;
        }
    } else {
        // Erasing logic
        textElement.textContent = textElement.textContent.slice(0, -1);
        charIndex--;

        // When a line is fully erased
        if (charIndex === 0) {
            isTyping = true; // Start typing
            lineIndex = (lineIndex + 1) % lines.length; // Move to the next line
        }
    }

    // Control the typing/erasing speed
    setTimeout(typeText, isTyping ?100 : 100);
}

// Start the animation
typeText();
