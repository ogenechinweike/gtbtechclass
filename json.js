let justIn = document.querySelectorAll('h3');
let response = {};

for (let count = 0; count < justIn.length; count++) {
    response[count] = justIn[count].textContent;
}
document.write(JSON.stringify(response));