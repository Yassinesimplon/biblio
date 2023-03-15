import { emprunt } from "../models/emprunt.js";
import { User } from "../models/user.js"
import {livre} from "../models/livre.js"


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

export const borrowedBooksHistory = async (req, res) => {
    try {
      const userEmprunts = await emprunt.find({user: req.params.userId}).populate('livre');
      if (!userEmprunts) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(userEmprunts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };


export const getStats = async (req, res) => {
  try {
    const totalEmprunts = await emprunt.countDocuments();
    const totalLivres = await livre.countDocuments();
    res.json({ totalEmprunts, totalLivres });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
  