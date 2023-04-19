const data = [
    {
        id: 1,
        name: "Haru Kazumoto",
        age: 17,
        email: "Kazumoto@gmail.com"
    },
    {
        id: 2,
        name: "Suzume Iwato",
        age: 15,
        email: "IwatoSuzume@gmail.com"
    }
]

const createUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "POST user success!",
        data: req.body
    });
};

const getAllUser = (req, res) => {
    console.log({data});
    res.json({
        message: "GET user success!",
        data: data
    });
};

const updateUser = (req, res) => {
    console.log(req.params);
    res.json({
        message: "PATCH user success!"
    });
};

export default {
    findAll: getAllUser,
    save: createUser,
    update: updateUser
};