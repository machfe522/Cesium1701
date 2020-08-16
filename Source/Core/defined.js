/**
 * @function
 *
 * @param {*} value The object.
 * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
 *
 * @example
 * if (Cesium.defined(positions)) {
 *      doSomething();
 * } else {
 *      doSomethingElse();
 * }
 */
function defined(value) {
  /*
   == 和 != 比较若类型不同，先偿试转换类型，再作值比较，最后返回值比较结果 。
   === 和 !== 只有在相同类型下,才会比较其值 。
  */
  return value !== undefined && value !== null;
}
export default defined;
