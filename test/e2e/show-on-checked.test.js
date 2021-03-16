const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlShowOnCheckedPage = require('./pages/vl-show-on-checked.page');

describe('vl-show-on-checked', async () => {
  let vlShowOnCheckedPage;

  before(() => {
    vlShowOnCheckedPage = new VlShowOnCheckedPage(getDriver());
    return vlShowOnCheckedPage.load();
  });

  it('', async () => {
    assert.isTrue(true);
  });
});
