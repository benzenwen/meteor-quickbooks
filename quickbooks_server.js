Quickbooks = {};

var urls = {
    requestToken: "https://oauth.intuit.com/oauth/v1/get_request_token",
    authorize: "https://appcenter.intuit.com/Connect/Begin",
    accessToken: "https://oauth.intuit.com/oauth/v1/get_access_token",
    authenticate: "https://appcenter.intuit.com/Connect/Begin" // QBO doesn't offer an explicit authn URL, so we reuse the authz
};


// Grabbing all of the fields that we know of
Quickbooks.whitelistedFields = [];

OAuth.registerService('quickbooks', 1, urls, function(oauthBinding) {
	var identity = {};
	try {
		identity = {id: "FIXME TEST"};
		// JSON.parse(
		// oauthBinding.getWOptions("https://api.xero.com/api.xro/2.0/user", 
		// 												 {headers : {"Accept": "application/json"}}).content);
	} catch (err) {
		throw _.extend(new Error ("Failed to get oauthBinding call to get user identity string. " + err.message),
									 {response: err.response});
	}

  // extract Quickbooks' User fields
	var fields = _.pick(identity, Quickbooks.whitelistedFields);
  _.extend(serviceData, fields);

  var serviceData = {
    id: identity.id,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };

  // include helpful fields from twitter
//  var fields = _.pick(identity, Twitter.whitelistedFields);
//  _.extend(serviceData, fields);

	debugger;
  return {
    serviceData: serviceData,
    options: {
      profile: {
        name:  "TEST USER"
      }
    }
  };
});


Quickbooks.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};
