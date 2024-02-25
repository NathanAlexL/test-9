const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(bodyParser.json());

// Endpoint pour l'inscription
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Valider les données d'inscription (par exemple, vérifier si le nom d'utilisateur est déjà utilisé)

    // Si la validation réussit, ajouter l'utilisateur à la base de données

    // Répondre avec un message de succès ou d'erreur
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
