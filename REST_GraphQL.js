/*
REST API
- a set of design principles, or architecture style
- representational state transfer
- API => application program interface ; mechanism that enables an application or service to access
  a resource within another app or service

- UNIFORM INTERFACE => all API requests for the same resource should look the same

- CLIENT-SERVER DECOUPLING => independent from each other; client should only know the URL of
  the resource it wants to access

- STATELESSNESS => every request has to include all the info needed for processing it

- CACHEABILITY => resources should be cacheable on the client / server side

- LAYERED SYSTEM ARCHITECTURE => neither client nor server should be able to tell whether they
  communicate with the end application or an intermediary

- CODE ON DEMAND(optional) => REST API's usually send static responses but responses can also contain executable
  code if needed. should only be run on demand


GRAPHQL
- a query language, architecture style and set of tools to create and manipulate API's

                REST API                                    GraphQL
DATA FETCHING                                   |
- structured around endpoints representing      |- uses a single endpoint to request data
specific resources                              |- clients have to request exactly the data they need
- clients can over-fetch or under-fetch         |- client defines the shape of the query
- may need to access multiple endpoints         |
                                                |
FLEXIBILITY / EFFICIENCY                        |
- less flexible and can result in too much      |- clients can get all they need in a single request
or too little information                       |
                                                |
API VERSIONING                                  |
- necessary, adds complexity                    |- not necessary, less complicated. New fields are
                                                |added directly to the schema
ERROR HANDLING                                  |
- typically handled with HTTP status codes      |- responses return 200 OK always and errors are
- standardized but often lacking insight        |structured error objects
                                                |- more detailed and insightful
PERFORMANCE                                     |
- slower due to more requests and over-fetching |- generally more efficient but deeply nested queries
                                                |can hinder performance
CACHING                                         |
- straightforward since every resource is tied  |- much more challenging to implement
to a unique URL                                 |
- HTTP based                                    |
                                                |
EASIER TO USE, MILD LEARNING CURVE, USES HTTP   | DIFFICULT TO LEARN, mastery in query writing
                                                | and managing server performance
*/