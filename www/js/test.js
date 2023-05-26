/*  SLIDER PHOTO  */
var sliderIndex = 0;
var slider = document.getElementById("slider");
var images = slider.getElementsByTagName("img");

setInterval(function() {  // fonction slider photo
  images[sliderIndex].style.visibility = "hidden"; // approprie le style visible en caché
  sliderIndex++;  // incrémente de 1 la variable sliderIndex 
  if (sliderIndex >= images.length) {
    sliderIndex = 0;
  }
  images[sliderIndex].style.visibility = "visible"; // style.display = "block";
}, 5000);



/*        SETTINGS BUTTON     */

// sélectionne l'élément <a>
var aElement = document.getElementById("reglage").getElementsByTagName("a")[0];

// initialise la variable pour stocker le temps
var pressTimer = null;

// ajoute un événement pour commencer le chronomètre lorsque la touche est enfoncée
aElement.addEventListener("touchstart", function(e) {
  // empêche le défilement de la page
  e.preventDefault();

  // démarre le chronomètre
  pressTimer = setTimeout(function() {
    // ouvre la balise <a> après 5 secondes
    window.location.href = aElement.href;
  }, 5000);
});

// ajoute un événement pour annuler le chronomètre si la touche est relâchée avant 5 secondes
aElement.addEventListener("touchend", function(e) {
  clearTimeout(pressTimer);
});

// ajoute également un événement pour annuler le chronomètre si la touche quitte l'élément <a>
aElement.addEventListener("touchcancel", function(e) {
  clearTimeout(pressTimer);
});


/*    SLIDER IMG IMPORT   

// Récupérer l'élément DOM du slider
const slider = document.getElementById("slider");

// Récupérer le chemin d'accès au dossier des images
const folderPath = cordova.file.externalDataDirectory + "photos/";

// Lister les fichiers dans le dossier des images
window.resolveLocalFileSystemURL(folderPath, function(dirEntry) {
  const directoryReader = dirEntry.createReader();
  directoryReader.readEntries(function(entries) {

    // Parcourir les fichiers dans le dossier des images
    entries.forEach(function(entry) {
      if (entry.isFile) {

        // Créer un élément img pour chaque fichier trouvé
        const img = document.createElement("img");
        img.src = entry.toURL();
        img.classList.add("image");

        // Ajouter l'élément img au slider
        slider.appendChild(img);
      }
    });

  }, function(error) {
    console.error("Erreur lors de la lecture du dossier des images :", error);
  });
}, function(error) {
  console.error("Erreur lors de l'accès au dossier des images :", error);
});
*/