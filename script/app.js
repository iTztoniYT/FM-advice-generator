//reference to the html
const advice = document.querySelector('.advice-gen');
const btn = document.querySelector('.button');
const patternDivider = document.querySelector('.pattern-divider-img');


const updateUI = (getQuotes) => {
    
    const {quotes} = getQuotes;

    advice.innerHTML = `
        <p class="advice">advice #${quotes.slip.id}</p>
        <p class="quotes">${quotes.slip.advice}</p>
        <img src="${getPatternDividerSrc()}" alt="image of a divider under a quote" class="pattern-divider-img">
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

const getPatternDividerSrc = () => {
    // Get the window width
    const windowWidth = window.innerWidth;

    // Choose the appropriate image source based on window width
    if (windowWidth < 375) {
        console.log('works');
        return "./images/pattern-divider-mobile.svg";
    } else {
        return "./images/pattern-divider-desktop.svg";
    }
};

// Event listener for window resize
window.addEventListener('resize', () => {
    // Update the pattern divider image source on window resize
    patternDivider.src = getPatternDividerSrc();
});


//create an eventlistener
btn.addEventListener('click', () => {
    getQuotes()
        .then(data => {
            updateUI(data);
        })

});

updateInitialQuote();

