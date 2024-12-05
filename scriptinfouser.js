document.addEventListener("DOMContentLoaded", function() {
    const Inome = document.getElementById('nome');
    const Iuser = document.getElementById('username');
    const Iemail = document.getElementById('email');
    const Isenha = document.getElementById('senha');
    const Itel = document.getElementById('fone');
    const Iend = document.getElementById('endereco');
    const Alter = document.querySelector(".btn-alter");
    const Pesq = document.querySelector(".btn-buscar");
    const LogOut = document.querySelector(".btn-logout");

    function buscar() {
        const username = localStorage.getItem('username'); // Obtém o nome de usuário do localStorage
        if (!username) {
            console.error('Username não fornecido');
            return;
        }
        fetch(`http://localhost:8080/irrigacao/user/username/${username}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET",
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                Iuser.value = data.username || "";
                Inome.value = data.nome || "";
                Isenha.value = data.senha || "";
                Iemail.value = data.email || "";
                Itel.value = data.fone || "";
                Iend.value = data.endereco || "";

                console.log('Usuário pesquisado:', data);
            })
            .catch(error => console.error('Erro ao pesquisar usuário:', error));
    }

    if (Pesq) {
        Pesq.addEventListener("click", buscar);
    } else {
        console.error("Botão de pesquisa não encontrado.");
    }


    /*  function atualizar() {
        const username = Iuser.value;
        if (!username) {
            console.error('username não fornecido');
            return;
        }

        // Cria o objeto com os dados atualizados que serão enviados na requisição
        const usuarioAtualizado = {
            nome: Inome.value,
            username: Iuser.value,
            email: Iemail.value,
            senha: Isenha.value,
            fone: Itel.value,
            endereco: Iend.value
        };

        // Faz a requisição PUT para atualizar o usuário
        fetch(`http://localhost:8080/irrigacao/putUser/${username}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(usuarioAtualizado) // Envia os dados como JSON
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erro ao atualizar usuário');
                }
            })
            .then(data => {
                console.log('Usuário atualizado com sucesso:', data);
                alert('Usuário atualizado com sucesso');
                // Você pode atualizar os campos na página, se necessário
            })
            .catch(error => console.error('Erro ao atualizar usuário:', error));
    }

    if (Alter) {
        Alter.addEventListener("click", atualizar);
    } else {
        console.error("Botão de editar não encontrado.");
    }
*/


    function logout() {
        // Remover o token de autenticação do localStorage (ou sessionStorage)
        // localStorage.removeItem('authToken'); // Supondo que você armazene o token com o nome 'authToken'

        // Você pode remover outros dados relacionados à sessão, como informações do usuário
        //  localStorage.removeItem('username'); // Exemplo de remoção do username

        // Redirecionar o usuário para a página de login ou outra página
        window.location.href = '/login.html'; // Redireciona para a página de login
    }

    if (LogOut) {
        LogOut.addEventListener("click", logout);
    } else {
        console.error("Botão de logout não encontrado.");
    }

});