# Social Network API by Jeff Grasso

  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

  The backend for a social network app

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

  - git clone https://github.com/jeffgrasso42/social_network_api.git 
  - npm i in terminal
  - npm run dev in terminal

## Usage

  N/A

## License

  This application uses the MIT (https://opensource.org/licenses/MIT)

## Contribute

  N/A

## Tests

  Test CRUD routes for all endpoints in Insomnia Core:
  
  -Users:

    - GET http://localhost:3001/api/users
    - POST http://localhost:3001/api/users
    - GET http://localhost:3001/api/users/:userId
    - PUT http://localhost:3001/api/users/:userId
    - DELETE http://localhost:3001/api/users/:userId

  -Friends:

    - PUT http://localhost:3001/api/users/:userId/friends/:friendId
    - DELETE http://localhost:3001/api/users/:userId/friends/:friendId

  -Thoughts:

    - GET http://localhost:3001/api/thoughts
    - POST http://localhost:3001/api/thoughts
    - GET http://localhost:3001/api/thoughts/:thoughtId
    - PUT http://localhost:3001/api/thoughts/:thoughtId
    - DELETE http://localhost:3001/api/thoughts/:thoughtId

  -Reactions:
    
    -http://localhost:3001/api/thoughts/:thoughtId/reactions
    -http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId


## Questions

  If you have any questions, contact me through my GitHub profile: jeffgrasso42 or reach me by email at: jagrasso42@gmail.com

