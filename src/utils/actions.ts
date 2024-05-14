import { Accessories, Computer, Gadget, Headphones, Phone, Tablet } from '../types/types';
import db from './db'

// const createGadget = async (data: {
//     name: string;
//     price: number;
//     discountPrice: number;
//     guarantee: number;
//     rating: number;
//     isAvailable: true;
//     storeAddress: string;
//     color: string;
//     brand: string;
//     country: string;
// }) => {
const createGadget = async (data: Gadget) => {
    try {
        const newGadget = await db.gadget.create({
            data
        })
        return newGadget
    } catch (e) {
        console.error('create gadget error: ', e);
    }

}

// export const createTablet = async (tablet: {
//     screenSize: number;
//     screenName: string;
//     memoryGB: number;
//     ramGB: number;
// }, gadget: {
//     name: string;
//     price: number;
//     discountPrice: number;
//     guarantee: number;
//     rating: number;
//     isAvailable: true;
//     storeAddress: string;
//     color: string;
//     brand: string;
//     country: string;
// }) => {
export const createTablet = async (data: Tablet) => {
    const { tablet, gadget } = data
    try {
        const newGadget = await createGadget(gadget);
        const newTablet = await db.tablet.create({
            data: {
                ...tablet,
                gadget: {
                    connect: { id: newGadget.id }
                }
            }
        });
        return newTablet
    } catch (e) {
        console.error('create tablet error: ', e);
    }
}

export const createPhone = async (data: Phone) => {
    const { phone, gadget } = data
    try {
        const newGadget = await createGadget(gadget);
        const newPhone = await db.phone.create({
            data: {
                ...phone,
                gadget: {
                    connect: { id: newGadget.id }
                }
            }
        });
        return newPhone
    } catch (e) {
        console.error('create phone error: ', e);
    }
}

export const createComputer = async (data: Computer) => {
    const { computer, gadget } = data
    try {
        const newGadget = await createGadget(gadget);
        const newComputer = await db.computer.create({
            data: {
                ...computer,
                gadget: {
                    connect: { id: newGadget.id }
                }
            }
        });
        return newComputer
    } catch (e) {
        console.error('create computer error: ', e);
    }
}

export const createHeadphones = async (data: Headphones) => {
    const { headphones, gadget } = data
    try {
        const newGadget = await createGadget(gadget);
        const newHeadphones = await db.headphones.create({
            data: {
                ...headphones,
                gadget: {
                    connect: { id: newGadget.id }
                }
            }
        });
        return newHeadphones
    } catch (e) {
        console.error('create headphones error: ', e);
    }
}

export const createAccessories = async (data: Accessories) => {
    const { accessories, gadget } = data
    try {
        const newGadget = await createGadget(gadget);
        const newAccessories = await db.accessories.create({
            data: {
                ...accessories,
                gadget: {
                    connect: { id: newGadget.id }
                }
            }
        });
        return newAccessories
    } catch (e) {
        console.error('create accessories error: ', e);
    }
}





export const createImage = async (gadgetId: number, imageLink: string) => {
    try {
        const gadgetToFind = await db.gadget.findFirst({
            where: {
                id: gadgetId
            }
        })
        // console.log(id);
        if (!gadgetToFind) return { message: 'gadget with this id was not found!' }
        const newImage = await db.images.create({
            data: {
                imageLink,
                gadget: {
                    connect: { id: gadgetToFind.id }
                }
            }
        })
        return newImage
    } catch (e) {
        console.error('gadget with this id was not found!', e);
    }
}

export async function getPhoneWithImagesAndGadget() {
    const phoneWithImagesAndGadget = await db.phone.findMany({
        include: {
            gadget: {
                include: {
                    images: true,
                },
            },
        },
    });

    return phoneWithImagesAndGadget;
}