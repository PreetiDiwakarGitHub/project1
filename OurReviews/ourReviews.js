const reviews = [
    { id: 1, name: "Preeti Diwakar", job: "Software Developer", img: "img/Alka.jpeg", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque laboriosam facere iure aut rerum? Autem eveniet itaque aliquam doloremque in atque repellat facere, voluptatum dicta nihil soluta maiores ad." },
    { id: 2, name: "Priyanka Diwakar", job: "Software Developer", img: "img/img2.jpeg", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis sequi modi impedit blanditiis, fuga quos animi, necessitatibus, dignissimos maiores expedita. Atque dignissimos, nesciunt vel quas ipsa omnis. Sint, provident." },
    { id: 3, name: "Alka Tiwari", job: "Software Developer", img: "img/person.jpeg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium, sunt quidem officiis distinctio, maiores facere molestiae pariatur repellendus praesentium adipisci numquam eos labore dolore veritatis repudiandae commodi? Atque, voluptates!" },
    { id: 4, name: "Mahima", job: "Software Developer", img: "img/person3.jpeg", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis sequi modi impedit blanditiis, fuga quos animi, necessitatibus, dignissimos maiores expedita. Atque dignissimos, nesciunt vel quas ipsa omnis. Sint, provident." }
];

const img = document.getElementById("personimg");
const author = document.getElementById("person");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => showPerson(currentItem));

function showPerson(index) {
    const { img: imgSrc, name, job: jobTitle, text } = reviews[index];
    img.src = imgSrc;
    author.textContent = name;
    job.textContent = jobTitle;
    info.textContent = text;
}

nextBtn.addEventListener('click', () => {
    currentItem = (currentItem + 1) % reviews.length;
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem = (currentItem - 1 + reviews.length) % reviews.length;
    showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

