const axios = require('axios');

async function getReview(bookId) {
    try {
        const response = await axios.get(`https://votre-api.com/livres/${bookId}/critique`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la critique du livre :', error);
        throw error;
    }
}

const bookId = '123'; 
getReview(bookId)
    .then(review => console.log('Critique du livre :', review))
    .catch(err => console.error('Erreur :', err));
