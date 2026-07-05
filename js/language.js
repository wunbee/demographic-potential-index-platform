let currentLang = "en";

function setLanguage(lang) {

    currentLang = lang;

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }

    });

}

window.onload = function () {
    setLanguage("en");
};