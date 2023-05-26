const fs = require('fs');

// Charger les données depuis le fichier data.json
const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);


// Définir la limite de date en reculant d'un mois
const limiteDate = new Date();
limiteDate.setMonth(limiteDate.getMonth() - 1);

// Filtrer les événements qui sont plus récents que la limite de date
const nouveauxEvenements = data.evenements.filter(evenement => {
  const evenementDate = new Date(evenement.date);
  return evenementDate >= limiteDate;
});

// Mettre à jour les événements dans les données
data.evenements = nouveauxEvenements;

// Enregistrer les données mises à jour dans le fichier data.json
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

console.log('Événements datant d\'un mois supprimés avec succès.');
