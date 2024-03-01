const axios = require('axios');

async function getLivresParTitre(titre) {
    try {
        const response = await axios.get(`https://votre-api.com/livres?titre=${encodeURIComponent(titre)}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des livres par titre :', error);
        throw error;
    }
}

const titre = 'Titre du livre';
getLivresParTitre(titre)
    .then(livres => console.log(`Livres avec le titre "${titre}" :`, livres))
    .catch(err => console.error('Erreur :', err));
