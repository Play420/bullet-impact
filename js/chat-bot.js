const knowledgeBase = {
    estrategias_solo: "Para solo, prioriza el conocimiento del mapa y la gestión de recursos. En dúo, comunica y comparte loot. En escuadra, define roles y mantén una buena comunicación.",
    armas : "El AWM es conocido por su alto daño y largo alcance. La Crossbow es silenciosa pero tiene un tiempo de recarga lento.",
    tácticas : "Utiliza edificios para cobertura y mantén siempre una ruta de escape.",
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    
    const chatWindow = document.getElementById('chatWindow');
    
    const userMessage = document.createElement('div');
    userMessage.textContent = `Tú: ${userInput}`;
    
    chatWindow.appendChild(userMessage);
    
    const botResponse = document.createElement('div');
    
    if (knowledgeBase[userInput]) {
        botResponse.textContent = `Bot: ${knowledgeBase[userInput]}`;
    } else {
        botResponse.textContent = "Bot: Lo siento, no tengo información sobre eso.";
    }
    
    chatWindow.appendChild(botResponse);
    
    document.getElementById('userInput').value = '';
}