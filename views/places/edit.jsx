const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  //console.log(data);
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-groupup col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.place.name}
                required
              />
            </div>
            <div className="form-groupup col-sm-6">
              <label htmlFor="name">Image</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                defaultValue={data.place.pic}
                required
              />
            </div>
            <div className="form-groupup col-sm-6">
              <label htmlFor="name">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                defaultValue={data.place.city}
                required
              />
            </div>
            <div className="form-groupup col-sm-6">
              <label htmlFor="name">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                defaultValue={data.place.state}
                required
              />
            </div>
            <div className="form-groupup col-sm-6">
              <label htmlFor="name">cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                defaultValue={data.place.cuisines}
                required
              />
            </div>
          </div>
          <br />
          <input className="btn btn-primary" type="submit" value="Save" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;