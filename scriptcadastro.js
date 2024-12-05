document.addEventListener("DOMContentLoaded", function() {
    const Inome = document.getElementById('nome');
    const Iuser = document.getElementById('username');
    const Iemail = document.getElementById('email');
    const Isenha = document.getElementById('senha');
    const Itel = document.getElementById('telefone');
    const Iend = document.getElementById('endereco');
    const BCadastro = document.getElementById('cadastrar');

    console.log("entrouuu");

    function cadastrar() {
        fetch("http://localhost:8080/irrigacao/adduser", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    nome: Inome.value,
                    username: Iuser.value,
                    email: Iemail.value,
                    senha: Isenha.value,
                    fone: Itel.value,
                    endereco: Iend.value
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Usuário cadastrado com sucesso:', data);
                alert("Usuario Cadastrado!");

                window.location.href = "login.html";
            })
            .catch(error => console.error('Erro ao cadastrar usuário:', error));
    }

    if (BCadastro) {
        BCadastro.addEventListener("click", function() {
            cadastrar();
            limpar();
        });
    } else {
        console.error("Botão de pesquisa não encontrado.");
    }

    function limpar() {
        Inome.value = "";
        Iuser.value = "";
        Iemail.value = "";
        Itel.value = "";
        Iend.value = "";
    };
});



/*   BCadastro.addEventListener('click', function() {
        cadastrar();
        limpar();
    });
*/