//Grab data
var naval_data;

d3.json("samples.json").then(function(data) {
  navel_data = data;
  
    console.log(data);

    
var dropdown_id = data.samples.map(info => info.id);
// console.log(dropdown_id);

var sel = d3.select('#selDataset');
    
//Append data to dropdown menu

    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });

    d3.select("selDataset").on("change",optionChanged);
});

//Create optionChanged function
function optionChanged(sub_id) {
  // var parse_otu_value = +otu_value;
  //Create variables
  var id_data = navel_data.samples.filter(s => s.id == sub_id);
  var otuID = id_data[0].otu_ids.slice(0,10);
  var sampleValue = id_data[0].sample_values.slice(0,10);
  var otuLabel = id_data[0].otu_labels.slice(0,10);
  var otu_id_labels = String(otuID);
  console.log('otu value is', sub_id);
  console.log("top 10 otu's" ,otuID,sampleValue,otuLabel);
  
  
  
  var slicedData = id_data[0].sample_values.slice(0,10);
  var reversedData = slicedData.reverse();
  // var reversedData = otu_id_labels.reverse();
  // Plot data
  var trace1 = {
    x:sampleValue,
    y:otuID,
    type: "bar",
    orientation: "h"
  };

  var data = [trace1];

  var layout = {
    // title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  Plotly.newPlot("bar", data, layout);

  var trace1 = {
    x: otuID,
    y: sampleValue,
    mode: 'markers',
    marker: {
      size: sampleValue,
      color: otuID,
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 1100
  };
  
  Plotly.newPlot('bubble', data, layout);
    
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
 

