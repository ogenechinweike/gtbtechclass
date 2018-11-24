let topStories = document.querySelectorAll('li > a > h3');

for (let count = 0; count < topStories.length; count++) {
    document.write(topStories[count].textContent);
    document.write("<br />");
}

document.write(JSON.stringify(response));