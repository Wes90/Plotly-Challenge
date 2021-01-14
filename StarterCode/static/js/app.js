// let samplevalues = data.samples.map(info => info.sample_values);
// let otuID = data.samples.map(info => info.otu_ids);
// let otulabel = data.samples.map(info => info.otu_labels);

// console.log(samplevalues);
// console.log(otuID);
// console.log(otulabel);
    
// d3.select('#selDataset')

d3.json("samples.json").then(function(data) {
    console.log(data);
    
   var dropdown_id = data.samples.map(info => info.id);
    console.log(dropdown_id);


    var sel = d3.select('#selDataset');
    

    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });
});
    

    // Function to handle input change
  function optionChange(otu_value) {
    console.log('wow option change executed', otu_value);
  }

  
    
  


  
  

  

// let trace1 = {
//     type: "bar",
//     x: samplevalues,
//     y: otuID,

// };
// let data = [trace1];
// let layout = {
//     barmode: 'group'
// };
 

