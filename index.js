document.addEventListener("DOMContentLoaded", function() {
    const contentMap = {
        // Każdy guzik, zmienia te divy w htmlu.
        "O Nas": {
            header_text_one: "Kim Jesteśmy", // Naglowek pierwszy w sekcji o naszym sklepie
            header_text_two: "Jak Działamy", // Naglowek drugi w sekcji o naszym sklepie
            text_one: "Jesteśmy zespołem pasjonatów, którzy z zaangażowaniem dostarczają najlepszy wybór zwierząt egzotycznych i akwariowych.", // Text pierwszy w sekcji o naszym sklepie
            text_two: "Skupiamy się na etycznym pozyskiwaniu i odpowiedzialnej opiece nad naszymi zwierzętami.", // Text drugi w sekcji o naszym sklepie
            additional_text: "Nasz sklep zoologiczny Barracuda oferuje szeroki wybór produktów i usług, które spełniają potrzeby zarówno amatorów, jak i profesjonalnych hodowców.", // Tekst na samym dole.
        },
        "Aktualności": {
            header_text_one: "Najnowsze Aktualności",
            header_text_two: "Nasze Informacje",
            text_one: "Sprawdź najnowsze aktualności i wydarzenia w naszym sklepie.",
            text_two: "Zapewniamy, że nasze aktualności są zawsze aktualne i przydatne dla naszych klientów.",
            additional_text: "Zawsze jesteśmy gotowi, aby odpowiedzieć na Twoje pytania i doradzić w wyborze najlepszych rozwiązań dla Twoich zwierząt.",
        },
        "Porady": {
            header_text_one: "Nasze Porady",
            header_text_two: "Jak Pomagamy",
            text_one: "Znajdziesz tutaj porady na temat opieki nad zwierzętami, zakładania akwarium i więcej.",
            text_two: "Dzielimy się wiedzą i doświadczeniem, aby pomóc Ci w opiece nad Twoimi podopiecznymi.",
            additional_text: "Śledź naszą stronę, aby być na bieżąco z nowościami i promocjami!",
        },
        "Realizacje": {
            header_text_one: "Nasze Realizacje",
            header_text_two: "Nasze Projekty",
            text_one: "Poznaj nasze dotychczasowe realizacje i projekty.",
            text_two: "Z dumą przedstawiamy nasze prace i realizacje dla klientów.",
            additional_text: "Jesteśmy dumni z naszych osiągnięć i zawsze dążymy do poprawy jakości naszych usług.",
        },
        "Kontakt": {
            header_text_one: "Skontaktuj się z Nami",
            header_text_two: "Jak Nas Znaleźć",
            text_one: "Skontaktuj się z nami, aby uzyskać więcej informacji.",
            text_two: "Jesteśmy do dyspozycji telefonicznie, mailowo i osobiście.",
            additional_text: "Twoje pytania i sugestie są dla nas bardzo ważne, nie wahaj się z nami skontaktować!",
        },
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
        const content = contentMap[page];
    
        if (content) {
            // Update the first section
            const sectionOne = document.querySelector(".about-text[data-section='header_text_one']");
            console.log(sectionOne)
            if (sectionOne) {
                sectionOne.querySelector("h3").innerText = content.header_text_one;
                sectionOne.querySelector("p").innerText = content.text_one;
            }
    
            // Update the second section
            const sectionTwo = document.querySelector(".about-text[data-section='header_text_two']");
            if (sectionTwo) {
                sectionTwo.querySelector("h3").innerText = content.header_text_two;
                sectionTwo.querySelector("p").innerText = content.text_two;
            }
    
            // Update additional info section
            const additionalInfoSection = document.querySelector(".additional-info");
            if (additionalInfoSection) {
                additionalInfoSection.querySelector("h2").innerText = page;
                additionalInfoSection.querySelector("div").innerText = content.additional_text;
            }
        } else {
            console.error(`Content for page "${page}" not found in contentMap.`);
        }
    }

    // Load default content (e.g., "O Nas") on page load
    loadContent("O Nas");

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
