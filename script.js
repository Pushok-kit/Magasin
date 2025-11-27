const correctCode = "+#0:27:11:2025:*$59I1@"; // Ваш секретний код

function checkCode() {
    // Отримуємо введене користувачем значення 
    const enteredCode = document.getElementById("userInput").value.toUpperCase().trim(); 

    // Отримуємо елемент для виведення результату
    const resultElement = document.getElementById("resultMessage");

    // Логіка порівняння
    if (enteredCode === correctCode) {
        resultElement.textContent = "✅ Код ПРАВИЛЬНИЙ! Це працююча Add-on card.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "❌ Неправильний код.";
        resultElement.style.color = "red";
    }

    // Очищуємо поле введення 
    document.getElementById("userInput").value = "";
}
