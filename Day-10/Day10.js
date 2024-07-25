// Task 1

document.getElementsByClassName("button1").addEventListener('click', function() {
    document.getElementById('paragraph1').textContent = 'Text has been changed!';
})

// Task 2

document.getElementById('image1').addEventListener('dblclick', function() {
    this.style.display = (this.style.display === 'none') ? 'block' : 'none';
});

// Task 3

document.getElementById('div1').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Task 4

document.getElementById('div2').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
});

// Task 5

document.getElementById('input1').addEventListener('keydown', function(event){
    console.log("key pressed: " + event.key);
})

// Task 6

document.getElementById('input2').addEventListener('keyup', function() {
    document.getElementById('paragraph2').textContent = this.value;
});

// Task 7

document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        console.log(key + ': ' + value);
    });
});

// Task 8

/*

<select id="select1">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
</select>
<p id="paragraph3"></p>

*/

document.getElementById('select1').addEventListener('change', function() {
    document.getElementById('paragraph3').textContent = this.value;
});


// Task 9

document.getElementById('list1').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item text: ' + event.target.textContent);
    }
});


// Task 10

/*

<div id="parent">
    <button id="addItem">Add Item</button>
</div>


*/

document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'BUTTON' && event.target.id !== 'addItem') {
        console.log('Dynamically added button clicked: ' + event.target.textContent);
    }
});

document.getElementById('addItem').addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    document.getElementById('parent').appendChild(newButton);
});
