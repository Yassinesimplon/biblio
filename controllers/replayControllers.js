import { replay } from "../models/replay.js"


export const newreplay = async (req, res) => {
    try {
        const new_replay = new replay({

            replay: req.body.title,
            
        });

        await new_replay.save()
        res.send(new_replay)
    }
    catch (err) {
        console.log(err)
    }
}