"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var about_controllers_1 = __importDefault(require("../controllers/about.controllers"));
var router = express_1.Router();
router.get('/', about_controllers_1.default.display);
exports.default = router;
//# sourceMappingURL=about.routes.js.map