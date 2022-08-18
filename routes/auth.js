const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req,res)=>{
    
    // const Validation = schema.validate(req.body);
    // res.send(Validation);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;