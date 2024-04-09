console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

    function fetchDogImages() {
      fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
          data.message.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            dogImageContainer.appendChild(img);
          });
        })
        .catch(error => console.error(error));
    }

    function fetchDogBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          Object.keys(data.message).forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            breedList.appendChild(li);
          });
        })
        .catch(error => console.error(error));
    }

    function changeFontColor(event) {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change font color to blue
      }
    }

    function filterBreedsByLetter(event) {
      const selectedLetter = event.target.value;

      breedList.querySelectorAll("li").forEach(breed => {
        breed.style.display = breed.textContent.startsWith(selectedLetter) ? "block" : "none";
      });
    }

    breedList.addEventListener("click", changeFontColor);
    breedDropdown.addEventListener("change", filterBreedsByLetter);

    fetchDogImages();
    fetchDogBreeds();
  });