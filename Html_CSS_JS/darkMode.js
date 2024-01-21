const switchThemeBtn = document.querySelector('.changeTheme')   //Définir le bouton "change thème"
let toggleTheme = 0;    //Définir toggleTheme à 0

switchThemeBtn.addEventListener('click' , () =>{  //Evenement changement de thème quand on click sur le bouton défini par la "const" si dessus

    if(toggleTheme ===0) {          //Si toggletheme est de valeur 0 
        document.documentElement.style.setProperty('--dark', '#f1f1f1')  //Change les fonctions "var" du css par ceux-là
        document.documentElement.style.setProperty('--white', '#262626')
        toggleTheme++; //Ajouté une valeur 1 au toggleTheme


    } else{
        document.documentElement.style.setProperty('--white', '#f1f1f1') //Change les fonctions "var" du css par ceux-là
        document.documentElement.style.setProperty('--dark', '#262626')
        toggleTheme--; //Supprimé la valeur du dessus, toggleTheme se remet à 0, Alors la fonction fait une boucle à chaque click
    }

})


