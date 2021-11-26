function verificarLogin() {
    var emailCerto = document.getElementById("email").value;
    var senhaCerto = document.getElementById("senha").value;

    if (emailCerto == "macacoflavio123@gmail.com") {
        if (senhaCerto == "seacha123") {
            alert("Usuário logado com sucesso!")
        } else {
            alert("Algo deu errado, verefique o email e a senha")
        }

    } else {
        alert("Algo deu errado, verefique o email e a senha")
    }
}


