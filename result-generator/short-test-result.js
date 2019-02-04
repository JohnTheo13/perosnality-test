
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

    const roles = await Role.findAll({
        attributes: ['id'],
        include: [{
           model: RoleWord,
           as: 'roleWords'
        }],
        where: { id: topRoleIds }
    });

    return roles.map(role => ({
        rank: ranking[role.id],
        words: role.roleWords.map((word) => ({
            id: word.id,
            name: word.name,
            translationKey: word.translationKey,
        }))
    })).sort((a, b) => a.rank - b.rank);
};
