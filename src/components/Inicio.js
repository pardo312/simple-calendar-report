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
	    <div className="Pagina">
        <div className="Banner">
          <div className="row"> 
          <br></br>      
            <div className="col-md-3">
              <img className="textCenter" style={{ width: '50%',marginTop: '10rem' }} src='https://github.com/SimpleMobileTools/Simple-Calendar/blob/master/fastlane/metadata/android/en-US/images/icon.png?raw=true' alt="MonkeyTest" />
            </div>
            <div className="col-md-9">
            <img className="textCenter" style={{ width: '90%' }} src='https://github.com/SimpleMobileTools/Simple-Calendar/blob/master/fastlane/metadata/android/en-US/images/featureGraphic.jpg?raw=true' alt="MonkeyTest" />
            </div>
          </div>
          <br></br>
        </div>
        <div className="descripcion">
          <h2 className="titulo"> Descripción </h2>
          <br></br>
          <p className="cita"> Simple Calendar es un planificador de calendario fuera de línea enormemente personalizable para teléfonos móviles Android diseñado para hacer exactamente lo que una aplicación de calendario personal de Android debería hacer en 2020. ¡Sin funciones complicadas, permisos innecesarios y sin anuncios! </p>
          <p className="cita"> Ya sea que esté buscando un recordatorio simple de citas móviles o esté organizando eventos únicos o recurrentes, cumpleaños, necesite recordar aniversarios, programar reuniones de negocios, citas o cualquier otra cosa, Simple Calendar, maravilloso planificador de horarios para teléfonos móviles Android, lo hace fácil mantenerse organizado Con una increíble variedad de opciones de personalización, puede personalizar recordatorios de eventos, apariencia de notificaciones y cómo se ve el recordatorio móvil simple. </p>
          <p className="cita"> El organizador familiar y el organizador familiar de calendario notable y fácil de usar hacen que verificar su próxima agenda, programar reuniones de negocios, eventos y citas sea muy fácil. Recuérdese cualquier agenda que necesite ser recordada. Este recordatorio de widget de calendario 2020 es un notable planificador diario fácil de usar. Incluso puede ver todo como una simple lista de eventos en lugar de en la vista de calendario, para que sepa exactamente lo que está sucediendo en su vida y cómo organizar y planificar su agenda.</p>
          <h6 className="autor"> Simple Mobile Tools </h6>
        </div>
        <div className="features">
          <h2 className="titulo"> Funcionalidades </h2>
          <br></br>
          <div className="row">
            <div className="col-md-5">
              <ul>
                <li>Exportación e importación de eventos a través de archivos .ics</li>
                <li>Recordatorios de citas y eventos personales</li>
                <li>Creación de eventos</li>
                <li>Importar fácilmente cumpleaños y aniversarios</li>
                <li>Filtrar eventos por tipo</li>
                <li>Mostrar la ubicación de un evento en un mapa</li>
              </ul>
            </div>
            <div className="col-md-7">
              <ul>
                <li>Compartir eventos en redes sociales, correos electrónicos, etc</li>
                <li>Exportar configuraciones a archivos .txt para importar a otro dispositivo</li>
                <li>Visualización de eventos por día, mes o año</li>
                <li>Soporte CalDAV para sincronizar eventos a través de Google Calendar, Microsoft Outlook, Nextcloud, Exchange, etc.</li>
                <li>Personalizable: cambie el sonido, los bucles, la transmisión de audio, las vibraciones, los colores</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
	  );
	}
  
}

export default Inicio;