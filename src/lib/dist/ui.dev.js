"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSearchForm = renderSearchForm;
exports.searchAndRender = searchAndRender;
exports.renderFrontpage = renderFrontpage;
exports.renderDetails = renderDetails;

var _api = require("./api.js");

var _elements = require("./elements.js");

/**
 * Býr til leitarform.
 * @param {(e: SubmitEvent) => void} searchHandler Fall sem keyrt er þegar leitað er.
 * @param {string | undefined} query Leitarstrengur.
 * @returns {HTMLElement} Leitarform.
 */
function renderSearchForm(searchHandler) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return document.createElement('div');
}
/**
 * Setur „loading state“ skilabað meðan gögn eru sótt.
 * @param {HTMLElement} parentElement Element sem á að birta skilbaoð í.
 * @param {Element | undefined} searchForm Leitarform sem á að gera óvirkt.
 */


function setLoading(parentElement) {
  var searchForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
}
/* TODO útfæra */

/**
 * Fjarlægir „loading state“.
 * @param {HTMLElement} parentElement Element sem inniheldur skilaboð.
 * @param {Element | undefined} searchForm Leitarform sem á að gera virkt.
 */


function setNotLoading(parentElement) {
  var searchForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
}
/* TODO útfæra */

/**
 * Birta niðurstöður úr leit.
 * @param {import('./api.types.js').Launch[] | null} results Niðurstöður úr leit
 * @param {string} query Leitarstrengur.
 */


function createSearchResults(results, query) {}
/* TODO útfæra */

/**
 *
 * @param {HTMLElement} parentElement Element sem á að birta niðurstöður í.
 * @param {Element} searchForm Form sem á að gera óvirkt.
 * @param {string} query Leitarstrengur.
 */


function searchAndRender(parentElement, searchForm, query) {
  return regeneratorRuntime.async(function searchAndRender$(_context) {
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
 * Sýna forsíðu, hugsanlega með leitarniðurstöðum.
 * @param {HTMLElement} parentElement Element sem á að innihalda forsíðu.
 * @param {(e: SubmitEvent) => void} searchHandler Fall sem keyrt er þegar leitað er.
 * @param {string | undefined} query Leitarorð, ef eitthvað, til að sýna niðurstöður fyrir.
 */
function renderFrontpage(parentElement, searchHandler) {
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var heading = (0, _elements.el)('h1', {
    "class": 'heading',
    'data-foo': 'bar'
  }, 'Geimskotaleitin 🚀');
  var searchForm = renderSearchForm(searchHandler, query);
  console.log(heading, searchForm);
  var container = (0, _elements.el)('main', {}, heading, searchForm);
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


function renderDetails(parentElement, id) {
  var container, backElement;
  return regeneratorRuntime.async(function renderDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          container = (0, _elements.el)('main', {});
          backElement = (0, _elements.el)('div', {
            "class": 'back'
          }, (0, _elements.el)('a', {
            href: '/'
          }, 'Til baka'));
          parentElement.appendChild(container);
          /* TODO setja loading state og sækja gögn */
          // Tómt og villu state, við gerum ekki greinarmun á þessu tvennu, ef við
          // myndum vilja gera það þyrftum við að skilgreina stöðu fyrir niðurstöðu

          if (!result) {}
          /* TODO útfæra villu og tómt state */

          /* TODO útfæra ef gögn */


        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}
//# sourceMappingURL=ui.dev.js.map
