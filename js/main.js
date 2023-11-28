// cat pictures

function changeImage() {
    fetch("https://cataas.com/cat")
        .then(response => {
            document.getElementById('catImage').src = response.url;
        })
        .catch(error => {
            console.error('There has been an error on changing cat image:', error);
        });
}

// cat facts 

function fetchCatFact() {
    fetch("https://cat-fact.herokuapp.com/facts/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data && data.text) {
                const catFact = data.text;
                document.getElementById('catFact').innerText = `${catFact}`;
            } 
        })
        .catch(error => {
            console.error('There has been an error on changing cat fact:', error);
        });
}