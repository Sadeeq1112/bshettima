window.onload = function() {
    var allHeaders = document.querySelectorAll('.dynamic-header');

    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            allHeaders.forEach(function(headerDiv) {
                headerDiv.innerHTML = data;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}