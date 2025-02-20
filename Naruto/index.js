function procurarPersonagem() {
    let personagem = document.getElementById('personagem').value.trim().toLowerCase();
    let finalURL = `https://naruto-br-api.site/characters`;

    fetch(finalURL)
        .then(response => response.json())
        .then(data => {
            let resultado = data.find(p => p.name.toLowerCase().includes(personagem));

            if (!resultado) {
                alert('Personagem não encontrado! Tente outro nome.');
                return;
            }

            let vila = resultado.village;
            if (typeof vila === 'object') {
                vila = vila.name || 'Desconhecida';
            }

            document.getElementById('imagem').src = resultado.profile_image;
            document.getElementById('nome').innerText = resultado.name;
            document.getElementById('vila').innerText = vila;
            document.getElementById('rank').innerText = resultado.rank || 'Desconhecido';
            document.getElementById('poder').innerText = resultado.power || 'Não informado';
            document.getElementById('card').classList.remove('d-none');
        })
        .catch(error => console.log('Erro:', error));
}