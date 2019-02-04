const mongoose = require('mongoose');
const Role = mongoose.model('Role');
const topRankCount = 3;

module.exports = async (score) => {
    const roleIds = Object.keys(score);
    const maxScore = roleIds.length;
    const topRoleIds = [];
    const ranking = {};

    roleIds.forEach((roleId) => {
      const rank = maxScore - score[roleId];
      if (rank < topRankCount) {
        topRoleIds.push(roleId);
        ranking[roleId] = rank;
      }
    });

    const roles = await Role.find({
      'roleId': {
        $in: [...topRoleIds]
      }
    }).populate('words');
console.log(roles)
  return roles.map(role => ({
    rank: ranking[role.roleId],
    words: role.words.map((word) => ({
      id: word.roleId,
      name: word.name,
      translationKey: word.translationKey,
    }))
  })).sort((a, b) => a.rank - b.rank);
};
