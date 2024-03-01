const main = document.querySelector('main');
//Three Good Jokes
const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
const joke2 = "Why did the scarecrow win an award? Because he was outstanding in his fields";
const joke3 = "What do you call fake spaghetti? An Impasta";
const jokesTemplate = `
<h2>My Jokes</h2>
<ul>
<li>${joke1}</li>
<li>${joke2}</li>
<li>${joke3}</li>
</ul>
`;
main.innerHTML = jokesTemplate;
const paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";
document.body.appendChild(paragraph);