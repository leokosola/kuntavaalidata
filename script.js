var dataset = [];
for (let i = 0; i < 10; i++) {
    let newValue = Math.round(Math.random() * 20);
    dataset.push(newValue);
}

const waffle = d3.select('.waffle');

const numbers = d3.range(100);

waffle
    .selectAll('.block')
    .data(numbers)
    .enter()
    .append('div')
    .attr('class', 'block')
    .style('background-color', d => (d < 40 ? '#ff0000' : '#0000ff'));

// ************************************************************************************

var w = 1000;
var h = 600;
var radius = 7;
var padding = 20;

var scaleX = d3.scaleLinear()
    scaleX.domain([0, 1])
    scaleX.range([0, 1000]);

var scaleY = d3.scaleLinear()
    scaleY.domain([0, 1200])
    scaleY.range([600, 0]);

const svg = d3.select(".gender-scatter")
.append("svg")
// .attr("width", w)
// .attr("height", h)
.attr("viewBox", "0 0 1000 600");

// const text = d3.select(".gender-scatter")
// .append("p")
// .style("text-align", "center")
// .style("font-family", "'Helvetica', 'Arial', sans-serif")
// .text("50/50");


// svg.append("line")
//     .attr("x1", 0)
//     .attr("y1", 0)
//     .attr("x2", 0)
//     .attr("y2", h)
//     .attr("stroke", "black")
//     .attr("stroke-width", 1.5);

// svg.append("line")
//     .attr("x1", 500)
//     .attr("y1", 0)
//     .attr("x2", 500)
//     .attr("y2", h)
//     .attr("stroke", "black")
//     .attr("stroke-width", 3);

// svg.append("line")
//     .attr("x1", 1000)
//     .attr("y1", 0)
//     .attr("x2", 1000)
//     .attr("y2", h)
//     .attr("stroke", "black")
//     .attr("stroke-width", 1.5);

// var testidata = d3.csv("https://raw.githubusercontent.com/leokosola/kuntavaalidata/gh-pages/data.csv")
// .then(function(data) {
//     data.forEach(function(d) {
//         d.ehdokkaita = +d.ehdokkaita;
//         d.naisia = +d.naisia;

//         var circles = svg.selectAll("circle")
//             .data(data)
//             .enter()
//             .append("circle");

//             circles
//             .attr("opacity", 0)
//             .attr("cx", function(d) {
//                 return scaleX(d["naisia kaikista"]);
//             })
//             .attr("cy", function(d) {
//                 return scaleY(d.ehdokkaita)-radius*2;
//             })
//             .attr("r", radius)
//             .attr("fill", function(d) {
//                 if (d["naisia kaikista"]<0.49999999){return "#0000ff";}
//                 else {return "#ff0000";}
//             })
//             .transition()
//             .delay(function(d, i) {
//                 return i * 20;
//               })
//             .duration(250)
//             .attr("opacity", 0.3)
//          })
// });
        
        // svg.selectAll("text")
        // .data(data)
        // .enter()
        // .append("text")
        // .text(function(d) {
        //     if(d.ehdokkaita > 800 || d["naisia kaikista"]>0.5 || d["naisia kaikista"]<0.2)
        //     {
        //         return d.kunta;
        //     }
        // })
        // .attr("x", function(d, i) {
        //     // if(d["naisia kaikista"]<0.2){
        //     //     return d["naisia kaikista"]*1000;
        //     // }
        //     // else if(d.ehdokkaita > 800) {
        //     //     return d["naisia kaikista"]*1000-80;
        //     // }
        //     return scaleX(d["naisia kaikista"]);
        // })
        // .attr("y", function(d, i) {
        //     // if(d["naisia kaikista"]<0.2){
        //     //     return h-20-d.ehdokkaita/2-25-i*-0.15;
        //     // }
        //     return h-scaleY(d.ehdokkaita);
        // })
        // .attr("font-family", "Helvetica")
        // .style("fill", "black");







var axisX = d3.axisBottom()
                  .scale(scaleX)
                  .ticks(3);


svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0, " + (h - 20) + ")")
    .call(axisX);

    var axisY = d3.axisLeft()
                  .scale(scaleY)
                  .ticks(5);


svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(50, -20)")
    .call(axisY);




    //Scrollama

    var scroller = scrollama();

    function handleStepEnter(response) {
        response.element.style.opacity = 1;

        d3.csv("https://raw.githubusercontent.com/leokosola/kuntavaalidata/gh-pages/data.csv")
            .then(function(data) {
                data.forEach(function(d) {
                    d.ehdokkaita = +d.ehdokkaita;
                    d.naisia = +d.naisia;

                    var circles = svg.selectAll("circle")
                        .data(data)
                        .enter()
                        .append("circle");

                        circles
                        .attr("opacity", 0)
                        .attr("cx", function(d) {
                            return scaleX(d["naisia kaikista"]);
                        })
                        .attr("cy", function(d) {
                            return scaleY(d.ehdokkaita)-radius*2;
                        })
                        .attr("r", radius)
                        .attr("fill", function(d) {
                            if (d["naisia kaikista"]<0.49999999){return "#0000ff";}
                            else {return "#ff0000";}
                        })
                        .transition()
                        .delay(function(d, i) {
                            return i * 20;
                        })
                        .duration(250)
                        .attr("opacity", 0.3)
                    })
            });
    }

    function handleStepExit(response) {
        if (response.direction === 'up')
        response.element.style.opacity = 0;
        
    }

    scroller
    .setup({
       step: '.gender-scatter',
       offset: 0.67,
       debug: false
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


    var scroller2 = scrollama();

    function handleStepEnter2(response) {
        response.element.style.opacity = 1;
        console.log('enter');
        var ehdokkaat = document.getElementsByClassName('block');
        for(var i = 0; i < ehdokkaat.length; i++) {
            ehdokkaat[i].style.width = '20px';
            ehdokkaat[i].style.height = '20px';
        }
    }

    function handleStepExit2(response) {
        if (response.direction === 'up')
            response.element.style.opacity = 0;
    }

    scroller2
    .setup({
       step: '.waffle',
       offset: 0.67,
       debug: false
    })
    .onStepEnter(handleStepEnter2)
    .onStepExit(handleStepExit2);

    window.addEventListener('resize', scroller.resize);
    window.addEventListener('resize', scroller2.resize);