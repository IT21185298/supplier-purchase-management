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

router.route("/").get((req,res)=>{

    Supplier.find().then((Suppliers)=>{
        res.json(Suppliers)
    }).catch((err)=>{
        console.log(err)
    })

})
//http//localhost:8070/student/update

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateSuppliers = {
        name,
        age,
        gender
    }

    const update = await Supplier.findByIdAndUpdate(userId,updateSuppliers).then(()=>{
        res.status(200).send({status:"user updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })
    
    router.route("/delete/:id").delete(async(req,res)=>{
        let userId = req.params.id;

        await Supplier.findByIdAndDelete(userId).then(()=>{
            res.status(200).send({status:"user deleted"})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete user"})
        })
    })

})

router.route("/")


module.exports = router;
