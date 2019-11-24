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

    if (asideWidget.classList.contains('slide-in-right-short')) {
        //close aside widget
        asideWidget.classList.remove('slide-in-right-short');
        asideWidget.classList.add('slide-out-right');
        asideButton.classList.remove('flicker-out-1');
        asideButton.style.display = 'flex';
        asideButton.classList.add('puff-in-center');
    } else {
        //open aside widget
        // asideButton.style.display = 'none';
        asideButton.classList.remove('scale-in-center');
        asideButton.classList.add('flicker-out-1');
        asideWidget.style.display = 'block';
        asideWidget.classList.remove('slide-out-right');
        asideWidget.classList.add('slide-in-right-short')
    }
}