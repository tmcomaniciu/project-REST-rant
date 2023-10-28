const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
                <div>
                  <img src="public/images/404.jpeg" alt="404 Cat" />
                </div>
                <div>Photo by <a href="https://placekitten.com/">PlaceKitten</a></div>
            </main>
      </Def>
    )
  }
  
module.exports = error404
