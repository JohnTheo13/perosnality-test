

module.exports = async (score) => {
    const roleIds = Object.keys(score);
    const roles = await Role.findAll({
        attributes: ['id', 'translationKey', 'name', 'icon', 'descriptionStrong', 'descriptionPit'],
        where: { id: roleIds }
    });

    const result = roles.map((role) => ({ role, score: score[role.id] }))
        .sort((a, b) => b.score - a.score);

    return result;
};
