const translations = {
    pl: {
        headDescription: "Inżynier Testów Automatycznych ● Programista ● Certifykowany Tester (ISTQB Foundation Level)",
        expHeading: "Doświadczenie",
        gamesHeading: "Tworzę gry w:",
        languagesHeading: "Korzystam z języków:",
        techHeading: "Wykorzystuję technologie:",
        roleLabel: "Stanowisko:",
        periodLabel: "Okres:",
        descriptionLabel: "Opis:",
        ewlRole: "Automation Tester",
        ewlPeriod: "gru 2024 – lis 2025",
        ewlDesc: "Projektowanie (aplikacja webowa i zapytania API):",
        capMidRole: "Test Automation Engineer",
        capMidPeriod: "sty 2023 - lis 2024",
        capMidDesc: "Projektowanie (aplikacje webowe i mobilne):",
        capJuniorRole: "Junior Automation Engineer",
        capJuniorPeriod: "sty 2022 - gru 2022",
        capJuniorDesc: "Projektowanie (aplikacja webowa):",
        capInternRole: "Staż - QA/Test Automation",
        capInternPeriod: "lis 2021 – gru 2021",
        capInternDesc: "Staż - nauka w praktyce technologii SQL, C#, Selenium i Specflow.",
        e2eTest: "testów E2E",
        smokeTest: "Smoke testów",
        unitTest: "testów jednostkowych",
        negativeTest: "testów negatywnych",
        integrationTest: "testów integracyjnych",
        performanceTest: "testów wydajnościowych"
    },
    en: {
        headDescription: "QA Automation Engineer ● Programmer ● ISTQB Certified Tester (Foundation Level)",
        expHeading: "Experience",
        gamesHeading: "I'm making games in:",
        languagesHeading: "I use the following programming languages:",
        techHeading: "I use the following technologies:",
        roleLabel: "Role:",
        periodLabel: "Period:",
        descriptionLabel: "Description:",
        ewlRole: "Automation Tester",
        ewlPeriod: "dec 2024 – nov 2025",
        ewlDesc: "Developing (web application and API requests):",
        capMidRole: "Test Automation Engineer",
        capMidPeriod: "jan 2023 - nov 2024",
        capMidDesc: "Developing (web and mobile application):",
        capJuniorRole: "Junior Automation Engineer",
        capJuniorPeriod: "jan 2022 - dec 2022",
        capJuniorDesc: "Developing (web application):",
        capInternRole: "Internship - QA/Test Automation",
        capInternPeriod: "nov 2021 – dec 2021",
        capInternDesc: "Internship - practical learning of SQL, C#, Selenium, and Specflow technologies.",
        e2eTest: "E2E tests",
        smokeTest: "Smoke tests",
        unitTest: "Unit tests",
        negativeTest: "Negative tests",
        integrationTest: "Integration tests",
        performanceTest: "Performance tests"
    }
};

let currentLang = "pl";
let langToggle;
let isFirst = true;

document.addEventListener("DOMContentLoaded", () => {
    setValues(isFirst);
    langToggle = document.getElementById("lang-toggle");
    langToggle.addEventListener("click", () => {setValues()});
});

function setValues(first) {
    if (first) {
        first = false;
    }
    else {
        currentLang = currentLang === "pl" ? "en" : "pl";
        langToggle.textContent = currentLang === "pl" ? "EN" : "PL";
    }

    const t = translations[currentLang];

    document.getElementById("headDescription").textContent = t.headDescription;
    document.getElementById("expHeading").textContent = t.expHeading;
    document.getElementById("gamesHeading").textContent = t.gamesHeading;
    document.getElementById("languagesHeading").textContent = t.languagesHeading;
    document.getElementById("techHeading").textContent = t.techHeading;
    changeTextByClassName("roleLabel", t.roleLabel);
    changeTextByClassName("periodLabel", t.periodLabel);
    changeTextByClassName("descriptionLabel", t.descriptionLabel);
    document.getElementById("ewlRole").textContent = t.ewlRole;
    document.getElementById("ewlPeriod").textContent = t.ewlPeriod;
    document.getElementById("ewlDesc").textContent = t.ewlDesc;
    document.getElementById("capMidRole").textContent = t.capMidRole;
    document.getElementById("capMidPeriod").textContent = t.capMidPeriod;
    document.getElementById("capMidDesc").textContent = t.capMidDesc;
    document.getElementById("capJuniorRole").textContent = t.capJuniorRole;
    document.getElementById("capJuniorPeriod").textContent = t.capJuniorPeriod;
    document.getElementById("capJuniorDesc").textContent = t.capJuniorDesc;
    document.getElementById("capInternRole").textContent = t.capInternRole;
    document.getElementById("capInternPeriod").textContent = t.capInternPeriod;
    document.getElementById("capInternDesc").textContent = t.capInternDesc;
    changeTextByClassName("e2eTest", t.e2eTest);
    changeTextByClassName("smokeTest", t.smokeTest);
    changeTextByClassName("unitTest", t.unitTest);
    changeTextByClassName("negativeTest", t.negativeTest);
    changeTextByClassName("integrationTest", t.integrationTest);
    changeTextByClassName("performanceTest", t.performanceTest);
}

function changeTextByClassName(obj, valueToChange) {
    const collection = document.getElementsByClassName(obj);
    const test = collection[0];
    for (var i = 0; i < collection.length; i++) {
        collection[i].textContent = valueToChange
    }
}