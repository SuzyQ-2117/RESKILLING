index.yaml

openapi: 3.0.0
info:
    title: Acme Users and Products API
    version: 1.0.0
    description: An API that provides access to Acme's users and products

servers:
    url: http://localhost:3001/api
    description: API server built with Node and Express

paths:
    /users:
        get:
            operationId: getUsers
            summary: get all users
            description: Returns a list of all users
            parameters:
            - in: query
            name: sort
            require: false
            schema: 
                type: string
            responses:
                200:
                    description: A list of users
                    content:
                        application/json:
                            schema: 
                                type: array
                                items: 
                                    $ref: '#/components/schemas/User'

components: 
    schemas: 
        User: 
            type: object
            properties:
                id: 
                    type: integer
                    description: The user id
                name: 
                    type: string
                    description: The user first and last name
                phone: 
                    type: string
                    description: The user phone number
                email: 
                    type: string
                    description: The user email address