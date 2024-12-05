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
    const BuscCompra = document.querySelector(".btn-buscarcmp");
    const AtuzCompra = document.querySelector(".btn-atz");


    function buscarcompra() {
        const endereco = Iendereco.value;
        console.log('Endereço encontrado:', endereco);

        if (!endereco) {
            console.error('Endereço não fornecido');
            return;
        }

        fetch(`http://localhost:8080/Compras/pagamentos/endereco/${endereco}`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET",
            })
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos:', data);
                if (data.length > 0) {
                    const compra = data[0]; // Acessa o primeiro item da lista
                    Itamanho.value = compra.tamanho || "";
                    Iarea.value = compra.area || "";
                    Iqnt.value = compra.quantidade || ""; // Certifique-se de que o nome está correto
                    Iendereco.value = compra.endereco || "";
                    Ivalor.value = compra.valor || "";
                    Ipag.value = compra.metodoPagamento || ""; // Certifique-se de que o nome está correto
                    Ifunc.value = compra.nomeFuncionario || ""; // Certifique-se de que o nome está correto
                    Inmuser.value = compra.nomeUser || ""; // Certifique-se de que o nome está correto
                    Idata.value = compra.data_Da_Compra || ""; // Certifique-se de que o nome está correto
                } else {
                    console.log('Nenhuma compra encontrada.');
                }
            })
            .catch(error => {

                alert('Você não tem nenhuma compra ainda!');
            });
    }
    if (BuscCompra) {
        BuscCompra.addEventListener("click", buscarcompra);
    } else {
        console.error("Botão de pesquisa não encontrado.");
    }

});