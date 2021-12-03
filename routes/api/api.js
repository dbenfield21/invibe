import { Router } from 'express'
import * as apiCtrl from '../../controllers/api.js'

const router = Router()

router.get('/', apiCtrl.index)
<<<<<<< HEAD
router.post('/')
=======
router.get("/:location", apiCtrl.showBars)
>>>>>>> cadcae32b5d5da8aa48aa4d250ba0d688769d148

export {
    router
}