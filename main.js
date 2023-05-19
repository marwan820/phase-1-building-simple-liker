document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const likeButtons = document.querySelectorAll(".like-glyph");

  errorModal.classList.add("hidden");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          button.classList.toggle("activated-heart");
          button.classList.toggle("empty-heart");
        })
        .catch(() => {
          errorModal.classList.remove("hidden");
          const errorMessage = document.getElementById("modal-message");
          errorMessage.textContent = "Error: Failed to like the post";
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      const randomTimeout = Math.random() * 3000;
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve();
        } else {
          reject();
        }
      }, randomTimeout);
    });
  }
});
