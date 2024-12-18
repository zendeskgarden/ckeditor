# Garden RTE Resources [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]<!-- markdownlint-disable -->

<!-- markdownlint-enable -->

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/ckeditor
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/ckeditor
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/ckeditor/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/ckeditor/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/ckeditor?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/ckeditor?type=dev

> :seedling: Garden is the design system by Zendesk

This package provides Garden theme customizations for the
[@ckeditor/ckeditor5-theme-lark](https://ckeditor.com/docs/ckeditor5/latest/api/theme-lark.html)
package.

## Installation

```sh
npm install --save-dev @zendeskgarden/ckeditor
```

## Usage

When building editors from source, ensure that any [webpack configurations](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#webpack-configuration)
also include the Garden package.

```js
{
  test: [/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/, /zendeskgarden[\/\\]ckeditor[\/\\].+[\/\\]theme[\/\\].+\.css$/],
  use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'postcss-loader',
        options: styles.getPostCssConfig( {
            themeImporter: {
                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
            }
        })
      },
  ]
}
```

Then include the theme overrides in your application.

```js
import '@zendeskgarden/ckeditor';
```

### Dark mode

Apply the `data-ck-color-scheme="dark"` attribute to an element (i.e. `<body>`)
that wraps all of CKEditor's rendered components. This includes the editor
itself, the toolbar, and the `.ck-body-wrapper` that contains floating elements
(tooltips, modals, etc.).

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/ckeditor/issues/new).

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2024 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)

Some of the code included in this Zendesk repo may depend upon software
authored and provided by CKSource Frederico Knabben. The terms and conditions
of the Apache license do not extend to software provided by CKSource, which
may be provided under different licenses. Please see the [CKEditor Software
License Agreement](https://ckeditor.com/legal/ckeditor-oss-license/) for
additional information.
