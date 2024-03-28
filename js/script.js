Mensagem = () => {
    alert("Bem Vindo ao Nosso Site")
}

TrocarNome = () =>{ 
    let inputname = document.getElementById("inputname").value;
    let explication = document.getElementsByClassName("explication");
    let ps = window.document.getElementsByTagName("p")[0];
    ps.innerHTML = inputname;
    ps.style.color = "#00F";
    explication.innerHTML.style.color = "#0F0";
}

TrocarCor = () => {
    let explication = document.getElementsByClassName("explication").style.color;
    let ps = window.document.getElementsByTagName("p")[0].style.color;
    ps = "#00F";
    explication = "#0F0";
}

function CaixaAlta(str) {
    let ps = window.document.getElementsByTagName("p")[0];
    texto = "Secretária"
    ps = texto;
    ps.style.color = "#F00";
    return str.toUpperCase();
}


document.querySelector();
document.querySelectorAll();