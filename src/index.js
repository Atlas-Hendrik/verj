import { empty } from './lib/elements.js';
import { renderDetails, renderFrontpage, searchAndRender } from './lib/ui.js';

/**
 * Fall sem keyrir við leit.
 * @param {SubmitEvent} e
 * @returns {Promise<void>}
 */
async function onSearch(e) {
  /* TODO útfæra */
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
  const parentElement= ('');


  if (id){
    renderDetails(parentElement, id);
  }
  else {
    renderFrontpage(parentElement, onSearch, query);
  }
}

// Bregst við því þegar við notum vafra til að fara til baka eða áfram.
window.onpopstate = () => {
  /* TODO bregðast við */
};

// Athugum í byrjun hvað eigi að birta.
route();
