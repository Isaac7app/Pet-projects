let users = [];

export const createUser = (req,res)=>{
    res.send(users);
}

export const getUser = (req,res)=>{
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`Success! ${user.firstName} added`);
}

export const findUserWithId = (req,res)=>{
    const {id} = req.params;
    console.log(req.params);


    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id !== id);

    res.send(`Sucess! ${id} has been deleted.`)

}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    const user = users.find((user)=> user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`user with the id:${id} has been updated`)
}