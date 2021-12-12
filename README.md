## Available Endpoints

`GET` `/` : Server Status

<hr>

`GET ` `user/me` : Returns user profile with matching token from the header

<hr>

`POST` `users/` : Extract username from body and create user

<hr>

`GET` `urls/` : Returns all available URLs
`GET` `urls/:shortCode` : Returns the original URL for the requested shortCode
`POST` `urls/` : Extract shortCode and longUrl from the request body. longUrl will be mapped to the custom shortCode if given or else a unique shortCode will be created. Returns the newly created shortCode and longUrl
