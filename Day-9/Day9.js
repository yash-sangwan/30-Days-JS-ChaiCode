// Task 1

document.getElementById('myElement').textContent = 'New Text Content';

// Task 2

document.querySelector('.myClass').style.backgroundColor = 'blue';

// Task 3

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
document.body.appendChild(newDiv);

// Task 4

const newListItem = document.createElement('li');
newListItem.textContent = 'New List Item';
document.querySelector('ul').appendChild(newListItem);

// Task 5

const elementToRemove = document.getElementById('elementToRemove');
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6

const parentElement = document.getElementById('parentElement');
parentElement.removeChild(parentElement.lastChild);

// Task 7

document.querySelector('img').src = 'newImage.jpg';

// Task 8

const element = document.querySelector('.myClass');
element.classList.add('newClass');
element.classList.remove('myClass');

// Task 9

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').textContent = 'Paragraph text changed!';
  });

// Task 10

document.querySelector('.hoverElement').addEventListener('mouseover', () => {
    document.querySelector('.hoverElement').style.borderColor = 'red';
  });
  