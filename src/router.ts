import { Router } from 'express'
// import { isValidAccessories, isValidComputer, isValidHeadphones, isValidPhone, isValidTablet } from './types/validations'
// import { createAccessories, createComputer, createHeadphones, createImage, createPhone, createTablet, getPhoneWithImagesAndGadget } from './utils/actions';

const router = Router()

router.get('/', (_, res) => {
    res.json({ 'msg': 'gg lol' })
})

// router.post('/tablet', async (req, res) => {
//     const { tablet, gadget } = req.body
//     const data = isValidTablet({ tablet, gadget }) ? await createTablet({ tablet, gadget }) : { message: 'tablet was not created' }
//     res.json(data)
// })

// router.post('/phone', async (req, res) => {
//     const { phone, gadget } = req.body
//     const data = isValidPhone({ phone, gadget }) ? await createPhone({ phone, gadget }) : { message: 'phone was not created' }
//     res.json(data)
// })


// router.get('/phone', async (_, res) => {
//     const data = await getPhoneWithImagesAndGadget()
//     res.json(data)
// })


// router.post('/image', async (req, res) => {
//     const { gadgetId, imageLink } = req.body
//     const data = (typeof gadgetId === 'number' && typeof imageLink === 'string') ? await createImage(gadgetId, imageLink) : { message: 'image was not created' }
//     res.json(data)
// })



// router.post('/computer', async (req, res) => {
//     const { computer, gadget } = req.body
//     const data = isValidComputer({ computer, gadget }) ? await createComputer({ computer, gadget }) : { message: 'computer was not created' }
//     res.json(data)
// })

// router.post('/headphones', async (req, res) => {
//     const { headphones, gadget } = req.body
//     const data = isValidHeadphones({ headphones, gadget }) ? await createHeadphones({ headphones, gadget }) : { message: 'headphones was not created' }
//     res.json(data)
// })

// router.post('/accessories', async (req, res) => {
//     const { accessories, gadget } = req.body
//     const data = isValidAccessories({ accessories, gadget }) ? await createAccessories({ accessories, gadget }) : { message: 'accessories was not created' }
//     res.json(data)
// })

export default router;