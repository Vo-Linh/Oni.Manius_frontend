"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var home_controller_1 = __importDefault(require("../controllers/home.controller"));
var router = express_1.Router();
router.get('/', home_controller_1.default.display);
exports.default = router;
//# sourceMappingURL=home.routes.js.map