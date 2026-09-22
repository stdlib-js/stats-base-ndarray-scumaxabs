"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=v(function(x,s){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/stats-strided-scumaxabs/dist').ndarray;function d(t){var r=t[0],e=t[1];return c(q(r,0),u(r),i(r,0),a(r),u(e),i(e,0),a(e)),e}s.exports=d
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
