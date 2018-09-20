/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Hello police!')

  app.on('pull_request.opened', async context => {
    const comment = context.issue({ body: 'Hello This is a sitateru test bot' })
    return context.github.issues.createComment(comment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
