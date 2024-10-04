var vg_1 = "labour_population_map_interactivity.json"; 
vegaEmbed("#map_projection", vg_1).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
    }).catch(console.error);


var vg_2 = "bar.json"; 
vegaEmbed("#stacked_bar", vg_2).then(function(result) { 
    // Access the second Vega view instance
}).catch(console.error);
    