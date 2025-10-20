import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import emprendedorismoHero from "@/assets/emprendedurismo-hero.jpg";
import turismoHero from "@/assets/turismo-hero.jpg";
import emprendedorismoIcon from "@/assets/emprendedurismo-icon.jpg";
import turismoIcon from "@/assets/turismo-icon.jpg";
import emergenciasHero from "@/assets/emergencias-hero.jpg";
import emergenciasIcon from "@/assets/emergencias-icon.jpg";
import derechosHumanosHero from "@/assets/derechos-humanos-hero.jpg";
import derechosHumanosIcon from "@/assets/derechos-humanos-icon.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Clock, GraduationCap, Briefcase, Target, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Emprendedurismo images
import emprendedurismo1 from "@/assets/emprendedurismo/imagen-1.jpg";
import emprendedurismo2 from "@/assets/emprendedurismo/imagen-2.jpg";
import emprendedurismo3 from "@/assets/emprendedurismo/imagen-3.jpg";

// Turismo images
import turismo1 from "@/assets/turismo/imagen-1.jpg";
import turismo2 from "@/assets/turismo/imagen-2.jpg";
import turismo3 from "@/assets/turismo/imagen-3.jpg";

// Emergencias images
import emergencias1 from "@/assets/emergencias/imagen-1.jpg";
import emergencias2 from "@/assets/emergencias/imagen-2.jpg";
import emergencias3 from "@/assets/emergencias/imagen-3.jpg";

// Derechos Humanos images
import derechosHumanos1 from "@/assets/derechos-humanos/imagen-1.jpg";
import derechosHumanos2 from "@/assets/derechos-humanos/imagen-2.jpg";
import derechosHumanos3 from "@/assets/derechos-humanos/imagen-3.jpg";

