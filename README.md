# Ciao Papa App

I was able to meet all of the functional requirements but I was unable to deploy the application to Heroku. I ran into an error that I simply couldn't fix. I will get to the bottom of the issue but unfortunately the solution won't fall within the alotted time of the project. The error specifically is with node-sass and an errant module on the heroku build. I had some trouble working with Javascript dates and formatting the entry times and dates in EST, so the times are all clocked in and out in GMT.

I approached the project by the backend first based on my prior experience. I sketched out what models, mutations, and types would be needed to build a GraphQL api on Ruby on Rails. I then drew up some rough designs of the webpages and built a list of components that would be needed in the React app. I had planned on using User Authentication but I didn't in order to ensure a MVP could be built in the time alotted. 

With regards to schema design, an Entry is stored as an object and Entries are stored as an array of objects. Each entry has clock_in, clock_out and user_name fields. I used this specific design because of its simplicity in the time alotted although I would have preferred to reference a user on each entry. A user on each entry would mean a User model would need to be created and authentication through bcrypt.

There is a lot that I could do here in another day and month. I do not have any front end validation for bad input on username, for example. I didn't write enough tests on the backend and didn't use any testing framework like jest on the front end. I am typically writing lots of front end and back end tests and believe testing is crucial to deliver a performant application in the long run. I would also add a filter on the front end to allow users to find entries that are specific to them. I would also add authentication on the front end so a login and see only their time entries. Another issue I didn't have enough time to address is the styling of the app. I would be sure to clean up the look of each component, but ran out of time.
