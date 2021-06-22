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

export const handleGenerateResultCard = item => {
  return html`
    <div class="result-card ${item.staff_favorite && 'staff-favorite'}">
      <img class="result-image" src="${item.url}" alt="${item.name}">
      <div class="result-card-infos">
        <h3 class="result-card-title">${item.name}</h3>
        <div class="result-card-content">
          <p>$${item.price}</p>
          <div class="result-card-icons">
            <span class="card-icon icon-toxicity-${item.toxicity}"></span>
            <span class="card-icon icon-sun-${item.sun}"></span>
            <span class="card-icon icon-water-${item.water}"></span>
          </div>
        </div>
      </div>
    </div>
  `
}

export const handleGenerateNoResults = () => {
  return html`
    <!-- No Results -->
    <div class="no-result container">
      <div>
        <h2 class="no-result-title">No plants found…</h2>
        <p class="no-result-text">Sorry, no plants found with the filters selected above :(</p>
      </div>
      <img class="no-result-icon" src="${require('../../../assets/images/illustrations/no-results.png')}" alt="No results">
    </div>
  `;
}
