const router = require('express').Router();

let data = require('../data.js');

router.get("/", (req, res) => {
    res.status(200).json(data);
});


let next_id = 4;

router.post("/", (req, res) => {

    let yeni_aktor = req.body;
    yeni_aktor.id = next_id;
    next_id++;
    data.push(yeni_aktor);
    res.status(201).json(yeni_aktor);

});

router.delete("/:id", (req, res) => {

    const delete_id = req.params.id;

    // server.delete komutu olduğu yerde gelen id değerimiz Numbera çevirilir.
    const del_aktor = data.find(aktor => aktor.id === Number(delete_id));
    console.log(del_aktor);

    if (del_aktor) {

        data = data.filter((aktor) => aktor.id !== Number(delete_id));
        res.status(204).end();
    } else {
        res
            .status(404)
            .json({ errorMessage: "Silmeye calistiginiz aktor sistemde yok." });
    }

});

router.put("/:id", (req, res) => {
    const guncellenecek_aktor_id = req.params.id;
    console.log(guncellenecek_aktor_id);
    const guncellenecek_aktor = data.find(aktor => aktor.id === Number(guncellenecek_aktor_id));
    //guncellenecek_aktor = req.body;
    console.log(req.body);


    if (guncellenecek_aktor) {
        data = data.filter(aktor => aktor.id !== Number(guncellenecek_aktor_id));

        let guncellenecek_aktor = req.body;
        guncellenecek_aktor.id = guncellenecek_aktor_id;
        data.push(guncellenecek_aktor);
        res.status(200).json(guncellenecek_aktor);


    } else {
        res.status(404).json({ errorMessage: "Olmayan aktoru guncelleyemezsiniz!!!" });
    }


});



router.get("/:id", (req, res) => {

    console.log("req.body", req.body);


    const { id } = req.params;
    const aktor = data.find(aktor => aktor.id === parseInt(id));
    if (aktor) {
        res.status(200).json(aktor);
    } else {
        res.status(404).send("Aradığınız aktör bulunamadı...");
    }

});





module.exports = router;