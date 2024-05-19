import mongoose from "mongoose";
import OemRepository from "../repositories/OemRepository.js";
import bcrypt from 'bcrypt';
import OemModel from "../models/OemModel.js";
import vafRepository from "../repositories/VafRepository.js";

class OemController{

    constructor(){
        this.oemRepository = new OemRepository;
        this.vafrepository= new vafRepository;
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
      }


    getLandingPage(req,res,next){
        res.render('landing-page');
    }
    getLogin(req,res,next){
        res.render('login', { errorMessage: null });
    }

    async signUp(req, res, next) {
        const {
          name,
          email,
          password,
          OEM,
        } = req.body;
        try{
          
        const hashedPassword = await bcrypt.hash(password, 12)
        // console.log(name, email , hashedPassword, OEM )
        const user = new OemModel(
            name,
            email,
            hashedPassword,
            OEM
          );
        const newuser=await this.oemRepository.signUp(user);
        if(newuser){
            res.render('login', { errorMessage: null });
        }
        else{
            res.render('login', { errorMessage: 'something went wrong' });
        }
      }catch(err){
        next(err);
      }
      }

      async signIn(req, res, next) {
        try{
          // 1. Find user by email.
        const user = await this.oemRepository.findByEmail(req.body.email);
        if(!user){
            return res.render('login', {
                errorMessage: 'Invalid Credentials',
              });
        }else{
          // 2. Compare password with hashed password.
          const result = await bcrypt.compare(req.body.password, user.password);
          if(result){
     // 3. Create token.
    //  const token = jwt.sign(
    //   {
    //     userid: user._id,
    //     email: user.email,
    //   },
    //   'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
    //   {
    //     expiresIn: '1h',
    //   }
    // );
    req.session.email = req.body.email;
    // 4. Send token.
    res.render('Token-list', {
        email: req.session.email,
      });
    }
          else{
            return res.render('login', {
                errorMessage: 'Invalid Credentials',
              });
          }
        }
        }catch(err){
          console.log(err);
          return res.render('login', {
            errorMessage: 'Something went wrong',
          });
        }
      }

}
export default OemController;