const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/', async (req, res) => {
    connection.query('SELECT * FROM appointments', (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Appointments not found");
        }
    });
});

router.get('/:item_valueid', async (req, res) => {
    const { item_valueid } = req.params;
    connection.query('SELECT * FROM appointments WHERE idclient = ?', [item_valueid], (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json("Appointments not found");
        }
    });
});

module.exports = router;
