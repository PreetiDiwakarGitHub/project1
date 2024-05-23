
const text = [
    `The power of perseverance is immense. Success is not an overnight phenomenon but the result of relentless effort. Every challenge faced and every obstacle overcome fortifies our character and brings us one step closer to our goals. The path to achievement is often paved with trials, but it is our resilience and determination that ultimately lead us to victory.`,
    `Change is the only constant in life, and those who adapt to change thrive. Embracing change opens doors to new opportunities and experiences. It allows us to grow, learn, and evolve. Instead of fearing the unknown, welcome it as a chance to expand your horizons and achieve greater things.`,
    `Self-belief is the foundation of all great accomplishments. When you believe in your abilities, you are more likely to take risks and pursue your dreams. Confidence in your potential fuels your actions and helps you overcome self-doubt and fear. Trust in yourself and your capacity to succeed.`,
    `There is no substitute for hard work. While talent and luck can play a role in success, it is consistent effort and dedication that make the biggest difference. Hard work builds discipline, enhances skills, and instills a sense of accomplishment. Remember, the harder you work, the luckier you get.`,
    `Failure is not the opposite of success; it is a part of the journey. Each failure provides valuable lessons and insights that can guide you toward future success. Instead of being disheartened by setbacks, analyze them, learn from them, and use that knowledge to improve and grow.`,
    `Clear, specific goals give direction and purpose to your efforts. They act as a roadmap, guiding you toward your desired destination. Setting goals helps you stay focused, motivated, and accountable. Break down your big goals into smaller, manageable tasks to make steady progress.`,
    `The company you keep influences your mindset and attitude. Surround yourself with positive, supportive, and inspiring individuals who uplift and encourage you. Their energy will boost your motivation and help you maintain a positive outlook, even in challenging times.`,
    `Continuous learning is essential for personal and professional growth. The world is constantly evolving, and staying curious and open to new knowledge keeps you relevant and competitive. Invest in yourself by reading, taking courses, and seeking out new experiences that broaden your understanding.`,
    `Gratitude shifts your focus from what you lack to what you have. It cultivates a positive mindset and increases your overall happiness. Regularly take time to appreciate the good things in your life, no matter how small. Gratitude boosts your motivation and strengthens your resilience.`,
    `Your physical and mental well-being are crucial to sustained motivation and productivity. Prioritize self-care by eating well, exercising regularly, and getting enough rest. Practice mindfulness and stress management techniques to maintain balance and prevent burnout. A healthy body and mind are your greatest assets in the pursuit of your goals.`,
];

document.querySelector('.lorem-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let value = parseInt(document.getElementById('number').value);
    let random = Math.floor(Math.random() * text.length);
    const result = document.querySelector('.lorem-text');

    if (isNaN(value) || value <= 0 || value > text.length) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        let tempHTML = tempText.map(item => `<p class="result">${item}</p>`).join('');
        result.innerHTML = tempHTML;
    }
});



   

