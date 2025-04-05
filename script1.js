document.addEventListener("DOMContentLoaded", function() {
    // Получаем сохранённые данные
    const portfolioData = JSON.parse(localStorage.getItem("portfolioData"));

    if (!portfolioData) {
        alert("Данные не найдены. Заполните форму сначала!");
        window.location.href = "index.html";
        return;
    }

    // Заполняем портфолио
    document.getElementById("portfolio-name").textContent = portfolioData.name;
    document.getElementById("portfolio-job").textContent = portfolioData.job;
    document.getElementById("about-text").textContent = portfolioData.about;
    document.getElementById("contact-email").textContent = portfolioData.email;

    // Добавляем проекты
    const projectsList = document.getElementById("projects-list");
    portfolioData.projects.forEach(project => {
        const li = document.createElement("li");
        li.textContent = project;
        projectsList.appendChild(li);
    });

    // Год в футере
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
