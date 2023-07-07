import "./styles.css";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputField = document.getElementById("input-show");
  const showContainer = document.getElementById("show-container");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const query = inputField.value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      showContainer.innerHTML = "";

      data.forEach((show) => {
        const { image, name, summary } = show.show;
        const showData = document.createElement("div");
        showData.classList.add("show-data");
        showData.innerHTML = `
                  <img src="${image ? image.medium : ""}">
                  <div class="show-info">
                      <h1>${name}</h1>
                      ${summary}
                  </div>
              `;
        showContainer.appendChild(showData);
      });
    } catch (error) {
      console.log(error);
    }
  });
});
