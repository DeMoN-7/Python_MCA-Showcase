document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        name: "Weather Forecasting Using Python",
        description: "A Python-based app that fetches weather details using an API.",
        link: "https://github.com/DeMoN-7/Weather-Forecasting-Using-Python",
      },
      {
        name: "Stock Price Tracker",
        description: "A Python-based app that fetches stock prices detail using an API.",
        link: "https://github.com/DeMoN-7/Stock-Price-Tracker-using-Python",
      },
      {
        name: "Precision Click Game",
        description: "A Python-based game where you click on a moving target to score points. It tests your precision and speed.",
        link: "https://github.com/DeMoN-7/Precision-Click-Game",
    },
    {
      name: "Simple Calculator",
      description: "A basic calculator app built using Python and Tkinter for performing arithmetic operations.",
      link: "https://github.com/DeMoN-7/Simple-GUI-Calculator",
  },
  
  
    
    ];
  
    
  
   
  
    function populateSection(sectionId, data) {
      const section = document.getElementById(sectionId);
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank">View on GitHub</a>
        `;
        section.appendChild(card);
      });
    }
  
    populateSection('project-list', projects);
    populateSection('classwork-list', classworks);
    populateSection('assignment-list', assignments);
  });
  