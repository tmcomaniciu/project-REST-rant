const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="public/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg" alt="Vegan Bowl" />
                </div>
                <div>Photo by <a href="https://unsplash.com/@edgarraw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Edgar Castrejon</a> on <a href="https://unsplash.com/photos/silver-spoon-on-black-ceramic-bowl-with-vegetables-1SPu0KT-Ejg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home