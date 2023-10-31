const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
              <img src='public/images/ErrorPage404-05.jpg' alt='<a href="https://www.vecteezy.com/free-vector/404">404 Vectors by Vecteezy</a>' />
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404