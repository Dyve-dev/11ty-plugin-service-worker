import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { imageCache } from 'workbox-recipes';

//@ts-ignore
precacheAndRoute(self.__WB_MANIFEST);
imageCache();
