const jobs_es = [
    {
        id: 4,
        position: 'Freelance - Co-Funder',
        company: 'klover',
        size: 'small',
        time: 'Dic-2021 / presente',
        description: '',
        allPositions: [
            
        ],
        moreInfo: [
            
        ],
        projects: [
            {
                title: 'JustWeigh',
                description: 'Recientemente inicie un proyecto personal desarrollando una aplicación para Android, la cual todavía se encuentra en Beta Testing. JustWeight te ayuda a mantener tu peso en control. Como persona con problemas de peso, deseo ayudar a otros y a mi mismo controlar su peso y mejorar su salud.',
                photo: 'JustWeigh.png',
                web: '',
                android: 'https://play.google.com/store/apps/details?id=ar.com.klover.justweigh&hl=es_AR&gl=US',
                ios: '',
                color: '#1154ff'
            }
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
        ],
        projects: []
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
                title: 'Semi Senior Software Engineer',
                period: 'promoción, 2016 - 2017'
            },
            {
                title: 'Software Engineer',
                period: '2014 - 2016'
            },
        ],
        moreInfo: [],
        projects: []
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
                title: 'JAVA Developer',
                period: 'promoción, 2012 - 2014'
            },
            {
                title: 'Junior JAVA Developer',
                period: 'promoción, 2011 – 2012'
            }
        ],
        moreInfo: [],
        projects: []
    },
]

const jobs_en = [
    {
        id: 4,
        position: 'Freelance - Co-Funder',
        company: 'klover',
        size: 'small',
        time: 'Dic-2021 / presente',
        description: '',
        allPositions: [
            
        ],
        moreInfo: [
            
        ],
        projects: [
            {
                title: 'JustWeigh',
                description: 'This year I started my own personal project developing an Android App which is still in Beta Testing. JustWeight helps you to keep your weight control. As a person with weight issues, I want to help other and myself to lost weight and be healthier',
                photo: 'JustWeigh.png',
                web: '',
                android: 'https://play.google.com/store/apps/details?id=ar.com.klover.justweigh&hl=es_AR&gl=US',
                ios: '',
                color: '#1154ff'
            }
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
                period: 'promotion, 2020 - 2021'
            },
            {
                title: 'Leader Software engineer',
                period: 'promotion, 2019 – 2020'
            },
            {
                title: 'Senior Software Engineer',
                period: '2017 - 2019'
            }
        ],
        moreInfo: [
            {
                title: 'Lead JAVA Developer for the OSDE Services Project.',
                subtitle: 'OSDE is the biggest medical insurance company in Argentina.'
            },
            {
                title: 'Lead Android & iOS Developer for the “OSDE Movil” Project',
                subtitle: '“OSDE Movil” is the main App in the OSDE company.'
            },
            {
                title: 'Lead FrontEnd Developer for the OSDE web project.',
                subtitle: ' Maintenance and evolution of the OSDE public web.'
            }
        ],
        projects: []
    },
    {
        id: 2,
        position: 'Java Developer SSR',
        company: 'indra',
        size: 'large',
        time: 'Jan-2014 / Jun-2017',
        description: '',
        allPositions: [
            {
                title: 'Semi Senior Software Engineer',
                period: 'promotion, 2016 - 2017'
            },
            {
                title: 'Software Engineer',
                period: '2014 - 2016'
            },
        ],
        moreInfo: [],
        projects: []
    },
    {
        id: 1,
        position: 'Java Developer',
        company: 'accenture',
        size: 'large',
        time: 'Nov-2011 / Jan-2014',
        description: '',
        allPositions: [
            {
                title: 'JAVA Developer',
                period: 'promotion, 2012 - 2014'
            },
            {
                title: 'Junior JAVA Developer',
                period: 'promotion, 2011 – 2012'
            }
        ],
        moreInfo: [],
        projects: []
    },
]

export const getJobs = (lang = 'ES') => {
    if(lang === 'EN'){
        return jobs_en;
    }
    return jobs_es;
}