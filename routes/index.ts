import express from 'express'

const router: express.Router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Express')
})

export default router
