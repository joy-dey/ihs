document.getElementById('year').innerHTML = new Date().getFullYear();

var scrollpos = window.scrollY;
var header = document.getElementById("cta");

function add_class_on_scroll() {
    header.classList.add("d-block");
}

function remove_class_on_scroll() {
    header.classList.remove("d-block");
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos > 15) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});


let autotext = document.getElementById('bannertitle');

var typewriter = new Typewriter(bannertitle, {
    loop: true
});

typewriter.typeString('Welcome to Imperial Health Care Services')
    .pauseFor(2500)
    .deleteAll()
    .typeString(`Tripura's largest Home Health Care Company`)

.pauseFor(2500)
    .start();