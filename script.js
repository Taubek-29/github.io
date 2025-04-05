document.getElementById("portfolio-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    sessionStorage.setItem("portfolioName", name);
    window.location.href = "portfolio.html";
});
