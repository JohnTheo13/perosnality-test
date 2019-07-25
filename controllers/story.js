const mongoose = require('mongoose');
const Story = mongoose.model('Story');

exports.showResponse = async ctx => {
  // ctx.state = { title: 'my title', author: 'queckezz' }
  await ctx.render('form')
}

exports.saveStory = async ctx => {
  const { request: { body }} = ctx;
  console.log(ctx);
  const story = new Story({...body});
  story.save();
  await ctx.redirect('form')

}
