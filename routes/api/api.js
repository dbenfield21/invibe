import { Router } from 'express'
import * as apiCtrl from '../../controllers/api.js'

const router = Router()

router.get('/', apiCtrl.index)
router.get("/:location", apiCtrl.showBars)
router.get('/:id', apiCtrl.show) // cocktails-route(Merkis) branch;this route to SHOW the bar clicked on


export {
    router
}