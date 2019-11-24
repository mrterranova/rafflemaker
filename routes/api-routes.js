//Dependencies
//=========================================================

const db = require("../models/");

//Routes
//=========================================================
module.exports = function(app) {
    app.get("/api/raffle"), function(req, res) {
        db.Raffle.findAll({}).then(results=> {res.json(results);
        });
    };

    app.get("/api/raffle"), function(req, res) {
        db.Raffle.findOne({
            where: {name: ''}
        }).then(results => {
            res.json(results);
        })
    }
}