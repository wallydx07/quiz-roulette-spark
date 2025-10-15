import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import emprendedorismoHero from "@/assets/emprendedurismo-hero.jpg";
import turismoHero from "@/assets/turismo-hero.jpg";
import emprendedorismoIcon from "@/assets/emprendedurismo-icon.jpg";
import turismoIcon from "@/assets/turismo-icon.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Clock, GraduationCap, Briefcase, Target, Users } from "lucide-react";

export default function Carreras() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Exposición Virtual de Carreras
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Instituto de Educación Superior Intercultural "Campinta Guazú Gloria Pérez"
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <GraduationCap className="mr-2 h-5 w-5" />
              2 Tecnicaturas Superiores
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              <Clock className="mr-2 h-5 w-5" />
              3 Años de duración
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Tabs defaultValue="emprendedurismo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="emprendedurismo" className="text-base">
              Emprendedurismo y Economía Comunitaria
            </TabsTrigger>
            <TabsTrigger value="turismo" className="text-base">
              Guía de Turismo Comunitario
            </TabsTrigger>
          </TabsList>

          {/* Emprendedurismo Tab */}
          <TabsContent value="emprendedurismo" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-96">
                <img
                  src={emprendedorismoHero}
                  alt="Emprendedurismo y Economía Comunitaria"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      Tecnicatura Superior en Emprendedurismo y Economía Comunitaria
                    </h2>
                    <p className="text-lg">Formando líderes empresariales comunitarios</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <img src={emprendedorismoIcon} alt="Icon" className="w-12 h-12 rounded" />
                    <div>
                      <h3 className="font-semibold mb-1">Título</h3>
                      <p className="text-sm text-muted-foreground">
                        Técnico Superior en Emprendedurismo y Economía Comunitaria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Briefcase className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Familia Profesional</h3>
                      <p className="text-sm text-muted-foreground">Administración</p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="fundamentacion">
                    <AccordionTrigger className="text-lg font-semibold">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Fundamentación
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        La región del NOA, y en particular la Provincia de Jujuy, se caracteriza por conservar un
                        panorama cultural muy amplio y diverso, abarcando una gran pluralidad de grupos sociales,
                        étnicos y culturales. En este contexto, el universo indígena provincial se ha destacado por
                        conservar, revitalizar y desarrollar su cultura originaria.
                      </p>
                      <p>
                        La carrera busca otorgar nuevas condiciones de inclusión, gobernanza y gestión estratégica de
                        recursos comunitarios, permitiendo a los pueblos originarios gestionar e incluirse en
                        diferentes campos del Emprendedurismo y las Economías Comunitarias Regionales.
                      </p>
                      <p>
                        Esta carrera profesionaliza, capacita y pone en acción a los agentes indígenas y actores
                        involucrados en contextos socioeconómicos, brindando sustentabilidad a las comunidades y
                        mejorando la eficiencia productiva y empresarial.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="objetivos">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Target className="mr-2 h-5 w-5" />
                      Objetivos
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Objetivo General</h4>
                        <p className="text-muted-foreground">
                          Formar Técnicos Superiores con alto sentido emprendedor y administrador sobre los recursos
                          comunitarios, posibilitando acciones de consolidación e innovaciones comerciales desde una
                          responsabilidad social, generando independencia y gobernanza sobre los propios recursos
                          comunitarios indígenas.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Objetivos Específicos</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Formar agentes emprendedores con capacidad de gestión e innovación en las comunidades
                            originarias
                          </li>
                          <li>
                            Formar técnicos con actitud reflexiva y crítica para la formulación de proyectos vinculados
                            a la Economía Comunitaria
                          </li>
                          <li>
                            Asegurar el aprendizaje teórico-práctico fortaleciendo ámbitos espirituales y culturales
                          </li>
                          <li>
                            Promover el emprendedurismo como herramienta para enfrentar la exclusión y marginalidad
                          </li>
                          <li>Brindar conocimiento sobre procesos técnicos de la Economía Comunitaria</li>
                          <li>
                            Capacitar en planificación, organización y fomento de entidades de Economía Comunitaria
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="perfil">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Users className="mr-2 h-5 w-5" />
                      Perfil del Egresado
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>El egresado estará capacitado para:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Desarrollar e implementar emprendimientos de diferente naturaleza, logrando sustentabilidad
                          económica y cultural
                        </li>
                        <li>Gestionar proyectos de manera autónoma enfocándose en negocios comunitarios</li>
                        <li>Visualizar nuevos negocios de base comercial y servicios comunitarios indígenas</li>
                        <li>
                          Desarrollar habilidades técnicas, administrativas y contables para promover el autoempleo
                        </li>
                        <li>Constituirse en agente de desarrollo sustentable a nivel local y regional</li>
                        <li>
                          Reconocer recursos colectivos que permitan el crecimiento y calidad corporativa sin renunciar
                          a la identidad originaria
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum">
                    <AccordionTrigger className="text-lg font-semibold">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Estructura Curricular
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Primer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Introducción al Emprendedurismo</li>
                          <li>• Historia Latinoamericana y Argentina</li>
                          <li>• Economía Regional, Social y Solidaria</li>
                          <li>• TIC y Emprendedurismo</li>
                          <li>• Lengua, Identidad y Cosmovisión Indígena</li>
                          <li>• Contabilidad Básica</li>
                          <li>• Teoría General de la Administración</li>
                          <li>• Psicología Organizacional</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Segundo Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Economía Comunitaria</li>
                          <li>• Legislación Aplicada al Emprendedurismo</li>
                          <li>• Formulación y Evaluación de Proyectos</li>
                          <li>• Comercialización y Estudios del Mercado</li>
                          <li>• Sistemas de Gestión y Financiamiento</li>
                          <li>• Emprendedurismo, Redes y Capital Social</li>
                          <li>• Organización, Producción y Manufactura</li>
                          <li>• Metodología de la Investigación Social</li>
                          <li>• Práctica Profesionalizante I</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Tercer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Emprendedurismo y PyMes</li>
                          <li>• Gerencia y Liderazgo Socioeconómico</li>
                          <li>• Recursos Humanos y el Buen Vivir</li>
                          <li>• Inversión, Innovación y Creatividad</li>
                          <li>• Planificación y Estrategias Comerciales</li>
                          <li>• Matemática Financiera</li>
                          <li>• Práctica Profesionalizante II</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="campo">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Ámbito Socio Ocupacional
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>El egresado podrá desempeñarse en:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Ámbito de la sociedad civil:</strong> Cooperativas de producción, organizaciones
                          regionales de producción, emprendimientos locales, ONG, Centros vecinales
                        </li>
                        <li>
                          <strong>Ámbito público:</strong> Consultorías, asesoramientos
                        </li>
                        <li>
                          <strong>Ámbito privado:</strong> Emprendimientos privados y PyMEs
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Turismo Tab */}
          <TabsContent value="turismo" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-96">
                <img
                  src={turismoHero}
                  alt="Guía de Turismo Comunitario"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      Tecnicatura Superior en Guía de Turismo Comunitario
                    </h2>
                    <p className="text-lg">Preservando y compartiendo nuestro patrimonio cultural</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <img src={turismoIcon} alt="Icon" className="w-12 h-12 rounded" />
                    <div>
                      <h3 className="font-semibold mb-1">Título</h3>
                      <p className="text-sm text-muted-foreground">
                        Técnico Superior Guía de Turismo Comunitario
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Briefcase className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Familia Profesional</h3>
                      <p className="text-sm text-muted-foreground">Turismo</p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="fundamentacion">
                    <AccordionTrigger className="text-lg font-semibold">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Fundamentación
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        El Turismo está considerado como una de las principales actividades económicas en todo el
                        mundo, generadora de recursos económicos en diferentes rubros de producción de bienes,
                        servicios y puestas en valor del territorio.
                      </p>
                      <p>
                        Las comunidades originarias buscan estrategias para involucrarse directamente con la
                        autogestión y administración turística de sus valores y bienes, generando beneficios para las
                        propias comunidades. El turismo es concebido como un complemento económico y laboral para
                        potenciar las actividades tradicionales.
                      </p>
                      <p>
                        La propuesta se centra en un <strong>TURISMO INDÍGENA DE BASE COMUNITARIA</strong>, que aspira
                        a que las comunidades prosperen y vivan dignamente, haciendo del turismo una actividad
                        socialmente solidaria, ambientalmente responsable, culturalmente enriquecedora y económicamente
                        viable.
                      </p>
                      <p>
                        Se busca profesionalizar actores relacionados con la identidad cultural de los pueblos
                        indígenas, formando Guías de Turismo Comunitario con sentido de pertenencia territorial y
                        cultural, defensores del patrimonio comunitario.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="objetivos">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Target className="mr-2 h-5 w-5" />
                      Objetivos
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Formar recursos humanos con fuerte sentido de pertenencia cultural y con capacidades,
                        conocimiento, experiencias y habilidades que les permitan desempeñarse con eficiencia como
                        facilitadores, promotores, gestores y protectores de sus patrimonios comunitarios, permitiendo
                        hacer conocer y disfrutar de ese patrimonio a turistas y visitantes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="perfil">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Users className="mr-2 h-5 w-5" />
                      Perfil del Egresado
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        <strong>Competencia General:</strong> El Guía de Turismo Comunitario está capacitado para
                        informar, motivar, orientar, guiar y asistir a visitantes y turistas, poniendo en valor y
                        resguardo el patrimonio cultural y natural.
                      </p>
                      <p>
                        Como Prestador de Servicios Turísticos Comunitarios, estará capacitado para comprender, diseñar
                        y promover un guiado turístico local desde una narrativa con perspectiva identitaria indígena,
                        socialmente solidaria, culturalmente enriquecedora, ambientalmente responsable y económicamente
                        viable.
                      </p>
                      <p>El profesional estará preparado para:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Participar en la programación del servicio turístico</li>
                        <li>Coordinar el viaje y asistir al pasajero</li>
                        <li>Facilitar el vínculo con recursos naturales y culturales</li>
                        <li>Promocionar el patrimonio turístico</li>
                        <li>Prestar servicios turísticos de guía</li>
                        <li>Desarrollar y ordenar un guiado territorial organizado</li>
                        <li>Realizar actividades de recepción, acompañamiento y conducción</li>
                        <li>Proponer prácticas solidarias y democráticas</li>
                        <li>Actuar como custodio y guardián del patrimonio comunitario</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum">
                    <AccordionTrigger className="text-lg font-semibold">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Estructura Curricular
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Primer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Introducción al Turismo</li>
                          <li>• Servicios Turísticos</li>
                          <li>• Historia de Jujuy y los Pueblos Indígenas</li>
                          <li>• Territorio, Medio Ambiente y Cosmovisión</li>
                          <li>• Práctica Profesionalizante de Guiado</li>
                          <li>• Psicología Social del Turismo</li>
                          <li>• Elementos de Pragmática, Fonética y Gramática Quechua</li>
                          <li>• Inglés</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Segundo Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Antropología Social y Cultural</li>
                          <li>• Patrimonio de los Pueblos Indígenas</li>
                          <li>• Expresión Oral y Corporal</li>
                          <li>• Desarrollo Turístico y El Buen Vivir</li>
                          <li>• Reconocimiento de Flora y Fauna</li>
                          <li>• Animación Sociocultural</li>
                          <li>• Elementos de Pragmática, Fonética y Gramática Guaraní</li>
                          <li>• Inglés II</li>
                          <li>• Práctica Profesionalizante de Guiado II</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Tercer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Geografía Turística de Argentina</li>
                          <li>• Turismo de Base Comunitaria y Gestión</li>
                          <li>• Elementos de Turismo Accesible</li>
                          <li>• Primeros Auxilios y Seguridad en Viajes</li>
                          <li>• Inglés III</li>
                          <li>• Práctica Profesionalizante de Guiado III</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="campo">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Ámbito Socio Ocupacional
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>
                        El Guía de Turismo Comunitario puede ser contratado para brindar servicios turísticos en su
                        comunidad u otras comunidades para:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Empresas de servicios turísticos</li>
                        <li>Emprendimientos locales de viajes y turismo</li>
                        <li>Agencias de viajes</li>
                        <li>Organismos públicos relacionados con el turismo</li>
                        <li>Asociaciones que integren comunidades indígenas en circuitos turísticos</li>
                      </ul>
                      <p className="mt-4">
                        Siempre respetando los principios del Turismo Indígena de Base Comunitaria y los derechos
                        indígenas vigentes en el marco jurídico local, nacional e internacional.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Info Section */}
        <Card className="mt-8 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Requisitos de Ingreso</CardTitle>
            <CardDescription>Condiciones generales para ambas carreras</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Poseer título de Nivel Medio (Secundaria completa)</li>
              <li>
                Los mayores de 25 años que no hayan finalizado el Nivel Medio podrán acogerse a la Resolución
                114-SE-02 vigente en las Instituciones Formadoras del Sistema Educativo Provincial
              </li>
              <li>Presentación de documentos personales y académicos según normativa vigente</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
