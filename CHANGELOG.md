# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/zendeskgarden/ckeditor/compare/v0.2.1...v1.0.0) (2024-11-07)


### ⚠ BREAKING CHANGES

* items include...
- removal of individual `_component.css` files from the dist (the overrides are expected to be used as a collective starting point for RTE styling)
- overall cleanup affects various CSS selector specificity
- resets for CKEditor's generally outdated focus management (predicated on adding/removing element `class`es) in favor of modernized `:focus-visible` styling

Includes updated styling for the following RTE components:

- blockquote
- button
- code
- code block
- horizontal rule
- input
- link
- list
- menu
- modal (balloon-panel)
- tooltip
- typearound
- typography (paragraph, h2, h3, h4, h5, strong, u)

See [README](https://github.com/zendeskgarden/ckeditor/blob/main/README.md#dark-mode) for dark mode usage.

### Features

* restyle based on Garden v9 with dark mode included ([#157](https://github.com/zendeskgarden/ckeditor/issues/157)) ([8fad501](https://github.com/zendeskgarden/ckeditor/commit/8fad5012c970813551a6e62824511989b5b81a40))

### [0.2.1](https://github.com/zendeskgarden/ckeditor/compare/v0.2.0...v0.2.1) (2023-06-20)

## [0.2.0](https://github.com/zendeskgarden/ckeditor/compare/v0.1.0...v0.2.0) (2023-06-16)


### Features

* unify focus styles with new standard ([#90](https://github.com/zendeskgarden/ckeditor/issues/90)) ([78a98c6](https://github.com/zendeskgarden/ckeditor/commit/78a98c6d602668dc8b5e71a190a637f315855052))

## 0.1.0 (2021-03-03)


### Features

* introduce additional CKEditor theming ([#5](https://github.com/zendeskgarden/ckeditor/issues/5)) ([9581cde](https://github.com/zendeskgarden/ckeditor/commit/9581cde75ac5653a9882da707e64564cbb1443aa))
* introduce garden theming ([#3](https://github.com/zendeskgarden/ckeditor/issues/3)) ([93052da](https://github.com/zendeskgarden/ckeditor/commit/93052dacbce764d8bd0a44a91830a4e41868b9c6))
* update toolbar placement and content spacing ([#7](https://github.com/zendeskgarden/ckeditor/issues/7)) ([99b4265](https://github.com/zendeskgarden/ckeditor/commit/99b42653e66e158d119a45132cb88de9fa602aac))
