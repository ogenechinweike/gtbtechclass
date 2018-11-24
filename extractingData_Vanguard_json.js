//Extracting Data from Vanguard

topStories = document.querySelectorAll('h2.rtp-slide-title > a');
let response = {};

for (let count = 0; count < topStories.length; count++){
response[count] = topStories[count].textContent;
}

document.write(JSON.stringify(response));

//Output in JSON format

{"0":"How I arrived Eagle Square as President, returned as common man – Jonathan","1":"How I arrived Eagle Square as President, returned as common man – Jonathan","2":"Our prayers made them angry and they brutalised us – Reverend fathers","3":"Militarisation of polls: PDP reports Buhari to UN, demands resignation of INEC boss","4":"Man chops off another man’s wrist over girl-friend in Yola","5":"Buhari’s ‘Next Level’ of Promises","6":"Buhari summons service chiefs over Boko Haram’s killing of soldiers","7":"Boko Haram Killings: Buhari sends Defence Minister to Chad for emergency security meeting","8":"You will not escape jail, eventually, Buhari tells corrupt leaders"}