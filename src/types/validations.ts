// import { Accessories, Computer, Gadget, Headphones, Phone, Tablet } from "./types";

// const isValidGadget = (gadget: Gadget): gadget is Gadget => {
//     return (
//         typeof gadget.name === 'string' &&
//         typeof gadget.price === 'number' &&
//         (gadget.discountPrice ? typeof gadget.discountPrice === 'number' : true) &&
//         typeof gadget.guarantee === 'number' &&
//         typeof gadget.rating === 'number' &&
//         typeof gadget.CountReview === 'number' &&
//         typeof gadget.isAvailable === 'boolean' &&
//         (gadget.storeAddress ? typeof gadget.storeAddress === 'string' : true) &&
//         typeof gadget.color === 'string' &&
//         typeof gadget.brand === 'string' &&
//         typeof gadget.country === 'string'
//     )
// }

// export const isValidTablet = (data: Tablet): data is Tablet => {
//     return (
//         data &&
//         data.tablet &&
//         typeof data.tablet.screenSize === 'number' &&
//         typeof data.tablet.screenName === 'string' &&
//         typeof data.tablet.memoryGB === 'number' &&
//         typeof data.tablet.ramGB === 'number' &&
//         data.gadget &&
//         isValidGadget(data.gadget)
//     );
// }

// export const isValidPhone = (data: Phone): data is Phone => {
//     return (
//         data &&
//         data.phone &&
//         typeof data.phone.screenSize === 'number' &&
//         typeof data.phone.screenName === 'string' &&
//         typeof data.phone.memoryGB === 'number' &&
//         typeof data.phone.ramGB === 'number' &&
//         typeof data.phone.camera === 'string' &&
//         data.gadget &&
//         isValidGadget(data.gadget)
//     );
// }

// export const isValidHeadphones = (data: Headphones): data is Headphones => {
//     return (
//         data &&
//         data.headphones &&
//         typeof data.headphones.isNoiseReductionAvailable === 'boolean' &&
//         data.gadget &&
//         isValidGadget(data.gadget)
//     );
// }

// export const isValidComputer = (data: Computer): data is Computer => {
//     return (
//         data &&
//         data.computer &&
//         typeof data.computer.screenSize === 'number' &&
//         typeof data.computer.memoryGB === 'number' &&
//         typeof data.computer.ramGB === 'number' &&
//         typeof data.computer.OS === 'string' &&
//         typeof data.computer.CPU === 'string' &&
//         data.gadget &&
//         isValidGadget(data.gadget)
//     );
// }

// export const isValidAccessories = (data: Accessories): data is Accessories => {
//     return (
//         data &&
//         data.accessories &&
//         typeof data.accessories.forWhatKindsOfDevises === 'string' &&
//         data.gadget &&
//         isValidGadget(data.gadget)
//     );
// }