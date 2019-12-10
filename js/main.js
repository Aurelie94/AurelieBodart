//Galerie JS ---------------------------------------------------------------------------------

// Création du container

let viewer = document.getElementById("projects").getElementsByTagName("div")[0];

// Création pour l'image temporaire

let imgTemp = document.getElementById("img-temp");

// Cibler les images

let pictures = document.getElementById("projects").getElementsByTagName('img');
let pictQty = pictures.length;

// Création pour la zone de texte temporaire

let textTemp = document.getElementById("text-temp");

// Cibler le texte

let text = document.getElementById("projects").getElementsByTagName("h3");


// Cibler bouton close 

let span = document.getElementsByClassName("close")[0];



//Affichage de la galerie

for(let i=0;i<pictQty;i++){
    
    pictures[i].addEventListener("click", function(){
        
        //Vérification de la taille de l'écran

        if(window.innerWidth>820){
            
            // Créer Objet

            let caneva = {
             img : pictures[i],
             text : text[i].textContent,

             afficher : function(){
                let newImg = this.img.getAttribute("src");
                imgTemp.innerHTML = "<img src='"+ newImg + "'>";
                let newText = this.text;
                textTemp.innerHTML = "<p>" + newText + "</p>";
             }
            };

            // Ajout de la classe

            viewer.classList.add("overlay");
            span.style.display = "inline-block";

            // Afficher Objet

            caneva.afficher();

            span.onclick = function(){
                viewer.classList.remove("overlay");
                span.style.display = "none";
                imgTemp.innerHTML = "";
                textTemp.innerHTML = "";
            }

        }
    });

    

    
}