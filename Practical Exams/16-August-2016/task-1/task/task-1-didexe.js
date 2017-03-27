/* globals module, document, HTMLElement, console */

function solve() {
    return function(selector, isCaseSensitive) {
        var root = selector,
        addField,
        addLbl,
        addInput,
        addBtn,

        searchField,
        searchLbl,
        searchInput,

        displayField,
        itemsList,
        listItem,
        removeBtn,
        itemText,
        resultsList,
        fragment;

        isCaseSensitive = !!isCaseSensitive;
        if (typeof root === 'string') {
            root = document.querySelector(selector);
        }
        if (!root || !(root instanceof HTMLElement)) {
            throw new Error ('Invalid HTML or selector')
        }
        root.className = 'items-control';
        fragment = document.createDocumentFragment();

        addField = document.createElement('div');
        addField.setAttribute('class', 'add-controls');
        
        addLbl = document.createElement('label');
        addLbl.innerHTML = 'Enter text:';

        addInput = document.createElement('input');
        addInput.setAttribute('type', 'text');

        addBtn = document.createElement('a');
        addBtn.className = 'button';
        addBtn.innerHTML = 'Add';
        addBtn.addEventListener('click', addItem);

        addLbl.appendChild(addInput);
        addField.appendChild(addLbl);
        addField.appendChild(addBtn);

        searchField = document.createElement('div');
        searchField.className = 'search-controls';

        searchLbl = document.createElement('label');
        searchLbl.innerHTML = 'Search:';

        searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'text');
        searchInput.addEventListener('keyup', filterContent);

        searchLbl.appendChild(searchInput);
        searchField.appendChild(searchLbl);

        displayField = document.createElement('div');
        displayField.className = 'result-controls';

        itemsList = document.createElement('ul');
        itemsList.className = 'items-list';

        listItem = document.createElement('li');
        listItem.className = 'list-item';

        removeBtn = document.createElement('a');
        removeBtn.className = 'button button-delete'
        removeBtn.innerHTML = 'X';

        itemText = document.createElement('strong');

        listItem.appendChild(removeBtn);
        listItem.appendChild(itemText);

        itemsList.addEventListener('click', removeItem);

        displayField.appendChild(itemsList);

        resultsList = document.getElementsByClassName('list-item');

        fragment.appendChild(addField);
        fragment.appendChild(searchField);
        fragment.appendChild(displayField);

        root.appendChild(fragment);

        function addItem() {
            var text = addInput.value;
            if (text.length == 0) {
                return;
            };
            itemText.innerHTML = text;
            var newItem = listItem.cloneNode(true);
            itemsList.appendChild(newItem);
            addInput.value = '';
        }
        function removeItem(ev) {
            var delItem = ev.target.parentElement;
            if(ev.target.className.indexOf('button-delete') < 0) {
                return;
            }
            itemsList.removeChild(delItem);
        }
        function filterContent() {
            if (!isCaseSensitive) {
                var query = searchInput.value.toLowerCase();
                for (var item of resultsList) {
                    if (item.children[1].innerHTML.toLowerCase().indexOf(query) < 0) {
                        item.style.display = 'none';
                    } else {item.style.display = ''}
                }
            } else {
                var query = searchInput.value;
                for (var item of resultsList) {
                    if (item.children[1].innerHTML.indexOf(query) < 0) {
                        item.style.display = 'none';
                    } else {item.style.display = ''}
                }
            }
        }
    };
}

module.exports = solve;