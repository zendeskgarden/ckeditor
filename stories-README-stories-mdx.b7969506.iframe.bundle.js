/*! For license information please see stories-README-stories-mdx.b7969506.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_zendeskgarden_ckeditor=self.webpackChunk_zendeskgarden_ckeditor||[]).push([[555],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));const README_namespaceObject="# Garden RTE Resources [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]\x3c!-- markdownlint-disable --\x3e\n\n\x3c!-- markdownlint-enable --\x3e\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/ckeditor\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/ckeditor\n[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/ckeditor/main?label=build\n[build status link]: https://circleci.com/gh/zendeskgarden/ckeditor/tree/main\n[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/ckeditor?label=dependencies\n[dependency status link]: https://david-dm.org/zendeskgarden/ckeditor?type=dev\n\n> :seedling: Garden is the design system by Zendesk\n\nThis package provides Garden theme customizations for the\n[@ckeditor/ckeditor5-theme-lark](https://ckeditor.com/docs/ckeditor5/latest/api/theme-lark.html)\npackage.\n\n## Installation\n\n```sh\nnpm install --save-dev @zendeskgarden/ckeditor\n```\n\n## Usage\n\nWhen building editors from source, ensure that any [webpack configurations](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#webpack-configuration)\nalso include the Garden package.\n\n```js\n{\n  test: [/ckeditor5-[^/\\\\]+[/\\\\]theme[/\\\\].+\\.css$/, /zendeskgarden[\\/\\\\]ckeditor[\\/\\\\].+[\\/\\\\]theme[\\/\\\\].+\\.css$/],\n  use: [\n      {\n        loader: 'style-loader'\n      },\n      {\n        loader: 'postcss-loader',\n        options: styles.getPostCssConfig( {\n            themeImporter: {\n                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')\n            }\n        })\n      },\n  ]\n}\n```\n\nThen include the theme overrides in your application.\n\n```js\nimport '@zendeskgarden/ckeditor';\n```\n\n## Contribution\n\nThanks for your interest in Garden! Community involvement helps make our\ndesign system fresh and tasty for everyone.\n\nGot issues with what you find here? Please feel free to create an\n[issue](https://github.com/zendeskgarden/ckeditor/issues/new).\n\nCommunity behavior is benevolently ruled by a [code of\nconduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.\n\n## License\n\nCopyright 2021 Zendesk\n\nLicensed under the [Apache License, Version 2.0](LICENSE.md)\n\nSome of the code included in this Zendesk repo may depend upon software\nauthored and provided by CKSource Frederico Knabben. The terms and conditions\nof the Apache license do not extend to software provided by CKSource, which\nmay be provided under different licenses. Please see the [CKEditor Software\nLicense Agreement](https://ckeditor.com/legal/ckeditor-oss-license/) for\nadditional information.\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"README"}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README_namespaceObject.substring(README_namespaceObject.indexOf("> :seedling:"))})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"README",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);