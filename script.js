const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const body = document.body;

// Change text and gif when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yayyy! I'm so lucky to have you as my Valentine! 💖";
    gif.src = "https://media.giphy.com/media/G6N0pDDgDpLjUvNoyQ/giphy.gif";
    noBtn.style.display = "none";

    // Create floating hearts when clicked
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        body.appendChild(heart);
        
        // Remove hearts after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});

// Function to move the No button randomly + add shake effect
function moveNoButton() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate new position
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Add funny shake effect
    noBtn.style.animation = "shake 0.3s ease-in-out";
}

// Make the No button move on hover (desktop) and on tap (mobile)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
