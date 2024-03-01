const axios = require('axios');

async function registerUser(userData) {
    try {
        const response = await axios.post('https://votre-api.com/utilisateurs', userData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
        throw error;
    }
}

const newUser = {
    username: 'nouvel_utilisateur',
    email: 'nouvel_utilisateur@example.com',
    password: 'mot_de_passe'
};

registerUser(newUser)
    .then(user => console.log('Nouvel utilisateur enregistré:', user))
    .catch(err => console.error('Erreur :', err));
