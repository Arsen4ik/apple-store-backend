"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsBySubcategory = exports.getSubcategoriesByCategory = exports.getProductById = exports.getProductsByCategory = exports.getProducts = void 0;
// export { getAllGadgets, getAllProcuctsByCategory, getProcuctById } from './actions/getActions'
var getActions_1 = require("./actions/getActions");
Object.defineProperty(exports, "getProducts", { enumerable: true, get: function () { return getActions_1.getProducts; } });
Object.defineProperty(exports, "getProductsByCategory", { enumerable: true, get: function () { return getActions_1.getProductsByCategory; } });
Object.defineProperty(exports, "getProductById", { enumerable: true, get: function () { return getActions_1.getProductById; } });
Object.defineProperty(exports, "getSubcategoriesByCategory", { enumerable: true, get: function () { return getActions_1.getSubcategoriesByCategory; } });
Object.defineProperty(exports, "getProductsBySubcategory", { enumerable: true, get: function () { return getActions_1.getProductsBySubcategory; } });
// export { createCategory, createCharacteristic, createGadget, createGadgetSpecialCharacteristics, createImage } from './actions/createActions'
//# sourceMappingURL=actions.js.map