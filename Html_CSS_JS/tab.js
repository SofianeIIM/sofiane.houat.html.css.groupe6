//Définir les boutons et les contenues
const tabs= document.querySelectorAll('.boutonTab');
const allContent= document.querySelectorAll('.tabContent');

    tabs.forEach((tab, index)=>{                            //Définir à un conteneur qu'il est "active" quand on click dessus
        tab.addEventListener('click', (e) =>{
            tabs.forEach(tab=>{tab.classList.remove('active')}); 
            tab.classList.add('active')

        var line=document.querySelector('.line')        //Ordonner à la ligne quelle doit se situé en dessous de contenu clické
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";


        allContent.forEach(content=>{content.classList.remove('active')});  //Ordonner quand un conteneur est selectionner (active), les autres doivent se fermé
        allContent[index].classList.add('active');

        })
    })

