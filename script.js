const correctCode = "+#0:27:11:2025:*$59;1@"; // <-- Встановіть тут СЕКРЕТНИЙ КОД

function checkCode() {
    // Отримуємо введене користувачем значення 
    const enteredCode = document.getElementById("userInput").value.toUpperCase().trim(); 

    // Отримуємо елемент для виведення результату
    const resultElement = document.getElementById("resultMessage");

    // Логіка порівняння
    if (enteredCode === correctCode) {
        resultElement.textContent = "✅ Код ПРАВИЛЬНИЙ! Доступ надано.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "❌ Неправильний код. Спробуйте ще раз.";
        resultElement.style.color = "red";
    }

    // Очищуємо поле введення 
    document.getElementById("userInput").value = "";
}
