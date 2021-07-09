const people =require('../assets/people.json');
const user =require('../models/user.model');
//const people =require('../assets/people.json');

class userController {
    get(req ,res){
        const filter =req.query.filter;
        console.log("thin", filter)
        const fiii =people.filter(person => person.last_name.includes(filter));
        const fs = require('fs');

        fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
        //return res.json('chao cac ban');
        return res
        .status(200)
        .json({ length : fiii.length});
    }
    post(req ,res){
        const filter =req.query.filter;
        console.log("thin", filter);
       return res.status(200).json({thin : 'chao các ban'});
    }
}
module.exports = new userController();