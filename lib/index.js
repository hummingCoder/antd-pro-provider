"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIntl = useIntl;
exports.default = exports.createIntl = exports.ConfigProviderWarp = exports.ConfigProvider = exports.ConfigConsumer = exports.intlMapKeys = exports.intlMap = exports.trTRIntl = exports.ptBRIntl = exports.frFRIntl = exports.zhTWIntl = exports.msMYIntl = exports.ruRUIntl = exports.esESIntl = exports.jaJPIntl = exports.itITIntl = exports.viVNIntl = exports.zhCNIntl = exports.enUSIntl = exports.getLang = void 0;

var _react = _interopRequireWildcard(require("react"));

var _configProvider = require("antd/lib/config-provider");

var _warning = require("rc-util/lib/warning");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _vi_VN = _interopRequireDefault(require("./locale/vi_VN"));

var _it_IT = _interopRequireDefault(require("./locale/it_IT"));

var _es_ES = _interopRequireDefault(require("./locale/es_ES"));

var _ja_JP = _interopRequireDefault(require("./locale/ja_JP"));

var _ru_RU = _interopRequireDefault(require("./locale/ru_RU"));

var _ms_MY = _interopRequireDefault(require("./locale/ms_MY"));

var _zh_TW = _interopRequireDefault(require("./locale/zh_TW"));

var _fr_FR = _interopRequireDefault(require("./locale/fr_FR"));

var _pt_BR = _interopRequireDefault(require("./locale/pt_BR"));

var _tr_TR = _interopRequireDefault(require("./locale/tr_TR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getLang = function getLang() {
  var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  var browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('{{BaseSeparator}}') : '';
  var lang = typeof localStorage !== 'undefined' ? window.localStorage.getItem('umi_locale') : '';
  return lang || browserLang || '';
};

exports.getLang = getLang;

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

exports.createIntl = createIntl;
var zhCNIntl = createIntl('zh_CN', _zh_CN.default);
exports.zhCNIntl = zhCNIntl;
var enUSIntl = createIntl('en_US', _en_US.default);
exports.enUSIntl = enUSIntl;
var viVNIntl = createIntl('vi_VN', _vi_VN.default);
exports.viVNIntl = viVNIntl;
var itITIntl = createIntl('it_IT', _it_IT.default);
exports.itITIntl = itITIntl;
var jaJPIntl = createIntl('ja_JP', _ja_JP.default);
exports.jaJPIntl = jaJPIntl;
var esESIntl = createIntl('es_ES', _es_ES.default);
exports.esESIntl = esESIntl;
var ruRUIntl = createIntl('ru_RU', _ru_RU.default);
exports.ruRUIntl = ruRUIntl;
var msMYIntl = createIntl('ms_MY', _ms_MY.default);
exports.msMYIntl = msMYIntl;
var zhTWIntl = createIntl('zh_TW', _zh_TW.default);
exports.zhTWIntl = zhTWIntl;
var frFRIntl = createIntl('fr_FR', _fr_FR.default);
exports.frFRIntl = frFRIntl;
var ptBRIntl = createIntl('pt_BR', _pt_BR.default);
exports.ptBRIntl = ptBRIntl;
var trTRIntl = createIntl('tr_TR', _tr_TR.default);
exports.trTRIntl = trTRIntl;
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
exports.intlMap = intlMap;
var intlMapKeys = Object.keys(intlMap);
exports.intlMapKeys = intlMapKeys;

var ConfigContext = _react.default.createContext({
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

exports.ConfigProvider = ConfigProvider;
exports.ConfigConsumer = ConfigConsumer;

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

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      locale = _useContext.locale;

  return /*#__PURE__*/_react.default.createElement(ConfigConsumer, null, function (value) {
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd 的 key 存在的时候以 antd 的为主

    var intl = localeName && value.intl.locale === 'default' ? intlMap[key] : value || intlMap[key];
    return /*#__PURE__*/_react.default.createElement(ConfigProvider, {
      value: intl || zhCNIntl
    }, children);
  });
};

exports.ConfigProviderWarp = ConfigProviderWarp;

function useIntl() {
  var context = (0, _react.useContext)(ConfigContext);
  (0, _warning.noteOnce)(!!context.intl, "\n\u4E3A\u4E86\u63D0\u5347\u517C\u5BB9\u6027  \n<IntlProvider value={zhCNIntl}/>\n\u9700\u8981\u4FEE\u6539\u4E3A:\n<ConfigProvider\n  value={{\n    intl: zhCNIntl,\n  }}\n/>\n\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E2A\u7248\u672C\u4E2D\u5220\u9664\u5B83\n    ");
  (0, _warning.noteOnce)(!!context.intl, "\nTo improve compatibility\n  <IntlProvider value={zhCNIntl}/>\nNeed to be modified to:\n  <ConfigProvider\n    value={{\n      intl: zhCNIntl,\n    }}\n  />\nWe will remove it in the next version\n    ");

  if (!context.intl) {
    return context || zhCNIntl;
  }

  return context.intl || zhCNIntl;
}

var _default = ConfigContext;
exports.default = _default;