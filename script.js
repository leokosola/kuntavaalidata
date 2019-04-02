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

var w = 1000;
var h = 600;
var radius = 5;
var koordinaatit = [
    [37,134],
    [27,98],
    [41,29],
    [35,131],
    [37,94],
    [47,58],
    [42,45]
];

const svg = d3.select(".gender-scatter")
.append("svg")
.attr("width", w)
.attr("height", h);

const text = d3.select(".gender-scatter")
.append("p")
.style("text-align", "center")
.style("font-family", "'Helvetica', 'Arial', sans-serif")
.text("50/50");

svg.append("line")
    .attr("x1", 200)
    .attr("y1", 0)
    .attr("x2", 200)
    .attr("y2", h)
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);

svg.append("line")
    .attr("x1", 500)
    .attr("y1", 0)
    .attr("x2", 500)
    .attr("y2", h)
    .attr("stroke", "black")
    .attr("stroke-width", 3);

svg.append("line")
    .attr("x1", 800)
    .attr("y1", 0)
    .attr("x2", 800)
    .attr("y2", h)
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);

var testidata = d3.csv("data.csv")
.then(function(data) {
    data.forEach(function(d) {
        d.ehdokkaita = +d.ehdokkaita;
        d.naisia = +d.naisia;

        var circles = svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle");

            circles
            .attr("cx", function(d) {
                return d["naisia kaikista"]*1000;
            })
            .attr("cy", function(d) {
                return h-20-d.ehdokkaita/2;

            })
            .attr("r", 20)
            .attr("fill", function(d) {
                if (d["naisia kaikista"]<0.49999999){return "#0000ff";}
                else {return "#ff0000";}
            })
            .attr("opacity", 0.3)

         })


  });
