const users = require('../../models/users');

const getUsers = (req, res) => {
    if(req.query.sort){
        res.status(200).json({ users });
        return;
    }
    // the .sort() method actually edits the content of a file
    if(req.query.sort === 'asc'){
        const sortedUsers = [...users].sort((a,b) => 
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        res.status(200).json({sortedUsers});
    } else if(req.query.sort === 'dsc'){
        const sortedUsers = [...users].sort((a,b) =>
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        );
        res.status(200).json({sortedUsers});
    } else {
        res.status(400).json({message: 'inavlid sort parameter'});
    }
};

module.exports = {
    getUsers
}