const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <center><img src="/images/404.jpg" width="1500px" height="1000px" alt="Oops"/></center>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              Photo by <a href="https://unsplash.com/@rojekilian"> Sarah Kilian </a> 
              on <a href="https://unsplash.com/"> Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404