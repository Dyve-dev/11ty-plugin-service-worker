import Debug from 'debug';
import { PluginOptions } from './types';

const debug = Debug(
  '@dyve:11typlugin:service-worker'
);

const defaults: PluginOptions = {};

/**
 * Using class is easier for testing
 */
export class Plugin {}

export const plugin = {
  initArguments: {},
  configFunction: async (eleventyConfig: any, options?: PluginOptions) => {
    const _plugin = new Plugin();
    console.log('new plugin');
  },
};
