const router = require("express").Router();
const User = require("../../models/User")


router.get("/", (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ error:"no messages" }))    
});

router.get("/:id", (req,res) => {
    User.findById(req.params.id)
    .then(msg => res.json(msg))
    .catch(err => res.status(404).json({error: "no message found"}))
})

router.post("/", (req, res) => {
   // res.send("here")
    const newUser = new User(req.body)
    newUser.save()
    .then(post => res.json(post))
    .catch(err => res.status(404).json(err))
})

router.delete("/:id", (req, res) => {
    User.deleteOne({id:req.params.id})
    .then(r => res.json(r))
    .catch(err => res.status(404).json(err))
})

router.put("/:id", (req, res) => {
    User.updateOne({id: req.params.id}, req.body)
    .then(r => res.json(r))
    .catch(err => res.status(404).json(err))
})

module.exports = router;