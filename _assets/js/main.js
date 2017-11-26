// initialize scrollspy
$('body').scrollspy({ target: '.navbar-custom', offset: 40 });

// ------------------------------------------------------------------------------------------------------------------ //

// run on page load
$(document).ready(function() {
    // variable to hold url parameter
    var project = getUrlParameter('project');

    // if project equals psi2000-public-website
    if (project === 'psi2000-public-website') {
        // show corresponding modal
        $('#modal-project-1').modal('show');
    // if project equals student-portal
    } else if (project === 'student-portal') {
        // show corresponding modal
        $('#modal-project-2').modal('show');
    // if project equals psi2000-marketing-videos
    } else if (project === 'psi2000-marketing-videos') {
        // show corresponding modal
        $('#modal-project-3').modal('show');
    // if project equals coach-me-promotional-video
    } else if (project === 'coach-me-promotional-video') {
        // show corresponding modal
        $('#modal-project-4').modal('show');
    // if project equals graphic-design-portfolio
    } else if (project === 'graphic-design-portfolio') {
        // show corresponding modal
        $('#modal-project-5').modal('show');
    // if project equals interact-magazine-article
    } else if (project === 'interact-magazine-article') {
        // show corresponding modal
        $('#modal-project-6').modal('show');
    // if project equals photography-portfolio
    } else if (project === 'photography-portfolio') {
        // show corresponding modal
        $('#modal-project-7').modal('show');
    }

    // initialize lazy
    $(".lazy").Lazy();
});

// ------------------------------------------------------------------------------------------------------------------ //

// gets parameter from url
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------ //

// smooths scroll on anchor click
$('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 40)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

// ------------------------------------------------------------------------------------------------------------------ //

// variable to hold modal
var modal_custom = $(".modal-custom");
// on modal shown event
modal_custom.on("shown.bs.modal", function(){
    // hide navbar
    $(".navbar-custom").hide();
    // initialize lazy
    $(".modal-custom .modal-lazy").Lazy({
        appendScroll: $(".modal-custom"),

    });
});
// on modal hidden event
modal_custom.on("hidden.bs.modal", function(){
    // show navbar
    $(".navbar-custom").show();
});

// ------------------------------------------------------------------------------------------------------------------ //

//Sets autocomplete to false if browser is webkit
//Detecting Chrome and Safari
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

//If Chrome, do the following
if (isChrome) {
    $('input').attr('autocomplete', 'false');
}

//If Chrome, do the following
if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
    $('input:-webkit-autofill').each(function(){
        var text = $(this).val();
        var name = $(this).attr('name');
        $(this).after(this.outerHTML).remove();
        $('input[name=' + name + ']').val(text);
    });
}

//If Safari, do the following
if (isSafari) {
    $('input').attr('autocomplete', 'false');
}