console.log('hello world');

// for no. of imamages
 var images = document.getElementsByTagName('img');
 console.log(images); // 5

 // for no. of ancher tags

 var anchers = document.getElementsByTagName('a');
 console.log(anchers); //18

 // for checking  no. of paragraph
 
 var phrases = document.getElementsByTagName('p');
 console.log(phrases); //0

 // contents by ID
 var headings = document.getElementById('heading');
 console.log(headings); // tags with text 'Apni Kaksha'
  // for only txt inside 

console.log(headings.innerHTML); // Apni Kaksha 
// for node type
console.log(headings.nodeType); //1

