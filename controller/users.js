const getAllUsers = (req, res) => {
    const data ={
        id: '1',
        name : "Jisso Kiim",
        email : "jichu103@gmail.com",
        address: "Busan",
    }

    res.json({
        message: 'GET all users sccess',
        data: data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new User success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const{idUser} = req.params;
    console.log('idUser: ',idUser);
    res.json({
        message: 'UPDATE user succes',
        data : req.body,
    })
}

const deleteUser =(req, res) => {
    const{idUser} = req.params;
    res.json({
        message: 'DELETE message success',
        data :{
            id: idUser,
            name : "jungkook",
            email: "jk97@gmail.com",
            address: "Busan"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}