import React from 'react';
import ReactDom from 'react-dom' //Is needed to import onto the Dom

const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];

//this is a loop going through the array
const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task)));
//You can change the h1 to anything
//To display onto the index.html, add onto the element to display 'hello world'
ReactDom.render(element, document.getElementById('root'));
