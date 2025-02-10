// *** Mobile navigation *** //
const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
  const isNavOpen = navToggle.getAttribute('aria-expanded');

  isNavOpen === 'false' 
    ? navToggle.setAttribute('aria-expanded', 'true') 
    : navToggle.setAttribute('aria-expanded', 'false')

  console.log(isNavOpen)
});

// *** Mushroom filter *** //
const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');
const noResults = document.querySelector('.no-results');

const currentFilters = {
  season: 'all',
  edible: 'all'
}

function updateFilter(e) {
  const filterType = e.target.name;
  console.log(filterType)

  currentFilters[filterType] = e.target.value;
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach(card => {
    const season = card.querySelector("[data-season]").getAttribute('data-season');
    const edible = card.querySelector("[data-edible]").getAttribute('data-edible');
    const matchesSeason = currentFilters.season === 'all' || currentFilters.season === season;
    const matchesEdible = currentFilters.edible === 'all' || currentFilters.edible === edible;

    if (matchesSeason && matchesEdible) {
      card.hidden = false 
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    hasVisibleCards ? noResults.hidden = true : noResults.hidden = false;

  });
}

// Enable filtering only if JavaScript is enabled
function enableFiltering() {
  seasonFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();

// Mushroom guide select element event listeners
seasonFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);