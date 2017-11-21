import { GenericStoreEnhancer } from 'redux';

declare global {
    interface Window {
        devToolsExtension: () => GenericStoreEnhancer;
    }
}
