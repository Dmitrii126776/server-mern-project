import Animal from './Model';

export default function postAnimal(req,res){
    const newAnimal = new Animal({
        name:req.body.name,
        type:req.body.type,
        sex:req.body.sex,
        age:req.body.age,
        breed:req.body.breed,
        description:req.body.description,
        paragraph :req.body.paragraph,
        mainPhoto:req.body.mainPhoto,
        photos:req.body.photos,
    })
    newAnimal
        .save()
        .then(response=>{
        res.status(201).json(`Animal ${req.body.name} was created`)
    }).catch(err => {
        res.status(402).json(`Animal was not created`)
    })
        .finally(() => {
            console.log('END')
        });
}
