
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


        // dropdown data
        for (let name of data_names) {
            console.log("name: ", name);

        };

        // demographics data using first id
        let initial_subject_id = data_names[0];
        //let initial_subject_id = 943;
        console.log("initial_subject_id: ", initial_subject_id)

        demographicsInfo (initial_subject_id);
        chartGauge (initial_subject_id);
        

    });
};

init();

    






