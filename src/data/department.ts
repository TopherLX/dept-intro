import type { Member } from './types'
import { members as ds } from './ds-team'
import { members as cdm1 } from './cdm-team1'
import { members as cdm2 } from './cdm-team2'
import { members as cm } from './cm-team'
import { members as safety } from './safety-team'

export const members: Member[] = [...ds, ...cdm1, ...cdm2, ...cm, ...safety]
