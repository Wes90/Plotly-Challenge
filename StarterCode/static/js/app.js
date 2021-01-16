//Create optionChanged function
function optionChanged(otu_value) {
  var parse_otu_value = +otu_value;
  console.log('otu value is', parse_otu_value);
  if (parse_otu_value === parse_otu_value){
    console.log('correct');

  }
  else {
    console.log('error');
  }
}
 
// creating filter for top 10 otu's
function filtertopOTUs(otu) {
  return otu.otu_ids ;
}



//Grab data
d3.json("samples.json").then(function(data) {
    console.log(data);
//Initialize page with default plot
function init(){
  test = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];

  Plotly.newPlot("bar", test);
}
init(); 
d3.selectAll("#selDataset").on("change", optionChanged);

//Use filter() to pass the function as its argument
var filteredotu = data.samples.filter(filtertopOTUs);
// console.log(filteredotu);

var datatest = filteredotu.map(info => info.sample_values);
console.log(datatest);
    
var dropdown_id = data.samples.map(info => info.id);
// console.log(dropdown_id);

var sel = d3.select('#selDataset');
    
//Append data to dropdown menu

    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });


//Create variables

let samplevalues = data.samples.map(info => info.sample_values);
let otuID = data.samples.map(info => info.otu_ids);
let otulabel = data.samples.map(info => info.otu_labels);



});
 
  
  
   

  
    
  


  
  

  

// let trace1 = {
//     type: "bar",
//     x: samplevalues,
//     y: otuID,

// };
// let data = [trace1];
// let layout = {
//     barmode: 'group'
// };
 

