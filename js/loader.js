$(document).ready(function () {
    $('.sidenav').sidenav();    // initializing a sidenav
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({       // initiaizing a slider
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });      
    $('input.autocomplete').autocomplete({    //initializong autocomplete
        data: {
            "Calabar": null,
            "Akwa Ibom": null,
            "Bauchi": null,
            "Ogun": null,
            "Kaduna": null,
            "Abuja": null,
            "Minna": null,
            "Nassarawa": null,
            "Anambra": null,
          
        },
      });
    $('.scrollspy').scrollSpy();

});