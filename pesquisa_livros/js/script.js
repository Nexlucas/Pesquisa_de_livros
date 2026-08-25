function buscarLivro() {
    const container = document.getElementById('livro');
    const nomeLivro = document.getElementById('pesquisa').value;

    container.innerHTML = 'Carregando ...';

    fetch(`https://api.bigbookapi.com/search-books?api-key=0d035e4bfdb649c99080f84e8724f73f&query=${encodeURIComponent(nomeLivro)}`)
    
        .then(response => response.json())
        .then(livro => {
            container.innerHTML = '';

            livro.books.forEach(livr => {
                console.log(livro);
                container.innerHTML += `
                    <div class="card">
                        <h2>${livr[0].title}</h2>
                        <p><strong>Subtitulo:</strong> ${livr[0].subtitle}</p>
                        <p><strong>Autor:</strong> ${livr[0].authors[0].name}</p>
                        <p><img src="${livr[0].image}" alt=""></p>
                        
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = 'Erro ao buscar o livro.';
            console.error(error);
        });
}