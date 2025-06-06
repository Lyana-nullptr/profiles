import { SUPPORTED_PROFILE_COLLECTIONS } from '.'
import { getRoot } from '../fs'
import { processProfileCollection } from '../profile'
import { runCli } from '../runner'
import { log } from '../utils'

runCli(async () => {
  const root = getRoot(import.meta.url)

  log.info('Starting to remove profiles...')

  for (const collection of SUPPORTED_PROFILE_COLLECTIONS) {
    await processProfileCollection(root, collection, 'uninstall')
  }
})
