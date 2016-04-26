// check viewport width
function checkWindowWidth() {
  //check window width (scrollbar included)
  var MqL = 900;
  var e = window;
  var a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }

  if (e[a + 'Width'] >= MqL) {
    return true;
  } else {
    return false;
  }
}

// check if touch device
function isTouchDevice() {
  return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

// check if is homepage
function isHomepage() {
  var homepage = $('body').hasClass('is-homepage');

  if (homepage) {
    return true;
  } else {
    return false;
  }
}

// Browser detect
var BrowserDetect = {

  init: function () {
    this.browser = this.searchString(this.dataBrowser) || 'Other';
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Unknown';
  },

  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },

  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf('rv:');
    if (this.versionSearchString === 'Trident' && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [
    { string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome' },
    { string: navigator.userAgent, subString: 'MSIE', identity: 'Explorer' },
    { string: navigator.userAgent, subString: 'Trident', identity: 'Explorer' },
    { string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox' },
    { string: navigator.userAgent, subString: 'Safari', identity: 'Safari' },
    { string: navigator.userAgent, subString: 'Opera', identity: 'Opera' }
  ]
};

BrowserDetect.init();
