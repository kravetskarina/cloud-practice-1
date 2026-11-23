function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "JavaScript працює. Хмарний застосунок успішно запущено!";
}

function showModel() {
    const info = {
        iaas: "IaaS — інфраструктура як сервіс: оренда віртуальних машин, дисків і мережі (наприклад, Amazon EC2).",
        paas: "PaaS — платформа як сервіс: середовище для запуску й розробки застосунків без керування серверами (наприклад, Supabase, Vercel).",
        saas: "SaaS — програма як сервіс: готовий застосунок у браузері (наприклад, Google Docs, GitHub)."
    };
    const key = document.getElementById("model").value;
    document.getElementById("modelInfo").textContent = info[key] || "";
}
