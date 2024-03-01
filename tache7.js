const axios = require('axios');

async function loginUser(credentials) {
    try {
        const response = await axios.post('https://votre-api.com/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'utilisateur :', error);
        throw error;
    }
}

const userCredentials = {
    username: 'nom_utilisateur',
    password: 'mot_de_passe'
};

loginUser(userCredentials)
    .then(user => console.log('Utilisateur connecté avec succès :', user))
    .catch(err => console.error('Erreur :', err));
