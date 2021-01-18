
// creating filter for top 10 otu's
function filtertopOTUs(otu) {
  return otu.otu_ids.slice();
}



//Grab data
var belly_data;

d3.json("samples.json").then(function(data) {
  navel_data = data;
    console.log(data);
// Initialize page with default plot
function init(){
  test = [{
    x: [],
    y: [] }];

  Plotly.newPlot("bar", test);
}
 d3.selectAll("#selDataset");
 init();
//Use filter() to pass the function as its argument
var filteredotu = data.samples.filter(filtertopOTUs);
// console.log(filteredotu);

var datatest = filteredotu.map(info => info.sample_values);
// console.log(datatest);
    
var dropdown_id = data.samples.map(info => info.id);
// console.log(dropdown_id);

var sel = d3.select('#selDataset');
    
//Append data to dropdown menu

    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });


//Create variables


});

 
  //Create optionChanged function
function optionChanged(otu_value) {
  var parse_otu_value = +otu_value;
  console.log('otu value is', parse_otu_value);
  var id_data = navel_data.samples.filter(s => s.id == otu_value);
  var otuID = id_data[0].otu_ids.slice(0,10);
  console.log("top 10 otu's" ,otuID);
  var samplevalue = id_data[0].sample_values.slice(0,10);
  var otu_label
  var samplevalues = data.samples.map(info => info.sample_values);
  var samplevalues = data.samples.map(info => info.sample_values);

};


  


 
  
   

  
    
  


  
  

  

// let trace1 = {
//     type: "bar",
//     x: samplevalues,
//     y: otuID,

// };
// let data = [trace1];
// let layout = {
//     barmode: 'group'
// };
 

