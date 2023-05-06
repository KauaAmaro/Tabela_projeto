
        let produtos = [];

        function cadastrarProduto(event) {
            event.preventDefault();

            let nome = document.getElementById('nomeProduto').value;
            let valor = parseFloat(document.getElementById('valorProduto').value);

          produtos.push({ nome: nome, valor: valor });
          produtos.sort((a, b) => a.valor - b.valor);

            exibirListagem();
            document.getElementById('cadastroForm').reset();
        }

        function exibirListagem() {
            let listaProdutos = document.getElementById('listaProdutos');

            // Não duplicar os valores
           while (listaProdutos.rows.length > 1) {
                listaProdutos.deleteRow(1);
            } 

            // Metodo para preencher a tabela com os produtos
            produtos.forEach(produto => {
                let row = listaProdutos.insertRow();
                let nomeCell = row.insertCell();
                let valorCell = row.insertCell();

                // Para tornar visível
             nomeCell.textContent = produto.nome;
              valorCell.textContent = produto.valor.toFixed(2);
            });
        }

        function exibirCadastroForm() {
            document.getElementById('cadastroForm').style.display = 'block';
        }

        exibirListagem();
