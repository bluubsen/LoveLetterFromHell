window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-5rem";
    }
}

function toggleAsideWidget() {
    let asideButton = document.getElementById('aside-button');
    let asideWidget = document.getElementById('aside-widget');

    if (asideWidget.style.display === 'block') {
        //close aside widget
        asideWidget.style.display = 'none';
        asideButton.classList.remove('scale-in-center');
        asideButton.style.display = 'flex';
    } else {
        //open aside widget
        asideButton.style.display = 'none';
        asideWidget.style.display = 'block';

    }
}