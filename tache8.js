const axios = require('axios');

async function addOrUpdateReview(bookId, reviewData) {
    try {
        const existingReview = await axios.get(`https://votre-api.com/livres/${bookId}/critique`);
        let response;

        if (existingReview.data) {
            response = await axios.put(`https://votre-api.com/livres/${bookId}/critique`, reviewData);
        } else {
            response = await axios.post(`https://votre-api.com/livres/${bookId}/critique`, reviewData);
        }

        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout ou de la modification de la critique du livre :', error);
        throw error;
    }
}

const bookId = '123'; 
const reviewData = {
    rating: 5,
    comment: 'C\'est un excellent livre!'
};

addOrUpdateReview(bookId, reviewData)
    .then(review => console.log('Critique ajoutée/modifiée avec succès :', review))
    .catch(err => console.error('Erreur :', err));
