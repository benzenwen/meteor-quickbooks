Template.configureLoginServiceDialogForQuickbooks.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForQuickbooks.fields = function () {
  return [
    {property: 'consumerKey', label: 'OAuth Consumer Key'},
    {property: 'secret', label: 'OAuth Consumer Secret'}
  ];
};
