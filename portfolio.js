import emoji from 'react-easy-emoji'

export const greetings = {
    name: 'Chris Dale',
    title: "Hi, I'm Chris",
    description:
        'A skilled Front End Developer with over 10 years experience delivering Web and Mobile solutions for corporate, public and charity sector clients.',
    resumeLink: '#',
}

export const openSource = {
    githubUserName: 'chrisdale44',
}

export const contact = {}

export const socialLinks = {
    url: 'https://chrisdale44.github.io/',
    linkedin: 'https://www.linkedin.com/in/chrisdale44/',
    github: 'https://github.com/chrisdale44',
}

export const skillsSection = {
    title: 'What I do',
    subTitle: '',
    data: [
        {
            title: 'Front End Development',
            lottieAnimationFile: '/lottie/skills/skills.json',
            skills: [
                emoji(
                    '⚡ Write well-formed Javascript (ES7) following CS principles'
                ),
                emoji(
                    '⚡ Build responsive, scalable and performant Web Applications using modern Javacsript frameworks, predominantly ReactJS'
                ),
                emoji(
                    '⚡ Implement the latest architecture patterns for building Web solutions, including Serverless and JAMStack approaches'
                ),
                emoji(
                    '⚡ Make decisions on which third-party software and tools to implement'
                ),
                emoji(
                    '⚡ Write maintainable, cross-browser compliant CSS, using tools and frameworks such as SASS, CSS Modules and Styled Components'
                ),
                emoji(
                    '⚡ Build front-end components that are fully compliant with Web Accessibility guidelines (WCAG 2.1)'
                ),
                emoji('⚡ Write clear and concise technical documentation'),
            ],
            softwareSkills: [
                {
                    skillName: 'HTML-5',
                    fontAwesomeClassname: 'vscode-icons:file-type-html',
                },
                {
                    skillName: 'CSS-3',
                    fontAwesomeClassname: 'vscode-icons:file-type-css',
                },
                {
                    skillName: 'JavaScript',
                    fontAwesomeClassname: 'logos:javascript',
                },
                {
                    skillName: 'NodeJS',
                    fontAwesomeClassname: 'logos:nodejs-icon',
                },
                {
                    skillName: 'ReactJS',
                    fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
                },
                {
                    skillName: 'Redux',
                    fontAwesomeClassname: 'logos:redux',
                },
                {
                    skillName: 'Recoil',
                    fontAwesomeClassname: 'logos:recoil-icon',
                },
                {
                    skillName: 'NextJS',
                    fontAwesomeClassname: 'vscode-icons:file-type-light-next',
                },
                {
                    skillName: 'Gatsby',
                    fontAwesomeClassname: 'vscode-icons:file-type-gatsby',
                },
                {
                    skillName: 'Contentful',
                    fontAwesomeClassname: 'logos:contentful',
                },
                {
                    skillName: 'GraphQL',
                    fontAwesomeClassname: 'vscode-icons:file-type-graphql',
                },
                {
                    skillName: 'NPM',
                    fontAwesomeClassname: 'logos:npm-icon',
                },
                // {
                //     skillName: 'WCAG 21',
                //     fontAwesomeClassname: 'logos:redux',
                // },
            ],
        },
        {
            title: 'Quality Assurance',
            lottieAnimationFile: '/lottie/qa.json',
            skills: [
                emoji(
                    '⚡ Build React components with 100% unit test coverage using frameworks such as Jest and Enzyme'
                ),
                emoji(
                    '⚡ Build UI design systems to view and test components in isolation using Storybook and Chromatic'
                ),
                emoji(
                    '⚡ Test application performance and accessibility using tools such as Lighthouse and aXe'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'Jest',
                    fontAwesomeClassname: 'vscode-icons:file-type-jest',
                },
                {
                    skillName: 'Enzyme',
                    fontAwesomeClassname: 'logos:airbnb-icon',
                },
                {
                    skillName: 'Storybook',
                    fontAwesomeClassname: 'vscode-icons:file-type-storybook',
                },
                {
                    skillName: 'Chromatic',
                    fontAwesomeClassname: 'logos:chromatic-icon',
                },
                {
                    skillName: 'Lighthouse',
                    fontAwesomeClassname: 'logos:lighthouse',
                },
            ],
        },
    ],
}

