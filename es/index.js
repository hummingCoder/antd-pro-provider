function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useContext } from 'react';
import { ConfigContext as AntdConfigContext } from 'antd/lib/config-provider';
import { noteOnce } from 'rc-util/lib/warning';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import viVN from './locale/vi_VN';
import itIT from './locale/it_IT';
import esES from './locale/es_ES';
import jaJP from './locale/ja_JP';
import ruRU from './locale/ru_RU';
import msMY from './locale/ms_MY';
import zhTW from './locale/zh_TW';
import frFR from './locale/fr_FR';
import ptBR from './locale/pt_BR';
import trTR from './locale/tr_TR';
export var getLang = function getLang() {
  var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  var browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('{{BaseSeparator}}') : '';
  var lang = typeof localStorage !== 'undefined' ? window.localStorage.getItem('umi_locale') : '';
  return lang || browserLang || '';
};

function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];

      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return message;
}
/**
 * 创建一个操作函数
 * @param locale
 * @param localeMap
 */


var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};

var zhCNIntl = createIntl('zh_CN', zhCN);
var enUSIntl = createIntl('en_US', enUS);
var viVNIntl = createIntl('vi_VN', viVN);
var itITIntl = createIntl('it_IT', itIT);
var jaJPIntl = createIntl('ja_JP', jaJP);
var esESIntl = createIntl('es_ES', esES);
var ruRUIntl = createIntl('ru_RU', ruRU);
var msMYIntl = createIntl('ms_MY', msMY);
var zhTWIntl = createIntl('zh_TW', zhTW);
var frFRIntl = createIntl('fr_FR', frFR);
var ptBRIntl = createIntl('pt_BR', ptBR);
var trTRIntl = createIntl('tr_TR', trTR);
var intlMap = {
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'js-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ru-RU': ruRUIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'tr-TR': trTRIntl
};
var intlMapKeys = Object.keys(intlMap);
export { enUSIntl, zhCNIntl, viVNIntl, itITIntl, jaJPIntl, esESIntl, ruRUIntl, msMYIntl, zhTWIntl, frFRIntl, ptBRIntl, trTRIntl, intlMap, intlMapKeys };
var ConfigContext = React.createContext({
  intl: _objectSpread(_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  })
});
var ConfigConsumer = ConfigContext.Consumer,
    ConfigProvider = ConfigContext.Provider;
/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 * @param localeKey
 */

var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  if (!localeKey) {
    return 'zh-CN';
  }

  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  }) || 'zh-CN';
};
/**
 *  如果没有配置 locale，这里组件会根据 antd 的 key 来自动选择
 * @param param0
 */


var ConfigProviderWarp = function ConfigProviderWarp(_ref) {
  var children = _ref.children;

  var _useContext = useContext(AntdConfigContext),
      locale = _useContext.locale;

  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (value) {
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd 的 key 存在的时候以 antd 的为主

    var intl = localeName && value.intl.locale === 'default' ? intlMap[key] : value || intlMap[key];
    return /*#__PURE__*/React.createElement(ConfigProvider, {
      value: intl || zhCNIntl
    }, children);
  });
};

export { ConfigConsumer, ConfigProvider, ConfigProviderWarp, createIntl };
export function useIntl() {
  var context = useContext(ConfigContext);
  noteOnce(!!context.intl, "\n\u4E3A\u4E86\u63D0\u5347\u517C\u5BB9\u6027  \n<IntlProvider value={zhCNIntl}/>\n\u9700\u8981\u4FEE\u6539\u4E3A:\n<ConfigProvider\n  value={{\n    intl: zhCNIntl,\n  }}\n/>\n\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E2A\u7248\u672C\u4E2D\u5220\u9664\u5B83\n    ");
  noteOnce(!!context.intl, "\nTo improve compatibility\n  <IntlProvider value={zhCNIntl}/>\nNeed to be modified to:\n  <ConfigProvider\n    value={{\n      intl: zhCNIntl,\n    }}\n  />\nWe will remove it in the next version\n    ");

  if (!context.intl) {
    return context || zhCNIntl;
  }

  return context.intl || zhCNIntl;
}
export default ConfigContext;