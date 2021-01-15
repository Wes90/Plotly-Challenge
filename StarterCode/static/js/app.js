// let samplevalues = data.samples.map(info => info.sample_values);
// let otuID = data.samples.map(info => info.otu_ids);
// let otulabel = data.samples.map(info => info.otu_labels);

// console.log(samplevalues);
// console.log(otuID);
// console.log(otulabel);
    
// d3.select('#selDataset')

//Grab data
d3.json("samples.json").then(function(data) {
    console.log(data);
    
  var dropdown_id = data.samples.map(info => info.id);
  console.log(dropdown_id);
  
  var datasamples = data.samples;
  console.log(datasamples);

  
  var sel = d3.select('#selDataset');
    

    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });

});

var data_value = sel.property('value');
var sel = d3.select('#selDataset');

    // Function to handle input change
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
  var dataset = +data_value;
  console.log(dataset);
   

  
    
  


  
  

  

// let trace1 = {
//     type: "bar",
//     x: samplevalues,
//     y: otuID,

// };
// let data = [trace1];
// let layout = {
//     barmode: 'group'
// };
 

