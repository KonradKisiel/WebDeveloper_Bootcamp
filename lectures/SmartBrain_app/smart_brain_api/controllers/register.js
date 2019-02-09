const handleRegister = (db, bcrypt)=>(req, res)=>{
    const {email, name, password} = req.body;
    if(!email || !name || !password){
        return res.status(400).json('incorrect form subbmision');
    }
    const hash = bcrypt.hashSync(password);
    //https://en.wikipedia.org/wiki/Database_transaction
    db.transaction(trx => {
        //use trx(transaction) insted db
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                entries: 0,
                joined: new Date()
            })
            .then(user => {
                res.json(user[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
    handleRegister: handleRegister
}