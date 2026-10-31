const Wt = "srgb", Ir = "srgb-linear", Ur = "linear", at = "srgb";
const Js = "300 es";
function rl(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function qi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function sl() {
  const i = qi("canvas");
  return i.style.display = "block", i;
}
const Qs = {};
function Nr(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Eo(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function He(...i) {
  i = Eo(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function nt(...i) {
  i = Eo(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Ps(...i) {
  const e = i.join(" ");
  e in Qs || (Qs[e] = !0, He(...i));
}
function al(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const ol = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class jn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Ot = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Lr = Math.PI / 180, Ls = 180 / Math.PI;
function On() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ot[i & 255] + Ot[i >> 8 & 255] + Ot[i >> 16 & 255] + Ot[i >> 24 & 255] + "-" + Ot[e & 255] + Ot[e >> 8 & 255] + "-" + Ot[e >> 16 & 15 | 64] + Ot[e >> 24 & 255] + "-" + Ot[t & 63 | 128] + Ot[t >> 8 & 255] + "-" + Ot[t >> 16 & 255] + Ot[t >> 24 & 255] + Ot[n & 255] + Ot[n >> 8 & 255] + Ot[n >> 16 & 255] + Ot[n >> 24 & 255]).toLowerCase();
}
function et(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ll(i, e) {
  return (i % e + e) % e;
}
function qr(i, e, t) {
  return (1 - t) * i + t * e;
}
function fn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ct(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Xs = class Xs {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = et(this.x, e.x, t.x), this.y = et(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = et(this.x, e, t), this.y = et(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(et(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(et(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
Xs.prototype.isVector2 = !0;
let Je = Xs;
class Pi {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], f = n[r + 2], h = n[r + 3], u = s[a + 0], m = s[a + 1], g = s[a + 2], v = s[a + 3];
    if (h !== v || c !== u || l !== m || f !== g) {
      let p = c * u + l * m + f * g + h * v;
      p < 0 && (u = -u, m = -m, g = -g, v = -v, p = -p);
      let d = 1 - o;
      if (p < 0.9995) {
        const S = Math.acos(p), y = Math.sin(S);
        d = Math.sin(d * S) / y, o = Math.sin(o * S) / y, c = c * d + u * o, l = l * d + m * o, f = f * d + g * o, h = h * d + v * o;
      } else {
        c = c * d + u * o, l = l * d + m * o, f = f * d + g * o, h = h * d + v * o;
        const S = 1 / Math.sqrt(c * c + l * l + f * f + h * h);
        c *= S, l *= S, f *= S, h *= S;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = h;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], f = n[r + 3], h = s[a], u = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + f * h + c * m - l * u, e[t + 1] = c * g + f * u + l * h - o * m, e[t + 2] = l * g + f * m + o * u - c * h, e[t + 3] = f * g - o * h - c * u - l * m, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), f = o(r / 2), h = o(s / 2), u = c(n / 2), m = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * f * h + l * m * g, this._y = l * m * h - u * f * g, this._z = l * f * g + u * m * h, this._w = l * f * h - u * m * g;
        break;
      case "YXZ":
        this._x = u * f * h + l * m * g, this._y = l * m * h - u * f * g, this._z = l * f * g - u * m * h, this._w = l * f * h + u * m * g;
        break;
      case "ZXY":
        this._x = u * f * h - l * m * g, this._y = l * m * h + u * f * g, this._z = l * f * g + u * m * h, this._w = l * f * h - u * m * g;
        break;
      case "ZYX":
        this._x = u * f * h - l * m * g, this._y = l * m * h + u * f * g, this._z = l * f * g - u * m * h, this._w = l * f * h + u * m * g;
        break;
      case "YZX":
        this._x = u * f * h + l * m * g, this._y = l * m * h + u * f * g, this._z = l * f * g - u * m * h, this._w = l * f * h - u * m * g;
        break;
      case "XZY":
        this._x = u * f * h - l * m * g, this._y = l * m * h - u * f * g, this._z = l * f * g + u * m * h, this._w = l * f * h + u * m * g;
        break;
      default:
        He("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], f = t[6], h = t[10], u = n + o + h;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (f - c) * m, this._y = (s - l) * m, this._z = (a - r) * m;
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      this._w = (f - c) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + l) / m;
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - l) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (c + f) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - r) / m, this._x = (s + l) / m, this._y = (c + f) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(et(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, f = t._w;
    return this._x = n * f + a * o + r * l - s * c, this._y = r * f + a * c + s * o - n * l, this._z = s * f + a * l + n * c - r * o, this._w = a * f - n * o - r * c - s * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    let n = e._x, r = e._y, s = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, s = -s, a = -a, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), f = Math.sin(l);
      c = Math.sin(c * l) / f, t = Math.sin(t * l) / f, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this._onChangeCallback();
    } else
      this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const qs = class qs {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(ea.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ea.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), f = 2 * (o * t - s * r), h = 2 * (s * n - a * t);
    return this.x = t + c * l + a * h - o * f, this.y = n + c * f + o * l - s * h, this.z = r + c * h + s * f - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = et(this.x, e.x, t.x), this.y = et(this.y, e.y, t.y), this.z = et(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = et(this.x, e, t), this.y = et(this.y, e, t), this.z = et(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(et(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return $r.copy(this).projectOnVector(e), this.sub($r);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub($r.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(et(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
qs.prototype.isVector3 = !0;
let P = qs;
const $r = /* @__PURE__ */ new P(), ea = /* @__PURE__ */ new Pi(), $s = class $s {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = c, f[6] = n, f[7] = a, f[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], f = n[4], h = n[7], u = n[2], m = n[5], g = n[8], v = r[0], p = r[3], d = r[6], S = r[1], y = r[4], b = r[7], w = r[2], E = r[5], R = r[8];
    return s[0] = a * v + o * S + c * w, s[3] = a * p + o * y + c * E, s[6] = a * d + o * b + c * R, s[1] = l * v + f * S + h * w, s[4] = l * p + f * y + h * E, s[7] = l * d + f * b + h * R, s[2] = u * v + m * S + g * w, s[5] = u * p + m * y + g * E, s[8] = u * d + m * b + g * R, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8];
    return t * a * f - t * o * l - n * s * f + n * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], h = f * a - o * l, u = o * c - f * s, m = l * s - a * c, g = t * h + n * u + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = h * v, e[1] = (r * l - f * n) * v, e[2] = (o * n - r * a) * v, e[3] = u * v, e[4] = (f * t - r * c) * v, e[5] = (r * s - o * t) * v, e[6] = m * v, e[7] = (n * c - l * t) * v, e[8] = (a * t - n * s) * v, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(Yr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Yr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Yr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
$s.prototype.isMatrix3 = !0;
let qe = $s;
const Yr = /* @__PURE__ */ new qe(), ta = /* @__PURE__ */ new qe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), na = /* @__PURE__ */ new qe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function cl() {
  const i = {
    enabled: !0,
    workingColorSpace: Ir,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === at && (r.r = En(r.r), r.g = En(r.g), r.b = En(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === at && (r.r = Ai(r.r), r.g = Ai(r.g), r.b = Ai(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? Ur : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Ir]: {
      primaries: e,
      whitePoint: n,
      transfer: Ur,
      toXYZ: ta,
      fromXYZ: na,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Wt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Wt }
    },
    [Wt]: {
      primaries: e,
      whitePoint: n,
      transfer: at,
      toXYZ: ta,
      fromXYZ: na,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Wt }
    }
  }), i;
}
const Qe = /* @__PURE__ */ cl();
function En(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ai(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let si;
class ul {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      si === void 0 && (si = qi("canvas")), si.width = e.width, si.height = e.height;
      const r = si.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = si;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = qi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = En(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(En(t[n] / 255) * 255) : t[n] = En(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let fl = 0;
class zs {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: fl++ }), this.uuid = On(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Kr(r[a].image)) : s.push(Kr(r[a]));
      } else
        s = Kr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Kr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ul.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (He("Texture: Unable to serialize Texture."), {});
}
let hl = 0;
const Zr = /* @__PURE__ */ new P();
class Lt extends jn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = Lt.DEFAULT_IMAGE, t = Lt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = Lt.DEFAULT_ANISOTROPY, f = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: hl++ }), this.uuid = On(), this.name = "", this.source = new zs(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Je(0, 0), this.repeat = new Je(1, 1), this.center = new Je(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new qe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Zr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Zr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Zr).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        He(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        He(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Lt.DEFAULT_IMAGE = null;
Lt.DEFAULT_MAPPING = 300;
Lt.DEFAULT_ANISOTROPY = 1;
const Ys = class Ys {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], f = c[4], h = c[8], u = c[1], m = c[5], g = c[9], v = c[2], p = c[6], d = c[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(h - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(h + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (l + 1) / 2, b = (m + 1) / 2, w = (d + 1) / 2, E = (f + u) / 4, R = (h + v) / 4, _ = (g + p) / 4;
      return y > b && y > w ? y < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), r = E / n, s = R / n) : b > w ? b < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), n = E / r, s = _ / r) : w < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(w), n = R / s, r = _ / s), this.set(n, r, s, t), this;
    }
    let S = Math.sqrt((p - g) * (p - g) + (h - v) * (h - v) + (u - f) * (u - f));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (p - g) / S, this.y = (h - v) / S, this.z = (u - f) / S, this.w = Math.acos((l + m + d - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = et(this.x, e.x, t.x), this.y = et(this.y, e.y, t.y), this.z = et(this.z, e.z, t.z), this.w = et(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = et(this.x, e, t), this.y = et(this.y, e, t), this.z = et(this.z, e, t), this.w = et(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(et(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
Ys.prototype.isVector4 = !0;
let vt = Ys;
class dl extends jn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new vt(0, 0, e, t), this.scissorTest = !1, this.viewport = new vt(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new Lt(r), a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new zs(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class hn extends dl {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class yo extends Lt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class pl extends Lt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Hr = class Hr {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l, f, h, u, m, g, v, p) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, f, h, u, m, g, v, p);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l, f, h, u, m, g, v, p) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = a, d[9] = o, d[13] = c, d[2] = l, d[6] = f, d[10] = h, d[14] = u, d[3] = m, d[7] = g, d[11] = v, d[15] = p, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new Hr().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    if (e.determinant() === 0)
      return this.identity();
    const t = this.elements, n = e.elements, r = 1 / ai.setFromMatrixColumn(e, 0).length(), s = 1 / ai.setFromMatrixColumn(e, 1).length(), a = 1 / ai.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), f = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f, m = a * h, g = o * f, v = o * h;
      t[0] = c * f, t[4] = -c * h, t[8] = l, t[1] = m + g * l, t[5] = u - v * l, t[9] = -o * c, t[2] = v - u * l, t[6] = g + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * f, m = c * h, g = l * f, v = l * h;
      t[0] = u + v * o, t[4] = g * o - m, t[8] = a * l, t[1] = a * h, t[5] = a * f, t[9] = -o, t[2] = m * o - g, t[6] = v + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * f, m = c * h, g = l * f, v = l * h;
      t[0] = u - v * o, t[4] = -a * h, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * f, t[9] = v - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * f, m = a * h, g = o * f, v = o * h;
      t[0] = c * f, t[4] = g * l - m, t[8] = u * l + v, t[1] = c * h, t[5] = v * l + u, t[9] = m * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, m = a * l, g = o * c, v = o * l;
      t[0] = c * f, t[4] = v - u * h, t[8] = g * h + m, t[1] = h, t[5] = a * f, t[9] = -o * f, t[2] = -l * f, t[6] = m * h + g, t[10] = u - v * h;
    } else if (e.order === "XZY") {
      const u = a * c, m = a * l, g = o * c, v = o * l;
      t[0] = c * f, t[4] = -h, t[8] = l * f, t[1] = u * h + v, t[5] = a * f, t[9] = m * h - g, t[2] = g * h - m, t[6] = o * f, t[10] = v * h + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(ml, e, gl);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return $t.subVectors(e, t), $t.lengthSq() === 0 && ($t.z = 1), $t.normalize(), Cn.crossVectors(n, $t), Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? $t.x += 1e-4 : $t.z += 1e-4, $t.normalize(), Cn.crossVectors(n, $t)), Cn.normalize(), ji.crossVectors($t, Cn), r[0] = Cn.x, r[4] = ji.x, r[8] = $t.x, r[1] = Cn.y, r[5] = ji.y, r[9] = $t.y, r[2] = Cn.z, r[6] = ji.z, r[10] = $t.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], f = n[1], h = n[5], u = n[9], m = n[13], g = n[2], v = n[6], p = n[10], d = n[14], S = n[3], y = n[7], b = n[11], w = n[15], E = r[0], R = r[4], _ = r[8], T = r[12], F = r[1], C = r[5], L = r[9], H = r[13], N = r[2], D = r[6], U = r[10], B = r[14], Y = r[3], Z = r[7], te = r[11], pe = r[15];
    return s[0] = a * E + o * F + c * N + l * Y, s[4] = a * R + o * C + c * D + l * Z, s[8] = a * _ + o * L + c * U + l * te, s[12] = a * T + o * H + c * B + l * pe, s[1] = f * E + h * F + u * N + m * Y, s[5] = f * R + h * C + u * D + m * Z, s[9] = f * _ + h * L + u * U + m * te, s[13] = f * T + h * H + u * B + m * pe, s[2] = g * E + v * F + p * N + d * Y, s[6] = g * R + v * C + p * D + d * Z, s[10] = g * _ + v * L + p * U + d * te, s[14] = g * T + v * H + p * B + d * pe, s[3] = S * E + y * F + b * N + w * Y, s[7] = S * R + y * C + b * D + w * Z, s[11] = S * _ + y * L + b * U + w * te, s[15] = S * T + y * H + b * B + w * pe, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], f = e[2], h = e[6], u = e[10], m = e[14], g = e[3], v = e[7], p = e[11], d = e[15], S = c * m - l * u, y = o * m - l * h, b = o * u - c * h, w = a * m - l * f, E = a * u - c * f, R = a * h - o * f;
    return t * (v * S - p * y + d * b) - n * (g * S - p * w + d * E) + r * (g * y - v * w + d * R) - s * (g * b - v * E + p * R);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], h = e[9], u = e[10], m = e[11], g = e[12], v = e[13], p = e[14], d = e[15], S = t * o - n * a, y = t * c - r * a, b = t * l - s * a, w = n * c - r * o, E = n * l - s * o, R = r * l - s * c, _ = f * v - h * g, T = f * p - u * g, F = f * d - m * g, C = h * p - u * v, L = h * d - m * v, H = u * d - m * p, N = S * H - y * L + b * C + w * F - E * T + R * _;
    if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / N;
    return e[0] = (o * H - c * L + l * C) * D, e[1] = (r * L - n * H - s * C) * D, e[2] = (v * R - p * E + d * w) * D, e[3] = (u * E - h * R - m * w) * D, e[4] = (c * F - a * H - l * T) * D, e[5] = (t * H - r * F + s * T) * D, e[6] = (p * b - g * R - d * y) * D, e[7] = (f * R - u * b + m * y) * D, e[8] = (a * L - o * F + l * _) * D, e[9] = (n * F - t * L - s * _) * D, e[10] = (g * E - v * b + d * S) * D, e[11] = (h * b - f * E - m * S) * D, e[12] = (o * T - a * C - c * _) * D, e[13] = (t * C - n * T + r * _) * D, e[14] = (v * y - g * w - p * S) * D, e[15] = (f * w - h * y + u * S) * D, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, f = s * o;
    return this.set(
      l * a + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      f * o + n,
      f * c - r * a,
      0,
      l * c - r * o,
      f * c + r * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, f = a + a, h = o + o, u = s * l, m = s * f, g = s * h, v = a * f, p = a * h, d = o * h, S = c * l, y = c * f, b = c * h, w = n.x, E = n.y, R = n.z;
    return r[0] = (1 - (v + d)) * w, r[1] = (m + b) * w, r[2] = (g - y) * w, r[3] = 0, r[4] = (m - b) * E, r[5] = (1 - (u + d)) * E, r[6] = (p + S) * E, r[7] = 0, r[8] = (g + y) * R, r[9] = (p - S) * R, r[10] = (1 - (u + v)) * R, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const s = this.determinant();
    if (s === 0)
      return n.set(1, 1, 1), t.identity(), this;
    let a = ai.set(r[0], r[1], r[2]).length();
    const o = ai.set(r[4], r[5], r[6]).length(), c = ai.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), en.copy(this);
    const l = 1 / a, f = 1 / o, h = 1 / c;
    return en.elements[0] *= l, en.elements[1] *= l, en.elements[2] *= l, en.elements[4] *= f, en.elements[5] *= f, en.elements[6] *= f, en.elements[8] *= h, en.elements[9] *= h, en.elements[10] *= h, t.setFromRotationMatrix(en), n.x = a, n.y = o, n.z = c, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, f = 2 * s / (t - e), h = 2 * s / (n - r), u = (t + e) / (t - e), m = (n + r) / (n - r);
    let g, v;
    if (c)
      g = s / (a - s), v = a * s / (a - s);
    else if (o === 2e3)
      g = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), v = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, f = 2 / (t - e), h = 2 / (n - r), u = -(t + e) / (t - e), m = -(n + r) / (n - r);
    let g, v;
    if (c)
      g = 1 / (a - s), v = a / (a - s);
    else if (o === 2e3)
      g = -2 / (a - s), v = -(a + s) / (a - s);
    else if (o === 2001)
      g = -1 / (a - s), v = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = h, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = g, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
};
Hr.prototype.isMatrix4 = !0;
let ut = Hr;
const ai = /* @__PURE__ */ new P(), en = /* @__PURE__ */ new ut(), ml = /* @__PURE__ */ new P(0, 0, 0), gl = /* @__PURE__ */ new P(1, 1, 1), Cn = /* @__PURE__ */ new P(), ji = /* @__PURE__ */ new P(), $t = /* @__PURE__ */ new P(), ia = /* @__PURE__ */ new ut(), ra = /* @__PURE__ */ new Pi();
class $n {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = $n.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], f = r[9], h = r[2], u = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(et(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-et(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(et(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-et(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(et(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-et(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, m), this._y = 0);
        break;
      default:
        He("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return ia.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ia, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return ra.setFromEuler(this), this.setFromQuaternion(ra, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
$n.DEFAULT_ORDER = "XYZ";
class bo {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let _l = 0;
const sa = /* @__PURE__ */ new P(), oi = /* @__PURE__ */ new Pi(), mn = /* @__PURE__ */ new ut(), Ji = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), xl = /* @__PURE__ */ new P(), vl = /* @__PURE__ */ new Pi(), aa = /* @__PURE__ */ new P(1, 0, 0), oa = /* @__PURE__ */ new P(0, 1, 0), la = /* @__PURE__ */ new P(0, 0, 1), ca = { type: "added" }, Sl = { type: "removed" }, li = { type: "childadded", child: null }, jr = { type: "childremoved", child: null };
class At extends jn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _l++ }), this.uuid = On(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = At.DEFAULT_UP.clone();
    const e = new P(), t = new $n(), n = new Pi(), r = new P(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new ut()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new qe()
      }
    }), this.matrix = new ut(), this.matrixWorld = new ut(), this.matrixAutoUpdate = At.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new bo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return oi.setFromAxisAngle(e, t), this.quaternion.multiply(oi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return oi.setFromAxisAngle(e, t), this.quaternion.premultiply(oi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(aa, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(oa, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(la, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return sa.copy(e).applyQuaternion(this.quaternion), this.position.add(sa.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(aa, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(oa, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(la, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(mn.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? Ji.copy(e) : Ji.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Fi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mn.lookAt(Fi, Ji, this.up) : mn.lookAt(Ji, Fi, this.up), this.quaternion.setFromRotationMatrix(mn), r && (mn.extractRotation(r.matrixWorld), oi.setFromRotationMatrix(mn), this.quaternion.premultiply(oi.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (nt("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ca), li.child = e, this.dispatchEvent(li), li.child = null) : nt("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Sl), jr.child = e, this.dispatchEvent(jr), jr.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), mn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), mn.multiply(e.parent.matrixWorld)), e.applyMatrix4(mn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(ca), li.child = e, this.dispatchEvent(li), li.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fi, e, xl), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fi, vl, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, s = this.matrix.elements;
      s[12] += t - s[0] * t - s[4] * n - s[8] * r, s[13] += n - s[1] * t - s[5] * n - s[9] * r, s[14] += r - s[2] * t - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const h = c[l];
            s(e.shapes, h);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), f = a(e.images), h = a(e.shapes), u = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f), h.length > 0 && (n.shapes = h), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
At.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
At.DEFAULT_MATRIX_AUTO_UPDATE = !0;
At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class dt extends At {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ml = { type: "move" };
class Jr {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new dt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new dt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new dt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P(), this._grip.eventsEnabled = !1), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), d = this._getHandJoint(l, v);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const f = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], u = f.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && u > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1, c.eventsEnabled && c.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ml)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new dt();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const To = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Pn = { h: 0, s: 0, l: 0 }, Qi = { h: 0, s: 0, l: 0 };
function Qr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class De {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Wt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Qe.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = Qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = Qe.workingColorSpace) {
    if (e = ll(e, 1), t = et(t, 0, 1), n = et(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Qr(a, s, e + 1 / 3), this.g = Qr(a, s, e), this.b = Qr(a, s, e - 1 / 3);
    }
    return Qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Wt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && He("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          He("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      He("Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Wt) {
    const n = To[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : He("Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = En(e.r), this.g = En(e.g), this.b = En(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Ai(e.r), this.g = Ai(e.g), this.b = Ai(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Wt) {
    return Qe.workingToColorSpace(Bt.copy(this), e), Math.round(et(Bt.r * 255, 0, 255)) * 65536 + Math.round(et(Bt.g * 255, 0, 255)) * 256 + Math.round(et(Bt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Wt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = Qe.workingColorSpace) {
    Qe.workingToColorSpace(Bt.copy(this), t);
    const n = Bt.r, r = Bt.g, s = Bt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const h = a - o;
      switch (l = f <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          c = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / h + 2;
          break;
        case s:
          c = (n - r) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = f, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Qe.workingColorSpace) {
    return Qe.workingToColorSpace(Bt.copy(this), t), e.r = Bt.r, e.g = Bt.g, e.b = Bt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Wt) {
    Qe.workingToColorSpace(Bt.copy(this), e);
    const t = Bt.r, n = Bt.g, r = Bt.b;
    return e !== Wt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(Pn), this.setHSL(Pn.h + e, Pn.s + t, Pn.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(Pn), e.getHSL(Qi);
    const n = qr(Pn.h, Qi.h, t), r = qr(Pn.s, Qi.s, t), s = qr(Pn.l, Qi.l, t);
    return this.setHSL(n, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Bt = /* @__PURE__ */ new De();
De.NAMES = To;
class El extends At {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new $n(), this.environmentIntensity = 1, this.environmentRotation = new $n(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const tn = /* @__PURE__ */ new P(), gn = /* @__PURE__ */ new P(), es = /* @__PURE__ */ new P(), _n = /* @__PURE__ */ new P(), ci = /* @__PURE__ */ new P(), ui = /* @__PURE__ */ new P(), ua = /* @__PURE__ */ new P(), ts = /* @__PURE__ */ new P(), ns = /* @__PURE__ */ new P(), is = /* @__PURE__ */ new P(), rs = /* @__PURE__ */ new vt(), ss = /* @__PURE__ */ new vt(), as = /* @__PURE__ */ new vt();
class Kt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), tn.subVectors(e, t), r.cross(tn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, s) {
    tn.subVectors(r, t), gn.subVectors(n, t), es.subVectors(e, t);
    const a = tn.dot(tn), o = tn.dot(gn), c = tn.dot(es), l = gn.dot(gn), f = gn.dot(es), h = a * l - o * o;
    if (h === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / h, m = (l * c - o * f) * u, g = (a * f - o * c) * u;
    return s.set(1 - m - g, g, m);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, _n) === null ? !1 : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, _n) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, _n.x), c.addScaledVector(a, _n.y), c.addScaledVector(o, _n.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return rs.setScalar(0), ss.setScalar(0), as.setScalar(0), rs.fromBufferAttribute(e, t), ss.fromBufferAttribute(e, n), as.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(rs, s.x), a.addScaledVector(ss, s.y), a.addScaledVector(as, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return tn.subVectors(n, t), gn.subVectors(e, t), tn.cross(gn).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return tn.subVectors(this.c, this.b), gn.subVectors(this.a, this.b), tn.cross(gn).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Kt.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, s) {
    return Kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Kt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    ci.subVectors(r, n), ui.subVectors(s, n), ts.subVectors(e, n);
    const c = ci.dot(ts), l = ui.dot(ts);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    ns.subVectors(e, r);
    const f = ci.dot(ns), h = ui.dot(ns);
    if (f >= 0 && h <= f)
      return t.copy(r);
    const u = c * h - f * l;
    if (u <= 0 && c >= 0 && f <= 0)
      return a = c / (c - f), t.copy(n).addScaledVector(ci, a);
    is.subVectors(e, s);
    const m = ci.dot(is), g = ui.dot(is);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const v = m * l - c * g;
    if (v <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(ui, o);
    const p = f * g - m * h;
    if (p <= 0 && h - f >= 0 && m - g >= 0)
      return ua.subVectors(s, r), o = (h - f) / (h - f + (m - g)), t.copy(r).addScaledVector(ua, o);
    const d = 1 / (p + v + u);
    return a = v * d, o = u * d, t.copy(n).addScaledVector(ci, a).addScaledVector(ui, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class Gn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(nn.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(nn.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = nn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, nn) : nn.fromBufferAttribute(s, a), nn.applyMatrix4(e.matrixWorld), this.expandByPoint(nn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), er.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), er.copy(n.boundingBox)), er.applyMatrix4(e.matrixWorld), this.union(er);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, nn), nn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ii), tr.subVectors(this.max, Ii), fi.subVectors(e.a, Ii), hi.subVectors(e.b, Ii), di.subVectors(e.c, Ii), Ln.subVectors(hi, fi), Dn.subVectors(di, hi), zn.subVectors(fi, di);
    let t = [
      0,
      -Ln.z,
      Ln.y,
      0,
      -Dn.z,
      Dn.y,
      0,
      -zn.z,
      zn.y,
      Ln.z,
      0,
      -Ln.x,
      Dn.z,
      0,
      -Dn.x,
      zn.z,
      0,
      -zn.x,
      -Ln.y,
      Ln.x,
      0,
      -Dn.y,
      Dn.x,
      0,
      -zn.y,
      zn.x,
      0
    ];
    return !os(t, fi, hi, di, tr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !os(t, fi, hi, di, tr)) ? !1 : (nr.crossVectors(Ln, Dn), t = [nr.x, nr.y, nr.z], os(t, fi, hi, di, tr));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, nn).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(nn).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(xn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const xn = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], nn = /* @__PURE__ */ new P(), er = /* @__PURE__ */ new Gn(), fi = /* @__PURE__ */ new P(), hi = /* @__PURE__ */ new P(), di = /* @__PURE__ */ new P(), Ln = /* @__PURE__ */ new P(), Dn = /* @__PURE__ */ new P(), zn = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new P(), tr = /* @__PURE__ */ new P(), nr = /* @__PURE__ */ new P(), Vn = /* @__PURE__ */ new P();
function os(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Vn.fromArray(i, s);
    const o = r.x * Math.abs(Vn.x) + r.y * Math.abs(Vn.y) + r.z * Math.abs(Vn.z), c = e.dot(Vn), l = t.dot(Vn), f = n.dot(Vn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o)
      return !1;
  }
  return !0;
}
const bt = /* @__PURE__ */ new P(), ir = /* @__PURE__ */ new Je();
let yl = 0;
class Pt extends jn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: yl++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ir.fromBufferAttribute(this, t), ir.applyMatrix3(e), this.setXY(t, ir.x, ir.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        bt.fromBufferAttribute(this, t), bt.applyMatrix3(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bt.fromBufferAttribute(this, t), bt.applyMatrix4(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bt.fromBufferAttribute(this, t), bt.applyNormalMatrix(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      bt.fromBufferAttribute(this, t), bt.transformDirection(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = fn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = ct(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), r = ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), r = ct(r, this.array), s = ct(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ao extends Pt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class wo extends Pt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ne extends Pt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const bl = /* @__PURE__ */ new Gn(), Ui = /* @__PURE__ */ new P(), ls = /* @__PURE__ */ new P();
class Jn {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : bl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ui.subVectors(e, this.center);
    const t = Ui.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ui, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ls.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ui.copy(e.center).add(ls)), this.expandByPoint(Ui.copy(e.center).sub(ls))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Tl = 0;
const Jt = /* @__PURE__ */ new ut(), cs = /* @__PURE__ */ new At(), pi = /* @__PURE__ */ new P(), Yt = /* @__PURE__ */ new Gn(), Ni = /* @__PURE__ */ new Gn(), Ct = /* @__PURE__ */ new P();
class Oe extends jn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Tl++ }), this.uuid = On(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (rl(e) ? wo : Ao)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new qe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Jt.makeRotationFromQuaternion(e), this.applyMatrix4(Jt), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Jt.makeRotationX(e), this.applyMatrix4(Jt), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Jt.makeRotationY(e), this.applyMatrix4(Jt), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Jt.makeRotationZ(e), this.applyMatrix4(Jt), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return Jt.makeTranslation(e, t, n), this.applyMatrix4(Jt), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return Jt.makeScale(e, t, n), this.applyMatrix4(Jt), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return cs.lookAt(e), cs.updateMatrix(), this.applyMatrix4(cs.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(pi).negate(), this.translate(pi.x, pi.y, pi.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Ne(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Gn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, Yt.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, Yt.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint(Yt.min), this.boundingBox.expandByPoint(Yt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Jn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Yt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ni.setFromBufferAttribute(o), this.morphTargetsRelative ? (Ct.addVectors(Yt.min, Ni.min), Yt.expandByPoint(Ct), Ct.addVectors(Yt.max, Ni.max), Yt.expandByPoint(Ct)) : (Yt.expandByPoint(Ni.min), Yt.expandByPoint(Ni.max));
        }
      Yt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Ct.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Ct));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            Ct.fromBufferAttribute(o, l), c && (pi.fromBufferAttribute(e, l), Ct.add(pi)), r = Math.max(r, n.distanceToSquared(Ct));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Pt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let _ = 0; _ < n.count; _++)
      o[_] = new P(), c[_] = new P();
    const l = new P(), f = new P(), h = new P(), u = new Je(), m = new Je(), g = new Je(), v = new P(), p = new P();
    function d(_, T, F) {
      l.fromBufferAttribute(n, _), f.fromBufferAttribute(n, T), h.fromBufferAttribute(n, F), u.fromBufferAttribute(s, _), m.fromBufferAttribute(s, T), g.fromBufferAttribute(s, F), f.sub(l), h.sub(l), m.sub(u), g.sub(u);
      const C = 1 / (m.x * g.y - g.x * m.y);
      isFinite(C) && (v.copy(f).multiplyScalar(g.y).addScaledVector(h, -m.y).multiplyScalar(C), p.copy(h).multiplyScalar(m.x).addScaledVector(f, -g.x).multiplyScalar(C), o[_].add(v), o[T].add(v), o[F].add(v), c[_].add(p), c[T].add(p), c[F].add(p));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: e.count
    }]);
    for (let _ = 0, T = S.length; _ < T; ++_) {
      const F = S[_], C = F.start, L = F.count;
      for (let H = C, N = C + L; H < N; H += 3)
        d(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const y = new P(), b = new P(), w = new P(), E = new P();
    function R(_) {
      w.fromBufferAttribute(r, _), E.copy(w);
      const T = o[_];
      y.copy(T), y.sub(w.multiplyScalar(w.dot(T))).normalize(), b.crossVectors(E, T);
      const C = b.dot(c[_]) < 0 ? -1 : 1;
      a.setXYZW(_, y.x, y.y, y.z, C);
    }
    for (let _ = 0, T = S.length; _ < T; ++_) {
      const F = S[_], C = F.start, L = F.count;
      for (let H = C, N = C + L; H < N; H += 3)
        R(e.getX(H + 0)), R(e.getX(H + 1)), R(e.getX(H + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Pt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, m = n.count; u < m; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new P(), s = new P(), a = new P(), o = new P(), c = new P(), l = new P(), f = new P(), h = new P();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const g = e.getX(u + 0), v = e.getX(u + 1), p = e.getX(u + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), a.fromBufferAttribute(t, p), f.subVectors(a, s), h.subVectors(r, s), f.cross(h), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, v), l.fromBufferAttribute(n, p), o.add(f), c.add(f), l.add(f), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), f.subVectors(a, s), h.subVectors(r, s), f.cross(h), n.setXYZ(u + 0, f.x, f.y, f.z), n.setXYZ(u + 1, f.x, f.y, f.z), n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Ct.fromBufferAttribute(e, t), Ct.normalize(), e.setXYZ(t, Ct.x, Ct.y, Ct.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, h = o.normalized, u = new l.constructor(c.length * f);
      let m = 0, g = 0;
      for (let v = 0, p = c.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = c[v] * o.data.stride + o.offset : m = c[v] * f;
        for (let d = 0; d < f; d++)
          u[g++] = l[m++];
      }
      return new Pt(u, f, h);
    }
    if (this.index === null)
      return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Oe(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let f = 0, h = l.length; f < h; f++) {
        const u = l[f], m = e(u, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], f = [];
      for (let h = 0, u = l.length; h < u; h++) {
        const m = l[h];
        f.push(m.toJSON(e.data));
      }
      f.length > 0 && (r[c] = f, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const f = [], h = s[l];
      for (let u = 0, m = h.length; u < m; u++)
        f.push(h[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Al {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = On();
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute array
   * data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this interleaved buffer.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {InterleavedBuffer} A reference to this interleaved buffer.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given interleaved buffer to this instance.
   *
   * @param {InterleavedBuffer} source - The interleaved buffer to copy.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  /**
   * Copies a vector from the given interleaved buffer to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this interleaved buffer.
   * @param {InterleavedBuffer} interleavedBuffer - The interleaved buffer to copy from.
   * @param {number} index2 - The source index into the given interleaved buffer.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Sets the given array data in the interleaved buffer.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this interleaved buffer's array.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns a new interleaved buffer with copied values from this instance.
   *
   * @param {Object} [data] - An object with shared array buffers that allows to retain shared structures.
   * @return {InterleavedBuffer} A clone of this instance.
   */
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = On()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the array data to the GPU. Can be used to perform clean-up operations after
   * the upload when data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Serializes the interleaved buffer into JSON.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized interleaved buffer.
   */
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = On()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const zt = /* @__PURE__ */ new P();
class Or {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
  }
  /**
   * The item count of this buffer attribute.
   *
   * @type {number}
   * @readonly
   */
  get count() {
    return this.data.count;
  }
  /**
   * The array holding the interleaved buffer attribute data.
   *
   * @type {TypedArray}
   */
  get array() {
    return this.data.array;
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = fn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = ct(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = fn(t, this.array)), t;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), r = ct(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), r = ct(r, this.array), s = ct(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An object with interleaved buffers that allows to retain the interleaved property.
   * @return {BufferAttribute|InterleavedBufferAttribute} A clone of this instance.
   */
  clone(e) {
    if (e === void 0) {
      Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Pt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Or(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON(e) {
    if (e === void 0) {
      Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
let wl = 0;
class Qn extends jn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wl++ }), this.uuid = On(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new De(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          He(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          He(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Ro extends Qn {
  /**
   * Constructs a new sprite material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let mi;
const Oi = /* @__PURE__ */ new P(), gi = /* @__PURE__ */ new P(), _i = /* @__PURE__ */ new P(), xi = /* @__PURE__ */ new Je(), Bi = /* @__PURE__ */ new Je(), Co = /* @__PURE__ */ new ut(), rr = /* @__PURE__ */ new P(), Gi = /* @__PURE__ */ new P(), sr = /* @__PURE__ */ new P(), fa = /* @__PURE__ */ new Je(), us = /* @__PURE__ */ new Je(), ha = /* @__PURE__ */ new Je();
class Rl extends At {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(e = new Ro()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", mi === void 0) {
      mi = new Oe();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new Al(t, 5);
      mi.setIndex([0, 1, 2, 0, 2, 3]), mi.setAttribute("position", new Or(n, 3, 0, !1)), mi.setAttribute("uv", new Or(n, 2, 3, !1));
    }
    this.geometry = mi, this.material = e, this.center = new Je(0.5, 0.5), this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    e.camera === null && nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), gi.setFromMatrixScale(this.matrixWorld), Co.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), _i.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && gi.multiplyScalar(-_i.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const a = this.center;
    ar(rr.set(-0.5, -0.5, 0), _i, a, gi, r, s), ar(Gi.set(0.5, -0.5, 0), _i, a, gi, r, s), ar(sr.set(0.5, 0.5, 0), _i, a, gi, r, s), fa.set(0, 0), us.set(1, 0), ha.set(1, 1);
    let o = e.ray.intersectTriangle(rr, Gi, sr, !1, Oi);
    if (o === null && (ar(Gi.set(-0.5, 0.5, 0), _i, a, gi, r, s), us.set(0, 1), o = e.ray.intersectTriangle(rr, sr, Gi, !1, Oi), o === null))
      return;
    const c = e.ray.origin.distanceTo(Oi);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: Oi.clone(),
      uv: Kt.getInterpolation(Oi, rr, Gi, sr, fa, us, ha, new Je()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function ar(i, e, t, n, r, s) {
  xi.subVectors(i, t).addScalar(0.5).multiply(n), r !== void 0 ? (Bi.x = s * xi.x - r * xi.y, Bi.y = r * xi.x + s * xi.y) : Bi.copy(xi), i.copy(e), i.x += Bi.x, i.y += Bi.y, i.applyMatrix4(Co);
}
const vn = /* @__PURE__ */ new P(), fs = /* @__PURE__ */ new P(), or = /* @__PURE__ */ new P(), Fn = /* @__PURE__ */ new P(), hs = /* @__PURE__ */ new P(), lr = /* @__PURE__ */ new P(), ds = /* @__PURE__ */ new P();
class Vs {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, vn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (vn.copy(this.origin).addScaledVector(this.direction, t), vn.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    fs.copy(e).add(t).multiplyScalar(0.5), or.copy(t).sub(e).normalize(), Fn.copy(this.origin).sub(fs);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(or), o = Fn.dot(this.direction), c = -Fn.dot(or), l = Fn.lengthSq(), f = Math.abs(1 - a * a);
    let h, u, m, g;
    if (f > 0)
      if (h = a * c - o, u = a * o - c, g = s * f, h >= 0)
        if (u >= -g)
          if (u <= g) {
            const v = 1 / f;
            h *= v, u *= v, m = h * (h + a * u + 2 * o) + u * (a * h + u + 2 * c) + l;
          } else
            u = s, h = Math.max(0, -(a * u + o)), m = -h * h + u * (u + 2 * c) + l;
        else
          u = -s, h = Math.max(0, -(a * u + o)), m = -h * h + u * (u + 2 * c) + l;
      else
        u <= -g ? (h = Math.max(0, -(-a * s + o)), u = h > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -h * h + u * (u + 2 * c) + l) : u <= g ? (h = 0, u = Math.min(Math.max(-s, -c), s), m = u * (u + 2 * c) + l) : (h = Math.max(0, -(a * s + o)), u = h > 0 ? s : Math.min(Math.max(-s, -c), s), m = -h * h + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, h = Math.max(0, -(a * u + o)), m = -h * h + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(fs).addScaledVector(or, u), m;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    vn.subVectors(e.center, this.origin);
    const n = vn.dot(this.direction), r = vn.dot(vn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, f = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), f >= 0 ? (s = (e.min.y - u.y) * f, a = (e.max.y - u.y) * f) : (s = (e.max.y - u.y) * f, a = (e.min.y - u.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), h >= 0 ? (o = (e.min.z - u.z) * h, c = (e.max.z - u.z) * h) : (o = (e.max.z - u.z) * h, c = (e.min.z - u.z) * h), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, vn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, s) {
    hs.subVectors(t, e), lr.subVectors(n, e), ds.crossVectors(hs, lr);
    let a = this.direction.dot(ds), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Fn.subVectors(this.origin, e);
    const c = o * this.direction.dot(lr.crossVectors(Fn, lr));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(hs.cross(Fn));
    if (l < 0 || c + l > a)
      return null;
    const f = -o * Fn.dot(ds);
    return f < 0 ? null : this.at(f / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class yn extends Qn {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new $n(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const da = /* @__PURE__ */ new ut(), Hn = /* @__PURE__ */ new Vs(), cr = /* @__PURE__ */ new Jn(), pa = /* @__PURE__ */ new P(), ur = /* @__PURE__ */ new P(), fr = /* @__PURE__ */ new P(), hr = /* @__PURE__ */ new P(), ps = /* @__PURE__ */ new P(), dr = /* @__PURE__ */ new P(), ma = /* @__PURE__ */ new P(), pr = /* @__PURE__ */ new P();
class Dt extends At {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Oe(), t = new yn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      dr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c], h = s[c];
        f !== 0 && (ps.fromBufferAttribute(h, e), a ? dr.addScaledVector(ps, f) : dr.addScaledVector(ps.sub(t), f));
      }
      t.add(dr);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), cr.copy(n.boundingSphere), cr.applyMatrix4(s), Hn.copy(e.ray).recast(e.near), !(cr.containsPoint(Hn.origin) === !1 && (Hn.intersectSphere(cr, pa) === null || Hn.origin.distanceToSquared(pa) > (e.far - e.near) ** 2)) && (da.copy(s).invert(), Hn.copy(e.ray).applyMatrix4(da), !(n.boundingBox !== null && Hn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Hn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, f = s.attributes.uv1, h = s.attributes.normal, u = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g], d = a[p.materialIndex], S = Math.max(p.start, m.start), y = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let b = S, w = y; b < w; b += 3) {
            const E = o.getX(b), R = o.getX(b + 1), _ = o.getX(b + 2);
            r = mr(this, d, e, n, l, f, h, E, R, _), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
        for (let p = g, d = v; p < d; p += 3) {
          const S = o.getX(p), y = o.getX(p + 1), b = o.getX(p + 2);
          r = mr(this, a, e, n, l, f, h, S, y, b), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g], d = a[p.materialIndex], S = Math.max(p.start, m.start), y = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let b = S, w = y; b < w; b += 3) {
            const E = b, R = b + 1, _ = b + 2;
            r = mr(this, d, e, n, l, f, h, E, R, _), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(c.count, m.start + m.count);
        for (let p = g, d = v; p < d; p += 3) {
          const S = p, y = p + 1, b = p + 2;
          r = mr(this, a, e, n, l, f, h, S, y, b), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Cl(i, e, t, n, r, s, a, o) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === 0, o), c === null) return null;
  pr.copy(o), pr.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(pr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: pr.clone(),
    object: i
  };
}
function mr(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, ur), i.getVertexPosition(c, fr), i.getVertexPosition(l, hr);
  const f = Cl(i, e, t, n, ur, fr, hr, ma);
  if (f) {
    const h = new P();
    Kt.getBarycoord(ma, ur, fr, hr, h), r && (f.uv = Kt.getInterpolatedAttribute(r, o, c, l, h, new Je())), s && (f.uv1 = Kt.getInterpolatedAttribute(s, o, c, l, h, new Je())), a && (f.normal = Kt.getInterpolatedAttribute(a, o, c, l, h, new P()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new P(),
      materialIndex: 0
    };
    Kt.getNormal(ur, fr, hr, u.normal), f.face = u, f.barycoord = h;
  }
  return f;
}
class Po extends Lt {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, f = 1003, h, u) {
    super(null, a, o, c, l, f, r, s, h, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ga extends Pt {
  /**
   * Constructs a new instanced buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   * @param {number} [meshPerAttribute=1] - How often a value of this buffer attribute should be repeated.
   */
  constructor(e, t, n, r = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const vi = /* @__PURE__ */ new ut(), _a = /* @__PURE__ */ new ut(), gr = [], xa = /* @__PURE__ */ new Gn(), Pl = /* @__PURE__ */ new ut(), zi = /* @__PURE__ */ new Dt(), Vi = /* @__PURE__ */ new Jn();
class Ll extends Dt {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ga(new Float32Array(n * 16), 16), this.previousInstanceMatrix = null, this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let r = 0; r < n; r++)
      this.setMatrixAt(r, Pl);
  }
  /**
   * Computes the bounding box of the instanced mesh, and updates {@link InstancedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * You may need to recompute the bounding box if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Gn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, vi), xa.copy(e.boundingBox).applyMatrix4(vi), this.boundingBox.union(xa);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Jn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, vi), Vi.copy(e.boundingSphere).applyMatrix4(vi), this.boundingSphere.union(Vi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.previousInstanceMatrix !== null && (this.previousInstanceMatrix = e.previousInstanceMatrix.clone()), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  /**
   * Gets the color of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The target object that is used to store the method's result.
   * @return {Color} A reference to the target color.
   */
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  /**
   * Gets the local transformation matrix of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The target object that is used to store the method's result.
   * @return {Matrix4} A reference to the target matrix.
   */
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  /**
   * Gets the morph target weights of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object - The target object that is used to store the method's result.
   */
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = r[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, r = this.count;
    if (zi.geometry = this.geometry, zi.material = this.material, zi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Vi.copy(this.boundingSphere), Vi.applyMatrix4(n), e.ray.intersectsSphere(Vi) !== !1))
      for (let s = 0; s < r; s++) {
        this.getMatrixAt(s, vi), _a.multiplyMatrices(n, vi), zi.matrixWorld = _a, zi.raycast(e, gr);
        for (let a = 0, o = gr.length; a < o; a++) {
          const c = gr[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        gr.length = 0;
      }
  }
  /**
   * Sets the given color to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceColor} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The instance color.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new ga(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  /**
   * Sets the given local transformation matrix to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceMatrix} to `true` after updating all the matrices.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The local transformation.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  /**
   * Sets the morph target weights to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#morphTexture} to `true` after updating all the influences.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object -  A mesh which `morphTargetInfluences` property containing the morph target weights
   * of a single instance.
   * @return {InstancedMesh} A reference to this instanced mesh.
   */
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Po(new Float32Array(r * this.count), r, this.count, 1028, 1015));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++)
      a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = r * e;
    return s[c] = o, s.set(n, c + 1), this;
  }
  updateMorphTargets() {
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const ms = /* @__PURE__ */ new P(), Dl = /* @__PURE__ */ new P(), Fl = /* @__PURE__ */ new qe();
class Wn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = ms.subVectors(n, t).cross(Dl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @param {boolean} [clampToLine=true] - Whether to clamp the intersection to the line segment.
   * @return {?Vector3} The intersection point. Returns `null` if no intersection is detected.
   */
  intersectLine(e, t, n = !0) {
    const r = e.delta(ms), s = this.normal.dot(r);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || Fl.getNormalMatrix(e), r = this.coplanarPoint(ms).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const kn = /* @__PURE__ */ new Jn(), Il = /* @__PURE__ */ new Je(0.5, 0.5), _r = /* @__PURE__ */ new P();
class Hs {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new Wn(), t = new Wn(), n = new Wn(), r = new Wn(), s = new Wn(), a = new Wn()) {
    this.planes = [e, t, n, r, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], f = s[4], h = s[5], u = s[6], m = s[7], g = s[8], v = s[9], p = s[10], d = s[11], S = s[12], y = s[13], b = s[14], w = s[15];
    if (r[0].setComponents(l - a, m - f, d - g, w - S).normalize(), r[1].setComponents(l + a, m + f, d + g, w + S).normalize(), r[2].setComponents(l + o, m + h, d + v, w + y).normalize(), r[3].setComponents(l - o, m - h, d - v, w - y).normalize(), n)
      r[4].setComponents(c, u, p, b).normalize(), r[5].setComponents(l - c, m - u, d - p, w - b).normalize();
    else if (r[4].setComponents(l - c, m - u, d - p, w - b).normalize(), t === 2e3)
      r[5].setComponents(l + c, m + u, d + p, w + b).normalize();
    else if (t === 2001)
      r[5].setComponents(c, u, p, b).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(kn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    kn.center.set(0, 0, 0);
    const t = Il.distanceTo(e.center);
    return kn.radius = 0.7071067811865476 + t, kn.applyMatrix4(e.matrixWorld), this.intersectsSphere(kn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (_r.x = r.normal.x > 0 ? e.max.x : e.min.x, _r.y = r.normal.y > 0 ? e.max.y : e.min.y, _r.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(_r) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class rt extends Qn {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new De(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Br = /* @__PURE__ */ new P(), Gr = /* @__PURE__ */ new P(), va = /* @__PURE__ */ new ut(), Hi = /* @__PURE__ */ new Vs(), xr = /* @__PURE__ */ new Jn(), gs = /* @__PURE__ */ new P(), Sa = /* @__PURE__ */ new P();
class Yn extends At {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new Oe(), t = new rt()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Br.fromBufferAttribute(t, r - 1), Gr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Br.distanceTo(Gr);
      e.setAttribute("lineDistance", new Ne(n, 1));
    } else
      He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), xr.copy(n.boundingSphere), xr.applyMatrix4(r), xr.radius += s, e.ray.intersectsSphere(xr) === !1) return;
    va.copy(r).invert(), Hi.copy(e.ray).applyMatrix4(va);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, f = n.index, u = n.attributes.position;
    if (f !== null) {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += l) {
        const d = f.getX(v), S = f.getX(v + 1), y = vr(this, e, Hi, c, d, S, v);
        y && t.push(y);
      }
      if (this.isLineLoop) {
        const v = f.getX(g - 1), p = f.getX(m), d = vr(this, e, Hi, c, v, p, g - 1);
        d && t.push(d);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += l) {
        const d = vr(this, e, Hi, c, v, v + 1, v);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const v = vr(this, e, Hi, c, g - 1, m, g - 1);
        v && t.push(v);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function vr(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (Br.fromBufferAttribute(o, r), Gr.fromBufferAttribute(o, s), t.distanceSqToSegment(Br, Gr, gs, Sa) > n) return;
  gs.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(gs);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Sa.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Ma = /* @__PURE__ */ new P(), Ea = /* @__PURE__ */ new P();
class Tt extends Yn {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Ma.fromBufferAttribute(t, r), Ea.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Ma.distanceTo(Ea);
      e.setAttribute("lineDistance", new Ne(n, 1));
    } else
      He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Kn extends Yn {
  /**
   * Constructs a new line loop.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class sn extends Qn {
  /**
   * Constructs a new points material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const ya = /* @__PURE__ */ new ut(), Ds = /* @__PURE__ */ new Vs(), Sr = /* @__PURE__ */ new Jn(), Mr = /* @__PURE__ */ new P();
class dn extends At {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(e = new Oe(), t = new sn()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes intersection points between a casted ray and this point cloud.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Sr.copy(n.boundingSphere), Sr.applyMatrix4(r), Sr.radius += s, e.ray.intersectsSphere(Sr) === !1) return;
    ya.copy(r).invert(), Ds.copy(e.ray).applyMatrix4(ya);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, h = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let g = u, v = m; g < v; g++) {
        const p = l.getX(g);
        Mr.fromBufferAttribute(h, p), ba(Mr, p, c, r, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), m = Math.min(h.count, a.start + a.count);
      for (let g = u, v = m; g < v; g++)
        Mr.fromBufferAttribute(h, g), ba(Mr, g, c, r, e, t, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ba(i, e, t, n, r, s, a) {
  const o = Ds.distanceSqToPoint(i);
  if (o < t) {
    const c = new P();
    Ds.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Lo extends Lt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = 301, n, r, s, a, o, c, l, f) {
    super(e, t, n, r, s, a, o, c, l, f), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Do extends Lt {
  /**
   * Constructs a new texture.
   *
   * @param {HTMLCanvasElement} [canvas] - The HTML canvas element.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   */
  constructor(e, t, n, r, s, a, o, c, l) {
    super(e, t, n, r, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class wi extends Lt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = 1014, r, s, a, o = 1003, c = 1003, l, f = 1026, h = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: h };
    super(u, r, s, a, o, c, f, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new zs(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Ul extends wi {
  /**
   * Constructs a new cube depth texture.
   *
   * @param {number} size - The size (width and height) of each cube face.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t = 1014, n = 301, r, s, a = 1003, o = 1003, c, l = 1026) {
    const f = { width: e, height: e, depth: 1 }, h = [f, f, f, f, f, f];
    super(e, e, t, n, r, s, a, o, c, l), this.image = h, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  /**
   * Alias for {@link CubeDepthTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Fo extends Lt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class ei extends Oe {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], f = [], h = [];
    let u = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Ne(l, 3)), this.setAttribute("normal", new Ne(f, 3)), this.setAttribute("uv", new Ne(h, 2));
    function g(v, p, d, S, y, b, w, E, R, _, T) {
      const F = b / R, C = w / _, L = b / 2, H = w / 2, N = E / 2, D = R + 1, U = _ + 1;
      let B = 0, Y = 0;
      const Z = new P();
      for (let te = 0; te < U; te++) {
        const pe = te * C - H;
        for (let xe = 0; xe < D; xe++) {
          const Ce = xe * F - L;
          Z[v] = Ce * S, Z[p] = pe * y, Z[d] = N, l.push(Z.x, Z.y, Z.z), Z[v] = 0, Z[p] = 0, Z[d] = E > 0 ? 1 : -1, f.push(Z.x, Z.y, Z.z), h.push(xe / R), h.push(1 - te / _), B += 1;
        }
      }
      for (let te = 0; te < _; te++)
        for (let pe = 0; pe < R; pe++) {
          const xe = u + pe + D * te, Ce = u + pe + D * (te + 1), ke = u + (pe + 1) + D * (te + 1), he = u + (pe + 1) + D * te;
          c.push(xe, Ce, he), c.push(Ce, ke, he), Y += 6;
        }
      o.addGroup(m, Y, T), m += Y, u += B;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new ei(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
const Er = /* @__PURE__ */ new P(), yr = /* @__PURE__ */ new P(), _s = /* @__PURE__ */ new P(), br = /* @__PURE__ */ new Kt();
class Nl extends Oe {
  /**
   * Constructs a new edges geometry.
   *
   * @param {?BufferGeometry} [geometry=null] - The geometry.
   * @param {number} [thresholdAngle=1] - An edge is only rendered if the angle (in degrees)
   * between the face normals of the adjoining faces exceeds this value.
   */
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const r = Math.pow(10, 4), s = Math.cos(Lr * t), a = e.getIndex(), o = e.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], f = ["a", "b", "c"], h = new Array(3), u = {}, m = [];
      for (let g = 0; g < c; g += 3) {
        a ? (l[0] = a.getX(g), l[1] = a.getX(g + 1), l[2] = a.getX(g + 2)) : (l[0] = g, l[1] = g + 1, l[2] = g + 2);
        const { a: v, b: p, c: d } = br;
        if (v.fromBufferAttribute(o, l[0]), p.fromBufferAttribute(o, l[1]), d.fromBufferAttribute(o, l[2]), br.getNormal(_s), h[0] = `${Math.round(v.x * r)},${Math.round(v.y * r)},${Math.round(v.z * r)}`, h[1] = `${Math.round(p.x * r)},${Math.round(p.y * r)},${Math.round(p.z * r)}`, h[2] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, !(h[0] === h[1] || h[1] === h[2] || h[2] === h[0]))
          for (let S = 0; S < 3; S++) {
            const y = (S + 1) % 3, b = h[S], w = h[y], E = br[f[S]], R = br[f[y]], _ = `${b}_${w}`, T = `${w}_${b}`;
            T in u && u[T] ? (_s.dot(u[T].normal) <= s && (m.push(E.x, E.y, E.z), m.push(R.x, R.y, R.z)), u[T] = null) : _ in u || (u[_] = {
              index0: l[S],
              index1: l[y],
              normal: _s.clone()
            });
          }
      }
      for (const g in u)
        if (u[g]) {
          const { index0: v, index1: p } = u[g];
          Er.fromBufferAttribute(o, v), yr.fromBufferAttribute(o, p), m.push(Er.x, Er.y, Er.z), m.push(yr.x, yr.y, yr.z);
        }
      this.setAttribute("position", new Ne(m, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class bn extends Oe {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, f = c + 1, h = e / o, u = t / c, m = [], g = [], v = [], p = [];
    for (let d = 0; d < f; d++) {
      const S = d * u - a;
      for (let y = 0; y < l; y++) {
        const b = y * h - s;
        g.push(b, -S, 0), v.push(0, 0, 1), p.push(y / o), p.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++)
      for (let S = 0; S < o; S++) {
        const y = S + l * d, b = S + l * (d + 1), w = S + 1 + l * (d + 1), E = S + 1 + l * d;
        m.push(y, b, E), m.push(b, w, E);
      }
    this.setIndex(m), this.setAttribute("position", new Ne(g, 3)), this.setAttribute("normal", new Ne(v, 3)), this.setAttribute("uv", new Ne(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new bn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
function Ri(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Ta(r))
        r.isRenderTargetTexture ? (He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (Ta(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++)
            s[a] = r[a].clone();
          e[t][n] = s;
        } else
          e[t][n] = r.slice();
      else
        e[t][n] = r;
    }
  }
  return e;
}
function Vt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Ri(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Ta(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function Ol(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Io(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Qe.workingColorSpace;
}
const Bl = { clone: Ri, merge: Vt };
var Gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, zl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class pn extends Qn {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Gl, this.fragmentShader = zl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ri(e.uniforms), this.uniformsGroups = Ol(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Vl extends pn {
  /**
   * Constructs a new raw shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class Hl extends Qn {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class kl extends Qn {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const xs = {
  /**
   * Whether caching is enabled or not.
   *
   * @static
   * @type {boolean}
   * @default false
   */
  enabled: !1,
  /**
   * A dictionary that holds cached files.
   *
   * @static
   * @type {Object<string,Object>}
   */
  files: {},
  /**
   * Adds a cache entry with a key to reference the file. If this key already
   * holds a file, it is overwritten.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @param {Object} file -  The file to be cached.
   */
  add: function(i, e) {
    this.enabled !== !1 && (Aa(i) || (this.files[i] = e));
  },
  /**
   * Gets the cached value for the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @return {Object|undefined} The cached file. If the key does not exist `undefined` is returned.
   */
  get: function(i) {
    if (this.enabled !== !1 && !Aa(i))
      return this.files[i];
  },
  /**
   * Removes the cached file associated with the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   */
  remove: function(i) {
    delete this.files[i];
  },
  /**
   * Remove all values from the cache.
   *
   * @static
   */
  clear: function() {
    this.files = {};
  }
};
function Aa(i) {
  try {
    const e = i.slice(i.indexOf(":") + 1);
    return new URL(e).protocol === "blob:";
  } catch {
    return !1;
  }
}
class Wl {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(e, t, n) {
    const r = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(f) {
      o++, s === !1 && r.onStart !== void 0 && r.onStart(f, a, o), s = !0;
    }, this.itemEnd = function(f) {
      a++, r.onProgress !== void 0 && r.onProgress(f, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(f) {
      r.onError !== void 0 && r.onError(f);
    }, this.resolveURL = function(f) {
      return c ? c(f) : f;
    }, this.setURLModifier = function(f) {
      return c = f, this;
    }, this.addHandler = function(f, h) {
      return l.push(f, h), this;
    }, this.removeHandler = function(f) {
      const h = l.indexOf(f);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(f) {
      for (let h = 0, u = l.length; h < u; h += 2) {
        const m = l[h], g = l[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(f))
          return g;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  // TODO: Revert this back to a single member variable once this issue has been fixed
  // https://github.com/cloudflare/workerd/issues/3657
  /**
   * Used for aborting ongoing requests in loaders using this manager.
   *
   * @type {AbortController}
   */
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}
const Xl = /* @__PURE__ */ new Wl();
class ks {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : Xl, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
}
ks.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Si = /* @__PURE__ */ new WeakMap();
class ql extends ks {
  /**
   * Constructs a new image loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and passes the loaded image
   * to the `onLoad()` callback. The method also returns a new `Image` object which can
   * directly be used for texture creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Image)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Image} The image.
   */
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = xs.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        s.manager.itemStart(e), setTimeout(function() {
          t && t(a), s.manager.itemEnd(e);
        }, 0);
      else {
        let h = Si.get(a);
        h === void 0 && (h = [], Si.set(a, h)), h.push({ onLoad: t, onError: r });
      }
      return a;
    }
    const o = qi("img");
    function c() {
      f(), t && t(this);
      const h = Si.get(this) || [];
      for (let u = 0; u < h.length; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(this);
      }
      Si.delete(this), s.manager.itemEnd(e);
    }
    function l(h) {
      f(), r && r(h), xs.remove(`image:${e}`);
      const u = Si.get(this) || [];
      for (let m = 0; m < u.length; m++) {
        const g = u[m];
        g.onError && g.onError(h);
      }
      Si.delete(this), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function f() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), xs.add(`image:${e}`, o), s.manager.itemStart(e), o.src = e, o;
  }
}
class $l extends ks {
  /**
   * Constructs a new texture loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and pass the fully loaded texture
   * to the `onLoad()` callback. The method also returns a new texture object which can
   * directly be used for material creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Texture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Texture} The texture.
   */
  load(e, t, n, r) {
    const s = new Lt(), a = new ql(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class Uo extends At {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new De(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
const vs = /* @__PURE__ */ new ut(), wa = /* @__PURE__ */ new P(), Ra = /* @__PURE__ */ new P();
class Yl {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Je(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ut(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Hs(), this._frameExtents = new Je(1, 1), this._viewportCount = 1, this._viewports = [
      new vt(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    wa.setFromMatrixPosition(e.matrixWorld), t.position.copy(wa), Ra.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ra), t.updateMatrixWorld(), vs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(vs, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      1,
      0,
      // Identity Z (preserving the correct [0, 1] range from the projection matrix)
      0,
      0,
      0,
      1
    ) : n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(vs);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const Tr = /* @__PURE__ */ new P(), Ar = /* @__PURE__ */ new Pi(), on = /* @__PURE__ */ new P();
class No extends At {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ut(), this.projectionMatrix = new ut(), this.projectionMatrixInverse = new ut(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(Tr, Ar, on), on.x === 1 && on.y === 1 && on.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Tr, Ar, on.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(Tr, Ar, on), on.x === 1 && on.y === 1 && on.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Tr, Ar, on.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = /* @__PURE__ */ new P(), Ca = /* @__PURE__ */ new Je(), Pa = /* @__PURE__ */ new Je();
class Qt extends No {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ls * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Lr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ls * 2 * Math.atan(
      Math.tan(Lr * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    In.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(In.x, In.y).multiplyScalar(-e / In.z), In.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(In.x, In.y).multiplyScalar(-e / In.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Ca, Pa), t.subVectors(Pa, Ca);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Lr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class Ws extends No {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= f * this.view.offsetY, c = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Kl extends Yl {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Ws(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Zl extends Uo {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(At.DEFAULT_UP), this.updateMatrix(), this.target = new At(), this.shadow = new Kl();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
class jl extends Uo {
  /**
   * Constructs a new ambient light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
const Mi = -90, Ei = 1;
class Jl extends At {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Qt(Mi, Ei, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Qt(Mi, Ei, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Qt(Mi, Ei, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Qt(Mi, Ei, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Qt(Mi, Ei, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Qt(Mi, Ei, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, f] = this.children, h = e.getRenderTarget(), u = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let p = !1;
    e.isWebGLRenderer === !0 ? p = e.state.buffers.depth.getReversed() : p = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, f), e.setRenderTarget(h, u, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ql extends Qt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const Ks = class Ks {
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(e, t, n, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r);
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(e, t, n, r) {
    const s = this.elements;
    return s[0] = e, s[2] = t, s[1] = n, s[3] = r, this;
  }
};
Ks.prototype.isMatrix2 = !0;
let La = Ks;
function Da(i, e, t, n) {
  const r = ec(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function ec(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "184"
} }));
typeof window < "u" && (window.__THREE__ ? He("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "184");
function Oo() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && i !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i !== null && i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function tc(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, f = o.usage, h = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array)
      m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      m = i.SHORT;
    else if (l instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      m = i.INT;
    else if (l instanceof Int8Array)
      m = i.BYTE;
    else if (l instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function n(o, c, l) {
    const f = c.array, h = c.updateRanges;
    if (i.bindBuffer(l, o), h.length === 0)
      i.bufferSubData(l, 0, f);
    else {
      h.sort((m, g) => m.start - g.start);
      let u = 0;
      for (let m = 1; m < h.length; m++) {
        const g = h[u], v = h[m];
        v.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          v.start + v.count - g.start
        ) : (++u, h[u] = v);
      }
      h.length = u + 1;
      for (let m = 0, g = h.length; m < g; m++) {
        const v = h[m];
        i.bufferSubData(
          l,
          v.start * f.BYTES_PER_ELEMENT,
          f,
          v.start,
          v.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const f = e.get(o);
      (!f || f.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var nc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ic = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, rc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, sc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ac = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, oc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, lc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, cc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, uc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, fc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, hc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, dc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, pc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, mc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, gc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, _c = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, xc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, vc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Sc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Mc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Ec = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, yc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, bc = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, Tc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Ac = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, wc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Rc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Pc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Lc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Dc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Fc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Ic = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, Uc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Nc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Oc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Bc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Gc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, zc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Vc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Hc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, kc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Wc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Xc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, qc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, $c = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, Yc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Kc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, jc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Jc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Qc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, eu = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, tu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, nu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, iu = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ru = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, su = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, au = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ou = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, lu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, cu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, uu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, fu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, hu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, du = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, pu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, mu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, gu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, _u = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, xu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, vu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Su = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Mu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Eu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, bu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Tu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Au = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, wu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ru = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Cu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Pu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Lu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, Du = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Fu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Iu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Uu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Nu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ou = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Bu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Gu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, zu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Vu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Hu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ku = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Wu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Xu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, qu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, $u = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Yu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Ku = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Zu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, ju = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Ju = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Qu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, tf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const nf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, rf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, af = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, of = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, uf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, ff = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, hf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, df = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, pf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, mf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, gf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, _f = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, xf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ef = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, bf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Tf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Af = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Rf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Df = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ff = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, If = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Uf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Nf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ze = {
  alphahash_fragment: nc,
  alphahash_pars_fragment: ic,
  alphamap_fragment: rc,
  alphamap_pars_fragment: sc,
  alphatest_fragment: ac,
  alphatest_pars_fragment: oc,
  aomap_fragment: lc,
  aomap_pars_fragment: cc,
  batching_pars_vertex: uc,
  batching_vertex: fc,
  begin_vertex: hc,
  beginnormal_vertex: dc,
  bsdfs: pc,
  iridescence_fragment: mc,
  bumpmap_pars_fragment: gc,
  clipping_planes_fragment: _c,
  clipping_planes_pars_fragment: xc,
  clipping_planes_pars_vertex: vc,
  clipping_planes_vertex: Sc,
  color_fragment: Mc,
  color_pars_fragment: Ec,
  color_pars_vertex: yc,
  color_vertex: bc,
  common: Tc,
  cube_uv_reflection_fragment: Ac,
  defaultnormal_vertex: wc,
  displacementmap_pars_vertex: Rc,
  displacementmap_vertex: Cc,
  emissivemap_fragment: Pc,
  emissivemap_pars_fragment: Lc,
  colorspace_fragment: Dc,
  colorspace_pars_fragment: Fc,
  envmap_fragment: Ic,
  envmap_common_pars_fragment: Uc,
  envmap_pars_fragment: Nc,
  envmap_pars_vertex: Oc,
  envmap_physical_pars_fragment: Yc,
  envmap_vertex: Bc,
  fog_vertex: Gc,
  fog_pars_vertex: zc,
  fog_fragment: Vc,
  fog_pars_fragment: Hc,
  gradientmap_pars_fragment: kc,
  lightmap_pars_fragment: Wc,
  lights_lambert_fragment: Xc,
  lights_lambert_pars_fragment: qc,
  lights_pars_begin: $c,
  lights_toon_fragment: Kc,
  lights_toon_pars_fragment: Zc,
  lights_phong_fragment: jc,
  lights_phong_pars_fragment: Jc,
  lights_physical_fragment: Qc,
  lights_physical_pars_fragment: eu,
  lights_fragment_begin: tu,
  lights_fragment_maps: nu,
  lights_fragment_end: iu,
  lightprobes_pars_fragment: ru,
  logdepthbuf_fragment: su,
  logdepthbuf_pars_fragment: au,
  logdepthbuf_pars_vertex: ou,
  logdepthbuf_vertex: lu,
  map_fragment: cu,
  map_pars_fragment: uu,
  map_particle_fragment: fu,
  map_particle_pars_fragment: hu,
  metalnessmap_fragment: du,
  metalnessmap_pars_fragment: pu,
  morphinstance_vertex: mu,
  morphcolor_vertex: gu,
  morphnormal_vertex: _u,
  morphtarget_pars_vertex: xu,
  morphtarget_vertex: vu,
  normal_fragment_begin: Su,
  normal_fragment_maps: Mu,
  normal_pars_fragment: Eu,
  normal_pars_vertex: yu,
  normal_vertex: bu,
  normalmap_pars_fragment: Tu,
  clearcoat_normal_fragment_begin: Au,
  clearcoat_normal_fragment_maps: wu,
  clearcoat_pars_fragment: Ru,
  iridescence_pars_fragment: Cu,
  opaque_fragment: Pu,
  packing: Lu,
  premultiplied_alpha_fragment: Du,
  project_vertex: Fu,
  dithering_fragment: Iu,
  dithering_pars_fragment: Uu,
  roughnessmap_fragment: Nu,
  roughnessmap_pars_fragment: Ou,
  shadowmap_pars_fragment: Bu,
  shadowmap_pars_vertex: Gu,
  shadowmap_vertex: zu,
  shadowmask_pars_fragment: Vu,
  skinbase_vertex: Hu,
  skinning_pars_vertex: ku,
  skinning_vertex: Wu,
  skinnormal_vertex: Xu,
  specularmap_fragment: qu,
  specularmap_pars_fragment: $u,
  tonemapping_fragment: Yu,
  tonemapping_pars_fragment: Ku,
  transmission_fragment: Zu,
  transmission_pars_fragment: ju,
  uv_pars_fragment: Ju,
  uv_pars_vertex: Qu,
  uv_vertex: ef,
  worldpos_vertex: tf,
  background_vert: nf,
  background_frag: rf,
  backgroundCube_vert: sf,
  backgroundCube_frag: af,
  cube_vert: of,
  cube_frag: lf,
  depth_vert: cf,
  depth_frag: uf,
  distance_vert: ff,
  distance_frag: hf,
  equirect_vert: df,
  equirect_frag: pf,
  linedashed_vert: mf,
  linedashed_frag: gf,
  meshbasic_vert: _f,
  meshbasic_frag: xf,
  meshlambert_vert: vf,
  meshlambert_frag: Sf,
  meshmatcap_vert: Mf,
  meshmatcap_frag: Ef,
  meshnormal_vert: yf,
  meshnormal_frag: bf,
  meshphong_vert: Tf,
  meshphong_frag: Af,
  meshphysical_vert: wf,
  meshphysical_frag: Rf,
  meshtoon_vert: Cf,
  meshtoon_frag: Pf,
  points_vert: Lf,
  points_frag: Df,
  shadow_vert: Ff,
  shadow_frag: If,
  sprite_vert: Uf,
  sprite_frag: Nf
}, Ee = {
  common: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new qe() },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new qe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new qe() },
    normalScale: { value: /* @__PURE__ */ new Je(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new qe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new De(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new P() },
    probesMax: { value: /* @__PURE__ */ new P() },
    probesResolution: { value: /* @__PURE__ */ new P() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new qe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Je(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 }
  }
}, cn = {
  basic: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.fog
    ]),
    vertexShader: Ze.meshbasic_vert,
    fragmentShader: Ze.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ze.meshlambert_vert,
    fragmentShader: Ze.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        specular: { value: /* @__PURE__ */ new De(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ze.meshphong_vert,
    fragmentShader: Ze.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.roughnessmap,
      Ee.metalnessmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ze.meshphysical_vert,
    fragmentShader: Ze.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.gradientmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) }
      }
    ]),
    vertexShader: Ze.meshtoon_vert,
    fragmentShader: Ze.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ze.meshmatcap_vert,
    fragmentShader: Ze.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.points,
      Ee.fog
    ]),
    vertexShader: Ze.points_vert,
    fragmentShader: Ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ze.linedashed_vert,
    fragmentShader: Ze.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.displacementmap
    ]),
    vertexShader: Ze.depth_vert,
    fragmentShader: Ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ze.meshnormal_vert,
    fragmentShader: Ze.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.sprite,
      Ee.fog
    ]),
    vertexShader: Ze.sprite_vert,
    fragmentShader: Ze.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new qe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ze.background_vert,
    fragmentShader: Ze.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new qe() }
    },
    vertexShader: Ze.backgroundCube_vert,
    fragmentShader: Ze.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ze.cube_vert,
    fragmentShader: Ze.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ze.equirect_vert,
    fragmentShader: Ze.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.common,
      Ee.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ze.distance_vert,
    fragmentShader: Ze.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Vt([
      Ee.lights,
      Ee.fog,
      {
        color: { value: /* @__PURE__ */ new De(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ze.shadow_vert,
    fragmentShader: Ze.shadow_frag
  }
};
cn.physical = {
  uniforms: /* @__PURE__ */ Vt([
    cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new qe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new qe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Je(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new qe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new qe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new qe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new De(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new qe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new qe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new qe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Je() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new qe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new De(0) },
      specularColor: { value: /* @__PURE__ */ new De(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new qe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new qe() },
      anisotropyVector: { value: /* @__PURE__ */ new Je() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new qe() }
    }
  ]),
  vertexShader: Ze.meshphysical_vert,
  fragmentShader: Ze.meshphysical_frag
};
const wr = { r: 0, b: 0, g: 0 }, Of = /* @__PURE__ */ new ut(), Bo = /* @__PURE__ */ new qe();
Bo.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Bf(i, e, t, n, r, s) {
  const a = new De(0);
  let o = r === !0 ? 0 : 1, c, l, f = null, h = 0, u = null;
  function m(S) {
    let y = S.isScene === !0 ? S.background : null;
    if (y && y.isTexture) {
      const b = S.backgroundBlurriness > 0;
      y = e.get(y, b);
    }
    return y;
  }
  function g(S) {
    let y = !1;
    const b = m(S);
    b === null ? p(a, o) : b && b.isColor && (p(b, 1), y = !0);
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : w === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || y) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function v(S, y) {
    const b = m(y);
    b && (b.isCubeTexture || b.mapping === 306) ? (l === void 0 && (l = new Dt(
      new ei(1, 1, 1),
      new pn({
        name: "BackgroundCubeMaterial",
        uniforms: Ri(cn.backgroundCube.uniforms),
        vertexShader: cn.backgroundCube.vertexShader,
        fragmentShader: cn.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(w, E, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = b, l.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(y.backgroundRotation)).transpose(), b.isCubeTexture && b.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Bo), l.material.toneMapped = Qe.getTransfer(b.colorSpace) !== at, (f !== b || h !== b.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, f = b, h = b.version, u = i.toneMapping), l.layers.enableAll(), S.unshift(l, l.geometry, l.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new Dt(
      new bn(2, 2),
      new pn({
        name: "BackgroundMaterial",
        uniforms: Ri(cn.background.uniforms),
        vertexShader: cn.background.vertexShader,
        fragmentShader: cn.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = b, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Qe.getTransfer(b.colorSpace) !== at, b.matrixAutoUpdate === !0 && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (f !== b || h !== b.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, f = b, h = b.version, u = i.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(S, y) {
    S.getRGB(wr, Io(i)), t.buffers.color.setClear(wr.r, wr.g, wr.b, y, s);
  }
  function d() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(S, y = 1) {
      a.set(S), o = y, p(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(S) {
      o = S, p(a, o);
    },
    render: g,
    addToRenderList: v,
    dispose: d
  };
}
function Gf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(C, L, H, N, D) {
    let U = !1;
    const B = h(C, N, H, L);
    s !== B && (s = B, l(s.object)), U = m(C, N, H, D), U && g(C, N, H, D), D !== null && e.update(D, i.ELEMENT_ARRAY_BUFFER), (U || a) && (a = !1, b(C, L, H, N), D !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(D).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(C) {
    return i.bindVertexArray(C);
  }
  function f(C) {
    return i.deleteVertexArray(C);
  }
  function h(C, L, H, N) {
    const D = N.wireframe === !0;
    let U = n[L.id];
    U === void 0 && (U = {}, n[L.id] = U);
    const B = C.isInstancedMesh === !0 ? C.id : 0;
    let Y = U[B];
    Y === void 0 && (Y = {}, U[B] = Y);
    let Z = Y[H.id];
    Z === void 0 && (Z = {}, Y[H.id] = Z);
    let te = Z[D];
    return te === void 0 && (te = u(c()), Z[D] = te), te;
  }
  function u(C) {
    const L = [], H = [], N = [];
    for (let D = 0; D < t; D++)
      L[D] = 0, H[D] = 0, N[D] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: H,
      attributeDivisors: N,
      object: C,
      attributes: {},
      index: null
    };
  }
  function m(C, L, H, N) {
    const D = s.attributes, U = L.attributes;
    let B = 0;
    const Y = H.getAttributes();
    for (const Z in Y)
      if (Y[Z].location >= 0) {
        const pe = D[Z];
        let xe = U[Z];
        if (xe === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (xe = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (xe = C.instanceColor)), pe === void 0 || pe.attribute !== xe || xe && pe.data !== xe.data) return !0;
        B++;
      }
    return s.attributesNum !== B || s.index !== N;
  }
  function g(C, L, H, N) {
    const D = {}, U = L.attributes;
    let B = 0;
    const Y = H.getAttributes();
    for (const Z in Y)
      if (Y[Z].location >= 0) {
        let pe = U[Z];
        pe === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (pe = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (pe = C.instanceColor));
        const xe = {};
        xe.attribute = pe, pe && pe.data && (xe.data = pe.data), D[Z] = xe, B++;
      }
    s.attributes = D, s.attributesNum = B, s.index = N;
  }
  function v() {
    const C = s.newAttributes;
    for (let L = 0, H = C.length; L < H; L++)
      C[L] = 0;
  }
  function p(C) {
    d(C, 0);
  }
  function d(C, L) {
    const H = s.newAttributes, N = s.enabledAttributes, D = s.attributeDivisors;
    H[C] = 1, N[C] === 0 && (i.enableVertexAttribArray(C), N[C] = 1), D[C] !== L && (i.vertexAttribDivisor(C, L), D[C] = L);
  }
  function S() {
    const C = s.newAttributes, L = s.enabledAttributes;
    for (let H = 0, N = L.length; H < N; H++)
      L[H] !== C[H] && (i.disableVertexAttribArray(H), L[H] = 0);
  }
  function y(C, L, H, N, D, U, B) {
    B === !0 ? i.vertexAttribIPointer(C, L, H, D, U) : i.vertexAttribPointer(C, L, H, N, D, U);
  }
  function b(C, L, H, N) {
    v();
    const D = N.attributes, U = H.getAttributes(), B = L.defaultAttributeValues;
    for (const Y in U) {
      const Z = U[Y];
      if (Z.location >= 0) {
        let te = D[Y];
        if (te === void 0 && (Y === "instanceMatrix" && C.instanceMatrix && (te = C.instanceMatrix), Y === "instanceColor" && C.instanceColor && (te = C.instanceColor)), te !== void 0) {
          const pe = te.normalized, xe = te.itemSize, Ce = e.get(te);
          if (Ce === void 0) continue;
          const ke = Ce.buffer, he = Ce.type, q = Ce.bytesPerElement, ie = he === i.INT || he === i.UNSIGNED_INT || te.gpuType === 1013;
          if (te.isInterleavedBufferAttribute) {
            const $ = te.data, ce = $.stride, ve = te.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let ne = 0; ne < Z.locationSize; ne++)
                d(Z.location + ne, $.meshPerAttribute);
              C.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let ne = 0; ne < Z.locationSize; ne++)
                p(Z.location + ne);
            i.bindBuffer(i.ARRAY_BUFFER, ke);
            for (let ne = 0; ne < Z.locationSize; ne++)
              y(
                Z.location + ne,
                xe / Z.locationSize,
                he,
                pe,
                ce * q,
                (ve + xe / Z.locationSize * ne) * q,
                ie
              );
          } else {
            if (te.isInstancedBufferAttribute) {
              for (let $ = 0; $ < Z.locationSize; $++)
                d(Z.location + $, te.meshPerAttribute);
              C.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = te.meshPerAttribute * te.count);
            } else
              for (let $ = 0; $ < Z.locationSize; $++)
                p(Z.location + $);
            i.bindBuffer(i.ARRAY_BUFFER, ke);
            for (let $ = 0; $ < Z.locationSize; $++)
              y(
                Z.location + $,
                xe / Z.locationSize,
                he,
                pe,
                xe * q,
                xe / Z.locationSize * $ * q,
                ie
              );
          }
        } else if (B !== void 0) {
          const pe = B[Y];
          if (pe !== void 0)
            switch (pe.length) {
              case 2:
                i.vertexAttrib2fv(Z.location, pe);
                break;
              case 3:
                i.vertexAttrib3fv(Z.location, pe);
                break;
              case 4:
                i.vertexAttrib4fv(Z.location, pe);
                break;
              default:
                i.vertexAttrib1fv(Z.location, pe);
            }
        }
      }
    }
    S();
  }
  function w() {
    T();
    for (const C in n) {
      const L = n[C];
      for (const H in L) {
        const N = L[H];
        for (const D in N) {
          const U = N[D];
          for (const B in U)
            f(U[B].object), delete U[B];
          delete N[D];
        }
      }
      delete n[C];
    }
  }
  function E(C) {
    if (n[C.id] === void 0) return;
    const L = n[C.id];
    for (const H in L) {
      const N = L[H];
      for (const D in N) {
        const U = N[D];
        for (const B in U)
          f(U[B].object), delete U[B];
        delete N[D];
      }
    }
    delete n[C.id];
  }
  function R(C) {
    for (const L in n) {
      const H = n[L];
      for (const N in H) {
        const D = H[N];
        if (D[C.id] === void 0) continue;
        const U = D[C.id];
        for (const B in U)
          f(U[B].object), delete U[B];
        delete D[C.id];
      }
    }
  }
  function _(C) {
    for (const L in n) {
      const H = n[L], N = C.isInstancedMesh === !0 ? C.id : 0, D = H[N];
      if (D !== void 0) {
        for (const U in D) {
          const B = D[U];
          for (const Y in B)
            f(B[Y].object), delete B[Y];
          delete D[U];
        }
        delete H[N], Object.keys(H).length === 0 && delete n[L];
      }
    }
  }
  function T() {
    F(), a = !0, s !== r && (s = r, l(s.object));
  }
  function F() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: T,
    resetDefaultState: F,
    dispose: w,
    releaseStatesOfGeometry: E,
    releaseStatesOfObject: _,
    releaseStatesOfProgram: R,
    initAttributes: v,
    enableAttribute: p,
    disableUnusedAttributes: S
  };
}
function zf(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function a(c, l, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, l, f), t.update(l, n, f));
  }
  function o(c, l, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, f);
    let u = 0;
    for (let m = 0; m < f; m++)
      u += l[m];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function Vf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(R) {
    return !(R !== 1023 && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(R) {
    const _ = R === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(R !== 1009 && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    R !== 1015 && !_);
  }
  function c(R) {
    if (R === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      R = "mediump";
    }
    return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l && (He("WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
  const h = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), S = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), b = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), w = i.getParameter(i.MAX_SAMPLES), E = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: h,
    reversedDepthBuffer: u,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: v,
    maxCubemapSize: p,
    maxAttributes: d,
    maxVertexUniforms: S,
    maxVaryings: y,
    maxFragmentUniforms: b,
    maxSamples: w,
    samples: E
  };
}
function Hf(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new Wn(), o = new qe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, u) {
    const m = h.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = h.length, m;
  }, this.beginShadows = function() {
    s = !0, f(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, u) {
    t = f(h, u, 0);
  }, this.setState = function(h, u, m) {
    const g = h.clippingPlanes, v = h.clipIntersection, p = h.clipShadows, d = i.get(h);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? f(null) : l();
    else {
      const S = s ? 0 : n, y = S * 4;
      let b = d.clippingState || null;
      c.value = b, b = f(g, u, y, m);
      for (let w = 0; w !== y; ++w)
        b[w] = t[w];
      d.clippingState = b, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(h, u, m, g) {
    const v = h !== null ? h.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const d = m + v * 4, S = u.matrixWorldInverse;
        o.getNormalMatrix(S), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let y = 0, b = m; y !== v; ++y, b += 4)
          a.copy(h[y]).applyMatrix4(S, o), a.normal.toArray(p, b), p[b + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
const Un = 4, Fa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Xn = 20, kf = 256, ki = /* @__PURE__ */ new Ws(), Ia = /* @__PURE__ */ new De();
let Ss = null, Ms = 0, Es = 0, ys = !1;
const Wf = /* @__PURE__ */ new P();
class Ua {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.position=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = Wf
    } = s;
    Ss = this._renderer.getRenderTarget(), Ms = this._renderer.getActiveCubeFace(), Es = this._renderer.getActiveMipmapLevel(), ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ba(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Oa(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ss, Ms, Es), this._renderer.xr.enabled = ys, e.scissorTest = !1, yi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ss = this._renderer.getRenderTarget(), Ms = this._renderer.getActiveCubeFace(), Es = this._renderer.getActiveMipmapLevel(), ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: Ir,
      depthBuffer: !1
    }, r = Na(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Na(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Xf(s)), this._blurMaterial = $f(s, e, t), this._ggxMaterial = qf(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Dt(new Oe(), e);
    this._renderer.compile(t, ki);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Qt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, m = h.toneMapping;
    h.getClearColor(Ia), h.toneMapping = 0, h.autoClear = !1, h.state.buffers.depth.getReversed() && (h.setRenderTarget(r), h.clearDepth(), h.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Dt(
      new ei(),
      new yn({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const v = this._backgroundBox, p = v.material;
    let d = !1;
    const S = e.background;
    S ? S.isColor && (p.color.copy(S), e.background = null, d = !0) : (p.color.copy(Ia), d = !0);
    for (let y = 0; y < 6; y++) {
      const b = y % 3;
      b === 0 ? (c.up.set(0, l[y], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + f[y], s.y, s.z)) : b === 1 ? (c.up.set(0, 0, l[y]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + f[y], s.z)) : (c.up.set(0, l[y], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + f[y]));
      const w = this._cubeSize;
      yi(r, b * w, y > 2 ? w : 0, w, w), h.setRenderTarget(r), d && h.render(v, c), h.render(e, c);
    }
    h.toneMapping = m, h.autoClear = u, e.background = S;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ba()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oa());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    yi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ki);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++)
      this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  /**
   * Applies GGX VNDF importance sampling filter to generate a prefiltered environment map.
   * Uses Monte Carlo integration with VNDF importance sampling to accurately represent the
   * GGX BRDF for physically-based rendering. Reads from the previous LOD level and
   * applies incremental roughness filtering to avoid over-blurring.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn - Source LOD level to read from
   * @param {number} lodOut - Target LOD level to write to
   */
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), h = Math.sqrt(l * l - f * f), u = 0 + l * 1.25, m = h * u, { _lodMax: g } = this, v = this._sizeLods[n], p = 3 * v * (n > g - Un ? n - g + Un : 0), d = 4 * (this._cubeSize - v);
    c.envMap.value = e.texture, c.roughness.value = m, c.mipInt.value = g - t, yi(s, p, d, 3 * v, 2 * v), r.setRenderTarget(s), r.render(o, ki), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = g - n, yi(e, p, d, 3 * v, 2 * v), r.setRenderTarget(e), r.render(o, ki);
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * Used for initial scene blur in fromScene() method when sigma > 0.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && nt(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const f = 3, h = this._lodMeshes[r];
    h.material = l;
    const u = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Xn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(f * v) : Xn;
    p > Xn && He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);
    const d = [];
    let S = 0;
    for (let R = 0; R < Xn; ++R) {
      const _ = R / v, T = Math.exp(-_ * _ / 2);
      d.push(T), R === 0 ? S += T : R < p && (S += 2 * T);
    }
    for (let R = 0; R < d.length; R++)
      d[R] = d[R] / S;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = d, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: y } = this;
    u.dTheta.value = g, u.mipInt.value = y - n;
    const b = this._sizeLods[r], w = 3 * b * (r > y - Un ? r - y + Un : 0), E = 4 * (this._cubeSize - b);
    yi(t, w, E, 3 * b, 2 * b), c.setRenderTarget(t), c.render(h, ki);
  }
}
function Xf(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Un + 1 + Fa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - Un ? c = Fa[a - i + Un - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), f = -l, h = 1 + l, u = [f, f, h, f, h, h, f, f, h, h, f, h], m = 6, g = 6, v = 3, p = 2, d = 1, S = new Float32Array(v * g * m), y = new Float32Array(p * g * m), b = new Float32Array(d * g * m);
    for (let E = 0; E < m; E++) {
      const R = E % 3 * 2 / 3 - 1, _ = E > 2 ? 0 : -1, T = [
        R,
        _,
        0,
        R + 2 / 3,
        _,
        0,
        R + 2 / 3,
        _ + 1,
        0,
        R,
        _,
        0,
        R + 2 / 3,
        _ + 1,
        0,
        R,
        _ + 1,
        0
      ];
      S.set(T, v * g * E), y.set(u, p * g * E);
      const F = [E, E, E, E, E, E];
      b.set(F, d * g * E);
    }
    const w = new Oe();
    w.setAttribute("position", new Pt(S, v)), w.setAttribute("uv", new Pt(y, p)), w.setAttribute("faceIndex", new Pt(b, d)), n.push(new Dt(w, null)), r > Un && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function Na(i, e, t) {
  const n = new hn(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function yi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function qf(i, e, t) {
  return new pn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: kf,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: kr(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function $f(i, e, t) {
  const n = new Float32Array(Xn), r = new P(0, 1, 0);
  return new pn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Xn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oa() {
  return new pn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ba() {
  return new pn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: kr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function kr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
class Go extends hn {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Lo(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new ei(5, 5, 5), s = new pn({
      name: "CubemapFromEquirect",
      uniforms: Ri(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new Dt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Jl(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function Yf(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, m = !1) {
    return u == null ? null : m ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const m = u.mapping;
      if (m === 303 || m === 304)
        if (e.has(u)) {
          const g = e.get(u).texture;
          return o(g, u.mapping);
        } else {
          const g = u.image;
          if (g && g.height > 0) {
            const v = new Go(g.height);
            return v.fromEquirectangularTexture(i, u), e.set(u, v), u.addEventListener("dispose", l), o(v.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const m = u.mapping, g = m === 303 || m === 304, v = m === 301 || m === 302;
      if (g || v) {
        let p = t.get(u);
        const d = p !== void 0 ? p.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== d)
          return n === null && (n = new Ua(i)), p = g ? n.fromEquirectangular(u, p) : n.fromCubemap(u, p), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), p.texture;
        if (p !== void 0)
          return p.texture;
        {
          const S = u.image;
          return g && S && S.height > 0 || v && S && c(S) ? (n === null && (n = new Ua(i)), p = g ? n.fromEquirectangular(u) : n.fromCubemap(u), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), u.addEventListener("dispose", f), p.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, m) {
    return m === 303 ? u.mapping = 301 : m === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let m = 0;
    const g = 6;
    for (let v = 0; v < g; v++)
      u[v] !== void 0 && m++;
    return m === g;
  }
  function l(u) {
    const m = u.target;
    m.removeEventListener("dispose", l);
    const g = e.get(m);
    g !== void 0 && (e.delete(m), g.dispose());
  }
  function f(u) {
    const m = u.target;
    m.removeEventListener("dispose", f);
    const g = t.get(m);
    g !== void 0 && (t.delete(m), g.dispose());
  }
  function h() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: h
  };
}
function Kf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && Ps("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Zf(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const u = h.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const m = s.get(u);
    m && (e.remove(m), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function c(h) {
    const u = h.attributes;
    for (const m in u)
      e.update(u[m], i.ARRAY_BUFFER);
  }
  function l(h) {
    const u = [], m = h.index, g = h.attributes.position;
    let v = 0;
    if (g === void 0)
      return;
    if (m !== null) {
      const S = m.array;
      v = m.version;
      for (let y = 0, b = S.length; y < b; y += 3) {
        const w = S[y + 0], E = S[y + 1], R = S[y + 2];
        u.push(w, E, E, R, R, w);
      }
    } else {
      const S = g.array;
      v = g.version;
      for (let y = 0, b = S.length / 3 - 1; y < b; y += 3) {
        const w = y + 0, E = y + 1, R = y + 2;
        u.push(w, E, E, R, R, w);
      }
    }
    const p = new (g.count >= 65535 ? wo : Ao)(u, 1);
    p.version = v;
    const d = s.get(h);
    d && e.remove(d), s.set(h, p);
  }
  function f(h) {
    const u = s.get(h);
    if (u) {
      const m = h.index;
      m !== null && u.version < m.version && l(h);
    } else
      l(h);
    return s.get(h);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: f
  };
}
function jf(i, e, t) {
  let n;
  function r(h) {
    n = h;
  }
  let s, a;
  function o(h) {
    s = h.type, a = h.bytesPerElement;
  }
  function c(h, u) {
    i.drawElements(n, u, s, h * a), t.update(u, n, 1);
  }
  function l(h, u, m) {
    m !== 0 && (i.drawElementsInstanced(n, u, s, h * a, m), t.update(u, n, m));
  }
  function f(h, u, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, h, 0, m);
    let v = 0;
    for (let p = 0; p < m; p++)
      v += u[p];
    t.update(v, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = f;
}
function Jf(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        nt("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Qf(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new vt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== h) {
      let T = function() {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", T);
      };
      u !== void 0 && u.texture.dispose();
      const m = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, v = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], d = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
      let y = 0;
      m === !0 && (y = 1), g === !0 && (y = 2), v === !0 && (y = 3);
      let b = o.attributes.position.count * y, w = 1;
      b > e.maxTextureSize && (w = Math.ceil(b / e.maxTextureSize), b = e.maxTextureSize);
      const E = new Float32Array(b * w * 4 * h), R = new yo(E, b, w, h);
      R.type = 1015, R.needsUpdate = !0;
      const _ = y * 4;
      for (let F = 0; F < h; F++) {
        const C = p[F], L = d[F], H = S[F], N = b * w * 4 * F;
        for (let D = 0; D < C.count; D++) {
          const U = D * _;
          m === !0 && (r.fromBufferAttribute(C, D), E[N + U + 0] = r.x, E[N + U + 1] = r.y, E[N + U + 2] = r.z, E[N + U + 3] = 0), g === !0 && (r.fromBufferAttribute(L, D), E[N + U + 4] = r.x, E[N + U + 5] = r.y, E[N + U + 6] = r.z, E[N + U + 7] = 0), v === !0 && (r.fromBufferAttribute(H, D), E[N + U + 8] = r.x, E[N + U + 9] = r.y, E[N + U + 10] = r.z, E[N + U + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: h,
        texture: R,
        size: new Je(b, w)
      }, n.set(o, u), o.addEventListener("dispose", T);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let v = 0; v < l.length; v++)
        m += l[v];
      const g = o.morphTargetsRelative ? 1 : 1 - m;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function eh(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const f = r.render.frame, h = l.geometry, u = e.get(l, h);
    if (s.get(u) !== f && (e.update(u), s.set(u, f)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== f && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, f))), l.isSkinnedMesh) {
      const m = l.skeleton;
      s.get(m) !== f && (m.update(), s.set(m, f));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const f = l.target;
    f.removeEventListener("dispose", c), n.releaseStatesOfObject(f), t.remove(f.instanceMatrix), f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const th = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function nh(i, e, t, n, r) {
  const s = new hn(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new wi(e, t) : void 0
  }), a = new hn(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new Oe();
  o.setAttribute("position", new Ne([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new Ne([0, 2, 0, 0, 2, 0], 2));
  const c = new Vl({
    uniforms: {
      tDiffuse: { value: null }
    },
    vertexShader: (
      /* glsl */
      `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
    ),
    fragmentShader: (
      /* glsl */
      `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`
    ),
    depthTest: !1,
    depthWrite: !1
  }), l = new Dt(o, c), f = new Ws(-1, 1, 1, -1, 0, 1);
  let h = null, u = null, m = !1, g, v = null, p = [], d = !1;
  this.setSize = function(S, y) {
    s.setSize(S, y), a.setSize(S, y);
    for (let b = 0; b < p.length; b++) {
      const w = p[b];
      w.setSize && w.setSize(S, y);
    }
  }, this.setEffects = function(S) {
    p = S, d = p.length > 0 && p[0].isRenderPass === !0;
    const y = s.width, b = s.height;
    for (let w = 0; w < p.length; w++) {
      const E = p[w];
      E.setSize && E.setSize(y, b);
    }
  }, this.begin = function(S, y) {
    if (m || S.toneMapping === 0 && p.length === 0) return !1;
    if (v = y, y !== null) {
      const b = y.width, w = y.height;
      (s.width !== b || s.height !== w) && this.setSize(b, w);
    }
    return d === !1 && S.setRenderTarget(s), g = S.toneMapping, S.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return d;
  }, this.end = function(S, y) {
    S.toneMapping = g, m = !0;
    let b = s, w = a;
    for (let E = 0; E < p.length; E++) {
      const R = p[E];
      if (R.enabled !== !1 && (R.render(S, w, b, y), R.needsSwap !== !1)) {
        const _ = b;
        b = w, w = _;
      }
    }
    if (h !== S.outputColorSpace || u !== S.toneMapping) {
      h = S.outputColorSpace, u = S.toneMapping, c.defines = {}, Qe.getTransfer(h) === at && (c.defines.SRGB_TRANSFER = "");
      const E = th[u];
      E && (c.defines[E] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = b.texture, S.setRenderTarget(v), S.render(l, f), v = null, m = !1;
  }, this.isCompositing = function() {
    return m;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const zo = /* @__PURE__ */ new Lt(), Fs = /* @__PURE__ */ new wi(1, 1), Vo = /* @__PURE__ */ new yo(), Ho = /* @__PURE__ */ new pl(), ko = /* @__PURE__ */ new Lo(), Ga = [], za = [], Va = new Float32Array(16), Ha = new Float32Array(9), ka = new Float32Array(4);
function Li(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Ga[r];
  if (s === void 0 && (s = new Float32Array(r), Ga[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function wt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Rt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Wr(i, e) {
  let t = za[e];
  t === void 0 && (t = new Int32Array(e), za[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function ih(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function rh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    i.uniform2fv(this.addr, e), Rt(t, e);
  }
}
function sh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (wt(t, e)) return;
    i.uniform3fv(this.addr, e), Rt(t, e);
  }
}
function ah(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    i.uniform4fv(this.addr, e), Rt(t, e);
  }
}
function oh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    ka.set(n), i.uniformMatrix2fv(this.addr, !1, ka), Rt(t, n);
  }
}
function lh(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    Ha.set(n), i.uniformMatrix3fv(this.addr, !1, Ha), Rt(t, n);
  }
}
function ch(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    Va.set(n), i.uniformMatrix4fv(this.addr, !1, Va), Rt(t, n);
  }
}
function uh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function fh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    i.uniform2iv(this.addr, e), Rt(t, e);
  }
}
function hh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    i.uniform3iv(this.addr, e), Rt(t, e);
  }
}
function dh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    i.uniform4iv(this.addr, e), Rt(t, e);
  }
}
function ph(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function mh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    i.uniform2uiv(this.addr, e), Rt(t, e);
  }
}
function gh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    i.uniform3uiv(this.addr, e), Rt(t, e);
  }
}
function _h(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    i.uniform4uiv(this.addr, e), Rt(t, e);
  }
}
function xh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Fs.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = Fs) : s = zo, t.setTexture2D(e || s, r);
}
function vh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Ho, r);
}
function Sh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || ko, r);
}
function Mh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Vo, r);
}
function Eh(i) {
  switch (i) {
    case 5126:
      return ih;
    // FLOAT
    case 35664:
      return rh;
    // _VEC2
    case 35665:
      return sh;
    // _VEC3
    case 35666:
      return ah;
    // _VEC4
    case 35674:
      return oh;
    // _MAT2
    case 35675:
      return lh;
    // _MAT3
    case 35676:
      return ch;
    // _MAT4
    case 5124:
    case 35670:
      return uh;
    // INT, BOOL
    case 35667:
    case 35671:
      return fh;
    // _VEC2
    case 35668:
    case 35672:
      return hh;
    // _VEC3
    case 35669:
    case 35673:
      return dh;
    // _VEC4
    case 5125:
      return ph;
    // UINT
    case 36294:
      return mh;
    // _VEC2
    case 36295:
      return gh;
    // _VEC3
    case 36296:
      return _h;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return xh;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return vh;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Sh;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Mh;
  }
}
function yh(i, e) {
  i.uniform1fv(this.addr, e);
}
function bh(i, e) {
  const t = Li(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Th(i, e) {
  const t = Li(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ah(i, e) {
  const t = Li(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function wh(i, e) {
  const t = Li(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Rh(i, e) {
  const t = Li(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Ch(i, e) {
  const t = Li(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Ph(i, e) {
  i.uniform1iv(this.addr, e);
}
function Lh(i, e) {
  i.uniform2iv(this.addr, e);
}
function Dh(i, e) {
  i.uniform3iv(this.addr, e);
}
function Fh(i, e) {
  i.uniform4iv(this.addr, e);
}
function Ih(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Uh(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Nh(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Oh(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Bh(i, e, t) {
  const n = this.cache, r = e.length, s = Wr(t, r);
  wt(n, s) || (i.uniform1iv(this.addr, s), Rt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = Fs : a = zo;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function Gh(i, e, t) {
  const n = this.cache, r = e.length, s = Wr(t, r);
  wt(n, s) || (i.uniform1iv(this.addr, s), Rt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Ho, s[a]);
}
function zh(i, e, t) {
  const n = this.cache, r = e.length, s = Wr(t, r);
  wt(n, s) || (i.uniform1iv(this.addr, s), Rt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || ko, s[a]);
}
function Vh(i, e, t) {
  const n = this.cache, r = e.length, s = Wr(t, r);
  wt(n, s) || (i.uniform1iv(this.addr, s), Rt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Vo, s[a]);
}
function Hh(i) {
  switch (i) {
    case 5126:
      return yh;
    // FLOAT
    case 35664:
      return bh;
    // _VEC2
    case 35665:
      return Th;
    // _VEC3
    case 35666:
      return Ah;
    // _VEC4
    case 35674:
      return wh;
    // _MAT2
    case 35675:
      return Rh;
    // _MAT3
    case 35676:
      return Ch;
    // _MAT4
    case 5124:
    case 35670:
      return Ph;
    // INT, BOOL
    case 35667:
    case 35671:
      return Lh;
    // _VEC2
    case 35668:
    case 35672:
      return Dh;
    // _VEC3
    case 35669:
    case 35673:
      return Fh;
    // _VEC4
    case 5125:
      return Ih;
    // UINT
    case 36294:
      return Uh;
    // _VEC2
    case 36295:
      return Nh;
    // _VEC3
    case 36296:
      return Oh;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Bh;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Gh;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return zh;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Vh;
  }
}
class kh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Eh(t.type);
  }
}
class Wh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Hh(t.type);
  }
}
class Xh {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const bs = /(\w+)(\])?(\[|\.)?/g;
function Wa(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function qh(i, e, t) {
  const n = i.name, r = n.length;
  for (bs.lastIndex = 0; ; ) {
    const s = bs.exec(n), a = bs.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      Wa(t, l === void 0 ? new kh(o, i, e) : new Wh(o, i, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new Xh(o), Wa(t, h)), t = h;
    }
  }
}
class Dr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      qh(o, c, this);
    }
    const r = [], s = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Xa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const $h = 37297;
let Yh = 0;
function Kh(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const qa = /* @__PURE__ */ new qe();
function Zh(i) {
  Qe._getMatrix(qa, Qe.workingColorSpace, i);
  const e = `mat3( ${qa.elements.map((t) => t.toFixed(4))} )`;
  switch (Qe.getTransfer(i)) {
    case Ur:
      return [e, "LinearTransferOETF"];
    case at:
      return [e, "sRGBTransferOETF"];
    default:
      return He("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function $a(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + Kh(i.getShaderSource(e), o);
  } else
    return s;
}
function jh(i, e) {
  const t = Zh(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Jh = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Qh(i, e) {
  const t = Jh[e];
  return t === void 0 ? (He("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Rr = /* @__PURE__ */ new P();
function ed() {
  Qe.getLuminanceCoefficients(Rr);
  const i = Rr.x.toFixed(4), e = Rr.y.toFixed(4), t = Rr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function td(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Xi).join(`
`);
}
function nd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function id(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Xi(i) {
  return i !== "";
}
function Ya(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ka(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const rd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Is(i) {
  return i.replace(rd, ad);
}
const sd = /* @__PURE__ */ new Map();
function ad(i, e) {
  let t = Ze[e];
  if (t === void 0) {
    const n = sd.get(e);
    if (n !== void 0)
      t = Ze[n], He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Is(t);
}
const od = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Za(i) {
  return i.replace(od, ld);
}
function ld(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ja(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const cd = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function ud(i) {
  return cd[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const fd = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function hd(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : fd[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const dd = {
  302: "ENVMAP_MODE_REFRACTION"
};
function pd(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : dd[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const md = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function gd(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : md[i.combine] || "ENVMAP_BLENDING_NONE";
}
function _d(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function xd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = ud(t), l = hd(t), f = pd(t), h = gd(t), u = _d(t), m = td(t), g = nd(s), v = r.createProgram();
  let p, d, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Xi).join(`
`), p.length > 0 && (p += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Xi).join(`
`), d.length > 0 && (d += `
`)) : (p = [
    ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + f : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexNormals ? "#define HAS_NORMAL" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Xi).join(`
`), d = [
    ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + f : "",
    t.envMap ? "#define " + h : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ze.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Qh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ze.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    jh("linearToOutputTexel", t.outputColorSpace),
    ed(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Xi).join(`
`)), a = Is(a), a = Ya(a, t), a = Ka(a, t), o = Is(o), o = Ya(o, t), o = Ka(o, t), a = Za(a), o = Za(o), t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, d = [
    "#define varying in",
    t.glslVersion === Js ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Js ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + d);
  const y = S + p + a, b = S + d + o, w = Xa(r, r.VERTEX_SHADER, y), E = Xa(r, r.FRAGMENT_SHADER, b);
  r.attachShader(v, w), r.attachShader(v, E), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function R(C) {
    if (i.debug.checkShaderErrors) {
      const L = r.getProgramInfoLog(v) || "", H = r.getShaderInfoLog(w) || "", N = r.getShaderInfoLog(E) || "", D = L.trim(), U = H.trim(), B = N.trim();
      let Y = !0, Z = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (Y = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, w, E);
        else {
          const te = $a(r, w, "vertex"), pe = $a(r, E, "fragment");
          nt(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + D + `
` + te + `
` + pe
          );
        }
      else D !== "" ? He("WebGLProgram: Program Info Log:", D) : (U === "" || B === "") && (Z = !1);
      Z && (C.diagnostics = {
        runnable: Y,
        programLog: D,
        vertexShader: {
          log: U,
          prefix: p
        },
        fragmentShader: {
          log: B,
          prefix: d
        }
      });
    }
    r.deleteShader(w), r.deleteShader(E), _ = new Dr(r, v), T = id(r, v);
  }
  let _;
  this.getUniforms = function() {
    return _ === void 0 && R(this), _;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && R(this), T;
  };
  let F = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return F === !1 && (F = r.getProgramParameter(v, $h)), F;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Yh++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = w, this.fragmentShader = E, this;
}
let vd = 0;
class Sd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Md(e), t.set(e, n)), n;
  }
}
class Md {
  constructor(e) {
    this.id = vd++, this.code = e, this.usedTimes = 0;
  }
}
function Ed(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function yd(i, e, t, n, r, s) {
  const a = new bo(), o = new Sd(), c = /* @__PURE__ */ new Set(), l = [], f = /* @__PURE__ */ new Map(), h = n.logarithmicDepthBuffer;
  let u = n.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(_) {
    return c.add(_), _ === 0 ? "uv" : `uv${_}`;
  }
  function v(_, T, F, C, L, H) {
    const N = C.fog, D = L.geometry, U = _.isMeshStandardMaterial || _.isMeshLambertMaterial || _.isMeshPhongMaterial ? C.environment : null, B = _.isMeshStandardMaterial || _.isMeshLambertMaterial && !_.envMap || _.isMeshPhongMaterial && !_.envMap, Y = e.get(_.envMap || U, B), Z = Y && Y.mapping === 306 ? Y.image.height : null, te = m[_.type];
    _.precision !== null && (u = n.getMaxPrecision(_.precision), u !== _.precision && He("WebGLProgram.getParameters:", _.precision, "not supported, using", u, "instead."));
    const pe = D.morphAttributes.position || D.morphAttributes.normal || D.morphAttributes.color, xe = pe !== void 0 ? pe.length : 0;
    let Ce = 0;
    D.morphAttributes.position !== void 0 && (Ce = 1), D.morphAttributes.normal !== void 0 && (Ce = 2), D.morphAttributes.color !== void 0 && (Ce = 3);
    let ke, he, q, ie;
    if (te) {
      const Be = cn[te];
      ke = Be.vertexShader, he = Be.fragmentShader;
    } else
      ke = _.vertexShader, he = _.fragmentShader, o.update(_), q = o.getVertexShaderID(_), ie = o.getFragmentShaderID(_);
    const $ = i.getRenderTarget(), ce = i.state.buffers.depth.getReversed(), ve = L.isInstancedMesh === !0, ne = L.isBatchedMesh === !0, Se = !!_.map, le = !!_.matcap, Ae = !!Y, Ge = !!_.aoMap, Te = !!_.lightMap, $e = !!_.bumpMap, Xe = !!_.normalMap, yt = !!_.displacementMap, O = !!_.emissiveMap, ot = !!_.metalnessMap, Pe = !!_.roughnessMap, tt = _.anisotropy > 0, me = _.clearcoat > 0, pt = _.dispersion > 0, A = _.iridescence > 0, x = _.sheen > 0, z = _.transmission > 0, Q = tt && !!_.anisotropyMap, re = me && !!_.clearcoatMap, fe = me && !!_.clearcoatNormalMap, K = me && !!_.clearcoatRoughnessMap, V = A && !!_.iridescenceMap, j = A && !!_.iridescenceThicknessMap, de = x && !!_.sheenColorMap, Me = x && !!_.sheenRoughnessMap, ae = !!_.specularMap, oe = !!_.specularColorMap, Ue = !!_.specularIntensityMap, ze = z && !!_.transmissionMap, Ke = z && !!_.thicknessMap, I = !!_.gradientMap, ue = !!_.alphaMap, J = _.alphaTest > 0, ge = !!_.alphaHash, se = !!_.extensions;
    let ee = 0;
    _.toneMapped && ($ === null || $.isXRRenderTarget === !0) && (ee = i.toneMapping);
    const _e = {
      shaderID: te,
      shaderType: _.type,
      shaderName: _.name,
      vertexShader: ke,
      fragmentShader: he,
      defines: _.defines,
      customVertexShaderID: q,
      customFragmentShaderID: ie,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: u,
      batching: ne,
      batchingColor: ne && L._colorsTexture !== null,
      instancing: ve,
      instancingColor: ve && L.instanceColor !== null,
      instancingMorph: ve && L.morphTexture !== null,
      outputColorSpace: $ === null ? i.outputColorSpace : $.isXRRenderTarget === !0 ? $.texture.colorSpace : Qe.workingColorSpace,
      alphaToCoverage: !!_.alphaToCoverage,
      map: Se,
      matcap: le,
      envMap: Ae,
      envMapMode: Ae && Y.mapping,
      envMapCubeUVHeight: Z,
      aoMap: Ge,
      lightMap: Te,
      bumpMap: $e,
      normalMap: Xe,
      displacementMap: yt,
      emissiveMap: O,
      normalMapObjectSpace: Xe && _.normalMapType === 1,
      normalMapTangentSpace: Xe && _.normalMapType === 0,
      packedNormalMap: Xe && _.normalMapType === 0 && Ed(_.normalMap.format),
      metalnessMap: ot,
      roughnessMap: Pe,
      anisotropy: tt,
      anisotropyMap: Q,
      clearcoat: me,
      clearcoatMap: re,
      clearcoatNormalMap: fe,
      clearcoatRoughnessMap: K,
      dispersion: pt,
      iridescence: A,
      iridescenceMap: V,
      iridescenceThicknessMap: j,
      sheen: x,
      sheenColorMap: de,
      sheenRoughnessMap: Me,
      specularMap: ae,
      specularColorMap: oe,
      specularIntensityMap: Ue,
      transmission: z,
      transmissionMap: ze,
      thicknessMap: Ke,
      gradientMap: I,
      opaque: _.transparent === !1 && _.blending === 1 && _.alphaToCoverage === !1,
      alphaMap: ue,
      alphaTest: J,
      alphaHash: ge,
      combine: _.combine,
      //
      mapUv: Se && g(_.map.channel),
      aoMapUv: Ge && g(_.aoMap.channel),
      lightMapUv: Te && g(_.lightMap.channel),
      bumpMapUv: $e && g(_.bumpMap.channel),
      normalMapUv: Xe && g(_.normalMap.channel),
      displacementMapUv: yt && g(_.displacementMap.channel),
      emissiveMapUv: O && g(_.emissiveMap.channel),
      metalnessMapUv: ot && g(_.metalnessMap.channel),
      roughnessMapUv: Pe && g(_.roughnessMap.channel),
      anisotropyMapUv: Q && g(_.anisotropyMap.channel),
      clearcoatMapUv: re && g(_.clearcoatMap.channel),
      clearcoatNormalMapUv: fe && g(_.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: K && g(_.clearcoatRoughnessMap.channel),
      iridescenceMapUv: V && g(_.iridescenceMap.channel),
      iridescenceThicknessMapUv: j && g(_.iridescenceThicknessMap.channel),
      sheenColorMapUv: de && g(_.sheenColorMap.channel),
      sheenRoughnessMapUv: Me && g(_.sheenRoughnessMap.channel),
      specularMapUv: ae && g(_.specularMap.channel),
      specularColorMapUv: oe && g(_.specularColorMap.channel),
      specularIntensityMapUv: Ue && g(_.specularIntensityMap.channel),
      transmissionMapUv: ze && g(_.transmissionMap.channel),
      thicknessMapUv: Ke && g(_.thicknessMap.channel),
      alphaMapUv: ue && g(_.alphaMap.channel),
      //
      vertexTangents: !!D.attributes.tangent && (Xe || tt),
      vertexNormals: !!D.attributes.normal,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!D.attributes.color && D.attributes.color.itemSize === 4,
      pointsUvs: L.isPoints === !0 && !!D.attributes.uv && (Se || ue),
      fog: !!N,
      useFog: _.fog === !0,
      fogExp2: !!N && N.isFogExp2,
      flatShading: _.wireframe === !1 && (_.flatShading === !0 || D.attributes.normal === void 0 && Xe === !1 && (_.isMeshLambertMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isMeshPhysicalMaterial)),
      sizeAttenuation: _.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reversedDepthBuffer: ce,
      skinning: L.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: xe,
      morphTextureStride: Ce,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numLightProbeGrids: H.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: i.shadowMap.enabled && F.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ee,
      decodeVideoTexture: Se && _.map.isVideoTexture === !0 && Qe.getTransfer(_.map.colorSpace) === at,
      decodeVideoTextureEmissive: O && _.emissiveMap.isVideoTexture === !0 && Qe.getTransfer(_.emissiveMap.colorSpace) === at,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === 2,
      flipSided: _.side === 1,
      useDepthPacking: _.depthPacking >= 0,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionClipCullDistance: se && _.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (se && _.extensions.multiDraw === !0 || ne) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
    return _e.vertexUv1s = c.has(1), _e.vertexUv2s = c.has(2), _e.vertexUv3s = c.has(3), c.clear(), _e;
  }
  function p(_) {
    const T = [];
    if (_.shaderID ? T.push(_.shaderID) : (T.push(_.customVertexShaderID), T.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const F in _.defines)
        T.push(F), T.push(_.defines[F]);
    return _.isRawShaderMaterial === !1 && (d(T, _), S(T, _), T.push(i.outputColorSpace)), T.push(_.customProgramCacheKey), T.join();
  }
  function d(_, T) {
    _.push(T.precision), _.push(T.outputColorSpace), _.push(T.envMapMode), _.push(T.envMapCubeUVHeight), _.push(T.mapUv), _.push(T.alphaMapUv), _.push(T.lightMapUv), _.push(T.aoMapUv), _.push(T.bumpMapUv), _.push(T.normalMapUv), _.push(T.displacementMapUv), _.push(T.emissiveMapUv), _.push(T.metalnessMapUv), _.push(T.roughnessMapUv), _.push(T.anisotropyMapUv), _.push(T.clearcoatMapUv), _.push(T.clearcoatNormalMapUv), _.push(T.clearcoatRoughnessMapUv), _.push(T.iridescenceMapUv), _.push(T.iridescenceThicknessMapUv), _.push(T.sheenColorMapUv), _.push(T.sheenRoughnessMapUv), _.push(T.specularMapUv), _.push(T.specularColorMapUv), _.push(T.specularIntensityMapUv), _.push(T.transmissionMapUv), _.push(T.thicknessMapUv), _.push(T.combine), _.push(T.fogExp2), _.push(T.sizeAttenuation), _.push(T.morphTargetsCount), _.push(T.morphAttributeCount), _.push(T.numDirLights), _.push(T.numPointLights), _.push(T.numSpotLights), _.push(T.numSpotLightMaps), _.push(T.numHemiLights), _.push(T.numRectAreaLights), _.push(T.numDirLightShadows), _.push(T.numPointLightShadows), _.push(T.numSpotLightShadows), _.push(T.numSpotLightShadowsWithMaps), _.push(T.numLightProbes), _.push(T.shadowMapType), _.push(T.toneMapping), _.push(T.numClippingPlanes), _.push(T.numClipIntersection), _.push(T.depthPacking);
  }
  function S(_, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), T.packedNormalMap && a.enable(22), T.vertexNormals && a.enable(23), _.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), T.numLightProbeGrids > 0 && a.enable(22), _.push(a.mask);
  }
  function y(_) {
    const T = m[_.type];
    let F;
    if (T) {
      const C = cn[T];
      F = Bl.clone(C.uniforms);
    } else
      F = _.uniforms;
    return F;
  }
  function b(_, T) {
    let F = f.get(T);
    return F !== void 0 ? ++F.usedTimes : (F = new xd(i, T, _, r), l.push(F), f.set(T, F)), F;
  }
  function w(_) {
    if (--_.usedTimes === 0) {
      const T = l.indexOf(_);
      l[T] = l[l.length - 1], l.pop(), f.delete(_.cacheKey), _.destroy();
    }
  }
  function E(_) {
    o.remove(_);
  }
  function R() {
    o.dispose();
  }
  return {
    getParameters: v,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: w,
    releaseShaderCache: E,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: R
  };
}
function bd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Td(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ja(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Qa() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let m = 0;
    return u.isInstancedMesh && (m += 2), u.isSkinnedMesh && (m += 1), m;
  }
  function o(u, m, g, v, p, d) {
    let S = i[e];
    return S === void 0 ? (S = {
      id: u.id,
      object: u,
      geometry: m,
      material: g,
      materialVariant: a(u),
      groupOrder: v,
      renderOrder: u.renderOrder,
      z: p,
      group: d
    }, i[e] = S) : (S.id = u.id, S.object = u, S.geometry = m, S.material = g, S.materialVariant = a(u), S.groupOrder = v, S.renderOrder = u.renderOrder, S.z = p, S.group = d), e++, S;
  }
  function c(u, m, g, v, p, d) {
    const S = o(u, m, g, v, p, d);
    g.transmission > 0 ? n.push(S) : g.transparent === !0 ? r.push(S) : t.push(S);
  }
  function l(u, m, g, v, p, d) {
    const S = o(u, m, g, v, p, d);
    g.transmission > 0 ? n.unshift(S) : g.transparent === !0 ? r.unshift(S) : t.unshift(S);
  }
  function f(u, m) {
    t.length > 1 && t.sort(u || Td), n.length > 1 && n.sort(m || Ja), r.length > 1 && r.sort(m || Ja);
  }
  function h() {
    for (let u = e, m = i.length; u < m; u++) {
      const g = i[u];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: c,
    unshift: l,
    finish: h,
    sort: f
  };
}
function Ad() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Qa(), i.set(n, [a])) : r >= s.length ? (a = new Qa(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function wd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new De()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new De(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new De(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new De(),
            groundColor: new De()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new De(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Rd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Cd = 0;
function Pd(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Ld(i) {
  const e = new wd(), t = Rd(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new P());
  const r = new P(), s = new ut(), a = new ut();
  function o(l) {
    let f = 0, h = 0, u = 0;
    for (let T = 0; T < 9; T++) n.probe[T].set(0, 0, 0);
    let m = 0, g = 0, v = 0, p = 0, d = 0, S = 0, y = 0, b = 0, w = 0, E = 0, R = 0;
    l.sort(Pd);
    for (let T = 0, F = l.length; T < F; T++) {
      const C = l[T], L = C.color, H = C.intensity, N = C.distance;
      let D = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === 1030 ? D = C.shadow.map.texture : D = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight)
        f += L.r * H, h += L.g * H, u += L.b * H;
      else if (C.isLightProbe) {
        for (let U = 0; U < 9; U++)
          n.probe[U].addScaledVector(C.sh.coefficients[U], H);
        R++;
      } else if (C.isDirectionalLight) {
        const U = e.get(C);
        if (U.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const B = C.shadow, Y = t.get(C);
          Y.shadowIntensity = B.intensity, Y.shadowBias = B.bias, Y.shadowNormalBias = B.normalBias, Y.shadowRadius = B.radius, Y.shadowMapSize = B.mapSize, n.directionalShadow[m] = Y, n.directionalShadowMap[m] = D, n.directionalShadowMatrix[m] = C.shadow.matrix, S++;
        }
        n.directional[m] = U, m++;
      } else if (C.isSpotLight) {
        const U = e.get(C);
        U.position.setFromMatrixPosition(C.matrixWorld), U.color.copy(L).multiplyScalar(H), U.distance = N, U.coneCos = Math.cos(C.angle), U.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), U.decay = C.decay, n.spot[v] = U;
        const B = C.shadow;
        if (C.map && (n.spotLightMap[w] = C.map, w++, B.updateMatrices(C), C.castShadow && E++), n.spotLightMatrix[v] = B.matrix, C.castShadow) {
          const Y = t.get(C);
          Y.shadowIntensity = B.intensity, Y.shadowBias = B.bias, Y.shadowNormalBias = B.normalBias, Y.shadowRadius = B.radius, Y.shadowMapSize = B.mapSize, n.spotShadow[v] = Y, n.spotShadowMap[v] = D, b++;
        }
        v++;
      } else if (C.isRectAreaLight) {
        const U = e.get(C);
        U.color.copy(L).multiplyScalar(H), U.halfWidth.set(C.width * 0.5, 0, 0), U.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[p] = U, p++;
      } else if (C.isPointLight) {
        const U = e.get(C);
        if (U.color.copy(C.color).multiplyScalar(C.intensity), U.distance = C.distance, U.decay = C.decay, C.castShadow) {
          const B = C.shadow, Y = t.get(C);
          Y.shadowIntensity = B.intensity, Y.shadowBias = B.bias, Y.shadowNormalBias = B.normalBias, Y.shadowRadius = B.radius, Y.shadowMapSize = B.mapSize, Y.shadowCameraNear = B.camera.near, Y.shadowCameraFar = B.camera.far, n.pointShadow[g] = Y, n.pointShadowMap[g] = D, n.pointShadowMatrix[g] = C.shadow.matrix, y++;
        }
        n.point[g] = U, g++;
      } else if (C.isHemisphereLight) {
        const U = e.get(C);
        U.skyColor.copy(C.color).multiplyScalar(H), U.groundColor.copy(C.groundColor).multiplyScalar(H), n.hemi[d] = U, d++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = Ee.LTC_FLOAT_1, n.rectAreaLTC2 = Ee.LTC_FLOAT_2) : (n.rectAreaLTC1 = Ee.LTC_HALF_1, n.rectAreaLTC2 = Ee.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = h, n.ambient[2] = u;
    const _ = n.hash;
    (_.directionalLength !== m || _.pointLength !== g || _.spotLength !== v || _.rectAreaLength !== p || _.hemiLength !== d || _.numDirectionalShadows !== S || _.numPointShadows !== y || _.numSpotShadows !== b || _.numSpotMaps !== w || _.numLightProbes !== R) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = b, n.spotShadowMap.length = b, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = b + w - E, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = E, n.numLightProbes = R, _.directionalLength = m, _.pointLength = g, _.spotLength = v, _.rectAreaLength = p, _.hemiLength = d, _.numDirectionalShadows = S, _.numPointShadows = y, _.numSpotShadows = b, _.numSpotMaps = w, _.numLightProbes = R, n.version = Cd++);
  }
  function c(l, f) {
    let h = 0, u = 0, m = 0, g = 0, v = 0;
    const p = f.matrixWorldInverse;
    for (let d = 0, S = l.length; d < S; d++) {
      const y = l[d];
      if (y.isDirectionalLight) {
        const b = n.directional[h];
        b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), h++;
      } else if (y.isSpotLight) {
        const b = n.spot[m];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), m++;
      } else if (y.isRectAreaLight) {
        const b = n.rectArea[g];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), a.identity(), s.copy(y.matrixWorld), s.premultiply(p), a.extractRotation(s), b.halfWidth.set(y.width * 0.5, 0, 0), b.halfHeight.set(0, y.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), g++;
      } else if (y.isPointLight) {
        const b = n.point[u];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), u++;
      } else if (y.isHemisphereLight) {
        const b = n.hemi[v];
        b.direction.setFromMatrixPosition(y.matrixWorld), b.direction.transformDirection(p), v++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function eo(i) {
  const e = new Ld(i), t = [], n = [], r = [];
  function s(u) {
    h.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function c(u) {
    r.push(u);
  }
  function l() {
    e.setup(t);
  }
  function f(u) {
    e.setupView(t, u);
  }
  const h = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: h,
    setupLights: l,
    setupLightsView: f,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function Dd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new eo(i), e.set(r, [o])) : s >= a.length ? (o = new eo(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Fd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Id = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, Ud = [
  /* @__PURE__ */ new P(1, 0, 0),
  /* @__PURE__ */ new P(-1, 0, 0),
  /* @__PURE__ */ new P(0, 1, 0),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, 0, 1),
  /* @__PURE__ */ new P(0, 0, -1)
], Nd = [
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, 0, 1),
  /* @__PURE__ */ new P(0, 0, -1),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, -1, 0)
], to = /* @__PURE__ */ new ut(), Wi = /* @__PURE__ */ new P(), Ts = /* @__PURE__ */ new P();
function Od(i, e, t) {
  let n = new Hs();
  const r = new Je(), s = new Je(), a = new vt(), o = new Hl(), c = new kl(), l = {}, f = t.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, u = new pn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Je() },
      radius: { value: 4 }
    },
    vertexShader: Fd,
    fragmentShader: Id
  }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Oe();
  g.setAttribute(
    "position",
    new Pt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Dt(g, u), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(E, R, _) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || E.length === 0) return;
    this.type === 2 && (He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const T = i.getRenderTarget(), F = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), L = i.state;
    L.setBlending(0), L.buffers.depth.getReversed() === !0 ? L.buffers.color.setClear(0, 0, 0, 0) : L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(!0), L.setScissorTest(!1);
    const H = d !== this.type;
    H && R.traverse(function(N) {
      N.material && (Array.isArray(N.material) ? N.material.forEach((D) => D.needsUpdate = !0) : N.material.needsUpdate = !0);
    });
    for (let N = 0, D = E.length; N < D; N++) {
      const U = E[N], B = U.shadow;
      if (B === void 0) {
        He("WebGLShadowMap:", U, "has no shadow.");
        continue;
      }
      if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
      r.copy(B.mapSize);
      const Y = B.getFrameExtents();
      r.multiply(Y), s.copy(B.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / Y.x), r.x = s.x * Y.x, B.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / Y.y), r.y = s.y * Y.y, B.mapSize.y = s.y));
      const Z = i.state.buffers.depth.getReversed();
      if (B.camera._reversedDepth = Z, B.map === null || H === !0) {
        if (B.map !== null && (B.map.depthTexture !== null && (B.map.depthTexture.dispose(), B.map.depthTexture = null), B.map.dispose()), this.type === 3) {
          if (U.isPointLight) {
            He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          B.map = new hn(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), B.map.texture.name = U.name + ".shadowMap", B.map.depthTexture = new wi(r.x, r.y, 1015), B.map.depthTexture.name = U.name + ".shadowMapDepth", B.map.depthTexture.format = 1026, B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = 1003, B.map.depthTexture.magFilter = 1003;
        } else
          U.isPointLight ? (B.map = new Go(r.x), B.map.depthTexture = new Ul(r.x, 1014)) : (B.map = new hn(r.x, r.y), B.map.depthTexture = new wi(r.x, r.y, 1014)), B.map.depthTexture.name = U.name + ".shadowMap", B.map.depthTexture.format = 1026, this.type === 1 ? (B.map.depthTexture.compareFunction = Z ? 518 : 515, B.map.depthTexture.minFilter = 1006, B.map.depthTexture.magFilter = 1006) : (B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = 1003, B.map.depthTexture.magFilter = 1003);
        B.camera.updateProjectionMatrix();
      }
      const te = B.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let pe = 0; pe < te; pe++) {
        if (B.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(B.map, pe), i.clear();
        else {
          pe === 0 && (i.setRenderTarget(B.map), i.clear());
          const xe = B.getViewport(pe);
          a.set(
            s.x * xe.x,
            s.y * xe.y,
            s.x * xe.z,
            s.y * xe.w
          ), L.viewport(a);
        }
        if (U.isPointLight) {
          const xe = B.camera, Ce = B.matrix, ke = U.distance || xe.far;
          ke !== xe.far && (xe.far = ke, xe.updateProjectionMatrix()), Wi.setFromMatrixPosition(U.matrixWorld), xe.position.copy(Wi), Ts.copy(xe.position), Ts.add(Ud[pe]), xe.up.copy(Nd[pe]), xe.lookAt(Ts), xe.updateMatrixWorld(), Ce.makeTranslation(-Wi.x, -Wi.y, -Wi.z), to.multiplyMatrices(xe.projectionMatrix, xe.matrixWorldInverse), B._frustum.setFromProjectionMatrix(to, xe.coordinateSystem, xe.reversedDepth);
        } else
          B.updateMatrices(U);
        n = B.getFrustum(), b(R, _, B.camera, U, this.type);
      }
      B.isPointLightShadow !== !0 && this.type === 3 && S(B, _), B.needsUpdate = !1;
    }
    d = this.type, p.needsUpdate = !1, i.setRenderTarget(T, F, C);
  };
  function S(E, R) {
    const _ = e.update(v);
    u.defines.VSM_SAMPLES !== E.blurSamples && (u.defines.VSM_SAMPLES = E.blurSamples, m.defines.VSM_SAMPLES = E.blurSamples, u.needsUpdate = !0, m.needsUpdate = !0), E.mapPass === null && (E.mapPass = new hn(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = E.map.depthTexture, u.uniforms.resolution.value = E.mapSize, u.uniforms.radius.value = E.radius, i.setRenderTarget(E.mapPass), i.clear(), i.renderBufferDirect(R, null, _, u, v, null), m.uniforms.shadow_pass.value = E.mapPass.texture, m.uniforms.resolution.value = E.mapSize, m.uniforms.radius.value = E.radius, i.setRenderTarget(E.map), i.clear(), i.renderBufferDirect(R, null, _, m, v, null);
  }
  function y(E, R, _, T) {
    let F = null;
    const C = _.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (C !== void 0)
      F = C;
    else if (F = _.isPointLight === !0 ? c : o, i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0 || R.alphaToCoverage === !0) {
      const L = F.uuid, H = R.uuid;
      let N = l[L];
      N === void 0 && (N = {}, l[L] = N);
      let D = N[H];
      D === void 0 && (D = F.clone(), N[H] = D, R.addEventListener("dispose", w)), F = D;
    }
    if (F.visible = R.visible, F.wireframe = R.wireframe, T === 3 ? F.side = R.shadowSide !== null ? R.shadowSide : R.side : F.side = R.shadowSide !== null ? R.shadowSide : h[R.side], F.alphaMap = R.alphaMap, F.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest, F.map = R.map, F.clipShadows = R.clipShadows, F.clippingPlanes = R.clippingPlanes, F.clipIntersection = R.clipIntersection, F.displacementMap = R.displacementMap, F.displacementScale = R.displacementScale, F.displacementBias = R.displacementBias, F.wireframeLinewidth = R.wireframeLinewidth, F.linewidth = R.linewidth, _.isPointLight === !0 && F.isMeshDistanceMaterial === !0) {
      const L = i.properties.get(F);
      L.light = _;
    }
    return F;
  }
  function b(E, R, _, T, F) {
    if (E.visible === !1) return;
    if (E.layers.test(R.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && F === 3) && (!E.frustumCulled || n.intersectsObject(E))) {
      E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse, E.matrixWorld);
      const H = e.update(E), N = E.material;
      if (Array.isArray(N)) {
        const D = H.groups;
        for (let U = 0, B = D.length; U < B; U++) {
          const Y = D[U], Z = N[Y.materialIndex];
          if (Z && Z.visible) {
            const te = y(E, Z, T, F);
            E.onBeforeShadow(i, E, R, _, H, te, Y), i.renderBufferDirect(_, null, H, te, E, Y), E.onAfterShadow(i, E, R, _, H, te, Y);
          }
        }
      } else if (N.visible) {
        const D = y(E, N, T, F);
        E.onBeforeShadow(i, E, R, _, H, D, null), i.renderBufferDirect(_, null, H, D, E, null), E.onAfterShadow(i, E, R, _, H, D, null);
      }
    }
    const L = E.children;
    for (let H = 0, N = L.length; H < N; H++)
      b(L[H], R, _, T, F);
  }
  function w(E) {
    E.target.removeEventListener("dispose", w);
    for (const _ in l) {
      const T = l[_], F = E.target.uuid;
      F in T && (T[F].dispose(), delete T[F]);
    }
  }
}
function Bd(i, e) {
  function t() {
    let I = !1;
    const ue = new vt();
    let J = null;
    const ge = new vt(0, 0, 0, 0);
    return {
      setMask: function(se) {
        J !== se && !I && (i.colorMask(se, se, se, se), J = se);
      },
      setLocked: function(se) {
        I = se;
      },
      setClear: function(se, ee, _e, Be, Ve) {
        Ve === !0 && (se *= Be, ee *= Be, _e *= Be), ue.set(se, ee, _e, Be), ge.equals(ue) === !1 && (i.clearColor(se, ee, _e, Be), ge.copy(ue));
      },
      reset: function() {
        I = !1, J = null, ge.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let I = !1, ue = !1, J = null, ge = null, se = null;
    return {
      setReversed: function(ee) {
        if (ue !== ee) {
          const _e = e.get("EXT_clip_control");
          ee ? _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.ZERO_TO_ONE_EXT) : _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.NEGATIVE_ONE_TO_ONE_EXT), ue = ee;
          const Be = se;
          se = null, this.setClear(Be);
        }
      },
      getReversed: function() {
        return ue;
      },
      setTest: function(ee) {
        ee ? $(i.DEPTH_TEST) : ce(i.DEPTH_TEST);
      },
      setMask: function(ee) {
        J !== ee && !I && (i.depthMask(ee), J = ee);
      },
      setFunc: function(ee) {
        if (ue && (ee = ol[ee]), ge !== ee) {
          switch (ee) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ge = ee;
        }
      },
      setLocked: function(ee) {
        I = ee;
      },
      setClear: function(ee) {
        se !== ee && (se = ee, ue && (ee = 1 - ee), i.clearDepth(ee));
      },
      reset: function() {
        I = !1, J = null, ge = null, se = null, ue = !1;
      }
    };
  }
  function r() {
    let I = !1, ue = null, J = null, ge = null, se = null, ee = null, _e = null, Be = null, Ve = null;
    return {
      setTest: function(We) {
        I || (We ? $(i.STENCIL_TEST) : ce(i.STENCIL_TEST));
      },
      setMask: function(We) {
        ue !== We && !I && (i.stencilMask(We), ue = We);
      },
      setFunc: function(We, st, _t) {
        (J !== We || ge !== st || se !== _t) && (i.stencilFunc(We, st, _t), J = We, ge = st, se = _t);
      },
      setOp: function(We, st, _t) {
        (ee !== We || _e !== st || Be !== _t) && (i.stencilOp(We, st, _t), ee = We, _e = st, Be = _t);
      },
      setLocked: function(We) {
        I = We;
      },
      setClear: function(We) {
        Ve !== We && (i.clearStencil(We), Ve = We);
      },
      reset: function() {
        I = !1, ue = null, J = null, ge = null, se = null, ee = null, _e = null, Be = null, Ve = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let f = {}, h = {}, u = {}, m = /* @__PURE__ */ new WeakMap(), g = [], v = null, p = !1, d = null, S = null, y = null, b = null, w = null, E = null, R = null, _ = new De(0, 0, 0), T = 0, F = !1, C = null, L = null, H = null, N = null, D = null;
  const U = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = !1, Y = 0;
  const Z = i.getParameter(i.VERSION);
  Z.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(Z)[1]), B = Y >= 1) : Z.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), B = Y >= 2);
  let te = null, pe = {};
  const xe = i.getParameter(i.SCISSOR_BOX), Ce = i.getParameter(i.VIEWPORT), ke = new vt().fromArray(xe), he = new vt().fromArray(Ce);
  function q(I, ue, J, ge) {
    const se = new Uint8Array(4), ee = i.createTexture();
    i.bindTexture(I, ee), i.texParameteri(I, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(I, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let _e = 0; _e < J; _e++)
      I === i.TEXTURE_3D || I === i.TEXTURE_2D_ARRAY ? i.texImage3D(ue, 0, i.RGBA, 1, 1, ge, 0, i.RGBA, i.UNSIGNED_BYTE, se) : i.texImage2D(ue + _e, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, se);
    return ee;
  }
  const ie = {};
  ie[i.TEXTURE_2D] = q(i.TEXTURE_2D, i.TEXTURE_2D, 1), ie[i.TEXTURE_CUBE_MAP] = q(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ie[i.TEXTURE_2D_ARRAY] = q(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ie[i.TEXTURE_3D] = q(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), $(i.DEPTH_TEST), a.setFunc(3), $e(!1), Xe(1), $(i.CULL_FACE), Ge(0);
  function $(I) {
    f[I] !== !0 && (i.enable(I), f[I] = !0);
  }
  function ce(I) {
    f[I] !== !1 && (i.disable(I), f[I] = !1);
  }
  function ve(I, ue) {
    return u[I] !== ue ? (i.bindFramebuffer(I, ue), u[I] = ue, I === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = ue), I === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = ue), !0) : !1;
  }
  function ne(I, ue) {
    let J = g, ge = !1;
    if (I) {
      J = m.get(ue), J === void 0 && (J = [], m.set(ue, J));
      const se = I.textures;
      if (J.length !== se.length || J[0] !== i.COLOR_ATTACHMENT0) {
        for (let ee = 0, _e = se.length; ee < _e; ee++)
          J[ee] = i.COLOR_ATTACHMENT0 + ee;
        J.length = se.length, ge = !0;
      }
    } else
      J[0] !== i.BACK && (J[0] = i.BACK, ge = !0);
    ge && i.drawBuffers(J);
  }
  function Se(I) {
    return v !== I ? (i.useProgram(I), v = I, !0) : !1;
  }
  const le = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  le[103] = i.MIN, le[104] = i.MAX;
  const Ae = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ge(I, ue, J, ge, se, ee, _e, Be, Ve, We) {
    if (I === 0) {
      p === !0 && (ce(i.BLEND), p = !1);
      return;
    }
    if (p === !1 && ($(i.BLEND), p = !0), I !== 5) {
      if (I !== d || We !== F) {
        if ((S !== 100 || w !== 100) && (i.blendEquation(i.FUNC_ADD), S = 100, w = 100), We)
          switch (I) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              nt("WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              nt("WebGLState: Invalid blending: ", I);
              break;
          }
        y = null, b = null, E = null, R = null, _.set(0, 0, 0), T = 0, d = I, F = We;
      }
      return;
    }
    se = se || ue, ee = ee || J, _e = _e || ge, (ue !== S || se !== w) && (i.blendEquationSeparate(le[ue], le[se]), S = ue, w = se), (J !== y || ge !== b || ee !== E || _e !== R) && (i.blendFuncSeparate(Ae[J], Ae[ge], Ae[ee], Ae[_e]), y = J, b = ge, E = ee, R = _e), (Be.equals(_) === !1 || Ve !== T) && (i.blendColor(Be.r, Be.g, Be.b, Ve), _.copy(Be), T = Ve), d = I, F = !1;
  }
  function Te(I, ue) {
    I.side === 2 ? ce(i.CULL_FACE) : $(i.CULL_FACE);
    let J = I.side === 1;
    ue && (J = !J), $e(J), I.blending === 1 && I.transparent === !1 ? Ge(0) : Ge(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), a.setFunc(I.depthFunc), a.setTest(I.depthTest), a.setMask(I.depthWrite), s.setMask(I.colorWrite);
    const ge = I.stencilWrite;
    o.setTest(ge), ge && (o.setMask(I.stencilWriteMask), o.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), o.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), O(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? $(i.SAMPLE_ALPHA_TO_COVERAGE) : ce(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function $e(I) {
    C !== I && (I ? i.frontFace(i.CW) : i.frontFace(i.CCW), C = I);
  }
  function Xe(I) {
    I !== 0 ? ($(i.CULL_FACE), I !== L && (I === 1 ? i.cullFace(i.BACK) : I === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ce(i.CULL_FACE), L = I;
  }
  function yt(I) {
    I !== H && (B && i.lineWidth(I), H = I);
  }
  function O(I, ue, J) {
    I ? ($(i.POLYGON_OFFSET_FILL), (N !== ue || D !== J) && (N = ue, D = J, a.getReversed() && (ue = -ue), i.polygonOffset(ue, J))) : ce(i.POLYGON_OFFSET_FILL);
  }
  function ot(I) {
    I ? $(i.SCISSOR_TEST) : ce(i.SCISSOR_TEST);
  }
  function Pe(I) {
    I === void 0 && (I = i.TEXTURE0 + U - 1), te !== I && (i.activeTexture(I), te = I);
  }
  function tt(I, ue, J) {
    J === void 0 && (te === null ? J = i.TEXTURE0 + U - 1 : J = te);
    let ge = pe[J];
    ge === void 0 && (ge = { type: void 0, texture: void 0 }, pe[J] = ge), (ge.type !== I || ge.texture !== ue) && (te !== J && (i.activeTexture(J), te = J), i.bindTexture(I, ue || ie[I]), ge.type = I, ge.texture = ue);
  }
  function me() {
    const I = pe[te];
    I !== void 0 && I.type !== void 0 && (i.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function pt() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function A() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function x() {
    try {
      i.texSubImage2D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function Q() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function re() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function fe() {
    try {
      i.texStorage2D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function K() {
    try {
      i.texStorage3D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function V() {
    try {
      i.texImage2D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function j() {
    try {
      i.texImage3D(...arguments);
    } catch (I) {
      nt("WebGLState:", I);
    }
  }
  function de(I) {
    return h[I] !== void 0 ? h[I] : i.getParameter(I);
  }
  function Me(I, ue) {
    h[I] !== ue && (i.pixelStorei(I, ue), h[I] = ue);
  }
  function ae(I) {
    ke.equals(I) === !1 && (i.scissor(I.x, I.y, I.z, I.w), ke.copy(I));
  }
  function oe(I) {
    he.equals(I) === !1 && (i.viewport(I.x, I.y, I.z, I.w), he.copy(I));
  }
  function Ue(I, ue) {
    let J = l.get(ue);
    J === void 0 && (J = /* @__PURE__ */ new WeakMap(), l.set(ue, J));
    let ge = J.get(I);
    ge === void 0 && (ge = i.getUniformBlockIndex(ue, I.name), J.set(I, ge));
  }
  function ze(I, ue) {
    const ge = l.get(ue).get(I);
    c.get(ue) !== ge && (i.uniformBlockBinding(ue, ge, I.__bindingPointIndex), c.set(ue, ge));
  }
  function Ke() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), f = {}, h = {}, te = null, pe = {}, u = {}, m = /* @__PURE__ */ new WeakMap(), g = [], v = null, p = !1, d = null, S = null, y = null, b = null, w = null, E = null, R = null, _ = new De(0, 0, 0), T = 0, F = !1, C = null, L = null, H = null, N = null, D = null, ke.set(0, 0, i.canvas.width, i.canvas.height), he.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: $,
    disable: ce,
    bindFramebuffer: ve,
    drawBuffers: ne,
    useProgram: Se,
    setBlending: Ge,
    setMaterial: Te,
    setFlipSided: $e,
    setCullFace: Xe,
    setLineWidth: yt,
    setPolygonOffset: O,
    setScissorTest: ot,
    activeTexture: Pe,
    bindTexture: tt,
    unbindTexture: me,
    compressedTexImage2D: pt,
    compressedTexImage3D: A,
    texImage2D: V,
    texImage3D: j,
    pixelStorei: Me,
    getParameter: de,
    updateUBOMapping: Ue,
    uniformBlockBinding: ze,
    texStorage2D: fe,
    texStorage3D: K,
    texSubImage2D: x,
    texSubImage3D: z,
    compressedTexSubImage2D: Q,
    compressedTexSubImage3D: re,
    scissor: ae,
    viewport: oe,
    reset: Ke
  };
}
function Gd(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Je(), f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Set();
  let u;
  const m = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(A, x) {
    return g ? new OffscreenCanvas(A, x) : qi("canvas");
  }
  function p(A, x, z) {
    let Q = 1;
    const re = pt(A);
    if ((re.width > z || re.height > z) && (Q = z / Math.max(re.width, re.height)), Q < 1)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
        const fe = Math.floor(Q * re.width), K = Math.floor(Q * re.height);
        u === void 0 && (u = v(fe, K));
        const V = x ? v(fe, K) : u;
        return V.width = fe, V.height = K, V.getContext("2d").drawImage(A, 0, 0, fe, K), He("WebGLRenderer: Texture has been resized from (" + re.width + "x" + re.height + ") to (" + fe + "x" + K + ")."), V;
      } else
        return "data" in A && He("WebGLRenderer: Image in DataTexture is too big (" + re.width + "x" + re.height + ")."), A;
    return A;
  }
  function d(A) {
    return A.generateMipmaps;
  }
  function S(A) {
    i.generateMipmap(A);
  }
  function y(A) {
    return A.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? i.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function b(A, x, z, Q, re, fe = !1) {
    if (A !== null) {
      if (i[A] !== void 0) return i[A];
      He("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let K;
    Q && (K = e.get("EXT_texture_norm16"), K || He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let V = x;
    if (x === i.RED && (z === i.FLOAT && (V = i.R32F), z === i.HALF_FLOAT && (V = i.R16F), z === i.UNSIGNED_BYTE && (V = i.R8), z === i.UNSIGNED_SHORT && K && (V = K.R16_EXT), z === i.SHORT && K && (V = K.R16_SNORM_EXT)), x === i.RED_INTEGER && (z === i.UNSIGNED_BYTE && (V = i.R8UI), z === i.UNSIGNED_SHORT && (V = i.R16UI), z === i.UNSIGNED_INT && (V = i.R32UI), z === i.BYTE && (V = i.R8I), z === i.SHORT && (V = i.R16I), z === i.INT && (V = i.R32I)), x === i.RG && (z === i.FLOAT && (V = i.RG32F), z === i.HALF_FLOAT && (V = i.RG16F), z === i.UNSIGNED_BYTE && (V = i.RG8), z === i.UNSIGNED_SHORT && K && (V = K.RG16_EXT), z === i.SHORT && K && (V = K.RG16_SNORM_EXT)), x === i.RG_INTEGER && (z === i.UNSIGNED_BYTE && (V = i.RG8UI), z === i.UNSIGNED_SHORT && (V = i.RG16UI), z === i.UNSIGNED_INT && (V = i.RG32UI), z === i.BYTE && (V = i.RG8I), z === i.SHORT && (V = i.RG16I), z === i.INT && (V = i.RG32I)), x === i.RGB_INTEGER && (z === i.UNSIGNED_BYTE && (V = i.RGB8UI), z === i.UNSIGNED_SHORT && (V = i.RGB16UI), z === i.UNSIGNED_INT && (V = i.RGB32UI), z === i.BYTE && (V = i.RGB8I), z === i.SHORT && (V = i.RGB16I), z === i.INT && (V = i.RGB32I)), x === i.RGBA_INTEGER && (z === i.UNSIGNED_BYTE && (V = i.RGBA8UI), z === i.UNSIGNED_SHORT && (V = i.RGBA16UI), z === i.UNSIGNED_INT && (V = i.RGBA32UI), z === i.BYTE && (V = i.RGBA8I), z === i.SHORT && (V = i.RGBA16I), z === i.INT && (V = i.RGBA32I)), x === i.RGB && (z === i.UNSIGNED_SHORT && K && (V = K.RGB16_EXT), z === i.SHORT && K && (V = K.RGB16_SNORM_EXT), z === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), z === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), x === i.RGBA) {
      const j = fe ? Ur : Qe.getTransfer(re);
      z === i.FLOAT && (V = i.RGBA32F), z === i.HALF_FLOAT && (V = i.RGBA16F), z === i.UNSIGNED_BYTE && (V = j === at ? i.SRGB8_ALPHA8 : i.RGBA8), z === i.UNSIGNED_SHORT && K && (V = K.RGBA16_EXT), z === i.SHORT && K && (V = K.RGBA16_SNORM_EXT), z === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), z === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && e.get("EXT_color_buffer_float"), V;
  }
  function w(A, x) {
    let z;
    return A ? x === null || x === 1014 || x === 1020 ? z = i.DEPTH24_STENCIL8 : x === 1015 ? z = i.DEPTH32F_STENCIL8 : x === 1012 && (z = i.DEPTH24_STENCIL8, He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === 1014 || x === 1020 ? z = i.DEPTH_COMPONENT24 : x === 1015 ? z = i.DEPTH_COMPONENT32F : x === 1012 && (z = i.DEPTH_COMPONENT16), z;
  }
  function E(A, x) {
    return d(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(x.width, x.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? x.mipmaps.length : 1;
  }
  function R(A) {
    const x = A.target;
    x.removeEventListener("dispose", R), T(x), x.isVideoTexture && f.delete(x), x.isHTMLTexture && h.delete(x);
  }
  function _(A) {
    const x = A.target;
    x.removeEventListener("dispose", _), C(x);
  }
  function T(A) {
    const x = n.get(A);
    if (x.__webglInit === void 0) return;
    const z = A.source, Q = m.get(z);
    if (Q) {
      const re = Q[x.__cacheKey];
      re.usedTimes--, re.usedTimes === 0 && F(A), Object.keys(Q).length === 0 && m.delete(z);
    }
    n.remove(A);
  }
  function F(A) {
    const x = n.get(A);
    i.deleteTexture(x.__webglTexture);
    const z = A.source, Q = m.get(z);
    delete Q[x.__cacheKey], a.memory.textures--;
  }
  function C(A) {
    const x = n.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), n.remove(A.depthTexture)), A.isWebGLCubeRenderTarget)
      for (let Q = 0; Q < 6; Q++) {
        if (Array.isArray(x.__webglFramebuffer[Q]))
          for (let re = 0; re < x.__webglFramebuffer[Q].length; re++) i.deleteFramebuffer(x.__webglFramebuffer[Q][re]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[Q]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[Q]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let Q = 0; Q < x.__webglFramebuffer.length; Q++) i.deleteFramebuffer(x.__webglFramebuffer[Q]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let Q = 0; Q < x.__webglColorRenderbuffer.length; Q++)
          x.__webglColorRenderbuffer[Q] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const z = A.textures;
    for (let Q = 0, re = z.length; Q < re; Q++) {
      const fe = n.get(z[Q]);
      fe.__webglTexture && (i.deleteTexture(fe.__webglTexture), a.memory.textures--), n.remove(z[Q]);
    }
    n.remove(A);
  }
  let L = 0;
  function H() {
    L = 0;
  }
  function N() {
    return L;
  }
  function D(A) {
    L = A;
  }
  function U() {
    const A = L;
    return A >= r.maxTextures && He("WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + r.maxTextures), L += 1, A;
  }
  function B(A) {
    const x = [];
    return x.push(A.wrapS), x.push(A.wrapT), x.push(A.wrapR || 0), x.push(A.magFilter), x.push(A.minFilter), x.push(A.anisotropy), x.push(A.internalFormat), x.push(A.format), x.push(A.type), x.push(A.generateMipmaps), x.push(A.premultiplyAlpha), x.push(A.flipY), x.push(A.unpackAlignment), x.push(A.colorSpace), x.join();
  }
  function Y(A, x) {
    const z = n.get(A);
    if (A.isVideoTexture && tt(A), A.isRenderTargetTexture === !1 && A.isExternalTexture !== !0 && A.version > 0 && z.__version !== A.version) {
      const Q = A.image;
      if (Q === null)
        He("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        He("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ce(z, A, x);
        return;
      }
    } else A.isExternalTexture && (z.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function Z(A, x) {
    const z = n.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && z.__version !== A.version) {
      ce(z, A, x);
      return;
    } else A.isExternalTexture && (z.__webglTexture = A.sourceTexture ? A.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + x);
  }
  function te(A, x) {
    const z = n.get(A);
    if (A.isRenderTargetTexture === !1 && A.version > 0 && z.__version !== A.version) {
      ce(z, A, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function pe(A, x) {
    const z = n.get(A);
    if (A.isCubeDepthTexture !== !0 && A.version > 0 && z.__version !== A.version) {
      ve(z, A, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + x);
  }
  const xe = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, Ce = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, ke = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function he(A, x) {
    if (x.type === 1015 && e.has("OES_texture_float_linear") === !1 && (x.magFilter === 1006 || x.magFilter === 1007 || x.magFilter === 1005 || x.magFilter === 1008 || x.minFilter === 1006 || x.minFilter === 1007 || x.minFilter === 1005 || x.minFilter === 1008) && He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(A, i.TEXTURE_WRAP_S, xe[x.wrapS]), i.texParameteri(A, i.TEXTURE_WRAP_T, xe[x.wrapT]), (A === i.TEXTURE_3D || A === i.TEXTURE_2D_ARRAY) && i.texParameteri(A, i.TEXTURE_WRAP_R, xe[x.wrapR]), i.texParameteri(A, i.TEXTURE_MAG_FILTER, Ce[x.magFilter]), i.texParameteri(A, i.TEXTURE_MIN_FILTER, Ce[x.minFilter]), x.compareFunction && (i.texParameteri(A, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(A, i.TEXTURE_COMPARE_FUNC, ke[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === 1003 || x.minFilter !== 1005 && x.minFilter !== 1008 || x.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const z = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(A, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function q(A, x) {
    let z = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, x.addEventListener("dispose", R));
    const Q = x.source;
    let re = m.get(Q);
    re === void 0 && (re = {}, m.set(Q, re));
    const fe = B(x);
    if (fe !== A.__cacheKey) {
      re[fe] === void 0 && (re[fe] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, z = !0), re[fe].usedTimes++;
      const K = re[A.__cacheKey];
      K !== void 0 && (re[A.__cacheKey].usedTimes--, K.usedTimes === 0 && F(x)), A.__cacheKey = fe, A.__webglTexture = re[fe].texture;
    }
    return z;
  }
  function ie(A, x, z) {
    return Math.floor(Math.floor(A / z) / x);
  }
  function $(A, x, z, Q) {
    const fe = A.updateRanges;
    if (fe.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, z, Q, x.data);
    else {
      fe.sort((Me, ae) => Me.start - ae.start);
      let K = 0;
      for (let Me = 1; Me < fe.length; Me++) {
        const ae = fe[K], oe = fe[Me], Ue = ae.start + ae.count, ze = ie(oe.start, x.width, 4), Ke = ie(ae.start, x.width, 4);
        oe.start <= Ue + 1 && ze === Ke && ie(oe.start + oe.count - 1, x.width, 4) === ze ? ae.count = Math.max(
          ae.count,
          oe.start + oe.count - ae.start
        ) : (++K, fe[K] = oe);
      }
      fe.length = K + 1;
      const V = t.getParameter(i.UNPACK_ROW_LENGTH), j = t.getParameter(i.UNPACK_SKIP_PIXELS), de = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let Me = 0, ae = fe.length; Me < ae; Me++) {
        const oe = fe[Me], Ue = Math.floor(oe.start / 4), ze = Math.ceil(oe.count / 4), Ke = Ue % x.width, I = Math.floor(Ue / x.width), ue = ze, J = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Ke), t.pixelStorei(i.UNPACK_SKIP_ROWS, I), t.texSubImage2D(i.TEXTURE_2D, 0, Ke, I, ue, J, z, Q, x.data);
      }
      A.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, V), t.pixelStorei(i.UNPACK_SKIP_PIXELS, j), t.pixelStorei(i.UNPACK_SKIP_ROWS, de);
    }
  }
  function ce(A, x, z) {
    let Q = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Q = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (Q = i.TEXTURE_3D);
    const re = q(A, x), fe = x.source;
    t.bindTexture(Q, A.__webglTexture, i.TEXTURE0 + z);
    const K = n.get(fe);
    if (fe.version !== K.__version || re === !0) {
      if (t.activeTexture(i.TEXTURE0 + z), (typeof ImageBitmap < "u" && x.image instanceof ImageBitmap) === !1) {
        const J = Qe.getPrimaries(Qe.workingColorSpace), ge = x.colorSpace === "" ? null : Qe.getPrimaries(x.colorSpace), se = x.colorSpace === "" || J === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, se);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment);
      let j = p(x.image, !1, r.maxTextureSize);
      j = me(x, j);
      const de = s.convert(x.format, x.colorSpace), Me = s.convert(x.type);
      let ae = b(x.internalFormat, de, Me, x.normalized, x.colorSpace, x.isVideoTexture);
      he(Q, x);
      let oe;
      const Ue = x.mipmaps, ze = x.isVideoTexture !== !0, Ke = K.__version === void 0 || re === !0, I = fe.dataReady, ue = E(x, j);
      if (x.isDepthTexture)
        ae = w(x.format === 1027, x.type), Ke && (ze ? t.texStorage2D(i.TEXTURE_2D, 1, ae, j.width, j.height) : t.texImage2D(i.TEXTURE_2D, 0, ae, j.width, j.height, 0, de, Me, null));
      else if (x.isDataTexture)
        if (Ue.length > 0) {
          ze && Ke && t.texStorage2D(i.TEXTURE_2D, ue, ae, Ue[0].width, Ue[0].height);
          for (let J = 0, ge = Ue.length; J < ge; J++)
            oe = Ue[J], ze ? I && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, oe.width, oe.height, de, Me, oe.data) : t.texImage2D(i.TEXTURE_2D, J, ae, oe.width, oe.height, 0, de, Me, oe.data);
          x.generateMipmaps = !1;
        } else
          ze ? (Ke && t.texStorage2D(i.TEXTURE_2D, ue, ae, j.width, j.height), I && $(x, j, de, Me)) : t.texImage2D(i.TEXTURE_2D, 0, ae, j.width, j.height, 0, de, Me, j.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          ze && Ke && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, ae, Ue[0].width, Ue[0].height, j.depth);
          for (let J = 0, ge = Ue.length; J < ge; J++)
            if (oe = Ue[J], x.format !== 1023)
              if (de !== null)
                if (ze) {
                  if (I)
                    if (x.layerUpdates.size > 0) {
                      const se = Da(oe.width, oe.height, x.format, x.type);
                      for (const ee of x.layerUpdates) {
                        const _e = oe.data.subarray(
                          ee * se / oe.data.BYTES_PER_ELEMENT,
                          (ee + 1) * se / oe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, ee, oe.width, oe.height, 1, de, _e);
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, oe.width, oe.height, j.depth, de, oe.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, ae, oe.width, oe.height, j.depth, 0, oe.data, 0, 0);
              else
                He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              ze ? I && t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, oe.width, oe.height, j.depth, de, Me, oe.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, J, ae, oe.width, oe.height, j.depth, 0, de, Me, oe.data);
        } else {
          ze && Ke && t.texStorage2D(i.TEXTURE_2D, ue, ae, Ue[0].width, Ue[0].height);
          for (let J = 0, ge = Ue.length; J < ge; J++)
            oe = Ue[J], x.format !== 1023 ? de !== null ? ze ? I && t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, oe.width, oe.height, de, oe.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, ae, oe.width, oe.height, 0, oe.data) : He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ze ? I && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, oe.width, oe.height, de, Me, oe.data) : t.texImage2D(i.TEXTURE_2D, J, ae, oe.width, oe.height, 0, de, Me, oe.data);
        }
      else if (x.isDataArrayTexture)
        if (ze) {
          if (Ke && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, ae, j.width, j.height, j.depth), I)
            if (x.layerUpdates.size > 0) {
              const J = Da(j.width, j.height, x.format, x.type);
              for (const ge of x.layerUpdates) {
                const se = j.data.subarray(
                  ge * J / j.data.BYTES_PER_ELEMENT,
                  (ge + 1) * J / j.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, ge, j.width, j.height, 1, de, Me, se);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, de, Me, j.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ae, j.width, j.height, j.depth, 0, de, Me, j.data);
      else if (x.isData3DTexture)
        ze ? (Ke && t.texStorage3D(i.TEXTURE_3D, ue, ae, j.width, j.height, j.depth), I && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, de, Me, j.data)) : t.texImage3D(i.TEXTURE_3D, 0, ae, j.width, j.height, j.depth, 0, de, Me, j.data);
      else if (x.isFramebufferTexture) {
        if (Ke)
          if (ze)
            t.texStorage2D(i.TEXTURE_2D, ue, ae, j.width, j.height);
          else {
            let J = j.width, ge = j.height;
            for (let se = 0; se < ue; se++)
              t.texImage2D(i.TEXTURE_2D, se, ae, J, ge, 0, de, Me, null), J >>= 1, ge >>= 1;
          }
      } else if (x.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const J = i.canvas;
          if (J.hasAttribute("layoutsubtree") || J.setAttribute("layoutsubtree", "true"), j.parentNode !== J) {
            J.appendChild(j), h.add(x), J.onpaint = (Be) => {
              const Ve = Be.changedElements;
              for (const We of h)
                Ve.includes(We.image) && (We.needsUpdate = !0);
            }, J.requestPaint();
            return;
          }
          const ge = 0, se = i.RGBA, ee = i.RGBA, _e = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, ge, se, ee, _e, j), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Ue.length > 0) {
        if (ze && Ke) {
          const J = pt(Ue[0]);
          t.texStorage2D(i.TEXTURE_2D, ue, ae, J.width, J.height);
        }
        for (let J = 0, ge = Ue.length; J < ge; J++)
          oe = Ue[J], ze ? I && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, de, Me, oe) : t.texImage2D(i.TEXTURE_2D, J, ae, de, Me, oe);
        x.generateMipmaps = !1;
      } else if (ze) {
        if (Ke) {
          const J = pt(j);
          t.texStorage2D(i.TEXTURE_2D, ue, ae, J.width, J.height);
        }
        I && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de, Me, j);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ae, de, Me, j);
      d(x) && S(Q), K.__version = fe.version, x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function ve(A, x, z) {
    if (x.image.length !== 6) return;
    const Q = q(A, x), re = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, A.__webglTexture, i.TEXTURE0 + z);
    const fe = n.get(re);
    if (re.version !== fe.__version || Q === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const K = Qe.getPrimaries(Qe.workingColorSpace), V = x.colorSpace === "" ? null : Qe.getPrimaries(x.colorSpace), j = x.colorSpace === "" || K === V ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, j);
      const de = x.isCompressedTexture || x.image[0].isCompressedTexture, Me = x.image[0] && x.image[0].isDataTexture, ae = [];
      for (let ee = 0; ee < 6; ee++)
        !de && !Me ? ae[ee] = p(x.image[ee], !0, r.maxCubemapSize) : ae[ee] = Me ? x.image[ee].image : x.image[ee], ae[ee] = me(x, ae[ee]);
      const oe = ae[0], Ue = s.convert(x.format, x.colorSpace), ze = s.convert(x.type), Ke = b(x.internalFormat, Ue, ze, x.normalized, x.colorSpace), I = x.isVideoTexture !== !0, ue = fe.__version === void 0 || Q === !0, J = re.dataReady;
      let ge = E(x, oe);
      he(i.TEXTURE_CUBE_MAP, x);
      let se;
      if (de) {
        I && ue && t.texStorage2D(i.TEXTURE_CUBE_MAP, ge, Ke, oe.width, oe.height);
        for (let ee = 0; ee < 6; ee++) {
          se = ae[ee].mipmaps;
          for (let _e = 0; _e < se.length; _e++) {
            const Be = se[_e];
            x.format !== 1023 ? Ue !== null ? I ? J && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e, 0, 0, Be.width, Be.height, Ue, Be.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e, Ke, Be.width, Be.height, 0, Be.data) : He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : I ? J && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e, 0, 0, Be.width, Be.height, Ue, ze, Be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e, Ke, Be.width, Be.height, 0, Ue, ze, Be.data);
          }
        }
      } else {
        if (se = x.mipmaps, I && ue) {
          se.length > 0 && ge++;
          const ee = pt(ae[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ge, Ke, ee.width, ee.height);
        }
        for (let ee = 0; ee < 6; ee++)
          if (Me) {
            I ? J && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, ae[ee].width, ae[ee].height, Ue, ze, ae[ee].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, Ke, ae[ee].width, ae[ee].height, 0, Ue, ze, ae[ee].data);
            for (let _e = 0; _e < se.length; _e++) {
              const Ve = se[_e].image[ee].image;
              I ? J && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e + 1, 0, 0, Ve.width, Ve.height, Ue, ze, Ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e + 1, Ke, Ve.width, Ve.height, 0, Ue, ze, Ve.data);
            }
          } else {
            I ? J && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, Ue, ze, ae[ee]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, Ke, Ue, ze, ae[ee]);
            for (let _e = 0; _e < se.length; _e++) {
              const Be = se[_e];
              I ? J && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e + 1, 0, 0, Ue, ze, Be.image[ee]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, _e + 1, Ke, Ue, ze, Be.image[ee]);
            }
          }
      }
      d(x) && S(i.TEXTURE_CUBE_MAP), fe.__version = re.version, x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function ne(A, x, z, Q, re, fe) {
    const K = s.convert(z.format, z.colorSpace), V = s.convert(z.type), j = b(z.internalFormat, K, V, z.normalized, z.colorSpace), de = n.get(x), Me = n.get(z);
    if (Me.__renderTarget = x, !de.__hasExternalTextures) {
      const ae = Math.max(1, x.width >> fe), oe = Math.max(1, x.height >> fe);
      re === i.TEXTURE_3D || re === i.TEXTURE_2D_ARRAY ? t.texImage3D(re, fe, j, ae, oe, x.depth, 0, K, V, null) : t.texImage2D(re, fe, j, ae, oe, 0, K, V, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, A), Pe(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Q, re, Me.__webglTexture, 0, ot(x)) : (re === i.TEXTURE_2D || re >= i.TEXTURE_CUBE_MAP_POSITIVE_X && re <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Q, re, Me.__webglTexture, fe), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Se(A, x, z) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, A), x.depthBuffer) {
      const Q = x.depthTexture, re = Q && Q.isDepthTexture ? Q.type : null, fe = w(x.stencilBuffer, re), K = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      Pe(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot(x), fe, x.width, x.height) : z ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot(x), fe, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, fe, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, A);
    } else {
      const Q = x.textures;
      for (let re = 0; re < Q.length; re++) {
        const fe = Q[re], K = s.convert(fe.format, fe.colorSpace), V = s.convert(fe.type), j = b(fe.internalFormat, K, V, fe.normalized, fe.colorSpace);
        Pe(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot(x), j, x.width, x.height) : z ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot(x), j, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, j, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function le(A, x, z) {
    const Q = x.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, A), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const re = n.get(x.depthTexture);
    if (re.__renderTarget = x, (!re.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), Q) {
      if (re.__webglInit === void 0 && (re.__webglInit = !0, x.depthTexture.addEventListener("dispose", R)), re.__webglTexture === void 0) {
        re.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, re.__webglTexture), he(i.TEXTURE_CUBE_MAP, x.depthTexture);
        const de = s.convert(x.depthTexture.format), Me = s.convert(x.depthTexture.type);
        let ae;
        x.depthTexture.format === 1026 ? ae = i.DEPTH_COMPONENT24 : x.depthTexture.format === 1027 && (ae = i.DEPTH24_STENCIL8);
        for (let oe = 0; oe < 6; oe++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0, ae, x.width, x.height, 0, de, Me, null);
      }
    } else
      Y(x.depthTexture, 0);
    const fe = re.__webglTexture, K = ot(x), V = Q ? i.TEXTURE_CUBE_MAP_POSITIVE_X + z : i.TEXTURE_2D, j = x.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (x.depthTexture.format === 1026)
      Pe(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, V, fe, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, j, V, fe, 0);
    else if (x.depthTexture.format === 1027)
      Pe(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, V, fe, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, j, V, fe, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ae(A) {
    const x = n.get(A), z = A.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== A.depthTexture) {
      const Q = A.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), Q) {
        const re = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, Q.removeEventListener("dispose", re);
        };
        Q.addEventListener("dispose", re), x.__depthDisposeCallback = re;
      }
      x.__boundDepthTexture = Q;
    }
    if (A.depthTexture && !x.__autoAllocateDepthBuffer)
      if (z)
        for (let Q = 0; Q < 6; Q++)
          le(x.__webglFramebuffer[Q], A, Q);
      else {
        const Q = A.texture.mipmaps;
        Q && Q.length > 0 ? le(x.__webglFramebuffer[0], A, 0) : le(x.__webglFramebuffer, A, 0);
      }
    else if (z) {
      x.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[Q]), x.__webglDepthbuffer[Q] === void 0)
          x.__webglDepthbuffer[Q] = i.createRenderbuffer(), Se(x.__webglDepthbuffer[Q], A, !1);
        else {
          const re = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, fe = x.__webglDepthbuffer[Q];
          i.bindRenderbuffer(i.RENDERBUFFER, fe), i.framebufferRenderbuffer(i.FRAMEBUFFER, re, i.RENDERBUFFER, fe);
        }
    } else {
      const Q = A.texture.mipmaps;
      if (Q && Q.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
        x.__webglDepthbuffer = i.createRenderbuffer(), Se(x.__webglDepthbuffer, A, !1);
      else {
        const re = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, fe = x.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, fe), i.framebufferRenderbuffer(i.FRAMEBUFFER, re, i.RENDERBUFFER, fe);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ge(A, x, z) {
    const Q = n.get(A);
    x !== void 0 && ne(Q.__webglFramebuffer, A, A.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), z !== void 0 && Ae(A);
  }
  function Te(A) {
    const x = A.texture, z = n.get(A), Q = n.get(x);
    A.addEventListener("dispose", _);
    const re = A.textures, fe = A.isWebGLCubeRenderTarget === !0, K = re.length > 1;
    if (K || (Q.__webglTexture === void 0 && (Q.__webglTexture = i.createTexture()), Q.__version = x.version, a.memory.textures++), fe) {
      z.__webglFramebuffer = [];
      for (let V = 0; V < 6; V++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          z.__webglFramebuffer[V] = [];
          for (let j = 0; j < x.mipmaps.length; j++)
            z.__webglFramebuffer[V][j] = i.createFramebuffer();
        } else
          z.__webglFramebuffer[V] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let V = 0; V < x.mipmaps.length; V++)
          z.__webglFramebuffer[V] = i.createFramebuffer();
      } else
        z.__webglFramebuffer = i.createFramebuffer();
      if (K)
        for (let V = 0, j = re.length; V < j; V++) {
          const de = n.get(re[V]);
          de.__webglTexture === void 0 && (de.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (A.samples > 0 && Pe(A) === !1) {
        z.__webglMultisampledFramebuffer = i.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let V = 0; V < re.length; V++) {
          const j = re[V];
          z.__webglColorRenderbuffer[V] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[V]);
          const de = s.convert(j.format, j.colorSpace), Me = s.convert(j.type), ae = b(j.internalFormat, de, Me, j.normalized, j.colorSpace, A.isXRRenderTarget === !0), oe = ot(A);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, oe, ae, A.width, A.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + V, i.RENDERBUFFER, z.__webglColorRenderbuffer[V]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), A.depthBuffer && (z.__webglDepthRenderbuffer = i.createRenderbuffer(), Se(z.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (fe) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Q.__webglTexture), he(i.TEXTURE_CUBE_MAP, x);
      for (let V = 0; V < 6; V++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let j = 0; j < x.mipmaps.length; j++)
            ne(z.__webglFramebuffer[V][j], A, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + V, j);
        else
          ne(z.__webglFramebuffer[V], A, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0);
      d(x) && S(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (K) {
      for (let V = 0, j = re.length; V < j; V++) {
        const de = re[V], Me = n.get(de);
        let ae = i.TEXTURE_2D;
        (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (ae = A.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, Me.__webglTexture), he(ae, de), ne(z.__webglFramebuffer, A, de, i.COLOR_ATTACHMENT0 + V, ae, 0), d(de) && S(ae);
      }
      t.unbindTexture();
    } else {
      let V = i.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (V = A.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(V, Q.__webglTexture), he(V, x), x.mipmaps && x.mipmaps.length > 0)
        for (let j = 0; j < x.mipmaps.length; j++)
          ne(z.__webglFramebuffer[j], A, x, i.COLOR_ATTACHMENT0, V, j);
      else
        ne(z.__webglFramebuffer, A, x, i.COLOR_ATTACHMENT0, V, 0);
      d(x) && S(V), t.unbindTexture();
    }
    A.depthBuffer && Ae(A);
  }
  function $e(A) {
    const x = A.textures;
    for (let z = 0, Q = x.length; z < Q; z++) {
      const re = x[z];
      if (d(re)) {
        const fe = y(A), K = n.get(re).__webglTexture;
        t.bindTexture(fe, K), S(fe), t.unbindTexture();
      }
    }
  }
  const Xe = [], yt = [];
  function O(A) {
    if (A.samples > 0) {
      if (Pe(A) === !1) {
        const x = A.textures, z = A.width, Q = A.height;
        let re = i.COLOR_BUFFER_BIT;
        const fe = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, K = n.get(A), V = x.length > 1;
        if (V)
          for (let de = 0; de < x.length; de++)
            t.bindFramebuffer(i.FRAMEBUFFER, K.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, K.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, K.__webglMultisampledFramebuffer);
        const j = A.texture.mipmaps;
        j && j.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, K.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, K.__webglFramebuffer);
        for (let de = 0; de < x.length; de++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (re |= i.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (re |= i.STENCIL_BUFFER_BIT)), V) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, K.__webglColorRenderbuffer[de]);
            const Me = n.get(x[de]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Me, 0);
          }
          i.blitFramebuffer(0, 0, z, Q, 0, 0, z, Q, re, i.NEAREST), c === !0 && (Xe.length = 0, yt.length = 0, Xe.push(i.COLOR_ATTACHMENT0 + de), A.depthBuffer && A.resolveDepthBuffer === !1 && (Xe.push(fe), yt.push(fe), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, yt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Xe));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), V)
          for (let de = 0; de < x.length; de++) {
            t.bindFramebuffer(i.FRAMEBUFFER, K.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, K.__webglColorRenderbuffer[de]);
            const Me = n.get(x[de]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, K.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, Me, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, K.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && c) {
        const x = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ot(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function Pe(A) {
    const x = n.get(A);
    return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function tt(A) {
    const x = a.render.frame;
    f.get(A) !== x && (f.set(A, x), A.update());
  }
  function me(A, x) {
    const z = A.colorSpace, Q = A.format, re = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || z !== Ir && z !== "" && (Qe.getTransfer(z) === at ? (Q !== 1023 || re !== 1009) && He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : nt("WebGLTextures: Unsupported texture color space:", z)), x;
  }
  function pt(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (l.width = A.naturalWidth || A.width, l.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (l.width = A.displayWidth, l.height = A.displayHeight) : (l.width = A.width, l.height = A.height), l;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = H, this.getTextureUnits = N, this.setTextureUnits = D, this.setTexture2D = Y, this.setTexture2DArray = Z, this.setTexture3D = te, this.setTextureCube = pe, this.rebindTextures = Ge, this.setupRenderTarget = Te, this.updateRenderTargetMipmap = $e, this.updateMultisampleRenderTarget = O, this.setupDepthRenderbuffer = Ae, this.setupFrameBufferTexture = ne, this.useMultisampledRTT = Pe, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function zd(i, e) {
  function t(n, r = "") {
    let s;
    const a = Qe.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === at)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === at ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === at ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === at ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Vd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Hd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class kd {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new Fo(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new pn({
        vertexShader: Vd,
        fragmentShader: Hd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Dt(new bn(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Wd extends jn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, f = null, h = null, u = null, m = null, g = null;
    const v = typeof XRWebGLBinding < "u", p = new kd(), d = {}, S = t.getContextAttributes();
    let y = null, b = null;
    const w = [], E = [], R = new Je();
    let _ = null;
    const T = new Qt();
    T.viewport = new vt();
    const F = new Qt();
    F.viewport = new vt();
    const C = [T, F], L = new Ql();
    let H = null, N = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let ie = w[q];
      return ie === void 0 && (ie = new Jr(), w[q] = ie), ie.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let ie = w[q];
      return ie === void 0 && (ie = new Jr(), w[q] = ie), ie.getGripSpace();
    }, this.getHand = function(q) {
      let ie = w[q];
      return ie === void 0 && (ie = new Jr(), w[q] = ie), ie.getHandSpace();
    };
    function D(q) {
      const ie = E.indexOf(q.inputSource);
      if (ie === -1)
        return;
      const $ = w[ie];
      $ !== void 0 && ($.update(q.inputSource, q.frame, l || a), $.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function U() {
      r.removeEventListener("select", D), r.removeEventListener("selectstart", D), r.removeEventListener("selectend", D), r.removeEventListener("squeeze", D), r.removeEventListener("squeezestart", D), r.removeEventListener("squeezeend", D), r.removeEventListener("end", U), r.removeEventListener("inputsourceschange", B);
      for (let q = 0; q < w.length; q++) {
        const ie = E[q];
        ie !== null && (E[q] = null, w[q].disconnect(ie));
      }
      H = null, N = null, p.reset();
      for (const q in d)
        delete d[q];
      e.setRenderTarget(y), m = null, u = null, h = null, r = null, b = null, he.stop(), n.isPresenting = !1, e.setPixelRatio(_), e.setSize(R.width, R.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      s = q, n.isPresenting === !0 && He("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, n.isPresenting === !0 && He("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return u !== null ? u : m;
    }, this.getBinding = function() {
      return h === null && v && (h = new XRWebGLBinding(r, t)), h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(q) {
      if (r = q, r !== null) {
        if (y = e.getRenderTarget(), r.addEventListener("select", D), r.addEventListener("selectstart", D), r.addEventListener("selectend", D), r.addEventListener("squeeze", D), r.addEventListener("squeezestart", D), r.addEventListener("squeezeend", D), r.addEventListener("end", U), r.addEventListener("inputsourceschange", B), S.xrCompatible !== !0 && await t.makeXRCompatible(), _ = e.getPixelRatio(), e.getSize(R), v && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let $ = null, ce = null, ve = null;
          S.depth && (ve = S.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, $ = S.stencil ? 1027 : 1026, ce = S.stencil ? 1020 : 1014);
          const ne = {
            colorFormat: t.RGBA8,
            depthFormat: ve,
            scaleFactor: s
          };
          h = this.getBinding(), u = h.createProjectionLayer(ne), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), b = new hn(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new wi(u.textureWidth, u.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, $),
              stencilBuffer: S.stencil,
              colorSpace: e.outputColorSpace,
              samples: S.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const $ = {
            antialias: S.antialias,
            alpha: !0,
            depth: S.depth,
            stencil: S.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, $), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), b = new hn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: S.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        b.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), he.setContext(r), he.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function B(q) {
      for (let ie = 0; ie < q.removed.length; ie++) {
        const $ = q.removed[ie], ce = E.indexOf($);
        ce >= 0 && (E[ce] = null, w[ce].disconnect($));
      }
      for (let ie = 0; ie < q.added.length; ie++) {
        const $ = q.added[ie];
        let ce = E.indexOf($);
        if (ce === -1) {
          for (let ne = 0; ne < w.length; ne++)
            if (ne >= E.length) {
              E.push($), ce = ne;
              break;
            } else if (E[ne] === null) {
              E[ne] = $, ce = ne;
              break;
            }
          if (ce === -1) break;
        }
        const ve = w[ce];
        ve && ve.connect($);
      }
    }
    const Y = new P(), Z = new P();
    function te(q, ie, $) {
      Y.setFromMatrixPosition(ie.matrixWorld), Z.setFromMatrixPosition($.matrixWorld);
      const ce = Y.distanceTo(Z), ve = ie.projectionMatrix.elements, ne = $.projectionMatrix.elements, Se = ve[14] / (ve[10] - 1), le = ve[14] / (ve[10] + 1), Ae = (ve[9] + 1) / ve[5], Ge = (ve[9] - 1) / ve[5], Te = (ve[8] - 1) / ve[0], $e = (ne[8] + 1) / ne[0], Xe = Se * Te, yt = Se * $e, O = ce / (-Te + $e), ot = O * -Te;
      if (ie.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(ot), q.translateZ(O), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), ve[10] === -1)
        q.projectionMatrix.copy(ie.projectionMatrix), q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);
      else {
        const Pe = Se + O, tt = le + O, me = Xe - ot, pt = yt + (ce - ot), A = Ae * le / tt * Pe, x = Ge * le / tt * Pe;
        q.projectionMatrix.makePerspective(me, pt, A, x, Pe, tt), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function pe(q, ie) {
      ie === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(ie.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (r === null) return;
      let ie = q.near, $ = q.far;
      p.texture !== null && (p.depthNear > 0 && (ie = p.depthNear), p.depthFar > 0 && ($ = p.depthFar)), L.near = F.near = T.near = ie, L.far = F.far = T.far = $, (H !== L.near || N !== L.far) && (r.updateRenderState({
        depthNear: L.near,
        depthFar: L.far
      }), H = L.near, N = L.far), L.layers.mask = q.layers.mask | 6, T.layers.mask = L.layers.mask & -5, F.layers.mask = L.layers.mask & -3;
      const ce = q.parent, ve = L.cameras;
      pe(L, ce);
      for (let ne = 0; ne < ve.length; ne++)
        pe(ve[ne], ce);
      ve.length === 2 ? te(L, T, F) : L.projectionMatrix.copy(T.projectionMatrix), xe(q, L, ce);
    };
    function xe(q, ie, $) {
      $ === null ? q.matrix.copy(ie.matrixWorld) : (q.matrix.copy($.matrixWorld), q.matrix.invert(), q.matrix.multiply(ie.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(ie.projectionMatrix), q.projectionMatrixInverse.copy(ie.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Ls * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return L;
    }, this.getFoveation = function() {
      if (!(u === null && m === null))
        return c;
    }, this.setFoveation = function(q) {
      c = q, u !== null && (u.fixedFoveation = q), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(L);
    }, this.getCameraTexture = function(q) {
      return d[q];
    };
    let Ce = null;
    function ke(q, ie) {
      if (f = ie.getViewerPose(l || a), g = ie, f !== null) {
        const $ = f.views;
        m !== null && (e.setRenderTargetFramebuffer(b, m.framebuffer), e.setRenderTarget(b));
        let ce = !1;
        $.length !== L.cameras.length && (L.cameras.length = 0, ce = !0);
        for (let le = 0; le < $.length; le++) {
          const Ae = $[le];
          let Ge = null;
          if (m !== null)
            Ge = m.getViewport(Ae);
          else {
            const $e = h.getViewSubImage(u, Ae);
            Ge = $e.viewport, le === 0 && (e.setRenderTargetTextures(
              b,
              $e.colorTexture,
              $e.depthStencilTexture
            ), e.setRenderTarget(b));
          }
          let Te = C[le];
          Te === void 0 && (Te = new Qt(), Te.layers.enable(le), Te.viewport = new vt(), C[le] = Te), Te.matrix.fromArray(Ae.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(Ae.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(Ge.x, Ge.y, Ge.width, Ge.height), le === 0 && (L.matrix.copy(Te.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale)), ce === !0 && L.cameras.push(Te);
        }
        const ve = r.enabledFeatures;
        if (ve && ve.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && v) {
          h = n.getBinding();
          const le = h.getDepthInformation($[0]);
          le && le.isValid && le.texture && p.init(le, r.renderState);
        }
        if (ve && ve.includes("camera-access") && v) {
          e.state.unbindTexture(), h = n.getBinding();
          for (let le = 0; le < $.length; le++) {
            const Ae = $[le].camera;
            if (Ae) {
              let Ge = d[Ae];
              Ge || (Ge = new Fo(), d[Ae] = Ge);
              const Te = h.getCameraImage(Ae);
              Ge.sourceTexture = Te;
            }
          }
        }
      }
      for (let $ = 0; $ < w.length; $++) {
        const ce = E[$], ve = w[$];
        ce !== null && ve !== void 0 && ve.update(ce, ie, l || a);
      }
      Ce && Ce(q, ie), ie.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ie }), g = null;
    }
    const he = new Oo();
    he.setAnimationLoop(ke), this.setAnimationLoop = function(q) {
      Ce = q;
    }, this.dispose = function() {
    };
  }
}
const Xd = /* @__PURE__ */ new ut(), Wo = /* @__PURE__ */ new qe();
Wo.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function qd(i, e) {
  function t(p, d) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, Io(i)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function r(p, d, S, y, b) {
    d.isNodeMaterial ? d.uniformsNeedUpdate = !1 : d.isMeshBasicMaterial ? s(p, d) : d.isMeshLambertMaterial ? (s(p, d), d.envMap && (p.envMapIntensity.value = d.envMapIntensity)) : d.isMeshToonMaterial ? (s(p, d), h(p, d)) : d.isMeshPhongMaterial ? (s(p, d), f(p, d), d.envMap && (p.envMapIntensity.value = d.envMapIntensity)) : d.isMeshStandardMaterial ? (s(p, d), u(p, d), d.isMeshPhysicalMaterial && m(p, d, b)) : d.isMeshMatcapMaterial ? (s(p, d), g(p, d)) : d.isMeshDepthMaterial ? s(p, d) : d.isMeshDistanceMaterial ? (s(p, d), v(p, d)) : d.isMeshNormalMaterial ? s(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? c(p, d, S, y) : d.isSpriteMaterial ? l(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, t(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === 1 && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, t(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === 1 && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, t(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, t(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const S = e.get(d), y = S.envMap, b = S.envMapRotation;
    y && (p.envMap.value = y, p.envMapRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(b)).transpose(), y.isCubeTexture && y.isRenderTargetTexture === !1 && p.envMapRotation.value.premultiply(Wo), p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap && (p.lightMap.value = d.lightMap, p.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, p.lightMapTransform)), d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, t(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function c(p, d, S, y) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * S, p.scale.value = y * 0.5, d.map && (p.map.value = d.map, t(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function l(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function f(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function u(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, p.roughnessMapTransform)), d.envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, S) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && p.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (p.dispersion.value = d.dispersion), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = S.texture, p.transmissionSamplerSize.value.set(S.width, S.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function v(p, d) {
    const S = e.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(S.matrixWorld), p.nearDistance.value = S.shadow.camera.near, p.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function $d(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(S, y) {
    const b = y.program;
    n.uniformBlockBinding(S, b);
  }
  function l(S, y) {
    let b = r[S.id];
    b === void 0 && (g(S), b = f(S), r[S.id] = b, S.addEventListener("dispose", p));
    const w = y.program;
    n.updateUBOMapping(S, w);
    const E = e.render.frame;
    s[S.id] !== E && (u(S), s[S.id] = E);
  }
  function f(S) {
    const y = h();
    S.__bindingPointIndex = y;
    const b = i.createBuffer(), w = S.__size, E = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, w, E), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, b), b;
  }
  function h() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(S) {
    const y = r[S.id], b = S.uniforms, w = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let E = 0, R = b.length; E < R; E++) {
      const _ = Array.isArray(b[E]) ? b[E] : [b[E]];
      for (let T = 0, F = _.length; T < F; T++) {
        const C = _[T];
        if (m(C, E, T, w) === !0) {
          const L = C.__offset, H = Array.isArray(C.value) ? C.value : [C.value];
          let N = 0;
          for (let D = 0; D < H.length; D++) {
            const U = H[D], B = v(U);
            typeof U == "number" || typeof U == "boolean" ? (C.__data[0] = U, i.bufferSubData(i.UNIFORM_BUFFER, L + N, C.__data)) : U.isMatrix3 ? (C.__data[0] = U.elements[0], C.__data[1] = U.elements[1], C.__data[2] = U.elements[2], C.__data[3] = 0, C.__data[4] = U.elements[3], C.__data[5] = U.elements[4], C.__data[6] = U.elements[5], C.__data[7] = 0, C.__data[8] = U.elements[6], C.__data[9] = U.elements[7], C.__data[10] = U.elements[8], C.__data[11] = 0) : ArrayBuffer.isView(U) ? C.__data.set(new U.constructor(U.buffer, U.byteOffset, C.__data.length)) : (U.toArray(C.__data, N), N += B.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, L, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(S, y, b, w) {
    const E = S.value, R = y + "_" + b;
    if (w[R] === void 0)
      return typeof E == "number" || typeof E == "boolean" ? w[R] = E : ArrayBuffer.isView(E) ? w[R] = E.slice() : w[R] = E.clone(), !0;
    {
      const _ = w[R];
      if (typeof E == "number" || typeof E == "boolean") {
        if (_ !== E)
          return w[R] = E, !0;
      } else {
        if (ArrayBuffer.isView(E))
          return !0;
        if (_.equals(E) === !1)
          return _.copy(E), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const y = S.uniforms;
    let b = 0;
    const w = 16;
    for (let R = 0, _ = y.length; R < _; R++) {
      const T = Array.isArray(y[R]) ? y[R] : [y[R]];
      for (let F = 0, C = T.length; F < C; F++) {
        const L = T[F], H = Array.isArray(L.value) ? L.value : [L.value];
        for (let N = 0, D = H.length; N < D; N++) {
          const U = H[N], B = v(U), Y = b % w, Z = Y % B.boundary, te = Y + Z;
          b += Z, te !== 0 && w - te < B.storage && (b += w - te), L.__data = new Float32Array(B.storage / Float32Array.BYTES_PER_ELEMENT), L.__offset = b, b += B.storage;
        }
      }
    }
    const E = b % w;
    return E > 0 && (b += w - E), S.__size = b, S.__cache = {}, this;
  }
  function v(S) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" || typeof S == "boolean" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? He("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(S) ? (y.boundary = 16, y.storage = S.byteLength) : He("WebGLRenderer: Unsupported uniform value type.", S), y;
  }
  function p(S) {
    const y = S.target;
    y.removeEventListener("dispose", p);
    const b = a.indexOf(y.__bindingPointIndex);
    a.splice(b, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function d() {
    for (const S in r)
      i.deleteBuffer(r[S]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: d
  };
}
const Yd = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);
let ln = null;
function Kd() {
  return ln === null && (ln = new Po(Yd, 16, 16, 1030, 1016), ln.name = "DFG_LUT", ln.minFilter = 1006, ln.magFilter = 1006, ln.wrapS = 1001, ln.wrapT = 1001, ln.generateMipmaps = !1, ln.needsUpdate = !0), ln;
}
class Zd {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = sl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: m = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let g;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = n.getContextAttributes().alpha;
    } else
      g = a;
    const v = m, p = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), d = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), S = new Uint32Array(4), y = new Int32Array(4), b = new P();
    let w = null, E = null;
    const R = [], _ = [];
    let T = null;
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const F = this;
    let C = !1, L = null;
    this._outputColorSpace = Wt;
    let H = 0, N = 0, D = null, U = -1, B = null;
    const Y = new vt(), Z = new vt();
    let te = null;
    const pe = new De(0);
    let xe = 0, Ce = t.width, ke = t.height, he = 1, q = null, ie = null;
    const $ = new vt(0, 0, Ce, ke), ce = new vt(0, 0, Ce, ke);
    let ve = !1;
    const ne = new Hs();
    let Se = !1, le = !1;
    const Ae = new ut(), Ge = new P(), Te = new vt(), $e = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Xe = !1;
    function yt() {
      return D === null ? he : 1;
    }
    let O = n;
    function ot(M, G) {
      return t.getContext(M, G);
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r184"), t.addEventListener("webglcontextlost", ee, !1), t.addEventListener("webglcontextrestored", _e, !1), t.addEventListener("webglcontextcreationerror", Be, !1), O === null) {
        const G = "webgl2";
        if (O = ot(G, M), O === null)
          throw ot(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw nt("WebGLRenderer: " + M.message), M;
    }
    let Pe, tt, me, pt, A, x, z, Q, re, fe, K, V, j, de, Me, ae, oe, Ue, ze, Ke, I, ue, J;
    function ge() {
      Pe = new Kf(O), Pe.init(), I = new zd(O, Pe), tt = new Vf(O, Pe, e, I), me = new Bd(O, Pe), tt.reversedDepthBuffer && u && me.buffers.depth.setReversed(!0), pt = new Jf(O), A = new bd(), x = new Gd(O, Pe, me, A, tt, I, pt), z = new Yf(F), Q = new tc(O), ue = new Gf(O, Q), re = new Zf(O, Q, pt, ue), fe = new eh(O, re, Q, ue, pt), Ue = new Qf(O, tt, x), Me = new Hf(A), K = new yd(F, z, Pe, tt, ue, Me), V = new qd(F, A), j = new Ad(), de = new Dd(Pe), oe = new Bf(F, z, me, fe, g, c), ae = new Od(F, fe, tt), J = new $d(O, pt, tt, me), ze = new zf(O, Pe, pt), Ke = new jf(O, Pe, pt), pt.programs = K.programs, F.capabilities = tt, F.extensions = Pe, F.properties = A, F.renderLists = j, F.shadowMap = ae, F.state = me, F.info = pt;
    }
    ge(), v !== 1009 && (T = new nh(v, t.width, t.height, r, s));
    const se = new Wd(F, O);
    this.xr = se, this.getContext = function() {
      return O;
    }, this.getContextAttributes = function() {
      return O.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = Pe.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = Pe.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return he;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (he = M, this.setSize(Ce, ke, !1));
    }, this.getSize = function(M) {
      return M.set(Ce, ke);
    }, this.setSize = function(M, G, X = !0) {
      if (se.isPresenting) {
        He("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ce = M, ke = G, t.width = Math.floor(M * he), t.height = Math.floor(G * he), X === !0 && (t.style.width = M + "px", t.style.height = G + "px"), T !== null && T.setSize(t.width, t.height), this.setViewport(0, 0, M, G);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(Ce * he, ke * he).floor();
    }, this.setDrawingBufferSize = function(M, G, X) {
      Ce = M, ke = G, he = X, t.width = Math.floor(M * X), t.height = Math.floor(G * X), this.setViewport(0, 0, M, G);
    }, this.setEffects = function(M) {
      if (v === 1009) {
        nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (M) {
        for (let G = 0; G < M.length; G++)
          if (M[G].isOutputPass === !0) {
            He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      T.setEffects(M || []);
    }, this.getCurrentViewport = function(M) {
      return M.copy(Y);
    }, this.getViewport = function(M) {
      return M.copy($);
    }, this.setViewport = function(M, G, X, k) {
      M.isVector4 ? $.set(M.x, M.y, M.z, M.w) : $.set(M, G, X, k), me.viewport(Y.copy($).multiplyScalar(he).round());
    }, this.getScissor = function(M) {
      return M.copy(ce);
    }, this.setScissor = function(M, G, X, k) {
      M.isVector4 ? ce.set(M.x, M.y, M.z, M.w) : ce.set(M, G, X, k), me.scissor(Z.copy(ce).multiplyScalar(he).round());
    }, this.getScissorTest = function() {
      return ve;
    }, this.setScissorTest = function(M) {
      me.setScissorTest(ve = M);
    }, this.setOpaqueSort = function(M) {
      q = M;
    }, this.setTransparentSort = function(M) {
      ie = M;
    }, this.getClearColor = function(M) {
      return M.copy(oe.getClearColor());
    }, this.setClearColor = function() {
      oe.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return oe.getClearAlpha();
    }, this.setClearAlpha = function() {
      oe.setClearAlpha(...arguments);
    }, this.clear = function(M = !0, G = !0, X = !0) {
      let k = 0;
      if (M) {
        let W = !1;
        if (D !== null) {
          const be = D.texture.format;
          W = p.has(be);
        }
        if (W) {
          const be = D.texture.type, Re = d.has(be), ye = oe.getClearColor(), Le = oe.getClearAlpha(), Fe = ye.r, Ye = ye.g, je = ye.b;
          Re ? (S[0] = Fe, S[1] = Ye, S[2] = je, S[3] = Le, O.clearBufferuiv(O.COLOR, 0, S)) : (y[0] = Fe, y[1] = Ye, y[2] = je, y[3] = Le, O.clearBufferiv(O.COLOR, 0, y));
        } else
          k |= O.COLOR_BUFFER_BIT;
      }
      G && (k |= O.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), X && (k |= O.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), k !== 0 && O.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(M) {
      M.setRenderer(this), L = M;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ee, !1), t.removeEventListener("webglcontextrestored", _e, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), oe.dispose(), j.dispose(), de.dispose(), A.dispose(), z.dispose(), fe.dispose(), ue.dispose(), J.dispose(), K.dispose(), se.dispose(), se.removeEventListener("sessionstart", Ut), se.removeEventListener("sessionend", Zt), Gt.stop();
    };
    function ee(M) {
      M.preventDefault(), Nr("WebGLRenderer: Context Lost."), C = !0;
    }
    function _e() {
      Nr("WebGLRenderer: Context Restored."), C = !1;
      const M = pt.autoReset, G = ae.enabled, X = ae.autoUpdate, k = ae.needsUpdate, W = ae.type;
      ge(), pt.autoReset = M, ae.enabled = G, ae.autoUpdate = X, ae.needsUpdate = k, ae.type = W;
    }
    function Be(M) {
      nt("WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function Ve(M) {
      const G = M.target;
      G.removeEventListener("dispose", Ve), We(G);
    }
    function We(M) {
      st(M), A.remove(M);
    }
    function st(M) {
      const G = A.get(M).programs;
      G !== void 0 && (G.forEach(function(X) {
        K.releaseProgram(X);
      }), M.isShaderMaterial && K.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, G, X, k, W, be) {
      G === null && (G = $e);
      const Re = W.isMesh && W.matrixWorld.determinant() < 0, ye = Jo(M, G, X, k, W);
      me.setMaterial(k, Re);
      let Le = X.index, Fe = 1;
      if (k.wireframe === !0) {
        if (Le = re.getWireframeAttribute(X), Le === void 0) return;
        Fe = 2;
      }
      const Ye = X.drawRange, je = X.attributes.position;
      let Ie = Ye.start * Fe, lt = (Ye.start + Ye.count) * Fe;
      be !== null && (Ie = Math.max(Ie, be.start * Fe), lt = Math.min(lt, (be.start + be.count) * Fe)), Le !== null ? (Ie = Math.max(Ie, 0), lt = Math.min(lt, Le.count)) : je != null && (Ie = Math.max(Ie, 0), lt = Math.min(lt, je.count));
      const Mt = lt - Ie;
      if (Mt < 0 || Mt === 1 / 0) return;
      ue.setup(W, k, ye, X, Le);
      let xt, ft = ze;
      if (Le !== null && (xt = Q.get(Le), ft = Ke, ft.setIndex(xt)), W.isMesh)
        k.wireframe === !0 ? (me.setLineWidth(k.wireframeLinewidth * yt()), ft.setMode(O.LINES)) : ft.setMode(O.TRIANGLES);
      else if (W.isLine) {
        let Nt = k.linewidth;
        Nt === void 0 && (Nt = 1), me.setLineWidth(Nt * yt()), W.isLineSegments ? ft.setMode(O.LINES) : W.isLineLoop ? ft.setMode(O.LINE_LOOP) : ft.setMode(O.LINE_STRIP);
      } else W.isPoints ? ft.setMode(O.POINTS) : W.isSprite && ft.setMode(O.TRIANGLES);
      if (W.isBatchedMesh)
        if (Pe.get("WEBGL_multi_draw"))
          ft.renderMultiDraw(W._multiDrawStarts, W._multiDrawCounts, W._multiDrawCount);
        else {
          const Nt = W._multiDrawStarts, we = W._multiDrawCounts, qt = W._multiDrawCount, it = Le ? Q.get(Le).bytesPerElement : 1, jt = A.get(k).currentProgram.getUniforms();
          for (let an = 0; an < qt; an++)
            jt.setValue(O, "_gl_DrawID", an), ft.render(Nt[an] / it, we[an]);
        }
      else if (W.isInstancedMesh)
        ft.renderInstances(Ie, Mt, W.count);
      else if (X.isInstancedBufferGeometry) {
        const Nt = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, we = Math.min(X.instanceCount, Nt);
        ft.renderInstances(Ie, Mt, we);
      } else
        ft.render(Ie, Mt);
    };
    function _t(M, G, X) {
      M.transparent === !0 && M.side === 2 && M.forceSinglePass === !1 ? (M.side = 1, M.needsUpdate = !0, ni(M, G, X), M.side = 0, M.needsUpdate = !0, ni(M, G, X), M.side = 2) : ni(M, G, X);
    }
    this.compile = function(M, G, X = null) {
      X === null && (X = M), E = de.get(X), E.init(G), _.push(E), X.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (E.pushLight(W), W.castShadow && E.pushShadow(W));
      }), M !== X && M.traverseVisible(function(W) {
        W.isLight && W.layers.test(G.layers) && (E.pushLight(W), W.castShadow && E.pushShadow(W));
      }), E.setupLights();
      const k = /* @__PURE__ */ new Set();
      return M.traverse(function(W) {
        if (!(W.isMesh || W.isPoints || W.isLine || W.isSprite))
          return;
        const be = W.material;
        if (be)
          if (Array.isArray(be))
            for (let Re = 0; Re < be.length; Re++) {
              const ye = be[Re];
              _t(ye, X, W), k.add(ye);
            }
          else
            _t(be, X, W), k.add(be);
      }), E = _.pop(), k;
    }, this.compileAsync = function(M, G, X = null) {
      const k = this.compile(M, G, X);
      return new Promise((W) => {
        function be() {
          if (k.forEach(function(Re) {
            A.get(Re).currentProgram.isReady() && k.delete(Re);
          }), k.size === 0) {
            W(M);
            return;
          }
          setTimeout(be, 10);
        }
        Pe.get("KHR_parallel_shader_compile") !== null ? be() : setTimeout(be, 10);
      });
    };
    let St = null;
    function It(M) {
      St && St(M);
    }
    function Ut() {
      Gt.stop();
    }
    function Zt() {
      Gt.start();
    }
    const Gt = new Oo();
    Gt.setAnimationLoop(It), typeof self < "u" && Gt.setContext(self), this.setAnimationLoop = function(M) {
      St = M, se.setAnimationLoop(M), M === null ? Gt.stop() : Gt.start();
    }, se.addEventListener("sessionstart", Ut), se.addEventListener("sessionend", Zt), this.render = function(M, G) {
      if (G !== void 0 && G.isCamera !== !0) {
        nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      L !== null && L.renderStart(M, G);
      const X = se.enabled === !0 && se.isPresenting === !0, k = T !== null && (D === null || X) && T.begin(F, D);
      if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), G.parent === null && G.matrixWorldAutoUpdate === !0 && G.updateMatrixWorld(), se.enabled === !0 && se.isPresenting === !0 && (T === null || T.isCompositing() === !1) && (se.cameraAutoUpdate === !0 && se.updateCamera(G), G = se.getCamera()), M.isScene === !0 && M.onBeforeRender(F, M, G, D), E = de.get(M, _.length), E.init(G), E.state.textureUnits = x.getTextureUnits(), _.push(E), Ae.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), ne.setFromProjectionMatrix(Ae, 2e3, G.reversedDepth), le = this.localClippingEnabled, Se = Me.init(this.clippingPlanes, le), w = j.get(M, R.length), w.init(), R.push(w), se.enabled === !0 && se.isPresenting === !0) {
        const Re = F.xr.getDepthSensingMesh();
        Re !== null && Ht(Re, G, -1 / 0, F.sortObjects);
      }
      Ht(M, G, 0, F.sortObjects), w.finish(), F.sortObjects === !0 && w.sort(q, ie), Xe = se.enabled === !1 || se.isPresenting === !1 || se.hasDepthSensing() === !1, Xe && oe.addToRenderList(w, M), this.info.render.frame++, Se === !0 && Me.beginShadows();
      const W = E.state.shadowsArray;
      if (ae.render(W, M, G), Se === !0 && Me.endShadows(), this.info.autoReset === !0 && this.info.reset(), (k && T.hasRenderPass()) === !1) {
        const Re = w.opaque, ye = w.transmissive;
        if (E.setupLights(), G.isArrayCamera) {
          const Le = G.cameras;
          if (ye.length > 0)
            for (let Fe = 0, Ye = Le.length; Fe < Ye; Fe++) {
              const je = Le[Fe];
              Xt(Re, ye, M, je);
            }
          Xe && oe.render(M);
          for (let Fe = 0, Ye = Le.length; Fe < Ye; Fe++) {
            const je = Le[Fe];
            kt(w, M, je, je.viewport);
          }
        } else
          ye.length > 0 && Xt(Re, ye, M, G), Xe && oe.render(M), kt(w, M, G);
      }
      D !== null && N === 0 && (x.updateMultisampleRenderTarget(D), x.updateRenderTargetMipmap(D)), k && T.end(F), M.isScene === !0 && M.onAfterRender(F, M, G), ue.resetDefaultState(), U = -1, B = null, _.pop(), _.length > 0 ? (E = _[_.length - 1], x.setTextureUnits(E.state.textureUnits), Se === !0 && Me.setGlobalState(F.clippingPlanes, E.state.camera)) : E = null, R.pop(), R.length > 0 ? w = R[R.length - 1] : w = null, L !== null && L.renderEnd();
    };
    function Ht(M, G, X, k) {
      if (M.visible === !1) return;
      if (M.layers.test(G.layers)) {
        if (M.isGroup)
          X = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(G);
        else if (M.isLightProbeGrid)
          E.pushLightProbeGrid(M);
        else if (M.isLight)
          E.pushLight(M), M.castShadow && E.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || ne.intersectsSprite(M)) {
            k && Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);
            const Re = fe.update(M), ye = M.material;
            ye.visible && w.push(M, Re, ye, X, Te.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || ne.intersectsObject(M))) {
          const Re = fe.update(M), ye = M.material;
          if (k && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Te.copy(M.boundingSphere.center)) : (Re.boundingSphere === null && Re.computeBoundingSphere(), Te.copy(Re.boundingSphere.center)), Te.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)), Array.isArray(ye)) {
            const Le = Re.groups;
            for (let Fe = 0, Ye = Le.length; Fe < Ye; Fe++) {
              const je = Le[Fe], Ie = ye[je.materialIndex];
              Ie && Ie.visible && w.push(M, Re, Ie, X, Te.z, je);
            }
          } else ye.visible && w.push(M, Re, ye, X, Te.z, null);
        }
      }
      const be = M.children;
      for (let Re = 0, ye = be.length; Re < ye; Re++)
        Ht(be[Re], G, X, k);
    }
    function kt(M, G, X, k) {
      const { opaque: W, transmissive: be, transparent: Re } = M;
      E.setupLightsView(X), Se === !0 && Me.setGlobalState(F.clippingPlanes, X), k && me.viewport(Y.copy(k)), W.length > 0 && Tn(W, G, X), be.length > 0 && Tn(be, G, X), Re.length > 0 && Tn(Re, G, X), me.buffers.depth.setTest(!0), me.buffers.depth.setMask(!0), me.buffers.color.setMask(!0), me.setPolygonOffset(!1);
    }
    function Xt(M, G, X, k) {
      if ((X.isScene === !0 ? X.overrideMaterial : null) !== null)
        return;
      if (E.state.transmissionRenderTarget[k.id] === void 0) {
        const Ie = Pe.has("EXT_color_buffer_half_float") || Pe.has("EXT_color_buffer_float");
        E.state.transmissionRenderTarget[k.id] = new hn(1, 1, {
          generateMipmaps: !0,
          type: Ie ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, tt.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Qe.workingColorSpace
        });
      }
      const be = E.state.transmissionRenderTarget[k.id], Re = k.viewport || Y;
      be.setSize(Re.z * F.transmissionResolutionScale, Re.w * F.transmissionResolutionScale);
      const ye = F.getRenderTarget(), Le = F.getActiveCubeFace(), Fe = F.getActiveMipmapLevel();
      F.setRenderTarget(be), F.getClearColor(pe), xe = F.getClearAlpha(), xe < 1 && F.setClearColor(16777215, 0.5), F.clear(), Xe && oe.render(X);
      const Ye = F.toneMapping;
      F.toneMapping = 0;
      const je = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), E.setupLightsView(k), Se === !0 && Me.setGlobalState(F.clippingPlanes, k), Tn(M, X, k), x.updateMultisampleRenderTarget(be), x.updateRenderTargetMipmap(be), Pe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ie = !1;
        for (let lt = 0, Mt = G.length; lt < Mt; lt++) {
          const xt = G[lt], { object: ft, geometry: Nt, material: we, group: qt } = xt;
          if (we.side === 2 && ft.layers.test(k.layers)) {
            const it = we.side;
            we.side = 1, we.needsUpdate = !0, ti(ft, X, k, Nt, we, qt), we.side = it, we.needsUpdate = !0, Ie = !0;
          }
        }
        Ie === !0 && (x.updateMultisampleRenderTarget(be), x.updateRenderTargetMipmap(be));
      }
      F.setRenderTarget(ye, Le, Fe), F.setClearColor(pe, xe), je !== void 0 && (k.viewport = je), F.toneMapping = Ye;
    }
    function Tn(M, G, X) {
      const k = G.isScene === !0 ? G.overrideMaterial : null;
      for (let W = 0, be = M.length; W < be; W++) {
        const Re = M[W], { object: ye, geometry: Le, group: Fe } = Re;
        let Ye = Re.material;
        Ye.allowOverride === !0 && k !== null && (Ye = k), ye.layers.test(X.layers) && ti(ye, G, X, Le, Ye, Fe);
      }
    }
    function ti(M, G, X, k, W, be) {
      M.onBeforeRender(F, G, X, k, W, be), M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), W.onBeforeRender(F, G, X, k, M, be), W.transparent === !0 && W.side === 2 && W.forceSinglePass === !1 ? (W.side = 1, W.needsUpdate = !0, F.renderBufferDirect(X, G, k, W, M, be), W.side = 0, W.needsUpdate = !0, F.renderBufferDirect(X, G, k, W, M, be), W.side = 2) : F.renderBufferDirect(X, G, k, W, M, be), M.onAfterRender(F, G, X, k, W, be);
    }
    function ni(M, G, X) {
      G.isScene !== !0 && (G = $e);
      const k = A.get(M), W = E.state.lights, be = E.state.shadowsArray, Re = W.state.version, ye = K.getParameters(M, W.state, be, G, X, E.state.lightProbeGridArray), Le = K.getProgramCacheKey(ye);
      let Fe = k.programs;
      k.environment = M.isMeshStandardMaterial || M.isMeshLambertMaterial || M.isMeshPhongMaterial ? G.environment : null, k.fog = G.fog;
      const Ye = M.isMeshStandardMaterial || M.isMeshLambertMaterial && !M.envMap || M.isMeshPhongMaterial && !M.envMap;
      k.envMap = z.get(M.envMap || k.environment, Ye), k.envMapRotation = k.environment !== null && M.envMap === null ? G.environmentRotation : M.envMapRotation, Fe === void 0 && (M.addEventListener("dispose", Ve), Fe = /* @__PURE__ */ new Map(), k.programs = Fe);
      let je = Fe.get(Le);
      if (je !== void 0) {
        if (k.currentProgram === je && k.lightsStateVersion === Re)
          return Zs(M, ye), je;
      } else
        ye.uniforms = K.getUniforms(M), L !== null && M.isNodeMaterial && L.build(M, X, ye), M.onBeforeCompile(ye, F), je = K.acquireProgram(ye, Le), Fe.set(Le, je), k.uniforms = ye.uniforms;
      const Ie = k.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ie.clippingPlanes = Me.uniform), Zs(M, ye), k.needsLights = el(M), k.lightsStateVersion = Re, k.needsLights && (Ie.ambientLightColor.value = W.state.ambient, Ie.lightProbe.value = W.state.probe, Ie.directionalLights.value = W.state.directional, Ie.directionalLightShadows.value = W.state.directionalShadow, Ie.spotLights.value = W.state.spot, Ie.spotLightShadows.value = W.state.spotShadow, Ie.rectAreaLights.value = W.state.rectArea, Ie.ltc_1.value = W.state.rectAreaLTC1, Ie.ltc_2.value = W.state.rectAreaLTC2, Ie.pointLights.value = W.state.point, Ie.pointLightShadows.value = W.state.pointShadow, Ie.hemisphereLights.value = W.state.hemi, Ie.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Ie.spotLightMatrix.value = W.state.spotLightMatrix, Ie.spotLightMap.value = W.state.spotLightMap, Ie.pointShadowMatrix.value = W.state.pointShadowMatrix), k.lightProbeGrid = E.state.lightProbeGridArray.length > 0, k.currentProgram = je, k.uniformsList = null, je;
    }
    function Zi(M) {
      if (M.uniformsList === null) {
        const G = M.currentProgram.getUniforms();
        M.uniformsList = Dr.seqWithValue(G.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Zs(M, G) {
      const X = A.get(M);
      X.outputColorSpace = G.outputColorSpace, X.batching = G.batching, X.batchingColor = G.batchingColor, X.instancing = G.instancing, X.instancingColor = G.instancingColor, X.instancingMorph = G.instancingMorph, X.skinning = G.skinning, X.morphTargets = G.morphTargets, X.morphNormals = G.morphNormals, X.morphColors = G.morphColors, X.morphTargetsCount = G.morphTargetsCount, X.numClippingPlanes = G.numClippingPlanes, X.numIntersection = G.numClipIntersection, X.vertexAlphas = G.vertexAlphas, X.vertexTangents = G.vertexTangents, X.toneMapping = G.toneMapping;
    }
    function jo(M, G) {
      if (M.length === 0) return null;
      if (M.length === 1)
        return M[0].texture !== null ? M[0] : null;
      b.setFromMatrixPosition(G.matrixWorld);
      for (let X = 0, k = M.length; X < k; X++) {
        const W = M[X];
        if (W.texture !== null && W.boundingBox.containsPoint(b)) return W;
      }
      return null;
    }
    function Jo(M, G, X, k, W) {
      G.isScene !== !0 && (G = $e), x.resetTextureUnits();
      const be = G.fog, Re = k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial ? G.environment : null, ye = D === null ? F.outputColorSpace : D.isXRRenderTarget === !0 ? D.texture.colorSpace : Qe.workingColorSpace, Le = k.isMeshStandardMaterial || k.isMeshLambertMaterial && !k.envMap || k.isMeshPhongMaterial && !k.envMap, Fe = z.get(k.envMap || Re, Le), Ye = k.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, je = !!X.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ie = !!X.morphAttributes.position, lt = !!X.morphAttributes.normal, Mt = !!X.morphAttributes.color;
      let xt = 0;
      k.toneMapped && (D === null || D.isXRRenderTarget === !0) && (xt = F.toneMapping);
      const ft = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Nt = ft !== void 0 ? ft.length : 0, we = A.get(k), qt = E.state.lights;
      if (Se === !0 && (le === !0 || M !== B)) {
        const mt = M === B && k.id === U;
        Me.setState(k, M, mt);
      }
      let it = !1;
      k.version === we.__version ? (we.needsLights && we.lightsStateVersion !== qt.state.version || we.outputColorSpace !== ye || W.isBatchedMesh && we.batching === !1 || !W.isBatchedMesh && we.batching === !0 || W.isBatchedMesh && we.batchingColor === !0 && W.colorTexture === null || W.isBatchedMesh && we.batchingColor === !1 && W.colorTexture !== null || W.isInstancedMesh && we.instancing === !1 || !W.isInstancedMesh && we.instancing === !0 || W.isSkinnedMesh && we.skinning === !1 || !W.isSkinnedMesh && we.skinning === !0 || W.isInstancedMesh && we.instancingColor === !0 && W.instanceColor === null || W.isInstancedMesh && we.instancingColor === !1 && W.instanceColor !== null || W.isInstancedMesh && we.instancingMorph === !0 && W.morphTexture === null || W.isInstancedMesh && we.instancingMorph === !1 && W.morphTexture !== null || we.envMap !== Fe || k.fog === !0 && we.fog !== be || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== Me.numPlanes || we.numIntersection !== Me.numIntersection) || we.vertexAlphas !== Ye || we.vertexTangents !== je || we.morphTargets !== Ie || we.morphNormals !== lt || we.morphColors !== Mt || we.toneMapping !== xt || we.morphTargetsCount !== Nt || !!we.lightProbeGrid != E.state.lightProbeGridArray.length > 0) && (it = !0) : (it = !0, we.__version = k.version);
      let jt = we.currentProgram;
      it === !0 && (jt = ni(k, G, W), L && k.isNodeMaterial && L.onUpdateProgram(k, jt, we));
      let an = !1, An = !1, ii = !1;
      const ht = jt.getUniforms(), Et = we.uniforms;
      if (me.useProgram(jt.program) && (an = !0, An = !0, ii = !0), k.id !== U && (U = k.id, An = !0), we.needsLights) {
        const mt = jo(E.state.lightProbeGridArray, W);
        we.lightProbeGrid !== mt && (we.lightProbeGrid = mt, An = !0);
      }
      if (an || B !== M) {
        me.buffers.depth.getReversed() && M.reversedDepth !== !0 && (M._reversedDepth = !0, M.updateProjectionMatrix()), ht.setValue(O, "projectionMatrix", M.projectionMatrix), ht.setValue(O, "viewMatrix", M.matrixWorldInverse);
        const Rn = ht.map.cameraPosition;
        Rn !== void 0 && Rn.setValue(O, Ge.setFromMatrixPosition(M.matrixWorld)), tt.logarithmicDepthBuffer && ht.setValue(
          O,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && ht.setValue(O, "isOrthographic", M.isOrthographicCamera === !0), B !== M && (B = M, An = !0, ii = !0);
      }
      if (we.needsLights && (qt.state.directionalShadowMap.length > 0 && ht.setValue(O, "directionalShadowMap", qt.state.directionalShadowMap, x), qt.state.spotShadowMap.length > 0 && ht.setValue(O, "spotShadowMap", qt.state.spotShadowMap, x), qt.state.pointShadowMap.length > 0 && ht.setValue(O, "pointShadowMap", qt.state.pointShadowMap, x)), W.isSkinnedMesh) {
        ht.setOptional(O, W, "bindMatrix"), ht.setOptional(O, W, "bindMatrixInverse");
        const mt = W.skeleton;
        mt && (mt.boneTexture === null && mt.computeBoneTexture(), ht.setValue(O, "boneTexture", mt.boneTexture, x));
      }
      W.isBatchedMesh && (ht.setOptional(O, W, "batchingTexture"), ht.setValue(O, "batchingTexture", W._matricesTexture, x), ht.setOptional(O, W, "batchingIdTexture"), ht.setValue(O, "batchingIdTexture", W._indirectTexture, x), ht.setOptional(O, W, "batchingColorTexture"), W._colorsTexture !== null && ht.setValue(O, "batchingColorTexture", W._colorsTexture, x));
      const wn = X.morphAttributes;
      if ((wn.position !== void 0 || wn.normal !== void 0 || wn.color !== void 0) && Ue.update(W, X, jt), (An || we.receiveShadow !== W.receiveShadow) && (we.receiveShadow = W.receiveShadow, ht.setValue(O, "receiveShadow", W.receiveShadow)), (k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial) && k.envMap === null && G.environment !== null && (Et.envMapIntensity.value = G.environmentIntensity), Et.dfgLUT !== void 0 && (Et.dfgLUT.value = Kd()), An) {
        if (ht.setValue(O, "toneMappingExposure", F.toneMappingExposure), we.needsLights && Qo(Et, ii), be && k.fog === !0 && V.refreshFogUniforms(Et, be), V.refreshMaterialUniforms(Et, k, he, ke, E.state.transmissionRenderTarget[M.id]), we.needsLights && we.lightProbeGrid) {
          const mt = we.lightProbeGrid;
          Et.probesSH.value = mt.texture, Et.probesMin.value.copy(mt.boundingBox.min), Et.probesMax.value.copy(mt.boundingBox.max), Et.probesResolution.value.copy(mt.resolution);
        }
        Dr.upload(O, Zi(we), Et, x);
      }
      if (k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (Dr.upload(O, Zi(we), Et, x), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && ht.setValue(O, "center", W.center), ht.setValue(O, "modelViewMatrix", W.modelViewMatrix), ht.setValue(O, "normalMatrix", W.normalMatrix), ht.setValue(O, "modelMatrix", W.matrixWorld), k.uniformsGroups !== void 0) {
        const mt = k.uniformsGroups;
        for (let Rn = 0, ri = mt.length; Rn < ri; Rn++) {
          const js = mt[Rn];
          J.update(js, jt), J.bind(js, jt);
        }
      }
      return jt;
    }
    function Qo(M, G) {
      M.ambientLightColor.needsUpdate = G, M.lightProbe.needsUpdate = G, M.directionalLights.needsUpdate = G, M.directionalLightShadows.needsUpdate = G, M.pointLights.needsUpdate = G, M.pointLightShadows.needsUpdate = G, M.spotLights.needsUpdate = G, M.spotLightShadows.needsUpdate = G, M.rectAreaLights.needsUpdate = G, M.hemisphereLights.needsUpdate = G;
    }
    function el(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return H;
    }, this.getActiveMipmapLevel = function() {
      return N;
    }, this.getRenderTarget = function() {
      return D;
    }, this.setRenderTargetTextures = function(M, G, X) {
      const k = A.get(M);
      k.__autoAllocateDepthBuffer = M.resolveDepthBuffer === !1, k.__autoAllocateDepthBuffer === !1 && (k.__useRenderToTexture = !1), A.get(M.texture).__webglTexture = G, A.get(M.depthTexture).__webglTexture = k.__autoAllocateDepthBuffer ? void 0 : X, k.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(M, G) {
      const X = A.get(M);
      X.__webglFramebuffer = G, X.__useDefaultFramebuffer = G === void 0;
    };
    const tl = O.createFramebuffer();
    this.setRenderTarget = function(M, G = 0, X = 0) {
      D = M, H = G, N = X;
      let k = null, W = !1, be = !1;
      if (M) {
        const ye = A.get(M);
        if (ye.__useDefaultFramebuffer !== void 0) {
          me.bindFramebuffer(O.FRAMEBUFFER, ye.__webglFramebuffer), Y.copy(M.viewport), Z.copy(M.scissor), te = M.scissorTest, me.viewport(Y), me.scissor(Z), me.setScissorTest(te), U = -1;
          return;
        } else if (ye.__webglFramebuffer === void 0)
          x.setupRenderTarget(M);
        else if (ye.__hasExternalTextures)
          x.rebindTextures(M, A.get(M.texture).__webglTexture, A.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const Ye = M.depthTexture;
          if (ye.__boundDepthTexture !== Ye) {
            if (Ye !== null && A.has(Ye) && (M.width !== Ye.image.width || M.height !== Ye.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            x.setupDepthRenderbuffer(M);
          }
        }
        const Le = M.texture;
        (Le.isData3DTexture || Le.isDataArrayTexture || Le.isCompressedArrayTexture) && (be = !0);
        const Fe = A.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Fe[G]) ? k = Fe[G][X] : k = Fe[G], W = !0) : M.samples > 0 && x.useMultisampledRTT(M) === !1 ? k = A.get(M).__webglMultisampledFramebuffer : Array.isArray(Fe) ? k = Fe[X] : k = Fe, Y.copy(M.viewport), Z.copy(M.scissor), te = M.scissorTest;
      } else
        Y.copy($).multiplyScalar(he).floor(), Z.copy(ce).multiplyScalar(he).floor(), te = ve;
      if (X !== 0 && (k = tl), me.bindFramebuffer(O.FRAMEBUFFER, k) && me.drawBuffers(M, k), me.viewport(Y), me.scissor(Z), me.setScissorTest(te), W) {
        const ye = A.get(M.texture);
        O.framebufferTexture2D(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_CUBE_MAP_POSITIVE_X + G, ye.__webglTexture, X);
      } else if (be) {
        const ye = G;
        for (let Le = 0; Le < M.textures.length; Le++) {
          const Fe = A.get(M.textures[Le]);
          O.framebufferTextureLayer(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0 + Le, Fe.__webglTexture, X, ye);
        }
      } else if (M !== null && X !== 0) {
        const ye = A.get(M.texture);
        O.framebufferTexture2D(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, ye.__webglTexture, X);
      }
      U = -1;
    }, this.readRenderTargetPixels = function(M, G, X, k, W, be, Re, ye = 0) {
      if (!(M && M.isWebGLRenderTarget)) {
        nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Le = A.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && Re !== void 0 && (Le = Le[Re]), Le) {
        me.bindFramebuffer(O.FRAMEBUFFER, Le);
        try {
          const Fe = M.textures[ye], Ye = Fe.format, je = Fe.type;
          if (M.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + ye), !tt.textureFormatReadable(Ye)) {
            nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!tt.textureTypeReadable(je)) {
            nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          G >= 0 && G <= M.width - k && X >= 0 && X <= M.height - W && O.readPixels(G, X, k, W, I.convert(Ye), I.convert(je), be);
        } finally {
          const Fe = D !== null ? A.get(D).__webglFramebuffer : null;
          me.bindFramebuffer(O.FRAMEBUFFER, Fe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, G, X, k, W, be, Re, ye = 0) {
      if (!(M && M.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Le = A.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && Re !== void 0 && (Le = Le[Re]), Le)
        if (G >= 0 && G <= M.width - k && X >= 0 && X <= M.height - W) {
          me.bindFramebuffer(O.FRAMEBUFFER, Le);
          const Fe = M.textures[ye], Ye = Fe.format, je = Fe.type;
          if (M.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + ye), !tt.textureFormatReadable(Ye))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!tt.textureTypeReadable(je))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ie = O.createBuffer();
          O.bindBuffer(O.PIXEL_PACK_BUFFER, Ie), O.bufferData(O.PIXEL_PACK_BUFFER, be.byteLength, O.STREAM_READ), O.readPixels(G, X, k, W, I.convert(Ye), I.convert(je), 0);
          const lt = D !== null ? A.get(D).__webglFramebuffer : null;
          me.bindFramebuffer(O.FRAMEBUFFER, lt);
          const Mt = O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return O.flush(), await al(O, Mt, 4), O.bindBuffer(O.PIXEL_PACK_BUFFER, Ie), O.getBufferSubData(O.PIXEL_PACK_BUFFER, 0, be), O.deleteBuffer(Ie), O.deleteSync(Mt), be;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(M, G = null, X = 0) {
      const k = Math.pow(2, -X), W = Math.floor(M.image.width * k), be = Math.floor(M.image.height * k), Re = G !== null ? G.x : 0, ye = G !== null ? G.y : 0;
      x.setTexture2D(M, 0), O.copyTexSubImage2D(O.TEXTURE_2D, X, 0, 0, Re, ye, W, be), me.unbindTexture();
    };
    const nl = O.createFramebuffer(), il = O.createFramebuffer();
    this.copyTextureToTexture = function(M, G, X = null, k = null, W = 0, be = 0) {
      let Re, ye, Le, Fe, Ye, je, Ie, lt, Mt;
      const xt = M.isCompressedTexture ? M.mipmaps[be] : M.image;
      if (X !== null)
        Re = X.max.x - X.min.x, ye = X.max.y - X.min.y, Le = X.isBox3 ? X.max.z - X.min.z : 1, Fe = X.min.x, Ye = X.min.y, je = X.isBox3 ? X.min.z : 0;
      else {
        const Et = Math.pow(2, -W);
        Re = Math.floor(xt.width * Et), ye = Math.floor(xt.height * Et), M.isDataArrayTexture ? Le = xt.depth : M.isData3DTexture ? Le = Math.floor(xt.depth * Et) : Le = 1, Fe = 0, Ye = 0, je = 0;
      }
      k !== null ? (Ie = k.x, lt = k.y, Mt = k.z) : (Ie = 0, lt = 0, Mt = 0);
      const ft = I.convert(G.format), Nt = I.convert(G.type);
      let we;
      G.isData3DTexture ? (x.setTexture3D(G, 0), we = O.TEXTURE_3D) : G.isDataArrayTexture || G.isCompressedArrayTexture ? (x.setTexture2DArray(G, 0), we = O.TEXTURE_2D_ARRAY) : (x.setTexture2D(G, 0), we = O.TEXTURE_2D), me.activeTexture(O.TEXTURE0), me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, G.flipY), me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), me.pixelStorei(O.UNPACK_ALIGNMENT, G.unpackAlignment);
      const qt = me.getParameter(O.UNPACK_ROW_LENGTH), it = me.getParameter(O.UNPACK_IMAGE_HEIGHT), jt = me.getParameter(O.UNPACK_SKIP_PIXELS), an = me.getParameter(O.UNPACK_SKIP_ROWS), An = me.getParameter(O.UNPACK_SKIP_IMAGES);
      me.pixelStorei(O.UNPACK_ROW_LENGTH, xt.width), me.pixelStorei(O.UNPACK_IMAGE_HEIGHT, xt.height), me.pixelStorei(O.UNPACK_SKIP_PIXELS, Fe), me.pixelStorei(O.UNPACK_SKIP_ROWS, Ye), me.pixelStorei(O.UNPACK_SKIP_IMAGES, je);
      const ii = M.isDataArrayTexture || M.isData3DTexture, ht = G.isDataArrayTexture || G.isData3DTexture;
      if (M.isDepthTexture) {
        const Et = A.get(M), wn = A.get(G), mt = A.get(Et.__renderTarget), Rn = A.get(wn.__renderTarget);
        me.bindFramebuffer(O.READ_FRAMEBUFFER, mt.__webglFramebuffer), me.bindFramebuffer(O.DRAW_FRAMEBUFFER, Rn.__webglFramebuffer);
        for (let ri = 0; ri < Le; ri++)
          ii && (O.framebufferTextureLayer(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, A.get(M).__webglTexture, W, je + ri), O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, A.get(G).__webglTexture, be, Mt + ri)), O.blitFramebuffer(Fe, Ye, Re, ye, Ie, lt, Re, ye, O.DEPTH_BUFFER_BIT, O.NEAREST);
        me.bindFramebuffer(O.READ_FRAMEBUFFER, null), me.bindFramebuffer(O.DRAW_FRAMEBUFFER, null);
      } else if (W !== 0 || M.isRenderTargetTexture || A.has(M)) {
        const Et = A.get(M), wn = A.get(G);
        me.bindFramebuffer(O.READ_FRAMEBUFFER, nl), me.bindFramebuffer(O.DRAW_FRAMEBUFFER, il);
        for (let mt = 0; mt < Le; mt++)
          ii ? O.framebufferTextureLayer(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, Et.__webglTexture, W, je + mt) : O.framebufferTexture2D(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, Et.__webglTexture, W), ht ? O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, wn.__webglTexture, be, Mt + mt) : O.framebufferTexture2D(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, wn.__webglTexture, be), W !== 0 ? O.blitFramebuffer(Fe, Ye, Re, ye, Ie, lt, Re, ye, O.COLOR_BUFFER_BIT, O.NEAREST) : ht ? O.copyTexSubImage3D(we, be, Ie, lt, Mt + mt, Fe, Ye, Re, ye) : O.copyTexSubImage2D(we, be, Ie, lt, Fe, Ye, Re, ye);
        me.bindFramebuffer(O.READ_FRAMEBUFFER, null), me.bindFramebuffer(O.DRAW_FRAMEBUFFER, null);
      } else
        ht ? M.isDataTexture || M.isData3DTexture ? O.texSubImage3D(we, be, Ie, lt, Mt, Re, ye, Le, ft, Nt, xt.data) : G.isCompressedArrayTexture ? O.compressedTexSubImage3D(we, be, Ie, lt, Mt, Re, ye, Le, ft, xt.data) : O.texSubImage3D(we, be, Ie, lt, Mt, Re, ye, Le, ft, Nt, xt) : M.isDataTexture ? O.texSubImage2D(O.TEXTURE_2D, be, Ie, lt, Re, ye, ft, Nt, xt.data) : M.isCompressedTexture ? O.compressedTexSubImage2D(O.TEXTURE_2D, be, Ie, lt, xt.width, xt.height, ft, xt.data) : O.texSubImage2D(O.TEXTURE_2D, be, Ie, lt, Re, ye, ft, Nt, xt);
      me.pixelStorei(O.UNPACK_ROW_LENGTH, qt), me.pixelStorei(O.UNPACK_IMAGE_HEIGHT, it), me.pixelStorei(O.UNPACK_SKIP_PIXELS, jt), me.pixelStorei(O.UNPACK_SKIP_ROWS, an), me.pixelStorei(O.UNPACK_SKIP_IMAGES, An), be === 0 && G.generateMipmaps && O.generateMipmap(we), me.unbindTexture();
    }, this.initRenderTarget = function(M) {
      A.get(M).__webglFramebuffer === void 0 && x.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? x.setTextureCube(M, 0) : M.isData3DTexture ? x.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? x.setTexture2DArray(M, 0) : x.setTexture2D(M, 0), me.unbindTexture();
    }, this.resetState = function() {
      H = 0, N = 0, D = null, me.reset(), ue.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return 2e3;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Qe._getUnpackColorSpace();
  }
}
const Ti = 4, Mn = 2.2, Zn = 0.05, jd = 0.03, Xr = 724240, bi = 8e-3, $i = 7122068, Jd = 9419964, no = [
  "DetectorBackbone",
  "LandmarkerBackbone",
  "Vgg16Journey",
  "BatchNorm",
  "ChannelMLP",
  "PointwiseConvLayer",
  "DepthwiseConvLayer",
  "ActivationGate",
  "PoolLayer",
  "ResidualAdd",
  "BlockChip",
  "LateralTap",
  "UpsampleLayer",
  "AddJoin",
  "RegressionHead",
  "ConvLayer"
], Qd = [
  {
    id: "pixels",
    page: "sandbox",
    seconds: 18,
    fov: 62,
    speed: 1,
    ease: "inout",
    labels: !1,
    hide: no,
    note: "inside the 3-channel PixelStack: looking up between the slices, slowly turning toward the lattice",
    keys: [
      { t: 0, cam: [-9.5, 1, 21.17], target: [-9.5, 3.8, 21.2] },
      { t: 0.5, cam: [-9.53, 1.45, 21.16], target: [-10.3, 3.6, 21.05] },
      { t: 1, cam: [-9.56, 1.9, 21.14], target: [-11.2, 3, 20.95] }
    ]
  },
  {
    id: "stream",
    page: "sandbox",
    seconds: 7,
    fov: 55,
    speed: 1,
    ease: "linear",
    labels: !1,
    hide: no,
    note: "from inside the video stream, looking back at the vanishing point, drifting out past the frame slicing",
    // seconds 9–16 of the original 18 s dolly (cam z −8 → 6.5, target z −60 →
    // −12): #267 cut the first five seconds, #284 four more at the front and
    // two added at the back (user review) — same dolly speed
    keys: [
      { t: 0, cam: [-8.35, 2.55, -0.75], target: [-9.5, 2, -36] },
      { t: 1, cam: [-7.77, 2.74, 4.89], target: [-9.5, 2, -17.3] }
    ]
  },
  {
    id: "macro",
    page: "convolution",
    seconds: 14,
    fov: 40,
    speed: 1,
    ease: "inout",
    labels: !1,
    note: "the sliding kernel, close: a 3×3 window walking the binary image, a slow rise from below",
    keys: [
      { t: 0, cam: [-1.6, 1.8, 12.2], target: [0.1, 2.6, 11.4] },
      { t: 1, cam: [0.9, 3.1, 13], target: [0, 2.5, 11.3] }
    ]
  },
  {
    id: "grand",
    page: "vgg16",
    seconds: 16,
    fov: 50,
    speed: 1,
    ease: "inout",
    labels: !1,
    note: "VGG-16, the whole chain as a skyline: a slow drift along the west side",
    keys: [
      { t: 0, cam: [-22, 4, 8], target: [2, 2.5, 29] },
      { t: 1, cam: [-19, 5.5, 15], target: [2.5, 2.5, 33] }
    ]
  },
  // Capture-only (the live hero skips it: the AlexNet journey loads atlas
  // images worth megabytes, which the landing must not fetch — plan §4).
  {
    id: "hall",
    page: "alexnet",
    seconds: 16,
    fov: 50,
    speed: 1.5,
    ease: "inout",
    labels: !1,
    note: "AlexNet main hall, every conv sweeping (1.5×): a slow crane from the west wall over the lane",
    keys: [
      { t: 0, cam: [36.5, 3.5, 47], target: [38.1, 2.2, 42] },
      { t: 0.5, cam: [40, 5.5, 52], target: [38.3, 2.1, 40] },
      { t: 1, cam: [43.5, 5.5, 55], target: [38.5, 2, 39] }
    ]
  }
], ep = ["pixels", "stream", "macro", "grand"], tp = (i, e) => i === "linear" ? e : e * e * e * (e * (e * 6 - 15) + 10);
function io(i, e, t) {
  const n = i.length;
  if (n === 1) return i[0][e].slice();
  let r = 0;
  for (; r < n - 2 && t > i[r + 1].t; ) r++;
  const s = i[Math.max(0, r - 1)], a = i[r], o = i[r + 1], c = i[Math.min(n - 1, r + 2)], l = o.t - a.t || 1, f = Math.max(0, Math.min(1, (t - a.t) / l)), h = [];
  for (let u = 0; u < 3; u++) {
    const m = s[e][u], g = a[e][u], v = o[e][u], p = c[e][u];
    h.push(0.5 * (2 * g + (-m + v) * f + (2 * m - 5 * g + 4 * v - p) * f * f + (-m + 3 * g - 3 * v + p) * f * f * f));
  }
  return h;
}
function Ft(i) {
  const e = (
    /** @type {T & { dispose: () => void }} */
    i
  );
  return e.dispose = () => {
    e.traverse((t) => {
      const n = (
        /** @type {any} */
        t
      );
      n.geometry?.dispose?.();
      const r = Array.isArray(n.material) ? n.material : n.material ? [n.material] : [];
      for (const s of r)
        s.map?.dispose?.(), s.dispose();
    });
  }, e;
}
function np({
  width: i = 1920,
  height: e = 1080,
  channels: t = "C",
  worldHeight: n = 4,
  depth: r = 40,
  // how far the volume runs into the distance
  color: s = 9082019,
  fade: a = Xr
  // background color the far end dissolves into
} = {}) {
  const o = n * (i / e) / 2, c = n / 2, l = [[-o, -c], [o, -c], [o, c], [-o, c]], f = new De(s), h = new De(a), u = new De(), m = [], g = [], v = (S, y, b, w, E, R) => {
    m.push(S, y, b, w, E, R);
    for (const _ of [b, R])
      u.copy(f).lerp(h, Math.min(1, -_ / r)), g.push(u.r, u.g, u.b);
  };
  for (let S = 0; S < 4; S++) {
    const [y, b] = l[S], [w, E] = l[(S + 1) % 4];
    v(y, b, 0, w, E, 0);
  }
  for (const [S, y] of l) v(S, y, 0, S, y, -r);
  const p = new Oe();
  p.setAttribute("position", new Ne(m, 3)), p.setAttribute("color", new Ne(g, 3));
  const d = new Tt(p, new rt({ vertexColors: !0 }));
  return d.name = "VideoStream", d.userData = { component: "VideoStream", width: i, height: e, channels: t }, Ft(d);
}
function ip({
  width: i = 1920,
  height: e = 1080,
  worldHeight: t = 4,
  count: n = 100,
  extent: r = 6,
  // how far forward the last frame sits
  curve: s = 8,
  // higher => tighter packing at the dense back
  color: a = 9082019
} = {}) {
  const o = t * (i / e) / 2, c = t / 2, l = new Oe().setFromPoints([
    new P(-o, -c, 0),
    new P(o, -c, 0),
    new P(o, c, 0),
    new P(-o, c, 0)
  ]), f = new dt();
  for (let h = 0; h < n; h++) {
    const u = h / (n - 1), m = r * Math.pow(1 - u, s), g = 0.35 + 0.4 * u, v = new Kn(
      l,
      new rt({ color: a, transparent: !0, opacity: g })
    );
    v.position.z = m, f.add(v);
  }
  return f.name = "FrameSequence", f.userData = { component: "FrameSequence", count: n, note: "opencv frame slicing" }, Ft(f);
}
function rp({
  width: i = 1920,
  height: e = 1080,
  worldHeight: t = 4,
  color: n = 16777215,
  name: r = "FrameRect",
  component: s = "FrameRect",
  channels: a = 3
} = {}) {
  const o = t * (i / e) / 2, c = t / 2, l = new Oe().setFromPoints([
    new P(-o, -c, 0),
    new P(o, -c, 0),
    new P(o, c, 0),
    new P(-o, c, 0)
  ]), f = new Kn(l, new rt({ color: n }));
  return f.name = r, f.userData = { component: s, width: i, height: e, channels: a }, Ft(f);
}
function sp({
  width: i = 256,
  height: e = 256,
  size: t = 4,
  // world span of the longest side
  pointSize: n = 1.5,
  color: r = 13620960,
  colorFor: s = null
  // optional (localX, localY) => hex; enables per-pixel color
} = {}) {
  const a = t / (Math.max(i, e) - 1), o = new Float32Array(i * e * 3), c = s ? new Float32Array(i * e * 3) : null, l = new De();
  let f = 0, h = 0;
  for (let v = 0; v < e; v++)
    for (let p = 0; p < i; p++) {
      const d = (p - (i - 1) / 2) * a, S = (v - (e - 1) / 2) * a;
      o[f++] = d, o[f++] = S, o[f++] = 0, c && (l.set(s(d, S)), c[h++] = l.r, c[h++] = l.g, c[h++] = l.b);
    }
  const u = new Oe();
  u.setAttribute("position", new Pt(o, 3)), c && u.setAttribute("color", new Pt(c, 3));
  const m = new sn({
    color: c ? 16777215 : r,
    size: n,
    sizeAttenuation: !1,
    vertexColors: !!c
  }), g = new dn(u, m);
  return g.name = "PixelField", g.userData = {
    component: "PixelField",
    width: i,
    height: e,
    channels: 1,
    pixelCount: i * e
  }, Ft(g);
}
function ap({
  width: i = 256,
  height: e = 256,
  size: t = 4,
  channels: n = 3,
  gap: r = 0.35,
  pointSize: s = 1.5,
  colors: a = [6588605, 6989946, 12742766],
  // BGR: blue, green, red
  colorFor: o = null
  // optional (localX, localY, channel) => hex; overrides `colors`
} = {}) {
  const c = new dt();
  for (let l = 0; l < n; l++) {
    const f = sp({
      width: i,
      height: e,
      size: t,
      pointSize: s,
      color: a[l % a.length],
      colorFor: o ? (h, u) => o(h, u, l) : null
    });
    f.position.z = (l - (n - 1) / 2) * r, c.add(f);
  }
  return c.name = "PixelStack", c.userData = {
    component: "PixelStack",
    width: i,
    height: e,
    channels: n,
    pixelCount: i * e * n
  }, Ft(c);
}
const un = 2048, Sn = 2, op = 1280, As = [], ro = 24;
function lp(i, e) {
  const t = Math.ceil(e / ro) * ro, n = (o) => {
    const c = { y: o.nextY, h: t, x: Sn };
    o.rows.push(c), o.nextY += t + Sn;
    const l = { page: o, x: c.x, y: c.y };
    return c.x += i + Sn, l;
  };
  for (const o of [!0, !1])
    for (const c of As)
      for (const l of c.rows)
        if ((o ? l.h === t : l.h >= t) && l.x + i <= un - Sn) {
          const f = { page: c, x: l.x, y: l.y };
          return l.x += i + Sn, f;
        }
  for (const o of As)
    if (o.nextY + t <= un - Sn) return n(o);
  const r = document.createElement("canvas");
  r.width = un, r.height = un;
  const s = new Do(r);
  s.minFilter = 1006;
  const a = { ctx: r.getContext("2d"), tex: s, rows: [], nextY: Sn };
  return As.push(a), n(a);
}
function gt(i, { worldHeightPerLine: e = 0.32 } = {}) {
  const s = document.createElement("canvas").getContext("2d"), a = i.map((w) => {
    const E = (w.fontSize ?? 48) * 1.5, R = `${w.weight ?? 600} ${E}px ui-monospace, Menlo, monospace`;
    return s.font = R, { ...w, font: R, fontSize: E, w: Math.ceil(s.measureText(w.text).width) };
  }), o = Math.max(...a.map((w) => w.w)) + 40, c = 40 + a.reduce((w, E) => w + E.fontSize, 0) + 12 * (a.length - 1), l = Math.min(1, op / o, (un - 2 * Sn) / o, (un - 2 * Sn) / c), f = Math.ceil(o * l), h = Math.ceil(c * l), { page: u, x: m, y: g } = lp(f, h), v = u.ctx;
  v.save(), v.translate(m, g), v.scale(l, l), v.textAlign = "center", v.textBaseline = "top";
  let p = 20;
  for (const w of a)
    v.font = w.font, v.fillStyle = w.color ?? "#cfd6e0", v.fillText(w.text, o / 2, p), p += w.fontSize + 12;
  v.restore();
  const d = u.tex.clone();
  d.offset.set(m / un, 1 - (g + h) / un), d.repeat.set(f / un, h / un), d.needsUpdate = !0;
  const S = new Ro({ map: d, transparent: !0, depthTest: !1 });
  S.userData.isLabel = !0;
  const y = new Rl(S), b = e * i.length;
  return y.scale.set(b * (o / c), b, 1), y;
}
function ws(i) {
  const e = i.userData, t = [e.width, e.height, e.channels].join(" · "), n = gt([
    { text: t, fontSize: 34, color: "#7f8b9c" },
    { text: i.name, fontSize: 48, color: "#cfd6e0" }
  ]);
  return n.name = `${i.name}/label`, n;
}
function cp(i, e) {
  i.traverse((t) => {
    const n = (
      /** @type {any} */
      t.material
    );
    n && (Array.isArray(n) ? n.forEach(e) : e(n));
  });
}
function up(i) {
  return i.userData.fadeBase === void 0 && (i.userData.fadeBase = i.opacity ?? 1), i.transparent = !0, i;
}
function fp(i) {
  return i.userData.fadeBase ?? i.opacity ?? 1;
}
function hp(i, e) {
  i.opacity = fp(i) * e * (i.userData.focusDim ?? 1);
}
function Xo(...i) {
  const e = /* @__PURE__ */ new Set();
  for (const t of i) t && cp(t, (n) => e.add(up(n)));
  return (t) => {
    for (const n of e) hp(n, t);
  };
}
function qo(i, { build: e, hold: t = 0, fade: n = 900 }) {
  const r = i % (e + t + n), s = Math.max(0, Math.min(1, (r - e - t) / n));
  return {
    p: Math.min(1, r / e),
    alpha: 1 - s * s * (3 - 2 * s),
    // smoothstep out — no linear ramp corner
    done: r >= e
  };
}
const dp = "#c9a95c", pp = "#5fb6c4", $o = "#4b5563", Yo = [201, 169, 92], Ko = [95, 182, 196], zr = (i) => i > 0 ? dp : i < 0 ? pp : $o, mp = (i, e) => {
  const [t, n, r] = i >= 0 ? Yo : Ko;
  return `rgba(${t},${n},${r},${e})`;
}, Us = (i) => i > 0 ? `+${i}` : i < 0 ? `−${Math.abs(i)}` : "0";
function qn(i, { srgb: e = !0, nearest: t = !0 } = {}) {
  const n = new Do(i);
  return n.generateMipmaps = !1, n.minFilter = t ? 1003 : 1006, n.magFilter = t ? 1003 : 1006, e && (n.colorSpace = Wt), n;
}
function Di(i, e) {
  const t = document.createElement("canvas");
  return t.width = i, t.height = e, t;
}
function gp(i, e = 224) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const s = Di(e, e).getContext("2d", { willReadFrequently: !0 });
      s.drawImage(n, 0, 0, e, e), t(s.getImageData(0, 0, e, e));
    }, n.onerror = () => t(null), n.src = i;
  });
}
function _p(i = 224) {
  const t = Di(i, i).getContext("2d", { willReadFrequently: !0 }), n = t.createLinearGradient(0, 0, i, i);
  return n.addColorStop(0, "#2a3444"), n.addColorStop(1, "#101722"), t.fillStyle = n, t.fillRect(0, 0, i, i), t.fillStyle = "#c9a227", t.beginPath(), t.arc(i * 0.38, i * 0.4, i * 0.2, 0, Math.PI * 2), t.fill(), t.fillStyle = "#0b0d10", t.fillRect(i * 0.58, i * 0.55, i * 0.3, i * 0.3), t.getImageData(0, 0, i, i);
}
function xp(i) {
  const e = Di(i.width, i.height);
  return e.getContext("2d").putImageData(i, 0, 0), e;
}
function vp(i, e, t, { signed: n = !1, max: r = null } = {}) {
  let s = r;
  if (s == null) {
    s = 0;
    for (let l = 0; l < i.length; l++) s = Math.max(s, Math.abs(i[l]));
  }
  s === 0 && (s = 1);
  const a = Di(e, t), o = a.getContext("2d"), c = o.createImageData(e, t);
  for (let l = 0; l < i.length; l++) {
    const f = i[l], h = Math.min(1, Math.abs(f) / s), u = l * 4;
    if (n) {
      const [m, g, v] = f >= 0 ? Yo : Ko;
      c.data[u] = m * h, c.data[u + 1] = g * h, c.data[u + 2] = v * h;
    } else
      c.data[u] = c.data[u + 1] = c.data[u + 2] = 255 * h;
    c.data[u + 3] = 255;
  }
  return o.putImageData(c, 0, 0), a;
}
function Vr({
  rows: i,
  cols: e,
  get: t,
  cellPx: n = 56,
  bg: r = "#0b0d10",
  gridColor: s = "rgba(148,163,184,0.30)",
  fontScale: a = 0.38
}) {
  const o = e * n, c = i * n, l = Di(o, c), f = l.getContext("2d");
  f.fillStyle = r, f.fillRect(0, 0, o, c), f.font = `600 ${Math.round(n * a)}px ui-monospace, Menlo, monospace`, f.textAlign = "center", f.textBaseline = "middle";
  for (let h = 0; h < i; h++)
    for (let u = 0; u < e; u++) {
      const m = t(h, u);
      m && (m.fill && (f.fillStyle = m.fill, f.fillRect(u * n, h * n, n, n)), m.text != null && (f.fillStyle = m.color ?? "#cfd6e0", f.fillText(String(m.text), (u + 0.5) * n, (h + 0.52) * n)));
    }
  f.strokeStyle = s, f.lineWidth = Math.max(1, n / 28), f.beginPath();
  for (let h = 0; h <= i; h++) {
    const u = Math.min(h * n, c - f.lineWidth / 2);
    f.moveTo(0, u), f.lineTo(o, u);
  }
  for (let h = 0; h <= e; h++) {
    const u = Math.min(h * n, o - f.lineWidth / 2);
    f.moveTo(u, 0), f.lineTo(u, c);
  }
  return f.stroke(), l;
}
function Sp(i, { cellPx: e = 72 } = {}) {
  let t = 0;
  for (const n of i) for (const r of n) t = Math.max(t, Math.abs(r));
  return Vr({
    rows: i.length,
    cols: i[0].length,
    cellPx: e,
    fontScale: 0.4,
    get: (n, r) => {
      const s = i[n][r];
      return {
        text: Us(s),
        fill: s === 0 ? null : mp(s, 0.16 + 0.2 * (Math.abs(s) / t)),
        color: zr(s) === $o ? "#64748b" : zr(s)
      };
    }
  });
}
function Yi({
  texture: i,
  widthPx: e = 224,
  heightPx: t = 224,
  worldHeight: n = 2.2,
  frameColor: r = $i,
  frameOpacity: s = 0.85,
  title: a = null,
  // main label line above the panel; null → no label kit
  dims: o = void 0,
  // small line above the title; undefined → auto "W · H", null → skip
  titleColor: c = "#cfd6e0",
  didactic: l = null
  // lowercase story line under the panel (plan §2.10)
} = (
  /** @type {*} */
  {}
)) {
  const f = `${e}×${t}, worldHeight ${n}`;
  if (!i) throw new Error(`ImagePanel: texture is required (${f})`);
  if (e < 1 || t < 1) throw new Error(`ImagePanel: pixel dims must be >= 1 (${f})`);
  if (!(n > 0)) throw new Error(`ImagePanel: worldHeight must be > 0 (${f})`);
  const h = new dt(), u = n, m = n * (e / t), g = new Dt(
    new bn(m, u),
    new yn({ map: i, toneMapped: !1, side: 2 })
  );
  g.name = "ImagePanel/image", h.add(g);
  const v = m / 2, p = u / 2, d = new Kn(
    new Oe().setFromPoints([
      new P(-v, -p, 4e-3),
      new P(v, -p, 4e-3),
      new P(v, p, 4e-3),
      new P(-v, p, 4e-3)
    ]),
    new rt({ color: r, transparent: !0, opacity: s })
  );
  if (d.name = "ImagePanel/frame", h.add(d), a) {
    const S = [], y = o === void 0 ? `${e} · ${t}` : o;
    y && S.push({ text: y, fontSize: 26, color: "#7f8b9c" }), S.push({ text: a, fontSize: 38, color: c });
    const b = gt(S, { worldHeightPerLine: 0.28 });
    b.name = "ImagePanel/label", b.position.set(0, p + 0.24 + 0.28 * S.length, 0), h.add(b);
  }
  if (l) {
    const S = gt([{ text: l, fontSize: 22, color: "#8b93a3" }], {
      worldHeightPerLine: 0.24
    });
    S.name = "ImagePanel/didactic", S.position.set(0, -p - 0.4, 0), h.add(S);
  }
  return h.name = "ImagePanel", h.userData = {
    component: "ImagePanel",
    width: e,
    height: t,
    worldWidth: m,
    worldHeight: u,
    input: { width: e, height: t },
    output: { width: e, height: t },
    anchors: { input: new P(0, 0, 0), output: new P(0, 0, 0) }
  }, Ft(h);
}
const Mp = () => {
  const i = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let e = 3; e <= 8; e++) for (let t = 3; t <= 8; t++) i[e][t] = 1;
  return i;
};
function Ep({
  image: i = Mp(),
  // 2D array of 0/1 (shared with the arithmetic demo)
  kernel: e = [[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]],
  // Prewitt ∂/∂x — same nine numbers as S1
  kernelName: t = "Prewitt ∂/∂x",
  cellWorld: n = 0.22,
  accent: r = Jd,
  period: s = 14e3,
  // ms per full sweep incl. hold
  holdFrac: a = 0.18,
  // tail of the cycle spent showing the finished map
  labelMode: o = "full"
  // 'full' = own label kit | 'none' = the scene
  // captions (side-by-side pairs repeat the kit)
} = {}) {
  const c = i.length, l = i[0]?.length ?? 0, f = e.length, h = e[0]?.length ?? 0, u = `image ${l}×${c}, kernel ${h}×${f}`;
  if (l < 1 || i.some((ne) => ne.length !== l))
    throw new Error(`ConvSweep: image must be a rectangular 2D array (${u})`);
  if (h < 1 || e.some((ne) => ne.length !== h))
    throw new Error(`ConvSweep: kernel must be a rectangular 2D array (${u})`);
  if (h > l || f > c) throw new Error(`ConvSweep: kernel must fit inside the image (${u})`);
  if (!(n > 0)) throw new Error(`ConvSweep: cellWorld must be > 0 (${u})`);
  if (!(s > 0) || !(a >= 0 && a < 1))
    throw new Error(`ConvSweep: period must be > 0, holdFrac in [0,1) (${u})`);
  if (o !== "full" && o !== "none")
    throw new Error(`ConvSweep: labelMode must be 'full' | 'none' (${u})`);
  const m = c - f + 1, g = l - h + 1, v = Array.from(
    { length: m },
    (ne, Se) => Array.from({ length: g }, (le, Ae) => {
      let Ge = 0;
      for (let Te = 0; Te < f; Te++) for (let $e = 0; $e < h; $e++) Ge += i[Se + Te][Ae + $e] * e[Te][$e];
      return Ge;
    })
  );
  let p = 0;
  for (const ne of v) for (const Se of ne) p = Math.max(p, Math.abs(Se));
  p === 0 && (p = 1);
  const d = new dt(), S = 2.4, y = (ne, Se, le, Ae) => ({
    x: (-ne / 2 + Ae + 0.5) * n,
    y: (Se / 2 - le - 0.5) * n
  }), b = Yi({
    texture: qn(Vr({
      rows: c,
      cols: l,
      cellPx: 56,
      get: (ne, Se) => {
        const le = i[ne][Se];
        return {
          text: le,
          fill: le ? "rgba(203,213,225,0.24)" : null,
          color: le ? "#e2e8f0" : "#475569"
        };
      }
    }), { nearest: !1 }),
    widthPx: l,
    heightPx: c,
    worldHeight: c * n,
    frameColor: r,
    title: o === "full" ? "binary image" : null,
    dims: `${l} · ${c} · values 0/1`
  });
  b.name = "ConvSweep/input", d.add(b);
  const w = g * n, E = m * n, R = new Kn(
    new Oe().setFromPoints([
      new P(-w / 2, -E / 2, 0),
      new P(w / 2, -E / 2, 0),
      new P(w / 2, E / 2, 0),
      new P(-w / 2, E / 2, 0)
    ]),
    new rt({ color: r, transparent: !0, opacity: 0.85 })
  );
  if (R.name = "ConvSweep/outFrame", R.position.z = S, d.add(R), o === "full") {
    const ne = gt([
      { text: `${g} · ${m} · no padding: ${l}→${g}`, fontSize: 26, color: "#7f8b9c" },
      { text: "feature map", fontSize: 38, color: "#cfd6e0" }
    ], { worldHeightPerLine: 0.28 });
    ne.name = "ConvSweep/outLabel", ne.position.set(0, E / 2 + 0.8, S), d.add(ne);
  }
  const _ = g * m, T = new Ll(
    new bn(n * 0.9, n * 0.9),
    new yn({
      color: 16777215,
      transparent: !0,
      opacity: 0.85,
      side: 2,
      depthWrite: !1
    }),
    _
  );
  T.name = "ConvSweep/outCells", T.position.z = S + 0.01, T.frustumCulled = !1;
  const F = new ut(), C = new De(), L = new De("#334155"), H = (ne) => ne === 0 ? L : (C.set(zr(ne)).multiplyScalar(0.45 + 0.55 * (Math.abs(ne) / p)), C), N = (ne, Se) => {
    const { x: le, y: Ae } = y(g, m, Math.floor(ne / g), ne % g);
    F.makeScale(Se, Se, 1).setPosition(le, Ae, 0), T.setMatrixAt(ne, F);
  };
  for (let ne = 0; ne < _; ne++)
    N(ne, 0), T.setColorAt(ne, H(v[Math.floor(ne / g)][ne % g]));
  T.instanceMatrix.needsUpdate = !0, d.add(T);
  const D = h * n, U = f * n, B = new dt();
  B.name = "ConvSweep/window";
  const Y = new Dt(
    new bn(D, U),
    new yn({
      color: r,
      transparent: !0,
      opacity: 0.14,
      depthWrite: !1,
      side: 2
    })
  );
  Y.name = "ConvSweep/window/film", Y.position.z = 0.012, B.add(Y);
  const Z = new Kn(
    new Oe().setFromPoints([
      new P(-D / 2, -U / 2, 0.014),
      new P(D / 2, -U / 2, 0.014),
      new P(D / 2, U / 2, 0.014),
      new P(-D / 2, U / 2, 0.014)
    ]),
    new rt({ color: r, transparent: !0, opacity: 0.95 })
  );
  Z.name = "ConvSweep/window/rect", B.add(Z);
  const te = f * 0.3, pe = Yi({
    texture: qn(Sp(e), { nearest: !1 }),
    widthPx: h,
    heightPx: f,
    worldHeight: te,
    frameColor: 13216092,
    // WEIGHT amber — these are parameters, not data
    title: null
  });
  pe.name = "ConvSweep/window/weights", pe.position.set(0, U / 2 + te / 2 + 0.22, 0.05), B.add(pe), d.add(B);
  const xe = gt(o === "full" ? [
    { text: t, fontSize: 22, color: "#c9a95c" },
    { text: `the same ${h * f} numbers at every position`, fontSize: 18, color: "#8b93a3" }
  ] : [
    { text: t, fontSize: 22, color: "#c9a95c" }
  ], { worldHeightPerLine: 0.22 });
  xe.name = "ConvSweep/weightTag", xe.position.set(-(l * n) / 2 - 1.35, 0.4, 0.9), d.add(xe);
  const Ce = /* @__PURE__ */ new Map();
  for (const ne of v)
    for (const Se of ne)
      if (!Ce.has(Se)) {
        const le = gt([{ text: `Σ = ${Us(Se)}`, fontSize: 24, color: Se === 0 ? "#64748b" : zr(Se) }], { worldHeightPerLine: 0.24 });
        le.name = `ConvSweep/sum(${Us(Se)})`, le.visible = !1, d.add(le), Ce.set(Se, le);
      }
  const ke = new Oe();
  ke.setAttribute("position", new Ne(new Float32Array(24), 3));
  const he = new Tt(
    ke,
    new rt({ color: r, transparent: !0, opacity: 0.35 })
  );
  he.name = "ConvSweep/fan", he.frustumCulled = !1, d.add(he);
  const q = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  let ie = -1, $ = null;
  const ce = {
    build: s * (1 - a),
    hold: s * a,
    fade: s * 0.08
  }, ve = Xo(T, B, he, ...Ce.values());
  return T.onBeforeRender = () => {
    const { p: ne, alpha: Se, done: le } = qo(performance.now(), ce);
    ve(Se);
    const Ae = Math.min(_ - 1, Math.floor(ne * _)), Ge = le ? _ - 1 : Ae;
    if (Ge < ie) {
      for (let Pe = 0; Pe < _; Pe++) N(Pe, 0);
      ie = -1;
    }
    for (let Pe = ie + 1; Pe <= Ge; Pe++) N(Pe, 1);
    ie = Ge, T.instanceMatrix.needsUpdate = !0, B.visible = !le, he.visible = !le;
    const Te = Ce.get(v[Math.floor(Ae / g)][Ae % g]) ?? null;
    if ($ && $ !== Te && ($.visible = !1), Te && (Te.visible = !le), $ = Te, le) return;
    const $e = Math.floor(Ae / g), Xe = Ae % g, yt = y(l, c, $e + (f - 1) / 2, Xe + (h - 1) / 2);
    B.position.set(yt.x, yt.y, 0);
    const O = y(g, m, $e, Xe);
    Te && Te.position.set(O.x + n * 2.2, O.y + 0.3, S + 0.02);
    const ot = ke.getAttribute("position");
    for (let Pe = 0; Pe < 4; Pe++) {
      const [tt, me] = q[Pe];
      ot.setXYZ(Pe * 2, yt.x + tt * D / 2, yt.y + me * U / 2, 0.02), ot.setXYZ(Pe * 2 + 1, O.x + tt * n / 2, O.y + me * n / 2, S - 0.02);
    }
    ot.needsUpdate = !0;
  }, d.name = "ConvSweep", d.userData = {
    component: "ConvSweep",
    input: { width: l, height: c, channels: 1 },
    output: { width: g, height: m, channels: 1 },
    kernel: { width: h, height: f, stride: 1, padding: 0 },
    anchors: { input: new P(0, 0, 0), output: new P(0, 0, S) },
    selfAnim: !0
    // on-demand render loop (#49): this subtree needs frames
  }, Ft(d);
}
function Bn({
  width: i = 224,
  height: e = 224,
  channels: t = 3,
  worldHeight: n = Mn,
  depthPerChannel: r = Zn,
  color: s = 10326724,
  channelColors: a = null,
  channelOpacities: o = null,
  opacity: c = 0.6,
  name: l = "FeatureMapVolume",
  // object name (scene-graph id; may be path-like)
  component: f = "FeatureMapVolume",
  // userData.component — the ROLE this volume plays
  meta: h = {}
  // extra userData fields
} = {}) {
  const u = n * (i / e) / 2, m = n / 2, g = (t - 1) * r, v = -g / 2, p = [[-u, -m], [u, -m], [u, m], [-u, m]], d = a && Object.keys(a).length > 0, S = o && Object.keys(o).length > 0, y = d || S, b = [], w = y ? [] : null, E = new De(s), R = new De(), _ = (L, H, N, D, U, B) => b.push(L, H, N, D, U, B), T = (L, H) => {
    for (let N = 0; N < 2; N++)
      w.push(L.r, L.g, L.b), S && w.push(H);
  };
  for (let L = 0; L < t; L++) {
    const H = v + L * r, N = y ? d && a[L] != null ? R.set(a[L]) : E : null, D = S ? o[L] ?? c : 1;
    for (let U = 0; U < 4; U++) {
      const [B, Y] = p[U], [Z, te] = p[(U + 1) % 4];
      _(B, Y, H, Z, te, H), y && T(N, D);
    }
  }
  for (const [L, H] of p)
    _(L, H, v, L, H, v + g), y && T(E, c);
  const F = new Oe();
  F.setAttribute("position", new Ne(b, 3)), y && F.setAttribute("color", new Ne(w, S ? 4 : 3));
  const C = new Tt(
    F,
    new rt(
      y ? { vertexColors: !0, transparent: !0, opacity: S ? 1 : c } : { color: s, transparent: !0, opacity: c }
    )
  );
  return C.name = l, C.userData = { component: f, width: i, height: e, channels: t, ...h }, Ft(C);
}
const so = 0.45;
function Cr({
  width: i,
  height: e,
  channels: t,
  // kW × kH × kC (kC = input channels)
  stride: n,
  padding: r,
  // sliding config, inherited from the conv layer
  faceWH: s,
  // world size of the kernel face (from input pixel scale)
  depthPerChannel: a = Zn,
  color: o = 13216092,
  opacity: c = 0.6
} = (
  /** @type {*} */
  {}
)) {
  const l = s * (i / e) / 2, f = s / 2, h = (t - 1) * a, u = -h / 2, m = [[-l, -f], [l, -f], [l, f], [-l, f]], g = [], v = [], p = new De(o), d = (b, w, E, R, _, T, F) => {
    g.push(b, w, E, R, _, T), v.push(p.r, p.g, p.b, F, p.r, p.g, p.b, F);
  };
  for (let b = 0; b < t; b++) {
    const w = u + b * a;
    for (let _ = 0; _ < 4; _++) {
      const [T, F] = m[_], [C, L] = m[(_ + 1) % 4];
      d(T, F, w, C, L, w, 1);
    }
    const E = 2 * l / i, R = 2 * f / e;
    for (let _ = 1; _ < i; _++) d(-l + _ * E, -f, w, -l + _ * E, f, w, so);
    for (let _ = 1; _ < e; _++) d(-l, -f + _ * R, w, l, -f + _ * R, w, so);
  }
  if (h > 0)
    for (const [b, w] of m) d(b, w, u, b, w, u + h, 1);
  const S = new Oe();
  S.setAttribute("position", new Ne(g, 3)), S.setAttribute("color", new Ne(v, 4));
  const y = new Tt(
    S,
    new rt({ vertexColors: !0, transparent: !0, opacity: c })
  );
  return y.name = "Kernel", y.userData = { component: "Kernel", width: i, height: e, channels: t, stride: n, padding: r }, Ft(y);
}
function ao({ cols: i, rows: e, dx: t, dy: n, x0: r = 0, y0: s = 0, z: a = 0 }) {
  const o = [];
  for (let c = 0; c < e; c++)
    for (let l = 0; l < i; l++) o.push(new P(r + l * t, s - c * n, a));
  return o;
}
function yp(i, e, t) {
  const n = Math.max(0, Math.min(1, i)) * e * t, r = Math.min(t - 1, Math.floor(n / e)), s = Math.min(e - 1e-4, n - r * e);
  return { row: r, col: s, index: r * e + Math.floor(s) };
}
function bp({ template: i, stops: e, name: t = "SweepWake", tail: n = 1 / 0 }) {
  const r = i.geometry, s = r.getAttribute("position"), a = r.getAttribute("color"), o = s.count, c = e.length, l = new Float32Array(o * c * 3), f = a ? new Float32Array(o * c * a.itemSize) : null;
  for (let m = 0; m < c; m++) {
    const g = e[m];
    for (let v = 0; v < o; v++) {
      const p = (m * o + v) * 3;
      l[p] = s.getX(v) + g.x, l[p + 1] = s.getY(v) + g.y, l[p + 2] = s.getZ(v) + g.z;
    }
    f && f.set(
      /** @type {ArrayLike<number>} */
      a.array,
      m * o * a.itemSize
    );
  }
  const h = new Oe();
  h.setAttribute("position", new Pt(l, 3)), f && h.setAttribute("color", new Pt(f, a.itemSize)), r.dispose();
  const u = new Tt(h, i.material);
  return u.name = t, u.frustumCulled = !1, u.reveal = (m) => {
    const g = Math.max(0, Math.min(c, m)), v = Number.isFinite(n) ? Math.max(0, g - n) : 0;
    h.setDrawRange(v * o, (g - v) * o);
  }, u.reveal(0), u;
}
function Tp({ stops: i, color: e = 16777215, colors: t = null, size: n = 4, opacity: r = 0.9, name: s = "SweepDots" }) {
  const a = new Float32Array(i.length * 3);
  for (let l = 0; l < i.length; l++)
    a[l * 3] = i[l].x, a[l * 3 + 1] = i[l].y, a[l * 3 + 2] = i[l].z;
  const o = new Oe();
  if (o.setAttribute("position", new Pt(a, 3)), t) {
    const l = new Float32Array(i.length * 3), f = new De();
    for (let h = 0; h < i.length; h++)
      f.set(t[h]), l[h * 3] = f.r, l[h * 3 + 1] = f.g, l[h * 3 + 2] = f.b;
    o.setAttribute("color", new Pt(l, 3));
  }
  const c = new dn(
    o,
    new sn({
      ...t ? { vertexColors: !0 } : { color: e },
      size: n,
      sizeAttenuation: !1,
      transparent: !0,
      opacity: r
    })
  );
  return c.name = s, c.frustumCulled = !1, c.reveal = (l) => o.setDrawRange(0, Math.max(0, Math.min(i.length, l))), c.reveal(0), c;
}
function Ap({
  inWidth: i = 224,
  inHeight: e = 224,
  inChannels: t = 3,
  outChannels: n = 64,
  // number of filters -> output depth (spatial size is derived)
  kWidth: r = 3,
  kHeight: s = 3,
  // kernel spatial size; kChannels is forced to inChannels
  stride: a = 1,
  padding: o = 1,
  gap: c = 1.4,
  worldHeight: l = Mn,
  // input face height (stages pass their buffered scale)
  depthPerChannel: f = Zn,
  // channel pitch (VGG annex passes VGG_DPC)
  drawInput: h = !0,
  // false when chained: the previous conv's output volume
  // already stands exactly where this input would be
  labelMode: u = "full",
  // 'full' = own label kit | 'none' = the assembler labels
  inset: m = !0,
  // the magnified k×k weight-grid inset
  kernelsShown: g = 5,
  // cap on drawn kernel bundles (dense chains pass fewer)
  ghostWindows: v = 12,
  // ghost-window budget per filter (dense chains pass fewer)
  sweepAnim: p = !1,
  // #224 experiment: the drawn filters sweep the input face
  // over time (one traveler per filter, in kernel order),
  // writing their output slice pixel by pixel — replaces
  // the static ghost row; reference bundles stay. Opt-in.
  sweepPeriod: d = 14e3
  // ms per full pass over every drawn filter, incl. hold
} = {}) {
  const S = `in ${i}×${e}×${t}, k${r}×${s}, s${a}, p${o}, out channels ${n}`;
  if (i < 1 || e < 1 || t < 1) throw new Error(`ConvLayer: input dims must be >= 1 (${S})`);
  if (r < 1 || s < 1) throw new Error(`ConvLayer: kernel dims must be >= 1 (${S})`);
  if (n < 1) throw new Error(`ConvLayer: outChannels must be >= 1 (${S})`);
  if (a < 1) throw new Error(`ConvLayer: stride must be >= 1 (${S})`);
  if (o < 0) throw new Error(`ConvLayer: padding must be >= 0 (${S})`);
  if (u !== "full" && u !== "none") throw new Error(`ConvLayer: labelMode must be 'full' | 'none' (${S})`);
  if (g < 1 || v < 0) throw new Error(`ConvLayer: kernelsShown must be >= 1, ghostWindows >= 0 (${S})`);
  if (!(d > 0)) throw new Error(`ConvLayer: sweepPeriod must be > 0 (${S})`);
  const y = Math.floor((i + 2 * o - r) / a) + 1, b = Math.floor((e + 2 * o - s) / a) + 1;
  if (y < 1 || b < 1)
    throw new Error(`ConvLayer: kernel larger than padded input — output would be ${y}×${b} (${S})`);
  const w = new dt(), E = new dt();
  E.name = "ConvUnit", E.userData = {
    component: "ConvUnit",
    note: "one convolution: input feature map + kernel -> output feature map"
  };
  const R = l / e, _ = l, T = b * R, F = (K) => (K - (i - 1) / 2) * R, C = (K) => ((e - 1) / 2 - K) * R, L = Bn({
    width: i,
    height: e,
    channels: t,
    color: 9541060,
    worldHeight: l,
    depthPerChannel: f,
    name: "InputFeatureMap",
    component: "InputFeatureMap"
  }), H = r * R, N = s * R, D = H / 2, U = N / 2, B = F(-o + (r - 1) / 2), Y = C(-o + (s - 1) / 2), Z = [13216092, 13209008, 7644868, 7842700, 13602711], te = Math.min(Z.length, n, g), pe = (K) => te > 1 ? Math.round((te - 1 - K) * (n - 1) / (te - 1)) : n - 1, xe = {};
  for (let K = 0; K < te; K++) xe[pe(K)] = Z[K];
  const Ce = Bn({
    width: y,
    height: b,
    channels: n,
    worldHeight: T,
    color: 10326724,
    channelColors: xe,
    depthPerChannel: f,
    name: "OutputFeatureMap",
    component: "OutputFeatureMap"
  }), ke = (t - 1) * f, he = (n - 1) * f;
  L.position.z = 0, Ce.position.z = ke / 2 + c + he / 2, h && E.add(L), E.add(Ce);
  const q = 0.03 * l, ie = o > 0 ? Math.max(o * R, q) : 0;
  if (o > 0 && h) {
    const K = i * R, V = Bn({
      width: K + 2 * ie,
      height: _ + 2 * ie,
      channels: t,
      worldHeight: _ + 2 * ie,
      color: 16777215,
      opacity: 0.22,
      depthPerChannel: f,
      name: "InputPadding",
      component: "InputPadding",
      meta: {
        // geometry was sized in world units; the tensor shape is the padded pixel count
        padding: o,
        width: i + 2 * o,
        height: e + 2 * o,
        note: "zero-padding ring around the input (thickness exaggerated to stay visible)"
      }
    });
    V.position.z = L.position.z, E.add(V);
  }
  const $ = (K) => (K - (y - 1) / 2) * R, ce = (K) => ((b - 1) / 2 - K) * R, ve = Ce.position.z - he / 2, ne = (K, V, j) => {
    const de = new Oe();
    de.setAttribute("position", new Ne(K, 3)), de.setAttribute("color", new Ne(V, 4));
    const Me = new Tt(
      de,
      new rt({ vertexColors: !0, transparent: !0, depthWrite: !1 })
    );
    return Me.name = j, Me;
  }, Se = 0.45, le = 0.22, Ae = 2, Ge = 0.02, Te = [[-D, -U], [D, -U], [D, U], [-D, U]], $e = a * R, Xe = Math.max(1, Math.ceil(r / a)), yt = Math.max(1, Math.ceil(s / a)), O = new De(Xr), ot = new De(), Pe = new dt();
  Pe.name = "Kernels", Pe.userData = { component: "Kernels", shown: te, total: n, note: "kernel count == output channels" };
  const tt = [], me = [], pt = [], A = [], x = [], z = [], Q = [], re = [];
  let fe = null;
  for (let K = 0; K < te; K++) {
    const V = Z[K], j = new De(V), de = 0, Me = pe(K), ae = ve + Me * f, oe = de + ke / 2, Ue = Math.min(K * Xe, y - 1), ze = Math.min(K * yt, b - 1), Ke = B + Ue * $e, I = Y - ze * $e, ue = $(Ue), J = ce(ze), ge = Cr({
      width: r,
      height: s,
      channels: t,
      stride: a,
      padding: o,
      faceWH: N,
      color: V,
      depthPerChannel: f
    }), se = ge.geometry.getAttribute("position"), ee = ge.geometry.getAttribute("color");
    for (let Ve = 0; Ve < se.count; Ve++)
      tt.push(se.getX(Ve) + Ke, se.getY(Ve) + I, se.getZ(Ve) + de), me.push(ee.getX(Ve), ee.getY(Ve), ee.getZ(Ve), ee.getW(Ve));
    K === 0 && (fe = { name: ge.name, userData: { ...ge.userData, outputChannel: Me } }), ge.geometry.dispose(), ge.material.dispose(), pt.push(ue, J, ae), A.push(j.r, j.g, j.b);
    for (const [Ve, We] of Te)
      tt.push(Ke + Ve, I + We, oe, ue, J, ae), me.push(j.r, j.g, j.b, 1, j.r, j.g, j.b, 1);
    const _e = p ? 0 : Math.min(y - 1 - Ue, v * Xe);
    for (let Ve = 1; Ve <= _e; Ve++) {
      const We = Ve / _e, st = le * Math.pow(1 - We, Ae);
      if (st < Ge) break;
      const _t = Ue + Ve, St = $(_t);
      ot.copy(j).lerp(O, 1 - st);
      const It = ot.r, Ut = ot.g, Zt = ot.b;
      if (Q.push(St, J, ae), re.push(It, Ut, Zt, st), Ve % Xe !== 0) continue;
      const Gt = Ke + Ve * $e;
      for (let Ht = 0; Ht < t; Ht++) {
        const kt = de - ke / 2 + Ht * f;
        for (let Xt = 0; Xt < 4; Xt++) {
          const [Tn, ti] = Te[Xt], [ni, Zi] = Te[(Xt + 1) % 4];
          x.push(Gt + Tn, I + ti, kt, Gt + ni, I + Zi, kt), z.push(It, Ut, Zt, st, It, Ut, Zt, st);
        }
      }
      for (const [Ht, kt] of Te)
        x.push(Gt + Ht, I + kt, de - ke / 2, Gt + Ht, I + kt, de + ke / 2), z.push(It, Ut, Zt, st, It, Ut, Zt, st);
      for (const [Ht, kt] of Te)
        x.push(Gt + Ht, I + kt, oe, St, J, ae), z.push(It, Ut, Zt, st, It, Ut, Zt, st);
    }
    const Be = new dt();
    Be.name = `KernelBundle[${K}]`, Be.userData = {
      component: "KernelBundle",
      index: K,
      outputChannel: Me,
      color: V,
      reference: { row: ze, col: Ue },
      trailCols: _e,
      note: "data-only: drawables merged at the Kernels level (#49)"
    }, Pe.add(Be);
  }
  if (tt.length) {
    const K = new Oe();
    K.setAttribute("position", new Ne(tt, 3)), K.setAttribute("color", new Ne(me, 4));
    const V = new Tt(
      K,
      new rt({ vertexColors: !0, transparent: !0, opacity: Se })
    );
    V.name = "Kernels/refLines", Pe.add(V);
  }
  if (pt.length) {
    const K = new Oe();
    K.setAttribute("position", new Ne(pt, 3)), K.setAttribute("color", new Ne(A, 3));
    const V = new dn(
      K,
      new sn({ vertexColors: !0, size: 5, sizeAttenuation: !1, transparent: !0, opacity: Se })
    );
    V.name = "Kernels/refPixels", Pe.add(V);
  }
  if (x.length && Pe.add(ne(x, z, "Kernels/ghostLines")), Q.length) {
    const K = new Oe();
    K.setAttribute("position", new Ne(Q, 3)), K.setAttribute("color", new Ne(re, 4));
    const V = new dn(
      K,
      new sn({ vertexColors: !0, size: 3, sizeAttenuation: !1, transparent: !0, depthWrite: !1 })
    );
    V.name = "Kernels/ghostPixels", Pe.add(V);
  }
  if (E.add(Pe), p) {
    const K = y, V = b, j = K * V, de = ke / 2, Me = ao({ cols: K, rows: V, dx: $e, dy: $e, x0: B, y0: Y, z: de }), ae = new dt();
    ae.name = "Kernels/sweep", ae.userData = { component: "KernelSweep", filters: te, stops: j };
    const oe = new dt();
    oe.name = "Kernels/sweepTraveler";
    const Ue = [], ze = y * R / 2 + 0.04, Ke = T / 2 + 0.04;
    for (let se = 0; se < te; se++) {
      const ee = Z[se], _e = ve + pe(se) * f, Be = bp({
        template: Cr({
          width: r,
          height: s,
          channels: 1,
          stride: a,
          padding: o,
          faceWH: N,
          color: ee,
          opacity: 0.25
        }),
        stops: Me,
        name: `Kernels/sweepWake[${se}]`,
        tail: Xe * 3
      }), Ve = Tp({
        stops: ao({ cols: K, rows: V, dx: R, dy: R, x0: $(0), y0: ce(0), z: _e }),
        color: ee,
        size: 4,
        opacity: 0.9,
        name: `Kernels/sweepDots[${se}]`
      }), We = new Kn(
        new Oe().setFromPoints([
          new P(-ze, -Ke, _e),
          new P(ze, -Ke, _e),
          new P(ze, Ke, _e),
          new P(-ze, Ke, _e)
        ]),
        new rt({ color: ee, transparent: !0, opacity: 0.7, depthWrite: !1 })
      );
      We.name = `Kernels/sweepDone[${se}]`, We.visible = !1;
      const st = Cr({
        width: r,
        height: s,
        channels: t,
        stride: a,
        padding: o,
        faceWH: N,
        color: ee,
        depthPerChannel: f,
        opacity: 0.75
      });
      st.name = `Kernels/sweepBox[${se}]`, st.position.set(B, Y, 0), st.frustumCulled = !1, st.visible = !1, oe.add(st);
      const _t = new Oe();
      _t.setAttribute("position", new Ne(new Float32Array(24), 3));
      const St = new Tt(
        _t,
        new rt({ color: ee, transparent: !0, opacity: 0.55, depthWrite: !1 })
      );
      St.name = `Kernels/sweepFan[${se}]`, St.frustumCulled = !1, St.visible = !1, ae.add(Be, Ve, We, St), Ue.push({ wake: (
        /** @type {any} */
        Be
      ), dots: (
        /** @type {any} */
        Ve
      ), ring: We, box: st, fan: St, oSliceZ: _e });
    }
    ae.add(oe), Pe.add(ae);
    const I = {
      build: d * 0.88,
      hold: d * 0.12,
      fade: d * 0.09
    }, ue = Xo(ae), J = te;
    let ge = "";
    Ce.frustumCulled = !1, Ce.onBeforeRender = () => {
      const { p: se, alpha: ee, done: _e } = qo(performance.now(), I);
      ue(ee);
      const Be = _e ? J : se * J, Ve = _e ? J : Math.min(J - 1, Math.floor(Be)), We = yp(_e ? 0 : Be - Ve, K, V);
      if (oe.visible = !_e, !_e) {
        const _t = Math.min(We.col, K - 1);
        oe.position.set(_t * $e, -We.row * $e, 0);
        const St = Ue[Ve], It = Math.floor(We.col), Ut = B + _t * $e, Zt = Y - We.row * $e, Gt = $(It), Ht = ce(We.row), kt = St.fan.geometry.getAttribute("position");
        for (let Xt = 0; Xt < 4; Xt++) {
          const [Tn, ti] = Te[Xt];
          kt.setXYZ(Xt * 2, Ut + Tn, Zt + ti, de), kt.setXYZ(Xt * 2 + 1, Gt, Ht, St.oSliceZ);
        }
        kt.needsUpdate = !0;
      }
      const st = _e ? "hold" : `${Ve}:${We.index}`;
      if (st !== ge) {
        ge = st;
        for (let _t = 0; _t < J; _t++) {
          const St = Ue[_t], It = !_e && _t === Ve, Ut = _e || _t < Ve;
          St.box.visible = It, St.fan.visible = It, St.wake.reveal(Ut ? j : It ? We.index : 0), St.dots.reveal(Ut ? j : It ? We.index + 1 : 0), St.ring.visible = Ut;
        }
      }
    }, Ce.userData.selfAnim = !0;
  }
  if (m && (r > 1 || s > 1)) {
    const V = Cr({
      width: r,
      height: s,
      channels: 1,
      stride: a,
      padding: o,
      faceWH: 0.85,
      color: Z[0]
    });
    V.material.opacity = 0.9, V.name = "ConvLayer/kernelInset", V.userData.note = "magnified weight grid of the reference kernel (structure only; true scale stays on the body)", V.position.set(B - H / 2 - 0.9, Y - 0.5 - 0.85 / 2, ke / 2), E.add(V);
  }
  if (u === "full") {
    const K = ws(fe);
    if (K.position.set(B - H / 2 - 0.9, Y, 0), E.add(K), h) {
      const j = ws(L);
      j.position.set(0, _ / 2 + ie + 0.5, L.position.z), E.add(j);
    }
    const V = ws(Ce);
    V.position.set(0, T / 2 + 0.5, Ce.position.z), E.add(V);
  }
  if (w.add(E), u === "full") {
    const K = gt([
      { text: `k${r}×${s} · s${a} · p${o} · ${t}→${n}`, fontSize: 32, color: "#8b93a3" },
      { text: "ConvLayer", fontSize: 56, color: "#9d92c4" }
    ]);
    K.name = "ConvLayer/label", K.position.set(0, l / 2 + 2.4, Ce.position.z / 2), w.add(K);
  }
  return w.name = "ConvLayer", w.userData = {
    component: "ConvLayer",
    input: { width: i, height: e, channels: t },
    output: { width: y, height: b, channels: n },
    kernel: { width: r, height: s, channels: t, stride: a, padding: o },
    anchors: {
      input: new P(0, 0, L.position.z - ke / 2),
      output: new P(0, 0, Ce.position.z + he / 2)
    }
  }, Ft(w);
}
function wp(i, { width: e, height: t, channels: n }, r) {
  if (e < 1 || t < 1 || n < 1) throw new Error(`${i}: dims must be >= 1 (${r})`);
}
function Rp(i, e, t, n) {
  if (!(t > 0)) throw new Error(`${i}: ${e} must be > 0 (${n})`);
}
function Cp(i, e, t = ["full", "none"]) {
  if (!t.includes(e))
    throw new Error(`${i}: labelMode must be ${t.map((n) => `'${n}'`).join(" | ")} (got ${e})`);
}
function Pp({ width: i, height: e, channels: t, worldHeight: n, depthPerChannel: r, gap: s }) {
  const a = n * (i / e), o = n, c = (t - 1) * r, l = 0, f = c + s, h = c / 2 + s / 2, u = Zn * 1.6;
  return {
    faceW: a,
    faceH: o,
    d: c,
    inZ: l,
    outZ: f,
    plateZ: h,
    plateTh: u,
    plateFrontZ: h - u / 2,
    plateBackZ: h + u / 2
  };
}
function Lp(i, {
  width: e,
  height: t,
  channels: n,
  worldHeight: r,
  depthPerChannel: s,
  inCenterZ: a,
  outCenterZ: o,
  color: c = 9541060,
  opacity: l = 0.6
}) {
  const f = (h, u) => {
    const m = Bn({
      width: e,
      height: t,
      channels: n,
      worldHeight: r,
      depthPerChannel: s,
      color: c,
      opacity: l,
      name: u,
      component: u
    });
    m.position.z = h, i.add(m);
  };
  f(a, "InputFeatureMap"), f(o, "OutputFeatureMap");
}
function Dp({ faceW: i, faceH: e, plateTh: t, plateZ: n, color: r, opacity: s, edgeOpacity: a, prefix: o }) {
  const c = new Dt(
    new ei(i, e, t),
    new yn({
      color: r,
      transparent: !0,
      opacity: s,
      depthWrite: !1,
      side: 2
    })
  );
  c.name = `${o}/plate`, c.position.z = n;
  const l = new Tt(
    new Nl(c.geometry),
    new rt({ color: r, transparent: !0, opacity: a })
  );
  return l.name = `${o}/plateEdges`, l.position.z = n, [c, l];
}
function Fp(i, { faceW: e, faceH: t, plateZ: n }) {
  i.position.set(e / 2 + 0.55, t / 2 - 0.4, n);
}
function Ip(i, e, t, { depthWrite: n = !1 } = {}) {
  if (i.length === 0) return null;
  const r = new Oe();
  r.setAttribute("position", new Ne(i, 3)), r.setAttribute("color", new Ne(e, 4));
  const s = new Tt(
    r,
    new rt({ vertexColors: !0, transparent: !0, depthWrite: n })
  );
  return s.name = t, s;
}
function oo(i, e, t, n) {
  if (i.length === 0) return null;
  const r = new Oe();
  r.setAttribute("position", new Ne(i, 3)), r.setAttribute("color", new Ne(e, 4));
  const s = new dn(
    r,
    new sn({ vertexColors: !0, size: n, sizeAttenuation: !1, transparent: !0, depthWrite: !1 })
  );
  return s.name = t, s;
}
function Up(i, { width: e, height: t, channels: n }, { inZ: r, outZ: s, d: a }, o = {}) {
  return {
    component: i,
    ...o,
    input: { width: e, height: t, channels: n },
    // pass-through: shape preserved,
    output: { width: e, height: t, channels: n },
    // only the values change
    anchors: {
      input: new P(0, 0, r - a / 2),
      output: new P(0, 0, s + a / 2)
    }
  };
}
const Ns = 13208926, lo = (i) => 1 / (1 + Math.exp(-i)), co = {
  relu: (i) => Math.max(0, i),
  // symbolic: the real clip sits at 6, far outside the ±2 window — drawn
  // clipping at 1 so the flat top (what tells ReLU6 from ReLU) is visible
  relu6: (i) => Math.min(Math.max(0, i), 1),
  silu: (i) => i * lo(i),
  sigmoid: lo
};
function Np(i, { halfWidth: e = 0.35, height: t = 0.45, color: n = Ns } = {}) {
  if (!co[i]) throw new Error(`FnGlyph: fn must be relu | relu6 | silu | sigmoid (got ${i})`);
  const r = new dt();
  r.name = `FnGlyph[${i}]`;
  const s = [], a = [], o = new De(), c = (g, v, p, d, S, y) => {
    s.push(g, v, 0, p, d, 0), o.set(S), a.push(o.r, o.g, o.b, y, o.r, o.g, o.b, y);
  };
  c(-e - 0.05, 0, e + 0.05, 0, 6583435, 0.5), c(0, -0.08 * (t / 0.45), 0, t + 0.05, 6583435, 0.5);
  const l = i === "sigmoid" ? 1 : 2;
  let f = 0, h = 0;
  for (let g = 0; g <= 32; g++) {
    const v = -2 + 4 * g / 32, p = v / 2 * e, d = co[i](v) / l * t;
    g > 0 && c(f, h, p, d, n, 1), f = p, h = d;
  }
  const u = new Oe();
  u.setAttribute("position", new Ne(s, 3)), u.setAttribute("color", new Ne(a, 4));
  const m = new Tt(
    u,
    new rt({ vertexColors: !0, transparent: !0 })
  );
  return m.name = `FnGlyph[${i}]/lines`, r.add(m), Ft(r);
}
const Op = 6583435;
function Bp(i, e, t) {
  const n = Math.sin(i * 12.9898 + e * 78.233 + t * 37.719) * 43758.5453;
  return (n - Math.floor(n)) * 2 - 1;
}
function Gp(i, e) {
  const t = Math.min(i, e);
  return t <= 1 ? [0] : Array.from({ length: t }, (n, r) => Math.round(r * (e - 1) / (t - 1)));
}
const uo = { relu: "ReLU", relu6: "ReLU6", silu: "SiLU", sigmoid: "Sigmoid" };
function zp({
  fn: i = "silu",
  width: e = 14,
  height: t = 14,
  channels: n = 12,
  // the pass-through tensor shape
  gap: r = 1.8,
  // seam the rays cross; the plate stands at its middle
  sampleSlices: s = 3,
  // channel slices sampled for rays
  sampleGrid: a = 4,
  // sampleGrid × sampleGrid pixels per sampled slice
  worldHeight: o = Mn,
  // face height (blocks pass the shared-pitch size)
  depthPerChannel: c = Zn,
  // channel pitch (blocks pass their compressed pitch)
  withVolumes: l = !0,
  // standalone demo draws its own in/out volumes; inside a
  // block the neighbors own them and this stays false
  withRays: f = !0,
  // false = plate + glyph only, a seam MARKER: dense conv
  // chains state "an activation stands here" without the
  // ray story (one full-ray gate elsewhere carries it)
  labelMode: h = "full"
  // 'full' = standalone label kit; 'none' = a parent block owns the labels
} = {}) {
  const u = `fn ${i}, ${e}×${t}×${n}`;
  if (!uo[i]) throw new Error(`ActivationGate: fn must be relu | relu6 | silu | sigmoid (${u})`);
  const m = { width: e, height: t, channels: n };
  wp("ActivationGate", m, u), Rp("ActivationGate", "gap", r, u), Cp("ActivationGate", h);
  const g = new dt(), v = Pp({ ...m, worldHeight: o, depthPerChannel: c, gap: r }), { faceW: p, faceH: d, d: S, inZ: y, outZ: b, plateZ: w, plateFrontZ: E, plateBackZ: R } = v;
  l && Lp(g, {
    ...m,
    worldHeight: o,
    depthPerChannel: c,
    opacity: 0.3,
    inCenterZ: y,
    outCenterZ: b
  }), g.add(...Dp({
    ...v,
    color: Ns,
    opacity: 0.07,
    edgeOpacity: 0.5,
    prefix: "ActivationGate"
  }));
  const _ = ($) => 1 / (1 + Math.exp(-$)), T = Bp, F = f ? Gp(s, n) : [], C = new De(Xr), L = new De(Ns), H = new De(Op), N = new De(), D = [], U = [], B = [], Y = [], Z = [], te = [], pe = ($, ce, ve, ne, Se) => {
    N.copy(Se).lerp(C, 1 - Math.min(1, ne)), D.push($, ce, ve), U.push(N.r, N.g, N.b, ne);
  }, xe = ($, ce, ve, ne, Se, le, Ae) => {
    pe($, ce, ve, ne, Ae), pe($, ce, Se, le, Ae);
  }, Ce = ($, ce, ve, ne, Se, le, Ae) => {
    N.copy(Ae).lerp(C, 1 - Math.min(1, le)), $.push(ve, ne, Se), ce.push(N.r, N.g, N.b, le);
  }, ke = ($) => Math.min(0.85, $ * 1.5);
  for (const $ of F) {
    const ce = y - S / 2 + $ * c, ve = b - S / 2 + $ * c;
    for (let ne = 0; ne < a; ne++)
      for (let Se = 0; Se < a; Se++) {
        const le = -p / 2 + (ne + 0.5) / a * p, Ae = -d / 2 + (Se + 0.5) / a * d, Ge = T(ne, Se, $), Te = 0.2 + 0.4 * Math.abs(Ge), $e = Ge < 0 ? H : L;
        if (xe(le, Ae, ce, Te, E, Te, $e), i === "relu" || i === "relu6")
          if (Ge < 0)
            Ce(B, Y, le, Ae, E, Math.min(1, Te + 0.15), H);
          else {
            const Xe = i === "relu6" ? Math.min(ke(Te), 0.55) : ke(Te);
            xe(le, Ae, R, Xe, ve, Xe, L), Ce(Z, te, le, Ae, ve, Xe, L);
          }
        else if (i === "silu")
          if (Ge < 0) {
            const Xe = R + (0.08 + 0.3 * (1 - Math.abs(Ge))) * (ve - R);
            xe(le, Ae, E, Math.min(Te * 0.7, 0.18), Xe, 0, H);
          } else {
            const Xe = ke(Te * (0.4 + 0.6 * _(3 * Ge)));
            xe(le, Ae, R, Xe, ve, Xe, L), Ce(Z, te, le, Ae, ve, Xe, L);
          }
        else {
          const Xe = 0.12 + 0.3 * _(2.5 * Ge);
          xe(le, Ae, R, Xe, ve, Xe, L), Ce(Z, te, le, Ae, ve, Xe, L);
        }
      }
  }
  const he = Ip(D, U, "ActivationGate/rays");
  he && g.add(he);
  const q = oo(B, Y, "ActivationGate/impactDots", 6.5);
  q && g.add(q);
  const ie = oo(Z, te, "ActivationGate/arrivalDots", 3);
  ie && g.add(ie);
  {
    const $ = Np(i);
    $.name = "ActivationGate/glyph", Fp($, v), g.add($);
  }
  if (h === "full") {
    const $ = gt([
      { text: `${uo[i]} · ${e}×${t}×${n} · element-wise`, fontSize: 32, color: "#8b93a3" },
      { text: "ActivationGate", fontSize: 56, color: "#c98d5e" }
    ]);
    $.name = "ActivationGate/label", $.position.set(0, Mn / 2 + 1.4, w), g.add($);
  }
  return g.name = "ActivationGate", g.userData = Up("ActivationGate", m, v, { fn: i }), Ft(g);
}
function Vp({
  mode: i = "global-avg",
  width: e = 14,
  height: t = 14,
  channels: n = 64,
  gap: r = 1.6,
  // input front face -> output column (or out face, max mode)
  pitch: s = jd,
  // channel-vector pitch of the output column (global-avg)
  // --- max-mode options (annex plan §2.7) ---
  kernel: a = 2,
  stride: o = 2,
  worldHeight: c = Mn,
  // input face height (blocks pass their buffered scale)
  inset: l = !1,
  // the max-arithmetic mini panel (draw ONCE per scene)
  labelMode: f = "compact",
  // 'compact' = one line | 'full' = + identity | 'none'
  values: h = null,
  // REAL input activations (width*height floats, 0..1):
  // faces get textured, the output is actually pooled,
  // and the window/inset use a real 2×2 from the data
  valueTag: u = null
  // e.g. 'ch 0' — names which channel the values are
} = {}) {
  const m = `mode ${i}, in ${e}×${t}×${n}`;
  if (e < 1 || t < 1 || n < 1) throw new Error(`PoolLayer: input dims must be >= 1 (${m})`);
  if (!(r > 0)) throw new Error(`PoolLayer: gap must be > 0 (${m})`);
  if (i === "max") {
    if (h && h.length !== e * t)
      throw new Error(`PoolLayer: values length ${h.length} != ${e}×${t} (${m})`);
    return kp({ width: e, height: t, channels: n, kernel: a, stride: o, gap: r, worldHeight: c, inset: l, labelMode: f, values: h, valueTag: u, cfg: m });
  }
  if (i !== "global-avg")
    throw i === "avg" ? new Error(`PoolLayer: mode 'avg' is reserved but not implemented yet (${m})`) : new Error(`PoolLayer: mode must be global-avg | max | avg (${m})`);
  const g = new dt(), v = 9741240, p = 14870768, d = Mn * (e / t), S = Mn, y = (n - 1) * Zn, b = y / 2 + r, w = Math.min(3, n), E = (N) => w > 1 ? Math.round((w - 1 - N) * (n - 1) / (w - 1)) : n - 1, R = /* @__PURE__ */ new Set(), _ = {};
  for (let N = 0; N < w; N++)
    R.add(E(N)), _[E(N)] = p;
  const T = Bn({
    width: e,
    height: t,
    channels: n,
    color: 9541060,
    channelColors: _,
    name: "InputFeatureMap",
    component: "InputFeatureMap"
  });
  T.position.z = 0, g.add(T);
  const F = (N) => (N - (n - 1) / 2) * s;
  {
    const N = [], D = [], U = new De();
    for (let te = 0; te < n; te++)
      N.push(0, F(te), b), U.set(R.has(te) ? p : v), D.push(U.r, U.g, U.b);
    const B = new Oe();
    B.setAttribute("position", new Ne(N, 3)), B.setAttribute("color", new Ne(D, 3));
    const Y = new dn(
      B,
      new sn({ vertexColors: !0, size: 3.5, sizeAttenuation: !1, transparent: !0, opacity: 0.9 })
    );
    Y.name = "PoolLayer/outputColumn";
    const Z = new Yn(
      new Oe().setFromPoints([
        new P(0, F(0), b),
        new P(0, F(n - 1), b)
      ]),
      new rt({ color: v, transparent: !0, opacity: 0.25 })
    );
    Z.name = "PoolLayer/outputSpine", g.add(Y, Z);
  }
  {
    const N = [[-d / 2, -S / 2], [d / 2, -S / 2], [d / 2, S / 2], [-d / 2, S / 2]], D = [], U = [];
    for (let Z = 0; Z < n; Z++) {
      const te = -y / 2 + Z * Zn;
      for (const [pe, xe] of N) {
        const Ce = [pe, xe, te, 0, F(Z), b];
        D.push(...Ce), R.has(Z) && U.push(...Ce);
      }
    }
    const B = new Tt(
      new Oe().setAttribute("position", new Ne(D, 3)),
      new rt({ color: v, transparent: !0, opacity: 0.09, depthWrite: !1 })
    );
    B.name = "PoolLayer/collapseFans";
    const Y = new Tt(
      new Oe().setAttribute("position", new Ne(U, 3)),
      new rt({ color: p, transparent: !0, opacity: 0.45, depthWrite: !1 })
    );
    Y.name = "PoolLayer/collapseFansAccent", g.add(B, Y);
  }
  const C = gt([
    { text: `${e} · ${t} · ${n}`, fontSize: 34, color: "#7f8b9c" },
    { text: "InputFeatureMap", fontSize: 48, color: "#cfd6e0" }
  ]);
  C.name = "InputFeatureMap/label", C.position.set(0, S / 2 + 0.5, 0);
  const L = gt([
    { text: `1 · 1 · ${n}`, fontSize: 30, color: "#7f8b9c" }
  ]);
  L.name = "PoolLayer/outputColumnLabel", L.position.set(0, F(n - 1) + 0.4, b), g.add(C, L);
  const H = gt([
    { text: `GAP · ${e}×${t}×${n} → 1×1×${n}`, fontSize: 32, color: "#8b93a3" },
    { text: "PoolLayer", fontSize: 56, color: "#94a3b8" }
  ]);
  return H.name = "PoolLayer/label", H.position.set(0, Mn / 2 + 2.4, b / 2), g.add(H), g.name = "PoolLayer", g.userData = {
    component: "PoolLayer",
    mode: i,
    input: { width: e, height: t, channels: n },
    output: { width: 1, height: 1, channels: n },
    anchors: {
      input: new P(0, 0, -y / 2),
      output: new P(0, 0, b)
    }
  }, Object.assign(Ft(g), {
    outPointPos: (N) => new P(0, F(N), b)
  });
}
const fo = [0.2, 3.1, 0.4, 1.1], Hp = (i) => i === 2 ? fo : Array.from({ length: i * i }, (e, t) => fo[t % 4] + 0.1 * Math.floor(t / 4));
function kp({ width: i, height: e, channels: t, kernel: n, stride: r, gap: s, worldHeight: a, inset: o, labelMode: c, values: l, valueTag: f, cfg: h }) {
  if (n < 1 || r < 1) throw new Error(`PoolLayer: kernel/stride must be >= 1 (${h})`);
  if (!["compact", "full", "none"].includes(c))
    throw new Error(`PoolLayer: labelMode must be compact | full | none (${h})`);
  const u = Math.floor((i - n) / r) + 1, m = Math.floor((e - n) / r) + 1;
  if (u < 1 || m < 1) throw new Error(`PoolLayer: window larger than input (${h})`);
  const g = new dt(), v = 9741240, p = a / e, d = i * p, S = m * p, y = (he, q) => {
    const ie = [];
    for (let $ = 0; $ < n; $++)
      for (let ce = 0; ce < n; ce++) ie.push(l[(he * r + $) * i + q * r + ce]);
    return ie;
  };
  let b = null, w = { r: 0, c: 0 };
  if (l) {
    b = new Float32Array(u * m);
    let he = -1 / 0;
    for (let q = 0; q < m; q++)
      for (let ie = 0; ie < u; ie++) {
        const $ = y(q, ie), ce = Math.max(...$);
        b[q * u + ie] = ce;
        const ve = ($.reduce((Ae, Ge) => Ae + Ge, 0) - ce) / ($.length - 1), ne = Math.min(...$), Se = new Set($.map((Ae) => Math.round(Ae * 100))).size === $.length, le = ce - ve - Math.abs(ce - 0.85) * 1.5 + (ne > 0.03 ? 0.3 : 0) + (Se ? 0.5 : 0);
        le > he && (he = le, w = { r: q, c: ie });
      }
  }
  const E = Bn({
    width: i,
    height: e,
    channels: 1,
    worldHeight: a,
    color: 9541060,
    opacity: 0.4,
    name: "PoolLayer/inFace"
  }), R = Bn({
    width: u,
    height: m,
    channels: 1,
    worldHeight: S,
    color: 9541060,
    opacity: 0.4,
    name: "PoolLayer/outFace"
  });
  if (R.position.z = s, g.add(E, R), l) {
    const he = (q, ie, $, ce, ve, ne, Se) => {
      const le = new Dt(
        new bn(ce, ve),
        new yn({
          map: qn(vp(q, ie, $, { max: 1 }), { srgb: !1 }),
          toneMapped: !1,
          side: 2,
          transparent: !0,
          opacity: 0.95
        })
      );
      le.name = Se, le.position.z = ne, g.add(le);
    };
    if (he(l, i, e, d, a, -4e-3, "PoolLayer/inData"), he(b, u, m, u * p, S, s - 4e-3, "PoolLayer/outData"), f) {
      const q = gt([
        { text: `${f} · real activation`, fontSize: 16, color: "#64748b" }
      ], { worldHeightPerLine: 0.18 });
      q.name = "PoolLayer/valueTag", q.position.set(0, -a / 2 - 0.28, 0), g.add(q);
    }
  }
  const _ = (he) => (he - (i - 1) / 2) * p, T = (he) => ((e - 1) / 2 - he) * p, F = (he) => (he - (u - 1) / 2) * p, C = (he) => ((m - 1) / 2 - he) * p, L = n * p / 2, H = [[-L, -L], [L, -L], [L, L], [-L, L]], N = [0.85, 0.3, 0.14], D = [], U = [], B = [], Y = [], Z = new De(v), te = (he, q, ie, $, ce, ve, ne) => {
    D.push(he, q, ie, $, ce, ve), U.push(Z.r, Z.g, Z.b, ne, Z.r, Z.g, Z.b, ne);
  };
  N.forEach((he, q) => {
    const ie = w.c + q;
    if (ie >= u) return;
    const $ = _(ie * r + (n - 1) / 2), ce = T(w.r * r + (n - 1) / 2);
    for (let Se = 0; Se < 4; Se++) {
      const [le, Ae] = H[Se], [Ge, Te] = H[(Se + 1) % 4];
      te($ + le, ce + Ae, 8e-3, $ + Ge, ce + Te, 8e-3, he);
    }
    for (let Se = 1; Se < n; Se++) {
      const le = -L + Se * p;
      te($ + le, ce - L, 8e-3, $ + le, ce + L, 8e-3, he * 0.6), te($ - L, ce + le, 8e-3, $ + L, ce + le, 8e-3, he * 0.6);
    }
    const ve = F(ie), ne = C(w.r);
    for (const [Se, le] of H) te($ + Se, ce + le, 8e-3, ve, ne, s - 8e-3, he * 0.7);
    B.push(ve, ne, s - 6e-3), Y.push(Z.r, Z.g, Z.b, Math.min(1, he + 0.1));
  });
  const pe = new Oe();
  pe.setAttribute("position", new Ne(D, 3)), pe.setAttribute("color", new Ne(U, 4));
  const xe = new Tt(
    pe,
    new rt({ vertexColors: !0, transparent: !0, depthWrite: !1 })
  );
  xe.name = "PoolLayer/windows";
  const Ce = new Oe();
  Ce.setAttribute("position", new Ne(B, 3)), Ce.setAttribute("color", new Ne(Y, 4));
  const ke = new dn(
    Ce,
    new sn({ vertexColors: !0, size: 4, sizeAttenuation: !1, transparent: !0, depthWrite: !1 })
  );
  if (ke.name = "PoolLayer/outputPixels", g.add(xe, ke), o) {
    const he = l ? y(w.r, w.c) : Hp(n), q = Math.max(...he), ie = (Ae) => Ae.toFixed(l ? 2 : 1), $ = Yi({
      texture: qn(Vr({
        rows: n,
        cols: n,
        cellPx: 96,
        fontScale: l ? 0.26 : 0.3,
        get: (Ae, Ge) => {
          const Te = he[Ae * n + Ge], $e = Te === q;
          return {
            text: ie(Te),
            fill: $e ? "rgba(226,232,240,0.22)" : null,
            color: $e ? "#e2e8f0" : "#7f8b9c"
          };
        }
      }), { nearest: !1 }),
      widthPx: n,
      heightPx: n,
      worldHeight: 0.7,
      frameColor: v,
      frameOpacity: 0.5
    });
    $.name = "PoolLayer/insetGrid";
    const ce = d / 2 + 1;
    $.position.set(ce, 0.2, s * 0.3);
    const ve = Yi({
      texture: qn(Vr({
        rows: 1,
        cols: 1,
        cellPx: 96,
        fontScale: l ? 0.26 : 0.3,
        get: () => ({ text: ie(q), fill: "rgba(226,232,240,0.22)", color: "#e2e8f0" })
      }), { nearest: !1 }),
      widthPx: 1,
      heightPx: 1,
      worldHeight: 0.35,
      frameColor: v,
      frameOpacity: 0.5
    });
    ve.name = "PoolLayer/insetOut", ve.position.set(ce + 1.1, 0.2, s * 0.7);
    const ne = new Yn(
      new Oe().setFromPoints([
        new P(ce + 0.35, 0.2, s * 0.3),
        new P(ce + 1.1 - 0.18, 0.2, s * 0.7)
      ]),
      new rt({ color: v, transparent: !0, opacity: 0.6 })
    );
    ne.name = "PoolLayer/insetLink";
    const Se = [
      { text: `max(${he.map(ie).join(", ")}) = ${ie(q)}`, fontSize: 20, color: "#8b93a3" },
      { text: "only the strongest evidence survives", fontSize: 16, color: "#64748b" }
    ];
    l && Se.push({ text: "measured 2×2 window · p1–p99 normalized", fontSize: 14, color: "#4b5563" });
    const le = gt(Se, { worldHeightPerLine: 0.22 });
    if (le.name = "PoolLayer/insetLabel", le.position.set(ce + 0.55, -0.62, s * 0.5), g.add($, ve, ne, le), l) {
      const Ae = _(w.c * r + (n - 1) / 2), Ge = T(w.r * r + (n - 1) / 2), Te = new Yn(
        new Oe().setFromPoints([
          new P(Ae + L, Ge, 0.01),
          new P(ce - 0.4, 0.2, s * 0.3)
        ]),
        new rt({ color: v, transparent: !0, opacity: 0.4 })
      );
      Te.name = "PoolLayer/insetCallout", g.add(Te);
    }
  }
  if (c !== "none") {
    const he = [
      { text: `maxpool ${n}×${n} s${r} · ${i}→${u}`, fontSize: 26, color: "#8b93a3" }
    ];
    c === "full" && he.push({ text: "PoolLayer", fontSize: 44, color: "#94a3b8" });
    const q = gt(he, { worldHeightPerLine: 0.28 });
    q.name = "PoolLayer/label", q.position.set(0, a / 2 + 0.5, s / 2), g.add(q);
  }
  return g.name = "PoolLayer", g.userData = {
    component: "PoolLayer",
    mode: "max",
    kernel: { width: n, height: n, stride: r },
    input: { width: i, height: e, channels: t },
    output: { width: u, height: m, channels: t },
    anchors: {
      input: new P(0, 0, 0),
      output: new P(0, 0, s)
    }
  }, Ft(g);
}
const ho = [13216092, 13209008, 7644868, 7842700, 13602711], Ci = 32, Nn = Ci * 2, Os = 0.055, Wp = 0.55, Xp = (Ci - 1) * Os, Ki = 2 * Xp + Wp, qp = 13358561, po = 6583435;
function rn(i) {
  return i < Ci ? Ki / 2 - i * Os : -Ki / 2 + (Nn - 1 - i) * Os;
}
function Zo(i, e) {
  return i < Ci ? i : e - (Nn - i);
}
const Bs = (i) => String(i).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
function Gs({ units: i, acts: e = null, color: t = qp, countLabel: n = !0 }) {
  const r = new dt();
  r.name = "NeuronColumn";
  const s = new De(t), a = [], o = [];
  for (let d = 0; d < Nn; d++) {
    const S = e ? e[Zo(d, i)] : null, y = e ? 0.12 + 0.78 * S : 0.5;
    a.push(0, rn(d), 0), o.push(s.r, s.g, s.b, y);
  }
  const c = new Oe();
  c.setAttribute("position", new Ne(a, 3)), c.setAttribute("color", new Ne(o, 4));
  const l = new dn(
    c,
    new sn({ vertexColors: !0, size: 3.5, sizeAttenuation: !1, transparent: !0, depthWrite: !1 })
  );
  l.name = "NeuronColumn/dots", r.add(l);
  const f = [
    new P(0, rn(0), 0),
    new P(0, rn(Ci - 1), 0),
    new P(0, rn(Ci), 0),
    new P(0, rn(Nn - 1), 0)
  ], h = new Tt(
    new Oe().setFromPoints(f),
    new rt({ color: po, transparent: !0, opacity: 0.3 })
  );
  h.name = "NeuronColumn/spine", r.add(h);
  const u = [], m = 0.16, g = 0.07, v = 4;
  for (let d = 0; d <= v; d++)
    u.push(new P(-m / 2 + d / v * m, (d % 2 === 0 ? -1 : 1) * g, 0));
  const p = new Yn(
    new Oe().setFromPoints(u),
    new rt({ color: po, transparent: !0, opacity: 0.8 })
  );
  if (p.name = "NeuronColumn/fold", r.add(p), n) {
    const d = gt([
      { text: `⋮ ${Bs(i)}`, fontSize: 24, color: "#8b93a3" }
    ], { worldHeightPerLine: 0.26 });
    d.name = "NeuronColumn/count", d.position.set(0.55, 0, 0), r.add(d);
  }
  return r;
}
function $p({
  inUnits: i,
  outUnits: e,
  activation: t = null,
  // 'relu' | null — noted on the label (annex §2.8)
  acts: n = null,
  // real out activations, 0..1 array of length outUnits
  params: r = null,
  // learned parameter count for the callout
  title: s = "fc",
  gap: a = 2.2,
  // fan length between the two columns
  drawInColumn: o = !0,
  // false when chained after a column someone else drew
  accent: c = $i
} = (
  /** @type {*} */
  {}
)) {
  const l = `${s}: ${i}→${e}`;
  if (!(i >= 1) || !(e >= 1)) throw new Error(`FcLayer: units must be >= 1 (${l})`);
  if (!(a > 0)) throw new Error(`FcLayer: gap must be > 0 (${l})`);
  if (n && n.length !== e) throw new Error(`FcLayer: acts length ${n.length} != outUnits (${l})`);
  const f = new dt();
  if (o) {
    const g = Gs({ units: i });
    g.name = "FcLayer/inColumn", f.add(g);
  }
  const h = Gs({ units: e, acts: n });
  h.name = "FcLayer/outColumn", h.position.z = a, f.add(h);
  {
    const g = [];
    for (let p = 0; p < Nn; p++)
      for (let d = 0; d < Nn; d++) g.push(0, rn(p), 0, 0, rn(d), a);
    const v = new Tt(
      new Oe().setAttribute("position", new Ne(g, 3)),
      new rt({ color: 6583435, transparent: !0, opacity: 0.028, depthWrite: !1 })
    );
    v.name = "FcLayer/fanBed", f.add(v);
  }
  {
    const g = ho.length, v = [], p = [], d = [], S = [], y = new De();
    for (let _ = 0; _ < g; _++) {
      const T = Math.round(_ * (Nn - 1) / (g - 1));
      y.set(ho[_]);
      const F = rn(T), C = n ? Math.max(0.18, 0.15 + 0.6 * n[Zo(T, e)]) : 0.3;
      for (let L = 0; L < Nn; L++)
        v.push(0, rn(L), 0, 0, F, a), p.push(y.r, y.g, y.b, C * 0.45, y.r, y.g, y.b, C);
      d.push(0, F, a), S.push(y.r, y.g, y.b, Math.min(1, C + 0.3));
    }
    const b = new Oe();
    b.setAttribute("position", new Ne(v, 3)), b.setAttribute("color", new Ne(p, 4));
    const w = new Tt(
      b,
      new rt({ vertexColors: !0, transparent: !0, depthWrite: !1 })
    );
    w.name = "FcLayer/highlightFans";
    const E = new Oe();
    E.setAttribute("position", new Ne(d, 3)), E.setAttribute("color", new Ne(S, 4));
    const R = new dn(
      E,
      new sn({ vertexColors: !0, size: 5, sizeAttenuation: !1, transparent: !0, depthWrite: !1 })
    );
    R.name = "FcLayer/highlightDots", f.add(w, R);
  }
  const u = [
    { text: `${Bs(i)}→${Bs(e)}${t ? " · ReLU" : ""}`, fontSize: 24, color: "#8b93a3" },
    { text: s, fontSize: 40, color: `#${new De(c).getHexString()}` }
  ];
  r != null && u.push({ text: `${(r / 1e6).toFixed(1)}M params`, fontSize: 20, color: "#8b93a3" });
  const m = gt(u, { worldHeightPerLine: 0.28 });
  return m.name = "FcLayer/label", m.position.set(0, Ki / 2 + 0.95, a), f.add(m), f.name = "FcLayer", f.userData = {
    component: "FcLayer",
    input: { units: i },
    output: { units: e },
    activation: t,
    params: r,
    anchors: {
      input: new P(0, 0, 0),
      output: new P(0, 0, a)
    }
  }, Ft(f);
}
const Yp = 9541060, Kp = 9741240;
function Zp({
  width: i = 7,
  height: e = 7,
  channels: t = 512,
  sampled: n = 3,
  // channel slices actually drawn
  gap: r = 2.4,
  // slices -> column
  worldHeight: s = 0.78,
  // slice face height (pass the block's buffered scale)
  slicePitch: a = 0.3
  // z pitch between the sampled slices
} = {}) {
  const o = `${i}×${e}×${t}, sampled ${n}`;
  if (i < 1 || e < 1 || t < 1) throw new Error(`FlattenGlyph: dims must be >= 1 (${o})`);
  if (n < 2 || n > t) throw new Error(`FlattenGlyph: sampled must be in 2..channels (${o})`);
  if (!(r > a * n)) throw new Error(`FlattenGlyph: gap must clear the slice stack (${o})`);
  const c = i * e * t, l = new dt(), f = s / e, h = (_) => (_ - (i - 1) / 2) * f, u = (_) => ((e - 1) / 2 - _) * f, m = (_) => _ * a, g = [], v = [], p = i * f / 2, d = s / 2;
  for (let _ = 0; _ < n; _++) {
    const T = m(_);
    g.push(
      -p,
      -d,
      T,
      p,
      -d,
      T,
      p,
      -d,
      T,
      p,
      d,
      T,
      p,
      d,
      T,
      -p,
      d,
      T,
      -p,
      d,
      T,
      -p,
      -d,
      T
    );
    for (let F = 0; F < e; F++) for (let C = 0; C < i; C++) v.push(h(C), u(F), T);
  }
  const S = new Tt(
    new Oe().setAttribute("position", new Ne(g, 3)),
    new rt({ color: Yp, transparent: !0, opacity: 0.45 })
  );
  S.name = "FlattenGlyph/slices";
  const y = new dn(
    new Oe().setAttribute("position", new Ne(v, 3)),
    new sn({ color: 13358561, size: 2.5, sizeAttenuation: !1, transparent: !0, opacity: 0.6, depthWrite: !1 })
  );
  y.name = "FlattenGlyph/pixels", l.add(S, y);
  const b = gt([
    { text: `${n} of ${t} channels shown`, fontSize: 18, color: "#64748b" }
  ], { worldHeightPerLine: 0.2 });
  b.name = "FlattenGlyph/sliceTag", b.position.set(0, -d - 0.4, m(n - 1) / 2), l.add(b);
  const w = Gs({ units: c });
  w.name = "FlattenGlyph/column", w.position.z = r, l.add(w);
  {
    const _ = [], T = [], F = new De(Kp), C = (U, B, Y, Z, te, pe, xe, Ce) => {
      _.push(U, B, Y, te, pe, xe), T.push(F.r, F.g, F.b, Z, F.r, F.g, F.b, Ce);
    }, L = 32;
    for (let U = 0; U < L; U++) {
      const B = Math.floor(U / i), Y = U % i;
      C(h(Y), u(B), m(0), 0.3, 0, rn(U), r, 0.3);
      const Z = i * e - L + U, te = Math.floor(Z / i), pe = Z % i;
      C(h(pe), u(te), m(n - 1), 0.3, 0, rn(L + U), r, 0.3);
    }
    const H = Math.floor(n / 2);
    for (let U = 0; U < i; U++)
      C(h(U), u(Math.floor(e / 2)), m(H), 0.22, 0, 0, r * 0.92, 0);
    const N = new Oe();
    N.setAttribute("position", new Ne(_, 3)), N.setAttribute("color", new Ne(T, 4));
    const D = new Tt(
      N,
      new rt({ vertexColors: !0, transparent: !0, depthWrite: !1 })
    );
    D.name = "FlattenGlyph/fan", l.add(D);
  }
  const E = gt([
    { text: `${i}×${e}×${t} → ${c.toLocaleString("en-US").replace(/,/g, " ")}`, fontSize: 26, color: "#8b93a3" },
    { text: "flatten", fontSize: 40, color: "#94a3b8" }
  ]);
  E.name = "FlattenGlyph/label", E.position.set(0, Ki / 2 + 0.9, r / 2), l.add(E);
  const R = gt([
    { text: "space becomes a list — order kept, geometry gone", fontSize: 20, color: "#8b93a3" }
  ], { worldHeightPerLine: 0.22 });
  return R.name = "FlattenGlyph/didactic", R.position.set(0, -Ki / 2 - 0.5, r), l.add(R), l.name = "FlattenGlyph", l.userData = {
    component: "FlattenGlyph",
    input: { width: i, height: e, channels: t },
    output: { units: c },
    anchors: {
      input: new P(0, 0, 0),
      output: new P(0, 0, r)
    }
  }, Ft(l);
}
const jp = [201, 169, 92], Jp = [95, 182, 196];
function Qp(i, { signed: e }) {
  const t = i.length;
  let n = 0;
  for (const o of i) n = Math.max(n, Math.abs(o));
  n === 0 && (n = 1);
  const r = Di(t, 1), s = r.getContext("2d"), a = s.createImageData(t, 1);
  for (let o = 0; o < t; o++) {
    const c = i[o], l = Math.min(1, Math.abs(c) / n), [f, h, u] = e && c < 0 ? Jp : jp;
    a.data[o * 4] = f * l, a.data[o * 4 + 1] = h * l, a.data[o * 4 + 2] = u * l, a.data[o * 4 + 3] = 255;
  }
  return s.putImageData(a, 0, 0), r;
}
function em({
  logits: i,
  // 1000 real logits (exporter fc_acts.json)
  top5: e,
  // [{ index, label, prob }] from the manifest
  accent: t = $i,
  stripWorld: n = 10,
  // strip width (plan: "가로 ~10wu")
  flopsBanner: r = null,
  // closing line, e.g. '15.5 billion multiply-adds later:'
  bannerNote: s = null
  // small caption under the banner, e.g. 'and it is right — Mimi is a miniature pinscher'
} = (
  /** @type {*} */
  {}
)) {
  const a = `logits ${i?.length}, top5 ${e?.length}`;
  if (!i?.length) throw new Error(`SoftmaxHead: logits are required (${a})`);
  if (!e?.length) throw new Error(`SoftmaxHead: top5 is required (${a})`);
  const o = i.length, c = new dt(), l = `#${new De(t).getHexString()}`, f = Math.max(...i), h = i.map((E) => Math.exp(E - f)), u = h.reduce((E, R) => E + R, 0), m = h.map((E) => E / u), g = 0.34, v = 1.7, p = (E) => -n / 2 + E / (o - 1) * n, d = (E, R, _, T) => {
    const F = new Dt(
      new bn(n, g),
      new yn({
        map: qn(Qp(E, { signed: R })),
        toneMapped: !1,
        side: 2
      })
    );
    F.name = `SoftmaxHead/strip@${_}`, F.position.z = _, c.add(F);
    const C = new Kn(
      new Oe().setFromPoints([
        new P(-n / 2, -g / 2, _ + 4e-3),
        new P(n / 2, -g / 2, _ + 4e-3),
        new P(n / 2, g / 2, _ + 4e-3),
        new P(-n / 2, g / 2, _ + 4e-3)
      ]),
      new rt({ color: 4674921, transparent: !0, opacity: 0.7 })
    );
    C.name = "SoftmaxHead/stripFrame", c.add(C);
    const L = gt([{ text: T, fontSize: 20, color: "#8b93a3" }], { worldHeightPerLine: 0.22 });
    L.name = "SoftmaxHead/stripCaption", L.position.set(-n / 2 - 1.1, 0, _), c.add(L);
  };
  d(i, !0, 0, `logits · ${o}`), d(m, !1, v, "softmax · Σ = 1");
  {
    const E = [];
    for (const _ of e) {
      const T = p(_.index);
      E.push(T, g / 2 + 0.02, 0, T, g / 2 + 0.16, 0), E.push(T, g / 2 + 0.02, v, T, g / 2 + 0.16, v), E.push(T, 0, 0.06, T, 0, v - 0.06);
    }
    const R = new Tt(
      new Oe().setAttribute("position", new Ne(E, 3)),
      new rt({ color: t, transparent: !0, opacity: 0.55 })
    );
    R.name = "SoftmaxHead/top5Ticks", c.add(R);
  }
  const S = gt([
    { text: "pᵢ = exp(zᵢ) / Σⱼ exp(zⱼ)", fontSize: 26, color: "#cfd6e0" },
    { text: "scores become one shared budget of belief", fontSize: 18, color: "#8b93a3" }
  ], { worldHeightPerLine: 0.26 });
  S.name = "SoftmaxHead/formula", S.position.set(0, g / 2 + 0.85, v / 2), c.add(S);
  const y = v + 1.6, b = 0.22;
  e.forEach((E, R) => {
    const _ = Math.max(0.08, E.prob * 12), T = new Dt(
      new ei(_, b, 0.02),
      new yn({ color: R === 0 ? t : 4674921 })
    );
    T.name = `SoftmaxHead/bar${R}`, T.position.set(-3.5 + _ / 2, 1.1 - R * 0.5, y), c.add(T);
    const F = gt([{
      text: `${E.label} · ${E.prob.toFixed(2)}`,
      fontSize: R === 0 ? 26 : 20,
      color: R === 0 ? l : "#8b93a3"
    }], { worldHeightPerLine: 0.26 });
    F.name = `SoftmaxHead/barTag${R}`, F.position.set(-3.3 + _ + 0.9, 1.1 - R * 0.5, y), c.add(F);
  });
  const w = gt([
    { text: "1000 class scores · one winner", fontSize: 26, color: "#8b93a3" },
    { text: "softmax", fontSize: 44, color: l }
  ]);
  if (w.name = "SoftmaxHead/label", w.position.set(0, 2.6, v / 2), c.add(w), r) {
    const E = [
      { text: r, fontSize: 26, color: "#8b93a3" },
      { text: `its best guess: ${e[0].label} (${Math.round(e[0].prob * 100)}%)`, fontSize: 34, color: l }
    ];
    s && E.push({ text: s, fontSize: 20, color: "#8b93a3" });
    const R = gt(E, { worldHeightPerLine: 0.3 });
    R.name = "SoftmaxHead/closingBanner", R.position.set(0, -1.6, y + 0.6), c.add(R);
  }
  return c.name = "SoftmaxHead", c.userData = {
    component: "SoftmaxHead",
    input: { units: o },
    output: { classes: o },
    top5: e,
    anchors: {
      input: new P(0, 0, 0),
      output: new P(0, 0, y)
    }
  }, Ft(c);
}
const Pr = "/";
let mo = null;
function tm() {
  return mo ??= nm(), mo;
}
async function nm() {
  let i;
  try {
    const r = await fetch(`${Pr}vgg16/manifest.json`);
    if (!r.ok) return null;
    i = await r.json();
  } catch {
    return null;
  }
  const e = new $l(), t = (r, { srgb: s }) => new Promise((a, o) => {
    e.load(`${Pr}vgg16/${r}`, (c) => {
      c.generateMipmaps = !1, c.minFilter = 1003, c.magFilter = 1003, s && (c.colorSpace = Wt), a(c);
    }, void 0, o);
  });
  let n;
  try {
    const [r, s, a] = await Promise.all([
      t(i.kernels.atlas, { srgb: !0 }),
      Promise.all(i.blocks.map((o) => t(o.atlas, { srgb: !1 }).then((c) => [o.id, c]))),
      fetch(`${Pr}vgg16/${i.fcActs}`).then((o) => o.ok ? o.json() : null).catch(() => null)
    ]);
    n = {
      manifest: i,
      kernelsTex: r,
      blockTex: Object.fromEntries(s),
      fcActs: a,
      weights: (
        /** @type {object | null} */
        null
      )
    };
  } catch {
    return null;
  }
  if (i.weights)
    try {
      const r = i.weights, [s, a, o] = await Promise.all([
        t(r.init.atlas, { srgb: !0 }),
        Promise.all(Object.entries(r.atlases).map(
          ([c, l]) => t(l.atlas, { srgb: !0 }).then((f) => [c, f])
        )),
        fetch(`${Pr}vgg16/${r.stats}`).then((c) => c.ok ? c.json() : null)
      ]);
      o && (n.weights = { manifest: r, initTex: s, sliceTex: Object.fromEntries(a), stats: o });
    } catch {
    }
  return n;
}
function im(i) {
  if (!i?.fcActs) return null;
  const e = (r) => {
    const s = Uint8Array.from(atob(r.b64), (o) => o.charCodeAt(0)), a = new Float32Array(s.length);
    for (let o = 0; o < s.length; o++) a[o] = s[o] / 255;
    return a;
  }, t = i.fcActs.logits;
  let n = 0;
  for (const r of t) n = Math.max(n, Math.abs(r));
  return {
    fc6: e(i.fcActs.fc6),
    fc7: e(i.fcActs.fc7),
    logits: t,
    fc8: Float32Array.from(t, (r) => Math.abs(r) / (n || 1))
  };
}
const rm = (i) => Mn * Math.sqrt(i / 56), go = [
  { id: "B1", res: 224, inCh: 3, ch: 64, convs: 2 },
  { id: "B2", res: 112, inCh: 64, ch: 128, convs: 2 },
  { id: "B3", res: 56, inCh: 128, ch: 256, convs: 3 },
  { id: "B4", res: 28, inCh: 256, ch: 512, convs: 3 },
  { id: "B5", res: 14, inCh: 512, ch: 512, convs: 3 }
], Rs = 0.55, _o = 0.55, xo = 0.25, vo = 3.3, sm = 6583435;
async function am(i, { x: e = 0, z0: t = 0 } = {}) {
  const n = "/vgg16/input_224.png", [r, s] = await Promise.all([tm(), gp(n, 224)]), a = new dt();
  a.name = "Vgg16Full", a.position.set(e, Ti / 2, t), i.add(a);
  const o = rm(224) / 224, c = (_, T, F) => {
    const C = gt(_, { worldHeightPerLine: 0.26 });
    C.position.set(0, vo, T), a.add(C);
    const L = new Yn(
      new Oe().setFromPoints([
        new P(0, vo - 0.13 * _.length - 0.1, T),
        new P(0, F + 0.06, T)
      ]),
      new rt({ color: sm, transparent: !0, opacity: 0.4 })
    );
    return L.name = "Vgg16Full/labelLeader", a.add(L), C;
  }, l = s ?? _p(224), f = Yi({
    texture: qn(xp(l)),
    worldHeight: 224 * o,
    frameColor: $i,
    title: "input",
    dims: "224 · 224 · 3"
  });
  f.name = "Vgg16Full/input", f.position.z = -1, a.add(f);
  let h = 0;
  for (const _ of go) {
    const T = go.indexOf(_) + 1, F = _.res * o, C = (_.ch - 1) * bi;
    let L = 0;
    for (let D = 0; D < _.convs; D++) {
      const U = D === 0 ? _.inCh : _.ch, B = (U - 1) * bi, Y = Ap({
        inWidth: _.res,
        inHeight: _.res,
        inChannels: U,
        outChannels: _.ch,
        kWidth: 3,
        kHeight: 3,
        stride: 1,
        padding: 1,
        gap: Rs,
        worldHeight: F,
        depthPerChannel: bi,
        drawInput: D === 0,
        labelMode: "none",
        inset: !1,
        kernelsShown: _.ch >= 256 ? 3 : 5,
        ghostWindows: U >= 256 ? 3 : U >= 64 ? 6 : 12
      });
      Y.name = `Vgg16Full/${_.id}/conv${T}_${D + 1}`, Y.position.z = D === 0 ? h + B / 2 : L, a.add(Y), L = Y.position.z + B / 2 + Rs + C / 2;
      const Z = zp({
        fn: "relu",
        width: _.res,
        height: _.res,
        channels: _.ch,
        gap: Rs,
        worldHeight: F,
        depthPerChannel: bi,
        withVolumes: !1,
        withRays: !1,
        labelMode: "none"
      });
      Z.name = `${Y.name}/relu`, Z.position.z = Y.position.z + B / 2 - C / 2, a.add(Z);
    }
    c([
      { text: `${_.res} · ${_.res} · ${_.ch}`, fontSize: 22, color: "#7f8b9c" },
      { text: _.id, fontSize: 34, color: "#6cac94" },
      { text: `${_.convs}× conv3×3+ReLU → pool÷2`, fontSize: 15, color: "#8b93a3" }
    ], L, F / 2);
    const H = Vp({
      mode: "max",
      width: _.res,
      height: _.res,
      channels: _.ch,
      kernel: 2,
      stride: 2,
      gap: _o,
      worldHeight: F,
      inset: !1,
      labelMode: "none"
    });
    H.name = `Vgg16Full/${_.id}/pool`;
    const N = L + C / 2 + xo;
    H.position.z = N, a.add(H), h = N + _o + xo;
  }
  const u = 7 * o, m = 511 * bi, g = Bn({
    width: 7,
    height: 7,
    channels: 512,
    worldHeight: u,
    depthPerChannel: bi,
    color: $i,
    opacity: 0.55
  });
  g.name = "Vgg16Full/pool5/volume", g.position.z = h + m / 2, a.add(g), c([
    { text: "7 · 7 · 512", fontSize: 22, color: "#7f8b9c" },
    { text: "pool5", fontSize: 34, color: "#6cac94" }
  ], h + m / 2, u / 2), h += m + 0.3;
  const v = 1.4, p = 1.4, d = Zp({
    width: 7,
    height: 7,
    channels: 512,
    worldHeight: u,
    gap: v
  });
  d.name = "Vgg16Full/flatten", d.position.z = h, a.add(d), h += v;
  const S = im(r), y = r?.manifest?.fcLayers, b = (_, T, F, C, L, H) => {
    const N = $p({
      inUnits: T,
      outUnits: F,
      acts: C ?? null,
      activation: L,
      params: y?.[_]?.params ?? H,
      title: _,
      gap: p,
      drawInColumn: !1
    });
    N.name = `Vgg16Full/${_}`, N.position.z = h, a.add(N), h += p;
  };
  if (b("fc6", 25088, 4096, S?.fc6, "relu", 102764544), b("fc7", 4096, 4096, S?.fc7, "relu", 16781312), b("fc8", 4096, 1e3, S?.fc8, null, 4097e3), S && r?.manifest?.top5) {
    const _ = em({ logits: S.logits, top5: r.manifest.top5 });
    _.name = "Vgg16Full/softmax", _.position.z = h + 0.8, a.add(_);
  }
  a.updateMatrixWorld(!0);
  const w = new Gn().setFromObject(a), E = [(w.min.x + w.max.x) / 2, (w.min.y + w.max.y) / 2, (w.min.z + w.max.z) / 2], R = w.max.z - w.min.z;
  return a.userData = {
    component: "Vgg16Full",
    span: h,
    view: {
      id: "model",
      title: "whole model",
      center: E,
      size: [w.max.x - w.min.x, w.max.y - w.min.y, w.max.z - w.min.z],
      cam: [E[0] - R * 0.68, E[1] + R * 0.16, E[2] + R * 0.1],
      // aim a touch past the center so the B1 end clears the nav rail
      target: [E[0], E[1], E[2] + R * 0.04]
    }
  }, a;
}
const om = /* @__PURE__ */ new Set(["FormulaPlate", "TrainingCurveChart", "WeightHistogram"]), lm = /zoom|inset|formula|indexStrip/i;
function Cs(i) {
  i.traverse((e) => {
    /** @type {any} */
    (e.isSprite || om.has(e.userData?.component) || lm.test(e.name || "")) && (e.visible = !1);
  });
}
const Fr = (
  /** @type {Record<string, [number, number, number]>} */
  {
    sandbox: [0, 0, 0],
    convolution: [300, 0, 0],
    vgg16: [600, 0, 0]
  }
);
function cm(i) {
  const e = new dt();
  e.name = "HeroWorld/sandbox", e.position.set(...Fr.sandbox);
  const t = np();
  t.position.set(-9.5, Ti / 2, 0), e.add(t);
  const n = ip({ count: 100, extent: 6 });
  n.position.set(-9.5, Ti / 2, 0), e.add(n);
  const r = rp({ color: 16777215, name: "CapturedFrame", component: "CapturedFrame" });
  r.position.set(-9.5, Ti / 2, 6), e.add(r);
  const s = ap({ channels: 3, size: 2.6 });
  s.position.set(-9.5, Ti / 2, 21), e.add(s), i.add(e);
  const a = new dt();
  a.name = "HeroWorld/convolution", a.position.set(...Fr.convolution);
  const o = Ep({ labelMode: "none" });
  o.position.set(0, Ti / 2 + 0.5, 11), a.add(o), i.add(a);
  const c = new dt();
  c.name = "HeroWorld/vgg16", c.position.set(...Fr.vgg16), i.add(c);
  const l = am(
    /** @type {any} */
    c,
    { x: 0, z0: 0 }
  ).then(() => {
    Cs(c), c.updateMatrixWorld(!0);
  });
  return Cs(e), Cs(a), { ready: l };
}
const um = 0.7, So = 15, Mo = 45, fm = 40;
async function hm(i, { force: e = !1, onFallback: t, onLive: n }) {
  const r = { state: "booting", frames: 0, avgMs: 0, shot: "", t: 0, why: "" };
  window.__heroLive = r;
  let s;
  try {
    s = new Zd({ antialias: !0, powerPreference: "high-performance" });
  } catch {
    return r.state = "fallback", t("no-webgl"), { dispose() {
    } };
  }
  s.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const a = s.domElement;
  a.className = "live", a.setAttribute("aria-hidden", "true");
  const o = document.createElement("div");
  o.className = "dip", i.appendChild(a), i.appendChild(o);
  const c = new El();
  c.background = new De(Xr), c.add(new jl(16777215, 0.6));
  const l = new Zl(16777215, 1.2);
  l.position.set(5, 8, 5), c.add(l);
  const f = new Qt(50, 1, 0.1, 1e3), h = () => {
    const N = i.clientWidth || 1, D = i.clientHeight || 1;
    s.setSize(N, D, !1), f.aspect = N / D, f.updateProjectionMatrix();
  };
  h();
  const u = "ResizeObserver" in window ? new ResizeObserver(h) : null;
  u?.observe(i);
  const m = cm(c);
  try {
    await m.ready;
  } catch (N) {
    console.warn("[hero] vgg16 chain unavailable:", N);
  }
  const g = ep.map((N) => Qd.find((D) => D.id === N)).filter((N) => !!N);
  let v = 0, p = 0, d = 0, S = 0, y = !0, b = !1, w = 0;
  const E = (N, D) => {
    const U = Fr[N.page] ?? [0, 0, 0], B = io(N.keys, "cam", D), Y = io(N.keys, "target", D);
    f.fov !== N.fov && (f.fov = N.fov, f.updateProjectionMatrix()), f.position.set(B[0] + U[0], B[1] + U[1], B[2] + U[2]), f.lookAt(Y[0] + U[0], Y[1] + U[1], Y[2] + U[2]);
  }, R = (N) => {
    if (b) return;
    S = requestAnimationFrame(R);
    const D = g[v];
    p || (p = N, d = N);
    const U = (N - p) / 1e3;
    if (U >= D.seconds) {
      v = (v + 1) % g.length, p = N;
      return;
    }
    const B = tp(D.ease, U / D.seconds);
    E(D, B);
    const Y = Math.min(U, D.seconds - U);
    o.style.opacity = String(Math.max(0, 1 - Y / um)), s.render(c, f), r.shot = D.id, r.t = B, r.frames++;
    const Z = N - d;
    if (d = N, !e && r.state === "booting") {
      if (r.frames > So && (w += Z), r.frames === So + Mo) {
        if (r.avgMs = w / Mo, r.avgMs > fm) {
          H(`slow: ${r.avgMs.toFixed(0)} ms/frame`);
          return;
        }
        r.state = "live";
      }
    } else r.state === "booting" && r.frames === 1 && (r.state = "live");
    r.frames === 1 && n();
  }, _ = () => {
    !S && y && !document.hidden && !b && (p = 0, S = requestAnimationFrame(R));
  }, T = () => {
    S && (cancelAnimationFrame(S), S = 0);
  }, F = "IntersectionObserver" in window ? new IntersectionObserver((N) => {
    y = N.some((D) => D.isIntersecting), y ? _() : T();
  }, { threshold: 0.05 }) : null;
  F?.observe(i);
  const C = () => {
    document.hidden ? T() : _();
  };
  document.addEventListener("visibilitychange", C);
  const L = () => {
    b || (b = !0, T(), F?.disconnect(), u?.disconnect(), document.removeEventListener("visibilitychange", C), c.traverse((N) => {
      N.dispose?.();
    }), s.dispose(), a.remove(), o.remove());
  }, H = (N) => {
    r.state = "fallback", r.why = N, L(), t(N);
  };
  return _(), { dispose: L };
}
export {
  hm as mountHeroLive
};
