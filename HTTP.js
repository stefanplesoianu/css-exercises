/*
HTTP = Hypertext Transfer Protocol
        KEY FEATURES:   - request - response model
                        - stateless; each req. is independent
                        - has methods
                        - uses URL
                        - has headers that provide metadata about reqs / res
                        - secure version : HTTPS
- methods : GET (retrieve info from a server; SAFE)
            POST (sends data to server to create a new resource; SAFE)
            PUT (update existing resource with the request data)
            DELETE (delete info)
            CONNECT (creates a tunnel to the server identified by the target resource)
            OPTIONS (returns allowed HTTP methods for a resource)
            TRACE (echoes the request back to the client, used for diagnostic purposes)
            PATCH (partially updates an existing resource with provided data; only specified fields)
            HEAD (asks for a response; only retrieves headers, not body)

- caching = technique used to store copies of data temporarily in a storage location (cache)
  so that future requests to the server can be served faster
            browser caching / server caching / database caching / CDN caching / in-memory(Redis)
-         COOKIE                                      TOKEN
- small string stored in the browser  | - json object stored client-side 
                                      |      (browser session / localstorage / in-memory / http cookies)
- manages session, saves preferences  | - header + payload signature
    tracks behavior
- automatically sent with HTTP req's  | - not automatically sent
- stateful authentication, server     | - used for stateless authentication / authorization
    keeps track
- stored in the browser               | - stored in a local storage / browser / db

- HEADERS - let the client / server pass additional info with a HTTP request / response
          - AUTHENTICATION  // Authorization(credentials), Www_Authenticate
          - CACHING  // age, cache-control, expires
          - CONNECTION MANAGMENT // Connection, Keep-Alive
          - CONTENT NEGOTIATION // accept, encoding, charset, post, language, patch
          - COOKIES
          - CORS // access-control-allow-credentials, a-c-max-age, a-c-req-headers, origin
          - RESPONSE // allow, server
          - SECURITY
          - WEBSOCKETS

STATUS CODES
1xx = informational response; it alerts the client to wait for a final response
        100 - continue
        101 - switching protocols
        102 - processing
2xx = success. the request was received, understood and accepted
        200 - ok; server returned the requested data
        201 - created
        202 - accepted
        204 - no content to return
3xx = Redirection; indicate the client must take additional action to complete the request
        300 - multiple choices
        301 - moved permanently; available at a different URL
        302 - moved temporarily; same but may move back
        304 - not modified ; resource not changed since the last request
4xx = client error
        400 - bad request, or malformed / missing params, invalid data
        401 - unauthorized ; auth required, or failed, or missing / invalid credentials
        402 - payment required
        403 - forbidden ; no permission to access the resource
        404 - not found on the server
        405 - method not allowed, e.g. using POST on a read-only endpoint
        408 - timeout
        409 - conflict with the current state of the resource, e.g. duplicate data when creating a resource
        429 - too many requests
5xx = server errors
        500 - internal server error
        502 - bad gateway; the server, acting as a gateway, received an invalid response from the upstream server
        503 - service unavailable, either due to overload or maintenance
        504 - gateway timeout, gateway server did not receive a timely response from the upstream server

SOAP (simple object access protocol)
= protocol for exchanging structured info in web services. built on top of other protocols like HTTP
        1) XML-based messaging format 
                message = envelope + header[op] + body + fault[op]
        2) platform and language independence => interoperates between technologies
        3) extensibility (ws security, ws routing, ws atomic transaction, ws reliable messaging)
        4) protocol neutrality
        5) strict standardization
        6) wsdl based
        7) action-based operation
        8) fault handling
        9) security
        10) statelessness

        MORE COMPLEX, HEAVIER THAN REST API'ss
*/