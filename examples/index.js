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

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zcopy = require( '@stdlib/blas-base-zcopy' );
var zeros = require( '@stdlib/array-zeros' );
var logEach = require( '@stdlib/console-log-each' );
var zaxpy = require( './../lib' );

function rand() {
	return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
var zy = filledarrayBy( 10, 'complex128', rand );
var zyc = zcopy( zy.length, zy, 1, zeros( zy.length, 'complex128' ), 1 );

var za = new Complex128( 2.0, 2.0 );

// Scale values from `zx` by `za` and add the result to `zy`:
zaxpy( zx.length, za, zx, 1, zy, 1 );

// Print the results:
logEach( '(%s)*(%s) + (%s) = %s', za, zx, zyc, zy );
