// Ваш новий секретний код:
const correctCode = "#0:27:11:2025:*$59i1@"; 

function checkCode() {
    // 1. Отримуємо значення та видаляємо пробіли (але НЕ змінюємо регістр через спецсимволи)
    const enteredCode = document.getElementById("userInput").value.trim(); 

    // 2. Отримуємо елемент для виведення результату
    const resultElement = document.getElementById("resultMessage");

    // 3. Логіка порівняння
    if (enteredCode === correctCode) {
        resultElement.textContent = "✅ Код ПРАВИЛЬНИЙ! Ви можете скористатися Add-on карткою.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "❌ Неправильний код. Спробуйте ще раз.";
        resultElement.style.color = "red";
    }

    // 4. Очищуємо поле введення 
    document.getElementById("userInput").value = "";
}
