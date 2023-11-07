const React = require("react");
const Def = require("./Default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img
            src="/images/restaurant_logo.jpg"
            alt='<a href="https://www.vecteezy.com/free-vector/food-logo">Food Logo Vectors by Vecteezy</a>'/>
          <div>
            Photo by{" "}
            <a href="https://www.vecteezy.com/members/agung_cs">Ajung CS</a> on{" "}
            <a href="https://www.vecteezy.com/vector-art/8799559-vintage-retro-restaurant-classic-food-with-fork-spoon-and-dish-design-concept-emblem-logo-template">
              Vecteezy
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;