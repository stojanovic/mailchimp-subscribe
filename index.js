'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

'use strict';

var request = require('request');

// Using a generator function to loop through object
var entries = regeneratorRuntime.mark(function entries(obj) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

  return regeneratorRuntime.wrap(function entries$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 3;
        _iterator = Object.keys(obj)[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 12;
          break;
        }

        key = _step.value;
        context$1$0.next = 9;
        return [key, obj[key]];

      case 9:
        _iteratorNormalCompletion = true;
        context$1$0.next = 5;
        break;

      case 12:
        context$1$0.next = 18;
        break;

      case 14:
        context$1$0.prev = 14;
        context$1$0.t0 = context$1$0['catch'](3);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 18:
        context$1$0.prev = 18;
        context$1$0.prev = 19;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 21:
        context$1$0.prev = 21;

        if (!_didIteratorError) {
          context$1$0.next = 24;
          break;
        }

        throw _iteratorError;

      case 24:
        return context$1$0.finish(21);

      case 25:
        return context$1$0.finish(18);

      case 26:
      case 'end':
        return context$1$0.stop();
    }
  }, entries, this, [[3, 14, 18, 26], [19,, 21, 25]]);
});

var MailChimpSubscribe = (function () {
  function MailChimpSubscribe(options) {
    _classCallCheck(this, MailChimpSubscribe);

    if (!options.dc) throw new Error('Datacenter (dc) option is required');

    if (!options.ApiKey) throw new Error('API Key is required');

    if (!options.listId) throw new Error('List ID is required');

    this.dc = options.dc;
    this.ApiKey = options.ApiKey;
    this.listId = options.listId;

    this.url = 'https://' + this.dc + '.api.mailchimp.com/2.0/lists/subscribe.json' + ('?apikey=' + this.ApiKey + '&id=' + this.listId) + '&double_optin=false&send_welcome=false';
  }

  _createClass(MailChimpSubscribe, [{
    key: 'subscribe',
    value: function subscribe(options, callback) {

      if (!options.email) throw new Error('Email address is required');

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = entries(options)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2);

          var key = _step2$value[0];
          var value = _step2$value[1];

          if (key === 'email') {
            this.url += '&email=' + encodeURIComponent(value);
          } else {
            this.url += '&merge_vars[' + key + ']=' + encodeURIComponent(value);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      request(this.url, callback);
    }
  }]);

  return MailChimpSubscribe;
})();

exports['default'] = MailChimpSubscribe;
module.exports = exports['default'];
