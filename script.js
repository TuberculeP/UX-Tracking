//récupérer les informations dans le GET de l'url
const urlParams = new URLSearchParams(window.location.search);

//récupérer le nom du cours
const cours = urlParams.get('cours');
//récupérer l'email de l'utilisateur
const email = urlParams.get('email');

console.log(cours);

if(cours !== null){
    //afficher le nom du cours
    document.querySelectorAll('span.cours').forEach(e => {
        e.innerHTML = cours;
    })
}

if(email !== null){
    //afficher l'email de l'utilisateur
    document.querySelector('input#email').value = email;
}