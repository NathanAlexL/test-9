document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
        
        // Réinitialiser les messages d'erreur
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Valider le nom d'utilisateur (non vide)
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Veuillez entrer un nom d\'utilisateur';
            return;
        }

        // Valider le mot de passe (non vide)
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Veuillez entrer un mot de passe';
            return;
        }

        // Si toutes les validations sont réussies, soumettre le formulaire
        registerForm.submit();
    });
});
