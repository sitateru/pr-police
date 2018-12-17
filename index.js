/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */

const getConfig = require('probot-config')

const defaultConfig = {
  threshold: 10,
  message: '🚨 Here comes **PR-Police**! 🚨\nYour pull request has too many changed files!!'
}

let addComment = (context, config) => {
  if (context.payload.pull_request.changed_files < config.threshold) return
  const comment = context.issue({
    body: config.message
  })
  return context.github.issues.createComment(comment)
}

module.exports = app => {
  app.on('pull_request.opened', async context => {
    const config = await getConfig(context, 'pr-police.yml') || defaultConfig
    return addComment(context, config)
  })

  app.on('pull_request.reopened', async context => {
    const config = await getConfig(context, 'pr-police.yml') || defaultConfig
    return addComment(context, config)
  })
}
