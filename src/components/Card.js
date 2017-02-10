var React = require('react')

var Card = React.createClass({

  render: function() {
    return (
      <div>
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.cardname + ".png"} /></h1>
      </div>


    )
  }

})

module.exports = Card
