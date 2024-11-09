// Add event listeners to emotion buttons only
document.querySelectorAll('.emotion-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent smiley container click event
  
      const emotion = button.id.replace('-button', '');
      recordEmotion(emotion); // Ensure recordEmotion function exists
  
      const smileyContainer = button.closest('.smiley-container');
      const toastContainer = smileyContainer.querySelector('.toast-container');
      showToast(toastContainer, 'Thank you for your feedback!');
  
      smileyContainer.classList.add('clicked');
      setTimeout(() => {
        smileyContainer.classList.remove('clicked');
      }, 1000);
    });
  });
  
  // Ensure recordEmotion function exists and handles emotion recording
function recordEmotion(emotion) {
console.log(`Emotion recorded: ${emotion}`);
// Add your emotion recording logic here
}

// showToast function remains unchanged
function showToast(toastContainer, message) {
const toast = document.createElement('div');
toast.className = 'toast show';
toast.innerText = message;
toastContainer.appendChild(toast);

setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
}, 2000);
}

document.querySelectorAll('.emotion-button').forEach(button => {
    button.addEventListener('click', () => {
      alert("Thank you for your feedback :)");
    });
  });
  
  document.querySelectorAll('.smiley-container img').forEach(emoji => {
    emoji.addEventListener('click', () => {
      alert("Thank you for your feedback :)");
    });
  });