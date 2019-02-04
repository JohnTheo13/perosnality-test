module.exports = async (answers) => {
    const score = {};
    if (answers.length !== 3) {
        throw 'Test session is not finished';
    }

    const orderedRoles = [];

    answers.forEach((answer) => {
        if (!answer.data) {
            return;
        }

        if (answer.data.mostRepresentativeOrdered) {
            answer.data.mostRepresentativeOrdered.forEach((roleId) => {
                orderedRoles.unshift(roleId);
            });
        } else if (answer.data.leastRepresentativeOrdered) {
            answer.data.leastRepresentativeOrdered.forEach((roleId) => {
                orderedRoles.push(roleId);
            });
        }
    });

    orderedRoles.forEach((roleId, index) => {
        score[roleId] = orderedRoles.length - index;
    });
    return score;
};
