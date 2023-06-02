// creating new element 
var main_content = document.getElementById('main_content');

var new_heading = document.createElement('h2');
var new_phrase = document.createComment('p');

new_heading.innerHTML = "welcome";
new_phrase.innerHTML = " im surendra kumar ";
main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);

