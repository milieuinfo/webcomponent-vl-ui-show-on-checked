const VlShowOnChecked = require('../components/vl-show-on-checked');
const {Page, Config} = require('vl-ui-core').Test;

class VlShowOnCheckedPage extends Page {
  async _getShowOnChecked(selector) {
    return new VlShowOnChecked(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-show-on-checked.html');
  }
}

module.exports = VlShowOnCheckedPage;
