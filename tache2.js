const axios = require('axios');

async function getDetailsByISBN(isbn) {
    try {
        const response = await axios.get(`https://votre-api.com/livres?isbn=${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du livre par ISBN :', error);
        throw error;
    }
}

const isbn = '1234567890';
getDetailsByISBN(isbn)
    .then(details => console.log('Détails du livre avec l\'ISBN spécifié :', details))
    .catch(err => console.error('Erreur :', err));
