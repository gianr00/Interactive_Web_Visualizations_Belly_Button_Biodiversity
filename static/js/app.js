
const url_samples_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function demographicsInfo (subject_id) {
    console.log("demographicsInfo subject_id:" , subject_id);
    
    d3.json(url_samples_data).then(function(data) {
        console.log(data);
    
        let data_metadata = Object.values(data.metadata);

        let data_demographic_by_id = data_metadata.filter (
            (subject_element) => subject_element.id == subject_id
        );

        //metadata data object
        console.log("data_demographic_by_id : ", data_demographic_by_id);
        let data_demographic = data_demographic_by_id [0];
        console.log("data_demographic          : ", data_demographic );
        
        // select the demographic Info area
        let demographicData = d3.select("#sample-metadata");
        // initialize the demographic Info area
        demographicData.html(" ");

    
       Object.entries(data_demographic).forEach(([key, value]) => {
            // console.log("key  : ", key  );
            // console.log("value: ", value );
            console.log(key, " : ", value  )
            // add demographicData in html
            demographicData.append("h6").text(key + ": " + value)
            
       });
 
    });
};


function chartBar(subject_id) {
    console.log("ChartBarBubble subject_id:", subject_id);
    // Fetch the JSON data from samples.json file and save in an object name data
    d3.json(url_samples_data).then(function (data) {
        console.log(data);

        let data_samples = Object.values(data.samples);

        let data_samples_by_id = data_samples.filter(
            (subject_element) => subject_element.id == subject_id
        );

        //sample_values data object
        console.log("data_samples_by_id : ", data_samples_by_id);
        let data_chart = data_samples_by_id[0];
        console.log("data_chart     : ", data_chart);

        // top ten samples_value

        let top10_sample_values = data_chart.sample_values.slice(0, 10).reverse();
        console.log("top10_sample_values: ", top10_sample_values);

        let top10_otu_ids = data_chart.otu_ids.slice(0, 10).reverse();
        top10_otu_ids = top10_otu_ids.map(id => "OTU " + id);
        console.log("top10_otu_ids      : ", top10_otu_ids);

        let top10_otu_labels = data_chart.otu_labels.slice(0, 10);
        console.log("top10_otu_labels      : ", top10_otu_labels);

        let trace1 = {
            x: top10_sample_values,
            y: top10_otu_ids,

            text: top10_otu_labels,
            type: "bar",
            orientation: "h"
        };

        var data = [trace1];

        let layout = {
            title: "Top 10 OTUs found in an individual",
            barmode: "group",
            // Include margins in the layout so the x-tick labels display correctly
            margin: {
                l: 100,
                r: 100,
                b: 30,
                t: 50
            }
        };
        Plotly.newPlot("bar", data, layout);

    });
};

function chartBubble(subject_id) {
    console.log("ChartBubble subject_id:", subject_id);
    // Fetch the JSON data from samples.json file and save in an object name data
    d3.json(url_samples_data).then(function (data) {
        console.log(data);

        let data_samples = Object.values(data.samples);

        let data_samples_by_id = data_samples.filter(
            (subject_element) => subject_element.id == subject_id
        );

        //sample_values data object
        console.log("data_samples_by_id : ", data_samples_by_id);
        let data_chart = data_samples_by_id[0];
        console.log("data_chart     : ", data_chart);

        //ext: top10_otu_ids,
        // ==== bubble chart
        let trace2 = {
            x: data_chart.otu_ids,
            y: data_chart.sample_values,
            mode: "markers",
            marker: {
                size: data_chart.sample_values,
                color: data_chart.otu_ids

            },
            text: data_chart.otu_labels
        };

        var data2 = [trace2];

        let layout2 = {
            xaxis: { title: "OTU ID" },
            height: 550,
            width: 1000
        };
        Plotly.newPlot("bubble", data2, layout2);



    });
};
function optionChanged (subject_id) {

    console.log("optionChanged  subject_id:" , subject_id);
    demographicsInfo (subject_id);
    chartBar (subject_id);
    chartBubble(subject_id);

function init() {
    

    d3.json(url_samples_data).then(function(data) {
        console.log(data);
    
        let data_names    = Object.values(data.names);
        let data_metadata = Object.values(data.metadata);
        let data_samples  = Object.values(data.samples);
    
        //log the names,  metadata and samples from data object
        console.log("data_names   : ", data_names);
        console.log("data_metadata: ", data_metadata);
        console.log("data_samples : ", data_samples);
        for (let name of data_names) {
            console.log("name: ", name);
            dropdownMenu.append('option').text(name).property('value', name);

        };


        let initial_subject_id = data_names[0];
        console.log("initial_subject_id: ", initial_subject_id)

        demographicsInfo (initial_subject_id);
        chartBar (initial_subject_id);
        chartBubble(initial_subject_id);
        

    });
};

init();

    






