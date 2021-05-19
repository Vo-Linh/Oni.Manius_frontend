"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contact_controllers_1 = __importDefault(require("../controllers/contact.controllers"));
var contact_controllers_2 = __importDefault(require("../controllers/contact.controllers"));
var router = express_1.Router();
router.get('/', contact_controllers_1.default.display);
router.post('/send-mail', contact_controllers_2.default.send);
exports.default = router;
//# sourceMappingURL=contact.routes.js.map