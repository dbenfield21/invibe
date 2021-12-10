import { Router } from 'express'
import * as apiCtrl from '../../controllers/api.js'

const router = Router()

router.get('/', apiCtrl.index)
router.get("/:location", apiCtrl.showBars)
router.get('/:id', apiCtrl.show) 


export {
    router
}