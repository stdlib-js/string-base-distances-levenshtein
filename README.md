<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# levenshteinDistance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [Levenshtein][levenshtein] (edit) distance between two strings.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import levenshteinDistance from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-base-distances-levenshtein/tags). For example,

```javascript
import levenshteinDistance from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@v0.0.1-deno/mod.js';
```

#### levenshteinDistance( s1, s2 )

Calculates the [Levenshtein][levenshtein] (edit) distance between two strings.

```javascript
var dist = levenshteinDistance( 'frog', 'from' );
// returns 1

dist = levenshteinDistance( 'frog', 'froth' );
// returns 2

dist = levenshteinDistance( 'cat', 'kitty' );
// returns 4

dist = levenshteinDistance( '', 'abcdef' );
// returns 6

dist = levenshteinDistance( '1638452297', '2311638451' );
// returns 7
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
import levenshteinDistance from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@deno/mod.js';

var dist = levenshteinDistance( 'algorithm', 'altruistic' );
// returns 6

dist = levenshteinDistance( 'elephant', 'hippo' );
// returns 7

dist = levenshteinDistance( 'javascript', 'typescript' );
// returns 4

dist = levenshteinDistance( 'levenshtein', 'leviathan' );
// returns 6
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-distances-levenshtein.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-distances-levenshtein

[test-image]: https://github.com/stdlib-js/string-base-distances-levenshtein/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/string-base-distances-levenshtein/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-distances-levenshtein/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-distances-levenshtein?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-distances-levenshtein.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-distances-levenshtein/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-distances-levenshtein/tree/deno
[umd-url]: https://github.com/stdlib-js/string-base-distances-levenshtein/tree/umd
[esm-url]: https://github.com/stdlib-js/string-base-distances-levenshtein/tree/esm
[branches-url]: https://github.com/stdlib-js/string-base-distances-levenshtein/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-distances-levenshtein/main/LICENSE

[levenshtein]: https://en.wikipedia.org/wiki/Levenshtein_distance

</section>

<!-- /.links -->
