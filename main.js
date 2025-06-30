const scriptURL = "https://script.google.com/macros/s/AKfycbyz66GzcuCBSjMZcblCpaZrFi5vWclB1isMuLJfWl0ogYB4tpEuZmTCMwTs3YnLPI24/exec";
const form = document.getElementById("orderForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.innerText = "Envoi en cours...";

  const formData = new URLSearchParams(new FormData(form));

  fetch(scriptURL, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((data) => {
    status.innerText = "✅ Votre commande a été enregistrée !";
    form.reset();
    setTimeout(() => {
      status.innerText = "";
    }, 5000);
  })
  .catch((error) => {
    console.error("Error:", error);
    status.innerText = "❌ Erreur de connexion. Veuillez réessayer plus tard.";
  });
});







