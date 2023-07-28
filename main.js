document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const birthdate = new Date(document.getElementById('birthdate').value);

  const errorMessages = [];
  
  // Vérification de l'email
  if (!isValidEmail(email)) {
    errorMessages.push("L'adresse email n'est pas valide.");
  }

  // Vérification du numéro de téléphone
  if (!isValidPhoneNumber(phone)) {
    errorMessages.push("Le numéro de téléphone n'est pas valide.");
  }

  // Vérification de l'âge
  if (!isValidAge(birthdate)) {
    errorMessages.push("L'âge doit être compris entre 1930 et 2024.");
  }

  // Affichage des messages d'erreur
  const errorDiv = document.getElementById('errorMessages');
  if (errorMessages.length > 0) {
    errorDiv.innerHTML = '';
    errorMessages.forEach(function(message) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = message;
      errorDiv.appendChild(errorMessage);
    });
  } else {
    errorDiv.innerHTML = '<p>Toutes les données sont valides.</p>'; 
  }
});

// Fonction pour vérifier l'email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Fonction pour vérifier le numéro de téléphone
function isValidPhoneNumber(phone) {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phone);
}  
  