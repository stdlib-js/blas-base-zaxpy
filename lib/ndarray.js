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

var dcabs1 = require( '@stdlib/blas-base-dcabs1' );
var cmul = require( '@stdlib/complex-float64-base-mul' );
var cadd = require( '@stdlib/complex-float64-base-add' );


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} za - scalar constant
* @param {Complex128Array} zx - first input array
* @param {integer} strideX - `zx` stride length
* @param {integer} offsetX - starting index for `zx`
* @param {Complex128Array} zy - second input array
* @param {integer} strideY - `zy` stride length
* @param {integer} offsetY - starting index for `zy`
* @returns {Complex128Array} second input array
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zaxpy( 3, za, zx, 1, 0, zy, 1, 0 );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns -1.0
*
* var im = imag( z );
* // returns 7.0
*/
function zaxpy( N, za, zx, strideX, offsetX, zy, strideY, offsetY ) {
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return zy;
	}
	if ( dcabs1( za ) === 0.0 ) {
		return zy;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		zy.set( cadd( cmul( za, zx.get( ix ) ), zy.get( iy ) ), iy );
		ix += strideX;
		iy += strideY;
	}
	return zy;
}


// EXPORTS //

module.exports = zaxpy;
