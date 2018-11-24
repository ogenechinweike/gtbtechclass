//This code will help you extract news from Guardian newspaper
var topStories = document.querySelectorAll('span.title')
let response = Array();
for (count = 0; count < topStories.length; count++){
document.write(topStories[count].textContent)
document.write("<br/>")
}


//This code will help you extract and put in an array news from Guardian newspaper
let topStories = document.querySelectorAll('span.title');
let response = {};

for (count = 0; count < topStories.length; count++){
    response[count] = topStories[count].textContent;
}
document.write(JSON.stringify(response))


