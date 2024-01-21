// Définir les éléments HTML qui doivent remplir les conditions
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Définir l'événement de l'envoi des informations
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


//Définir l'option "erreur" si les conditions ne sont pas rempli
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//Définir l'option "réussite" si les conditions sont rempli
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// l'ensemble des condition pour que le mail soit validé par la définition qu'on lui a attribué
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Définir le contenant des cases de saisies
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Pseudo requis.'); //Si rien n'est écrit dans la case Prénom, affiche cette fonction
    } else {
        setSuccess(username); //Sinon, la valide
    }

    if(emailValue === '') { //Même procédé qu'au dessus
        setError(email, 'Email requis.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email); 
    }

    if(passwordValue === '') {
        setError(password, 'Mot de passe requis.');
    } else if (passwordValue.length < 8 ) {   //Ne pas validé si le contenant n'a pas plus de 8 caractères
        setError(password, 'Le mot de passe doit contenir plus de 8 caractères.')
    } else {
        setSuccess(password); //Si oui, la valide
    }

    if(password2Value === '') {
        setError(password2, 'Confirmez votre mot de passe.'); //Si le contenant est vide à l'envoi
    } else if (password2Value !== passwordValue) {
        setError(password2, "Mot de passe différent."); //Si le contenant n'est pas identique au contenant du dessus
    } else {
        setSuccess(password2); //Si oui, la valide
    }

};
