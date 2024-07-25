# Changelog

## [1.4.5] - 2024-07-25

### Added
- `onRerunWithoutBundling` option for logging purposes

## [1.3.5] - 2024-07-05

### Added
- `sufficient` as `namespacingStrategy` and make it the default one

## [1.2.5] - 2024-07-04

### Fixed
- handling fragments that are based on a union type

## [1.2.4] - 2024-07-03

### Added
- `bundleRequestCountMax` option to make the http call before the interval if the request count hits
- `namespacingStrategy` option `with-operation-name` as an opt-in feature to simplify debugging customer applications by making it easier to check query logs.

### Fixed
- unifying same-name fields, even if they had different aliases
- fetchFunc needed to be bound to the right context

## [1.0.2] - 2024-07-01

### Fixed
- typo in README.md

## [1.0.1] - 2024-07-01

### Fixed
- `types` field in package.json

## [1.0.0] - 2024-07-01

### Added
- Initial release
