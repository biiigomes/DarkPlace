function goToHome() {
    window.location.href = "../../home/home.html"
}

function goToCasesWithoutSolution() {
    window.location.href = "../cases-without-solution/cases-without-solution.html"
}

function goToCompleteLegend(legend) {
    switch (legend) {
        case "iron-witch":
            window.location.href = "complete-legends/pages/iron-witch/iron-witch.html";
        break;
        case "yule-cat":
            window.location.href = "complete-legends/pages/yule-cat/yule-cat.html";
        break;
        default:
            window.location.href = "complete-legends/pages/labatut/labatut.html"
    }
}