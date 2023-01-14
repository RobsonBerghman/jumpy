function Obrigatorio() {
    var nome = document.getElementById('cname').value;
    var email = document.getElementById('cemail').value;
    var telefone = document.getElementById('ctelefone').value;
    var cpf = document.getElementById('ccpf').value;
    var senha = document.getElementById('csenha').value;


    if(nome.trim() == ""){
        document.getElementById('nomeObrigatorio').style.display = "block"
    } else {
        document.getElementById('nomeObrigatorio').style.display = "none"
    }

    if(email.trim() == ""){
        document.getElementById('emailObrigatorio').style.display = "block"
    } else {
        document.getElementById('emailObrigatorio').style.display = "none"
    }

    if(telefone.trim() == ""){
        document.getElementById('telObrigatorio').style.display = "block"
    } else {
        document.getElementById('telObrigatorio').style.display = "none"
    }

    if(cpf.trim() == ""){
        document.getElementById('cpfObrigatorio').style.display = "block"
    } else {
        document.getElementById('cpfObrigatorio').style.display = "none"
    }

    if(senha.trim() == ""){
        document.getElementById('senhaObrigatorio').style.display = "block"
    } else {
        document.getElementById('senhaObrigatorio').style.display = "none"
    }

    if(nome == "" , email == "" , telefone == "" , cpf == "", senha == "") {
        document.getElementById('cerror').style.display = "block"
    } else {
        document.getElementById('cerror').style.display = "none"
    }

    if(nome !== "" , email !== "" , telefone !== "" , cpf !== "", senha !== "") {
        document.getElementById('success').style.display = "block"
    } else {
        document.getElementById('success').style.display = "none"
    }
}

