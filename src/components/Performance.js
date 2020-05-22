import React from "react";
import ReactPlayer from 'react-player'
import './Style.css'

class Performance extends React.Component {

	ref = player => {
    this.player = player
  }

	render() {
		return (
			<div className = "Performance Pagina">
				<div className="Perfilamiento seccion">
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
							<p> En el vídeo es posible observar lo siguiente: </p>
							<ul>
                <li>Se comprueba que la aplicación funciona completamente offline, dado que en ningún momento durante la
                prueba hay tráfico.</li>
                <li>El uso de memoria arranca alrededor de 80MB pero a medida que se usa la aplicación este incrementa 
                hasta llegar a los 180MB.</li>
                <li>Cuando se activa la sincronización CalDAV la aplicación sigue consumiendo memoria aún cuando es detenida,
                 mientras que cuando está desactivada el consumo se reduce casi por completo (minuto 3:45).</li>
              </ul>
						</div>
					</div>					
					<p> Veámos el código...</p>
					<div className="row"> 
						<div className="col-md-4">
							<img src='../caldav1.png' alt="" />
							<p> </p>
							<img src='../caldav2.png' alt="" />
						</div>
						<div className="col-md-8">
							<p> Para estar pendiente de las sincronización con otros calendarios la aplicación tiene un <span className="italic">Job Service</span> que 
								se encarga de estar pendiente a los cambios que ocurran en otros calendarios. Este job solo se destruye cuando se destruye la
							 	aplicación y no cuando esta es pausada o detenida, lo cual lleva a que este job siga corriendo en background y consumiendo memoria.</p>
						</div>
					</div>
				</div>
				<div className="Overdraw seccion">
					<h2 className="titulo"> Overdraw </h2>
					<div className="row">
						<div className="col-md-4">
							<ReactPlayer 
								ref={this.ref}
								className="react-player"
								url = "../overdraw.mp4"
								width = "100%"
								controls = {true} />
						</div>
						<div className="col-md-8">
							<p> En general, la forma en la que la aplicación pinta los componentes es buena. 
							A excepción de cuando se viaja de la vista anual a la vista mensual, o de la mensual a la diaria, 
							dando click en algún día (minuto 1:49). </p>
							<p className="bold">¿Por qué no ocurre lo mismo cuando se usa la funcionalidad de cambiar de vista (minuto 0:00)? </p>
							<p>Cuando se usa <span className="italic">cambiar vista</span> la aplicación remueve todos los fragmentos
							anteriores antes de añadir el nuevo. Por el contrario, cuando se navega entre la vistas anual, mensual y diaria
							seleccionando un día la aplicación sólo añade el nuevo fragmento, lo cual lleva a que haya un fragmento sobre otro.</p>
							<p> Veámos el código... </p>
						</div>
					</div>	
					<div className="row">
						<div className="col-md-6">
							<h5 className="titulo2 textCenter"> Cambiar vista </h5>
							<img src='../cambiovista3.png' alt="" />
							<p className="overdraw"> Cuando se selecciona la opción <span className="italic">change_view</span> se ejecuta el método <span className="italic">showViewDialog()</span> </p>
							<img src='../cambiovista2.png' alt="" />
							<p className="overdraw"> Una vez se selecciona la vista se llama el método  <span className="italic">updateView()</span> que 
							 a su vez llama a <span className="italic">updateViewPager()</span> que se encarga de quitar los fragmentos anteriores (líneas 662-664)
							 y poner el fragmento elegido (línea 675).</p>
							<img src='../cambiovista1.png' alt="" />
						</div>
						<div className="col-md-6">
							<h5 className="titulo2 textCenter"> Click en algún día </h5>
							<p className="overdraw">En el fragmento del año (vista anual) en caso de ocurrir un click se llama el método 
							<span className="italic">openMonthFromYearly()</span> pasándole por parámetro la fecha seleccionada.</p>
							<img src='../click1.png' alt="" />
							<p className="overdraw">En el fragmento del mes (vista mensual) en caso de ocurrir un click se llama el método 
							<span className="italic">openDayFromMonthly()</span> pasándole por parámetro la fecha seleccionada.</p>
							<img src='../click2.png' alt="" />
							<p className="overdraw"> Por útlimo, en estos métodos se puede observar que en lugar de remover los fragmentos 
							anteriores y agregar el seleccionado, sólo se agrega el nuevo (líneas 688 y 705).</p>
							<img src='../click3.png' alt="" />
						</div>
					</div>
				</div>
				<div className="Manejo de threads seccion">
					<h2 className="titulo"> Manejo de threads </h2>
					<div className="row">
						<div className="col-md-4">
							<img src="../threads1.png" alt="threads" />
						</div>
						<div className="col-md-8">
						<p> Para realizar tareas que son bloqueantes, como accesos a la base de datos local, o tareas en backgroung, como 
						revisar si hay actualizaciones en los calendarios sincronizados, la aplicación hace uso de la función <span className="italic">ensureBackgroudThread</span>. 
						Esta función se encarga de crear un thread que ejecuta la tarea. Algunos ejemplos...</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<img src="../threads2.png" alt="sincronizar" />
							<p className="overdraw textCenter">Sincronizar los eventos de otros calendarios</p>
						</div>
						<div className="col-md-6">
							<img src="../threads4.png" alt="eliminar" />
							<p className="overdraw textCenter">Eliminar un evento de la base de datos local</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<img src="../threads5.png" alt="consulta db" />
							<p className="overdraw textCenter">Cuando se crea una <span className="italic">EventActivity</span> para 
							hacer una consulta a la base de datos respecto a los tipos de eventos </p>
						</div>
						<div className="col-md-6">
							<img src="../threads6.png" alt="festivos" />
							<p className="overdraw textCenter">Añadir los festivos de un país</p>
						</div>
					</div>
				</div>
				<div className="micro-optimizaciones">
					<h2 className="titulo"> Micro-optimizaciones </h2>
					<div className="row">
						<div className="col-md-6">						
							<img src="../hashmap.png" alt="hashmap"/>
							<p className="overdraw textCenter"> Usar <span className="italic">SparseArray</span> en lugar de  <span className="italic">HashMap</span> </p>
						</div>
						<div className="col-md-6">
							<img src="../find.png" alt="find"/>
							<p className="overdraw textCenter"> No usar <span className="italic">findViewById</span>, en su lugar hacer esto: <a href="https://developer.android.com/topic/libraries/data-binding/index.html" target="blank">Data Binding</a> </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Performance;