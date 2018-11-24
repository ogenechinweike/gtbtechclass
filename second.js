let topStories = document.querySelectorAll('h3');
let response = {};

for (let count = 0; count < topStories.length; count++) {
    response[count] = topStories[count].textContent;
}
document.write(JSON.stringify(response));