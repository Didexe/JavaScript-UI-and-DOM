/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  return function (selector) {
      if (typeof selector !== 'string' && !selector instanceof HTMLElement) {
        throw new Error('Element must be a string');
      }
      if (typeof selector === 'string') {
        var element = document.getElementById(selector);
      } 
      if (selector instanceof HTMLElement) {
        element = selector;
      }
      if (element === null) {
        throw new Error('There is no element with such ID');
      }

      var buttons = [].slice.apply(element.getElementsByClassName('button'));
      var contents = [].slice.apply(element.getElementsByClassName('content'));
      buttons.forEach(function(button) {
        button.innerHTML = 'hide';
        button.addEventListener('click', showHide)
      });
      function showHide() {
          var nextcontent = this.nextElementSibling;
          if (nextcontent.className !== 'button' ) {
            while(nextcontent.className !== 'content') {
              nextcontent = nextcontent.nextElementSibling;
            }
            if(nextcontent.style.visibility === 'visible' || nextcontent.style.visibility === '') {
              nextcontent.style.visibility = 'hidden';
              this.innerHTML = 'show';
            } else {
              nextcontent.style.visibility = 'visible';
              this.innerHTML = 'hide';
            };
          };
        };
};
};
