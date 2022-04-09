

https://justify-my-text.herokuapp.com/

https://github.com/Charles-Dubois/justify-text

<div align="center">
  <h3 align="center">Justify text</h3>
  <h5 align="center">An API to justify text</h5>
<h3 align="center">https://justify-my-text.herokuapp.com/</h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
         <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
 
With this API you can justify text to 80 charaters
you can create an account and login,
the number of words taht your can justify is limited to 80000 by 24h.

Due to a simple front-end side,
I choose to develop the API in SSR with handlebars.
Moreover i decided to use mongoDB to stock mail and hashed password because of the speed of use and developpement.

### Built With

- [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Express](https://expressjs.com/fr/)
- [Mongo DB](https://www.mongodb.com/fr-fr)
- [Node JS](https://nodejs.org/en/)
- -[HandleBars](https://www.npmjs.com/package/handlebars)

## Getting Started

Enjoy it at https://justify-my-text.herokuapp.com/

Or if you want to use it locally,
download the zip at https://github.com/Charles-Dubois/justify-text
and follow the next instrcution

### Prerequisites

- [Node JS](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)

### Installation

Extract the file, in the terminal, at the root of the file, execute
`npm i`

To run the API execute 
`node server.js`

## Usage

List of end

##### /

`GET` HTML homepage

##### /api/token/login

`GET` HTML login page

`POST` Login with Email & password (JSON)

##### /api/token/register

`GET` HTML register page

`POST` Sign up with Email & password (JSON)


##### /api/justify/

`GET` HTML page justify text

`POST` Justify the text (text/plan)


## Roadmap

- [x] Justify text at 80 charaters
- [x] Login with token
- [x] Token valid 24h
- [x] 80 000 words by 24h

## Contact

Charles Dubois  charles.dubois.h@gmail.com

Linked In : https://www.linkedin.com/in/charles--dubois/

Project link : https://github.com/Charles-Dubois/justify-text

Deployed at : https://justify-my-text.herokuapp.com/


