const axios = require('axios');

async function deleteReview(reviewId) {
    try {
        const response = await axios.delete(`https://votre-api.com/critiques/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression de la critique du livre :', error);
        throw error;
    }
}

const reviewId = '123'; 
deleteReview(reviewId)
    .then(() => console.log('Critique supprimée avec succès'))
    .catch(err => console.error('Erreur :', err));
