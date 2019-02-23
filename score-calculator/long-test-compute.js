const mongoose = require('mongoose');
const RoleWord = mongoose.model('RoleWord');

module.exports = async (answers) => {
    const orderedWordsIdsPerSteps = answers.map((a) => a.data.mostRepresentativeOrdered);
    const fullRoleWords = await RoleWord.find({}, { roleId: 1, wordId: 1 });

    const rolesIdsForWords = {};
    fullRoleWords.forEach((word) => {
        rolesIdsForWords[word.wordId] = word.roleId; // done with roleId field
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
