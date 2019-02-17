const mongoose = require('mongoose');
const Role = mongoose.model('Role');

exports.getAllRoles =  async ctx => {
  ctx.body = await Role.find({}, { name: 1, roleId: 1, icon: 1, translationKey: 1 });
}

exports.getRoles =  async ctx => {
  const { params: { roleIds } } = ctx
  ctx.body = await Role.find({
    'roleId': { $in: [...roleIds]}
  }, { name: 1, roleId: 1, icon: 1, translationKey: 1 });
}