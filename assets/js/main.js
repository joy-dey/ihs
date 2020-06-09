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