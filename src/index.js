import { empty } from './lib/elements.js';
import { renderDetails, renderFrontpage, searchAndRender } from './lib/ui.js';

/**
 * Fall sem keyrir við leit.
 * @param {SubmitEvent} e
 * @returns {Promise<void>}
 */
async function onSearch(e) {
  try {
      const result = await fetchDataAsync(e);

      console.log(result);
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

function fetchDataAsync(query) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Data for query '${query}'`);
      }, 1000); 
  });
}


/**
 * Athugar hvaða síðu við erum á út frá query-string og birtir.
 * Ef `id` er gefið er stakt geimskot birt, annars er forsíða birt með
 * leitarniðurstöðum ef `query` er gefið.
 */
function route() {
  const { search } = window.location;

  console.log(search);
  const qs = new URLSearchParams(search);
  console.log(qs)

  const query = qs.get('query') ?? undefined;
  const id = qs.get('id');
  const ekkitil = qs.get('ekkitil');
  const parentElementId= qs.get('parentElement');
  const parentElement = document.body;

  if (id && parentElement){
    renderDetails(parentElement, id);
  }
  else {
    renderFrontpage(parentElement, onSearch, query);
  }
}

// Bregst við því þegar við notum vafra til að fara til baka eða áfram.
window.onpopstate = function(event) {
  console.log('Popstate event triggered!');
  console.log('State data:', event.state);
};

const stateData = { message: 'Hello from onpopstate example!' };
const pageTitle = 'onpopstate Example';
const url = '/example';

history.pushState(stateData, pageTitle, url);

setTimeout(function() {
  history.back();
}, 2000);


// Athugum í byrjun hvað eigi að birta.
route();


