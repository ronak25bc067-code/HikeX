/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("active");
    }

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("navMenu");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                service === "" ||
                message === ""
            ) {

                alert("Please fill all the fields.");

                return;
            }


            alert(
                "Thank you " +
                name +
                "! Your hiking enquiry has been submitted."
            );


            contactForm.reset();

        }
    );

}


/* =========================
   SCROLL ANIMATION
========================= */

const cards =
    document.querySelectorAll(
        ".service-card, .adventure-card, .guide-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function(card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

} else {

    cards.forEach(function(card) {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    });

}