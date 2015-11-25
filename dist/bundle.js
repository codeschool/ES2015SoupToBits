(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui = {
  renderPosts: function renderPosts(posts) {
    console.log("Posts: " + JSON.stringify(posts, null, 2) + " ");
  }
};

_post2.default.findAll().then(ui.renderPosts);

},{"./post":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Post = { findAll: findAll };

function findAll() {
  var url = "http://localhost:3000/posts"; // extract base URI to constant
  var request = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {

    request.open('GET', url, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.onerror = function () {
      reject(new Error("Error fetching posts"));
    };

    request.send();
  });
}

exports.default = Post;

},{}]},{},[1]);
