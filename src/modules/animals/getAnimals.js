import Animal from './Model';

export default function getAnimals(req, res) {
    Animal.find()
        .sort({_id: -1})
        .exec()
        .then(result => {
            if (!result) {
                return res.status(404).send('Animals not found')
            }
            // const reversed = result.reverse()
            res.status(200).json(result);
        }).catch(err => {
        console.log(err);
        console.error('Error updating task:', err);
        res.status(500).send('Internal Server Error');
    });
}
