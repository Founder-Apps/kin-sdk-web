import { Wallet } from '@kin-wallet/sdk'
import { RxDatabase } from 'rxdb'

import { Collection } from './core-collection'
import { Setting } from '../../../settings/data-access'

export interface Database {
  db?: RxDatabase
  wallets?: Collection<Wallet>
  settings?: Collection<Setting>
}
