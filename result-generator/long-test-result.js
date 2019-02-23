const mongoose = require('mongoose');
const Role = mongoose.model('Role');

module.exports = async (score) => {

    const roleIds = Object.keys(score);
    const roles = await Role.find({
      'roleId': { $in: [...roleIds]}
    });


    const result = roles
      .map((role) => ({ role, score: score[role.roleId] }))
      .sort((a, b) => b.score - a.score);
    
    const results = result.filter(r => r.score === result[0].score);

    return results;
};
