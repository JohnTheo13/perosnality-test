

module.exports = async (answers) => {
    const orderedWordsIdsPerSteps = answers.map((a) => a.data.mostRepresentativeOrdered);
    const fullRoleWords = await RoleWord.findAll({ attributes: ['id', 'roleId'], where: { id: orderedWordsIdsPerSteps } });

    const rolesIdsForWords = {};
    fullRoleWords.forEach((word) => {
        rolesIdsForWords[word.id] = word.roleId; // done with roleId field
    });

    const scoresForRoleIds = {};

    orderedWordsIdsPerSteps.forEach((roleWordsIds) => {
        const topPoints = roleWordsIds.length - 1;

        roleWordsIds.forEach((wordId, index) => {
            const roleId = rolesIdsForWords[wordId]; // roleId field
            const wordScore = topPoints - index;

            if (!scoresForRoleIds[roleId]) {
                scoresForRoleIds[roleId] = 0;
            }

            scoresForRoleIds[roleId] += wordScore;
        });
    });

    return scoresForRoleIds;
};
