
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var imgs = slideshow.querySelectorAll(`[role="list"] img`); // Get an array of slides

    var index = 0, time = 5000;
    imgs[index].classList.add('active');

    setInterval( () => {
        imgs[index].classList.remove('active');

        //Go over each slide incrementing the index
        index++;

        // If you go over all slides, restart the index to show the first slide and start again
        if (index === imgs.length) index = 0;

        imgs[index].classList.add('active');

    }, time);
}