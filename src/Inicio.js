import React from "react";

class Inicio extends React.Component {

	constructor(props){
    super(props);
    this.state={
      releases:[]
  	};
	}

	componentDidMount(){
    fetch("https://api.github.com/repos/SimpleMobileTools/Simple-Calendar/releases?page=2&per_page=100")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ releases: data });
    	console.log(data);
    });
  }

	render() {
		return (
	    <div className="Inicio">
	      
	    </div>
	  );
	}
  
}

export default Inicio;