justIn = document.querySelectorAll("h3");
for (let count= 0; count<justIn.length;count++){
    document.write(justIn[count].textContent);
	document.write("<br />");
	}

let response = {};
for (let count = 0; count < justIn.length; count++) {
    response[count] = justIn[count].textContent;
    }
document.write(JSON.stringify(response));