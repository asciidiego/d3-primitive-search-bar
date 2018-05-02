var typed = new Typed('#title', {
    // Waits 1000ms after typing "First"
    strings: ["Google. ^1000 Made simpler."]
});

let search_box = d3.select('#main-search');

search_box.on('mouseover', function () {
    d3.select('#parallax-div')
        .style("transform", "translateZ(2em)");
    })
    .on('mouseout', function () {
        d3.select('#parallax-div')
            .style("transform", "translateZ(0)");
    });