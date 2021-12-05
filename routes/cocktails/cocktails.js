import { Router } from 'express'
import * as cocktailCtrl from '../../controllers/cocktails.js'
import { decodeUserFromToken, checkAuth } from '../../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.put('/', checkAuth , cocktailCtrl.create)


export {
    router
}