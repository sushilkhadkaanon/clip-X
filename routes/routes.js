const { response } = require("express")
const path = require('path');
const { send } = require("process");

const Clip = require('.././models/clip');



module.exports = function (app) {


    app.post('/create', function (req, res) {

        Clip.exists({ _id: req.body.id }, async function (err, isPresent) {
            if (err) {
                
                res.send(err);
            } else {
                if(isPresent){
                    
                    res.render('error', { errormessage: 'Id already exists. Please choose an unique Id.' });
                } else {
                    
                    res.render('create', { id: req.body.id });
                }
            }
        });

    })



    app.post('/insert', async function (req, res) {
        await Clip.create({ _id: req.body.id, data: req.body.data });

        res.render('success',{successmessage:'Success! Remeber your Id is '+req.body.id})

    });


    app.post('/retrive', async function (req, res) {
        try {
            var data = "Loading.."
            data = await Clip.findById(req.body.id).exec();
            res.render('retrive', { id: req.body.id, data: data.data });
        } catch {
            res.render('error',{errormessage:'Clip does not exist. It might have been deleted.'});
        }


    })
}