function navigateTo(path) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === path.substring(1)) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    history.pushState(null, null, path);
}
