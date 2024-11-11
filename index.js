document.addEventListener("DOMContentLoaded", function() {
    const contentMap = {
        "O Nas": {
            "header": {
                "who-we-are": "Kim Jesteśmy",
                "how-we-work": "Jak Działamy"
            },
            "who-we-are": "Jesteśmy zespołem pasjonatów, którzy z zaangażowaniem dostarczają najlepszy wybór zwierząt egzotycznych i akwariowych.",
            "how-we-work": "Skupiamy się na etycznym pozyskiwaniu i odpowiedzialnej opiece nad naszymi zwierzętami.",
            "additional-info": "Nasz sklep zoologiczny Barracuda oferuje szeroki wybór produktów i usług, które spełniają potrzeby zarówno amatorów, jak i profesjonalnych hodowców."
        },
        "Aktualności": {
            "header": {
                "who-we-are": "Najnowsze Aktualności",
                "how-we-work": "Nasze Informacje"
            },
            "who-we-are": "Sprawdź najnowsze aktualności i wydarzenia w naszym sklepie.",
            "how-we-work": "Zapewniamy, że nasze aktualności są zawsze aktualne i przydatne dla naszych klientów.",
            "additional-info": "Zawsze jesteśmy gotowi, aby odpowiedzieć na Twoje pytania i doradzić w wyborze najlepszych rozwiązań dla Twoich zwierząt."
        },
        "Porady": {
            "header": {
                "who-we-are": "Nasze Porady",
                "how-we-work": "Jak Pomagamy"
            },
            "who-we-are": "Znajdziesz tutaj porady na temat opieki nad zwierzętami, zakładania akwarium i więcej.",
            "how-we-work": "Dzielimy się wiedzą i doświadczeniem, aby pomóc Ci w opiece nad Twoimi podopiecznymi.",
            "additional-info": "Śledź naszą stronę, aby być na bieżąco z nowościami i promocjami!"
        },
        "Realizacje": {
            "header": {
                "who-we-are": "Nasze Realizacje",
                "how-we-work": "Nasze Projekty"
            },
            "who-we-are": "Poznaj nasze dotychczasowe realizacje i projekty.",
            "how-we-work": "Z dumą przedstawiamy nasze prace i realizacje dla klientów.",
            "additional-info": "Jesteśmy dumni z naszych osiągnięć i zawsze dążymy do poprawy jakości naszych usług."
        },
        "Kontakt": {
            "header": {
                "who-we-are": "Skontaktuj się z Nami",
                "how-we-work": "Jak Nas Znaleźć"
            },
            "who-we-are": "Skontaktuj się z nami, aby uzyskać więcej informacji.",
            "how-we-work": "Jesteśmy do dyspozycji telefonicznie, mailowo i osobiście.",
            "additional-info": "Twoje pytania i sugestie są dla nas bardzo ważne, nie wahaj się z nami skontaktować!"
        }
    };

    // Add event listeners to navbar items
    document.querySelectorAll(".navbar-item").forEach(item => {
        item.addEventListener("click", () => {
            const page = item.getAttribute("data-page");
            loadContent(page);
        });
    });

    // Function to load content based on the selected page
    function loadContent(page) {
        if (contentMap[page]) {
            const content = contentMap[page];
            document.querySelector(".about-text[data-section='who-we-are'] h3").innerText = content.header["who-we-are"];
            document.querySelector(".about-text[data-section='who-we-are'] p").innerText = content["who-we-are"];
            document.querySelector(".about-text[data-section='how-we-work'] h3").innerText = content.header["how-we-work"];
            document.querySelector(".about-text[data-section='how-we-work'] p").innerText = content["how-we-work"];
            
            // Update additional info section
            document.querySelector(".additional-info h2").innerText = page;
            document.querySelector(".additional-info p").innerText = content["additional-info"];
        }
    }

    // Load default content (e.g., "O Nas") on page load
    loadContent("onas");

    // Scroll animacje
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    scrollElements.forEach(element => observer.observe(element));
});
