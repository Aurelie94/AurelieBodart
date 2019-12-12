//Menu Burger --------------------------------------------------------------------------------

let btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");
let contentNav = document.querySelector("#content-nav");

btn.addEventListener('click',function(){
    nav.classList.toggle('nav_open');
    contentNav.classList.toggle("content_open");
});

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

            viewer.addEventListener("click",function(){
                viewer.classList.remove("overlay");
                span.style.display = "none";
                imgTemp.innerHTML = "";
                textTemp.innerHTML = "";
            });

        }
    });    
}

// Vérification formulaire en JS ---------------------------------------------------------------------------------

//Cibler l'input Mail

let iptMail = document.querySelector("#mail");
let divMail = iptMail.parentElement;

//Création de la span mail 

let spanMail = document.createElement("span");
divMail.insertAdjacentElement("beforeend",spanMail);


function controlMail(e){
    
    let mailClean = e.value.trim();
    let regex = /^[a-z0-9\-_\.]+@[a-z0-9\-\.]+\.[a-z]{2,14}$/i;
    spanMail.textContent = "";

    if(iptMail.validity.valueMissing){
        spanMail.textContent = "";
    }

    else if(regex.test(mailClean)){
        spanMail.textContent = "Email Valide";
        spanMail.style.color = "green";
    }

    else{
        spanMail.textContent = "Veuillez entrer un email valide";
        spanMail.style.color = "red";
    }

}

iptMail.addEventListener("blur", function(){
    controlMail(this);
})

//Effet apparition du texte
