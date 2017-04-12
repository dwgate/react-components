// var food = ['Chocolate', 'Peanutbutter', 'Oreos'];

class GroceryListItem extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      hover: false
    }
  }

  onListItemMouseHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render () {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
    <li style={style} onMouseEnter={this.onListItemMouseHover.bind(this)} >{this.props.item}</li>
    );

  }




}

var GroceryList = (props) => (
  <ul>
  {props.items.map( item => 
    <GroceryListItem item={item} />
    )}
  </ul>
);


ReactDOM.render(<GroceryList items = {['Chocolate', 'Peanutbutter', 'Oreos']}/>, document.getElementById('app'));



