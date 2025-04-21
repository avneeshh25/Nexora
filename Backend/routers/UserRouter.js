const express = require('express');
const Model = require('../models/UserModel');

const router = express.Router();

const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            if (err?.code === 11000) {
                return res.status(400).json({ message: 'Email already Registered' });
            }
            else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            console.log(err);
        });
});

// getall
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes url parameter
router.get('/getbycity/:city', (req, res) => {
    // Model.findOne()
    Model.findOne({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                // login success - generate token
                const { _id, name, email } = result;
                const payload = { _id, name, email };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'Error generating token' });
                        } else {
                            res.status(200).json({ token });
                        }
                    }
                )

            } else {
                // login failed - send error message
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;