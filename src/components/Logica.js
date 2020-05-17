import React from "react";
import './Style.css'

function Logica() {
    return (
        <div className="Pagina">
            <div className="descripcion textCenter">
                <h2 className="titulo"> Repositorio </h2>
                <br></br>
                <p>
                    El repositorio que contiene el codigo de la aplicacion se encuentra a continuacion:
                        <a href="https://github.com/SimpleMobileTools/Simple-Calendar" target="_blank" rel="noopener noreferrer"><img className="textCenter" style={{ width: '15%' }} src='https://i.imgur.com/DHupC8M.png' alt="colors" /></a>
                </p>
                <p className="textCenter" style={{ width: '50%' }} >
                    El lenguaje de progamacion usado para desarrollar la aplicacion es Kotlin, a traves de Android Studio.
                    La aplicacion cuenta con alrededor de 147.927 lineas de codigo como podemos observar a continuacion
                    </p>
                <img className="textCenter" style={{ width: '50%' }} src='https://i.imgur.com/Sucr46A.png' alt="lineasCodigo" />
                <p className="textCenter" style={{ width: '30%' }} >
                    Una vez construimos el proyecto, podemos observar que la aplicacion tiene la siguiente estructura logica.
                    </p>
                <img className="textCenter" style={{ width: '30%' }} src='https://i.imgur.com/FsfhxgN.png' alt="estructura" />
                <p className="textCenter" style={{ width: '30%' }} >
                    Ahora realizaremos un breve analisis de cada carpeta.
                    </p>
                <div className="row">
                    <div className="col-md-12">
                        <div className="titulo2 textCenter" >Activities</div>
                        <br></br>
                        <p>En esta carpeta se encuentran todas las actividades de la aplicacion donde se realiza la parte de
                                        manejo de flow e inicializacion de las actividades.</p>

                        <img className="textCenter" style={{ width: '30%' }} src='https://i.imgur.com/1zOj63Q.png' alt="estructura" />
                        <br></br>
                        <div id="accordion" lass="mt-3">
                            <div class="card acordion   " >
                                <div class="card-header bg-dark text-white p-0" id="headingOne">
                                    <h5 class="mb-0 p-3 fontBig text-center" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">MainActivity</h5>
                                </div>

                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body bg-black text-white p-0">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <div class="card text-white bg-dark mb-6 carta" style={{ marginLeft: "18%" }}>
                                                    <div class="card-body">
                                                        <p className="textCenter" style={{ width:'100%' }}>
                                                            A continuacion podemos ver la estructura de la
                                                            actividad principal de la aplicacion y podemos ver como realiza una serie de comprobaciones como
                                                            lo son: comprobar permisos, comprobar si se tiene CalDAV activado, si la aplicacion necesita
                                                            actualizacion, etc. Si alguna de estas comprobaciones se cumple se empieza el proceso
                                                            de cada una. Ex: Se sincroniza el calendario con CalDAV para mostrar los ultimos eventos
                                                            agregados desde otras fuentes.
                                                                <img className="textCenter" style={{ height: '40rem',width: '70%' }} src='https://i.imgur.com/3dtwDVt.png' alt="mainverificaciones1" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="card text-white bg-dark mb-6 carta" style={{ marginLeft: "1%" }}>
                                                    <div class="card-body">
                                                        <p className="textCenter" style={{ width: '100%' }}>
                                                            La actividad principal tambien hace verificaciones cuando la aplicacion se resume, esta verificaciones
                                                            tienen relacion con las configuraciones que el usuario ha seleccionado. Esta verifica si los datos que
                                                            tiene el activity son congruentes con los datos del Fragment el cual tiene su propio ciclo
                                                            de vida y flujo.Una vez verificado los datos se actualiza los datos con StoreStateVariable.
                                                            Ademas cuando la aplicacion se pausa, tambien se guarda el estado.
                                                                <img className="textCenter" style={{ width: '100%', marginTop: "5%" }} src='https://i.imgur.com/3sDUykk.png' alt="mainverificaciones2" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="card text-white bg-dark mb-6 carta" style={{ marginLeft: "-1%", marginBottom: "1%" }}>
                                                    <div class="card-body">
                                                        <p className="textCenter" style={{ width: '100%' }}>
                                                            Esta activity tambien maneja la creacion del menu de opciones como se
                                                            puede observar a continuacion
                                                                <img className="textCenter" style={{ width: '100%', marginTop: "5%" }} src='https://i.imgur.com/qXdiuGV.png' alt="mainmenuopciones" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card acordion">
                                <div class="card-header bg-dark text-white p-0" id="headingTwo">
                                    <h5 class="mb-0 p-3 fontBig text-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Title 2</h5>
                                </div>

                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">Content 2</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="titulo2 textCenter" >Adapters</div>
                        <br></br>
                        <p className="textCenter" style={{ width: '100%' }}>
                            En cuanto a la experiencia de usuario de la apliacion encontramos que es una aplicacion
                            bastante intuitiva en muchos aspectos, como lo son agregar una nueva tarea o ver las tareas actuales,
                            pero destacamos un par de cosas que pueden ser mejoradas.
                            </p>
                    </div>
                    <div className="col-md-6">
                        <div className="titulo2 textCenter" >Database</div>
                        <br></br>
                        <p className="textCenter" style={{ width: '100%' }}>
                            En cuanto a la experiencia de usuario de la apliacion encontramos que es una aplicacion
                            bastante intuitiva en muchos aspectos, como lo son agregar una nueva tarea o ver las tareas actuales,
                            pero destacamos un par de cosas que pueden ser mejoradas.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Logica;