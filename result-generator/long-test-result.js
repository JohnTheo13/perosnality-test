const mongoose = require('mongoose');
const Role = mongoose.model('Role');

// const score = { '1': 11, '2': 11, '3': 10, '4': 9, '5': 7, '6': 8, '7': 3, '8': 1 }


module.exports = async (score) => {

    const roleIds = Object.keys(score);
    const roles = await Role.find({
      'roleId': { $in: [...roleIds]}
    });


    const result = roles.map((role) => ({ role, score: score[role.roleId] }))
        .sort((a, b) => b.score - a.score);

    return result;
};
