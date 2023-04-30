const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const correctAnswer = ['C', 'D', 'B', 'D'];

quizForm.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [quizForm.q1.value,quizForm.q2.value, quizForm.q3.value, quizForm.q4.value];
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            score += 1;
        }
    });
    resultDiv.innerHTML = `You scored ${score}/${correctAnswer.length}`;
})