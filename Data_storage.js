/*
DATA STORAGE
- COOKIES = small strings of data stored in the browser ; part of HTTP protocol
sign-in => server uses Set-Cookie HTTP header in the response to set a cookie with a unique session ID
        domain  /  path / expires, max-age / samesite / httpOnly (forbids JS from accessing cookie)
    methods : getCookie, setCookie, deleteCookie
- third party cookies used to track users across sites
- TOKEN = info stored as JSON object, transfers info between server and client 

        COOKIE                                      TOKEN
- small string stored in the browser  | - json object stored client-side 
                                      |      (browser session / localstorage / in-memory / http cookies)
- manages session, saves preferences  | - header + payload signature
    tracks behavior
- automatically sent with HTTP req's  | - not automatically sent
- stateful authentication, server     | - used for stateless authentication / authorization
    keeps track

LOCAL STORAGE / SESSION STORAGE
- these allow to save key / value pairs in the browser
- different from cookies: they are not sent to the server, they cannot be manipulated via HTTP
headers, only JS
- methods: setItem(k, v), getItem(k), removeItem(k), clear(), key(index), length
- LOCAL STORAGE shared between tabs and window from the same origin; can reboot OS without deleting
        - strings only!     Json.stringify(object)
- SESSION STORAGE - only exists within current tab, otherwise the same as local storage
                  - closed too if tab is closed

INDEXEDDB
- a db built into a browser
- multiple key types, not just strings
- can store more than 5 MB
- all db's exist within the current origin (same website)
- when transactions are completed, they auto commit

*/