var React = require('react');
var ReactDom = require('react-dom');

/*
App
*/
var App = React.createClass({
	render: function(){
		return(
				<div className="catch-of-the-day">
					<div className="menu">
						<Header />
					</div>

					<Order />
					<Inventory />
					
				</div>
			)
	}
});

/*
Header
<Header />

*/
var Header = React.createClass({
	render: function(){
		return(
			<p>Header</p>

			)
	}
});

/*
Order
<Order />

*/
var Order = React.createClass({
	render: function(){
		return(
			<p>Order</p>
			
			)
	}
});

/*
Inventory
<Inventory />

*/
var Inventory = React.createClass({
	render: function(){
		return(
			<p>Inventory</p>

			
			)
	}
});



/*
StorePicker
This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
	render: function(){
		var name="wes";
		return(
				//always returning one element- need to be wrapped in a parent tag
				<form className="store-selector"> 
				{/*Comments goes here*/}
					<h2>Please Enter A Store {name}</h2>
					<input type="text" ref="storeId" required/>
					<input type="Submit"/>
				</form>

			)
	}

});

ReactDom.render(<App/>, document.querySelector('#main'));
