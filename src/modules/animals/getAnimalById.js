import Animal from './Model';

export default function getAnimalById(req, res) {
    Animal.findById(req.params.animalId)
        .then((animal) => {
            if (animal) {
                const {_id, name, type, sex, age, breed, description, paragraph, mainPhoto, photos} = animal;
                res.json({_id, name, type, sex, age, breed, description, paragraph, mainPhoto, photos})
            } else {
                res.status(404).json({message: "Animal not found"});
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Internal server error"});
        });
}


// export default function getAnimalById(req, res) {
//     const id = req.params;
//     Animal.findById(id).then((animal) => {
//         if (animal) {
//             const {_id, name, type, sex, age, breed, description, mainPhoto, photos} = animal;
//             res.json({_id, name, type, sex, age, breed, description, mainPhoto, photos})
//         } else {
//             res.status(404).json({message: "Animal not found"});
//         }
//     })
// }
