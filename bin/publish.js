import util from 'node:util'
import child_process from 'node:child_process'

import log from '@magic/log'

export const xc = util.promisify(child_process.exec)

export const getGitConfig = async GIT => {
  if (GIT && GIT.ORIGIN) {
    if (!GIT.BRANCH) {
      GIT.BRANCH = 'gh-pages'
    }
    return GIT
  }

  log.info('GIT missing ORIGIN')
  const git = GIT || {}

  const data = await xc('git remote -v')
  if (data.stdout) {
    git.ORIGIN = data.stdout.split('\n')[1].split('\t')[1].replace('(push)', '').trim()

    git.BRANCH = git.BRANCH || 'gh-pages'
    return git
  }
}

const force = process.env.FORCE

const git = await getGitConfig()

const cmdPrefix = `--prefix=docs`
const cmdOnto = `--onto="${git.ORIGIN}/${git.BRANCH}"`
const cmdArgv = `${cmdPrefix} ${cmdOnto}`
const cmd = `git subtree split ${cmdArgv}`

log.time(cmd)
const { stdout } = await xc(cmd)
const id = stdout.trim()
log.timeEnd(cmd)

const pushCommand = `git push ${force ? '-f' : ''} ${git.ORIGIN} ${id.trim()}:${git.BRANCH}`
log.time(pushCommand)
await xc(pushCommand)
log.timeEnd(pushCommand)
