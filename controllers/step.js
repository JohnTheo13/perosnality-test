const mongoose = require('mongoose');
const Step = mongoose.model('Step');
const Role = mongoose.model('Role');

exports.getStep = async ctx => {
  const { params: { stepId } } = ctx;
  const step = await Step.findById(stepId);
  ctx.body = step;
}


exports.getStepWithRoles =  async ctx => {
  const { params: { stepId } } = ctx;
  const stepPromise = Step.findOne({ _id: stepId});
  const rolesPromise = Role.find();
  const [step, roles] = await Promise.all([stepPromise, rolesPromise]);
  ctx.body = { step, roles }
}