'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeStamp_DateFormat = function () {
	function TimeStamp_DateFormat(time) {
		_classCallCheck(this, TimeStamp_DateFormat);

		this.time = time;
	}

	_createClass(TimeStamp_DateFormat, [{
		key: 'sameSplit',
		value: function sameSplit(str) {

			var strSplit = str.split('');
			var lenSplit = strSplit.length;
			var index = '';
			var strAcum = '';
			var strFormatSplit = [];
			var num = 0;

			for (var count = 0; count <= lenSplit; count++) {

				if (index.length != 0 && index != strSplit[count]) {
					strFormatSplit[num] = strAcum;
					strAcum = strSplit[count];
					num++;
				} else {
					strAcum += strSplit[count];
				}

				index = strSplit[count];
			}

			return strFormatSplit;
		}
	}, {
		key: 'dateFormat',
		value: function dateFormat(strDate) {

			var formatSplit = this.sameSplit(strDate);
			var _time = this.time;

			var validateLength = function validateLength(strTime) {
				return strTime.length == 1 ? '0' + strTime : '' + strTime;
			};

			formatSplit = formatSplit.map(function (format) {

				var formatReplace = '';

				if (format.toUpperCase() === 'YYYY') {
					formatReplace = format.replace(format, '' + _time.getFullYear());
				} else if (format === 'MM') {
					formatReplace = format.replace(format, validateLength('' + (_time.getMonth() + 1)));
				} else if (format.toUpperCase() === 'DD') {
					formatReplace = format.replace(format, validateLength('' + _time.getDate()));
				} else if (format.toUpperCase() === 'HH') {
					formatReplace = format.replace(format, validateLength('' + _time.getHours()));
				} else if (format === 'mm') {
					formatReplace = format.replace(format, validateLength('' + _time.getMinutes()));
				} else if (format.toUpperCase() === 'SS') {
					formatReplace = format.replace(format, validateLength('' + _time.getSeconds()));
				} else {
					formatReplace = format;
				}

				return formatReplace;
			});

			return formatSplit.join('');
		}
	}]);

	return TimeStamp_DateFormat;
}();

exports.default = TimeStamp_DateFormat;