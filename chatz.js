
const chatbotResponses={
  // Greetings
  "hello":"Hi pal",
  "how are you":"Good, what about you?",
  "what is your name":"My name is Francisco Jose Cienfuegos Todd",
  "can you help me with my homework":"No, do it yourself",
  "what is your favourite animal":"A chicken",
  "what is your favourite subject at school":"Coding of course",
  "how old are you":"Old enough boy",
  "do you like school":"Mr. McClean give me more frees",
  "what is your favourite colour":"Blue",
  "bye":"Bye pal",

  // More general questions
  "hi":"Hello there",
  "good morning":"Good morning pal",
  "good night":"Sleep well",
  "where are you from":"I come from the internet",
  "what is your favourite food":"Chicken nuggets",
  "what is your favourite sport":"Football",
  "are you real":"Of course I am real",
  "what are you doing":"Talking to you",
  "tell me a joke":"Why did the chicken cross the road? To get to the other side",
  "thank you":"You're welcome pal",

  // Default response
  "default":"Rephrase that please"
};

function handleUserInput(event) {

  if(event.key=="Enter"){

    // Get the user's message
    const userInput=document.getElementById("userInput").value;

    // Find the chat area
    const chat=document.getElementById("chat");

    document.getElementById("userInput").value="";

    // Display user's message
    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Get the chatbot response
    const response = chatbotResponses[userInput.toLowerCase().trim()] || chatbotResponses["default"];

    // Display chatbot response
    chat.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;
  }
}

    chat.innerHTML += `<p><strong>Cheese:</strong> ${response}</p>`;
  }
}
