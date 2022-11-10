start local server at http://localhost:8080 using command 'npm run start' frim directory back-end. 

### base-url = http://localhost:8080.

## signup api request (post)

requset url = base-url/users/signup

### request body 
    {
        "email": "string",
        "password":"string"
    }

### response:
    1)successfull:
        response
            {
                error: false,
                message: "Your account has been created",
            }

    2)unsuccessful:
        response
            {
                error: true,
                message: "Something went wrong. Please try again.",
            }


## login api request: (post)

requset url = base-url/users/login

### request body
    {
        "email": "string",
        "password":"string"
    }

### response:
    1)successfull:
        response 
            {
                error: false,
                message: "You've logged in successfully.",
                token: "string">,
            }

    2)unsuccessful:
        response (status code: 404)= { error: true, message: "Wrong Passwod! Please try again." } //wrong password

        response (status code: 401) = { error: true, message: "Somthing went wrong. Please try again." }

## Product Api

request url = base-url/products

### Get : (all product)

#### request url
    base-url/products

#### response:
    
    [{
        "_id": "636c7529ac8d630de4ffa0c5",
        "name": "sample_product",
        "image1": "url1",
        "image2": "url2",
        "description": "some sample desciption",
        "price": 10000,
        "category": "MEN/WOMEN/KIDS", (either one)
        "tags": "string"
    },
    {
        "_id": "636c7529ac8d630de4ffa0c5",
        "name": "sample_product",
        "image1": "url1",
        "image2": "url2",
        "description": "some sample desciption",
        "price": 10000,
        "category": "MEN/WOMEN/KIDS", (either one)
        "tags": "string"
    }]

### filter by category or tags:
    base-url/products?category=men
    or
    base-url/products?tags=hats


### Get by ID: (single product)

#### request url
    base-url/products/:id

#### response:
    
    {
        "_id": "636c7529ac8d630de4ffa0c5",
        "name": "sample_product",
        "image1": "url1",
        "image2": "url2",
        "description": "some sample desciption",
        "price": 10000,
        "category": "MEN/WOMEN/KIDS", (either one)
        "tags": "string"
    }


### Post (Adding products only by admin):

#### URL:
    base-url/products

#### body:
    {
        "_id": "636c7529ac8d630de4ffa0c5",
        "name": "sample_product",
        "image1": "url1",
        "image2": "url2",
        "description": "some sample desciption",
        "price": 10000,
        "category": "MEN/WOMEN/KIDS", (either one)
        "tags": "string"
    }

#### response:

    1) the same product if successful

    @)....working








