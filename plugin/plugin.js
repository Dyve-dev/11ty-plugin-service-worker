"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.Plugin = void 0;
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('@dyve:11typlugin:service-worker');
const defaults = {};
/**
 * Using class is easier for testing
 */
class Plugin {
}
exports.Plugin = Plugin;
exports.plugin = {
    initArguments: {},
    configFunction: async (eleventyConfig, options) => {
        const _plugin = new Plugin();
        console.log('new plugin');
    },
};
