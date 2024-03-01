const axios = require('axios');

async function getLivresParAuteur(auteur) {
    try {
        const response = await axios.get(`https://votre-api.com/livres?auteur=${encodeURIComponent(auteur)}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des livres par auteur :', error);
        throw error;
    }
}

const auteur = 'Nom de l\'auteur';
getLivresParAuteur(auteur)
    .then(livres => console.log(`Livres de l'auteur "${auteur}" :`, livres))
    .catch(err => console.error('Erreur :', err));
