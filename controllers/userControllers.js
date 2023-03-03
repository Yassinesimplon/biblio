import { User } from "../models/user.js"


export const newuser = async (req, res) => {
    try {
        const new_user = new User({
            nom: req.body.nom,
            description: req.body.description,
    
            prenom:req.body.prenom,
            username:req.body.username,
            mail:req.body.mail,
            password:req.body.password,
            ROLE: "CLIENT"
            
        });

        await new_user.save()
        res.send(new_user)
    }
    catch (err) {
        console.log(err)
    }
}

export const newuser2 = async (req, res) => {
    try {
        const new_user = new User({
            nom: req.body.nom,
            description: req.body.description,
            prenom:req.body.prenom,
            username:req.body.username,
            mail:req.body.mail,
            password:req.body.password,
            ROLE: "admin"
            
        });

        await new_user.save()
        res.send(new_user)
    }
    catch (err) {
        console.log(err)
    }
}
