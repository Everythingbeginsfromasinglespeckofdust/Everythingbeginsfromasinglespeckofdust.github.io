function goToPage(pageName) {
    window.location.href = pageName;
}

function toggleHeader() {
    const header = document.querySelector('header');
    const btn = document.getElementById('toggle-header-btn');
    if (header.style.display === 'none') {
        header.style.display = 'block';
        btn.textContent = '^';
    } else {
        header.style.display = 'none';
        btn.textContent = 'v';
    }
}

function goToProblem(problemPage) {
    window.location.href = problemPage;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
