const html = String.raw;

export const handleGenerateResultContainerHTML = () => {
  return html`
     <!-- Result -->
        <div class="result container">
          <img class="result-icon" src="${require('../../../assets/images/illustrations/pick.png')}" alt="Pick">
          <h2 class="result-title">
            Our picks
            <br />
            for you
          </h2>
          <div class="result-container">
            <div class="result-horizontal-scroll"></div>
          </div>
          <button class="scroll-to-top-button">
            <img src="${require('../../../assets/images/icons/arrow-up.svg')}" alt="Arrow up">
            back to the top
          </button>
        </div>
    `;
}

export const handleGenerteResultCard = item => {
  return html`
    <div class="result-card">
      <img class="result-image" src="${item.url}" alt="${item.name}">
      <div class="result-card-infos">
        <h3 class="result-card-title">${item.name}</h3>
        <div class="result-card-content">
          <p>$${item.price}</p>
          <div class="result-card-icons">
            <img src="./assets/images/icons/pet.svg" alt="Pet">
            <img src="./assets/images/icons/low-sun.svg" alt="Low Sun">
            <img src="./assets/images/icons/1-drop.svg" alt="1 Drop">
          </div>
        </div>
      </div>
    </div>
  `
}
