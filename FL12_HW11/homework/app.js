const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');


// function htmlToElements(html) {
//   let template = document.createElement('template');
//   template.innerHTML = html;
//   return template.content.childNodes;
// }


// const rows = htmlToElements('<ul class="Container"><li>Films<i class="material-icons">folder</i><ul><li>Iron man</li><li>Fantasi<i class="material-icons">folder</i><ul><li>Lord of the ring</li><li>New folder<i class="material-icons">folder</i></li></ul></li></ul></li><li>Documents<i class="material-icons">folder</i><ul><li>EPAM</li></ul></li></ul>')
// rootNode.append(...rows);
// for (let li of rootNode.querySelectorAll('li')) {
//   let span = document.createElement('div');
//   li.prepend(span);
//   span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
// }

// //  ловим клики на всём дереве
// rootNode.onclick = function(event) {

//   if (event.target.tagName !== 'DIV') {
//     return;
//   }

//   let childrenContainer = event.target.parentNode.querySelector('ul');
//   if (!childrenContainer){
//     return;
//   } // нет детей

//   childrenContainer.hidden = !childrenContainer.hidden;
// }
//<li><i class="material-icons">folder</i> ${element.title}</li>

//rootNode.insertAdjacentHTML('beforeend', '<ul><li>Films<ul><li>Iron man</li><li>Fantasi<ul><li>Lord of the ring</li><li>New folder</li></ul></li></ul></li><li>Documents</li><ul><li>EPAM</li></ul></ul>');

