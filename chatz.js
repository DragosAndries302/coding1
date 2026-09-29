const chatbotResponses={
  "Hello!":"Hi pal",
  "How are you?":"Good, what about you?",
  "What is your name?":"My name is Francisco Jose Cienfuegos Todd",
  "Can you help me with my homework?":"No, do it yourself",
  "Bye!":"Bye pal",
  "default":"Rephrase that please"

};

function handleUSerInput(event) {
  if(event.key=="Enter"){
    const userInput=document.getElementById("userInput").value;
    const chat=document.getElementById("chat");

    // Clear the input field  
    document.getElementById("userInput").value"";

    // Display user's message 
    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Get the chatbot response
    const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];

    // Display chatbot response
    chat.innerHTML += `<p><strong>Cheese:</strong> ${response}</p>`;
  }
}
