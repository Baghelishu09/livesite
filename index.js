const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./users');
const port = process.env.PORT || 80;
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/feedback',async (req, res) => {
    const { uname, email, subject, message } = req.body;
    const feedback = new userModel({
        uname,
        email,
        subject,
        message
    });
    try{
        if(await userModel.findOne({email: email})){
            res.json({status:"failed", message: `Dear ${uname}, you have already submitted the feedback.`});
            return;
        }
        await feedback.save();
        res.json({status:"success", message: `Dear ${uname}, your feedback has been submitted successfully.`});
}
    catch(err){
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});