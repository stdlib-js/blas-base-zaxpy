/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} alpha - scalar constant
* @param {Complex128Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {Complex128Array} second input array
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zaxpy( 3, alpha, x, 1, y, 1 );
* // y => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/
function zaxpy( N, alpha, x, strideX, y, strideY ) {
	var ix = stride2offset( N, strideX );
	var iy = stride2offset( N, strideY );
	return ndarray( N, alpha, x, strideX, ix, y, strideY, iy );
}


// EXPORTS //

module.exports = zaxpy;
