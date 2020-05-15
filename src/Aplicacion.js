import React from "react";
import './Aplicacion.css'

function Aplicacion() {
  return (
    <div className="Aplicacion">
      <div className="descripcion">
      	<h2 className="titulo"> Descripción </h2>
      	<p className="cita"> Simple Calendar es un planificador de calendario fuera de línea enormemente personalizable para teléfonos móviles Android diseñado para hacer exactamente lo que una aplicación de calendario personal de Android debería hacer en 2020. ¡Sin funciones complicadas, permisos innecesarios y sin anuncios! </p>
      	<p className="cita"> Ya sea que esté buscando un recordatorio simple de citas móviles o esté organizando eventos únicos o recurrentes, cumpleaños, necesite recordar aniversarios, programar reuniones de negocios, citas o cualquier otra cosa, Simple Calendar, maravilloso planificador de horarios para teléfonos móviles Android, lo hace fácil mantenerse organizado Con una increíble variedad de opciones de personalización, puede personalizar recordatorios de eventos, apariencia de notificaciones y cómo se ve el recordatorio móvil simple. </p>
      	<p className="cita"> El organizador familiar y el organizador familiar de calendario notable y fácil de usar hacen que verificar su próxima agenda, programar reuniones de negocios, eventos y citas sea muy fácil. Recuérdese cualquier agenda que necesite ser recordada. Este recordatorio de widget de calendario 2020 es un notable planificador diario fácil de usar. Incluso puede ver todo como una simple lista de eventos en lugar de en la vista de calendario, para que sepa exactamente lo que está sucediendo en su vida y cómo organizar y planificar su agenda.</p>
      	<h6 className="autor"> Simple Mobile Tools </h6>
      </div>
      <div className="features">
      	<h2 className="titulo"> Funcionalidades </h2>
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
      <div className="permisos">
      	<h2 className="titulo"> Permisos </h2>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso1.png' alt="boot completed"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Le permite a la aplicación recibir el Intent que se emite luego de que el sistema haya terminado el proceso 
		      		de boot. Aunque este permiso no tiene implicaciones directas sobre la seguridad, podría incrementar el tiempo que 
		      		le toma al sistema empezar (afectaría la experiencia de usuario) y permitirle a la aplicación ejecutarse sin que 
		      		el usuario lo sepa. 
		      		Protection level: normal</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso2.png' alt="read contacts"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Le permite a la aplicación leer la información de los contactos del usuario.
			   		Protection level: dangerous</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso3.png' alt="vibrate"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Permite acceso al vibrador. 
			   		Protection level: normal</p>
			   	</div>
		    </div> 
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso4.png' alt="read calendar"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Le permite a la aplicación leer la información del calendario del usuario.
			   		Protection level: dangerous</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso5.png' alt="write calendar"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Le permite a la aplicación escribir la información del calendario del usuario.
			   		Protection level: dangerous</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso6.png' alt="wake locks"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Permite el uso de WakeLocks, los cuales le permiten a la aplicación mantener el dispositivo encendido (evitar que el procesador duerma o que la pantalla se apague).
			   		Protection level: normal</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso7.png' alt="write external storage"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p>  Le permite a la aplicación escribir en el almacenamiento externo. Para las API de nivel 19 o superior este permiso no es necesario para leer/escribir archivos en
			   		los directorios específicos de la aplicación.
			   		Protection level: dangerous </p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso8.png' alt="use fingerprint"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Permite usar el hardware de huella dactilar.</p>
			   	</div>
		    </div>
		    <div className="row permiso">
			   	<div className="col-md-6">
			     	<img src ='../permiso9.png' alt="faketouch"/>
			   	</div>
			   	<div className="col-md-6">
			   		<p> Esto no es un permiso sino un requisito de hardware/software, Google Play los usa para filtrar y solo presentar la aplicación a los dispositivos que los cumplan.
			   		En este caso, permite a los dispositivos que no tienen las capacidades <span className="italic">touchscreen</span> instalar la aplicación. </p>
			   		<p> Número de dispositivos soportados según Google Play:</p>
			   		<ul>
			   			<li> Se requiere <span className="italic">touchscreen</span> y no <span className="italic">faketouch</span>: 1500 </li>
			   			<li> Se requiere <span className="italic">faketouch</span> y no <span className="italic">touchscreen</span>: 860 </li>
			   			<li> No se requiere ninguno: 1800 </li>
			   		</ul>
			   	</div>
		    </div>
			</div>
		</div>
  );
}

export default Aplicacion;