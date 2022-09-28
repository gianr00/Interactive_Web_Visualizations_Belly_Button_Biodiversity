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

function chartGauge2 (subject_id) {
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
        //mode  : "gauge+number+delta",
        //title : {text: "Belly Button Weekly Washing Frequency", font: { size: 24 } },
        //mode  : "gauge+number",
        // gauge
        var trace3 = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value : parseFloat(data_gauge.wfreq),
                
                title : {text: "Belly Button Washing Frequency<BR> <sup>Scrubs per Week</sup>" },
                type  : "indicator",
                mode  : "gauge+delta",
                delta : {'reference': 0},
//
//            textinfo: 'text',
//                  textposition: 'inside',
//            marker: {
//                    colors: ['','','','','','','','','','white'],
//                    labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//                    hoverinfo: 'label'
//                  },
                
                gauge : {axis: {range: [null, 9]},
                steps : [
                            { range: [0, 1], color: "rgb(230, 255, 230)" },
                            { range: [1, 2], color: "rgb(200, 240, 200)" },
                            { range: [2, 3], color: "rgb(180, 225, 180)" },
                            { range: [3, 4], color: "rgb(160, 210, 160)" },
                            { range: [4, 5], color: "rgb(140, 195, 140)" },
                            { range: [5, 6], color: "rgb(120, 180, 120)" },
                            { range: [6, 7], color: "rgb(100, 165, 100)" },
                            { range: [7, 8], color: "rgb(080, 150, 080)" },
                            { range: [8, 9], color: "rgb(060, 135, 060)" },
                            
                        ]
                       }
            }
        ];
        
        var layout3 = {
            width : 500
            ,height: 300
            ,margin: {t: 100, b:30, l:100, r:100}
        };

        Plotly.newPlot("gauge", trace3, layout3 );
    });
};








