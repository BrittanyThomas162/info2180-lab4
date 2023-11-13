window.addEventListener('load', function() {
    let searchBtn = document.querySelector("#searchBtn");
    let resultsDiv = document.querySelector("#results");
    
    searchBtn.addEventListener('click',function(event) {
        event.preventDefault();
        
        let searchVal = document.querySelector("#searchVal").value.trim();

        fetch(`superheroes.php?query=${searchVal}`)
            .then(response =>{
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('Something went wrong!')
                }
            })
            .then(data => {
                resultsDiv.innerHTML = data;

            })
            .catch(error => alert(error));

    });

    
});