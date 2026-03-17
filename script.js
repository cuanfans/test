"use strict";

(() => {

  console.log("[!] Cracked by Slebewewe");
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function Buffer3(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer3.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer3.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer3.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer3.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer3.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer3.alloc(+length);
      }
      Buffer3.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer3.prototype;
      };
      Buffer3.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array))
          a = Buffer3.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array))
          b = Buffer3.from(b, b.offset, b.byteLength);
        if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer3.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer3.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf))
                buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer3.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer3.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer3.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer3.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer3.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = function equals(b) {
        if (!Buffer3.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer3.compare(this, b) === 0;
      };
      Buffer3.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer3.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining)
          length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer3.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0)
          start = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer3.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0)
            start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start)
          end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
      }
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start)
          start = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start)
          end = start;
        if (end === start)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer3.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length)
            break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/frida-il2cpp-bridge/dist/index.js
  var __decorate = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  function raise(message) {
    const error = new Error(`\x1B[0m${message}`);
    error.name = `\x1B[0m\x1B[38;5;9mil2cpp\x1B[0m`;
    error.stack = error.stack?.replace("Error", error.name)?.replace(/\n    at (.+) \((.+):(.+)\)/, "\x1B[3m\x1B[2m")?.concat("\x1B[0m");
    throw error;
  }
  function warn(message) {
    globalThis.console.log(`\x1B[38;5;11mil2cpp\x1B[0m: ${message}`);
  }
  function ok(message) {
    globalThis.console.log(`\x1B[38;5;10mil2cpp\x1B[0m: ${message}`);
  }
  function inform(message) {
    globalThis.console.log(`\x1B[38;5;12mil2cpp\x1B[0m: ${message}`);
  }
  function getter(target, key, get, decorator) {
    globalThis.Object.defineProperty(target, key, decorator?.(target, key, { get, configurable: true }) ?? { get });
  }
  function lazy(_, propertyKey, descriptor) {
    const getter2 = descriptor.get;
    if (!getter2) {
      throw new Error("@lazy can only be applied to getter accessors");
    }
    descriptor.get = function() {
      const value = getter2.call(this);
      Object.defineProperty(this, propertyKey, {
        value,
        configurable: descriptor.configurable,
        enumerable: descriptor.enumerable,
        writable: false
      });
      return value;
    };
    return descriptor;
  }
  var NativeStruct = class {
    handle;
    constructor(handleOrWrapper) {
      if (handleOrWrapper instanceof NativePointer) {
        this.handle = handleOrWrapper;
      } else {
        this.handle = handleOrWrapper.handle;
      }
    }
    equals(other) {
      return this.handle.equals(other.handle);
    }
    isNull() {
      return this.handle.isNull();
    }
  };
  var NonNullNativeStruct = class extends NativeStruct {
    constructor(handle) {
      super(handle);
      if (handle.isNull()) {
        throw new Error(`Handle for "${this.constructor.name}" cannot be NULL.`);
      }
    }
  };
  var Target = class {
    stringEncoding;
    address;
    constructor(responsible, name, stringEncoding) {
      this.stringEncoding = stringEncoding;
      this.address = Module.findExportByName(responsible, name) ?? NULL;
    }
    static get targets() {
      function info() {
        switch (Process.platform) {
          case "linux":
            try {
              if (UnityVersion.gte(Java.androidVersion, "12")) {
                return [null, ["__loader_dlopen", "utf8"]];
              } else {
                return ["libdl.so", ["dlopen", "utf8"], ["android_dlopen_ext", "utf8"]];
              }
            } catch (e) {
              return [null, ["dlopen", "utf8"]];
            }
          case "darwin":
            return ["libdyld.dylib", ["dlopen", "utf8"]];
          case "windows":
            const ll = "LoadLibrary";
            return ["kernel32.dll", [`${ll}W`, "utf16"], [`${ll}ExW`, "utf16"], [`${ll}A`, "ansi"], [`${ll}ExA`, "ansi"]];
        }
      }
      const [responsible, ...targets] = info();
      return targets.map(([name, encoding]) => new Target(responsible, name, encoding)).filter((_) => !_.address.isNull());
    }
    readString(pointer) {
      switch (this.stringEncoding) {
        case "utf8":
          return pointer.readUtf8String();
        case "utf16":
          return pointer.readUtf16String();
        case "ansi":
          return pointer.readAnsiString();
      }
    }
  };
  function forModule(...moduleNames) {
    return new Promise((resolve) => {
      for (const moduleName of moduleNames) {
        const module = Process.findModuleByName(moduleName);
        if (module != null) {
          resolve(moduleName);
          return;
        }
      }
      const interceptors = Target.targets.map((target) => Interceptor.attach(target.address, {
        onEnter(args) {
          this.modulePath = target.readString(args[0]) ?? "";
        },
        onLeave(returnValue) {
          if (returnValue.isNull())
            return;
          for (const moduleName of moduleNames) {
            if (!this.modulePath.endsWith(moduleName))
              continue;
            setImmediate(() => interceptors.forEach((_) => _.detach()));
            resolve(moduleName);
          }
        }
      }));
    });
  }
  function readNativeIterator(block) {
    const array = [];
    const iterator = Memory.alloc(Process.pointerSize);
    let handle = block(iterator);
    while (!handle.isNull()) {
      array.push(handle);
      handle = block(iterator);
    }
    return array;
  }
  function readNativeList(block) {
    const lengthPointer = Memory.alloc(Process.pointerSize);
    const startPointer = block(lengthPointer);
    if (startPointer.isNull()) {
      return [];
    }
    const array = new Array(lengthPointer.readInt());
    for (let i = 0; i < array.length; i++) {
      array[i] = startPointer.add(i * Process.pointerSize).readPointer();
    }
    return array;
  }
  function recycle(Class) {
    return new Proxy(Class, {
      cache: /* @__PURE__ */ new Map(),
      construct(Target2, argArray) {
        const handle = argArray[0].toUInt32();
        if (!this.cache.has(handle)) {
          this.cache.set(handle, new Target2(argArray[0]));
        }
        return this.cache.get(handle);
      }
    });
  }
  var UnityVersion;
  (function(UnityVersion2) {
    const pattern = /(20\d{2}|\d)\.(\d)\.(\d{1,2})(?:[abcfp]|rc){0,2}\d?/;
    function find(string) {
      return string?.match(pattern)?.[0];
    }
    UnityVersion2.find = find;
    function gte(a, b) {
      return compare(a, b) >= 0;
    }
    UnityVersion2.gte = gte;
    function lt(a, b) {
      return compare(a, b) < 0;
    }
    UnityVersion2.lt = lt;
    function compare(a, b) {
      const aMatches = a.match(pattern);
      const bMatches = b.match(pattern);
      for (let i = 1; i <= 3; i++) {
        const a2 = Number(aMatches?.[i] ?? -1);
        const b2 = Number(bMatches?.[i] ?? -1);
        if (a2 > b2)
          return 1;
        else if (a2 < b2)
          return -1;
      }
      return 0;
    }
  })(UnityVersion || (UnityVersion = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Api {
      constructor() {
      }
      static get alloc() {
        return this.r("il2cpp_alloc", "pointer", ["size_t"]);
      }
      static get arrayGetElements() {
        return this.r("il2cpp_array_get_elements", "pointer", ["pointer"]);
      }
      static get arrayGetLength() {
        return this.r("il2cpp_array_length", "uint32", ["pointer"]);
      }
      static get arrayNew() {
        return this.r("il2cpp_array_new", "pointer", ["pointer", "uint32"]);
      }
      static get assemblyGetImage() {
        return this.r("il2cpp_assembly_get_image", "pointer", ["pointer"]);
      }
      static get classForEach() {
        return this.r("il2cpp_class_for_each", "void", ["pointer", "pointer"]);
      }
      static get classFromName() {
        return this.r("il2cpp_class_from_name", "pointer", ["pointer", "pointer", "pointer"]);
      }
      static get classFromSystemType() {
        return this.r("il2cpp_class_from_system_type", "pointer", ["pointer"]);
      }
      static get classFromType() {
        return this.r("il2cpp_class_from_type", "pointer", ["pointer"]);
      }
      static get classGetActualInstanceSize() {
        return this.r("il2cpp_class_get_actual_instance_size", "int32", ["pointer"]);
      }
      static get classGetArrayClass() {
        return this.r("il2cpp_array_class_get", "pointer", ["pointer", "uint32"]);
      }
      static get classGetArrayElementSize() {
        return this.r("il2cpp_class_array_element_size", "int", ["pointer"]);
      }
      static get classGetAssemblyName() {
        return this.r("il2cpp_class_get_assemblyname", "pointer", ["pointer"]);
      }
      static get classGetBaseType() {
        return this.r("il2cpp_class_enum_basetype", "pointer", ["pointer"]);
      }
      static get classGetDeclaringType() {
        return this.r("il2cpp_class_get_declaring_type", "pointer", ["pointer"]);
      }
      static get classGetElementClass() {
        return this.r("il2cpp_class_get_element_class", "pointer", ["pointer"]);
      }
      static get classGetFieldFromName() {
        return this.r("il2cpp_class_get_field_from_name", "pointer", ["pointer", "pointer"]);
      }
      static get classGetFields() {
        return this.r("il2cpp_class_get_fields", "pointer", ["pointer", "pointer"]);
      }
      static get classGetFlags() {
        return this.r("il2cpp_class_get_flags", "int", ["pointer"]);
      }
      static get classGetImage() {
        return this.r("il2cpp_class_get_image", "pointer", ["pointer"]);
      }
      static get classGetInstanceSize() {
        return this.r("il2cpp_class_instance_size", "int32", ["pointer"]);
      }
      static get classGetInterfaces() {
        return this.r("il2cpp_class_get_interfaces", "pointer", ["pointer", "pointer"]);
      }
      static get classGetMethodFromName() {
        return this.r("il2cpp_class_get_method_from_name", "pointer", ["pointer", "pointer", "int"]);
      }
      static get classGetMethods() {
        return this.r("il2cpp_class_get_methods", "pointer", ["pointer", "pointer"]);
      }
      static get classGetName() {
        return this.r("il2cpp_class_get_name", "pointer", ["pointer"]);
      }
      static get classGetNamespace() {
        return this.r("il2cpp_class_get_namespace", "pointer", ["pointer"]);
      }
      static get classGetNestedClasses() {
        return this.r("il2cpp_class_get_nested_types", "pointer", ["pointer", "pointer"]);
      }
      static get classGetParent() {
        return this.r("il2cpp_class_get_parent", "pointer", ["pointer"]);
      }
      static get classGetRank() {
        return this.r("il2cpp_class_get_rank", "int", ["pointer"]);
      }
      static get classGetStaticFieldData() {
        return this.r("il2cpp_class_get_static_field_data", "pointer", ["pointer"]);
      }
      static get classGetValueSize() {
        return this.r("il2cpp_class_value_size", "int32", ["pointer", "pointer"]);
      }
      static get classGetType() {
        return this.r("il2cpp_class_get_type", "pointer", ["pointer"]);
      }
      static get classHasReferences() {
        return this.r("il2cpp_class_has_references", "bool", ["pointer"]);
      }
      static get classInit() {
        return this.r("il2cpp_runtime_class_init", "void", ["pointer"]);
      }
      static get classIsAbstract() {
        return this.r("il2cpp_class_is_abstract", "bool", ["pointer"]);
      }
      static get classIsAssignableFrom() {
        return this.r("il2cpp_class_is_assignable_from", "bool", ["pointer", "pointer"]);
      }
      static get classIsBlittable() {
        return this.r("il2cpp_class_is_blittable", "bool", ["pointer"]);
      }
      static get classIsEnum() {
        return this.r("il2cpp_class_is_enum", "bool", ["pointer"]);
      }
      static get classIsGeneric() {
        return this.r("il2cpp_class_is_generic", "bool", ["pointer"]);
      }
      static get classIsInflated() {
        return this.r("il2cpp_class_is_inflated", "bool", ["pointer"]);
      }
      static get classIsInterface() {
        return this.r("il2cpp_class_is_interface", "bool", ["pointer"]);
      }
      static get classIsSubclassOf() {
        return this.r("il2cpp_class_is_subclass_of", "bool", ["pointer", "pointer", "bool"]);
      }
      static get classIsValueType() {
        return this.r("il2cpp_class_is_valuetype", "bool", ["pointer"]);
      }
      static get domainAssemblyOpen() {
        return this.r("il2cpp_domain_assembly_open", "pointer", ["pointer", "pointer"]);
      }
      static get domainGet() {
        return this.r("il2cpp_domain_get", "pointer", []);
      }
      static get domainGetAssemblies() {
        return this.r("il2cpp_domain_get_assemblies", "pointer", ["pointer", "pointer"]);
      }
      static get domainGetObject() {
        return this.r("il2cpp_domain_get_object", "pointer", []);
      }
      static get fieldGetModifier() {
        return this.r("il2cpp_field_get_modifier", "pointer", ["pointer"]);
      }
      static get fieldGetClass() {
        return this.r("il2cpp_field_get_parent", "pointer", ["pointer"]);
      }
      static get fieldGetFlags() {
        return this.r("il2cpp_field_get_flags", "int", ["pointer"]);
      }
      static get fieldGetName() {
        return this.r("il2cpp_field_get_name", "pointer", ["pointer"]);
      }
      static get fieldGetOffset() {
        return this.r("il2cpp_field_get_offset", "int32", ["pointer"]);
      }
      static get fieldGetStaticValue() {
        return this.r("il2cpp_field_static_get_value", "void", ["pointer", "pointer"]);
      }
      static get fieldGetType() {
        return this.r("il2cpp_field_get_type", "pointer", ["pointer"]);
      }
      static get fieldIsLiteral() {
        return this.r("il2cpp_field_is_literal", "bool", ["pointer"]);
      }
      static get fieldIsStatic() {
        return this.r("il2cpp_field_is_static", "bool", ["pointer"]);
      }
      static get fieldIsThreadStatic() {
        return this.r("il2cpp_field_is_thread_static", "bool", ["pointer"]);
      }
      static get fieldSetStaticValue() {
        return this.r("il2cpp_field_static_set_value", "void", ["pointer", "pointer"]);
      }
      static get free() {
        return this.r("il2cpp_free", "void", ["pointer"]);
      }
      static get gcCollect() {
        return this.r("il2cpp_gc_collect", "void", ["int"]);
      }
      static get gcCollectALittle() {
        return this.r("il2cpp_gc_collect_a_little", "void", []);
      }
      static get gcDisable() {
        return this.r("il2cpp_gc_disable", "void", []);
      }
      static get gcEnable() {
        return this.r("il2cpp_gc_enable", "void", []);
      }
      static get gcGetHeapSize() {
        return this.r("il2cpp_gc_get_heap_size", "int64", []);
      }
      static get gcGetMaxTimeSlice() {
        return this.r("il2cpp_gc_get_max_time_slice_ns", "int64", []);
      }
      static get gcGetUsedSize() {
        return this.r("il2cpp_gc_get_used_size", "int64", []);
      }
      static get gcHandleGetTarget() {
        return this.r("il2cpp_gchandle_get_target", "pointer", ["uint32"]);
      }
      static get gcHandleFree() {
        return this.r("il2cpp_gchandle_free", "void", ["uint32"]);
      }
      static get gcHandleNew() {
        return this.r("il2cpp_gchandle_new", "uint32", ["pointer", "bool"]);
      }
      static get gcHandleNewWeakRef() {
        return this.r("il2cpp_gchandle_new_weakref", "uint32", ["pointer", "bool"]);
      }
      static get gcIsDisabled() {
        return this.r("il2cpp_gc_is_disabled", "bool", []);
      }
      static get gcIsIncremental() {
        return this.r("il2cpp_gc_is_incremental", "bool", []);
      }
      static get gcSetMaxTimeSlice() {
        return this.r("il2cpp_gc_set_max_time_slice_ns", "void", ["int64"]);
      }
      static get gcStartIncrementalCollection() {
        return this.r("il2cpp_gc_start_incremental_collection", "void", []);
      }
      static get gcStartWorld() {
        return this.r("il2cpp_start_gc_world", "void", []);
      }
      static get gcStopWorld() {
        return this.r("il2cpp_stop_gc_world", "void", []);
      }
      static get getCorlib() {
        return this.r("il2cpp_get_corlib", "pointer", []);
      }
      static get imageGetAssembly() {
        return this.r("il2cpp_image_get_assembly", "pointer", ["pointer"]);
      }
      static get imageGetClass() {
        return this.r("il2cpp_image_get_class", "pointer", ["pointer", "uint"]);
      }
      static get imageGetClassCount() {
        return this.r("il2cpp_image_get_class_count", "uint32", ["pointer"]);
      }
      static get imageGetName() {
        return this.r("il2cpp_image_get_name", "pointer", ["pointer"]);
      }
      static get init() {
        return this.r("il2cpp_init", "void", ["pointer"]);
      }
      static get livenessAllocateStruct() {
        return this.r("il2cpp_unity_liveness_allocate_struct", "pointer", ["pointer", "int", "pointer", "pointer", "pointer"]);
      }
      static get livenessCalculationBegin() {
        return this.r("il2cpp_unity_liveness_calculation_begin", "pointer", ["pointer", "int", "pointer", "pointer", "pointer", "pointer"]);
      }
      static get livenessCalculationEnd() {
        return this.r("il2cpp_unity_liveness_calculation_end", "void", ["pointer"]);
      }
      static get livenessCalculationFromStatics() {
        return this.r("il2cpp_unity_liveness_calculation_from_statics", "void", ["pointer"]);
      }
      static get livenessFinalize() {
        return this.r("il2cpp_unity_liveness_finalize", "void", ["pointer"]);
      }
      static get livenessFreeStruct() {
        return this.r("il2cpp_unity_liveness_free_struct", "void", ["pointer"]);
      }
      static get memorySnapshotCapture() {
        return this.r("il2cpp_capture_memory_snapshot", "pointer", []);
      }
      static get memorySnapshotFree() {
        return this.r("il2cpp_free_captured_memory_snapshot", "void", ["pointer"]);
      }
      static get memorySnapshotGetClasses() {
        return this.r("il2cpp_memory_snapshot_get_classes", "pointer", ["pointer", "pointer"]);
      }
      static get memorySnapshotGetObjects() {
        return this.r("il2cpp_memory_snapshot_get_objects", "pointer", ["pointer", "pointer"]);
      }
      static get memorySnapshotGetRuntimeInformation() {
        return this.r("il2cpp_memory_snapshot_get_information", ["uint32", "uint32", "uint32", "uint32", "uint32", "uint32"], ["pointer"]);
      }
      static get methodGetModifier() {
        return this.r("il2cpp_method_get_modifier", "pointer", ["pointer"]);
      }
      static get methodGetClass() {
        return this.r("il2cpp_method_get_class", "pointer", ["pointer"]);
      }
      static get methodGetFlags() {
        return this.r("il2cpp_method_get_flags", "uint32", ["pointer", "pointer"]);
      }
      static get methodGetFromReflection() {
        return this.r("il2cpp_method_get_from_reflection", "pointer", ["pointer"]);
      }
      static get methodGetName() {
        return this.r("il2cpp_method_get_name", "pointer", ["pointer"]);
      }
      static get methodGetObject() {
        return this.r("il2cpp_method_get_object", "pointer", ["pointer", "pointer"]);
      }
      static get methodGetParameterCount() {
        return this.r("il2cpp_method_get_param_count", "uint8", ["pointer"]);
      }
      static get methodGetParameterName() {
        return this.r("il2cpp_method_get_param_name", "pointer", ["pointer", "uint32"]);
      }
      static get methodGetParameters() {
        return this.r("il2cpp_method_get_parameters", "pointer", ["pointer", "pointer"]);
      }
      static get methodGetParameterType() {
        return this.r("il2cpp_method_get_param", "pointer", ["pointer", "uint32"]);
      }
      static get methodGetPointer() {
        return this.r("il2cpp_method_get_pointer", "pointer", ["pointer"]);
      }
      static get methodGetReturnType() {
        return this.r("il2cpp_method_get_return_type", "pointer", ["pointer"]);
      }
      static get methodIsExternal() {
        return this.r("il2cpp_method_is_external", "bool", ["pointer"]);
      }
      static get methodIsGeneric() {
        return this.r("il2cpp_method_is_generic", "bool", ["pointer"]);
      }
      static get methodIsInflated() {
        return this.r("il2cpp_method_is_inflated", "bool", ["pointer"]);
      }
      static get methodIsInstance() {
        return this.r("il2cpp_method_is_instance", "bool", ["pointer"]);
      }
      static get methodIsSynchronized() {
        return this.r("il2cpp_method_is_synchronized", "bool", ["pointer"]);
      }
      static get monitorEnter() {
        return this.r("il2cpp_monitor_enter", "void", ["pointer"]);
      }
      static get monitorExit() {
        return this.r("il2cpp_monitor_exit", "void", ["pointer"]);
      }
      static get monitorPulse() {
        return this.r("il2cpp_monitor_pulse", "void", ["pointer"]);
      }
      static get monitorPulseAll() {
        return this.r("il2cpp_monitor_pulse_all", "void", ["pointer"]);
      }
      static get monitorTryEnter() {
        return this.r("il2cpp_monitor_try_enter", "bool", ["pointer", "uint32"]);
      }
      static get monitorTryWait() {
        return this.r("il2cpp_monitor_try_wait", "bool", ["pointer", "uint32"]);
      }
      static get monitorWait() {
        return this.r("il2cpp_monitor_wait", "void", ["pointer"]);
      }
      static get objectGetClass() {
        return this.r("il2cpp_object_get_class", "pointer", ["pointer"]);
      }
      static get objectGetVirtualMethod() {
        return this.r("il2cpp_object_get_virtual_method", "pointer", ["pointer", "pointer"]);
      }
      static get objectInit() {
        return this.r("il2cpp_runtime_object_init_exception", "void", ["pointer", "pointer"]);
      }
      static get objectNew() {
        return this.r("il2cpp_object_new", "pointer", ["pointer"]);
      }
      static get objectGetSize() {
        return this.r("il2cpp_object_get_size", "uint32", ["pointer"]);
      }
      static get objectUnbox() {
        return this.r("il2cpp_object_unbox", "pointer", ["pointer"]);
      }
      static get resolveInternalCall() {
        return this.r("il2cpp_resolve_icall", "pointer", ["pointer"]);
      }
      static get stringChars() {
        return this.r("il2cpp_string_chars", "pointer", ["pointer"]);
      }
      static get stringLength() {
        return this.r("il2cpp_string_length", "int32", ["pointer"]);
      }
      static get stringNew() {
        return this.r("il2cpp_string_new", "pointer", ["pointer"]);
      }
      static get stringSetLength() {
        return this.r("il2cpp_string_set_length", "void", ["pointer", "int32"]);
      }
      static get valueBox() {
        return this.r("il2cpp_value_box", "pointer", ["pointer", "pointer"]);
      }
      static get threadAttach() {
        return this.r("il2cpp_thread_attach", "pointer", ["pointer"]);
      }
      static get threadCurrent() {
        return this.r("il2cpp_thread_current", "pointer", []);
      }
      static get threadGetAllAttachedThreads() {
        return this.r("il2cpp_thread_get_all_attached_threads", "pointer", ["pointer"]);
      }
      static get threadIsVm() {
        return this.r("il2cpp_is_vm_thread", "bool", ["pointer"]);
      }
      static get threadDetach() {
        return this.r("il2cpp_thread_detach", "void", ["pointer"]);
      }
      static get typeGetName() {
        return this.r("il2cpp_type_get_name", "pointer", ["pointer"]);
      }
      static get typeGetObject() {
        return this.r("il2cpp_type_get_object", "pointer", ["pointer"]);
      }
      static get typeGetTypeEnum() {
        return this.r("il2cpp_type_get_type", "int", ["pointer"]);
      }
      static get typeIsByReference() {
        return this.r("il2cpp_type_is_byref", "bool", ["pointer"]);
      }
      static get typeIsPrimitive() {
        return this.r("il2cpp_type_is_primitive", "bool", ["pointer"]);
      }
      /** @internal */
      static get cModule() {
        const offsetsFinderCModule = new CModule("#include <stdint.h>\n\n#define OFFSET_OF(name, type)                                                  \\\n  int16_t name (char * p, type e)                                              \\\n  {                                                                            \\\n    for (int16_t i = 0; i < 512; i++)                                          \\\n      if (*((type *) p + i) == e)                                              \\\n        return i;                                                              \\\n    return -1;                                                                 \\\n  }\n\nOFFSET_OF (offset_of_int32, int32_t)\nOFFSET_OF (offset_of_pointer, void *)\n");
        const offsetOfInt32 = new NativeFunction(offsetsFinderCModule.offset_of_int32, "int16", ["pointer", "int32"]);
        const offsetOfPointer = new NativeFunction(offsetsFinderCModule.offset_of_pointer, "int16", ["pointer", "pointer"]);
        const SystemString = Il2Cpp3.corlib.class("System.String");
        const SystemDateTime = Il2Cpp3.corlib.class("System.DateTime");
        const SystemReflectionModule = Il2Cpp3.corlib.class("System.Reflection.Module");
        SystemDateTime.initialize();
        SystemReflectionModule.initialize();
        const DaysToMonth365 = (SystemDateTime.tryField("daysmonth") ?? SystemDateTime.tryField("DaysToMonth365") ?? SystemDateTime.field("s_daysToMonth365")).value;
        const FilterTypeName = SystemReflectionModule.field("FilterTypeName").value;
        const FilterTypeNameMethodPointer = FilterTypeName.field("method_ptr").value;
        const FilterTypeNameMethod = FilterTypeName.field("method").value;
        const FilterTypeNameInvoke = FilterTypeName.method("Invoke");
        const defines = `
                #define IL2CPP_STRING_SET_LENGTH_OFFSET ${offsetOfInt32(Il2Cpp3.string("vfsfitvnm"), 9)}
                #define IL2CPP_ARRAY_GET_ELEMENTS_OFFSET ${offsetOfInt32(DaysToMonth365, 31) - 1}
                #define IL2CPP_CLASS_GET_ACTUAL_INSTANCE_SIZE_OFFSET ${offsetOfInt32(SystemString, SystemString.instanceSize - 2)}
                #define IL2CPP_METHOD_GET_POINTER_OFFSET ${offsetOfPointer(FilterTypeNameMethod, FilterTypeNameMethodPointer)}
                #define IL2CPP_METHOD_GET_FROM_REFLECTION_OFFSET ${offsetOfPointer(FilterTypeNameInvoke.object, FilterTypeNameInvoke)}
            `;
        offsetsFinderCModule.dispose();
        const cModule = new CModule(defines + `#include <stdint.h>
#include <string.h>

typedef void Il2CppArray;
typedef void Il2CppAssembly;
typedef void Il2CppClass;
typedef void Il2CppDomain;
typedef void Il2CppField;
typedef void Il2CppImage;
typedef void Il2CppMethod;
typedef void Il2CppObject;
typedef void Il2CppString;
typedef void Il2CppType;

typedef enum _Il2CppTypeEnum Il2CppTypeEnum;

enum _Il2CppTypeEnum
{
  IL2CPP_TYPE_END = 0x00,
  IL2CPP_TYPE_VOID = 0x01,
  IL2CPP_TYPE_BOOLEAN = 0x02,
  IL2CPP_TYPE_CHAR = 0x03,
  IL2CPP_TYPE_I1 = 0x04,
  IL2CPP_TYPE_U1 = 0x05,
  IL2CPP_TYPE_I2 = 0x06,
  IL2CPP_TYPE_U2 = 0x07,
  IL2CPP_TYPE_I4 = 0x08,
  IL2CPP_TYPE_U4 = 0x09,
  IL2CPP_TYPE_I8 = 0x0a,
  IL2CPP_TYPE_U8 = 0x0b,
  IL2CPP_TYPE_R4 = 0x0c,
  IL2CPP_TYPE_R8 = 0x0d,
  IL2CPP_TYPE_STRING = 0x0e,
  IL2CPP_TYPE_PTR = 0x0f,
  IL2CPP_TYPE_BYREF = 0x10,
  IL2CPP_TYPE_VALUETYPE = 0x11,
  IL2CPP_TYPE_CLASS = 0x12,
  IL2CPP_TYPE_VAR = 0x13,
  IL2CPP_TYPE_ARRAY = 0x14,
  IL2CPP_TYPE_GENERICINST = 0x15,
  IL2CPP_TYPE_TYPEDBYREF = 0x16,
  IL2CPP_TYPE_I = 0x18,
  IL2CPP_TYPE_U = 0x19,
  IL2CPP_TYPE_FNPTR = 0x1b,
  IL2CPP_TYPE_OBJECT = 0x1c,
  IL2CPP_TYPE_SZARRAY = 0x1d,
  IL2CPP_TYPE_MVAR = 0x1e,
  IL2CPP_TYPE_CMOD_REQD = 0x1f,
  IL2CPP_TYPE_CMOD_OPT = 0x20,
  IL2CPP_TYPE_INTERNAL = 0x21,
  IL2CPP_TYPE_MODIFIER = 0x40,
  IL2CPP_TYPE_SENTINEL = 0x41,
  IL2CPP_TYPE_PINNED = 0x45,
  IL2CPP_TYPE_ENUM = 0x55
};

#define THREAD_STATIC_FIELD_OFFSET -1;

#define FIELD_ATTRIBUTE_FIELD_ACCESS_MASK 0x0007
#define FIELD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000
#define FIELD_ATTRIBUTE_PRIVATE 0x0001
#define FIELD_ATTRIBUTE_FAM_AND_ASSEM 0x0002
#define FIELD_ATTRIBUTE_ASSEMBLY 0x0003
#define FIELD_ATTRIBUTE_FAMILY 0x0004
#define FIELD_ATTRIBUTE_FAM_OR_ASSEM 0x0005
#define FIELD_ATTRIBUTE_PUBLIC 0x0006

#define FIELD_ATTRIBUTE_STATIC 0x0010
#define FIELD_ATTRIBUTE_LITERAL 0x0040

#define METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK 0x0007
#define METHOD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000
#define METHOD_ATTRIBUTE_PRIVATE 0x0001
#define METHOD_ATTRIBUTE_FAM_AND_ASSEM 0x0002
#define METHOD_ATTRIBUTE_ASSEMBLY 0x0003
#define METHOD_ATTRIBUTE_FAMILY 0x0004
#define METHOD_ATTRIBUTE_FAM_OR_ASSEM 0x0005
#define METHOD_ATTRIBUTE_PUBLIC 0x0006

#define METHOD_ATTRIBUTE_STATIC 0x0010
#define METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL 0x1000
#define METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED 0x0020

#ifndef IL2CPP_STRING_SET_LENGTH_OFFSET
#define IL2CPP_STRING_SET_LENGTH_OFFSET 0
#endif

#ifndef IL2CPP_ARRAY_GET_ELEMENTS_OFFSET
#define IL2CPP_ARRAY_GET_ELEMENTS_OFFSET 0
#endif

#ifndef IL2CPP_CLASS_GET_ACTUAL_INSTANCE_SIZE_OFFSET
#define IL2CPP_CLASS_GET_ACTUAL_INSTANCE_SIZE_OFFSET 0
#endif

#ifndef IL2CPP_METHOD_GET_POINTER_OFFSET
#define IL2CPP_METHOD_GET_POINTER_OFFSET 0
#endif

#ifndef IL2CPP_METHOD_GET_FROM_REFLECTION_OFFSET
#define IL2CPP_METHOD_GET_FROM_REFLECTION_OFFSET 0
#endif

extern Il2CppClass * il2cpp_class_from_name (const Il2CppImage *, const char *,
                                             const char *);
extern Il2CppMethod * il2cpp_class_get_method_from_name (Il2CppClass *,
                                                         const char *, int32_t);
extern const char * il2cpp_class_get_name (Il2CppClass *);
extern int il2cpp_field_get_flags (Il2CppField *);
extern size_t il2cpp_field_get_offset (Il2CppField *);
extern void il2cpp_free (void *);
extern const Il2CppImage * il2cpp_image_get_corlib (void);
extern uint32_t il2cpp_method_get_flags (Il2CppMethod *, uint32_t *);
extern char * il2cpp_type_get_name (Il2CppType *);
extern Il2CppTypeEnum il2cpp_type_get_type_enum (Il2CppType *);

void
il2cpp_string_set_length (Il2CppString * string, int32_t length)
{
  *((int32_t *) string + IL2CPP_STRING_SET_LENGTH_OFFSET) = length;
}

void *
il2cpp_array_get_elements (Il2CppArray * array)
{
  return (int32_t *) array + IL2CPP_ARRAY_GET_ELEMENTS_OFFSET;
}

uint8_t
il2cpp_type_is_byref (Il2CppType * type)
{
  char * name;
  char last_char;

  name = il2cpp_type_get_name (type);
  last_char = name[strlen (name) - 1];

  il2cpp_free (name);
  return last_char == '&';
}

uint8_t
il2cpp_type_is_primitive (Il2CppType * type)
{
  Il2CppTypeEnum type_enum;

  type_enum = il2cpp_type_get_type_enum (type);

  return ((type_enum >= IL2CPP_TYPE_BOOLEAN && type_enum <= IL2CPP_TYPE_R8) ||
          type_enum == IL2CPP_TYPE_I || type_enum == IL2CPP_TYPE_U);
}

int32_t
il2cpp_class_get_actual_instance_size (Il2CppClass * class)
{
  return *((int32_t *) class + IL2CPP_CLASS_GET_ACTUAL_INSTANCE_SIZE_OFFSET);
}

uint8_t
il2cpp_class_get_rank (Il2CppClass * class)
{
  uint8_t rank;
  const char * name;

  rank = 0;
  name = il2cpp_class_get_name (class);

  for (uint16_t i = strlen (name) - 1; i > 0; i--)
  {
    char c = name[i];

    if (c == ']')
      rank++;
    else if (c == '[' || rank == 0)
      break;
    else if (c == ',')
      rank++;
    else
      break;
  }

  return rank;
}

const char *
il2cpp_field_get_modifier (Il2CppField * field)
{
  int flags;

  flags = il2cpp_field_get_flags (field);

  switch (flags & FIELD_ATTRIBUTE_FIELD_ACCESS_MASK)
  {
  case FIELD_ATTRIBUTE_PRIVATE:
    return "private";
  case FIELD_ATTRIBUTE_FAM_AND_ASSEM:
    return "private protected";
  case FIELD_ATTRIBUTE_ASSEMBLY:
    return "internal";
  case FIELD_ATTRIBUTE_FAMILY:
    return "protected";
  case FIELD_ATTRIBUTE_FAM_OR_ASSEM:
    return "protected internal";
  case FIELD_ATTRIBUTE_PUBLIC:
    return "public";
  }

  return "";
}

uint8_t
il2cpp_field_is_literal (Il2CppField * field)
{
  return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_LITERAL) != 0;
}

uint8_t
il2cpp_field_is_static (Il2CppField * field)
{
  return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_STATIC) != 0;
}

uint8_t
il2cpp_field_is_thread_static (Il2CppField * field)
{
  return il2cpp_field_get_offset (field) == THREAD_STATIC_FIELD_OFFSET;
}

const char *
il2cpp_method_get_modifier (Il2CppMethod * method)
{
  uint32_t flags;

  flags = il2cpp_method_get_flags (method, NULL);

  switch (flags & METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK)
  {
  case METHOD_ATTRIBUTE_PRIVATE:
    return "private";
  case METHOD_ATTRIBUTE_FAM_AND_ASSEM:
    return "private protected";
  case METHOD_ATTRIBUTE_ASSEMBLY:
    return "internal";
  case METHOD_ATTRIBUTE_FAMILY:
    return "protected";
  case METHOD_ATTRIBUTE_FAM_OR_ASSEM:
    return "protected internal";
  case METHOD_ATTRIBUTE_PUBLIC:
    return "public";
  }

  return "";
}

Il2CppMethod *
il2cpp_method_get_from_reflection (Il2CppObject * object)
{
  return *((void **) object + IL2CPP_METHOD_GET_FROM_REFLECTION_OFFSET);
}

void *
il2cpp_method_get_pointer (Il2CppMethod * method)
{
  return *((void **) method + IL2CPP_METHOD_GET_POINTER_OFFSET);
}

uint8_t
il2cpp_method_is_external (Il2CppMethod * method)
{
  uint32_t implementation_flags;

  il2cpp_method_get_flags (method, &implementation_flags);

  return (implementation_flags & METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL) != 0;
}

uint8_t
il2cpp_method_is_synchronized (Il2CppMethod * method)
{
  uint32_t implementation_flags;

  il2cpp_method_get_flags (method, &implementation_flags);

  return (implementation_flags & METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED) != 0;
}

Il2CppObject *
il2cpp_domain_get_object (void)
{
  const Il2CppImage * cor_image = il2cpp_image_get_corlib ();
  Il2CppClass * system_appdomain_class =
      il2cpp_class_from_name (cor_image, "System", "AppDomain");
  Il2CppMethod * get_current_domain_method = il2cpp_class_get_method_from_name (
      system_appdomain_class, "get_CurrentDomain", 0);
  Il2CppObject * (*get_current_domain) (void) =
      il2cpp_method_get_pointer (get_current_domain_method);

  return get_current_domain ();
}
#include <stdint.h>
#include <string.h>

typedef struct Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;
typedef struct Il2CppMetadataType Il2CppMetadataType;

struct Il2CppManagedMemorySnapshot
{
  struct Il2CppManagedHeap
  {
    uint32_t section_count;
    void * sections;
  } heap;
  struct Il2CppStacks
  {
    uint32_t stack_count;
    void * stacks;
  } stacks;
  struct Il2CppMetadataSnapshot
  {
    uint32_t type_count;
    Il2CppMetadataType * types;
  } metadata_snapshot;
  struct Il2CppGCHandles
  {
    uint32_t tracked_object_count;
    void ** pointers_to_objects;
  } gc_handles;
  struct Il2CppRuntimeInformation
  {
    uint32_t pointer_size;
    uint32_t object_header_size;
    uint32_t array_header_size;
    uint32_t array_bounds_offset_in_header;
    uint32_t array_size_offset_in_header;
    uint32_t allocation_granularity;
  } runtime_information;
  void * additional_user_information;
};

struct Il2CppMetadataType
{
  uint32_t flags;
  void * fields;
  uint32_t field_count;
  uint32_t statics_size;
  uint8_t * statics;
  uint32_t base_or_element_type_index;
  char * name;
  const char * assembly_name;
  uint64_t type_info_address;
  uint32_t size;
};

uintptr_t
il2cpp_memory_snapshot_get_classes (
    const Il2CppManagedMemorySnapshot * snapshot, Il2CppMetadataType ** iter)
{
  const int zero = 0;
  const void * null = 0;

  if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)
  {
    if (*iter == null)
    {
      *iter = snapshot->metadata_snapshot.types;
      return (uintptr_t) (*iter)->type_info_address;
    }
    else
    {
      Il2CppMetadataType * metadata_type = *iter + 1;

      if (metadata_type < snapshot->metadata_snapshot.types +
                              snapshot->metadata_snapshot.type_count)
      {
        *iter = metadata_type;
        return (uintptr_t) (*iter)->type_info_address;
      }
    }
  }
  return 0;
}

void **
il2cpp_memory_snapshot_get_objects (
    const Il2CppManagedMemorySnapshot * snapshot, uint32_t * size)
{
  *size = snapshot->gc_handles.tracked_object_count;
  return snapshot->gc_handles.pointers_to_objects;
}

struct Il2CppRuntimeInformation
il2cpp_memory_snapshot_get_information (
    const Il2CppManagedMemorySnapshot * snapshot)
{
  return snapshot->runtime_information;
}
`, {
          il2cpp_class_from_name: this.classFromName,
          il2cpp_class_get_method_from_name: this.classGetMethodFromName,
          il2cpp_class_get_name: this.classGetName,
          il2cpp_field_get_flags: this.fieldGetFlags,
          il2cpp_field_get_offset: this.fieldGetOffset,
          il2cpp_free: this.free,
          il2cpp_image_get_corlib: this.getCorlib,
          il2cpp_method_get_flags: this.methodGetFlags,
          il2cpp_type_get_name: this.typeGetName,
          il2cpp_type_get_type_enum: this.typeGetTypeEnum
        });
        return cModule;
      }
      /** @internal */
      static r(exportName, retType, argTypes) {
        const exportPointer = Il2Cpp3.module.findExportByName(exportName) ?? this.cModule[exportName];
        if (exportPointer == null) {
          raise(`cannot resolve export ${exportName}`);
        }
        return new NativeFunction(exportPointer, retType, argTypes);
      }
    }
    __decorate([
      lazy
    ], Api, "alloc", null);
    __decorate([
      lazy
    ], Api, "arrayGetElements", null);
    __decorate([
      lazy
    ], Api, "arrayGetLength", null);
    __decorate([
      lazy
    ], Api, "arrayNew", null);
    __decorate([
      lazy
    ], Api, "assemblyGetImage", null);
    __decorate([
      lazy
    ], Api, "classForEach", null);
    __decorate([
      lazy
    ], Api, "classFromName", null);
    __decorate([
      lazy
    ], Api, "classFromSystemType", null);
    __decorate([
      lazy
    ], Api, "classFromType", null);
    __decorate([
      lazy
    ], Api, "classGetActualInstanceSize", null);
    __decorate([
      lazy
    ], Api, "classGetArrayClass", null);
    __decorate([
      lazy
    ], Api, "classGetArrayElementSize", null);
    __decorate([
      lazy
    ], Api, "classGetAssemblyName", null);
    __decorate([
      lazy
    ], Api, "classGetBaseType", null);
    __decorate([
      lazy
    ], Api, "classGetDeclaringType", null);
    __decorate([
      lazy
    ], Api, "classGetElementClass", null);
    __decorate([
      lazy
    ], Api, "classGetFieldFromName", null);
    __decorate([
      lazy
    ], Api, "classGetFields", null);
    __decorate([
      lazy
    ], Api, "classGetFlags", null);
    __decorate([
      lazy
    ], Api, "classGetImage", null);
    __decorate([
      lazy
    ], Api, "classGetInstanceSize", null);
    __decorate([
      lazy
    ], Api, "classGetInterfaces", null);
    __decorate([
      lazy
    ], Api, "classGetMethodFromName", null);
    __decorate([
      lazy
    ], Api, "classGetMethods", null);
    __decorate([
      lazy
    ], Api, "classGetName", null);
    __decorate([
      lazy
    ], Api, "classGetNamespace", null);
    __decorate([
      lazy
    ], Api, "classGetNestedClasses", null);
    __decorate([
      lazy
    ], Api, "classGetParent", null);
    __decorate([
      lazy
    ], Api, "classGetRank", null);
    __decorate([
      lazy
    ], Api, "classGetStaticFieldData", null);
    __decorate([
      lazy
    ], Api, "classGetValueSize", null);
    __decorate([
      lazy
    ], Api, "classGetType", null);
    __decorate([
      lazy
    ], Api, "classHasReferences", null);
    __decorate([
      lazy
    ], Api, "classInit", null);
    __decorate([
      lazy
    ], Api, "classIsAbstract", null);
    __decorate([
      lazy
    ], Api, "classIsAssignableFrom", null);
    __decorate([
      lazy
    ], Api, "classIsBlittable", null);
    __decorate([
      lazy
    ], Api, "classIsEnum", null);
    __decorate([
      lazy
    ], Api, "classIsGeneric", null);
    __decorate([
      lazy
    ], Api, "classIsInflated", null);
    __decorate([
      lazy
    ], Api, "classIsInterface", null);
    __decorate([
      lazy
    ], Api, "classIsSubclassOf", null);
    __decorate([
      lazy
    ], Api, "classIsValueType", null);
    __decorate([
      lazy
    ], Api, "domainAssemblyOpen", null);
    __decorate([
      lazy
    ], Api, "domainGet", null);
    __decorate([
      lazy
    ], Api, "domainGetAssemblies", null);
    __decorate([
      lazy
    ], Api, "domainGetObject", null);
    __decorate([
      lazy
    ], Api, "fieldGetModifier", null);
    __decorate([
      lazy
    ], Api, "fieldGetClass", null);
    __decorate([
      lazy
    ], Api, "fieldGetFlags", null);
    __decorate([
      lazy
    ], Api, "fieldGetName", null);
    __decorate([
      lazy
    ], Api, "fieldGetOffset", null);
    __decorate([
      lazy
    ], Api, "fieldGetStaticValue", null);
    __decorate([
      lazy
    ], Api, "fieldGetType", null);
    __decorate([
      lazy
    ], Api, "fieldIsLiteral", null);
    __decorate([
      lazy
    ], Api, "fieldIsStatic", null);
    __decorate([
      lazy
    ], Api, "fieldIsThreadStatic", null);
    __decorate([
      lazy
    ], Api, "fieldSetStaticValue", null);
    __decorate([
      lazy
    ], Api, "free", null);
    __decorate([
      lazy
    ], Api, "gcCollect", null);
    __decorate([
      lazy
    ], Api, "gcCollectALittle", null);
    __decorate([
      lazy
    ], Api, "gcDisable", null);
    __decorate([
      lazy
    ], Api, "gcEnable", null);
    __decorate([
      lazy
    ], Api, "gcGetHeapSize", null);
    __decorate([
      lazy
    ], Api, "gcGetMaxTimeSlice", null);
    __decorate([
      lazy
    ], Api, "gcGetUsedSize", null);
    __decorate([
      lazy
    ], Api, "gcHandleGetTarget", null);
    __decorate([
      lazy
    ], Api, "gcHandleFree", null);
    __decorate([
      lazy
    ], Api, "gcHandleNew", null);
    __decorate([
      lazy
    ], Api, "gcHandleNewWeakRef", null);
    __decorate([
      lazy
    ], Api, "gcIsDisabled", null);
    __decorate([
      lazy
    ], Api, "gcIsIncremental", null);
    __decorate([
      lazy
    ], Api, "gcSetMaxTimeSlice", null);
    __decorate([
      lazy
    ], Api, "gcStartIncrementalCollection", null);
    __decorate([
      lazy
    ], Api, "gcStartWorld", null);
    __decorate([
      lazy
    ], Api, "gcStopWorld", null);
    __decorate([
      lazy
    ], Api, "getCorlib", null);
    __decorate([
      lazy
    ], Api, "imageGetAssembly", null);
    __decorate([
      lazy
    ], Api, "imageGetClass", null);
    __decorate([
      lazy
    ], Api, "imageGetClassCount", null);
    __decorate([
      lazy
    ], Api, "imageGetName", null);
    __decorate([
      lazy
    ], Api, "init", null);
    __decorate([
      lazy
    ], Api, "livenessAllocateStruct", null);
    __decorate([
      lazy
    ], Api, "livenessCalculationBegin", null);
    __decorate([
      lazy
    ], Api, "livenessCalculationEnd", null);
    __decorate([
      lazy
    ], Api, "livenessCalculationFromStatics", null);
    __decorate([
      lazy
    ], Api, "livenessFinalize", null);
    __decorate([
      lazy
    ], Api, "livenessFreeStruct", null);
    __decorate([
      lazy
    ], Api, "memorySnapshotCapture", null);
    __decorate([
      lazy
    ], Api, "memorySnapshotFree", null);
    __decorate([
      lazy
    ], Api, "memorySnapshotGetClasses", null);
    __decorate([
      lazy
    ], Api, "memorySnapshotGetObjects", null);
    __decorate([
      lazy
    ], Api, "memorySnapshotGetRuntimeInformation", null);
    __decorate([
      lazy
    ], Api, "methodGetModifier", null);
    __decorate([
      lazy
    ], Api, "methodGetClass", null);
    __decorate([
      lazy
    ], Api, "methodGetFlags", null);
    __decorate([
      lazy
    ], Api, "methodGetFromReflection", null);
    __decorate([
      lazy
    ], Api, "methodGetName", null);
    __decorate([
      lazy
    ], Api, "methodGetObject", null);
    __decorate([
      lazy
    ], Api, "methodGetParameterCount", null);
    __decorate([
      lazy
    ], Api, "methodGetParameterName", null);
    __decorate([
      lazy
    ], Api, "methodGetParameters", null);
    __decorate([
      lazy
    ], Api, "methodGetParameterType", null);
    __decorate([
      lazy
    ], Api, "methodGetPointer", null);
    __decorate([
      lazy
    ], Api, "methodGetReturnType", null);
    __decorate([
      lazy
    ], Api, "methodIsExternal", null);
    __decorate([
      lazy
    ], Api, "methodIsGeneric", null);
    __decorate([
      lazy
    ], Api, "methodIsInflated", null);
    __decorate([
      lazy
    ], Api, "methodIsInstance", null);
    __decorate([
      lazy
    ], Api, "methodIsSynchronized", null);
    __decorate([
      lazy
    ], Api, "monitorEnter", null);
    __decorate([
      lazy
    ], Api, "monitorExit", null);
    __decorate([
      lazy
    ], Api, "monitorPulse", null);
    __decorate([
      lazy
    ], Api, "monitorPulseAll", null);
    __decorate([
      lazy
    ], Api, "monitorTryEnter", null);
    __decorate([
      lazy
    ], Api, "monitorTryWait", null);
    __decorate([
      lazy
    ], Api, "monitorWait", null);
    __decorate([
      lazy
    ], Api, "objectGetClass", null);
    __decorate([
      lazy
    ], Api, "objectGetVirtualMethod", null);
    __decorate([
      lazy
    ], Api, "objectInit", null);
    __decorate([
      lazy
    ], Api, "objectNew", null);
    __decorate([
      lazy
    ], Api, "objectGetSize", null);
    __decorate([
      lazy
    ], Api, "objectUnbox", null);
    __decorate([
      lazy
    ], Api, "resolveInternalCall", null);
    __decorate([
      lazy
    ], Api, "stringChars", null);
    __decorate([
      lazy
    ], Api, "stringLength", null);
    __decorate([
      lazy
    ], Api, "stringNew", null);
    __decorate([
      lazy
    ], Api, "stringSetLength", null);
    __decorate([
      lazy
    ], Api, "valueBox", null);
    __decorate([
      lazy
    ], Api, "threadAttach", null);
    __decorate([
      lazy
    ], Api, "threadCurrent", null);
    __decorate([
      lazy
    ], Api, "threadGetAllAttachedThreads", null);
    __decorate([
      lazy
    ], Api, "threadIsVm", null);
    __decorate([
      lazy
    ], Api, "threadDetach", null);
    __decorate([
      lazy
    ], Api, "typeGetName", null);
    __decorate([
      lazy
    ], Api, "typeGetObject", null);
    __decorate([
      lazy
    ], Api, "typeGetTypeEnum", null);
    __decorate([
      lazy
    ], Api, "typeIsByReference", null);
    __decorate([
      lazy
    ], Api, "typeIsPrimitive", null);
    __decorate([
      lazy
    ], Api, "cModule", null);
    Il2Cpp3.Api = Api;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    Il2Cpp3.application = {
      /** */
      get dataPath() {
        const get_persistentDataPath = Il2Cpp3.Runtime.internalCall("UnityEngine.Application::get_persistentDataPath", "pointer", []);
        return new Il2Cpp3.String(get_persistentDataPath()).content;
      },
      /** */
      get identifier() {
        const get_identifier = Il2Cpp3.Runtime.internalCall("UnityEngine.Application::get_identifier", "pointer", []) ?? Il2Cpp3.Runtime.internalCall("UnityEngine.Application::get_bundleIdentifier", "pointer", []);
        return get_identifier ? new Il2Cpp3.String(get_identifier()).content : null;
      },
      /** Gets the version of the application */
      get version() {
        const get_version = Il2Cpp3.Runtime.internalCall("UnityEngine.Application::get_version", "pointer", []);
        return get_version ? new Il2Cpp3.String(get_version()).content : null;
      }
    };
    getter(Il2Cpp3, "unityVersion", () => {
      const get_unityVersion = Il2Cpp3.Runtime.internalCall("UnityEngine.Application::get_unityVersion", "pointer", []);
      if (get_unityVersion != null) {
        return new Il2Cpp3.String(get_unityVersion()).content;
      }
      const searchPattern = "45 64 69 74 6f 72 ?? 44 61 74 61 ?? 69 6c 32 63 70 70";
      for (const range of Il2Cpp3.module.enumerateRanges("r--").concat(Process.getRangeByAddress(Il2Cpp3.module.base))) {
        for (let { address } of Memory.scanSync(range.base, range.size, searchPattern)) {
          while (address.readU8() != 0) {
            address = address.sub(1);
          }
          const match = UnityVersion.find(address.add(1).readCString());
          if (match != void 0) {
            return match;
          }
        }
      }
      raise("couldn't determine the Unity version, please specify it manually");
    }, lazy);
    getter(Il2Cpp3, "unityVersionIsBelow201830", () => {
      return UnityVersion.lt(Il2Cpp3.unityVersion, "2018.3.0");
    }, lazy);
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    function dump(fileName, path) {
      fileName = fileName ?? `${Il2Cpp3.application.identifier ?? "unknown"}_${Il2Cpp3.application.version ?? "unknown"}.cs`;
      const destination = `${path ?? Il2Cpp3.application.dataPath}/${fileName}`;
      const file = new File(destination, "w");
      for (const assembly of Il2Cpp3.domain.assemblies) {
        inform(`dumping ${assembly.name}...`);
        for (const klass of assembly.image.classes) {
          file.write(`${klass}

`);
        }
      }
      file.flush();
      file.close();
      ok(`dump saved to ${destination}`);
    }
    Il2Cpp3.dump = dump;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    function installExceptionListener(targetThread = "current") {
      const currentThread = Il2Cpp3.Api.threadCurrent();
      return Interceptor.attach(Il2Cpp3.module.getExportByName("__cxa_throw"), function(args) {
        if (targetThread == "current" && !Il2Cpp3.Api.threadCurrent().equals(currentThread)) {
          return;
        }
        inform(new Il2Cpp3.Object(args[0].readPointer()));
      });
    }
    Il2Cpp3.installExceptionListener = installExceptionListener;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    function is(klass) {
      return (element) => {
        if (element instanceof Il2Cpp3.Class) {
          return klass.isAssignableFrom(element);
        } else {
          return klass.isAssignableFrom(element.class);
        }
      };
    }
    Il2Cpp3.is = is;
    function isExactly(klass) {
      return (element) => {
        if (element instanceof Il2Cpp3.Class) {
          return element.equals(klass);
        } else {
          return element.class.equals(klass);
        }
      };
    }
    Il2Cpp3.isExactly = isExactly;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    Il2Cpp3.gc = {
      /** Gets the heap size in bytes. */
      get heapSize() {
        return Il2Cpp3.Api.gcGetHeapSize();
      },
      /** Determines whether the garbage collector is disabled. */
      get isEnabled() {
        return !Il2Cpp3.Api.gcIsDisabled();
      },
      /** Determines whether the garbage collector is incremental. */
      get isIncremental() {
        return !!Il2Cpp3.Api.gcIsIncremental();
      },
      /** Gets the number of nanoseconds the garbage collector can spend in a collection step. */
      get maxTimeSlice() {
        return Il2Cpp3.Api.gcGetMaxTimeSlice();
      },
      /** Gets the used heap size in bytes. */
      get usedHeapSize() {
        return Il2Cpp3.Api.gcGetUsedSize();
      },
      /** Enables or disables the garbage collector. */
      set isEnabled(value) {
        value ? Il2Cpp3.Api.gcEnable() : Il2Cpp3.Api.gcDisable();
      },
      /** Sets the number of nanoseconds the garbage collector can spend in a collection step. */
      set maxTimeSlice(nanoseconds) {
        Il2Cpp3.Api.gcSetMaxTimeSlice(nanoseconds);
      },
      /** Returns the heap allocated objects of the specified class. This variant reads GC descriptors. */
      choose(klass) {
        const matches = [];
        const callback = (objects, size) => {
          for (let i = 0; i < size; i++) {
            matches.push(new Il2Cpp3.Object(objects.add(i * Process.pointerSize).readPointer()));
          }
        };
        const chooseCallback = new NativeCallback(callback, "void", ["pointer", "int", "pointer"]);
        if (UnityVersion.gte(Il2Cpp3.unityVersion, "2021.2.0")) {
          const realloc = (handle, size) => {
            if (!handle.isNull() && size.compare(0) == 0) {
              Il2Cpp3.free(handle);
              return NULL;
            } else {
              return Il2Cpp3.alloc(size);
            }
          };
          const reallocCallback = new NativeCallback(realloc, "pointer", ["pointer", "size_t", "pointer"]);
          this.stopWorld();
          const state = Il2Cpp3.Api.livenessAllocateStruct(klass, 0, chooseCallback, NULL, reallocCallback);
          Il2Cpp3.Api.livenessCalculationFromStatics(state);
          Il2Cpp3.Api.livenessFinalize(state);
          this.startWorld();
          Il2Cpp3.Api.livenessFreeStruct(state);
        } else {
          const onWorld = new NativeCallback(() => {
          }, "void", []);
          const state = Il2Cpp3.Api.livenessCalculationBegin(klass, 0, chooseCallback, NULL, onWorld, onWorld);
          Il2Cpp3.Api.livenessCalculationFromStatics(state);
          Il2Cpp3.Api.livenessCalculationEnd(state);
        }
        return matches;
      },
      /** Forces a garbage collection of the specified generation. */
      collect(generation) {
        Il2Cpp3.Api.gcCollect(generation < 0 ? 0 : generation > 2 ? 2 : generation);
      },
      /** Forces a garbage collection. */
      collectALittle() {
        Il2Cpp3.Api.gcCollectALittle();
      },
      /** Resumes all the previously stopped threads. */
      startWorld() {
        return Il2Cpp3.Api.gcStartWorld();
      },
      /** Performs an incremental garbage collection. */
      startIncrementalCollection() {
        return Il2Cpp3.Api.gcStartIncrementalCollection();
      },
      /** Stops all threads which may access the garbage collected heap, other than the caller. */
      stopWorld() {
        return Il2Cpp3.Api.gcStopWorld();
      }
    };
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    function alloc(size = Process.pointerSize) {
      return Il2Cpp3.Api.alloc(size);
    }
    Il2Cpp3.alloc = alloc;
    function free(pointer) {
      return Il2Cpp3.Api.free(pointer);
    }
    Il2Cpp3.free = free;
    function read(pointer, type) {
      switch (type.typeEnum) {
        case 2:
          return !!pointer.readS8();
        case 4:
          return pointer.readS8();
        case 5:
          return pointer.readU8();
        case 6:
          return pointer.readS16();
        case 7:
          return pointer.readU16();
        case 8:
          return pointer.readS32();
        case 9:
          return pointer.readU32();
        case 3:
          return pointer.readU16();
        case 10:
          return pointer.readS64();
        case 11:
          return pointer.readU64();
        case 12:
          return pointer.readFloat();
        case 13:
          return pointer.readDouble();
        case 24:
        case 25:
          return pointer.readPointer();
        case 15:
          return new Il2Cpp3.Pointer(pointer.readPointer(), type.class.baseType);
        case 17:
          return new Il2Cpp3.ValueType(pointer, type);
        case 28:
        case 18:
          return new Il2Cpp3.Object(pointer.readPointer());
        case 21:
          return type.class.isValueType ? new Il2Cpp3.ValueType(pointer, type) : new Il2Cpp3.Object(pointer.readPointer());
        case 14:
          return new Il2Cpp3.String(pointer.readPointer());
        case 29:
        case 20:
          return new Il2Cpp3.Array(pointer.readPointer());
      }
      raise(`read: "${type.name}" (${type.typeEnum}) has not been handled yet. Please file an issue!`);
    }
    Il2Cpp3.read = read;
    function write(pointer, value, type) {
      switch (type.typeEnum) {
        case 2:
          return pointer.writeS8(+value);
        case 4:
          return pointer.writeS8(value);
        case 5:
          return pointer.writeU8(value);
        case 6:
          return pointer.writeS16(value);
        case 7:
          return pointer.writeU16(value);
        case 8:
          return pointer.writeS32(value);
        case 9:
          return pointer.writeU32(value);
        case 3:
          return pointer.writeU16(value);
        case 10:
          return pointer.writeS64(value);
        case 11:
          return pointer.writeU64(value);
        case 12:
          return pointer.writeFloat(value);
        case 13:
          return pointer.writeDouble(value);
        case 24:
        case 25:
        case 15:
        case 17:
        case 14:
        case 28:
        case 18:
        case 29:
        case 20:
        case 21:
          if (value instanceof Il2Cpp3.ValueType) {
            Memory.copy(pointer, value, type.class.valueSize);
            return pointer;
          }
          return pointer.writePointer(value);
      }
      raise(`write: "${type.name}" (${type.typeEnum}) has not been handled yet. Please file an issue!`);
    }
    Il2Cpp3.write = write;
    function fromFridaValue(value, type) {
      if (globalThis.Array.isArray(value)) {
        return arrayToValueType(type, value);
      } else if (value instanceof NativePointer) {
        if (type.isByReference) {
          return new Il2Cpp3.Reference(value, type);
        }
        switch (type.typeEnum) {
          case 15:
            return new Il2Cpp3.Pointer(value, type.class.baseType);
          case 14:
            return new Il2Cpp3.String(value);
          case 18:
          case 21:
          case 28:
            return new Il2Cpp3.Object(value);
          case 29:
          case 20:
            return new Il2Cpp3.Array(value);
          default:
            return value;
        }
      } else if (type.typeEnum == 2) {
        return !!value;
      } else {
        return value;
      }
    }
    Il2Cpp3.fromFridaValue = fromFridaValue;
    function toFridaValue(value) {
      if (typeof value == "boolean") {
        return +value;
      } else if (value instanceof Il2Cpp3.ValueType) {
        return valueTypeToArray(value);
      } else {
        return value;
      }
    }
    Il2Cpp3.toFridaValue = toFridaValue;
    function valueTypeToArray(value) {
      const instanceFields = value.type.class.fields.filter((_) => !_.isStatic);
      return instanceFields.length == 0 ? [value.handle.readU8()] : instanceFields.map((_) => _.withHolder(value).value).map((value2) => value2 instanceof Il2Cpp3.ValueType ? valueTypeToArray(value2) : value2 instanceof NativeStruct ? value2.handle : typeof value2 == "boolean" ? +value2 : value2);
    }
    function arrayToValueType(type, nativeValues) {
      function iter(type2, startOffset = 0) {
        const arr = [];
        for (const field of type2.class.fields) {
          if (!field.isStatic) {
            const offset = startOffset + field.offset - Il2Cpp3.Object.headerSize;
            if (field.type.typeEnum == 17 || field.type.typeEnum == 21 && field.type.class.isValueType) {
              arr.push(...iter(field.type, offset));
            } else {
              arr.push([field.type.typeEnum, offset]);
            }
          }
        }
        if (arr.length == 0) {
          arr.push([5, 0]);
        }
        return arr;
      }
      const valueType = Memory.alloc(type.class.valueSize);
      nativeValues = nativeValues.flat(Infinity);
      const typesAndOffsets = iter(type);
      for (let i = 0; i < nativeValues.length; i++) {
        const value = nativeValues[i];
        const [typeEnum, offset] = typesAndOffsets[i];
        const pointer = valueType.add(offset);
        switch (typeEnum) {
          case 2:
            pointer.writeS8(value);
            break;
          case 4:
            pointer.writeS8(value);
            break;
          case 5:
            pointer.writeU8(value);
            break;
          case 6:
            pointer.writeS16(value);
            break;
          case 7:
            pointer.writeU16(value);
            break;
          case 8:
            pointer.writeS32(value);
            break;
          case 9:
            pointer.writeU32(value);
            break;
          case 3:
            pointer.writeU16(value);
            break;
          case 10:
            pointer.writeS64(value);
            break;
          case 11:
            pointer.writeU64(value);
            break;
          case 12:
            pointer.writeFloat(value);
            break;
          case 13:
            pointer.writeDouble(value);
            break;
          case 24:
          case 25:
          case 15:
          case 29:
          case 20:
          case 14:
          case 28:
          case 18:
          case 21:
            pointer.writePointer(value);
            break;
          default:
            warn(`arrayToValueType: defaulting ${typeEnum} to pointer`);
            pointer.writePointer(value);
            break;
        }
      }
      return new Il2Cpp3.ValueType(valueType, type);
    }
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    getter(Il2Cpp3, "moduleName", () => {
      switch (Process.platform) {
        case "linux":
          try {
            const _ = Java.androidVersion;
            return "libil2cpp.so";
          } catch (e) {
            return "GameAssembly.so";
          }
        case "windows":
          return "GameAssembly.dll";
        case "darwin":
          try {
            return "UnityFramework";
          } catch (e) {
            return "GameAssembly.dylib";
          }
      }
      raise(`${Process.platform} is not supported yet`);
    });
    getter(Il2Cpp3, "module", () => {
      return Process.getModuleByName(Il2Cpp3.moduleName);
    }, lazy);
    async function initialize() {
      if (Process.platform == "darwin") {
        let il2cppModuleName = Process.findModuleByAddress(Module.findExportByName(null, "il2cpp_init") ?? NULL)?.name;
        if (il2cppModuleName == void 0) {
          il2cppModuleName = await forModule("UnityFramework", "GameAssembly.dylib");
        }
        Reflect.defineProperty(Il2Cpp3, "moduleName", { value: il2cppModuleName });
      } else {
        await forModule(Il2Cpp3.moduleName);
      }
      if (Il2Cpp3.Api.getCorlib().isNull()) {
        await new Promise((resolve) => {
          const interceptor = Interceptor.attach(Il2Cpp3.Api.init, {
            onLeave() {
              interceptor.detach();
              setImmediate(resolve);
            }
          });
        });
      }
    }
    Il2Cpp3.initialize = initialize;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    async function perform(block) {
      await Il2Cpp3.initialize();
      let thread = Il2Cpp3.currentThread;
      const isForeignThread = thread == null;
      if (thread == null) {
        thread = Il2Cpp3.domain.attach();
      }
      try {
        const result = block();
        return result instanceof Promise ? await result : result;
      } catch (error) {
        Script.nextTick((_) => {
          throw _;
        }, error);
        return Promise.reject(error);
      } finally {
        if (isForeignThread) {
          thread.detach();
        }
      }
    }
    Il2Cpp3.perform = perform;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Runtime {
      /** Gets the allocation granularity, it should be `Process.pointerSize * 2`. */
      static get allocationGranularity() {
        return this.information[5];
      }
      /** @internal */
      static get information() {
        return Il2Cpp3.memorySnapshot(Il2Cpp3.Api.memorySnapshotGetRuntimeInformation);
      }
      /** Gets the pointer size. */
      static get pointerSize() {
        return this.information[0];
      }
      /** @internal */
      static internalCall(name, retType, argTypes) {
        const handle = Il2Cpp3.Api.resolveInternalCall(Memory.allocUtf8String(name));
        return handle.isNull() ? null : new NativeFunction(handle, retType, argTypes);
      }
    }
    __decorate([
      lazy
    ], Runtime, "information", null);
    Il2Cpp3.Runtime = Runtime;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Array2 extends NativeStruct {
      /** Gets the Il2CppArray struct size, possibly equal to `Process.pointerSize * 4`. */
      static get headerSize() {
        return Il2Cpp3.corlib.class("System.Array").instanceSize;
      }
      /** @internal Gets a pointer to the first element of the current array. */
      get elements() {
        return new Il2Cpp3.Pointer(Il2Cpp3.Api.arrayGetElements(this), this.elementType);
      }
      /** Gets the size of the object encompassed by the current array. */
      get elementSize() {
        return this.elementType.class.arrayElementSize;
      }
      /** Gets the type of the object encompassed by the current array. */
      get elementType() {
        return this.object.class.type.class.baseType;
      }
      /** Gets the total number of elements in all the dimensions of the current array. */
      get length() {
        return Il2Cpp3.Api.arrayGetLength(this);
      }
      /** Gets the encompassing object of the current array. */
      get object() {
        return new Il2Cpp3.Object(this);
      }
      /** Gets the element at the specified index of the current array. */
      get(index) {
        if (index < 0 || index >= this.length) {
          raise(`cannot get element at index ${index}: array length is ${this.length}`);
        }
        return this.elements.get(index);
      }
      /** Sets the element at the specified index of the current array. */
      set(index, value) {
        if (index < 0 || index >= this.length) {
          raise(`cannot get element at index ${index}: array length is ${this.length}`);
        }
        this.elements.set(index, value);
      }
      /** */
      toString() {
        return this.isNull() ? "null" : `[${this.elements.read(this.length, 0)}]`;
      }
      /** Iterable. */
      *[Symbol.iterator]() {
        for (let i = 0; i < this.length; i++) {
          yield this.elements.get(i);
        }
      }
    }
    __decorate([
      lazy
    ], Array2.prototype, "elements", null);
    __decorate([
      lazy
    ], Array2.prototype, "elementSize", null);
    __decorate([
      lazy
    ], Array2.prototype, "elementType", null);
    __decorate([
      lazy
    ], Array2.prototype, "length", null);
    __decorate([
      lazy
    ], Array2.prototype, "object", null);
    __decorate([
      lazy
    ], Array2, "headerSize", null);
    Il2Cpp3.Array = Array2;
    function array(klass, lengthOrElements) {
      const length = typeof lengthOrElements == "number" ? lengthOrElements : lengthOrElements.length;
      const array2 = new Il2Cpp3.Array(Il2Cpp3.Api.arrayNew(klass, length));
      if (globalThis.Array.isArray(lengthOrElements)) {
        array2.elements.write(lengthOrElements);
      }
      return array2;
    }
    Il2Cpp3.array = array;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    let Assembly = class Assembly extends NonNullNativeStruct {
      /** Gets the image of this assembly. */
      get image() {
        return new Il2Cpp3.Image(Il2Cpp3.Api.assemblyGetImage(this));
      }
      /** Gets the name of this assembly. */
      get name() {
        return this.image.name.replace(".dll", "");
      }
      /** Gets the encompassing object of the current assembly. */
      get object() {
        return Il2Cpp3.corlib.class("System.Reflection.Assembly").method("Load").invoke(Il2Cpp3.string(this.name));
      }
    };
    __decorate([
      lazy
    ], Assembly.prototype, "image", null);
    __decorate([
      lazy
    ], Assembly.prototype, "name", null);
    __decorate([
      lazy
    ], Assembly.prototype, "object", null);
    Assembly = __decorate([
      recycle
    ], Assembly);
    Il2Cpp3.Assembly = Assembly;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    let Class = class Class extends NonNullNativeStruct {
      /** Gets the actual size of the instance of the current class. */
      get actualInstanceSize() {
        return Il2Cpp3.Api.classGetActualInstanceSize(this);
      }
      /** Gets the array class which encompass the current class. */
      get arrayClass() {
        return new Il2Cpp3.Class(Il2Cpp3.Api.classGetArrayClass(this, 1));
      }
      /** Gets the size of the object encompassed by the current array class. */
      get arrayElementSize() {
        return Il2Cpp3.Api.classGetArrayElementSize(this);
      }
      /** Gets the name of the assembly in which the current class is defined. */
      get assemblyName() {
        return Il2Cpp3.Api.classGetAssemblyName(this).readUtf8String();
      }
      /** Gets the class that declares the current nested class. */
      get declaringClass() {
        const handle = Il2Cpp3.Api.classGetDeclaringType(this);
        return handle.isNull() ? null : new Il2Cpp3.Class(handle);
      }
      /** Gets the encompassed type of this array, reference, pointer or enum type. */
      get baseType() {
        const handle = Il2Cpp3.Api.classGetBaseType(this);
        return handle.isNull() ? null : new Il2Cpp3.Type(handle);
      }
      /** Gets the class of the object encompassed or referred to by the current array, pointer or reference class. */
      get elementClass() {
        const handle = Il2Cpp3.Api.classGetElementClass(this);
        return handle.isNull() ? null : new Il2Cpp3.Class(handle);
      }
      /** Gets the fields of the current class. */
      get fields() {
        return readNativeIterator((_) => Il2Cpp3.Api.classGetFields(this, _)).map((_) => new Il2Cpp3.Field(_));
      }
      /** Gets the flags of the current class. */
      get flags() {
        return Il2Cpp3.Api.classGetFlags(this);
      }
      /** Gets the full name (namespace + name) of the current class. */
      get fullName() {
        return this.namespace ? `${this.namespace}.${this.name}` : this.name;
      }
      /** Gets the amount of generic parameters of this generic class. */
      get genericParameterCount() {
        if (!this.isGeneric) {
          return 0;
        }
        return this.type.object.method("GetGenericArguments").invoke().length;
      }
      /** Determines whether the GC has tracking references to the current class instances. */
      get hasReferences() {
        return !!Il2Cpp3.Api.classHasReferences(this);
      }
      /** Determines whether ther current class has a valid static constructor. */
      get hasStaticConstructor() {
        const staticConstructor = this.tryMethod(".cctor");
        return staticConstructor != null && !staticConstructor.virtualAddress.isNull();
      }
      /** Gets the image in which the current class is defined. */
      get image() {
        return new Il2Cpp3.Image(Il2Cpp3.Api.classGetImage(this));
      }
      /** Gets the size of the instance of the current class. */
      get instanceSize() {
        return Il2Cpp3.Api.classGetInstanceSize(this);
      }
      /** Determines whether the current class is abstract. */
      get isAbstract() {
        return !!Il2Cpp3.Api.classIsAbstract(this);
      }
      /** Determines whether the current class is blittable. */
      get isBlittable() {
        return !!Il2Cpp3.Api.classIsBlittable(this);
      }
      /** Determines whether the current class is an enumeration. */
      get isEnum() {
        return !!Il2Cpp3.Api.classIsEnum(this);
      }
      /** Determines whether the current class is a generic one. */
      get isGeneric() {
        return !!Il2Cpp3.Api.classIsGeneric(this);
      }
      /** Determines whether the current class is inflated. */
      get isInflated() {
        return !!Il2Cpp3.Api.classIsInflated(this);
      }
      /** Determines whether the current class is an interface. */
      get isInterface() {
        return !!Il2Cpp3.Api.classIsInterface(this);
      }
      /** Determines whether the current class is a value type. */
      get isValueType() {
        return !!Il2Cpp3.Api.classIsValueType(this);
      }
      /** Gets the interfaces implemented or inherited by the current class. */
      get interfaces() {
        return readNativeIterator((_) => Il2Cpp3.Api.classGetInterfaces(this, _)).map((_) => new Il2Cpp3.Class(_));
      }
      /** Gets the methods implemented by the current class. */
      get methods() {
        return readNativeIterator((_) => Il2Cpp3.Api.classGetMethods(this, _)).map((_) => new Il2Cpp3.Method(_));
      }
      /** Gets the name of the current class. */
      get name() {
        return Il2Cpp3.Api.classGetName(this).readUtf8String();
      }
      /** Gets the namespace of the current class. */
      get namespace() {
        return Il2Cpp3.Api.classGetNamespace(this).readUtf8String();
      }
      /** Gets the classes nested inside the current class. */
      get nestedClasses() {
        return readNativeIterator((_) => Il2Cpp3.Api.classGetNestedClasses(this, _)).map((_) => new Il2Cpp3.Class(_));
      }
      /** Gets the class from which the current class directly inherits. */
      get parent() {
        const handle = Il2Cpp3.Api.classGetParent(this);
        return handle.isNull() ? null : new Il2Cpp3.Class(handle);
      }
      /** Gets the rank (number of dimensions) of the current array class. */
      get rank() {
        return Il2Cpp3.Api.classGetRank(this);
      }
      /** Gets a pointer to the static fields of the current class. */
      get staticFieldsData() {
        return Il2Cpp3.Api.classGetStaticFieldData(this);
      }
      /** Gets the size of the instance - as a value type - of the current class. */
      get valueSize() {
        return Il2Cpp3.Api.classGetValueSize(this, NULL);
      }
      /** Gets the type of the current class. */
      get type() {
        return new Il2Cpp3.Type(Il2Cpp3.Api.classGetType(this));
      }
      /** Allocates a new object of the current class. */
      alloc() {
        return new Il2Cpp3.Object(Il2Cpp3.Api.objectNew(this));
      }
      /** Gets the field identified by the given name. */
      field(name) {
        return this.tryField(name) ?? raise(`couldn't find field ${name} in class ${this.type.name}`);
      }
      /** Builds a generic instance of the current generic class. */
      inflate(...classes) {
        if (!this.isGeneric) {
          raise(`cannot inflate class ${this.type.name}: it has no generic parameters`);
        }
        if (this.genericParameterCount != classes.length) {
          raise(`cannot inflate class ${this.type.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${classes.length}`);
        }
        const types = classes.map((_) => _.type.object);
        const typeArray = Il2Cpp3.array(Il2Cpp3.corlib.class("System.Type"), types);
        const inflatedType = this.type.object.method("MakeGenericType", 1).invoke(typeArray);
        return new Il2Cpp3.Class(Il2Cpp3.Api.classFromSystemType(inflatedType));
      }
      /** Calls the static constructor of the current class. */
      initialize() {
        Il2Cpp3.Api.classInit(this);
      }
      /** Determines whether an instance of `other` class can be assigned to a variable of the current type. */
      isAssignableFrom(other) {
        return !!Il2Cpp3.Api.classIsAssignableFrom(this, other);
      }
      /** Determines whether the current class derives from `other` class. */
      isSubclassOf(other, checkInterfaces) {
        return !!Il2Cpp3.Api.classIsSubclassOf(this, other, +checkInterfaces);
      }
      /** Gets the method identified by the given name and parameter count. */
      method(name, parameterCount = -1) {
        return this.tryMethod(name, parameterCount) ?? raise(`couldn't find method ${name} in class ${this.type.name}`);
      }
      /** Gets the nested class with the given name. */
      nested(name) {
        return this.tryNested(name) ?? raise(`couldn't find nested class ${name} in class ${this.type.name}`);
      }
      /** Allocates a new object of the current class and calls its default constructor. */
      new() {
        const object = this.alloc();
        const exceptionArray = Memory.alloc(Process.pointerSize);
        Il2Cpp3.Api.objectInit(object, exceptionArray);
        const exception = exceptionArray.readPointer();
        if (!exception.isNull()) {
          raise(new Il2Cpp3.Object(exception).toString());
        }
        return object;
      }
      /** Gets the field with the given name. */
      tryField(name) {
        const handle = Il2Cpp3.Api.classGetFieldFromName(this, Memory.allocUtf8String(name));
        return handle.isNull() ? null : new Il2Cpp3.Field(handle);
      }
      /** Gets the method with the given name and parameter count. */
      tryMethod(name, parameterCount = -1) {
        const handle = Il2Cpp3.Api.classGetMethodFromName(this, Memory.allocUtf8String(name), parameterCount);
        return handle.isNull() ? null : new Il2Cpp3.Method(handle);
      }
      /** Gets the nested class with the given name. */
      tryNested(name) {
        return this.nestedClasses.find((_) => _.name == name);
      }
      /** */
      toString() {
        const inherited = [this.parent].concat(this.interfaces);
        return `// ${this.assemblyName}
${this.isEnum ? `enum` : this.isValueType ? `struct` : this.isInterface ? `interface` : `class`} ${this.type.name}${inherited ? ` : ${inherited.map((_) => _?.type.name).join(`, `)}` : ``}
{
    ${this.fields.join(`
    `)}
    ${this.methods.join(`
    `)}
}`;
      }
      /** Executes a callback for every defined class. */
      static enumerate(block) {
        const callback = new NativeCallback((_) => block(new Il2Cpp3.Class(_)), "void", ["pointer", "pointer"]);
        return Il2Cpp3.Api.classForEach(callback, NULL);
      }
    };
    __decorate([
      lazy
    ], Class.prototype, "actualInstanceSize", null);
    __decorate([
      lazy
    ], Class.prototype, "arrayClass", null);
    __decorate([
      lazy
    ], Class.prototype, "arrayElementSize", null);
    __decorate([
      lazy
    ], Class.prototype, "assemblyName", null);
    __decorate([
      lazy
    ], Class.prototype, "declaringClass", null);
    __decorate([
      lazy
    ], Class.prototype, "baseType", null);
    __decorate([
      lazy
    ], Class.prototype, "elementClass", null);
    __decorate([
      lazy
    ], Class.prototype, "fields", null);
    __decorate([
      lazy
    ], Class.prototype, "flags", null);
    __decorate([
      lazy
    ], Class.prototype, "fullName", null);
    __decorate([
      lazy
    ], Class.prototype, "genericParameterCount", null);
    __decorate([
      lazy
    ], Class.prototype, "hasReferences", null);
    __decorate([
      lazy
    ], Class.prototype, "hasStaticConstructor", null);
    __decorate([
      lazy
    ], Class.prototype, "image", null);
    __decorate([
      lazy
    ], Class.prototype, "instanceSize", null);
    __decorate([
      lazy
    ], Class.prototype, "isAbstract", null);
    __decorate([
      lazy
    ], Class.prototype, "isBlittable", null);
    __decorate([
      lazy
    ], Class.prototype, "isEnum", null);
    __decorate([
      lazy
    ], Class.prototype, "isGeneric", null);
    __decorate([
      lazy
    ], Class.prototype, "isInflated", null);
    __decorate([
      lazy
    ], Class.prototype, "isInterface", null);
    __decorate([
      lazy
    ], Class.prototype, "isValueType", null);
    __decorate([
      lazy
    ], Class.prototype, "interfaces", null);
    __decorate([
      lazy
    ], Class.prototype, "methods", null);
    __decorate([
      lazy
    ], Class.prototype, "name", null);
    __decorate([
      lazy
    ], Class.prototype, "namespace", null);
    __decorate([
      lazy
    ], Class.prototype, "nestedClasses", null);
    __decorate([
      lazy
    ], Class.prototype, "parent", null);
    __decorate([
      lazy
    ], Class.prototype, "rank", null);
    __decorate([
      lazy
    ], Class.prototype, "staticFieldsData", null);
    __decorate([
      lazy
    ], Class.prototype, "valueSize", null);
    __decorate([
      lazy
    ], Class.prototype, "type", null);
    Class = __decorate([
      recycle
    ], Class);
    Il2Cpp3.Class = Class;
    Il2Cpp3._delegateNativeCallbacks = {};
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    function delegate(klass, block) {
      const SystemDelegate = Il2Cpp3.corlib.class("System.Delegate");
      const SystemMulticastDelegate = Il2Cpp3.corlib.class("System.MulticastDelegate");
      if (!SystemDelegate.isAssignableFrom(klass)) {
        raise(`cannot create a delegate for ${klass.type.name} as it's a non-delegate class`);
      }
      if (klass.equals(SystemDelegate) || klass.equals(SystemMulticastDelegate)) {
        raise(`cannot create a delegate for neither ${SystemDelegate.type.name} nor ${SystemMulticastDelegate.type.name}, use a subclass instead`);
      }
      const delegate2 = klass.alloc();
      const key = delegate2.handle.toString();
      const Invoke = delegate2.tryMethod("Invoke") ?? raise(`cannot create a delegate for ${klass.type.name}, there is no Invoke method`);
      delegate2.method(".ctor").invoke(delegate2, Invoke.handle);
      const callback = Invoke.wrap((...args) => {
        delete Il2Cpp3._delegateNativeCallbacks[key];
        return block(...args);
      });
      delegate2.field("method_ptr").value = callback;
      delegate2.field("invoke_impl").value = callback;
      Il2Cpp3._delegateNativeCallbacks[key] = callback;
      return delegate2;
    }
    Il2Cpp3.delegate = delegate;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    let Domain = class Domain extends NonNullNativeStruct {
      /** Gets the assemblies that have been loaded into the execution context of the application domain. */
      get assemblies() {
        let handles = readNativeList((_) => Il2Cpp3.Api.domainGetAssemblies(this, _));
        if (handles.length == 0) {
          const assemblyObjects = this.object.method("GetAssemblies").overload().invoke();
          handles = globalThis.Array.from(assemblyObjects).map((_) => _.field("_mono_assembly").value);
        }
        return handles.map((_) => new Il2Cpp3.Assembly(_));
      }
      /** Gets the encompassing object of the application domain. */
      get object() {
        return new Il2Cpp3.Object(Il2Cpp3.Api.domainGetObject());
      }
      /** Opens and loads the assembly with the given name. */
      assembly(name) {
        return this.tryAssembly(name) ?? raise(`couldn't find assembly ${name}`);
      }
      /** Attached a new thread to the application domain. */
      attach() {
        return new Il2Cpp3.Thread(Il2Cpp3.Api.threadAttach(this));
      }
      /** Opens and loads the assembly with the given name. */
      tryAssembly(name) {
        const handle = Il2Cpp3.Api.domainAssemblyOpen(this, Memory.allocUtf8String(name));
        return handle.isNull() ? null : new Il2Cpp3.Assembly(handle);
      }
    };
    __decorate([
      lazy
    ], Domain.prototype, "assemblies", null);
    __decorate([
      lazy
    ], Domain.prototype, "object", null);
    Domain = __decorate([
      recycle
    ], Domain);
    Il2Cpp3.Domain = Domain;
    getter(Il2Cpp3, "domain", () => {
      return new Il2Cpp3.Domain(Il2Cpp3.Api.domainGet());
    }, lazy);
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Field extends NonNullNativeStruct {
      /** Gets the class in which this field is defined. */
      get class() {
        return new Il2Cpp3.Class(Il2Cpp3.Api.fieldGetClass(this));
      }
      /** Gets the flags of the current field. */
      get flags() {
        return Il2Cpp3.Api.fieldGetFlags(this);
      }
      /** Determines whether this field value is known at compile time. */
      get isLiteral() {
        return !!Il2Cpp3.Api.fieldIsLiteral(this);
      }
      /** Determines whether this field is static. */
      get isStatic() {
        return !!Il2Cpp3.Api.fieldIsStatic(this);
      }
      /** Determines whether this field is thread static. */
      get isThreadStatic() {
        return !!Il2Cpp3.Api.fieldIsThreadStatic(this);
      }
      /** Gets the access modifier of this field. */
      get modifier() {
        return Il2Cpp3.Api.fieldGetModifier(this).readUtf8String();
      }
      /** Gets the name of this field. */
      get name() {
        return Il2Cpp3.Api.fieldGetName(this).readUtf8String();
      }
      /** Gets the offset of this field, calculated as the difference with its owner virtual address. */
      get offset() {
        return Il2Cpp3.Api.fieldGetOffset(this);
      }
      /** Gets the type of this field. */
      get type() {
        return new Il2Cpp3.Type(Il2Cpp3.Api.fieldGetType(this));
      }
      /** Gets the value of this field. */
      get value() {
        const handle = Memory.alloc(Process.pointerSize);
        Il2Cpp3.Api.fieldGetStaticValue(this.handle, handle);
        return Il2Cpp3.read(handle, this.type);
      }
      /** Sets the value of this field. Thread static or literal values cannot be altered yet. */
      set value(value) {
        if (this.isThreadStatic || this.isLiteral) {
          raise(`cannot modify the value of field ${this.name}: is thread static or literal`);
        }
        const handle = Memory.alloc(Process.pointerSize);
        Il2Cpp3.write(handle, value, this.type);
        Il2Cpp3.Api.fieldSetStaticValue(this.handle, handle);
      }
      /** */
      toString() {
        return `${this.isThreadStatic ? `[ThreadStatic] ` : ``}${this.isStatic ? `static ` : ``}${this.type.name} ${this.name}${this.isLiteral ? ` = ${this.type.class.isEnum ? Il2Cpp3.read(this.value.handle, this.type.class.baseType) : this.value}` : ``};${this.isThreadStatic || this.isLiteral ? `` : ` // 0x${this.offset.toString(16)}`}`;
      }
      /** @internal */
      withHolder(instance) {
        let valueHandle = instance.handle.add(this.offset);
        if (instance instanceof Il2Cpp3.ValueType) {
          valueHandle = valueHandle.sub(Il2Cpp3.Object.headerSize);
        }
        return new Proxy(this, {
          get(target, property) {
            if (property == "value") {
              return Il2Cpp3.read(valueHandle, target.type);
            }
            return Reflect.get(target, property);
          },
          set(target, property, value) {
            if (property == "value") {
              Il2Cpp3.write(valueHandle, value, target.type);
              return true;
            }
            return Reflect.set(target, property, value);
          }
        });
      }
    }
    __decorate([
      lazy
    ], Field.prototype, "class", null);
    __decorate([
      lazy
    ], Field.prototype, "flags", null);
    __decorate([
      lazy
    ], Field.prototype, "isLiteral", null);
    __decorate([
      lazy
    ], Field.prototype, "isStatic", null);
    __decorate([
      lazy
    ], Field.prototype, "isThreadStatic", null);
    __decorate([
      lazy
    ], Field.prototype, "modifier", null);
    __decorate([
      lazy
    ], Field.prototype, "name", null);
    __decorate([
      lazy
    ], Field.prototype, "offset", null);
    __decorate([
      lazy
    ], Field.prototype, "type", null);
    Il2Cpp3.Field = Field;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class GCHandle {
      handle;
      /** @internal */
      constructor(handle) {
        this.handle = handle;
      }
      /** Gets the object associated to this handle. */
      get target() {
        const handle = Il2Cpp3.Api.gcHandleGetTarget(this.handle);
        return handle.isNull() ? null : new Il2Cpp3.Object(handle);
      }
      /** Frees this handle. */
      free() {
        return Il2Cpp3.Api.gcHandleFree(this.handle);
      }
    }
    Il2Cpp3.GCHandle = GCHandle;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    let Image = class Image extends NonNullNativeStruct {
      /** Gets the assembly in which the current image is defined. */
      get assembly() {
        return new Il2Cpp3.Assembly(Il2Cpp3.Api.imageGetAssembly(this));
      }
      /** Gets the amount of classes defined in this image. */
      get classCount() {
        return Il2Cpp3.Api.imageGetClassCount(this);
      }
      /** Gets the classes defined in this image. */
      get classes() {
        if (Il2Cpp3.unityVersionIsBelow201830) {
          const types = this.assembly.object.method("GetTypes").invoke(false);
          return globalThis.Array.from(types).map((_) => new Il2Cpp3.Class(Il2Cpp3.Api.classFromSystemType(_)));
        } else {
          return globalThis.Array.from(globalThis.Array(this.classCount), (_, i) => new Il2Cpp3.Class(Il2Cpp3.Api.imageGetClass(this, i)));
        }
      }
      /** Gets the name of this image. */
      get name() {
        return Il2Cpp3.Api.imageGetName(this).readUtf8String();
      }
      /** Gets the class with the specified name defined in this image. */
      class(name) {
        return this.tryClass(name) ?? raise(`couldn't find class ${name} in assembly ${this.name}`);
      }
      /** Gets the class with the specified name defined in this image. */
      tryClass(name) {
        const dotIndex = name.lastIndexOf(".");
        const classNamespace = Memory.allocUtf8String(dotIndex == -1 ? "" : name.slice(0, dotIndex));
        const className = Memory.allocUtf8String(name.slice(dotIndex + 1));
        const handle = Il2Cpp3.Api.classFromName(this, classNamespace, className);
        return handle.isNull() ? null : new Il2Cpp3.Class(handle);
      }
    };
    __decorate([
      lazy
    ], Image.prototype, "assembly", null);
    __decorate([
      lazy
    ], Image.prototype, "classCount", null);
    __decorate([
      lazy
    ], Image.prototype, "classes", null);
    __decorate([
      lazy
    ], Image.prototype, "name", null);
    Image = __decorate([
      recycle
    ], Image);
    Il2Cpp3.Image = Image;
    getter(Il2Cpp3, "corlib", () => {
      return new Il2Cpp3.Image(Il2Cpp3.Api.getCorlib());
    }, lazy);
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class MemorySnapshot extends NonNullNativeStruct {
      /** Captures a memory snapshot. */
      static capture() {
        return new Il2Cpp3.MemorySnapshot();
      }
      /** Creates a memory snapshot with the given handle. */
      constructor(handle = Il2Cpp3.Api.memorySnapshotCapture()) {
        super(handle);
      }
      /** Gets any initialized class. */
      get classes() {
        return readNativeIterator((_) => Il2Cpp3.Api.memorySnapshotGetClasses(this, _)).map((_) => new Il2Cpp3.Class(_));
      }
      /** Gets the objects tracked by this memory snapshot. */
      get objects() {
        return readNativeList((_) => Il2Cpp3.Api.memorySnapshotGetObjects(this, _)).filter((_) => !_.isNull()).map((_) => new Il2Cpp3.Object(_));
      }
      /** Frees this memory snapshot. */
      free() {
        Il2Cpp3.Api.memorySnapshotFree(this);
      }
    }
    __decorate([
      lazy
    ], MemorySnapshot.prototype, "classes", null);
    __decorate([
      lazy
    ], MemorySnapshot.prototype, "objects", null);
    Il2Cpp3.MemorySnapshot = MemorySnapshot;
    function memorySnapshot(block) {
      const memorySnapshot2 = Il2Cpp3.MemorySnapshot.capture();
      const result = block(memorySnapshot2);
      memorySnapshot2.free();
      return result;
    }
    Il2Cpp3.memorySnapshot = memorySnapshot;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Method extends NonNullNativeStruct {
      /** Gets the class in which this method is defined. */
      get class() {
        return new Il2Cpp3.Class(Il2Cpp3.Api.methodGetClass(this));
      }
      /** Gets the flags of the current method. */
      get flags() {
        return Il2Cpp3.Api.methodGetFlags(this, NULL);
      }
      /** Gets the implementation flags of the current method. */
      get implementationFlags() {
        const implementationFlagsPointer = Memory.alloc(Process.pointerSize);
        Il2Cpp3.Api.methodGetFlags(this, implementationFlagsPointer);
        return implementationFlagsPointer.readU32();
      }
      /** */
      get fridaSignature() {
        const types = [];
        for (const parameter of this.parameters) {
          types.push(parameter.type.fridaAlias);
        }
        if (!this.isStatic || Il2Cpp3.unityVersionIsBelow201830) {
          types.unshift("pointer");
        }
        if (this.isInflated) {
          types.push("pointer");
        }
        return types;
      }
      /** Gets the amount of generic parameters of this generic method. */
      get genericParameterCount() {
        if (!this.isGeneric) {
          return 0;
        }
        return this.object.method("GetGenericArguments").invoke().length;
      }
      /** Determines whether this method is external. */
      get isExternal() {
        return !!Il2Cpp3.Api.methodIsExternal(this);
      }
      /** Determines whether this method is generic. */
      get isGeneric() {
        return !!Il2Cpp3.Api.methodIsGeneric(this);
      }
      /** Determines whether this method is inflated (generic with a concrete type parameter). */
      get isInflated() {
        return !!Il2Cpp3.Api.methodIsInflated(this);
      }
      /** Determines whether this method is static. */
      get isStatic() {
        return !Il2Cpp3.Api.methodIsInstance(this);
      }
      /** Determines whether this method is synchronized. */
      get isSynchronized() {
        return !!Il2Cpp3.Api.methodIsSynchronized(this);
      }
      /** Gets the access modifier of this method. */
      get modifier() {
        return Il2Cpp3.Api.methodGetModifier(this).readUtf8String();
      }
      /** Gets the name of this method. */
      get name() {
        return Il2Cpp3.Api.methodGetName(this).readUtf8String();
      }
      /** @internal */
      get nativeFunction() {
        return new NativeFunction(this.virtualAddress, this.returnType.fridaAlias, this.fridaSignature);
      }
      /** Gets the encompassing object of the current method. */
      get object() {
        return new Il2Cpp3.Object(Il2Cpp3.Api.methodGetObject(this, NULL));
      }
      /** Gets the amount of parameters of this method. */
      get parameterCount() {
        return Il2Cpp3.Api.methodGetParameterCount(this);
      }
      /** Gets the parameters of this method. */
      get parameters() {
        return globalThis.Array.from(globalThis.Array(this.parameterCount), (_, i) => {
          const parameterName = Il2Cpp3.Api.methodGetParameterName(this, i).readUtf8String();
          const parameterType = Il2Cpp3.Api.methodGetParameterType(this, i);
          return new Il2Cpp3.Parameter(parameterName, i, new Il2Cpp3.Type(parameterType));
        });
      }
      /** Gets the relative virtual address (RVA) of this method. */
      get relativeVirtualAddress() {
        return this.virtualAddress.sub(Il2Cpp3.module.base);
      }
      /** Gets the return type of this method. */
      get returnType() {
        return new Il2Cpp3.Type(Il2Cpp3.Api.methodGetReturnType(this));
      }
      /** Gets the virtual address (VA) to this method. */
      get virtualAddress() {
        return Il2Cpp3.Api.methodGetPointer(this);
      }
      /** Replaces the body of this method. */
      set implementation(block) {
        try {
          Interceptor.replace(this.virtualAddress, this.wrap(block));
        } catch (e) {
          switch (e.message) {
            case "access violation accessing 0x0":
              raise(`cannot implement method ${this.name}: it has a NULL virtual address`);
            case `unable to intercept function at ${this.virtualAddress}; please file a bug`:
              warn(`cannot implement method ${this.name}: it may be a thunk`);
              break;
            case "already replaced this function":
              warn(`cannot implement method ${this.name}: already replaced by a thunk`);
              break;
            default:
              throw e;
          }
        }
      }
      /** Creates a generic instance of the current generic method. */
      inflate(...classes) {
        if (!this.isGeneric) {
          raise(`cannot inflate method ${this.name}: it has no generic parameters`);
        }
        if (this.genericParameterCount != classes.length) {
          raise(`cannot inflate method ${this.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${classes.length}`);
        }
        const types = classes.map((_) => _.type.object);
        const typeArray = Il2Cpp3.array(Il2Cpp3.corlib.class("System.Type"), types);
        const inflatedMethodObject = this.object.method("MakeGenericMethod", 1).invoke(typeArray);
        return new Il2Cpp3.Method(Il2Cpp3.Api.methodGetFromReflection(inflatedMethodObject));
      }
      /** Invokes this method. */
      invoke(...parameters) {
        if (!this.isStatic) {
          raise(`cannot invoke a non-static method ${this.name}: must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`);
        }
        return this.invokeRaw(NULL, ...parameters);
      }
      /** @internal */
      invokeRaw(instance, ...parameters) {
        const allocatedParameters = parameters.map(Il2Cpp3.toFridaValue);
        if (!this.isStatic || Il2Cpp3.unityVersionIsBelow201830) {
          allocatedParameters.unshift(instance);
        }
        if (this.isInflated) {
          allocatedParameters.push(this.handle);
        }
        try {
          const returnValue = this.nativeFunction(...allocatedParameters);
          return Il2Cpp3.fromFridaValue(returnValue, this.returnType);
        } catch (e) {
          if (e == null) {
            raise("an unexpected native function exception occurred, this is due to parameter types mismatch");
          }
          switch (e.message) {
            case "bad argument count":
              raise(`cannot invoke method ${this.name}: it needs ${this.parameterCount} parameter(s), not ${parameters.length}`);
            case "expected a pointer":
            case "expected number":
            case "expected array with fields":
              raise(`cannot invoke method ${this.name}: parameter types mismatch`);
          }
          throw e;
        }
      }
      /** Gets the overloaded method with the given parameter types. */
      overload(...parameterTypes) {
        const result = this.tryOverload(...parameterTypes);
        if (result != void 0)
          return result;
        raise(`cannot find overloaded method ${this.name}(${parameterTypes})`);
      }
      /** Gets the parameter with the given name. */
      parameter(name) {
        return this.tryParameter(name) ?? raise(`couldn't find parameter ${name} in method ${this.name}`);
      }
      /** Restore the original method implementation. */
      revert() {
        Interceptor.revert(this.virtualAddress);
        Interceptor.flush();
      }
      /** Gets the overloaded method with the given parameter types. */
      tryOverload(...parameterTypes) {
        return this.class.methods.find((method) => {
          return method.name == this.name && method.parameterCount == parameterTypes.length && method.parameters.every((e, i) => e.type.name == parameterTypes[i]);
        });
      }
      /** Gets the parameter with the given name. */
      tryParameter(name) {
        return this.parameters.find((_) => _.name == name);
      }
      /** */
      toString() {
        return `${this.isStatic ? `static ` : ``}${this.returnType.name} ${this.name}(${this.parameters.join(`, `)});${this.virtualAddress.isNull() ? `` : ` // 0x${this.relativeVirtualAddress.toString(16).padStart(8, `0`)}`}`;
      }
      /** @internal */
      withHolder(instance) {
        return new Proxy(this, {
          get(target, property) {
            switch (property) {
              case "invoke":
                return target.invokeRaw.bind(target, instance.handle);
              case "inflate":
              case "overload":
              case "tryOverload":
                return function(...args) {
                  return target[property](...args)?.withHolder(instance);
                };
            }
            return Reflect.get(target, property);
          }
        });
      }
      /** @internal */
      wrap(block) {
        const startIndex = +!this.isStatic | +Il2Cpp3.unityVersionIsBelow201830;
        return new NativeCallback((...args) => {
          const thisObject = this.isStatic ? this.class : new Il2Cpp3.Object(args[0]);
          const parameters = this.parameters.map((e, i) => Il2Cpp3.fromFridaValue(args[i + startIndex], e.type));
          const result = block.call(thisObject, ...parameters);
          return Il2Cpp3.toFridaValue(result);
        }, this.returnType.fridaAlias, this.fridaSignature);
      }
    }
    __decorate([
      lazy
    ], Method.prototype, "class", null);
    __decorate([
      lazy
    ], Method.prototype, "flags", null);
    __decorate([
      lazy
    ], Method.prototype, "implementationFlags", null);
    __decorate([
      lazy
    ], Method.prototype, "fridaSignature", null);
    __decorate([
      lazy
    ], Method.prototype, "genericParameterCount", null);
    __decorate([
      lazy
    ], Method.prototype, "isExternal", null);
    __decorate([
      lazy
    ], Method.prototype, "isGeneric", null);
    __decorate([
      lazy
    ], Method.prototype, "isInflated", null);
    __decorate([
      lazy
    ], Method.prototype, "isStatic", null);
    __decorate([
      lazy
    ], Method.prototype, "isSynchronized", null);
    __decorate([
      lazy
    ], Method.prototype, "modifier", null);
    __decorate([
      lazy
    ], Method.prototype, "name", null);
    __decorate([
      lazy
    ], Method.prototype, "nativeFunction", null);
    __decorate([
      lazy
    ], Method.prototype, "object", null);
    __decorate([
      lazy
    ], Method.prototype, "parameterCount", null);
    __decorate([
      lazy
    ], Method.prototype, "parameters", null);
    __decorate([
      lazy
    ], Method.prototype, "relativeVirtualAddress", null);
    __decorate([
      lazy
    ], Method.prototype, "returnType", null);
    __decorate([
      lazy
    ], Method.prototype, "virtualAddress", null);
    Il2Cpp3.Method = Method;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Object2 extends NativeStruct {
      /** Gets the Il2CppObject struct size, possibly equal to `Process.pointerSize * 2`. */
      static get headerSize() {
        return Il2Cpp3.corlib.class("System.Object").instanceSize;
      }
      /** Gets the class of this object. */
      get class() {
        return new Il2Cpp3.Class(Il2Cpp3.Api.objectGetClass(this));
      }
      /** Gets the size of the current object. */
      get size() {
        return Il2Cpp3.Api.objectGetSize(this);
      }
      /** Acquires an exclusive lock on the current object. */
      enter() {
        return Il2Cpp3.Api.monitorEnter(this);
      }
      /** Release an exclusive lock on the current object. */
      exit() {
        return Il2Cpp3.Api.monitorExit(this);
      }
      /** Gets the field with the given name. */
      field(name) {
        return this.class.field(name).withHolder(this);
      }
      /** Gets the method with the given name. */
      method(name, parameterCount = -1) {
        return this.class.method(name, parameterCount).withHolder(this);
      }
      /** Notifies a thread in the waiting queue of a change in the locked object's state. */
      pulse() {
        return Il2Cpp3.Api.monitorPulse(this);
      }
      /** Notifies all waiting threads of a change in the object's state. */
      pulseAll() {
        return Il2Cpp3.Api.monitorPulseAll(this);
      }
      /** Creates a reference to this object. */
      ref(pin) {
        return new Il2Cpp3.GCHandle(Il2Cpp3.Api.gcHandleNew(this, +pin));
      }
      /** Gets the correct virtual method from the given virtual method. */
      virtualMethod(method) {
        return new Il2Cpp3.Method(Il2Cpp3.Api.objectGetVirtualMethod(this, method)).withHolder(this);
      }
      /** Attempts to acquire an exclusive lock on the current object. */
      tryEnter(timeout) {
        return !!Il2Cpp3.Api.monitorTryEnter(this, timeout);
      }
      /** Gets the field with the given name. */
      tryField(name) {
        return this.class.tryField(name)?.withHolder(this);
      }
      /** Gets the field with the given name. */
      tryMethod(name, parameterCount = -1) {
        return this.class.tryMethod(name, parameterCount)?.withHolder(this);
      }
      /** Releases the lock on an object and attempts to block the current thread until it reacquires the lock. */
      tryWait(timeout) {
        return !!Il2Cpp3.Api.monitorTryWait(this, timeout);
      }
      /** */
      toString() {
        return this.isNull() ? "null" : this.method("ToString").invoke().content ?? "null";
      }
      /** Unboxes the value type out of this object. */
      unbox() {
        return new Il2Cpp3.ValueType(Il2Cpp3.Api.objectUnbox(this), this.class.type);
      }
      /** Releases the lock on an object and blocks the current thread until it reacquires the lock. */
      wait() {
        return Il2Cpp3.Api.monitorWait(this);
      }
      /** Creates a weak reference to this object. */
      weakRef(trackResurrection) {
        return new Il2Cpp3.GCHandle(Il2Cpp3.Api.gcHandleNewWeakRef(this, +trackResurrection));
      }
    }
    __decorate([
      lazy
    ], Object2.prototype, "class", null);
    __decorate([
      lazy
    ], Object2.prototype, "size", null);
    __decorate([
      lazy
    ], Object2, "headerSize", null);
    Il2Cpp3.Object = Object2;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Parameter {
      /** Name of this parameter. */
      name;
      /** Position of this parameter. */
      position;
      /** Type of this parameter. */
      type;
      constructor(name, position, type) {
        this.name = name;
        this.position = position;
        this.type = type;
      }
      /** */
      toString() {
        return `${this.type.name} ${this.name}`;
      }
    }
    Il2Cpp3.Parameter = Parameter;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Pointer extends NativeStruct {
      type;
      constructor(handle, type) {
        super(handle);
        this.type = type;
      }
      /** Gets the element at the given index. */
      get(index) {
        return Il2Cpp3.read(this.handle.add(index * this.type.class.arrayElementSize), this.type);
      }
      /** Reads the given amount of elements starting at the given offset. */
      read(length, offset = 0) {
        const values = new globalThis.Array(length);
        for (let i = 0; i < length; i++) {
          values[i] = this.get(i + offset);
        }
        return values;
      }
      /** Sets the given element at the given index */
      set(index, value) {
        Il2Cpp3.write(this.handle.add(index * this.type.class.arrayElementSize), value, this.type);
      }
      /** */
      toString() {
        return this.handle.toString();
      }
      /** Writes the given elements starting at the given index. */
      write(values, offset = 0) {
        for (let i = 0; i < values.length; i++) {
          this.set(i + offset, values[i]);
        }
      }
    }
    Il2Cpp3.Pointer = Pointer;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Reference extends NativeStruct {
      type;
      constructor(handle, type) {
        super(handle);
        this.type = type;
      }
      /** Gets the element referenced by the current reference. */
      get value() {
        return Il2Cpp3.read(this.handle, this.type);
      }
      /** Sets the element referenced by the current reference. */
      set value(value) {
        Il2Cpp3.write(this.handle, value, this.type);
      }
      /** */
      toString() {
        return this.isNull() ? "null" : `->${this.value}`;
      }
    }
    Il2Cpp3.Reference = Reference;
    function reference(value, type) {
      const handle = Memory.alloc(Process.pointerSize);
      switch (typeof value) {
        case "boolean":
          return new Il2Cpp3.Reference(handle.writeS8(+value), Il2Cpp3.corlib.class("System.Boolean").type);
        case "number":
          switch (type?.typeEnum) {
            case 5:
              return new Il2Cpp3.Reference(handle.writeU8(value), type);
            case 4:
              return new Il2Cpp3.Reference(handle.writeS8(value), type);
            case 3:
            case 7:
              return new Il2Cpp3.Reference(handle.writeU16(value), type);
            case 6:
              return new Il2Cpp3.Reference(handle.writeS16(value), type);
            case 9:
              return new Il2Cpp3.Reference(handle.writeU32(value), type);
            case 8:
              return new Il2Cpp3.Reference(handle.writeS32(value), type);
            case 11:
              return new Il2Cpp3.Reference(handle.writeU64(value), type);
            case 10:
              return new Il2Cpp3.Reference(handle.writeS64(value), type);
            case 12:
              return new Il2Cpp3.Reference(handle.writeFloat(value), type);
            case 13:
              return new Il2Cpp3.Reference(handle.writeDouble(value), type);
          }
        case "object":
          if (value instanceof Il2Cpp3.ValueType || value instanceof Il2Cpp3.Pointer) {
            return new Il2Cpp3.Reference(handle.writePointer(value), value.type);
          } else if (value instanceof Il2Cpp3.Object) {
            return new Il2Cpp3.Reference(handle.writePointer(value), value.class.type);
          } else if (value instanceof Il2Cpp3.String || value instanceof Il2Cpp3.Array) {
            return new Il2Cpp3.Reference(handle.writePointer(value), value.object.class.type);
          } else if (value instanceof NativePointer) {
            switch (type?.typeEnum) {
              case 25:
              case 24:
                return new Il2Cpp3.Reference(handle.writePointer(value), type);
            }
          } else if (value instanceof Int64) {
            return new Il2Cpp3.Reference(handle.writeS64(value), Il2Cpp3.corlib.class("System.Int64").type);
          } else if (value instanceof UInt64) {
            return new Il2Cpp3.Reference(handle.writeU64(value), Il2Cpp3.corlib.class("System.UInt64").type);
          }
        default:
          raise(`don't know how to create a reference to ${value} using type ${type?.name}`);
      }
    }
    Il2Cpp3.reference = reference;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class String2 extends NativeStruct {
      /** Gets the content of this string. */
      get content() {
        return Il2Cpp3.Api.stringChars(this).readUtf16String(this.length);
      }
      /** Sets the content of this string. */
      set content(value) {
        Il2Cpp3.Api.stringChars(this).writeUtf16String(value ?? "");
        Il2Cpp3.Api.stringSetLength(this, value?.length ?? 0);
      }
      /** Gets the length of this string. */
      get length() {
        return Il2Cpp3.Api.stringLength(this);
      }
      /** Gets the encompassing object of the current string. */
      get object() {
        return new Il2Cpp3.Object(this);
      }
      /** */
      toString() {
        return this.isNull() ? "null" : `"${this.content}"`;
      }
    }
    Il2Cpp3.String = String2;
    function string(content) {
      return new Il2Cpp3.String(Il2Cpp3.Api.stringNew(Memory.allocUtf8String(content || "")));
    }
    Il2Cpp3.string = string;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Thread extends NativeStruct {
      /** @internal */
      static get idOffset() {
        const handle = ptr(Il2Cpp3.currentThread.internal.field("thread_id").value.toString());
        const currentThreadId = Process.getCurrentThreadId();
        for (let i = 0; i < 1024; i++) {
          try {
            const candidate = handle.add(i).readS32();
            if (candidate == currentThreadId) {
              return i;
            }
          } catch (e) {
          }
        }
        raise(`couldn't determine the offset for a native thread id value`);
      }
      /** Gets the native id of the current thread. */
      get id() {
        return ptr(this.internal.field("thread_id").value.toString()).add(Il2Cpp3.Thread.idOffset).readS32();
      }
      /** Gets the encompassing internal object (System.Threding.InternalThreead) of the current thread. */
      get internal() {
        return this.object.tryField("internal_thread")?.value ?? this.object;
      }
      /** Determines whether the current thread is the garbage collector finalizer one. */
      get isFinalizer() {
        return !Il2Cpp3.Api.threadIsVm(this);
      }
      /** Gets the managed id of the current thread. */
      get managedId() {
        return this.object.method("get_ManagedThreadId").invoke();
      }
      /** Gets the encompassing object of the current thread. */
      get object() {
        return new Il2Cpp3.Object(this);
      }
      /** @internal */
      get staticData() {
        return this.internal.field("static_data").value;
      }
      /** @internal */
      get synchronizationContext() {
        const get_ExecutionContext = this.object.tryMethod("GetMutableExecutionContext") || this.object.method("get_ExecutionContext");
        const executionContext = get_ExecutionContext.invoke();
        let synchronizationContext = executionContext.tryField("_syncContext")?.value ?? executionContext.tryMethod("get_SynchronizationContext")?.invoke();
        if (synchronizationContext == null) {
          const SystemThreadingSynchronizationContext = Il2Cpp3.corlib.class("System.Threading.SynchronizationContext");
          for (let i = 0; i < 16; i++) {
            try {
              const candidate = new Il2Cpp3.Object(this.staticData.add(Process.pointerSize * i).readPointer().readPointer());
              if (candidate.class.isSubclassOf(SystemThreadingSynchronizationContext, false)) {
                synchronizationContext = candidate;
                break;
              }
            } catch (e) {
            }
          }
        }
        if (synchronizationContext == null || synchronizationContext.isNull()) {
          raise("couldn't retrieve the SynchronizationContext for this thread.");
        }
        return synchronizationContext;
      }
      /** Detaches the thread from the application domain. */
      detach() {
        return Il2Cpp3.Api.threadDetach(this);
      }
      /** Schedules a callback on the current thread. */
      schedule(block, delayMs = 0) {
        return new Promise((resolve) => {
          const delegate = Il2Cpp3.delegate(Il2Cpp3.corlib.class("System.Threading.SendOrPostCallback"), () => {
            const result = block();
            setImmediate(() => resolve(result));
          });
          setTimeout(() => this.synchronizationContext.method("Post").invoke(delegate, NULL), delayMs);
        });
      }
    }
    __decorate([
      lazy
    ], Thread.prototype, "id", null);
    __decorate([
      lazy
    ], Thread.prototype, "internal", null);
    __decorate([
      lazy
    ], Thread.prototype, "isFinalizer", null);
    __decorate([
      lazy
    ], Thread.prototype, "managedId", null);
    __decorate([
      lazy
    ], Thread.prototype, "object", null);
    __decorate([
      lazy
    ], Thread.prototype, "staticData", null);
    __decorate([
      lazy
    ], Thread.prototype, "synchronizationContext", null);
    __decorate([
      lazy
    ], Thread, "idOffset", null);
    Il2Cpp3.Thread = Thread;
    getter(Il2Cpp3, "attachedThreads", () => {
      return readNativeList(Il2Cpp3.Api.threadGetAllAttachedThreads).map((_) => new Il2Cpp3.Thread(_));
    });
    getter(Il2Cpp3, "currentThread", () => {
      const handle = Il2Cpp3.Api.threadCurrent();
      return handle.isNull() ? null : new Il2Cpp3.Thread(handle);
    });
    getter(Il2Cpp3, "mainThread", () => {
      return Il2Cpp3.attachedThreads[0];
    });
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Type extends NonNullNativeStruct {
      /** Gets the class of this type. */
      get class() {
        return new Il2Cpp3.Class(Il2Cpp3.Api.classFromType(this));
      }
      /** */
      get fridaAlias() {
        if (this.isByReference) {
          return "pointer";
        }
        switch (this.typeEnum) {
          case 1:
            return "void";
          case 2:
            return "bool";
          case 3:
            return "uchar";
          case 4:
            return "int8";
          case 5:
            return "uint8";
          case 6:
            return "int16";
          case 7:
            return "uint16";
          case 8:
            return "int32";
          case 9:
            return "uint32";
          case 10:
            return "int64";
          case 11:
            return "uint64";
          case 12:
            return "float";
          case 13:
            return "double";
          case 17:
            return getValueTypeFields(this);
          case 24:
          case 25:
          case 15:
          case 14:
          case 29:
          case 20:
            return "pointer";
          case 18:
          case 28:
          case 21:
            return this.class.isValueType ? getValueTypeFields(this) : "pointer";
          default:
            return "pointer";
        }
      }
      /** Determines whether this type is passed by reference. */
      get isByReference() {
        return !!Il2Cpp3.Api.typeIsByReference(this);
      }
      /** Determines whether this type is primitive. */
      get isPrimitive() {
        return !!Il2Cpp3.Api.typeIsPrimitive(this);
      }
      /** Gets the name of this type. */
      get name() {
        const handle = Il2Cpp3.Api.typeGetName(this);
        try {
          return handle.readUtf8String();
        } finally {
          Il2Cpp3.free(handle);
        }
      }
      /** Gets the encompassing object of the current type. */
      get object() {
        return new Il2Cpp3.Object(Il2Cpp3.Api.typeGetObject(this));
      }
      /** Gets the type enum of the current type. */
      get typeEnum() {
        return Il2Cpp3.Api.typeGetTypeEnum(this);
      }
      /** */
      toString() {
        return this.name;
      }
    }
    __decorate([
      lazy
    ], Type.prototype, "class", null);
    __decorate([
      lazy
    ], Type.prototype, "fridaAlias", null);
    __decorate([
      lazy
    ], Type.prototype, "isByReference", null);
    __decorate([
      lazy
    ], Type.prototype, "isPrimitive", null);
    __decorate([
      lazy
    ], Type.prototype, "name", null);
    __decorate([
      lazy
    ], Type.prototype, "object", null);
    __decorate([
      lazy
    ], Type.prototype, "typeEnum", null);
    Il2Cpp3.Type = Type;
    function getValueTypeFields(type) {
      const instanceFields = type.class.fields.filter((_) => !_.isStatic);
      return instanceFields.length == 0 ? ["char"] : instanceFields.map((_) => _.type.fridaAlias);
    }
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class ValueType extends NativeStruct {
      type;
      constructor(handle, type) {
        super(handle);
        this.type = type;
      }
      /** Boxes the current value type in a object. */
      box() {
        return new Il2Cpp3.Object(Il2Cpp3.Api.valueBox(this.type.class, this));
      }
      /** Gets the field with the given name. */
      field(name) {
        return this.type.class.field(name).withHolder(this);
      }
      /** */
      toString() {
        return this.isNull() ? "null" : this.box().toString();
      }
    }
    Il2Cpp3.ValueType = ValueType;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class AbstractTracer {
      /** @internal */
      targets = [];
      /** @internal */
      #assemblies;
      /** @internal */
      #classes;
      /** @internal */
      #methods;
      /** @internal */
      #assemblyFilter;
      /** @internal */
      #classFilter;
      /** @internal */
      #methodFilter;
      /** @internal */
      #parameterFilter;
      /** Sets the application domain as the place where to find the target methods. */
      domain() {
        return this;
      }
      /** Sets the passed `assemblies` as the place where to find the target methods. */
      assemblies(...assemblies) {
        this.#assemblies = assemblies;
        return this;
      }
      /** Sets the passed `classes` as the place where to find the target methods. */
      classes(...classes) {
        this.#classes = classes;
        return this;
      }
      /** Sets the passed `methods` as the target methods. */
      methods(...methods) {
        this.#methods = methods;
        return this;
      }
      /** Filters the assemblies where to find the target methods. */
      filterAssemblies(filter) {
        this.#assemblyFilter = filter;
        return this;
      }
      /** Filters the classes where to find the target methods. */
      filterClasses(filter) {
        this.#classFilter = filter;
        return this;
      }
      /** Filters the target methods. */
      filterMethods(filter) {
        this.#methodFilter = filter;
        return this;
      }
      /** Filters the target methods. */
      filterParameters(filter) {
        this.#parameterFilter = filter;
        return this;
      }
      /** Commits the current changes by finding the target methods. */
      and() {
        const filterMethod = (method) => {
          if (this.#parameterFilter == void 0) {
            this.targets.push(method);
            return;
          }
          for (const parameter of method.parameters) {
            if (this.#parameterFilter(parameter)) {
              this.targets.push(method);
              break;
            }
          }
        };
        const filterMethods = (values) => {
          for (const method of values) {
            filterMethod(method);
          }
        };
        const filterClass = (klass) => {
          if (this.#methodFilter == void 0) {
            filterMethods(klass.methods);
            return;
          }
          for (const method of klass.methods) {
            if (this.#methodFilter(method)) {
              filterMethod(method);
            }
          }
        };
        const filterClasses = (values) => {
          for (const klass of values) {
            filterClass(klass);
          }
        };
        const filterAssembly = (assembly) => {
          if (this.#classFilter == void 0) {
            filterClasses(assembly.image.classes);
            return;
          }
          for (const klass of assembly.image.classes) {
            if (this.#classFilter(klass)) {
              filterClass(klass);
            }
          }
        };
        const filterAssemblies = (assemblies) => {
          for (const assembly of assemblies) {
            filterAssembly(assembly);
          }
        };
        const filterDomain = (domain) => {
          if (this.#assemblyFilter == void 0) {
            filterAssemblies(domain.assemblies);
            return;
          }
          for (const assembly of domain.assemblies) {
            if (this.#assemblyFilter(assembly)) {
              filterAssembly(assembly);
            }
          }
        };
        this.#methods ? filterMethods(this.#methods) : this.#classes ? filterClasses(this.#classes) : this.#assemblies ? filterAssemblies(this.#assemblies) : filterDomain(Il2Cpp3.domain);
        this.#assemblies = void 0;
        this.#classes = void 0;
        this.#methods = void 0;
        this.#assemblyFilter = void 0;
        this.#classFilter = void 0;
        this.#methodFilter = void 0;
        this.#parameterFilter = void 0;
        return this;
      }
    }
    Il2Cpp3.AbstractTracer = AbstractTracer;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Backtracer extends Il2Cpp3.AbstractTracer {
      /** @internal */
      mode;
      /** @internal */
      isVerbose = true;
      /** @internal */
      methodList = Il2Cpp3.domain.assemblies.flatMap((_) => _.image.classes.flatMap((_2) => _2.methods.filter((_3) => !_3.virtualAddress.isNull()))).sort((_, __) => _.virtualAddress.compare(__.virtualAddress));
      /** */
      strategy(value) {
        this.mode = globalThis.Backtracer[value.toUpperCase()];
        return this;
      }
      /** Determines whether print duplicate logs. */
      verbose(value) {
        this.isVerbose = value;
        return this;
      }
      attach() {
        const backtracer = this;
        const history = this.isVerbose ? void 0 : /* @__PURE__ */ new Set();
        for (const target of this.targets) {
          if (target.virtualAddress.isNull()) {
            continue;
          }
          try {
            Interceptor.attach(target.virtualAddress, function() {
              let backtrace2 = globalThis.Thread.backtrace(this.context, backtracer.mode).reverse();
              backtrace2.push(target.virtualAddress);
              if (!backtracer.isVerbose) {
                const key = backtrace2.map((_) => _.toString()).join("");
                if (history?.has(key)) {
                  return;
                }
                history?.add(key);
              }
              let i = 0;
              for (const address of backtrace2) {
                const method = address >= Il2Cpp3.module.base && address < Il2Cpp3.module.base.add(Il2Cpp3.module.size) ? backtracer.searchInsert(address) : void 0;
                const decoration = i == 0 ? "" : `${" ".repeat((i - 1) * 2)}\u2514\u2500`;
                if (method != void 0) {
                  const offset = address.sub(method.virtualAddress);
                  if (address.sub(method.virtualAddress).compare(4095) > 0) {
                    continue;
                  }
                  inform(`\x1B[2m0x${method.relativeVirtualAddress.toString(16).padStart(8, `0`)}+0x${offset.toString(16).padStart(3, `0`)}\x1B[0m ${decoration}${method.class.type.name}.\x1B[1m${method.name}\x1B[0m`);
                } else {
                  continue;
                }
                i++;
              }
            });
          } catch (e) {
          }
        }
      }
      /** @internal */
      searchInsert(target) {
        let left = 0;
        let right = this.methodList.length - 1;
        while (left <= right) {
          const pivot = Math.floor((left + right) / 2);
          const comparison = this.methodList[pivot].virtualAddress.compare(target);
          if (comparison == 0) {
            return this.methodList[pivot];
          } else if (comparison > 0) {
            right = pivot - 1;
          } else {
            left = pivot + 1;
          }
        }
        return this.methodList[right];
      }
    }
    Il2Cpp3.Backtracer = Backtracer;
    function backtrace() {
      return new Il2Cpp3.Backtracer();
    }
    Il2Cpp3.backtrace = backtrace;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  var Il2Cpp2;
  (function(Il2Cpp3) {
    class Tracer extends Il2Cpp3.AbstractTracer {
      /** @internal */
      withParameters = false;
      /** Determines whether print parameters. */
      parameters(value) {
        this.withParameters = value;
        return this;
      }
      attach() {
        let count = 0;
        for (const target of this.targets) {
          if (target.virtualAddress.isNull()) {
            continue;
          }
          const offset = `\x1B[2m0x${target.relativeVirtualAddress.toString(16).padStart(8, `0`)}\x1B[0m`;
          const fullName = `${target.class.type.name}.\x1B[1m${target.name}\x1B[0m`;
          if (!this.withParameters) {
            try {
              Interceptor.attach(target.virtualAddress, {
                onEnter: () => inform(`${offset} ${`\u2502 `.repeat(count++)}\u250C\u2500\x1B[35m${fullName}\x1B[0m`),
                onLeave: () => inform(`${offset} ${`\u2502 `.repeat(--count)}\u2514\u2500\x1B[33m${fullName}\x1B[0m${count == 0 ? `
` : ``}`)
              });
            } catch (e) {
            }
          } else {
            const startIndex = +!target.isStatic | +Il2Cpp3.unityVersionIsBelow201830;
            const callback = (...args) => {
              const thisParameter = target.isStatic ? void 0 : new Il2Cpp3.Parameter("this", -1, target.class.type);
              const parameters = thisParameter ? [thisParameter].concat(target.parameters) : target.parameters;
              inform(`${offset} ${`\u2502 `.repeat(count++)}\u250C\u2500\x1B[35m${fullName}\x1B[0m(${parameters.map((e) => `\x1B[32m${e.name}\x1B[0m = \x1B[31m${Il2Cpp3.fromFridaValue(args[e.position + startIndex], e.type)}\x1B[0m`).join(`, `)});`);
              const returnValue = target.nativeFunction(...args);
              inform(`${offset} ${`\u2502 `.repeat(--count)}\u2514\u2500\x1B[33m${fullName}\x1B[0m${returnValue == void 0 ? `` : ` = \x1B[36m${Il2Cpp3.fromFridaValue(returnValue, target.returnType)}`}\x1B[0m;`);
              return returnValue;
            };
            try {
              target.revert();
              const nativeCallback = new NativeCallback(callback, target.returnType.fridaAlias, target.fridaSignature);
              Interceptor.replace(target.virtualAddress, nativeCallback);
            } catch (e) {
            }
          }
        }
      }
    }
    Il2Cpp3.Tracer = Tracer;
    function trace() {
      return new Il2Cpp3.Tracer();
    }
    Il2Cpp3.trace = trace;
  })(Il2Cpp2 || (Il2Cpp2 = {}));
  globalThis.Il2Cpp = Il2Cpp2;


  // index.ts
  var import_buffer = __toESM(require_buffer());
  function getMainAssembly() {
    return Il2Cpp.domain.assembly("Assembly-CSharp").image;
  }
  function sendGameData(msgId, sdpMsg) {
    const mainAssembly = getMainAssembly();
    const MobaScriptBridge = mainAssembly.class("MobaScriptBridge");
    const _instance = MobaScriptBridge.field("_instance").value;
    const SendGameData = _instance.method("SendGameData").overload("System.UInt32", "MTTDProto.SdpWrapper");
    SendGameData.invoke(msgId, sdpMsg);
  }
  function SearchByNick(nick) {
    const mainAssembly = getMainAssembly();
    const FriendManagerController = mainAssembly.class("Friends.FriendManagerController");
    const _instance = FriendManagerController.field("_instance").value;
    _instance.method("SearchFriend").overload("System.String").invoke(Il2Cpp.string(nick));
  }
  function SearchById(id) {
    const mainAssembly = getMainAssembly();
    const FriendManagerController = mainAssembly.class("Friends.FriendManagerController");
    const _instance = FriendManagerController.field("_instance").value;
    _instance.method("SearchFriend").overload("System.UInt64").invoke(id);
  }
  function splitWithTail(str, delim, count) {
    var parts = str.split(delim);
    var tail = parts.slice(count).join(delim);
    var result = parts.slice(0, count);
    result.push(tail);
    return result;
  }
  var jdis = null;
  var token = null;
  var filterServer = -1;
  var playerList = null;
  var NTF = null;
  rpc.exports = {
    async getAccInfo() {
      var res = {};
      await Il2Cpp.perform(() => {
        const mainAssembly = getMainAssembly();
        const UnityEngine_CoreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
        const PlayerPrefs = UnityEngine_CoreModule.class("UnityEngine.PlayerPrefs");
        const GetString = PlayerPrefs.method("GetString").overload("System.String");
        const SystemData = mainAssembly.class("SystemData");
        const GameServerConfig = mainAssembly.class("GameServerConfig");
        const Instance = GameServerConfig.field("Instance").value;
        const m_uiID = SystemData.field("m_uiID").value;
        const m_uiCreateTimeStr = SystemData.field("m_uiCreateTimeStr").value;
        const m_uiZoneID = Instance.field("m_uiZoneID").value;
        const JsonDeviceID = GetString.invoke(Il2Cpp.string("JsonDeviceID")).content;
        return {
          m_uiID,
          m_uiZoneID,
          m_uiCreateTimeStr: m_uiCreateTimeStr.content,
          JsonDeviceID
        };
      }).then((result) => {
        res = result;
      });
      return res;
    },
    async getJdis() {
      while (jdis == null) {
        await new Promise((r) => setTimeout(r, 50));
      }
      var res = JSON.parse(jdis);
      jdis = null;
      return res;
    },
    async useJdi(jdi) {
      await Il2Cpp.perform(() => {
        const UnityEngine_CoreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
        const PlayerPrefs = UnityEngine_CoreModule.class("UnityEngine.PlayerPrefs");
        const SetString = PlayerPrefs.method("SetString");
        const DeleteKey = PlayerPrefs.method("DeleteKey");
        const Save = PlayerPrefs.method("Save");
        const JsonDeviceID = splitWithTail(jdi, "_", 1)[1];
        SetString.invoke(Il2Cpp.string("JsonDeviceID"), Il2Cpp.string(JsonDeviceID));
        DeleteKey.invoke(Il2Cpp.string("dvinfo"));
        DeleteKey.invoke(Il2Cpp.string("__MTAKIT_USER_NAME__"));
        DeleteKey.invoke(Il2Cpp.string("__MTAKIT_USER_ID__"));
        DeleteKey.invoke(Il2Cpp.string("__MTAKIT_USER_SESSION__"));
        Save.invoke();
      });
    },
    async leaveSquad() {
      await Il2Cpp.perform(() => {
        const mainAssembly = getMainAssembly();
        const MobaScriptBridge = mainAssembly.class("MobaScriptBridge");
        {
          const _instance = MobaScriptBridge.field("_instance").value;
          const SendGameData = _instance.method("SendGameData").overload("System.UInt32", "MTTDProto.SdpWrapper");
          const cls = mainAssembly.class("MTTDProto.Cmd_Item_GetList_CS");
          var sdpMsg = cls.new();
          SendGameData.invoke(40021, sdpMsg);
        }
      });
    },
    async getToken(type) {
      token = null;
      await Il2Cpp.perform(() => {
        const mainAssembly = getMainAssembly();
        const Cmd_Role_GetUserToken_CS = mainAssembly.class("MTTDProto.Cmd_Role_GetUserToken_CS");
        var sdpMsg = Cmd_Role_GetUserToken_CS.new();
        sdpMsg.field("iTokenType").value = 2;
        sdpMsg.field("sModule").value = Il2Cpp.string(type);
        sdpMsg.field("sCallBackId").value = Il2Cpp.string("getToken");
        sendGameData(10190, sdpMsg);
      });
      while (token == null) {
        await new Promise((r) => setTimeout(r, 50));
      }
      return token;
    },
    async findPlayer(keyword) {
      await Il2Cpp.perform(() => {
        filterServer = -1;
        if (/^\d+$/.test(keyword)) {
          SearchById(Number.parseInt(keyword));
        } else {
          var match = keyword.match(/(.*)\s\((\d+)\)/);
          if (match) {
            filterServer = Number.parseInt(match[2]);
            SearchByNick(match[1]);
          } else {
            SearchByNick(keyword);
          }
        }
      });
      while (playerList == null) {
        await new Promise((r) => setTimeout(r, 50));
      }
      var res = JSON.parse(playerList);
      playerList = null;
      return res;
    },
    async giftSkin(id, server, skin_id) {
      await Il2Cpp.perform(() => {
        const mainAssembly = getMainAssembly();
        const Cmd_Ping_Report_Proxy_Ping_CS = mainAssembly.class("MTTDProto.Cmd_Ping_Report_Proxy_Ping_CS");
        var sdpMsg = Cmd_Ping_Report_Proxy_Ping_CS.new();
        sdpMsg.field("uiBattleId").value = server;
        sdpMsg.field("uiProxyId").value = id;
        sdpMsg.field("uiPing").value = skin_id;
        sendGameData(10307, sdpMsg);
      });
    },
    async login(param1, param2, param3) {
      await Il2Cpp.perform(() => {
        const mainAssembly = getMainAssembly();
        const Cmd_Account_Bind_CS = mainAssembly.class("MTTDProto.Cmd_Account_Bind_CS");
        var sdpMsg = Cmd_Account_Bind_CS.new();
        sdpMsg.field("sAccountName").value = Il2Cpp.string(param1);
        sdpMsg.field("sAuthKey").value = Il2Cpp.string(param2);
        sdpMsg.field("sAccessToken").value = Il2Cpp.string(param3);
        sendGameData(10215, sdpMsg);
      });
    },
    async getNtf() {
      while (NTF == null) {
        await new Promise((r) => setTimeout(r, 50));
      }
      var res = JSON.parse(NTF);
      NTF = null;
      return res;
    }
  };
  function hookGame() {
    Il2Cpp.perform(() => {
      const mainAssembly = getMainAssembly();
      const Cmd_Account_GetAccount_SC = mainAssembly.class("MTTDProto.Cmd_Account_GetAccount_SC");
      {
        Cmd_Account_GetAccount_SC.method("visit").overload("MTTDProto.SdpUnpacker", "System.Boolean").implementation = function(t, bOpt) {
          this.method("visit").overload("MTTDProto.SdpUnpacker", "System.Boolean").invoke(t, bOpt);
          const tmp = [];
          const vAccountInfo = this.field("vAccountInfo").value;
          const Count = vAccountInfo.method("get_Count").invoke();
          for (var i = 0; i < Count; i++) {
            const Item = vAccountInfo.method("get_Item").invoke(i);
            const sAccountName = Item.field("sAccountName").value;
            tmp.push(sAccountName.content);
          }
          jdis = JSON.stringify(tmp);
        };
      }
      const Cmd_Friend_FindFriends_SC = mainAssembly.class("MTTDProto.Cmd_Friend_FindFriends_SC");
      {
        Cmd_Friend_FindFriends_SC.method("visit").overload("MTTDProto.SdpUnpacker", "System.Boolean").implementation = function(t, bOpt) {
          this.method("visit").overload("MTTDProto.SdpUnpacker", "System.Boolean").invoke(t, bOpt);
          var tmp = [];
          const vecFriends = this.field("vecFriends").value;
          if (vecFriends != null) {
            const count = vecFriends.method("get_Count").invoke();
            for (var i = 0; i < count; i++) {
              const info = vecFriends.method("get_Item").invoke(i);
              if (info.field("uiSvrId").value != filterServer && filterServer != -1)
                continue;
              var playerInfo = /* @__PURE__ */ Object.create(null);
              for (var j = 0; j < info.class.fields.length; j++) {
                var field = info.class.fields[j];
                var key = field.name.toString();
                if (field.type.name.toString() == "System.String") {
                  playerInfo[key] = info.field(field.name).value.content;
                } else {
                  playerInfo[key] = info.field(field.name).value;
                }
              }
              tmp.push(playerInfo);
            }
            playerList = JSON.stringify(tmp);
          }
        };
      }
      const GameReceiveMessage = mainAssembly.class("GameReceiveMessage");
      {
        GameReceiveMessage.method("GameSocketOnRecv").implementation = function(retMsg) {
          const bt = retMsg.field("bt").value;
          try {
            var curPos = 0;
            const getData = (index) => {
              return bt.get(index);
            };
            const getLen = () => {
              return bt.length;
            };
            const readData = () => {
              return bt.get(curPos++);
            };
            const readNumber = () => {
              var n = 1;
              var val = getData(curPos) & 127;
              while (getData(curPos + n - 1) > 127) {
                const hi = getData(curPos + n) & 127;
                val |= hi << 7 * n;
                ++n;
              }
              curPos += n;
              return val;
            };
            const readFloat = () => {
              const value = readNumber();
              const buf = import_buffer.Buffer.alloc(4);
              buf.writeUint32LE(value, 0);
              return buf.readFloatLE(0);
            };
            const readDouble = () => {
              const value = readNumber();
              const buf = import_buffer.Buffer.alloc(8);
              buf.writeBigUint64LE(BigInt(value), 0);
              return buf.readDoubleLE(0);
            };
            const readString = () => {
              const len = readNumber();
              const buf = import_buffer.Buffer.alloc(len);
              for (var i = 0; i < len; i++) {
                buf[i] = getData(curPos + i);
              }
              curPos += len;
              return buf.toString("utf8");
            };
            const readHeader = () => {
              var data = readData();
              var type = data >> 4;
              var tag = data & 15;
              if (tag == 15) {
                tag = readNumber();
              }
            };
            const readField = () => {
              if (curPos >= getLen()) {
                return false;
              }
              var data = readData();
              var type = data >> 4;
              var tag = data & 15;
              if (tag == 15) {
                tag = readNumber();
              }
              if (type == 0 || type == 1) {
                readNumber();
              }
              if (type == 2) {
                readFloat();
              }
              if (type == 3) {
                readDouble();
              }
              if (type == 4) {
                const msgId = retMsg.field("messageid").value;
                if (msgId == 10191) {
                  if (tag == 3) {
                    token = readString();
                  }
                }
                readString();
              }
              if (type == 5) {
                const count = readNumber();
                for (var i = 0; i < count; i++) {
                  readField();
                }
              }
              if (type == 6) {
                const count = readNumber();
                for (var i = 0; i < count; i++) {
                  readField();
                  readField();
                }
              }
              if (type == 7) {
                while (readField())
                  ;
              }
              if (type == 8) {
                return false;
              }
              return true;
            };
            while (readField())
              ;
          } catch (e) {
          }
          return this.method("GameSocketOnRecv").invoke(retMsg);
        };
      }
      ;
    });
  }
  var open = new NativeFunction(Module.findExportByName(null, "open"), "int", ["pointer", "int"]);
  Interceptor.replace(open, new NativeCallback((path, flags) => {
    if (path.readCString().includes("/proc/self/maps") || path.readCString().includes("/maps") || path.readCString().includes("liblogic.so")) {
      return -1;
    }
    return open(path, flags);
  }, "int", ["pointer", "int"]));
  var fopen = new NativeFunction(Module.findExportByName(null, "fopen"), "pointer", ["pointer", "pointer"]);
  Interceptor.replace(fopen, new NativeCallback((path, mode) => {
    if (path.readCString().includes("/proc/self/maps") || path.readCString().includes("/maps") || path.readCString().includes("liblogic.so")) {
      return NULL;
    }
    return fopen(path, mode);
  }, "pointer", ["pointer", "pointer"]));
  var dladdr = new NativeFunction(Module.findExportByName(null, "dladdr"), "int", ["pointer", "pointer"]);
  Interceptor.replace(dladdr, new NativeCallback((addr, info) => {
    return 0;
  }, "int", ["pointer", "pointer"]));
  hookGame();
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
