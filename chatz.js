const chatbotResponses={
  "hello":"Hi pal",
  "how are you":"Good, what about you?",
  "what is your name":"My name is Francisco Jose Cienfuegos Todd",
  "can you help me with my homework":"No, do it yourself",
  "what is your favourite animal":"A chicken",
  "what is your favourite subject at school":"Coding of course",
  "how old are you":"Old enough boy",
  "do you like school":"Mr. Mclean give me more frees"
  "what is your favourite colour":"Blue", 
  "bye":"Bye pal",
  "default":"Rephrase that please"

};

function handleUserInput(event) {
  if(event.key=="Enter"){
    const userInput=document.getElementById("userInput").value;
    const chat=document.getElementById("chat");

    // Clear the input field  
    document.getElementById("userInput").value="";

    // Display user's message 
    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Get the chatbot response
    const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];

    // Display chatbot response
    chat.innerHTML += `<p><strong>Cheese:</strong> ${response}</p>`;
  }
}
