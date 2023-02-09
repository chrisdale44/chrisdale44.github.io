import emoji from 'react-easy-emoji'

export const greetings = {
    name: 'Chris Dale',
    title: "Hi, I'm Chris",
    description:
        "I'm a passionate and adaptable Front End Developer with over 10 years experience delivering Web Applications for corporate, public and charity sector clients.",
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
    instagram: 'https://www.instagram.com/vx.4000',
}

export const skillsSection = {
    title: 'What I do',
    subTitle: '',
    data: [
        {
            title: 'Full Stack Development',
            lottieAnimationFile: '/lottie/skills/skills.json',
            skills: [
                emoji('⚡ Building responsive SPAs and PWAs using ReactJS'),
                emoji(
                    '⚡ Building serverless JAMStack websites using Static Site Generation (SSG) tools, including Gatsby and NextJS'
                ),
                emoji('⚡ Building RESTful APIs in NodeJS'),
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
                    skillName: 'Reactjs',
                    fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
                },
                {
                    skillName: 'Redux',
                    fontAwesomeClassname: 'logos:redux',
                },
                {
                    skillName: 'Nextjs',
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
                    skillName: 'GraphQl',
                    fontAwesomeClassname: 'vscode-icons:file-type-graphql',
                },
                {
                    skillName: 'Jest',
                    fontAwesomeClassname: 'vscode-icons:file-type-jest',
                },
                {
                    skillName: 'Storybook',
                    fontAwesomeClassname: 'vscode-icons:file-type-storybook',
                },
                {
                    skillName: 'NPM',
                    fontAwesomeClassname: 'logos:npm-icon',
                },
            ],
        },
        {
            title: 'Cloud Infra-Architecture',
            lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
            skills: [
                emoji('⚡ Experience working on multiple cloud platforms'),
                emoji(
                    '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'AWS',
                    fontAwesomeClassname: 'logos:aws',
                },
                {
                    skillName: 'Azure',
                    fontAwesomeClassname: 'logos:microsoft-azure',
                },
                {
                    skillName: 'Heroku',
                    fontAwesomeClassname: 'logos:heroku-icon',
                },
                {
                    skillName: 'Netlify',
                    fontAwesomeClassname: 'vscode-icons:file-type-netlify',
                },
                {
                    skillName: 'Github',
                    fontAwesomeClassname: 'akar-icons:github-fill',
                },
                {
                    skillName: 'Github Actions',
                    fontAwesomeClassname: 'logos:github-actions',
                },
                {
                    skillName: 'Docker',
                    fontAwesomeClassname: 'logos:docker-icon',
                },
                {
                    skillName: 'Cloudinary',
                    fontAwesomeClassname: 'logos:cloudinary',
                },
                {
                    skillName: 'Jira',
                    fontAwesomeClassname: 'logos:jira',
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
        role: 'Associate Web Engineer',
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
        name: 'spot-mapper',
        desc: 'Web App for documenting, mapping and filtering skateboard spots worldwide',
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
