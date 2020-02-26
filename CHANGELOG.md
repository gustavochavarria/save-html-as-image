# Changelog
All notable changes to this project will be documented in this file.


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
