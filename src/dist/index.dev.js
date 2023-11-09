"use strict";

var _elements = require("./lib/elements.js");

var _ui = require("./lib/ui.js");

/**
 * Fall sem keyrir við leit.
 * @param {SubmitEvent} e
 * @returns {Promise<void>}
 */
function onSearch(e) {
  return regeneratorRuntime.async(function onSearch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
}

/**
 * Athugar hvaða síðu við erum á út frá query-string og birtir.
 * Ef `id` er gefið er stakt geimskot birt, annars er forsíða birt með
 * leitarniðurstöðum ef `query` er gefið.
 */
function route() {
  var search = window.location.search;
  console.log(search);
  var qs = new URLSearchParams(search);
  console.log(qs);
  var query = qs.get('query');
  var id = qs.get('id');
  var ekkitil = qs.get('ekkitil');
  var parentElament = '';

  if (id) {
    (0, _ui.renderDetails)(parentElement, id);
  } else {
    (0, _ui.renderDetails)(parentElament, onSearch, query);
  }
} // Bregst við því þegar við notum vafra til að fara til baka eða áfram.


window.onpopstate = function () {
  /* TODO bregðast við */
}; // Athugum í byrjun hvað eigi að birta.


route();
//# sourceMappingURL=index.dev.js.map
