function fetchAndDisplayData() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#evenementsTable tbody');
      const birthdayDiv = document.querySelector('#anniversaire');

      // Supprimer les lignes existantes dans le tbody
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }

    // Récupérer la date actuelle sans l'heure
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
        
    const currentHours = formatNumber(new Date().getHours());
    const currentMinutes = formatNumber(new Date().getMinutes());
    const currentTime = `${currentHours}:${currentMinutes}`;

    // Parcourir les événements
    data.evenements.forEach(evenement => {
    const evenementDate = new Date(evenement.date);
    evenementDate.setHours(0, 0, 0, 0);
    const evenementHeure = evenement.heure;


    // Vérifier si la date de l'événement égale à la date actuelle et supérieur ou égale à l'heure actuelle
    if (
      evenementDate.getTime() == currentDate.getTime() &&
      evenementHeure >= currentTime
    ) {
      const row = document.createElement('tr');
      const heureCell = document.createElement('td');
      const evenementCell = document.createElement('td');

      heureCell.textContent = evenement.heure;
      evenementCell.textContent = evenement.evenement;

      row.appendChild(heureCell);
      row.appendChild(evenementCell);
      tableBody.appendChild(row);
    }
  });
  
  // Fonction pour formater un nombre avec deux chiffres
    function formatNumber(number) {
      return number.toString().padStart(2, '0');
    }

      // Trouver l'anniversaire le plus proche de la date actuelle
      let prochainAnniversaire = null;
      let joursRestants = Infinity;
      data.anniversaires.forEach(anniversaire => {
        const anniversaireDate = new Date(anniversaire.date);
        anniversaireDate.setFullYear(currentDate.getFullYear()); // Définir l'année actuelle pour la comparaison

        const timeDiff = anniversaireDate - currentDate;
        const jours = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (jours >= 0 && jours < joursRestants) {
          prochainAnniversaire = anniversaire;
          joursRestants = jours;
        }
      });

      // Afficher l'anniversaire le plus proche
      if (prochainAnniversaire) {
        const pElement = document.createElement('p');
        const spanNom = document.createElement('span');
        const spanDate = document.createElement('span');
        const cadeauEmoji = document.createTextNode(' 🎁');

        spanNom.textContent = prochainAnniversaire.anniversaire;
        const anniversaireDate = new Date(prochainAnniversaire.date);
        const jour = anniversaireDate.getDate();
        const mois = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(anniversaireDate);

        spanDate.textContent = `${jour} ${mois}`;

        pElement.textContent = 'Anniversaire de ';
        pElement.appendChild(spanNom);
        pElement.appendChild(document.createElement('br'));
        pElement.appendChild(document.createTextNode('le '));
        pElement.appendChild(spanDate);
        pElement.appendChild(cadeauEmoji);

        // Supprimer les anciens éléments p dans #anniversaire
        while (birthdayDiv.firstChild) {
          birthdayDiv.removeChild(birthdayDiv.firstChild);
        }

        birthdayDiv.appendChild(pElement);
      }
    })
    .catch(error => {
      console.error('Erreur lors du chargement du fichier JSON:', error);
    });
}

// Appeler fetchAndDisplayData une fois au démarrage de la page
fetchAndDisplayData();

// Exécuter fetchAndDisplayData toutes les minutes
setInterval(fetchAndDisplayData, 60000);

