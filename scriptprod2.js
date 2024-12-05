document.addEventListener("DOMContentLoaded", function() {
    const Itamanho = document.getElementById('tamanho2');
    const Iarea = document.getElementById('area2');
    const Iqnt = document.getElementById('quantidade2');
    const Iendereco = document.getElementById('endereco2');
    const Ivalor = document.getElementById('valor2');
    const Ipag = document.getElementById('metodo_pagamento2');
    const Ifunc = document.getElementById('nome_funcionario2');
    const Inmuser = document.getElementById('nome_user2');
    const Idata = document.getElementById('data_da_compra2');
    const Comprar = document.querySelector(".btcomprar");

    /*  */
    function comprar() {

        console.log(Inmuser.value); // Verifique se o valor está correto

        const totalPreco = document.getElementById('total-preco').innerText;



        const compra = {
            tamanho: Itamanho.value,
            area: Iarea.value,
            quantidade: Iqnt.value,
            endereco: Iendereco.value,
            valor: totalPreco,
            metodoPagamento: Ipag.value,
            nomeFuncionario: Ifunc.value,
            nomeUser: Inmuser.value,
            data_Da_Compra: Idata.value
        };



        fetch(`http://localhost:8080/Compras/addCompras`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(compra)
            })
            .then(response => {

                alert('Pimpou!');
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })

        .catch(error => {

            alert('Error!');
        });
    }

    if (Comprar) {
        Comprar.addEventListener("click", function() {
            comprar();
            limpar();
        });
    } else {
        console.error("Botão de pesquisa não encontrado.");
    }

    function limpar() {

        Iarea.value = "";
        Iendereco.value = "";
        Ipag.value = "";
        Inmuser.value = "";


    }


});