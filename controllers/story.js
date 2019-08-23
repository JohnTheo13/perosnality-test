const mongoose = require('mongoose');
const Story = mongoose.model('Story');
const Back = mongoose.model('Back');

exports.showResponse = async ctx => {
  // ctx.state = { title: 'my title', author: 'queckezz' }
  await ctx.render('form')
}

exports.saveStory = async ctx => {
  const { request: { body }} = ctx;
  console.log(body);
  const story = new Story({...body});
  await story.save(function(err) {
    if(err) console.log(err);
  });
  ctx.redirect('back')
}

exports.testBack = async ctx => {
  const { request: { body }} = ctx;
  console.log(body);
  const back = new Back({...body});
  await back.save(function(err) {
    if(err) console.log(err);
  });
  ctx.body = { ...body }
}
