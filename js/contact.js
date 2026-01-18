document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector(".contact-form");
    const confirmation = document.querySelector(".contact-confirmation");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // empêche le rechargement de la page

        // Récupère les données du formulaire
        const formData = new FormData(form);

        try {
            const res = await fetch(form.action, { 
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {

                form.reset();

                confirmation.style.display = "block";
                confirmation.classList.add("show");

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
