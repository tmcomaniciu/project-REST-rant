const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Rant or Rave</h1>
        <div>
          <div>
            <br></br>
          </div>
          <img
            src="/images/main_logo.png"
            alt='<a href="https://www.beaufortcountynow.com/uploads/created_by_sni/logos/BO_Logo_with_Man.png">Rant and Rave by Vecteezy</a>'
            className = "titleImage"
            />
          <div>
            Photo by{" "}
            <a href="https://www.beaufortcountynow.com/uploads/created_by_sni/logos/BO_Logo_with_Man.png">Sni</a> on{" "}
            <a href="https://www.beaufortcountynow.com/">
              Beaufort County Now
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;