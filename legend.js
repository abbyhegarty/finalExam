   cScale = d3.scaleOrdinal(d3.schemeSet1) 

var drawLegend = function(cScale)
{
  
    

    
var names = ["bob","fred","cobra","zebra"] 
    

   var cScale = d3.scaleOrdinal(d3.schemeTableau10) 
    
   
   var svg = d3.select("body")
    .append("svg")
    .append("g")
 
   
  d3.select("svg")
    .append("g")
    .attr("id","legend")

var gs = d3.select("#legend")
    .selectAll("g")
    .data(names)
    .enter()
    .append("g")
   .attr("transform",function(d,i)
    
   {
       return "translate(30,"+(i*14)+")"; //changing # will space each individual rect + text more
  })

gs.append("line")
    .attr("x1", 0)
    .attr("x2", 10)
    .attr("y1",5)
    .attr("y2", 5)
    .style("stroke", cScale)
    

    

gs.append("text")
    .text(function(arr)
         { return arr})
    .attr("x",20)
    .attr("y",10)
   .attr("fill", "black")
         

}

drawLegend(cScale)
