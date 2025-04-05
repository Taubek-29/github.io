document.getElementById("portfolio-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const about = document.getElementById("about").value;
    const projects = document.getElementById("projects").value.split(",").map(p => p.trim());
    const email = document.getElementById("email").value;

    // Сохраняем данные в localStorage (чтобы передать на страницу портфолио)
    localStorage.setItem("portfolioData", JSON.stringify({
        name, job, about, projects, email
    }));

    // Переходим на страницу с готовым портфолио
    window.location.href = "portfolio.html";
});
