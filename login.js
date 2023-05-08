document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'sharifulafsar@outlook.com' && password === 'DaniDanielxxx'){
        window.location.href ='bank.html';
    }
    else{
        alert('password vule gechos beta !Toke ami tejjo shontan goshona korlam.')
    }
})