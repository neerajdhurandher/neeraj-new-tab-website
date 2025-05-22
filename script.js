//  on load of the page, load the default content
window.onload = function () {
    // Redirect to /home if on the root path
    if (window.location.pathname === '/neeraj-new-tab-website' || window.location.pathname === '/index.html') {
        navigateTo('/home');
    }
}

function navigateTo(path) {
    const container = document.getElementById("content-div");
    // split the path based on the '/' character
    const pathParts = path.split('/');
    loadHtmlContent(pathParts[1]);
    container.style.display = "block";

    let baseUrl = window.location.pathname;
    // remove the last part of the path
    baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/'));

    let url_path = baseUrl + path;

    history.pushState(null, null, url_path);
}

function loadHtmlContent(path) {
    fetch(path + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}

// if any kind of error occurs, show the /home page
window.addEventListener('error', function (event) {
    console.error('Error occurred:', event);
    // Redirect to /home if an error occurs
    navigateTo('/home');
});