let topStories = document.querySelectorAll('h2.rtp-slide-title > a');
let response = {};

for (let count = 0; count < topStories.length; count++) {
    response[count] = topStories[count].textContent;
}
document.write(JSON.stringify(response));
