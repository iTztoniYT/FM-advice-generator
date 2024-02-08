//reference to the html
const advice = document.querySelector('.advice-gen');
const btn = document.querySelector('.button');



const updateUI = (getQuotes) => {
    
    const {quotes} = getQuotes;

    advice.innerHTML = `
        <p class="advice">advice #${quotes.slip.id}</p>
        <p class="quotes">${quotes.slip.advice}</p>
        <img src="./images/pattern-divider-desktop.svg" alt="image of a divider">
    `;
};


const getQuotes = async () => {
    const quotes = await quote();
    return {quotes: quotes};
};

// Function to update the UI initially
const updateInitialQuote = () => {
    getQuotes()
        .then(data => {
            updateUI(data);
        });
};


//create an eventlistener
btn.addEventListener('click', () => {
    getQuotes()
        .then(data => {
            updateUI(data);
        })

});

updateInitialQuote();

