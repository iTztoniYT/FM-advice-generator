const quote = async () => {

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = response.json();
    return data;
};