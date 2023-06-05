var users = [
    {"username": "Admin", "password": "Admin123"},
    {"username": "User", "password": "User123"},
    {"username": "UsserEnxerido", "password": "UsserEnxerido123"}
]

function verifyUser() {
    var user = document.getElementsByName('username')[0].value;
    console.log(user)
    var password = document.getElementsByName('password')[0].value;

    for(var u in users) {
        var usrs = users[u];
        if(usrs.username == user && usrs.password == password) {
            this.goToScaryPage();
            return true;
        }

        alert("Usuário ou senha incorretos, tente novamente.");
        return false;
    } 
}

function goToLegends() {
    window.location.href = "legends/legends.html"
}

function goToCasesWithoutSolution() {
    window.location.href = "cases-without-solution/cases-without-solution.html"
}

function goToScaryPage() {
    window.location.href = "your-page/your-page.html"
}