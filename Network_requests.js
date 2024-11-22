/*
NETWORK REQUESTS
- let promise = fetch(url)
- response : text(), json(), formData(), blob(), body()
- 1) let response = fetch(url) // if you use AWAIT fetch, it waits for the result, so either way works
     let data = await response.json()

- 2) fetch(url).then(res => res.json()).then(....).catch(error => ...)

RESPONSE - properties (status, ok, headers)
- let formData = new FormData([form])
  let response = await fetch(...), {
                        method: 'POST',
                        body: new FormData(form)
                    }

CORS - cross origin resource sharing
     - origin = domain / port / protocol
     - SAFE => methods : GET, POST, HEAD
            => headers : Accept, Accept-Language, Content-Language, Content-Type
     - UNSAFE => all others
     - if a request is cross-origin, the browser always adds the Origin header to it in the headers
     - the response should ALLOW - Access-Control, Allow - Origin in the response

PREFLIGHT - before the browser sends a request, it sends a preflight containing the origin's info
to check against what the website / server allows. if it passes, it sends the actual request

URL = uniform resource locator, address used to access resources on the internet
    - is an object (can use new URL to create a new one)
    - contains protocol (http) + hostname (site.com) + port (:8080) + pathname (path/page)
            + search(?p=...) + hash(#)
    - can also contain username and password
    - are encoded automatically and some characters are not allowed 

XMLHttp = brower object that allows http requests in JS
- can operate on any data
- fetch is more modern, but cannot track upload progress

REGULAR POLLING = sending requests to the server every 10 seconds or so
                    - comes with a heavy load that impedes performance
LONG POLLING 
- simplest way of having persistend connection with a server without needing protocols like
WebSocket or ServerSideEvents
                1) request sent to the server
                2) server keeps the connection open until it has a message to send
                3) when the message appears, the server responds to the request with it
                4) the browser makes a new request immediately

WebSocket = a protocol that provides a way to exchange data between browser and server
persistently via packets
- no need for additional Http requests
- good for online games, trading etc
- let socket = new Websocket('...')
- methods : onopen, onmessage, onclose, onerror
- WebSocket objects are cross-origin by nature
- not using Http at all
- rate limiting =  as much as network speed allows
- connection states : 0 - connecting, 1 - open, 2 - closing , 3 - closed

Server Side Events = built in class in EventSource
- keeps connection with the server to allow receiving events from it 
- one directional
- only 3 states : connecting / reconnecting , connected , closing / closed


*/