const { getManager } = require("typeorm");
let register = async (req, res) => {
    try {
        let data;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let gender = req.body.gender;
        let dob = req.body.date;
        let email = req.body.email;
        let password = req.body.password;
        await getManager().transaction(async (transactionalEntityManager) => {
            data = await getManager().query(`Select * FROM public.createUsers($1 , $2, $3, $4, $5, $6)`, [firstname, lastname, gender, dob, email, password]);
        })
        res.send(data);
    }
    catch (error) {
        console.log(error);
    }
}
let login = async (req, res) => {
    try {
        let datalogin;
        let email = req.body.email;
        let password = req.body.password;
        await getManager().transaction(async (transactionalEntityManager) => {
            datalogin = await getManager().query(`select * from get_users_by_email($1)`, [email]);
        })


        if (password == datalogin[0].password) {
            res.send(datalogin);

        }
        else {
            res.send(console.log("Password Not Matched"));
            throw new Error("Wrong Email and password combination");
        }
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}
module.exports = {
    register,
    login
}