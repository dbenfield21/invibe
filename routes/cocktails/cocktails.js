import { Router } from 'express'
import * as cocktailCtrl from '../../controllers/cocktails.js'
import { decodeUserFromToken, checkAuth } from '../../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)
router.get('/:id', cocktailCtrl.getAllCocktails)
router.post('/', checkAuth , cocktailCtrl.create)
router.patch('/:id',checkAuth, cocktailCtrl.update)
router.delete('/:id',cocktailCtrl.delete)


export {
    router
}