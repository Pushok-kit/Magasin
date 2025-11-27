const correctCode = "+#0:27:11:2025:*$59;1@"; // <-- Встановіть тут СЕКРЕТНИЙ КОД

function checkCode() {
    // Отримуємо введене користувачем значення (перетворюємо до верхнього регістру і прибираємо пробіли)
    const enteredCode = document.getElementById("userInput").value.toUpperCase().trim(); 

    // Отримуємо елемент, куди виводитиметься повідомлення
    const resultElement = document.getElementById("resultMessage");

    // Логіка порівняння
    if (enteredCode === correctCode) {
        // Якщо код правильний
        resultElement.textContent = "✅ Код ПРАВИЛЬНИЙ! Вітаємо, Add-on код вірний.";
        resultElement.style.color = "green";
    } else {
        // Якщо код неправильний
        resultElement.textContent = "❌ Неправильний код. Спробуйте інший.";
        resultElement.style.color = "red";
    }

    // Очищуємо поле введення після перевірки
    document.getElementById("userInput").value = "";
}
