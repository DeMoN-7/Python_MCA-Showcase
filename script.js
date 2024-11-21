document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        name: "Weather Forecasting Using Python",
        description: "A Python-based app that fetches weather details using an API.",
        link: "https://github.com/DeMoN-7/Weather-Forecasting-Using-Python",
      },
      {
        name: "Iris Flower Classification",
        description: "A machine learning project for classifying iris flowers.",
        link: "https://github.com/DeMoN-7/Iris-Flower-Classification",
      },
    ];
  
    const classworks = [
      {
        name: "Java Data Structures",
        description: "Programs on data structures using Java.",
        link: "https://github.com/DeMoN-7/Data-Structures-Java",
      },
    ];
  
    const assignments = [
      {
        name: "Birth-Death Simulation",
        description: "Simulating the birth-death process using Python.",
        link: "#",
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
  