
const url_samples_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function init() {
    

    d3.json(url_samples_data).then(function(data) {
        console.log(data);
    
        let data_names    = Object.values(data.names)
        let data_metadata = Object.values(data.metadata)
        let data_samples  = Object.values(data.samples)
    
        //log the names,  metadata and samples from data object
        console.log("data_names   : ", data_names)
        console.log("data_metadata: ", data_metadata)
        console.log("data_samples : ", data_samples)


        // dropdown data
        for (let name of data_names) {
            console.log("name: ", name);

        }



    });
};

init();

    






