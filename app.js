// app.js

// Establish a connection to the WebSocket server
const socket = io.connect('http://127.0.0.1:5000');

// Get reference to the editor (contenteditable div)
const editor = document.getElementById('editor');

// Send the editor content to the server whenever the user types something
editor.addEventListener('input', () => {
    const text = editor.innerHTML;  // Get the current content of the editor
    socket.send(text);  // Send the updated content to the server
});

// Listen for the updated content from the server and update the editor
socket.on('message', function(data) {
    editor.innerHTML = data;  // Update the editor with the new content
});
