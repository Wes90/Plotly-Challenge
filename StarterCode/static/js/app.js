let samplevalues = data.samples.map(info => info.sample_values);
let otuID = data.samples.map(info => info.otu_ids);
let otulabel = data.samples.map(info => info.otu_labels);
// console.log(dates);
console.log(samplevalues);
console.log(otuID);
console.log(otulabel);
    


d3.json("samples.json").then(function(data) {
    console.log(data);
    d3.select('#selDataset')
   
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
 

// Plotly.newPlot("bar", data, layout);