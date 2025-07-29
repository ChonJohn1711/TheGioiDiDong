import db from '../models/index'

let getHomePage = (req, res) => {
    return res.render("homepage.ejs")
}

let getDatabase = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("database.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getHomePage: getHomePage,
    getDatabase: getDatabase,
}