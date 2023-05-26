// Pourcentage de l'input range 
var allRanges = document.querySelectorAll(".range-wrap");
for (var i = 0; i < allRanges.length; i++) {
    var wrap = allRanges[i];
    var range = wrap.querySelector(".range");
    var bubble = wrap.querySelector(".bubble");
 
    range.addEventListener("input", function() {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
};

function setBubble(range, bubble) {
    var val = range.value;
    var min = range.min ? range.min : 0;
    var max = range.max ? range.max : 100;
    var newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val + "%";
}


document.addEventListener("deviceready", onDeviceReady, false);
var z;

function onDeviceReady() {
    var images = document.querySelectorAll("img");
    for (var i = 0; i < images.length; i++) {
        var imageName = images[i].src.split("/").pop();
        imageName = imageName.split(".")[0];
        images[i].addEventListener("touchstart", function() {
            for (var j = 1; j < images.length; j++) {
                if (images[j] !== this) {
                    images[j].classList.add("grayscale");
                } else {
                    images[j].classList.remove("grayscale");
                    document.getElementById("var").innerText = "Interface choisie : " + j;
                    document.getElementById('ErrorTxt').innerText = "";
                    z = j; // met à jour la variable z avec le numéro de l'interface sélectionnée
                }
            }


        });
    }

    document.getElementById('save').addEventListener('click', function(e){
        e.preventDefault()
        // Définir la page HTML correspondante
        var page;
        switch(z) {
            case 1:
            page = "FirstPage.html";
            break;
            case 2:
            page = "SecondPage.html";
            break;
            case 3:
            page = "ThirdPage.html";
            break;
            default:
                document.getElementById("ErrorTxt").innerText = "Aucune interface n'a été selectionnée";
                break;            
        }

        
        window.localStorage.setItem("analog", document.querySelector("#demo4").checked ? "true" : "false")
        // Rediriger l'utilisateur vers la page HTML correspondante
        if(page != undefined){
            window.location.href = page;            
        }
    })
}

onDeviceReady(); // appelle la fonction "onDeviceReady" pour exécuter le code

