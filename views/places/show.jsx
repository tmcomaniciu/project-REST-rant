const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = <h3 className="inactive">No Comments Yet!</h3>
    let rating = <h3 className="inactive">Not yet rated.</h3>
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
            let stars = ''
            for (let i = 0; i < averageRating; i++) {
                stars += '🌟'
            }
        rating = <h3>{stars} stars</h3>
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                    <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3>Located in {data.place.city}, {data.place.state} </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Description</h2>
                        <h4> {data.place.showEstablished()} </h4>
                        <h4> Serving {data.place.cuisines} </h4>
                        <h2>Rating</h2>
                        <h4>{rating}</h4>
                        <br />
                        <div>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                                Edit
                            </a>     
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div> 
                    </div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <h2>Add Your Own Rave or Rant:</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" id="author" name="author" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="content">Content</label>
                            <input className="form-control" id="content" name="content" required />
                        </div>
                    </div>
                    <div className="row">
                        <div id="slidecontainer" className="form-group col-sm-6">
                            <label htmlFor="stars">Star Rating</label>
                            <input
                                type="range"
                                step="1"
                                min="1"
                                max="5"
                                id="stars"
                                name="stars"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="rant">Rant</label>
                            <br></br>
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked"/>
                        </div>
                        <div>
                          <br></br>
                        </div>
                        <input className="btn btn-primary" type="submit" defaultValue="Add Comment" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = show