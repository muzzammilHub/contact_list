const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))



app.use(express.urlencoded({extended: false}));
app.use(express.static("assets"));


var contactList = [
    {
        name: "Hassan Abbas",
        phone: 2345673456
    },
    {
        name : "Muzzammil Hussain",
        phone:  1111111111
    },
    {
        name: "Baquar Hassan",
        phone: 22222222222
    },
    {
        name: "Saim Ather",
        phone: 33333333333
    }
]

app.get("/", (req, res)=>{
    // return res.render("home", { 
    //     title:"Contact List",
    //     contact_list: contactList
    // });
    Contact.find()
        .then((contacts)=>{
            return res.render("home",{
                title: "Contact List",
                contact_list : contacts
            })
        })
        .catch((err)=>{
            console.log("Error in finding data");
            return;
        })
})


app.post("/create-contact", (req, res)=>{
    // destructuring the object
    // const {name, phone} = req.body;
    // contactList.push({
    //     name: name,
    //     phone: phone
    // })
    // contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone:req.body.phone
    })
    .then((contact)=>{
        console.log(`Contact Created Successfully ${contact}`);
        return res.redirect("back");
    })
    .catch((error)=>{
        console.log("Error in creating contact");

        return res.redirect("back"); 
    });

})

app.get("/delete-contact", (req, res)=>{
    // const phone = Number(req.query.id)
    // const idx = contactList.findIndex(contact => contact.phone === phone)
    // contactList.splice(idx,1);
    const id = req.query.id;
    Contact.findByIdAndDelete(id)
        .then((deleteContact)=>{
            console.log(`Deleted Contact ${deleteContact}`);
        })
        .catch((err)=>{
            console.log("Error in deleting contact");
        })
    return res.redirect("back");
})

app.listen(port, (err)=>{
    if(err)
        console.log("Error in running server");
    console.log(`server is up and running on port ${port}`);
})
