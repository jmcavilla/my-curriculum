const jobs_es = [
    {
        id: 4,
        position: 'Freelance - Co-Funder',
        company: 'klover',
        size: 'small',
        time: 'Dic-2021 / presente',
        description: 'Recientemente inicie un proyecto personal desarrollando una aplicación para Android, la cual todavía se encuentra en Beta Testing. JustWeight te ayuda a mantener tu peso en control. Como persona con problemas de peso, deseo ayudar a otros y a mi mismo controlar su peso y mejorar su salud.',
        allPositions: [
            
        ],
        moreInfo: [
            
        ]
    },
    {
        id: 3,
        position: 'TO - Mobile Team Leader',
        company: 'quadion',
        size: 'small',
        time: 'Jul-2017 / Nov-2021',
        description: '',
        allPositions: [
            {
                title: 'Technical Owner - Mobile Team Leader',
                period: 'promoción, 2020 - 2021'
            },
            {
                title: 'Leader Software engineer',
                period: 'promoción, 2019 – 2020'
            },
            {
                title: 'Senior Software Engineer',
                period: '2017 - 2019'
            }
        ],
        moreInfo: [
            {
                title: 'Lead JAVA Developer para el Proyecto de Microservicios de OSDE',
                subtitle: ''
            },
            {
                title: 'Lead Android & iOS Developer para el proyecto “OSDE móvil”.',
                subtitle: '“OSDE Móvil” es la principal aplicación de la compañía OSDE.'
            },
            {
                title: 'Lead FrontEnd Developer para el Proyecto Web de OSDE.',
                subtitle: 'Encargado del mantenimiento y evolución de la web de OSDE.'
            }
        ]
    },
    {
        id: 2,
        position: 'Java Developer SSR',
        company: 'indra',
        size: 'small',
        time: 'Ene-2014 / Jun-2017',
        description: '',
        allPositions: [
            {
                title: 'Technical Owner - Mobile Team Leader',
                period: 'promoción, 2020 - 2021'
            },
            {
                title: 'Leader Software engineer',
                period: 'promoción, 2019 – 2020'
            },
            {
                title: 'Senior Software Engineer',
                period: '2017 - 2019'
            }
        ],
        moreInfo: [
            {
                title: 'Lead JAVA Developer para el Proyecto de Microservicios de OSDE',
                subtitle: ''
            },
            {
                title: 'Lead Android & iOS Developer para el proyecto “OSDE móvil”.',
                subtitle: '“OSDE Móvil” es la principal aplicación de la compañía OSDE.'
            },
            {
                title: 'Lead FrontEnd Developer para el Proyecto Web de OSDE.',
                subtitle: 'Encargado del mantenimiento y evolución de la web de OSDE.'
            }
        ]
    },
    {
        id: 1,
        position: 'Java Developer',
        company: 'accenture',
        size: 'large',
        time: 'Nov-2011 / Ene-2014',
        description: '',
        allPositions: [
            {
                title: 'Technical Owner - Mobile Team Leader',
                period: 'promoción, 2020 - 2021'
            },
            {
                title: 'Leader Software engineer',
                period: 'promoción, 2019 – 2020'
            },
            {
                title: 'Senior Software Engineer',
                period: '2017 - 2019'
            }
        ],
        moreInfo: [
            {
                title: 'Lead JAVA Developer para el Proyecto de Microservicios de OSDE',
                subtitle: ''
            },
            {
                title: 'Lead Android & iOS Developer para el proyecto “OSDE móvil”.',
                subtitle: '“OSDE Móvil” es la principal aplicación de la compañía OSDE.'
            },
            {
                title: 'Lead FrontEnd Developer para el Proyecto Web de OSDE.',
                subtitle: 'Encargado del mantenimiento y evolución de la web de OSDE.'
            }
        ]
    },
]

const jobs_en = [
    {
        id: 5,
        position: 'Tech Leader',
        company: 'quadion',
        size: 'small',
        time: 'Apr-2019 / -',
        description: ''
    },
    {
        id: 4,
        position: 'Full stack Developer SR.',
        company: 'quadion',
        size: 'small',
        time: 'Feb-2018 / Mar-2019',
        description: 'Luego de un tiempo aprendiendo las nuevas tecnologías y con el acompañamiento de un gran equipo y por sobre todo un gran líder de proyecto, se me recompenso con un crecimiento dentro del proyecto, donde pase a tener más responsabilidades con respecto al cliente como con mis compañeros. Con este crecimiento se me dio la oportunidad de ser responsable de la actualización de la arquitectura del Backend hecho en Java que se utiliza para las apps de iOS y Android y la web mobile.'
    },
    {
        id: 3,
        position: 'Full stack Developer SSR.',
        company: 'quadion',
        size: 'small',
        time: 'Jul-2017 / Jan-2018',
        description: 'Llegue a Quadion como un Java Developer SSR, pero acá conocí lo que hoy me apasiona, el desarrollo web. Ingrese para el proyecto de la aplicación y la página mobile de la empresa de Salud OSDE. Comencé a aprender nuevas tecnologías sobre todo Javascript y más puntualmente aprendiendo frameworks como AngularJS, Ionic y Sencha.'
    },
    {
        id: 2,
        position: 'Java Developer SSR',
        company: 'indra',
        size: 'large',
        time: 'Jan-2014 / Jun-2017',
        description: 'En Indra participe en dos proyectos. Ambos para la empresa Telefónica. El primer proyecto fue directamente para Telefónica, en la actualización del sistema interno de asignación de tipos de líneas. Luego, participe para un proyecto de Movistar, donde estábamos encargados del sistema de asignación de tickets para el personal de gestión de tareas de la empresa.'
    },
    {
        id: 1,
        position: 'Java Developer',
        company: 'accenture',
        size: 'large',
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