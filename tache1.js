const axios = require('axios');

async function getListeLivres() {
    try {
        const response = await axios.get('https://votre-api.com/livres');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des livres :', error);
        throw error;
    }
}

getListeLivres()
    .then(livres => console.log('Liste des livres disponibles :', livres))
    .catch(err => console.error('Erreur :', err));
