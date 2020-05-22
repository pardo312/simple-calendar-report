import React from "react";
import './Style.css'

function Testing() {
    return (
        <div className="Pagina">
            <div className="descripcion textCenter">
                <h2 className="titulo"> Test Realizados </h2>
                <br></br>           
                <p className="textCenter" style={{ width: '50%' }} >
                    La aplicacion se sometio a un conjunto de Test para encontrar errores que normalmente no se podrian encontrar manualmente. Para este reporte los
                    test que se realizaron fueron:   
                    </p>
                <div className="row">       
                    <div className="col-md-6">
                        <br></br>
                        <img className="textCenter" style={{ width: '50%' }} src='https://i.imgur.com/rVAcEOJ.png' alt="MonkeyTest" />
                        <br></br>
                        <p className="textCenter" style={{ width: '80%' }}>
                          Monkey testing es una clase de test para aplicaciones en la cual el
                          se le proporciona a la aplicación entradas aleatorias para encontrar fallos y errores en la aplicacion.
                          <br></br>
                          <br></br>
                          Debido a que la herramienta realiza entradas aleatorias, se realizaron numerosos intentos en los cuales la apliacion corria Sin
                          ningun error. En una de estas pruegas al ejecutar monkeyTest con 10.000 eventos y con la seed 125895181 se encontro un crash en la aplicacion como se muestra a 
                          continuacion:
                        </p>
                        <br></br>
                        <img className="textCenter" style={{ width: '70%' }} src='https://i.imgur.com/5vjKZ3Q.jpg' alt="MonkeyTest" />
                        <br></br>
                        <p className="textCenter" style={{ width: '80%' }}>
                          Sin embargo, el crash al cual estaba asociado la aplicacion correspondia a un error recurrente de Mono:Got IOException performing flipjava.io.IOException.
                          Debido a que este error no tiene que ver con la aplicacion, si no con los comandos aleatorios de Mono y como afectan al sistema en general y no
                          solo a la aplicacion, los resultados son inconclusos.
                        </p>
                        
                </div>

                    <div className="col-md-6">
                        <img className="textCenter" style={{ width: '50%' }} src='https://i.imgur.com/q3BPOgg.png' alt="roboTest" /> 
                        <br></br>
                        <p className="textCenter" style={{ width: '80%' }}>
                        Las pruebas de Robo Testing otorgadas por el TestLab de Firebase entregaron unos resultados bastante positivos, mostrando que para versiones
                        de android menores a Android 9.0(Figura 1 Carousel) la aplicacion funciona correctamente. Sin embargo si el celular cuenta con la version
                        9.0 (Figura 2 Carousel) nos damos cuenta que la aplicacion usa 5 interfaces que no pertenecen al SDK ni son compatibles. 
                        </p>
                        <div id="carouselExampleIndicators" class="carousel slide textCenter" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner" >
                                <div class="carousel-item active">
                                <img src="https://i.imgur.com/mqDaZbx.png" alt="database"/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://i.imgur.com/9BONliX.png" style={{ width: '80%' }}alt="model"/>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <br></br>
                        <p className="textCenter" style={{ width: '80%' }}>
                        Dos de estas interfaces son un falso positivo, ya que solo es necesario cambiar la nomenclatura del paquete para que pueda aceptar el nuevo estandar
                        de nombramiento de androidX. Este estandar se encarga de hacer mas claro cuales son los paquetes nativos de android y cuales son
                        paquetes de la apk. Los de android seguiran con su nomenclatura de android.* y los de la apk pasar a tener nomenclatura androidx.
                        Sin embargo las otras 3 hacen referencia a la interfaz AutoCompleteView la cual esta depreciada para Android Pie.
                        </p>
                    </div>

                    <div className="col-md-12">
                        <h2 className="titulo2"> Conclusiones</h2> 
                        <br></br>
                        <p className="textCenter" style={{ width: '80%' }}>
                        Como se pudieron observar en los test, la aplicacion esta bien diseñada y los desarroladores tuvieron en cuenta cada aspecto de la aplicacion
                        que pudiera generar un error. Probablemente estos desarrolladores realizaron pruebas como las que se realizaron en este informe e identificaron
                        errores en su aplicacion para poder solucionarlos. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="lint">
                <h2 className="titulo textCenter">Android Lint</h2>
                <p> Los resultados completos del lint se encuentran <a href="../lint-results.html" target="blank">aquí</a>. De este test se pueden resaltar lo siguiente:</p>
                <div className="row">
                    <div className="col-md-6">
                        <img src="../security.png" alt="security" />
                        <p className="overdraw">El BroadcastReceiver encargo de estar pendiente cuando el celular termina el proceso de booteo arroja una alerta de seguridad.
                        Esta debido que no se verifica que el intent que recibe sea el esperado, por lo tanto, otra aplicación podría enviar un intent falso que genere 
                        comportamientos indeseados en la aplicación. Apesar de esto, no es mu factible que esto ocurra pues el tipo de intent que se recibe solo puede ser enviado
                        por el sistema.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="../resources.png" alt="resources" />
                        <p className="overdraw">Se encontraron 25 recursos que nunca son usados, por lo tanto, podrían ser eliminados para mejorar el performance de la aplicación.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testing;