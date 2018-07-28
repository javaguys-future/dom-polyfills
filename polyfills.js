// Let's start!

Element.prototype.empty = function () {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
}

Element.prototype.closest = function (selector) {
  if (selector[0] == '.') {
    var className = selector.slice(1);
    if (this.parentNode && this.parentNode.classList.contains(className)) {
      return this.parentElement;
    } else if (this.previousSibling && this.previousSibling.classList.contains(className)) {
      return this.previousElementSibling;
    } else if (this.nextSibling && this.nextSibling.classList.contains(className)) {
      return this.nextElementSibling
    }

    return null;
    
  } else if (selector[0] == '#') {
    var idName = selector.slice(1);
    if (this.parentNode && this.parentNode.hasAttribute('id') && this.parentNode.id == idName) {
      return this.parentElement;
    } else if (this.previousSibling && this.previousSibling.hasAttribute('id') && this.previousSibling.id == idName) {
      return this.previousElementSibling;
    } else if (this.nextSibling && this.nextSibling.hasAttribute('id') && this.nextSibling.id == idName) {
      return this.nextElementSibling;
    }

    return null;
  }
}
