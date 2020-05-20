import React from "react";
import ReactPlayer from 'react-player'

class Performance extends React.Component {

	ref = player => {
    this.player = player
  }

	render() {
		return (
			<div className = "Performance Pagina">
				<div className="Perfilamiento">
					<h2 className="titulo"> Perfilamiento </h2>
					<div className="row">
						<div className="col-md-8">
							<ReactPlayer 
								className="react-player"
								url = "../performance.mp4"
								width = "100%"
								height = "100%"
								controls = {true} />
						</div>
						<div className="col-md-4">
						</div>
					</div>
				</div>
				<div className="Overdraw">
					<h2 className="titulo"> Overdraw </h2>
					<div className="row">
						<div className="col-md-4">
							<ReactPlayer 
								ref={this.ref}
								className="react-player"
								url = "../overdraw.mp4"
								width = "100%"
								height = "100%"
								controls = {true} />
						</div>
						<div className="col-md-8">
							<p> En general, la forma en la que la aplicación pinta los componentes es buena. 
							A excepción de cuando se viaja de la vista anual a la vista mensual dando click en algún día <span>(Ver en el vídeo)</span> </p>
						</div>
					</div>
				</div>
				<div className="Manejo de threads">
				</div>
			</div>
		);
	}
}

export default Performance;