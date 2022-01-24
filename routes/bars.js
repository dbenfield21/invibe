import { Router } from 'express'
import * as barCtrl from '../controllers/bars.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.post('/', checkAuth , barCtrl.create)

export {
    router
}