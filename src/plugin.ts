import Debug from 'debug';
import { PluginOptions, BuildOptions } from './types';
import WBbuild = require('workbox-build');

const debug = Debug('@dyve:11typlugin:service-worker');

const defaults: PluginOptions = {
  swDest: '_site/sw.js',
  globDirectory: '_site',
  inlineWorkboxRuntime: true,
  offlineGoogleAnalytics: false,
  importScripts: ['/custom.js'],
};

/**
 * Using class is easier for testing
 */
export class Plugin {
  async getManifest() {
    const manifest = await WBbuild.getManifest({
      globDirectory: `_site`,
    });
    debug('manifest', manifest);
    return manifest;
  }
  async build(options: BuildOptions) {
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

export const plugin = {
  initArguments: {},
  configFunction: async (eleventyConfig: any, options?: PluginOptions) => {
    const _plugin = new Plugin();
    eleventyConfig.on('afterBuild', async () => {
      const manifest = await _plugin.getManifest();
      await _plugin.build({ manifest });
    });
  },
};
