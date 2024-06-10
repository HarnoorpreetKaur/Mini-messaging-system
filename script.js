// Sample array of students
var students = [
    { name: "Harnoor Kaur" },
    { name: "Jasman Boparai" },
    { name: "Tanvi Bawa"}
];

// Function to send messages with half-second intervals
function sendMessages() {
    // Get the messages div from the HTML document
    var messagesDiv = document.getElementById("messages");
    // Get the current time
    var currentTime = new Date().toISOString();
    // Iterate over each student in the students array
    students.forEach(function(student) {
        // Set a timeout to simulate sending messages with a half-second delay
        setTimeout(function() {
            // Construct the message with current time and student's name
            var message = currentTime + " " + student.name + ": Hi " + student.name + ", Merry Christmas.<br>";
            // Append the message to the messages div
            messagesDiv.innerHTML += message;
            // Scroll the messages div to the bottom to show the latest message
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 500); // Delay each message by half a second
    });
}

// Call the function to send messages
sendMessages();




