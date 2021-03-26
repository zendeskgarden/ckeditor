(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1445:function(module,exports,__webpack_require__){"use strict";__webpack_require__(8),__webpack_require__(91),__webpack_require__(74),__webpack_require__(60),__webpack_require__(76),__webpack_require__(1446),__webpack_require__(1447),__webpack_require__(14),__webpack_require__(75);var _clientApi=__webpack_require__(113),_clientLogger=__webpack_require__(71),_configFilename=__webpack_require__(1448);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1448:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"globalTypes",(function(){return globalTypes})),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(508),_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(703),decorators=[function withBedrock(story,context){return"enabled"===context.globals.bedrock?document.querySelector('link[href$="bedrock/dist/index.css"]').removeAttribute("disabled"):document.querySelector('link[href$="bedrock/dist/index.css"]').setAttribute("disabled",!0),story()}],globalTypes={bedrock:{name:"bedrock",description:"CSS Bedrock",defaultValue:"enabled",toolbar:{icon:"link",items:[{value:"enabled",title:"Bedrock enabled"},{value:"disabled",title:"Bedrock disabled"}]}}},parameters={backgrounds:{default:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.a.colors.base,grid:{disable:!0}},docs:{theme:Object(_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__.create)({base:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.a.colors.base})},options:{storySort:{order:["README"]}}}},1450:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(551).configure)([__webpack_require__(1451),__webpack_require__(1452)],module,!1)}).call(this,__webpack_require__(134)(module))},1451:function(module,exports,__webpack_require__){var map={"./stories/README.stories.mdx":1527};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1451},1452:function(module,exports,__webpack_require__){var map={"./stories/index.stories.js":1526};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1452},1517:function(module,exports,__webpack_require__){var api=__webpack_require__(45),content=__webpack_require__(1518);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1518:function(module,exports){module.exports=":root{--ck-font-face:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",Arial,sans-serif;--ck-font-size-base:14px;--ck-font-size-tiny:10px;--ck-font-size-small:12px;--ck-font-size-normal:10px;--ck-font-size-big:18px;--ck-font-size-large:22px;--ck-font-size-extra-large:26px;--ck-color-base-background:#fff;--ck-color-base-foreground:#fff;--ck-color-base-border:#d8dcde;--ck-color-base-action:#038153;--ck-color-base-focus:#1f73b7;--ck-color-base-text:#2f3941;--ck-color-base-error:#cc3340;--ck-color-focus-border:var(--ck-color-base-focus);--ck-color-focus-outer-shadow:rgba(31,115,183,0.35);--ck-spacing-unit:4px;--ck-spacing-extra-large:calc(var(--ck-spacing-unit)*4);--ck-spacing-large:calc(var(--ck-spacing-unit)*3);--ck-spacing-standard:calc(var(--ck-spacing-unit)*2);--ck-spacing-medium:var(--ck-spacing-unit);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.25);--ck-spacing-extra-tiny:var(--ck-spacing-tiny);--ck-border-radius:4px;--ck-border-radius-small:2px;--ck-icon-size:16px;--ck-color-tooltip-background:#03363d;--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-shadow-drop:rgba(23,73,77,0.15);--ck-inner-shadow:var(--ck-color-focus-outer-shadow) 0 0 0 3px inset;--ck-drop-shadow:var(--ck-color-shadow-drop) 0 20px 30px 0;--ck-widget-outline-thickness:1px;--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:rgba(31,115,183,0.08);--ck-color-button-default-active-background:rgba(31,115,183,0.2);--ck-color-button-default-active-shadow:transparent;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:var(--ck-color-button-default-active-background);--ck-color-button-on-hover-background:var(--ck-color-button-default-active-background);--ck-color-button-on-active-background:var(--ck-color-button-default-active-background);--ck-color-button-on-active-shadow:transparent;--ck-color-button-on-disabled-background:var(--ck-color-button-default-disabled-background);--ck-color-button-save:#038153;--ck-color-button-cancel:#cc3340;--ck-dropdown-arrow-size:var(--ck-spacing-extra-large);--ck-color-list-button-on-background:inherit;--ck-color-list-button-on-background-focus:var(--ck-color-list-button-hover-background);--ck-color-list-button-on-text:var(--ck-color-base-text)}.ck.ck-button:focus{box-shadow:var(--ck-color-focus-outer-shadow) 0 0 0 3px}.ck.ck-button:active,.ck.ck-button:focus{border-color:transparent}.ck.ck-button:not(.ck-disabled){cursor:pointer}.ck.ck-button:not(.ck-button-save,.ck-button-cancel) .ck-button__icon{color:#68737d}.ck.ck-button:hover:not(.ck-disabled,.ck-on,.ck-button-save,.ck-button-cancel) .ck-button__icon{color:#49545c}.ck.ck-button.ck-on .ck-button__icon{color:#2f3941}.ck.ck-button.ck-disabled:active{box-shadow:none}@keyframes zd-menu--top-open{0%{transform:translateY(var(--ck-spacing-extra-large))}}@keyframes zd-menu--bottom-open{0%{transform:translateY(calc(var(--ck-spacing-extra-large)*-1))}}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-dropdown__arrow{transition:transform .25s ease-in-out 0s,color .25s ease-in-out 0s}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-radius:var(--ck-border-radius)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-dropdown__arrow{transform:rotate(180deg)}.ck.ck-dropdown .ck-dropdown__panel{animation:.2s cubic-bezier(.15,.85,.35,1.2);border-radius:var(--ck-border-radius)!important}.ck.ck-dropdown .ck-dropdown__panel:not(.ck-dropdown__panel-visible){display:inline-block;transition:opacity .2s ease-in-out,visibility .2s linear 0s;visibility:hidden;opacity:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{visibility:visible;opacity:1}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible.ck-dropdown__panel_nw{animation-name:zd-menu--top-open}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible.ck-dropdown__panel_sw{animation-name:zd-menu--bottom-open}.ck.ck-dropdown .ck-dropdown__panel>:first-child{margin-top:var(--ck-spacing-medium)}.ck.ck-dropdown .ck-dropdown__panel>:last-child{margin-bottom:var(--ck-spacing-medium)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:calc(100% + var(--ck-spacing-unit))}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:calc(100% + var(--ck-spacing-unit));bottom:auto}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item .ck-button{border-radius:0!important}.ck[dir=rtl].ck-dropdown .ck-button.ck-dropdown__button .ck-dropdown__arrow{transition:transform .25s ease-in-out 0s,color .25s ease-in-out 0s}.ck[dir=rtl].ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-dropdown__arrow{transform:rotate(-180deg)}.ck.ck-editor__editable_inline{border:1px solid var(--ck-color-toolbar-border);background-color:var(--ck-color-base-background);padding:0 var(--ck-spacing-extra-large)}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-extra-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-extra-large)}.ck.ck-editor__editable_inline .ck-widget .ck-widget__type-around__button{display:none}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow)}.ck.ck-toolbar{padding:0 var(--ck-spacing-standard)}.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-standard)!important;margin-left:var(--ck-spacing-standard)!important;background:#e9ebed!important}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-top:var(--ck-spacing-standard);margin-bottom:var(--ck-spacing-standard)}.ck-content hr{margin:0;background-color:#d8dcde;height:1px}.ck .ck-widget.ck-horizontal-line{padding:var(--ck-spacing-medium) 0;margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large)}.ck .ck-widget.ck-horizontal-line.ck-widget_selected:not(.ck-widget_type-around_show-fake-caret_before,.ck-widget_type-around_show-fake-caret_after){outline-color:transparent!important;border-radius:var(--ck-border-radius-small)!important;box-shadow:var(--ck-color-focus-outer-shadow) 0 0 0 var(--ck-spacing-small)}.ck .ck-widget.ck-horizontal-line.ck-widget_selected:not(.ck-widget_type-around_show-fake-caret_before,.ck-widget_type-around_show-fake-caret_after) hr{background-color:var(--ck-color-base-focus)}.ck.ck-icon :not([fill]){fill:inherit!important}.ck-content blockquote{border-left:2px solid #c2c8cc;padding:0 0 0 var(--ck-spacing-extra-large);overflow:hidden;font-style:inherit;margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large)}.ck-content blockquote p:first-child{margin-top:0}.ck-content blockquote p:last-child{margin-bottom:0}.ck-content pre{margin-block-start:var(--ck-spacing-large);margin-block-end:var(--ck-spacing-large)}.ck-content[dir=rtl] blockquote{border-right:2px solid #c2c8cc;border-left:0;padding:0 var(--ck-spacing-extra-large) 0 0}.ck-content h2{line-height:32px;font-size:var(--ck-font-size-extra-large);font-weight:600;margin-block-end:var(--ck-spacing-extra-large)}.ck-content h3{line-height:28px;font-size:var(--ck-font-size-large)}.ck-content h3,.ck-content h4{font-weight:600;margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large)}.ck-content h4{line-height:24px;font-size:var(--ck-font-size-big)}.ck-content h5{line-height:20px;font-size:var(--ck-font-size-base);font-weight:600}.ck-content h5,.ck-content p{margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large)}.ck-content strong{font-weight:600}.ck-content u{text-decoration:underline}.ck-content ul{margin:0 0 0 calc(var(--ck-spacing-unit)*6);margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large);padding:0;list-style-position:outside;list-style-type:disc}.ck-content ul li{padding:0;padding-top:var(--ck-spacing-small)}.ck-content ul li:first-child{padding-top:0}.ck-content ul ol,.ck-content ul ul{margin-top:0;margin-bottom:0}.ck-content ul ol li:first-child,.ck-content ul ul li:first-child{padding-top:var(--ck-spacing-small)}.ck-content ol{margin:0 0 0 calc(var(--ck-spacing-unit)*6);margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large);padding:0;list-style-position:outside;list-style-type:decimal}.ck-content ol li{margin-left:-var(--ck-spacing-medium);padding:var(--ck-spacing-small) 0 0 var(--ck-spacing-medium)}.ck-content ol li:first-child{padding-top:0}.ck-content ol ol,.ck-content ol ul{margin-top:0;margin-bottom:0}.ck-content ol ol li:first-child,.ck-content ol ul li:first-child{padding-top:var(--ck-spacing-small)}.ck.ck-list__item .ck-button{position:relative;padding:10px calc(var(--ck-spacing-extra-large)*2)}.ck.ck-list__item .ck-button:before{position:absolute;top:0;left:0;transition:opacity .1s ease-in-out;opacity:0;background:no-repeat 50%/var(--ck-spacing-extra-large) url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' focusable='false' viewBox='0 0 16 16' color='%231f73b7'%3E %3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E %3C/svg%3E\");width:calc(var(--ck-spacing-extra-large)*2);height:100%;content:\"\"}.ck.ck-list__item .ck-button:focus{outline:none;border-color:transparent;box-shadow:none;background-color:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-spacing-unit)*5)}.ck.ck-list__item .ck-button.ck-on:before{opacity:1}.ck-content code{border-radius:var(--ck-border-radius-small);padding:1.5px;line-height:normal;color:#49545c;font-family:SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,Courier,monospace;font-size:calc(1em - 1px);direction:ltr}.ck-content code,.ck.ck-editor__editable .ck-code_selected{background-color:#e9ebed}.ck-content pre{margin-block-start:var(--ck-spacing-extra-large);margin-block-end:var(--ck-spacing-extra-large);border-radius:var(--ck-border-radius-small);background-color:#f8f9f9;padding:var(--ck-spacing-large);overflow:auto;white-space:pre;color:var(--ck-color-base-text)}.ck-content pre code{background-color:inherit;padding:0}.ck .ck-link_selected{background:none}.ck.ck-tooltip .ck-tooltip__text{border-radius:var(--ck-border-radius-small)!important;padding:0 1em;font-size:var(--ck-font-size-small)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before,.ck .ck-widget:not(.ck-widget_selected):hover{outline-color:transparent!important}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:0;bottom:0;left:-var(--ck-spacing-small);width:1px}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:0;right:-var(--ck-spacing-small);bottom:0;left:unset;width:1px}.ck .ck-widget:hover.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:0;bottom:0;left:calc(var(--ck-widget-outline-thickness)*-1 - var(--ck-spacing-small))}.ck .ck-widget:hover.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:0;right:calc(var(--ck-widget-outline-thickness)*-1 - var(--ck-spacing-small));bottom:0}.ck[dir=rtl] .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:0;right:-var(--ck-spacing-small);bottom:0;width:1px}.ck[dir=rtl] .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:0;right:unset;bottom:0;left:-var(--ck-spacing-small);width:1px}.ck[dir=rtl] .ck-widget:hover.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:0;right:calc(var(--ck-widget-outline-thickness)*-1 - var(--ck-spacing-small));bottom:0}.ck[dir=rtl] .ck-widget:hover.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:0;bottom:0;left:calc(var(--ck-widget-outline-thickness)*-1 - var(--ck-spacing-small))}"},1519:function(module,exports,__webpack_require__){var api=__webpack_require__(45),content=__webpack_require__(1520);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1520:function(module,exports,__webpack_require__){(exports=__webpack_require__(1521)(!1)).push([module.i,".ck.ck-editor__editable {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.ck.ck-toolbar {\n  border-top: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n",""]),module.exports=exports},1526:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return index_stories_Default}));__webpack_require__(23),__webpack_require__(9);var jsx_runtime=__webpack_require__(216),react=__webpack_require__(0),dist=__webpack_require__(705),blockquote=__webpack_require__(715),bold=__webpack_require__(718),ckeditor=__webpack_require__(706),code=__webpack_require__(719),codeblockediting=__webpack_require__(716),decouplededitor=__webpack_require__(708),essentials=__webpack_require__(710),heading=__webpack_require__(712),horizontalline=__webpack_require__(717),indent=__webpack_require__(713),indentblock=__webpack_require__(714),italic=__webpack_require__(720),src_link=__webpack_require__(709),list=__webpack_require__(711),paragraph=__webpack_require__(250),underline=__webpack_require__(721),widget=__webpack_require__(722),translation_service=__webpack_require__(368),keyboard=__webpack_require__(12),buttonview=(__webpack_require__(1517),__webpack_require__(1519),__webpack_require__(438),__webpack_require__(226),__webpack_require__(279),__webpack_require__(35)),src_plugin=__webpack_require__(4),terminal_window_stroke=__webpack_require__(707),utils=__webpack_require__(72);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var CodeBlockUI_CodeBlockUI=function(_Plugin){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(CodeBlockUI,_Plugin);var _super=_createSuper(CodeBlockUI);function CodeBlockUI(){return _classCallCheck(this,CodeBlockUI),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(CodeBlockUI,[{key:"init",value:function init(){var editor=this.editor,t=editor.t,componentFactory=editor.ui.componentFactory,defaultLanguageDefinition=Object(utils.c)(editor)[0];componentFactory.add("codeBlock",(function(locale){var command=editor.commands.get("codeBlock"),buttonView=new buttonview.a(locale);return buttonView.set({label:t("Insert code block"),tooltip:!0,keystroke:"CTRL+SHIFT+6",icon:terminal_window_stroke.a,isToggleable:!0}),buttonView.bind("isEnabled").to(command),buttonView.bind("isOn").to(command,"value",(function(value){return!!value})),buttonView.on("execute",(function(){editor.execute("codeBlock",{language:defaultLanguageDefinition.language}),editor.editing.view.focus()})),buttonView}))}}]),CodeBlockUI}(src_plugin.a);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Demo"};Object(translation_service.b)("en",{"Bulleted List":"Bulleted list (".concat(Object(keyboard.b)("CTRL+SHIFT+8"),")"),"Numbered List":"Numbered list (".concat(Object(keyboard.b)("CTRL+SHIFT+7"),")"),"Decrease indent":"Decrease indent (".concat(Object(keyboard.b)("CTRL+["),")"),"Increase indent":"Increase indent (".concat(Object(keyboard.b)("CTRL+]"),")"),"Block quote":"Blockquote (".concat(Object(keyboard.b)("CTRL+SHIFT+9"),")"),Code:"Code (".concat(Object(keyboard.b)("CTRL+SHIFT+5"),")"),"Horizontal line":"Horizontal rule (".concat(Object(keyboard.b)("CTRL+SHIFT+L"),")")});var index_stories_Default=function Default(){var storedValue=_slicedToArray(Object(react.useState)((function(){return window.localStorage.getItem("ckeditor5-demo-1")||'<h2>Heading 1</h2><h3>Heading 2</h3><h4>Heading 3</h4><p>Text can have <strong>bold</strong>, <i>italic</i>, and <u>underline</u> content. <code>Inline code</code> is also available. <a href="https://www.google.com">Links work as well.</a></p><hr /><p style="margin-left:0px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li>List 1</li><li>List 2<ol><li>Nested</li><li>List</li></ol></li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><blockquote><p>Block quotes can have <i>inline <strong>content</strong></i></p><p><strong>- Author name</strong></p></blockquote><pre><code class="language-plaintext">Preformatted code can go here</code></pre>'})),1)[0],onValueChange=Object(react.useCallback)((function(value){window.localStorage.setItem("ckeditor5-demo-1",value)}),[]);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(ckeditor.CKEditor,{editor:decouplededitor.a,data:storedValue,config:{plugins:[essentials.a,bold.a,italic.a,paragraph.a,underline.a,code.a,horizontalline.a,src_link.a,indent.a,indentblock.a,list.a,blockquote.a,heading.a,codeblockediting.a,CodeBlockUI_CodeBlockUI,widget.a],toolbar:["heading","bold","italic","underline","code","|","bulletedList","numberedList","outdent","indent","|","blockquote","codeBlock","link","horizontalLine"],codeBlock:{languages:[{language:"plaintext",label:"Plain text"}]}},onReady:function onReady(editor){editor.keystrokes.set("CTRL+SHIFT+8","bulletedList"),editor.keystrokes.set("CTRL+SHIFT+7","numberedList"),editor.keystrokes.set(["ctrl",219],"outdent"),editor.keystrokes.set(["ctrl",221],"indent"),editor.keystrokes.set("CTRL+SHIFT+9","blockQuote"),editor.keystrokes.set("CTRL+SHIFT+5","code"),editor.keystrokes.set("CTRL+SHIFT+L","horizontalLine"),document.querySelector(".toolbar-container").appendChild(editor.ui.view.toolbar.element),editor.editing.view.change((function(writer){writer.setAttribute("spellcheck","false",editor.editing.view.document.getRoot())}))},onChange:function onChange(event,editor){var editorData=editor.getData();Object(dist.action)("onChange")(editorData),onValueChange(editorData)}}),Object(jsx_runtime.jsx)("div",{className:"toolbar-container"})]})};index_stories_Default.parameters=Object.assign({storySource:{source:"() => {\n  const [storedValue] = useState(() => {\n    const storedData = window.localStorage.getItem(EDITOR_LOCAL_STORAGE_KEY);\n\n    return storedData || INITIAL_DATA;\n  });\n\n  const onValueChange = useCallback(value => {\n    window.localStorage.setItem(EDITOR_LOCAL_STORAGE_KEY, value);\n  }, []);\n\n  return (\n    <>\n      <CKEditor\n        editor={DecoupledEditor}\n        data={storedValue}\n        config={{\n          plugins: [\n            Essentials,\n            Bold,\n            Italic,\n            Paragraph,\n            Underline,\n            Code,\n            HorizontalLine,\n            Link,\n            Indent,\n            IndentBlock,\n            List,\n            BlockQuote,\n            Heading,\n            CodeBlockEditing,\n            CodeBlockUI,\n            Widget\n          ],\n          toolbar: [\n            'heading',\n            'bold',\n            'italic',\n            'underline',\n            'code',\n            '|',\n            'bulletedList',\n            'numberedList',\n            'outdent',\n            'indent',\n            '|',\n            'blockquote',\n            'codeBlock',\n            'link',\n            'horizontalLine'\n          ],\n          codeBlock: {\n            languages: [{ language: 'plaintext', label: 'Plain text' }]\n          }\n        }}\n        onReady={editor => {\n          /**\n           * Apply custom keyboard shortcuts\n           */\n          editor.keystrokes.set('CTRL+SHIFT+8', 'bulletedList');\n          editor.keystrokes.set('CTRL+SHIFT+7', 'numberedList');\n          editor.keystrokes.set(['ctrl', 219], 'outdent'); // CTRL+[\n          editor.keystrokes.set(['ctrl', 221], 'indent'); // CTRL+]\n          editor.keystrokes.set('CTRL+SHIFT+9', 'blockQuote');\n          editor.keystrokes.set('CTRL+SHIFT+5', 'code');\n          editor.keystrokes.set('CTRL+SHIFT+L', 'horizontalLine');\n\n          /**\n           * Attach decoupled toolbar\n           */\n          const toolbarContainer = document.querySelector('.toolbar-container');\n\n          toolbarContainer.appendChild(editor.ui.view.toolbar.element);\n\n          /**\n           * Disable spell checker for demo content\n           */\n          editor.editing.view.change(writer => {\n            writer.setAttribute('spellcheck', 'false', editor.editing.view.document.getRoot());\n          });\n        }}\n        onChange={(event, editor) => {\n          const editorData = editor.getData();\n\n          action('onChange')(editorData);\n\n          onValueChange(editorData);\n        }}\n      />\n      <div className=\"toolbar-container\" />\n    </>\n  );\n}"}},index_stories_Default.parameters),index_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.js"]={name:"Default",docgenInfo:index_stories_Default.__docgenInfo,path:"src/stories/index.stories.js"})},1527:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(26),__webpack_require__(9),__webpack_require__(14),__webpack_require__(0);var esm=__webpack_require__(170),blocks=__webpack_require__(293),README="# Garden RTE Resources [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]\x3c!-- markdownlint-disable --\x3e\n\n\x3c!-- markdownlint-enable --\x3e\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/ckeditor\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/ckeditor\n[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/ckeditor/main?label=build\n[build status link]: https://circleci.com/gh/zendeskgarden/ckeditor/tree/main\n[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/ckeditor?label=dependencies\n[dependency status link]: https://david-dm.org/zendeskgarden/ckeditor?type=dev\n\n> :seedling: Garden is the design system by Zendesk\n\nThis package provides Garden theme customizations for the\n[@ckeditor/ckeditor5-theme-lark](https://ckeditor.com/docs/ckeditor5/latest/api/theme-lark.html)\npackage.\n\n## Installation\n\n```sh\nnpm install --save-dev @zendeskgarden/ckeditor\n```\n\n## Usage\n\nWhen building editors from source, ensure that any [webpack configurations](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#webpack-configuration)\nalso include the Garden package.\n\n```js\n{\n  test: [/ckeditor5-[^/\\\\]+[/\\\\]theme[/\\\\].+\\.css$/, /zendeskgarden[^/\\\\]+[/\\\\]theme[/\\\\].+\\.css$/],\n  use: [\n      {\n        loader: 'style-loader'\n      },\n      {\n        loader: 'postcss-loader',\n        options: styles.getPostCssConfig( {\n            themeImporter: {\n                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')\n            }\n        })\n      },\n  ]\n}\n```\n\nThen include the theme overrides in your application.\n\n```js\nimport '@zendeskgarden/ckeditor';\n```\n\n## Contribution\n\nThanks for your interest in Garden! Community involvement helps make our\ndesign system fresh and tasty for everyone.\n\nGot issues with what you find here? Please feel free to create an\n[issue](https://github.com/zendeskgarden/ckeditor/issues/new).\n\nCommunity behavior is benevolently ruled by a [code of\nconduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.\n\n## License\n\nCopyright 2021 Zendesk\n\nLicensed under the [Apache License, Version 2.0](LICENSE.md)\n\nSome of the code included in this Zendesk repo may depend upon software\nauthored and provided by CKSource Frederico Knabben. The terms and conditions\nof the Apache license do not extend to software provided by CKSource, which\nmay be provided under different licenses. Please see the [CKEditor Software\nLicense Agreement](https://ckeditor.com/legal/ckeditor-oss-license/) for\nadditional information.\n";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"README",mdxType:"Meta"}),Object(esm.mdx)(blocks.Description,{mdxType:"Description"},README.substring(README.indexOf("> :seedling:"))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"README",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},725:function(module,exports,__webpack_require__){__webpack_require__(726),__webpack_require__(897),__webpack_require__(898),__webpack_require__(1103),__webpack_require__(1399),__webpack_require__(1432),__webpack_require__(1437),__webpack_require__(1439),__webpack_require__(1442),__webpack_require__(1445),module.exports=__webpack_require__(1450)},800:function(module,exports){},898:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(551)}},[[725,1,2]]]);
//# sourceMappingURL=main.072eecc44dec050ac44f.bundle.js.map