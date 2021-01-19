//Grab data
var navel_data;
d3.json("samples.json").then(function(data) {
  navel_data = data;
  
    console.log(data);

    
var dropdown_id = data.samples.map(info => info.id);
    // console.log(dropdown_id);



// Landing variables
var x_grab = navel_data.samples.map(s => s.sample_values);
var y_grab = navel_data.samples.map(s => s.otu_ids);
var label_grab = navel_data.samples.map(s => s.otu_labels);

var first_sample_values = x_grab[0].slice(0,10);
var first_otu_ids = y_grab[0].slice(0,10);
var first_labels = label_grab[0].slice(0,10);

var first_otu_list =[]
  
  first_otu_ids.forEach(myfunction);
  function myfunction(item){
    first_otu_list.push('OTU '+ item);
  }

// Landing bar graph
var trace1 = {
  x: first_sample_values,
  y: first_otu_list,
  type: "bar",
  orientation: "h"
};

var data = [trace1];

var layout = {
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};
Plotly.newPlot("bar", data, layout);

// Landing bubble chart
var trace1 = {
  x: first_otu_ids,
  y: first_sample_values,
  text: first_labels,
  mode: 'markers',
  marker: {
    size: first_sample_values,
    color: first_otu_ids,
  }
};

var data = [trace1];

var layout = {
  xaxis: { title: "OTU ID" },
  showlegend: false,
  height: 600,
  width: 1200
};

Plotly.newPlot('bubble', data, layout);

// Landing gauge chart
var data = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    value: 420,
    title: { text: "Washing Frequency", font: { size: 24 } },
    delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "darkblue" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 250], color: "cyan" },
        { range: [250, 400], color: "royalblue" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 490
      }
    }
  }
];

var layout = {
  width: 400,
  height: 400,
  margin: { t: 25, r: 25, l: 25, b: 25 },
  paper_bgcolor: "white",
  font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', data, layout);  

// Append data to dropdown menu
var sel = d3.select('#selDataset');
    dropdown_id.forEach(function(otu_id) {
      sel.append('option').property('value', otu_id).text(otu_id);
    });

  d3.select("selDataset").on("change",optionChanged);
});

// Create optionChanged function
function optionChanged(sub_id) {
  
// On change variables
  var id_data = navel_data.samples.filter(s => s.id == sub_id);
  var otuID = id_data[0].otu_ids.slice(0,10);
  var sampleValue = id_data[0].sample_values.slice(0,10);
  var otuLabel = id_data[0].otu_labels.slice(0,10);
  
  console.log('otu value is', sub_id);
  console.log("top 10 otu's" ,otuID,sampleValue,otuLabel);

// list for bar graph labels
  var otu_list =[]

  otuID.forEach(myfunction);
  function myfunction(item){
    otu_list.push('OTU '+ item);
  }
  // console.log(otu_list);

// Demographic info
  var demo_data = navel_data.metadata.filter(s => s.id == sub_id); 
  console.log(demo_data);
  var demo = ['list of stuff', 'more stuff']
  var demo2 =['more stuff again']
  d3.select(".panel-body").text(demo, demo2);

// Bar chart
  var trace1 = {
    x:sampleValue,
    y: otu_list,
    type: "bar",
    orientation: "h"
  };

  var data = [trace1];

  var layout = {
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  Plotly.newPlot("bar", data, layout);

// Bubble chart
  var trace1 = {
    x: otuID,
    y: sampleValue,
    text: otuLabel,
    mode: 'markers',
    marker: {
      size: sampleValue,
      color: otuID,
    }
  };
  
  var data = [trace1];
  
  var layout = {
    xaxis: { title: "OTU ID" },
    showlegend: false,
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot('bubble', data, layout);
  
//Guage chart 
  var data = [
    {
      type: "indicator",
      mode: "gauge+number+delta",
      value: 420,
      title: { text: "Washing Frequency", font: { size: 24 } },
      delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 250], color: "cyan" },
          { range: [250, 400], color: "royalblue" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490
        }
      }
    }
  ];
  
  var layout = {
    width: 400,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "white",
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('gauge', data, layout);  
};
 



  


 
  
   

  
    
  


  
  

  



