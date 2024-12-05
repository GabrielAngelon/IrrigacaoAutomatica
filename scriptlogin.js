document.addEventListener("DOMContentLoaded", function() {
    const Inome = document.getElementById('nome');
    const Iuser = document.getElementById('username');
    const Iemail = document.getElementById('email');
    const Isenha = document.getElementById('senha');
    const Itel = document.getElementById('telefone');
    const Iend = document.getElementById('endereco');
    const Login = document.querySelector(".btn-login");




    function loginuser() {
        const user = Iuser.value; // descomente
        const senha = Isenha.value; // descomente

        if (!user || !senha) {
            alert("Todos os campos devem ser preenchidos.");
            return;
        }
        console.log("ENTROU LOGIN")
        fetch(`http://localhost:8080/irrigacao/user/username/${user}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Usuário não encontrado.');
                }
            })


        .then(data => {
                if (data.senha === senha) {

                    window.location.href = `http://127.0.0.1:5500/InfoUser.html`;
                } else {
                    alert('Senha inválida.');
                }
            })
            .catch(error => {
                alert('Login incorreto');
            });
    }

    if (Login) {
        Login.addEventListener("click", function() {
            loginuser(); // Chama a função limpar antes de executar qualquer outra ação
            limpar(); // A função comprar será chamada depois de limpar os campos
        });
    } else {
        console.error("Botão de pesquisa não encontrado.");
    }


    /*  if (Login) {
        Login.addEventListener("click", loginuser);
    } else {
        console.error("Botão de login não encontrado.");
    }
*/
    function limpar() {
        Iuser.value = "";
        Isenha.value = "";

    }
});