import React from 'react';
export declare const getLang: () => string;
export interface IntlType {
    locale: string;
    getMessage: (id: string, defaultMessage: string) => string;
}
/**
 * 创建一个操作函数
 * @param locale
 * @param localeMap
 */
declare const createIntl: (locale: string, localeMap: {
    [key: string]: any;
}) => IntlType;
declare const zhCNIntl: IntlType;
declare const enUSIntl: IntlType;
declare const viVNIntl: IntlType;
declare const itITIntl: IntlType;
declare const jaJPIntl: IntlType;
declare const esESIntl: IntlType;
declare const ruRUIntl: IntlType;
declare const msMYIntl: IntlType;
declare const zhTWIntl: IntlType;
declare const frFRIntl: IntlType;
declare const ptBRIntl: IntlType;
declare const trTRIntl: IntlType;
declare const intlMap: {
    'zh-CN': IntlType;
    'en-US': IntlType;
    'vi-VN': IntlType;
    'it-IT': IntlType;
    'js-JP': IntlType;
    'es-ES': IntlType;
    'ru-RU': IntlType;
    'ms-MY': IntlType;
    'zh-TW': IntlType;
    'fr-FR': IntlType;
    'pt-BR': IntlType;
    'tr-TR': IntlType;
};
declare const intlMapKeys: string[];
export declare type ParamsType = {
    [key: string]: React.ReactText | React.ReactText[];
};
export { enUSIntl, zhCNIntl, viVNIntl, itITIntl, jaJPIntl, esESIntl, ruRUIntl, msMYIntl, zhTWIntl, frFRIntl, ptBRIntl, trTRIntl, intlMap, intlMapKeys, };
declare const ConfigContext: React.Context<{
    intl: IntlType;
}>;
declare const ConfigConsumer: React.Consumer<{
    intl: IntlType;
}>, ConfigProvider: React.Provider<{
    intl: IntlType;
}>;
/**
 *  如果没有配置 locale，这里组件会根据 antd 的 key 来自动选择
 * @param param0
 */
declare const ConfigProviderWarp: React.FC<{}>;
export { ConfigConsumer, ConfigProvider, ConfigProviderWarp, createIntl };
export declare function useIntl(): IntlType;
export default ConfigContext;