export const SkillBars = [
    //     {
    //         Stack: 'Frontend', //Insert stack or technology you have experience in
    //         progressPercentage: '90', //Insert relative proficiency in percentage
    //     },
]

export const educationInfo = [
    {
        schoolName: 'University of Southampton',
        subHeader: 'Information Technology in Organisations, BSc.',
        duration: 'September 2008 - April 2011',
        desc: 'A multi-faceted degree covering modules in Computer Science, Information Technology, statistics, ethics and business management; of which I specialised in Web technologies.',
        grade: 'First Class with Honours',
        descBullets: [
            'For my dissertation I built a Web App for a client, completing all stages of the development lifecycle from requirements gathering to design, development, testing and deployment.',
        ],
    },
    {
        schoolName: 'Reigate Grammar School',
        subHeader: 'A Levels',
        duration: '',
        desc: 'Business Studies (A), Art (A), History (B)',
        grade: '',
        descBullets: [],
    },
]

export const experience = [
    {
        role: 'Senior Front End Developer',
        company: 'Shelter Charity',
        companylogo: '/img/icons/common/shelter.png',
        date: 'July 2019 – Sept 2022',
        desc: '',
        descBullets: [
            'Replatformed the Shelter website using React and JAMStack technologies',
            'Built a custom NodeJS tool for scraping content from the legacy website to be migrated to the new CMS (Contentful)',
            'Extended the functionality of Contentful, including schema generation',
            'Championed accessibility, including the introduction of team accessibility guidelines',
            'Line managed a junior developer with a focus on building their skills and confidence',
        ],
    },
    {
        role: 'Web Engineer',
        company: 'ASOS',
        companylogo: '/img/icons/common/asos.png',
        date: 'May 2017 – July 2019',
        desc: '',
        descBullets: [
            'Worked as part of a micro-services team to rebuild the ASOS website with a focus on quality assurance, performance and scalability',
            'Re-architected one of ASOS’ NodeJS microservices',
        ],
    },
    {
        role: 'Consultant Front End Developer',
        company: 'Three',
        companylogo: '/img/icons/common/three.png',
        date: 'Sep 2016 – Mar 2017',
        desc: '',
        descBullets: [
            'Styled the UI for a newly replatformed Three Mobile blog microsite',
        ],
    },
    {
        role: 'Consultant Front End Developer',
        company: 'Vodaphone',
        companylogo: '/img/icons/common/vodafone.jpeg',
        date: 'Oct 2015 – Sep 2016',
        desc: '',
        descBullets: [
            'Led the development of a Web App to promote Vodafone products through a customer survey with interactive results page that was deployed across 20 of Vodafone’s international sites',
            'Provided detailed documentation and presentations to Vodafone’s international teams',
        ],
    },
    {
        role: 'Front End Developer',
        company: 'First Utility',
        companylogo: '/img/icons/common/first-utility.png',
        date: 'June 2013 – Sept 2014',
        desc: '',
        descBullets: [
            'Rebuilt the First Utility website and user account system, including interactive graphs of customer usage data',
        ],
    },
    {
        role: 'Junior Developer',
        company: 'MyDeco',
        companylogo: '/img/icons/common/mydeco.png',
        date: 'Sep 2012 – May 2013',
        desc: '',
        descBullets: [
            'Worked as part of an interdisciplinary team to build responsive web pages and email templates',
        ],
    },
    {
        role: 'Junior Developer',
        company: 'OpenBet',
        companylogo: '/img/icons/common/openbet.jpeg',
        date: 'Sep 2011 – May 2012',
        desc: '',
        descBullets: ['Helped maintain the William Hill website'],
    },
]

export const projects = [
    {
        name: 'Spot Mapper',
        desc: 'A performant and scalable Web App for saving, mapping and searching skateboard spots worldwide',
        github: 'https://github.com/chrisdale44/spot-mapper',
        link: '#',
    },
]

export const feedbacks = []

export const showContactUs = true

// See object prototype on SEO.jsx page
export const seoData = {
    title: 'Chris Dale',
    description: 'A passionate Front End Developer',
    author: 'Chris Dale',
    image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
    url: 'https://chrisdale44.github.io',
    keywords: [
        'Chris',
        'Christopher',
        'Dale',
        'Chris Dale',
        'chrisdale44',
        'vx.4000',
        'Portfolio',
        'Front End Portfolio ',
        'Developer Portfolio',
    ],
}
