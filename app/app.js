// JS Pop-up box for email https://www.youtube.com/watch?v=MBaw_6cPmAw
// MailChimp API for sending out emails https://mailchimp.com/developer/guides/get-started-with-mailchimp-api-3/#Authentication_methods
// Mailchimp API https://www.youtube.com/watch?v=Gjk25N7WFkI

// Define Variables
let dadJoke = "";
const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
const loader = document.getElementById('loader');

const fetchJoke = () => {
    jokeText.innerHTML = "";
    var timer = setTimeout(function () {
        showLoader();
    }, 170);
    fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            clearTimeout(timer);
            hideLoader();
            dadJoke = data.joke;
            jokeText.innerHTML = data.joke;
        });
};

const showLoader = () => {
    loader.style.display = "block"
}



const hideLoader = () => {
    loader.style.display = "none"
}

///
/// EVENT LISTENER
///

// Click Generate New Joke Button
jokeButton.addEventListener('click', fetchJoke)