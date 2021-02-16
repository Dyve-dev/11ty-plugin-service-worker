"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.Plugin = void 0;
const debug_1 = __importDefault(require("debug"));
const WBbuild = require("workbox-build");
const debug = debug_1.default('@dyve:11typlugin:service-worker');
const defaults = {
    swDest: '_site/sw.js',
    globDirectory: '_site',
    inlineWorkboxRuntime: true,
    offlineGoogleAnalytics: false,
    importScripts: ['/custom.js'],
};
/**
 * Using class is easier for testing
 */
class Plugin {
    async getManifest() {
        const manifest = await WBbuild.getManifest({
            globDirectory: `_site`,
        });
        debug('manifest', manifest);
        return manifest;
    }
    async build(options) {
        const opts = { ...defaults, ...options };
        debug('Build Workbox service worker');
        if (options.manifest) {
            await WBbuild.injectManifest({
                swSrc: './sw.ts',
                swDest: '_site/custom.js',
                globDirectory: opts.globDirectory,
            });
        }
        await WBbuild.generateSW(defaults);
    }
}
exports.Plugin = Plugin;
exports.plugin = {
    initArguments: {},
    configFunction: async (eleventyConfig, options) => {
        const _plugin = new Plugin();
        eleventyConfig.on('afterBuild', async () => {
            const manifest = await _plugin.getManifest();
            await _plugin.build({ manifest });
        });
    },
};
