document.getElementById("portfolio-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const portfolioData = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value,
        about: document.getElementById("about").value,
        projects: document.getElementById("projects").value.split(",").map(p => p.trim()),
    };

    // Для CodePen: используем sessionStorage вместо localStorage
    sessionStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    
    // Создаём новую вкладку с презентацией
    const presentationHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Ваше портфолио</title>
            <style>
                .slide { 
                    height: 100vh; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    text-align: center; 
                    color: white; 
                    font-family: Arial;
                }
                #slide1 { background: #6e8efb; }
                #slide2 { background: #ff7e5f; }
                #slide3 { background: #43cea2; }
            </style>
        </head>
        <body>
            <div class="slide" id="slide1">
                <h1>${portfolioData.name}</h1>
                <p>${portfolioData.job}</p>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(presentationHTML);
});
