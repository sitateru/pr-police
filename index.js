/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  app.log('Hello police!')

  app.on('pull_request.opened', async context => {
    app.log(context.payload.pull_request.changed_files)
    if (context.payload.pull_request.changed_files < 2) return
    const comment = context.issue({
      body: 'Hello This is a pr-police test bot - beta'
    })
    return context.github.issues.createComment(comment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
