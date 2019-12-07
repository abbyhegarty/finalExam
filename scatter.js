var dataset = [
  {
    max:23,
    topQ:17,
    median:10,
    bottomQ:5,
    min:2
  },
  {
    max:32,
    topQ:22,
    median:16,
    bottomQ:8,
    min:5
  },
  {
    max:13,
    topQ:8,
    median:6,
    bottomQ:2,
    min:0
  }
]



var svg = d3.select("body")
            .append("svg")
            .append("g")
            
        .attr("height", 500)
        .attr("width", 500)

d3.select("svg")
.selectAll("circle")

    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx",function(d){return (d.max)})
    .attr("cy",function(d){return (d.median)})
    .attr("r",3)
