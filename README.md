# Foreword

Not having any previous experience using Node.js I saw this as an opportunity to learn about something that has, until now, been a gap in my technical knowledge.

I began by researching Node and practicing with a few tutorials. While perhaps not necessary to complete the programming task, this provided context that proved quite helpful.

After familiarising myself with Node I began on the actual development task. During this phase I was introduced to Handlebars and Bootstrap, which I found interesting and ultimately helpful in achieving my end goal. The end results of my test may not be particularly pretty, or even functional, but much was learnt in the process about a technology which was completely foreign to me until 2 days ago.

Also included is an Excel spreadsheet with a brief summary of the hours I spent on this.

# NAP Tech Web Dev Test

This is a chance for you to show us how you think we should display our products.

## Task

* Build a product catalogue experience based on two sample APIs.

### Product lists
    http://127.0.0.1:3000/api/products

### Product details
    http://127.0.0.1:3000/api/product/$id  

### You might want to include 
 
* Implement pagination/infinite scroll
* Filters and sorts (eg. lowest price first, select a size)
* A mix of server and clientside rendering
* It should be device agnostic
* A quick view or extended view for product

### Things to note

* Aesthetics are very important to the Net-a-porter brand but so is performance
* Don't worry about header/footer
* Use any library/framework you deem applicable

The following are examples of the existing mobile and desktop listing pages:

* [Mobile](public/images/mobile.jpg)
* [Desktop](public/images/desktop.jpg)

You can replicate these or if you think there is something we should be doing, or it should work another way - feel free to be creative but tell us why and what you think we are doing wrong.


## Setup

To run the app:

```shell
$ npm install
$ node app
```

# Apis

## Products

Returns a list of products. 

Example:

```
GET /api/products/?offset=0&limit=60
HTTP 200
Content-Type: application/json

{
    "offset": 0,
    "limit": 60,
    "total": 274,
    "data": [{
        "id": 540559,
        "name": "Roadmaster Waxed-Cotton Jacket",
        "price": "£550",
        "designer": "Belstaff",
        "image": {
            outfit: "//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg"
        }
    }, ...]
}
```

Parameters:

* `offset` (optional) - defaults to 0
* `limit` (optional) - defaults to 60

## Products details

Example:

```
GET /api/product/$id
HTTP 200
Content-Type: application/json

{
    id: 504815,
    name: "Cutout stretch-jersey dress",
    price: "£1270",
    designer: "Donna Karan",
    onSale: false,
    sizes: [
        {
            id: "00004_S_Clothing",
            name: "S"
        },
        {
            id: "00005_M_Clothing",
         name: "M"
        },
        {
            id: "00006_L_Clothing",
            name: "L"
        },
        {
            id: "00007_XL_Clothing",
            name: "XL"
        }
    ],
    badges: [
        "In_Stock"
    ],
    images: {
        outfit: "//cache.net-a-porter.com/images/products/504815/504815_ou_sl.jpg",
        small: "//cache.net-a-porter.com/images/products/504815/504815_in_sl.jpg",
        large: "//cache.net-a-porter.com/images/products/504815/504815_in_pp.jpg"
    }
}
```
