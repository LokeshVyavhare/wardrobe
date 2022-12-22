# fixed-thread-889 - Wardrobe.com

## Objective:
To create a e-commerce web model for shopping clothings, for user to search, choose clothings and admins to manage data.

## Description:

This is a collaborative project to clone a e-commerce website, working model, featuring clothing shopping. Various features like searching category wise data, psuedo-purchasing cart items. Responsive website on range of screens from smarphones to large screens.


## Tech Stacks:
    
    1) Front-end:
        * React (HTML5, JS, CSS3)
        * Redux (React-redux, redux-thunk)
        * Chakra Ui
        * External CSS Libraries (Styled-Components, framer-motion)

    2) Back-end:
        * Node
        * Express
        * Mongoose (server-databse)
        * Render.com (To Deploy Server)

    3) DataBase:
        * MongoDB (MongoDB Atlas)

## Dependencies:

### Front-end

    1) react
    2) react-dom
    3) react-scripts
    4) styled-components
    5) react-router-dom
    6) react-icons
    7) chakra ui realated libararies including chakra icons
    8) react-slick
    9) axios
    10) redux, redux thunk, react-redux

### Backend

    1) express
    2) cors
    3) dotenv
    4) mongoose
    5) nodemon


## Setting Up Project in local

### Frontend

#### 1) Setting up node environment

    1) navigate to Front-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install

#### 2) Starting frontend on localhost
(make sure you are confirming url of server)

    npm start /*or*/ npm run start

#### 3) Making Production ready folder

    npm run build

### Server
#### 1) Setting up node environment

    1) navigate to Back-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install


#### 1) Starting Server in deployment

    npm start

#### 1) Starting Server with nodemon on locahost

    npm run server

### Database: MongoDB

#### 1) Atlas

    in .env file provide MONGODB_URL with proper credentials

#### 2) Local database

    if MONGODB_URL not declared in .env, by default it will connect to local data base

    in case not working try changing MONGODB_URL in Back-end/config/db.js

## Screenshots
# Homepage
![Screenshot (425)](https://user-images.githubusercontent.com/81003403/207111836-2c8dea8c-23d6-4ddc-b915-989628de5819.png)


# Category Page
![Screenshot (426)](https://user-images.githubusercontent.com/81003403/207111513-2fde8fa4-cb00-4a64-8a2e-dc120cc6e6a1.png)

# Product Page

![Screenshot (427)](https://user-images.githubusercontent.com/81003403/207111598-edf94564-a17f-482f-899c-99b0a2b0fe75.png)

# Cart Page

![Screenshot (428)](https://user-images.githubusercontent.com/81003403/207111718-1a20b58f-24dd-436b-8a09-7a034fd7df04.png)




## Members:
* [Lokesh Vyavhare-Team Lead](https://github.com/LV-23)
* [Somya Ranjan Singh](https://github.com/somya143)
* [Abhijeet Kumar](https://github.com/abhizeit)
* [Suraj Sanjay Kokane](https://github.com/kokanesuraj007)
* [Shivang kumar](https://github.com/kshivang80)

## Responsibilities:

1)Shivang kumar:
* Homepage
* Navbar 
* Footer 

2)Suraj Sanjay Kokane:
* Mens Page
* Womens Page
* Kids Page
* Advertising Crousers

3)Somya Ranjan Singh:
* Category-wise product display UI and pages
* category redux-management in redux
* Products & Category Related server APIs 
* Products & Category Related DataBase model mangement
* Misc Backend services & features

4)Abhijeet Kumar:
* Product Page & UI 
* product redux-management in redux
* Cart, wishlist & users(Auth) Related server APIs 
* Cart, wishlist & users(Auth) Related DataBase model mangement
* Misc Backend services & features
* Website Logo

5)Lokesh Vyavhare:
* Cart-page and purchase flow UI
* Auth, Cart-product redux-management in redux
* Login-signup Pages & UI
* Various styling & responsive features
* Admin pages & admin flow
* Leading & managing project

## Deployed Link: [Link](https://fixed-thread-889.netlify.app/)


Manager: 1) [Soumya Mohrana]()
Manager: 1) [Nishut Suman Mahunta]()

