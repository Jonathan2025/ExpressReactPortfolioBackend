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

// home route for testing our app 
app.get("/", (req,res) => {
    res.send("Hello World")
})


// Route for retrieving projects 
app.get("/projects", (req,res) => {
    // send projects via JSON
    res.json(about)
})


//declare a variable for our port number
const PORT = process.env.PORT || 4000


// Have a port listener 
app.listen(PORT, ()=> console.log((`Listening on port ${PORT}`)))