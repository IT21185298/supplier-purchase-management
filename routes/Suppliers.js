const router = require("express").Router();
const supplier = require("../models/Supplier");
let Supplier = require("../models/Supplier");
//http:localhost:8070/supplier/add
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newSupplier = new Supplier({

        name,
        age,
        gender
    })

    newSupplier.save().then(()=>{
        res.json("student Added")
    }).catch(()=>{
        console.log(err);
    })
})


module.exports = router;
