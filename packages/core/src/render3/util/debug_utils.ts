/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export function attachDebugObject(obj: any, debug: any) {
  Object.defineProperty(obj, 'debug', {value: debug, enumerable: false});
}
