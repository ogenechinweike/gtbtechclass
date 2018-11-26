//let topStories = document.querySelectorAll('li >a >h3');
//
//for(let count = 0; count<topStories.length; count ++){
//	document.write(topStories[count].textContent);
//    document.write("<br />");
//}


topStories = document.querySelectorAll('li >a >h3');
response ={};

for(let count = 0; count<topStories.length; count++){
	response[count] = topStories[count].textContent;
}
document.write(JSON.stringify(response));
