import { Router } from 'express'
import { getProducts, getProductsByCategory, getProductById } from './utils/actions'
// import { createCategory, createCharacteristic, createGadget, createGadgetSpecialCharacteristics, createImage, getAllGadgets, getAllProcuctsByCategory, getProcuctById } from './utils/actions'

const router = Router()

router.get('/', (_, res) => {
    res.json({ 'project name': 'apple store backend' })
})

router.get('/products', async (_, res) => {
    const data = await getProducts()
    res.json(data)
})

router.get('/category/:id', async (req, res) => {
    const data = await getProductsByCategory(+req.params.id)
    res.json(data)
})

router.get('/products/:id', async (req, res) => {
    const data = await getProductById(+req.params.id)
    res.json(data)
})

export default router;