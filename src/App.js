import React from 'react';
import "./index.css"
import "./reset.css"
import c from './Imagenes/c++.jpg';
import birrete from './Imagenes/birrete.png';
import p from './Imagenes/p.jpg';
import css from './Imagenes/css.jpg';
import gmail from './Imagenes/gmail.png';
import html5 from './Imagenes/html5.jpg';
import js from './Imagenes/js.jpg';
import maletin from './Imagenes/maletin.png';
import mysql from './Imagenes/MySQL.jpg';
import office from './Imagenes/office.jpg';
import python from './Imagenes/python.jpg';
import software from './Imagenes/software.png';
import whatsapp from './Imagenes/whatsapp.png';

class App extends React.Component {

  render() {
    return (
      <body>
        <meta charset="UTF-8"/>
        <title>Intro</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="caja_principal">
          <div className="parte_superior">
            <div>
              <img src={p} height="200px" width="612px" alt="Perfil" />
            </div>
            <div className="informacion1">
              <div className="nombre">
                <p className="t_nombre">
                  LUIS OVIEDO
                  </p>
              </div>
              <div className="linea">

              </div>
              <div className="titulo">
                <p className="titulo_1">
                  PERFIL PROFESIONAL
                  </p>
              </div>
            </div>
          </div>
          <div className="caja">
            <div className="parte_izquierda">
              <div className="habilidades">
                <div className="perfil">
                  <p className="t_perfil">
                    HABILIDADES
                      </p>
                </div>
                <div className="perfil2">
                  <p className="t_perfil2">
                    DESARROLLO MÓVIL
                      </p>
                </div>
                <div className="perfil3">
                  <p className="t_perfil3">
                    PROGRAMACIÓN
                      </p>
                </div>
                <div className="perfil4">
                  <p className="t_perfil4">
                    BASE DE DATOS
                      </p>
                </div>
              </div>
              <div className="acerda_de">
                <p className="acerca">
                  ACERCA DE
                  </p>
                <div className="barra">

                </div>
                <p className="intro">
                  22 años. Egresado de la Universidad Tecnológica de Bolívar
                  como Ingeniero de Sistemas y Computación. Apacionado por el
                  desarrollo de software, programación y base de datos. Me caracterizo
                  por el fácil aprendizaje, trabajo en equipo y responsabilidad.
                  </p>
              </div>
              <div className="datos">
                <p className="datos1">
                  DATOS PERSONALES
                  </p>
                <div className="barra2">

                </div>
                <p className="datos2">
                  Nombre completo
                  </p>
                <p className="datos3">
                  Luis Carlos Oviedo Talaigua
                  </p>
                <p className="datos4">
                  Fecha de nacimiento
                  </p>
                <p className="datos5">
                  4 de Febrero 1998
                  </p>
              </div>
              <div className="contac">
                <p className="contacto">
                  CONTÁCTO
                  </p>
                <div className="barra3">

                </div>
                <div className="whatsapp">
                  <div className="w_icon">
                    <div>
                      <img src={whatsapp} height="40px" width="40px" alt="whatsapp" />
                    </div>
                  </div>
                  <p className="t_w">
                    31135347423
                      </p>
                </div>
                <div className="gmail">
                  <div className="g_icon">
                    <div>
                      <img src={gmail} height="40px" width="40px" alt="imagen de maletin" />
                    </div>
                  </div>
                  <p className="t_w">
                    luisoviedo@gmail.com
                      </p>
                </div>
              </div>
            </div>
            <div className="parte_derecha">
              <div className="experiencia">
                <div className="imagen">
                  <div>
                    <img src={maletin} height="60px" width="60px" alt="maletin" />
                  </div>
                </div>
                <div className="titulo2">
                  <p className="t_titulo2">
                    EXPERIENCIA LABORAL
                      </p>
                </div>
                <div className="cuadro1">
                  <p className="empresa1">
                    Experiencia laboral 1
                      </p>
                  <p className="labor1">
                    Lorem ipsum excepturi eaque assumenda sapiente mollitia odio illo. Ipsum quibusdam nobis,
                    repellat assumenda qui aliquam suscipit.
                      </p>
                </div>
                <div className="cuadro2">
                  <p className="empresa2">
                    Experiencia laboral 2
                      </p>
                  <p className="labor2">
                    Lorem ipsum excepturi eaque assumenda sapiente mollitia odio illo. Ipsum quibusdam nobis,
                    repellat assumenda qui aliquam suscipit.
                      </p>
                </div>
                <div className="cuadro3">
                  <div className="imagen2">
                    <div>
                      <img src={birrete} height="70px" width="70px" alt="birrete" />
                    </div>
                  </div>
                  <p className="t_titulo3">
                    FORMACIÓN ACADÉMICA
                      </p>
                </div>
                <div className="cuadro4">
                  <div className="cuadro4_1">
                    <p className="info1">
                      Universidad Tenológica de Bolívar
                          </p>
                    <p className="info2">
                      Ingeniero de Sistemas y Computación
                          </p>
                  </div>
                  <div className="cuadro4_2">
                    <p className="info1">
                      Inst. Educativa Altos del Rosario
                          </p>
                    <p className="info2">
                      Bachiller
                          </p>
                  </div>
                </div>

                <div className="cuadro5">
                  <div className="imagen3">
                    <div>
                      <img src={software} height="60px" width="60px" alt="software" />
                    </div>
                  </div>
                  <p className="t_titulo4">
                    MANEJO DE SOFTWARE
                      </p>
                </div>
                <div class="cuadro6">
                        <div class="imagen4">
                            <div class="porcen1">
                                <div>
                                    <img src={html5} height="40px" width="40px" alt="html"/>
                                </div>
                            </div>
                            <p class="hd">30%</p>
                        </div>
                        <div class="imagen5">
                            <div class="porcen2">
                                <div>
                                    <img src={css} height="40px" width="40px" alt="css"/>
                                </div>
                            </div>
                            <p class="hd">30%</p>
                        </div>
                        <div class="imagen6">
                            <div class="porcen3">
                                <div>
                                    <img src={js} height="40px" width="40px" alt="js"/>
                                </div>
                            </div>
                            <p class="hd">30%</p>
                        </div>
                        <div class="imagen7">
                            <div class="porcen4">
                                <div>
                                    <img src={python} height="40px" width="40px" alt="python"/>
                                </div>
                            </div>
                            <p class="hd">80%</p>
                        </div>
                        <div class="imagen8">
                            <div class="porcen5">
                                <div>
                                    <img src={c} height="40px" width="40px" alt="c++"/>
                                </div>
                            </div>
                            <p class="hd">90%</p>
                        </div>
                        <div class="imagen9">
                            <div class="porcen6">
                                <div>
                                    <img src={mysql} height="40px" width="60px" alt="mysql"/>
                                </div>
                            </div>
                            <p class="hd">75%</p>
                        </div>
                        <div class="imagen10">
                            <div class="porcen7">
                                <div>
                                    <img src={office} height="40px" width="60px" alt="office"/>
                                </div>
                            </div>
                            <p class="hd">95%</p>
                        </div>
                    </div>
                <div className="cuadro7">

                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
