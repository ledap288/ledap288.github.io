var elem = document.querySelector('.job-title');
var typed = new TypeIt(elem, {
    strings: ["Frontend Devel", "Software Enginee", "Ah, Entrepreneur and Whatever Developer.", " \n Currently - Co-Founder & Lead Engineer at Jarvify  "],
    speed: 50,
    breakLines: false,
    autoStart: false,
    onComplete: function() {
        console.log('fuck');
        document.querySelector('.ti-cursor').remove();
    }
});
