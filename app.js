window.addEventListener('load', function() {
    let searchBtn = document.querySelector("#searchBtn");
    
    searchBtn.addEventListener('click',function(event) {
        event.preventDefault();

        fetch("superheroes.php")
            .then(response =>{
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('Something went wrong!')
                }
            })
            .then(data => {
                alert (data);
            })
            .catch(error => alert('There was an error' + error));

    });
});