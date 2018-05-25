module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_all()
            .then(selfie => res.status(200).send(selfie))
            .catch(() => res.status(500).send())
    },
    addItem: (req,res) => {
        const db = req.app.get('db');
        const {imageurl, item, price}=req.body

        db.add_item([imageurl, item, price])
            .then(selfie => res.status(200).send(selfie))
            .catch(() => res.status(500).send())
    },
    deleteItem: (req,res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_item([id])
        .then(selfie => res.status(200).send(selfie))
        .catch(() => res.status(500).send())

    },
    editItem: (req,res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.edit_item([id, imageurl, item, price])
        .then(selfie => res.status(200).send(selfie))
        .catch(() => res.status(500).send())
    } 
 }