const { Router } = require('express')
const controllerFunctions = require('../controller//catalogue')

const router = Router() 

router.post('/submitdetails',controllerFunctions.postItem)
router.get('/getdetails',controllerFunctions.fetchinventory)
router.put('/updatequantity/:id',controllerFunctions.updateQuantity)

module.exports = router