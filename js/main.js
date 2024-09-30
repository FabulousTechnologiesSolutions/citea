document.getElementById("toggleButton").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
});
document.getElementById('toggleButton').addEventListener('click', function (toggle) {
        toggle.preventDefault();
        var left = document.querySelector('.left');
        if (left.style.display === 'none' || left.style.display === '') {
            left.style.display = 'block';
        } else {
            left.style.display = 'none';
        }
});
document.getElementById('toggleSwitch').addEventListener('click', function () {
    this.classList.toggle('active');
    const isactive = this.classList.contains('active');
    const sideparap = document.querySelectorAll('.menupara');
    const logout = document.querySelectorAll('.bottompara');
    const left = document.querySelectorAll('.left');
    const right = document.querySelectorAll('.right');

    sideparap.forEach(function (menuItem) {
        menuItem.style.display = isactive ? 'none' : 'block'; 
    });

    logout.forEach(function (logoutItem) {
        logoutItem.style.display = isactive ? 'none' : 'block';
    });

    left.forEach(function (leftWidth) {
        leftWidth.style.width = isactive ? '100px' : '250px'; 
    });

    right.forEach(function (rightWidth) {
        rightWidth.style.width = isactive ? 'calc(100% - 120px)' : 'calc(100% - 270px)';
    });
});
window.addEventListener('resize', function () {
    const isactive = document.getElementById('toggleSwitch').classList.contains('active'); 
    const sideparap = document.querySelectorAll('.menupara');
    const logout = document.querySelectorAll('.bottompara');
    const left = document.querySelectorAll('.left');
    const right = document.querySelectorAll('.right');

    if (window.innerWidth > 992) {
        sideparap.forEach(function (menuItem) {
            menuItem.style.display = 'block'; 
        });

        logout.forEach(function (logoutItem) {
            logoutItem.style.display = 'block';
        });

        left.forEach(function (leftWidth) {
            leftWidth.style.width = '250px'; 
        });

        right.forEach(function (rightWidth) {
            rightWidth.style.width = 'calc(100% - 270px)';
        });
    } else {
        sideparap.forEach(function (menuItem) {
            menuItem.style.display = 'none'; 
        });

        logout.forEach(function (logoutItem) {
            logoutItem.style.display = 'none'; 
        });

        left.forEach(function (leftWidth) {
            leftWidth.style.width = '100px'; 
        });

        right.forEach(function (rightWidth) {
            rightWidth.style.width = 'calc(100% - 120px)';
        });
    }
});
