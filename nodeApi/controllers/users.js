export const createUser = (req,res)=>{
    res.send(users);
}

export const getUser = (req,res)=>{
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`Success! ${user.firstName} added`);
}