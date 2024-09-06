function resetErrors() {
    document.querySelectorAll('.error').forEach(errDiv => {
        errDiv.style.display = 'none';
        errDiv.innerText = '';
    });
}

function validerEmail(email) {
    const exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    return exp.test(String(email).toLowerCase());
}

function suivant() {
    resetErrors();
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;

    let valid = true;
    if (nom === "") {
        document.getElementById("nomError").innerText = "Veuillez entrer votre nom!";
        document.getElementById("nomError").style.display = "block";
        valid = false;
    }
    if (prenom === "") {
        document.getElementById("prenomError").innerText = "Veuillez entrer votre prénom!";
        document.getElementById("prenomError").style.display = "block";
        valid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerText = "Veuillez entrer votre adresse email!";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else if (!validerEmail(email)) {
        document.getElementById("emailError").innerText = "Veuillez entrer une adresse email valide! Exemple : text@text.text";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (valid) {
        document.getElementById("createAccount").style.display = "none";
        document.getElementById("continueCreateAccount").style.display = "block";
    }
}

function toggleVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordField.type = confirmPasswordField.type = "text";
    } else {
        passwordField.type = confirmPasswordField.type = "password";
    }
}

function retour() {
    document.getElementById("continueCreateAccount").style.display = "none";
    document.getElementById("createAccount").style.display = "block";
}

function confirmer() {
    resetErrors();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;
    if (password === "") {
        document.getElementById("passwordError").innerText = "Veuillez entrer un mot de passe!";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Veuillez confirmer votre mot de passe!";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Les mots de passe ne correspondent pas!";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    }
    if (valid) {
        const accountInformations = {
            nom: document.getElementById("nom").value,
            prenom: document.getElementById("prenom").value,
            email: document.getElementById("email").value,
            password: password
        };
        console.log("Retour JSON : " + JSON.stringify(accountInformations));
        alert("Formulaire soumis avec succès! \n Veuillez vérifier le log de votre console pour conslter l'objet JSON!");
    }
}
