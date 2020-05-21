import React from "react";
import './Style.css'

function Aplicacion() {
	return (
		<div className="Pagina">

			<div className="permisos">
				<h2 className="titulo"> Permisos </h2>
				<br></br>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso1.png' alt="boot completed" />
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
						<img src='../permiso2.png' alt="read contacts" />
					</div>
					<div className="col-md-6">
						<p> Le permite a la aplicación leer la información de los contactos del usuario.
			   		Protection level: dangerous</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso3.png' alt="vibrate" />
					</div>
					<div className="col-md-6">
						<p> Permite acceso al vibrador.
			   		Protection level: normal</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso4.png' alt="read calendar" />
					</div>
					<div className="col-md-6">
						<p> Le permite a la aplicación leer la información del calendario del usuario.
			   		Protection level: dangerous</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso5.png' alt="write calendar" />
					</div>
					<div className="col-md-6">
						<p> Le permite a la aplicación escribir la información del calendario del usuario.
			   		Protection level: dangerous</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso6.png' alt="wake locks" />
					</div>
					<div className="col-md-6">
						<p> Permite el uso de WakeLocks, los cuales le permiten a la aplicación mantener el dispositivo encendido (evitar que el procesador duerma o que la pantalla se apague).
			   		Protection level: normal</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso7.png' alt="write external storage" />
					</div>
					<div className="col-md-6">
						<p>  Le permite a la aplicación escribir en el almacenamiento externo. Para las API de nivel 19 o superior este permiso no es necesario para leer/escribir archivos en
						los directorios específicos de la aplicación.
			   		Protection level: dangerous </p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso8.png' alt="use fingerprint" />
					</div>
					<div className="col-md-6">
						<p> Permite usar el hardware de huella dactilar.</p>
					</div>
				</div>
				<div className="row permiso">
					<div className="col-md-6">
						<img src='../permiso9.png' alt="faketouch" />
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
				<div className="row desing">
					<div className="col-md-6">
						<img src='../permiso9.png' alt="faketouch" />
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
			<div className="desing">
				<h2 className="titulo"> Diseño de UI/UX </h2>
				<br></br>
				<div className="row">
					<div className="col-md-6">
						<ul>
							<div className="titulo2 textCenter">Colores</div>
							<br></br>
							<p className="textCenter" >
								Aunque la aplicacion tiene la posibilidad de cambiar los colores de fondo y de letra, los colores
								originales de la aplicacion escogidos son el Naranja(#f67c01) y el Gris(#424242). Colores que dan la apriencia
								de un estilo simple pero atractivo.
							</p>
							<img className="textCenter" style={{ width: '60%' }} src='https://i.imgur.com/oJwCSA4.png' alt="colors" />
							<br></br>
							<p className="textCenter" >
								La decision de cambiar colores puede ayudar a personas con discapacidad visual a poder disfrutar de esta aplicacion.
								Ademas de estos tambien se encuentran los colores de los eventos,rojo(#ec2e2a),azul(#1565c0) y verde(#ec2e2a).Como se puede
								observar en la siguiente imagen:
							</p>
							<img className="textCenter" src='https://i.imgur.com/nutEDrB.png' alt="colors" />
						</ul>
					</div>
					<div className="col-md-6">
						<ul>

							<div className="titulo2 textCenter" >Fuentes</div>
							<br></br>
							<p className="textCenter">
								La aplicacion hace uso de una unica fuente <span className="italic">Sans-serif-light</span> para todos lo apartados de
								su interfaz. Se incluyen cambios de propiedades a la fuente, como bold o el font size, pero no se incluyen otras familias de fuentes
							</p>
							<img className="textCenter" style={{ width: '90%' }} src='https://i.imgur.com/u5hBMLb.png' alt="colors" />
						</ul>
					</div>
					<div className="col-md-12">
							<div className="titulo2 textCenter" >User experience</div>
							<br></br>
							<p className="textCenter" style={{ width: '60%' }}>
								En cuanto a la experiencia de usuario de la apliacion encontramos que es una aplicacion
								bastante intuitiva en muchos aspectos, como lo son agregar una nueva tarea o ver las tareas actuales,
								pero destacamos un par de cosas que pueden ser mejoradas.
								<br></br>
								<br></br>
								<div className="titulo3 textCenter" >Boton cambiar vista</div>
							</p>
						<div className="row">
							<div className="col-md-5">
								<p className="textCenter" style={{ width: '60%' }} >
									En primera instacia esta el boton de cambiar vista el mismo comportamiento para la mayoria de las vistas.
								</p>
								<img className="textCenter" style={{ width: '60%' }} src='https://i.imgur.com/NFOEFoM.png' alt="colors" />
							</div>
							<div className="col-md-2">
								<img className="textCenter" style={{ width: '80%', marginTop: "20%" }} src='https://i.imgur.com/mxJHKM3.png' alt="colors" />
							</div>
							<div className="col-md-5">
								<p className="textCenter" style={{ width: '60%' }}>
									Sin embargo, para la vista de eventos en la cual el boton cambia a ser un boton de ir al dia de hoy.
								</p>
								<img className="textCenter" style={{ width: '50%' }} src='https://i.imgur.com/qKu9VjZ.png' alt="colors" />
								<br></br>

							</div>
						</div>
						<p className="textCenter" style={{ width: '60%' }}>
							Este cambio en la funcionalidad de el boton y
							la posicion confunden al usuario, el cual esperaria que se comportara como se comporta en todas las otras vista.
							Entendemos que la aplicacion. Entendemos que los desarrolladores quieren mantener la aplicacion simple y 
							minimalista, pero se podria incorporar que el boton en la vista de eventos cambie cuando se este en el dia
							de hoy como podemos observar en las otras vistas.
							
						</p>
						<video className="textCenter" 	width="600" height="600" autoPlay muted>
							<source src="https://i.imgur.com/2fyyT67.mp4" type="video/mp4"/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aplicacion;