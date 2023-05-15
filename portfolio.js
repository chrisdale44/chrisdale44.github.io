import emoji from 'react-easy-emoji'

export const greetings = {
    name: 'Chris Dale',
    title: "Hi, I'm Chris",
    description:
        'A skilled and adaptable Front End Developer with over 10 years experience delivering Web and Mobile solutions for corporate, public and charity sector clients. Currently seeking fully-remote opportunities.',
    resumeLink: '/christopher-dale-cv-2023.pdf',
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
                    '⚡ Build responsive, scalable and performant Web Applications using modern Javacsript frameworks, predominantly ReactJS'
                ),
                emoji(
                    '⚡ Implement the latest architecture patterns for building Web solutions, including Serverless and JAMStack approaches'
                ),
                emoji(
                    '⚡ Make decisions on which third-party software and tools to use and implement them'
                ),
                emoji('⚡ Write well-formed code following CS principles'),
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
                emoji(
                    '⚡ Ensure Web solutions work across all browsers and devices using tools such as BrowserStack and SauceLabs'
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
        subHeader: '',
        duration: '',
        desc: '',
        grade: '',
        descBullets: [
            '<strong>A levels:</strong Business Studies (A), Art (A), History (B)',
            "<strong>GCSE's:</strong> 10 subjects at A*, A and B grades",
        ],
    },
]

export const experience = [
    {
        role: 'Senior Front End Developer (Remote)',
        company: 'Shelter Charity',
        companylogo: '/img/icons/common/shelter.png',
        date: 'July 2019 - Sept 2022',
        desc: '',
        descBullets: [
            "Worked as part of a cross-functional, Agile product team to develop ideas and products to improve Shelters' services",
            'Played a key part in replatforming the Shelter website using cutting edge technologies, with a focus on performance, usability and accessibility',
            'Advised Shelter on the use of modern Web technologies and helped make decisions on which technologies to implement',
            'Performed regular code reviews to ensure only code of the highest standard is deployed',
            'Championed the push to meet Web accessibility standards (WCAG 2.1), including the introduction of team accessibility guidelines',
            'Helped onboard and mentor newer members of staff, including pair programming sessions with developers of all standards',
            'Line managed a junior member of the team with a focus on building their skills and confidence',
        ],
    },
    {
        role: 'Web Engineer',
        company: 'ASOS',
        companylogo: '/img/icons/common/asos.svg',
        date: 'May 2017 - July 2019',
        desc: '',
        descBullets: [
            'Worked as part of an Agile, micro-services team to rebuild the ASOS website using the latest Web technologies, with a focus on quality assurance, performance and scalability',
            'Worked closely with UX, QA and product specialists to deliver fully tested features that meet functional and end-user requirements',
            'Mentored junior developers and regularly pair programmed with developers of all standards in order to share knowledge and complete tasks more efficiently',
            'Performed regular code reviews to ensure only code of the highest standard is deployed',
        ],
    },
    {
        role: 'Consultant Front End Developer',
        company: 'BAE Systems',
        companylogo: '/img/icons/common/bae-systems.png',
        date: 'Oct 2015 - Mar 2017',
        desc: '',
        descBullets: [
            'Worked with in-house and external client teams on the following projects:',
            "<strong>Vodafone: </strong>Led the development of a Web App to promote Vodafone products that was deployed across 20 of Vodafone's international sites. Provided detailed documentation and presentations to Vodafone's international teams to aid them in deploying and customising the tool to their local markets",
            '<strong>Royal Navy: </strong>Worked as part of a small team to build a cross-platform Web App to manage and track maritime engineering tasks, with a focus on security, reliability and offline availability',
            '<strong>Three Mobile: </strong>Styled the UI for a newly replatformed Three Mobile blog microsite',
            '<strong>Home Office: </strong>Styled the UI for Home Office webpages',
        ],
    },
    {
        role: 'Front End Developer',
        company: 'First Utility',
        companylogo: '/img/icons/common/first-utility.png',
        date: 'June 2013 - Sept 2014',
        desc: '',
        descBullets: [
            'Worked as part of a small team to rebuild the First Utility website and user account system, including interactive graphs of customer usage data (winner of Utilities Website of the Year Award in 2014)',
        ],
    },
    {
        role: 'Junior Developer',
        company: 'MyDeco',
        companylogo: '/img/icons/common/mydeco.png',
        date: 'Sep 2012 - May 2013',
        desc: '',
        descBullets: [],
    },
    {
        role: 'Junior Developer',
        company: 'OpenBet',
        companylogo: '/img/icons/common/openbet.jpeg',
        date: 'Sep 2011 - May 2012',
        desc: '',
        descBullets: [],
    },
]

export const projects = [
    {
        name: 'Spot Mapper',
        desc: 'A performant and scalable Web App for saving, mapping and searching skateboard spots worldwide, still currently in development   ',
        github: 'https://github.com/chrisdale44/spot-mapper',
        link: 'https://spot-mapper.vercel.app/',
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
