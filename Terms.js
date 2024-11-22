/*

GIT = version control system
GITHUB = online hosting service for git
REPOSITORY = project; a bunch of files and directories. changes stored in the .git directory

JWT = (token) info stored as JSON object, transfers info between server and client.
- stored client side (browser session / local storage / in memory / http cookie)
- header + payload structure
- not automatically sent 
- used for stateless auth

AJAX
- ASYNC JS IN XML is a technique used in web development to create more interactive 
and dynamic websites. It allows web pages to send and retrieve data from a server asynchronously, 
without needing to reload the entire page. This leads to a smoother and faster user experience 
because the page doesn't need to be refreshed every time the user performs an action that requires 
data from the server.
- uses JS to send / receive data async;
- XML / JSON / HTML, but mostly JSON
- facilitates communication between browser and server; XMLHttpRequest. Modern APIs now use fetch()

EVENT LOOP
- mechanism that aloows the language to handle async operations, like network requests, timers or 
DOM events, in a non-blocking manner.JS is single-threaded - only executes one task at a time.
CALL STACK = this is where JS code is executed.
WEB API's => when an async operation (setTimeout, fetch, DOM events) is initiated, the browser /
    Node.js handles it separately
CALLBACK QUEUE(task queue) => this is where completed async tasks wait to be executed

AXIOS 
- lightweight JS library used for making HTTP requests from the browser or Node.js
- allows communication with APIs or servers, fetching or sending data to an API endpoint
- promise - based, JSON handling, request / response interceptors, supports all HTTP methods

NODE.js
- is an open-source, cross-platform JS runtime environment that allows devs to run JS code on the 
server side. Unlike traditional JS which runs in the browser, Node enables devs to build server-side
apps using JS
- built on Chrome V8 Engine
- async and event-driven
- while it operates on a single thread, it uses non-blocking I/O calls
- npm = vast ecosystem of packages and libraries, a lot of functionality
- used to create web servers, REST API's

FRAMEWORK = pre-built, structured collection of tools and libraries. defines a standard way to build
and organize code
=> reusable code
=> inversion of control (unlike libraries where the dev calls the code, here the framework calls 
your code)
=> consistency
=> scaffolding and automation
- types : web frameworks = (react, angular, vue) frontend / (express, django) backend
          mobile framework
          testing frameworks

REACT
- popular JS library used for building user interfaces (frontend library)
- dynamic, interactive web apps by updating and rendering components when data changes
- component based
- jsx (JS xml = HTML-like syntax)
- virtual DOM (document - object - model)
- state & props
- declarative; you describe what the UI should look like and React does it

EXPRESS
- minimal, flexible, fast web application framework for Node.js
- has a powerfu middleware system allowing to add process reqs and responses by adding functionality
like logging, auth and more
- simple interface for defining routes
- template engines like PUG for dynamic HTML pages
- simplified HTTP handling

TYPESCRIPT 
- a superset of JS that adds static typing and other features to the language. Designed to make JS more
scalable, maintainable and less prone to bugs.
- static typing: let age: number = 30  // age can only hold numbers
- type inference: does not always require to specify types expicitly. it will infer that 
    let message = 'hello world'  // is a string
- object-oriented programming features
    class Person {
    private name: string;

    constructor(name: string){
        this.name = name
    }
    greet(){
        return `hello, my name is ${this.name}`
    }
    
}
- OPTIONAL / UNION types : function printId(id: number | string) {
                                    console.log(`IDL ${id}`)
                                }
- interface User { 
        name: string,
        age: number
    }
    let user: User = { name: 'Alice', age: 35 }
- BENEFITS: fewer bugs, better documentation, improved code organization, scalability

JWT
- header + payload + signature
- payload contains the claims (statements about the entity, usually user, plus other metadata,
like iat - issued at)
- signature = to encode header and payload with a secret
- flow : client login => token issuance => token storage => token transmission => server verification
=> token expiry

Passport.js + JWT
1) install dependencies
2) set up user model
3) configure passport local strategy = used for username and password auth

passport.use(new LocalStrategy({
    usernameField: 'username',
}, async (username, password, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        if (jwt_payload.guestId) {
            return done(null, { guestId: jwt_payload.guestId });
        }
        
        if (jwt_payload.id) {
            const blacklistedToken = await prisma.token.findUnique({ where: { token: jwt_payload.jti } });
            if (blacklistedToken) {
                return done(null, false, { message: 'Token blacklisted' });
            }
            
            const user = await prisma.user.findUnique({ where: { id: jwt_payload.id } });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'User not found' });
            }
        }
        
        return done(null, false, { message: 'Invalid token' });
    } catch (err) {
        return done(err, false);
    }
}));

4) set up auth routes

const differentiateUserOrGuest = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, userOrGuest, info) => {
        if (err) return next(err);
        if (userOrGuest) {
            if (userOrGuest.guestId) {
                req.guestId = userOrGuest.guestId; // assign guestId to the request object
                return next();
            } else {
                req.user = userOrGuest; // assign user to the request object
                return next();
            }
        } else {
            return res.status(401).json({ message: info.message || 'Unauthorized' });
        }
    })(req, res, next);
};

*/