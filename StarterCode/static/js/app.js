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


//Grab data
d3.json("samples.json").then(function(data) {
    console.log(data);
    
  var dropdown_id = data.samples.map(info => info.id);
  console.log(dropdown_id);

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
 