export default function Carreras() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary z-10" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 z-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up drop-shadow-2xl tracking-tight">
            Exposición Virtual de Carreras
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 drop-shadow-lg font-medium animate-fade-in max-w-3xl mx-auto">
            Instituto de Educación Superior Intercultural "Campinta Guazú Gloria Pérez"
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
            <Badge className="text-base md:text-lg px-6 py-3 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-105">
              <GraduationCap className="mr-2 h-5 w-5" />
              4 Tecnicaturas Superiores
            </Badge>
            <Badge className="text-base md:text-lg px-6 py-3 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-105">
              <Clock className="mr-2 h-5 w-5" />
              3 Años de duración
            </Badge>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/50 to-transparent z-10" />
      </section>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Tabs defaultValue="emprendedurismo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 p-2 bg-card shadow-lg rounded-xl border border-border/50">
            <TabsTrigger 
              value="emprendedurismo" 
              className="text-sm lg:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              Emprendedurismo
            </TabsTrigger>
            <TabsTrigger 
              value="turismo" 
              className="text-sm lg:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              Turismo
            </TabsTrigger>
            <TabsTrigger 
              value="emergencias" 
              className="text-sm lg:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              Emergencias
            </TabsTrigger>
            <TabsTrigger 
              value="derechos" 
              className="text-sm lg:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              Derechos Humanos
            </TabsTrigger>
          </TabsList>

          {/* Emprendedurismo Tab */}
          <TabsContent value="emprendedurismo" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden shadow-elegant border-border/50 hover:shadow-xl transition-shadow duration-300">
              {/* Carrusel Hero */}
              <div className="relative h-72 md:h-[450px]">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emprendedorismoHero}
                          alt="Emprendedurismo y Economía Comunitaria"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emprendedurismo1}
                          alt="Estudiantes trabajando en equipo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emprendedurismo2}
                          alt="Taller de capacitación"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emprendedurismo3}
                          alt="Feria de emprendimientos"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Título sobrepuesto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pointer-events-none">
                  <div className="p-8 md:p-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 leading-tight">
                      Tecnicatura Superior en Emprendedurismo y Economía Comunitaria
                    </h2>
                    <p className="text-lg md:text-xl text-white/95 font-medium">Formando líderes empresariales comunitarios</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
                    <img src={emprendedorismoIcon} alt="Icon" className="w-14 h-14 rounded-lg shadow-sm" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Título</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Técnico Superior en Emprendedurismo y Economía Comunitaria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                    <Clock className="w-14 h-14 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
                    <Briefcase className="w-14 h-14 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Familia Profesional</h3>
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
            <Card className="overflow-hidden shadow-elegant border-border/50 hover:shadow-xl transition-shadow duration-300">
              {/* Carrusel Hero */}
              <div className="relative h-72 md:h-[450px]">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={turismoHero}
                          alt="Guía de Turismo Comunitario"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={turismo1}
                          alt="Turismo cultural"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={turismo2}
                          alt="Ecoturismo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={turismo3}
                          alt="Hospitalidad turística"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Título sobrepuesto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pointer-events-none">
                  <div className="p-8 md:p-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 leading-tight">
                      Tecnicatura Superior en Guía de Turismo Comunitario
                    </h2>
                    <p className="text-lg md:text-xl text-white/95 font-medium">Preservando y compartiendo nuestro patrimonio cultural</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
                    <img src={turismoIcon} alt="Icon" className="w-14 h-14 rounded-lg shadow-sm" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Título</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Técnico Superior Guía de Turismo Comunitario
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                    <Clock className="w-14 h-14 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
                    <Briefcase className="w-14 h-14 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Familia Profesional</h3>
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

          {/* Emergencias Tab */}
          <TabsContent value="emergencias" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden shadow-elegant border-border/50 hover:shadow-xl transition-shadow duration-300">
              {/* Carrusel Hero */}
              <div className="relative h-72 md:h-[450px]">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emergenciasHero}
                          alt="Gestión y Prevención de Emergencias"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emergencias1}
                          alt="Equipo de primeros respondedores"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emergencias2}
                          alt="Capacitación en prevención"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={emergencias3}
                          alt="Centro de comando"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Título sobrepuesto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pointer-events-none">
                  <div className="p-8 md:p-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 leading-tight">
                      Tecnicatura Superior en Gestión y Prevención de Emergencias
                    </h2>
                    <p className="text-lg md:text-xl text-white/95 font-medium">Protegiendo vidas y comunidades</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
                    <img src={emergenciasIcon} alt="Icon" className="w-14 h-14 rounded-lg shadow-sm" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Título</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Técnico Superior en Gestión y Prevención de Emergencias
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                    <Clock className="w-14 h-14 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
                    <Briefcase className="w-14 h-14 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Familia Profesional</h3>
                      <p className="text-sm text-muted-foreground">Seguridad, Ambiente e Higiene</p>
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
                        La Provincia de Jujuy enfrenta una notable carencia de profesionales capacitados en la gestión 
                        y prevención de emergencias. Esta tecnicatura está diseñada para abordar esta brecha, formando 
                        profesionales altamente capacitados que puedan asumir roles clave en la protección civil, 
                        organismos de respuesta y en el sector privado.
                      </p>
                      <p>
                        En un mundo donde desastres naturales, crisis sanitarias, accidentes industriales y otros eventos 
                        imprevistos pueden ocurrir en cualquier momento, es crucial contar con personal capacitado. Esta 
                        formación proporciona las habilidades necesarias para responder eficazmente ante situaciones de 
                        crisis, minimizando daños y protegiendo vidas.
                      </p>
                      <p>
                        La carrera es una respuesta necesaria ante los desafíos globales y locales que presenta el cambio 
                        climático. La capacidad de las comunidades para responder eficazmente a emergencias climáticas se 
                        vuelve cada vez más crítica.
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
                          Formar técnicos profesionales multidisciplinarios capacitados para la planificación, prevención, 
                          gestión y respuesta efectiva ante situaciones de emergencia, protegiendo vidas, minimizando 
                          daños materiales y ambientales, promoviendo el bienestar y la seguridad de la comunidad.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Objetivos Específicos</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Capacitar en la identificación y evaluación de riesgos asociados a desastres y emergencias</li>
                          <li>Desarrollar habilidades de planificación y gestión de estrategias de prevención y respuesta</li>
                          <li>Promover la colaboración interinstitucional para optimizar recursos y mejorar respuestas</li>
                          <li>Formar en técnicas de intervención, primeros auxilios, rescate y evacuación</li>
                          <li>Inculcar principios éticos y legales en la gestión de emergencias</li>
                          <li>Fomentar el conocimiento del territorio y adaptación estratégica</li>
                          <li>Desarrollar competencias operativas para intervención en emergencias naturales y tecnológicas</li>
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
                        <li>Identificar, evaluar y gestionar riesgos asociados a emergencias naturales y provocadas por el ser humano</li>
                        <li>Analizar riesgos y medidas preventivas, planificar y ejecutar acciones de emergencia</li>
                        <li>Llevar a cabo investigaciones en gestión de emergencias utilizando metodologías adecuadas</li>
                        <li>Estar familiarizado con el territorio y recursos naturales para adaptar estrategias</li>
                        <li>Intervenir en comunidades, liderando trabajo y promoviendo medidas de prevención</li>
                        <li>Participar activamente en la gestión de emergencias con experiencia práctica</li>
                        <li>Intervenir operativamente cumpliendo normas de seguridad en emergencias provocadas por riesgos diversos</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="campo">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Ámbito Socio Ocupacional
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Sector Público</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Ministerios y Secretarías de Seguridad y Emergencias (nacional, provincial, municipal)</li>
                          <li>Defensa Civil - planificación y respuesta a desastres</li>
                          <li>Agencias de Protección Civil</li>
                          <li>Cuerpo de Bomberos</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Sector Privado</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Industria Petrolera y Minera - gestión de riesgos operacionales</li>
                          <li>Empresas de Transporte y Logística</li>
                          <li>Grandes complejos comerciales y eventos masivos</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Derechos Humanos Tab */}
          <TabsContent value="derechos" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden shadow-elegant border-border/50 hover:shadow-xl transition-shadow duration-300">
              {/* Carrusel Hero */}
              <div className="relative h-72 md:h-[450px]">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={derechosHumanosHero}
                          alt="Derechos Humanos con Abordaje Integral e Inclusivo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={derechosHumanos1}
                          alt="Asamblea comunitaria"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={derechosHumanos2}
                          alt="Taller educativo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-72 md:h-[450px]">
                        <img
                          src={derechosHumanos3}
                          alt="Estudiantes en biblioteca"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Título sobrepuesto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pointer-events-none">
                  <div className="p-8 md:p-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 leading-tight">
                      Tecnicatura Superior en Derechos Humanos con Abordaje Integral e Inclusivo
                    </h2>
                    <p className="text-lg md:text-xl text-white/95 font-medium">Construyendo una sociedad más justa y equitativa</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
                    <img src={derechosHumanosIcon} alt="Icon" className="w-14 h-14 rounded-lg shadow-sm" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Título</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Técnico Superior en Derechos Humanos con Abordaje Integral e Inclusivo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                    <Clock className="w-14 h-14 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Duración</h3>
                      <p className="text-sm text-muted-foreground">3 años - Modalidad Presencial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
                    <Briefcase className="w-14 h-14 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold mb-1 text-base">Familia Profesional</h3>
                      <p className="text-sm text-muted-foreground">Desarrollo Humano</p>
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
                        Esta tecnicatura surge como respuesta a la necesidad de formar profesionales especializados en 
                        la defensa, promoción y protección de los derechos humanos desde un enfoque integral e inclusivo, 
                        que considere las diversas realidades sociales, culturales y territoriales.
                      </p>
                      <p>
                        El programa formativo pone énfasis en desarrollar capacidades para trabajar con comunidades 
                        diversas, promoviendo la inclusión de las realidades locales y analizando situaciones de 
                        vulneración de derechos, actuando proactivamente para lograr un desarrollo sostenible.
                      </p>
                      <p>
                        Los derechos humanos son el eje central del desarrollo de las personas, promoviendo valores de 
                        dignidad y respeto que sustentan el desarrollo humano integral.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="objetivos">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Target className="mr-2 h-5 w-5" />
                      Capacidades del Egresado
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong>Conocimiento en Derechos Humanos:</strong> Comprender los principios fundamentales y marcos legales</li>
                        <li><strong>Abordaje Integral e Inclusivo:</strong> Aplicar un enfoque interdisciplinario a la defensa y promoción</li>
                        <li><strong>Capacidades de Análisis:</strong> Analizar contextos para identificar violaciones y restitución de garantías</li>
                        <li><strong>Gestión y Coordinación:</strong> Gestionar programas y proyectos en organismos y empresas</li>
                        <li><strong>Trabajo en Territorio:</strong> Realizar trabajo de campo respetando contextos culturales y sociales</li>
                        <li><strong>Comunicación Efectiva:</strong> Comunicar y educar sobre temas de derechos humanos</li>
                        <li><strong>Investigación:</strong> Documentar y analizar situaciones de violaciones</li>
                        <li><strong>Valores y Actitudes:</strong> Fomentar actitudes que respeten y defiendan los derechos humanos</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="perfil">
                    <AccordionTrigger className="text-lg font-semibold">
                      <Users className="mr-2 h-5 w-5" />
                      Perfil del Egresado
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <p>El egresado estará preparado para:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Realizar trabajo de campo en comunidades diversas, promoviendo la inclusión de realidades locales</li>
                        <li>Analizar situaciones de vulneración de derechos humanos</li>
                        <li>Actuar proactivamente para lograr un desarrollo sostenible</li>
                        <li>Asesorar en políticas de responsabilidad social empresarial</li>
                        <li>Desarrollar programas que impulsen cambios estructurales</li>
                        <li>Identificar y abordar violaciones de Derechos Humanos</li>
                        <li>Contribuir al desarrollo de entornos más justos y respetuosos</li>
                        <li>Implementar políticas inclusivas y participativas</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum">
                    <AccordionTrigger className="text-lg font-semibold">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Estructura Curricular (Principales Espacios)
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Primer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Antropología Social y Territorio</li>
                          <li>• Introducción a los Derechos Humanos</li>
                          <li>• Derecho Constitucional</li>
                          <li>• Sistema de Protección Universal</li>
                          <li>• Historia Argentina y Derechos Humanos</li>
                          <li>• Metodología de la Investigación</li>
                          <li>• Práctica Profesionalizante I</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Segundo Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Abordaje Integral de los DDHH</li>
                          <li>• Estado, Ciudadanía y Garantía de Derechos</li>
                          <li>• Legislación Aplicada</li>
                          <li>• Derechos Sociales, Económicos y Culturales</li>
                          <li>• Planificación y Elaboración de Proyecto Social</li>
                          <li>• Comunicación y DDHH</li>
                          <li>• Práctica Profesionalizante II</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Tercer Año</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Abordajes Integrales</li>
                          <li>• Análisis y Diseño de Políticas Públicas para DDHH</li>
                          <li>• DDHH e Inclusión</li>
                          <li>• Empresas, DDHH y Responsabilidad Social</li>
                          <li>• Gestión y Diseño de Proyecto Social</li>
                          <li>• Práctica Profesionalizante III</li>
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
                      <p>Los egresados podrán desempeñarse en:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Organizaciones No Gubernamentales (ONG):</strong> Defensa y promoción de derechos</li>
                        <li><strong>Empresas Privadas:</strong> Responsabilidad social y políticas inclusivas</li>
                        <li><strong>Organismos Internacionales:</strong> Gestión de programas de DDHH</li>
                        <li><strong>Trabajo Comunitario y Territorial:</strong> Intervención en comunidades diversas</li>
                        <li><strong>Instituciones Públicas:</strong> Diseño e implementación de políticas públicas</li>
                      </ul>
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
