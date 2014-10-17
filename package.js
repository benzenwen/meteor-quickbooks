Package.describe({
  name: 'quickbooks',
  summary: 'QuickBooks Online OAuth1 flow for Meteor Accounts.',
  version: '1.0.0',
  git: 'https://github.com/benzenwen/meteor-quickbooks'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

	api.export('Quickbooks');

  api.add_files(
    ['quickbooks_configure.html', 'quickbooks_configure.js'],
    'client');
  api.addFiles('quickbooks_server.js', 'server');
  api.addFiles('quickbooks_client.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('quickbooks');
  api.addFiles('quickbooks_tests.js');
});
