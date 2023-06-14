const express = require("express");
const {selectAll} = require("../database/querys");
const router = express.Router();

router.get("/", (req, res, next) => {
    selectAll().then(e => {
        res.render('home', {
            users:e
        });
    })

   
    next;
})
router.post("/", (req,res,next) => {
    users.push(req.body)
    res.render('home', {users: users})
    next;
})
router.get("/newUser", (req, res, next) => {
    res.render("newUser");
    next;
}) 

module.exports = router