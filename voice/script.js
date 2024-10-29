const buttons = document.querySelectorAll('.soundButton');
let currentIndex = 0;
const video = document.getElementById('chachaVideo');
let isPlaying = false;

// Function to handle button clicks and show the next button or set of buttons
function handleButtonClick(event) {
    if (isPlaying) return; // Prevent other buttons from being clicked while audio is playing

    const button = event.target;
    const soundFile = button.getAttribute('data-sound');
    const audio = new Audio(soundFile);

    // Start the video
    video.play();
    // Disable the clicked button to prevent further clicks
    button.disabled = true;
    isPlaying = true;

    // Play the audio and handle video stop after audio ends
    audio.play();
    audio.addEventListener('ended', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
        isPlaying = false;

        // Hide current button
        button.style.display = 'none';

        // Show the next button(s)
        if (currentIndex === 0) {
            // After the first button, show the next two buttons
            if (buttons[currentIndex + 1]) buttons[currentIndex + 1].style.display = 'block';
            if (buttons[currentIndex + 2]) buttons[currentIndex + 2].style.display = 'block';
            currentIndex += 2;
        } else {
            // For subsequent buttons, show one button at a time
            if (currentIndex + 1 < buttons.length) {
                currentIndex++;
                buttons[currentIndex].style.display = 'block';
            }
        }
    });
}

// Initialize the first button to be visible and add click event listeners
buttons.forEach((button, index) => {
    if (index === 0) {
        button.style.display = 'block'; // Show the first button
    } else {
        button.style.display = 'none'; // Hide other buttons initially
    }
    button.addEventListener('click', handleButtonClick);
});
