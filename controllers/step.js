const mongoose = require('mongoose');
const Step = mongoose.model('Step');

exports.getStep = async ctx => {
  const { params: { stepId } } = ctx;
  const step = await Step.findById(stepId);
  ctx.body = step;
}
