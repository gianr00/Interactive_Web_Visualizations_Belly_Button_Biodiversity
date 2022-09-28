//====================================================================================================
// Collect and Plot the Belly Button Biodiversity data
// by Rosie Gianan
//====================================================================================================

function chartGauge (subject_id) {
    console.log("chartGauge subject_id:" , subject_id);
    
    d3.json(url_samples_data).then(function(data) {
        console.log(data);
    
        let data_metadata_gauge = Object.values(data.metadata);

        let data_gauge_by_id = data_metadata_gauge.filter (
            (subject_element) => subject_element.id == subject_id
        );

        //metadata data object
        console.log("data_gauge_by_id: ", data_gauge_by_id);
        let data_gauge = data_gauge_by_id[0];
        console.log("data_gauge          : ", data_gauge );
        
        // gauge
        var trace3 = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value : parseFloat(data_gauge.wfreq),
                title : {text: "Belly Button Weekly Washing Frequency"},
                type  : "indicator",
                mode  : "gauge",
                gauge : {axis: {range: [null, 9]},
                        steps:[  {range: [0, 2], color: "yellow"}
                                , {range: [2, 4], color: "cyan"}
                                , {range: [4, 6], color: "teal"}
                                , {range: [6, 8], color: "lime"}
                                , {range: [8, 9], color: "green"}
                                ]}

            }
        ];
        
        var layout3 = {
            width : 500
            ,height: 300
            ,margin: {t: 20, b:40, l:100, r:100}
        };

        Plotly.newPlot("gauge", trace3, layout3 );
    });
};










