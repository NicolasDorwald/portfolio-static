document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector(".contact-form");
    const confirmation = document.querySelector(".contact-confirmation");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // empêche le rechargement de la page

        // Récupère les données du formulaire
        const formData = new FormData(form);

        try {
            const res = await fetch(form.action, { // action = URL Formspree
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {
                // Vide le formulaire
                form.reset();

                // Affiche le message de confirmation
                confirmation.style.display = "block";
                confirmation.classList.add("show");

                // Disparaît après 5 secondes
                setTimeout(() => {
                    confirmation.style.display = "none";
                    confirmation.classList.remove("show");
                }, 5000);

            } else {
                const data = await res.json();
                console.error("Erreur serveur :", data.errors || data.message);
                alert("Oups ! Une erreur s'est produite, réessayez.");
            }

        } catch (err) {
            console.error("Erreur fetch :", err);
            alert("Oups ! Une erreur s'est produite, réessayez.");
        }
    });
});
