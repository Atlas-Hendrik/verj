"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.el = el;
exports.empty = empty;

/**
 * Býr til element með nafni og bætir við öðrum elementum eða texta nóðum.
 * @param {string} name Nafn á elementi
 * @param  {...string | HTMLElement} children Hugsanleg börn: önnur element eða strengir
 * @returns {HTMLElement} Elementi með gefnum börnum
 */
function el(name) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var e = document.createElement(name);

  for (var _i = 0, _Object$keys = Object.keys(attributes); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    e.setAttribute(key, attributes[key]);
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {
    var child = _children[_i2];

    if (typeof child === 'string' || typeof child === 'number') {
      e.appendChild(document.createTextNode(child.toString()));
    } else {
      console.log(child);
      e.appendChild(child);
    }
  }

  return e;
}
/**
 * Fjarlægir öll börn `element`.
 * @param {HTMLElement} element Element sem á að tæma
 */


function empty(element) {
  if (!element || !element.firstChild) {
    return;
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
//# sourceMappingURL=elements.dev.js.map
