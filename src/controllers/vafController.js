import vafRepository from "../repositories/VafRepository.js";

export default class vafController{
    constructor(){
        this.vafrepository= new vafRepository;
    }

    async getAllList(req,res,next){
        const posts=await this.vafrepository.allPosts();
        if(posts){
            res.status(200).send(posts)
        }
        else{
            res.status(404).send('posts not found!!')
        }
    }

    addVaf(req,res,next){
        res.render('addVaf',{
            userEmail:req.session.email
        });
    }

}