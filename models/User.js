const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;
const env = require('../Env');


class User {
    constructor() {
        this.username = '';
        this.salt = '';
        this.hash = '';
        this._id = Math.random();
    }


    setPassword(password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };

    validatePassword(password) {
        const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        return this.hash === hash;
    }
    generateJWT() {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);

        return jwt.sign({
            email: this.email,
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    }

     toJson(){
        return {
            _id: this._id,
            username: this.username,
            token: this.generateJWT(),
          };
     }

     static findUser(username){
         return new Promise((resolve,reject)=>{
            const uri = env.connectionString;
            const client = new MongoClient(uri, { useNewUrlParser: true });
            client.connect(err => {
              const collection = client.db("HomeTest1").collection("test1");
              // perform actions on the collection object
              const user = collection.find({ username });
              client.close();
            });
         });
     }
}

module.exports = User;