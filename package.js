Package.describe({
  summary: "Bootstrap styled version of login widgets",
  "name": "lbragaglia:accounts-ui-bootstrap-3-italian",
  "description": "Meteor's accounts templates styled for bootstrap-3 migrated very simply to Blaze - some features may have regressed - Italian translation",
  "homepage": "https://github.com/lbragaglia/meteor-accounts-ui-bootstrap-3-italian",
  "author": "lbragaglia (https://github.com/lbragaglia/meteor-accounts-ui-bootstrap-3-italian)",
  "version": "0.3.7",
  "git": "https://github.com/lbragaglia/meteor-accounts-ui-bootstrap-3-italian.git"
});

Package.on_use(function (api) {
  api.use(['session@1.1.1', 'handlebars@1.0.4', 'stylus@2.511.1', 'accounts-base@1.2.1', 'underscore@1.0.4', 'templating@1.1.5'], 'client');

  api.add_files([
    'accounts_ui.js',

    'login_buttons_images.css',
    'login_buttons_dropdown.styl',

    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    'login_buttons_dialogs.html',

    'login_buttons_session.js',

    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js',
    'login_buttons_dialogs.js',
    'accounts_ui.styl'], 'client');
});

Package.on_test(function (api) {
  //api.use('meteor-accounts-ui-bootstrap');
  //api.use('tinytest');
  //api.add_files('accounts_ui_tests.js', 'client');
});
