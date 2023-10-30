const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <head>
              <link rel="stylesheet" href="public/style.css"/>    
            </head>
                <div>
                  <img src="public/images/404.jpeg" alt="404 Cat" />
                </div>
                <div>Photo by <a href="https://placekitten.com/">PlaceKitten</a></div>
            </main>
      </Def>
    )
  }
  
module.exports = error404