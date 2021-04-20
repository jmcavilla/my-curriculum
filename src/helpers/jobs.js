const jobs_es = [
    {
        id: 5,
        position: 'Tech Leader',
        company: 'quadion',
        time: 'Abr-2019 / -',
        description: 'Luego de la partida de parte del equipo de la empresa, y en particular del líder del proyecto, se me dio la responsabilidad de hacerme cargo del liderazgo del mismo. Desde ese momento empece a tener más responsabilidades tanto con el trato con el cliente como también con mis compañeros de equipo. Con el equipo estamos impulsando la migración tecnológica de las apps móviles las cuales están desarrolladas en el Framework Sencha junto con Cordova, las cuales queremos reemplazar con ReactJS juno a IONIC 5. Este proceso está comenzando y ya el cliente nos dio el visto bueno para comenzar dicha migración con vistas a estar terminada en los próximos meses.'
    },
    {
        id: 4,
        position: 'Full stack Developer SR.',
        company: 'quadion',
        time: 'Feb-2018 / Mar-2019',
        description: 'Luego de un tiempo aprendiendo las nuevas tecnologías y con el acompañamiento de un gran equipo y por sobre todo un gran líder de proyecto, se me recompenso con un crecimiento dentro del proyecto, donde pase a tener más responsabilidades con respecto al cliente como con mis compañeros. Con este crecimiento se me dio la oportunidad de ser responsable de la actualización de la arquitectura del Backend hecho en Java que se utiliza para las apps de iOS y Android y la web mobile.'
    },
    {
        id: 3,
        position: 'Full stack Developer SSR.',
        company: 'quadion',
        time: 'Jul-2017 / Ene-2018',
        description: 'Llegue a Quadion como un Java Developer SSR, pero acá conocí lo que hoy me apasiona, el desarrollo web. Ingrese para el proyecto de la aplicación y la página mobile de la empresa de Salud OSDE. Comencé a aprender nuevas tecnologías sobre todo Javascript y más puntualmente aprendiendo frameworks como AngularJS, Ionic y Sencha.'
    },
    {
        id: 2,
        position: 'Java Developer SSR',
        company: 'indra',
        time: 'Ene-2014 / Jun-2017',
        description: 'En Indra participe en dos proyectos. Ambos para la empresa Telefónica. El primer proyecto fue directamente para Telefónica, en la actualización del sistema interno de asignación de tipos de líneas. Luego, participe para un proyecto de Movistar, donde estábamos encargados del sistema de asignación de tickets para el personal de gestión de tareas de la empresa.'
    },
    {
        id: 1,
        position: 'Java Developer',
        company: 'accenture',
        time: 'Nov-2011 / Ene-2014',
        description: 'Mi primer trabajo. Forme parte de varios equipos desarrollando en Java. Trabaje en proyectos para clientes como Telefónica, Telecom Italia e Iberdrola. Aquí comencé mi aprendizaje en distintos Frameworks Java como Struts 1 y 2, Spring, Maven, etc.'
    },
]

const jobs_en = [
    {
        id: 5,
        position: 'Tech Leader',
        company: 'quadion',
        time: 'Apr-2019 / -',
        description: 'Luego de la partida de parte del equipo de la empresa, y en particular del líder del proyecto, se me dio la responsabilidad de hacerme cargo del liderazgo del mismo. Desde ese momento empece a tener más responsabilidades tanto con el trato con el cliente como también con mis compañeros de equipo. Con el equipo estamos impulsando la migración tecnológica de las apps móviles las cuales están desarrolladas en el Framework Sencha junto con Cordova, las cuales queremos reemplazar con ReactJS juno a IONIC 5. Este proceso está comenzando y ya el cliente nos dio el visto bueno para comenzar dicha migración con vistas a estar terminada en los próximos meses.'
    },
    {
        id: 4,
        position: 'Full stack Developer SR.',
        company: 'quadion',
        time: 'Feb-2018 / Mar-2019',
        description: 'Luego de un tiempo aprendiendo las nuevas tecnologías y con el acompañamiento de un gran equipo y por sobre todo un gran líder de proyecto, se me recompenso con un crecimiento dentro del proyecto, donde pase a tener más responsabilidades con respecto al cliente como con mis compañeros. Con este crecimiento se me dio la oportunidad de ser responsable de la actualización de la arquitectura del Backend hecho en Java que se utiliza para las apps de iOS y Android y la web mobile.'
    },
    {
        id: 3,
        position: 'Full stack Developer SSR.',
        company: 'quadion',
        time: 'Jul-2017 / Jan-2018',
        description: 'Llegue a Quadion como un Java Developer SSR, pero acá conocí lo que hoy me apasiona, el desarrollo web. Ingrese para el proyecto de la aplicación y la página mobile de la empresa de Salud OSDE. Comencé a aprender nuevas tecnologías sobre todo Javascript y más puntualmente aprendiendo frameworks como AngularJS, Ionic y Sencha.'
    },
    {
        id: 2,
        position: 'Java Developer SSR',
        company: 'indra',
        time: 'Jan-2014 / Jun-2017',
        description: 'En Indra participe en dos proyectos. Ambos para la empresa Telefónica. El primer proyecto fue directamente para Telefónica, en la actualización del sistema interno de asignación de tipos de líneas. Luego, participe para un proyecto de Movistar, donde estábamos encargados del sistema de asignación de tickets para el personal de gestión de tareas de la empresa.'
    },
    {
        id: 1,
        position: 'Java Developer',
        company: 'accenture',
        time: 'Nov-2011 / Jan-2014',
        description: 'Mi primer trabajo. Forme parte de varios equipos desarrollando en Java. Trabaje en proyectos para clientes como Telefónica, Telecom Italia e Iberdrola. Aquí comencé mi aprendizaje en distintos Frameworks Java como Struts 1 y 2, Spring, Maven, etc.'
    },
]

export const getJobs = (lang = 'ES') => {
    if(lang === 'EN'){
        return jobs_en;
    }
    return jobs_es;
}