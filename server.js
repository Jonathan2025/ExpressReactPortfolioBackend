// 1) Now we need to import the dependencies

const express = require("express")
const cors = require("cors")

// import JSON files 
const projects = require("./projects.json")
const about = require("./about.json")

// create our app object 
const app = express()

// set up the cors middleware 
app.use(cors())

// NEW Serve static files from the public folder
app.use(express.static('public')); 




// home route for testing our app 
app.get("/", (req,res) => {
    res.send("Hello World")
})

// route for retrieving our projects 
app.get("/projects", (req,res) => {
    // send projects via JSON
    res.json(projects)
})

// Route for retrieving the about page 
app.get("/about", (req,res) => {
    // send projects via JSON
    res.json(about)
})


//declare a variable for our port number
const PORT = process.env.PORT || 4000


// Have a port listener 
app.listen(PORT, ()=> console.log((`Listening on port ${PORT}`)))