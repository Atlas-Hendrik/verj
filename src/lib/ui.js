import { getLaunch, searchLaunches } from './api.js';
import { el } from './elements.js';

/**
 * Býr til leitarform.
 * @param {(e: SubmitEvent) => void} searchHandler Fall sem keyrt er þegar leitað er.
 * @param {string | undefined} query Leitarstrengur.
 * @returns {HTMLElement} Leitarform.
 */
export function renderSearchForm(searchHandler, query = undefined) {
  return document.createElement('div');
}

/**
 * Setur „loading state“ skilabað meðan gögn eru sótt.
 * @param {HTMLElement} parentElement Element sem á að birta skilbaoð í.
 * @param {Element | undefined} searchForm Leitarform sem á að gera óvirkt.
 */
function setLoading(parentElement, searchForm = undefined) {
  const loadingElement = document.createElement('div');
  loadingElement.className = 'loading';
  loadingElement.textContent = 'Loading...';

  parentElement.appendChild(loadingElement);

  if (searchForm) {
      searchForm.setAttribute('disabled', 'true');
  }
}

/**
 * Fjarlægir „loading state“.
 * @param {HTMLElement} parentElement Element sem inniheldur skilaboð.
 * @param {Element | undefined} searchForm Leitarform sem á að gera virkt.
 */

function setNotLoading(parentElement, searchForm = undefined) {
  const loadingClass = 'loading';
  parentElement.classList.remove(loadingClass);
  if (searchForm) {
      searchForm.classList.remove(loadingClass);
  }
}


/**
 * Birta niðurstöður úr leit.
 * @param {import('./api.types.js').Launch[] | null} results Niðurstöður úr leit
 * @param {string} query Leitarstrengur.
 */
function createSearchResults(results, query) {
  if (results.length === 0) {
      return "No results found for '" + query + "'.";
  }
  let output = "Search results for '" + query + "':\n";

  for (let i = 0; i < results.length; i++) {
      output += (i + 1) + ". " + results[i] + "\n";
  }

  return output;
}
let searchResults = ["Result 1", "Result 2", "Result 3"];
let searchQuery = "example";
let outputString = createSearchResults(searchResults, searchQuery);
console.log(outputString);


/**
 *
 * @param {HTMLElement} parentElement Element sem á að birta niðurstöður í.
 * @param {Element} searchForm Form sem á að gera óvirkt.
 * @param {string} query Leitarstrengur.
 */

export async function searchAndRender(parentElement, searchForm, query) {
  try {
    const apiUrl = `https://api.example.com/search?q=${query}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const searchData = await response.json();
    renderSearchResults(parentElement, searchData);
  } catch (error) {
    console.error('Error during search and render:', error);
  }
}

function renderSearchResults(parentElement, searchData) {
  parentElement.innerHTML = '';

  searchData.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.textContent = result.title;
    parentElement.appendChild(resultElement);
  });
}


/**
 * Sýna forsíðu, hugsanlega með leitarniðurstöðum.
 * @param {HTMLElement} parentElement Element sem á að innihalda forsíðu.
 * @param {(e: SubmitEvent) => void} searchHandler Fall sem keyrt er þegar leitað er.
 * @param {string | undefined} query Leitarorð, ef eitthvað, til að sýna niðurstöður fyrir.
 */
export function renderFrontpage(
  parentElement,
  searchHandler,
  query = undefined,
) {
  const heading = el('h1', 
  { class: 'heading', 'data-foo': 'bar'}, 
  'Geimskotaleitin 🚀'
  );

  const searchForm = renderSearchForm(searchHandler, query);
  console.log(heading, searchForm);
  const container = el('main', {}, heading, searchForm);
  parentElement.appendChild(container);

  if (!query) {
    return;
  }

  searchAndRender(parentElement, searchForm, query);
}

/**
 * Sýna geimskot.
 * @param {HTMLElement} parentElement Element sem á að innihalda geimskot.
 * @param {string} id Auðkenni geimskots.
 */
export async function renderDetails(parentElement, id) {
  const container = el('main', {});
  const backElement = el(
    'div',
    { class: 'back' },
    el('a', { href: '/' }, 'Til baka'),
  );

  parentElement.appendChild(container);

  /* TODO setja loading state og sækja gögn */

  // Tómt og villu state, við gerum ekki greinarmun á þessu tvennu, ef við
  // myndum vilja gera það þyrftum við að skilgreina stöðu fyrir niðurstöðu
  if (!result) {
    /* TODO útfæra villu og tómt state */
  }

  /* TODO útfæra ef gögn */
}
