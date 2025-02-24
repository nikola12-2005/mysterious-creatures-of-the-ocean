document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("date").textContent = new Date().toLocaleDateString();

    const intro = document.querySelector('.intro');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            intro.classList.add('visible');
        }
    });
});

function generateMystery() {
    const mysteries = [
        {
            text: "🔹 Missing Submarines: In 1968, four submarines mysteriously disappeared. Some believe strange forces in the deep are at play.",
            image: "images/missing-submarine.jpg"
        },
        {
            text: "🔹 The Bloop: A deep-sea sound detected in 1997 was so loud that some believe it came from an unknown sea monster!",
            image: "images/bloop.jpg"
        },
        {
            text: "🔹 Unidentified Deep-Sea Creatures: Scientists estimate that 80% of the ocean remains unexplored. What creatures lurk in the abyss?",
            image: "images/ocean.jpg"
        },
        {
            text: "🔹 The Bermuda Triangle: Ships and planes have mysteriously vanished in this area for centuries. Coincidence or supernatural force?",
            image: "images/bermuda-triangle-map.jpg"
        }
    ];

    let code = document.getElementById("mystery-code").value.toUpperCase();
    let output = document.getElementById("mystery-output");
    let mysteryText = document.getElementById("mystery-text");
    let mysteryImage = document.getElementById("mystery-image");

    if (code.length === 3) {
        let randomMystery = mysteries[Math.floor(Math.random() * mysteries.length)];
        mysteryText.textContent = randomMystery.text;
        mysteryImage.src = randomMystery.image;
        output.classList.remove("hidden");
    } else {
        alert("Please enter a valid 3-letter code!");
    }
}
