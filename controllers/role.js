const mongoose = require('mongoose');
const Role = mongoose.model('Role');

module.exports =  async ctx => {
  ctx.body = await Role.find({}, { name: 1, roleId: 1, icon: 1 });
}