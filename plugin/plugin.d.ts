import { PluginOptions, BuildOptions } from './types';
/**
 * Using class is easier for testing
 */
export declare class Plugin {
    getManifest(): Promise<{
        count: number;
        filePaths: string[];
        size: number;
        warnings: string[];
    }>;
    build(options: BuildOptions): Promise<void>;
}
export declare const plugin: {
    initArguments: {};
    configFunction: (eleventyConfig: any, options?: PluginOptions | undefined) => Promise<void>;
};
