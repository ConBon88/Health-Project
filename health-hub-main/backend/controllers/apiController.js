let fetch;

import('node-fetch').then(nodeFetch => {
    fetch = nodeFetch.default;
})

//get list of drugs
const getDrugs = async (req,res) => {
    const {field, term} = req.query
    
    //api link
    const apiURL = `https://api.fda.gov/drug/label.json?search=${field}:${term}&limit=10`
    const drug = await fetch(apiURL)
    
    //if there's no results
    if(!drug.ok){
        res.status(404).json({error: 'No result(s) found!'})
        return // Return early to prevent further execution.
    }
    
    //logged in terminal
    console.log("passed")
    
    //convert file to json format
    const data = await drug.json()
    
    //store specific information from the data
    const specificData = await data.results.map(result => ({
        id: result.id,
        brand_name: result.openfda.brand_name,
        purpose: result.purpose,
        active_ingredient: result.active_ingredient
    }))
    
    res.status(200).json(specificData)
}

module.exports = {
    getDrugs
}

/* Searchable fields
openfda.brand_name
active_ingredient

*/