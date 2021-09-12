# Changelog
All notable changes to this project will be documented in this file.



## [1.6.0] - 2021-09-12
- Fix bug with cache in HTML-TO-IMAGE package

## [1.5.2] - 2021-03-22
- Add 4px of default width & height

## [1.5.1] - 2021-03-22
- Fix Scale of images
- NO Breaking changes

## [1.5.0] - 2021-03-22
- Adding DOM OPTIONS
- Breaking changes

### Breaking changes
- Remove Default Padding in DOM, now you must provide the padding/margin to download
- Remove Default Style (boxShadow: 'none')


## [1.4.0] - 2021-02-25
- Updating dependencies
- No breaking changes

## [1.3.3] - 2020-04-09

### Fix
- Add **Remove-elements** (display: none)

## [1.3.2] - 2020-03-09

### Fix
- Add **Hide-elements* (visibility: hidden)

## [1.3.1] - 2020-02-26

### Fix
- Remove debug code (console.log)
- Fix build (dependencies needed)
  ```  These dependencies were not found:
   * file-saver in ./node_modules/save-html-as-image/dist/index.modern.js
    * save-svg-as-png in ./node_modules/save-html-as-image/dist/index.modern.js 
    
    To install them, you can run: npm install --save file-saver save-svg-as-png ```

## [1.3.0] - 2020-02-26

### Added
- Hide elements with className "hide-when-downloading"

### Refactors
- Reduce the repetition of code


## [1.2.1] - 2020-02-25

### Fix
- Crash when compiling code (beacause eslint rules);
  
## [1.2.0] - 2019-10-11

### Added
- saveAsJpeg, now you can save the html as jpeg.

## [1.1.0] - 2019-10-11

### Added
- Build project with *microbundle* (support for CommonJS/Node, JS Modules, unpkg).

## [1.0.3] - 2019-10-10

### Changed
- downloadDOM was deprecated.


## [1.0.0] - 2019-10-10

### Added
- Init project.
