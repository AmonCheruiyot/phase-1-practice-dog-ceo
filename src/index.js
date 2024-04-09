console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");

    // Challenge 1: Fetch dog images
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        return response.json();
      })
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error(error));

    // Challenge 2: Fetch and display dog breeds
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch breeds");
        }
        return response.json();
      })
      .then(data => {
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error(error));

    // Challenge 3: Change font color on click
    breedList.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue";
      }
    });

    // Challenge 4: Filter breeds by starting letter
    const breedDropdown = document.getElementById("breed-dropdown");

    breedDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;

      breedList.querySelectorAll("li").forEach(item => {
        item.style.display = item.textContent.startsWith(selectedLetter) ? "block" : "none";
      });
    });
  });