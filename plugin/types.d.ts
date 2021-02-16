import { GenerateSWConfig, GetManifestResult } from 'workbox-build';
export interface PluginOptions extends GenerateSWConfig {
}
declare type Unwrap<T> = T extends Promise<infer U> ? U : T extends (...args: any) => Promise<infer U> ? U : T extends (...args: any) => infer U ? U : T;
export interface BuildOptions {
    manifest?: Unwrap<GetManifestResult>;
}
export {};
