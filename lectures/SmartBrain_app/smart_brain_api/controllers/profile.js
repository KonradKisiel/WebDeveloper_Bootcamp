const handleGetProfile = (db) => (req, res)=>{
    const {id} = req.params;
    let found = false;
    db.select('*').from('users').where({
        id: id
    }).then(user=>{
        //if there is no user we'll get [], returns true  
        //in this case catch will not work
        //to check if user is valid use user.length 
        console.log(user);
        if (user.length){
            res.json(user[0]);
        }else{
            res.status(400).json('error getting user');
        }
    })
   // if (!found) res.status(400).json('not found');
}

module.exports = {
    handleGetProfile: handleGetProfile
}