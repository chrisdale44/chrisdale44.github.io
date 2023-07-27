import emoji from 'react-easy-emoji'

export const greetings = {
    name: 'Chris Dale',
    title: "Hi, I'm Chris",
    description:
        'A skilled and adaptable Front End Developer with over 10 years experience in the industry.',
    resumeLink: '/christopher-dale-cv.pdf',
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
                    '⚡ Build responsive, scalable and performant Web Applications using modern frameworks'
                ),
                emoji(
                    '⚡ Implement the latest architecture patterns for building Web solutions'
                ),
                emoji(
                    '⚡ Write well-formed code that follows Web standards and CS principles'
                ),
                emoji(
                    '⚡ Write maintainable, cross-browser compliant CSS styles'
                ),
                emoji(
                    '⚡ Provide quality assurance through unit tests and cross-browser testing'
                ),
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
                // {
                //     skillName: 'Redux',
                //     fontAwesomeClassname: 'logos:redux',
                // },
                // {
                //     skillName: 'Recoil',
                //     fontAwesomeClassname: 'logos:recoil-icon',
                // },
                {
                    skillName: 'NextJS',
                    fontAwesomeClassname: 'vscode-icons:file-type-light-next',
                },
                // {
                //     skillName: 'Gatsby',
                //     fontAwesomeClassname: 'vscode-icons:file-type-gatsby',
                // },
                // {
                //     skillName: 'Contentful',
                //     fontAwesomeClassname: 'logos:contentful',
                // },
                // {
                //     skillName: 'GraphQL',
                //     fontAwesomeClassname: 'vscode-icons:file-type-graphql',
                // },
                // {
                //     skillName: 'NPM',
                //     fontAwesomeClassname: 'logos:npm-icon',
                // },
                // {
                //     skillName: 'WCAG 21',
                //     fontAwesomeClassname: 'logos:redux',
                // },
            ],
        },
        // {
        //     title: 'Quality Assurance',
        //     lottieAnimationFile: '/lottie/qa.json',
        //     skills: [
        //         emoji(
        //             '⚡ Build React components with 100% unit test coverage using frameworks such as Jest and Enzyme'
        //         ),
        //         emoji(
        //             '⚡ Build UI design systems to view and test components in isolation using Storybook and Chromatic'
        //         ),
        //         emoji(
        //             '⚡ Test application performance and accessibility using tools such as Lighthouse and aXe'
        //         ),
        //         emoji(
        //             '⚡ Ensure Web solutions work across all browsers and devices using tools such as BrowserStack and SauceLabs'
        //         ),
        //     ],
        //     softwareSkills: [
        //         {
        //             skillName: 'Jest',
        //             fontAwesomeClassname: 'vscode-icons:file-type-jest',
        //         },
        //         {
        //             skillName: 'Enzyme',
        //             fontAwesomeClassname: 'logos:airbnb-icon',
        //         },
        //         {
        //             skillName: 'Storybook',
        //             fontAwesomeClassname: 'vscode-icons:file-type-storybook',
        //         },
        //         {
        //             skillName: 'Chromatic',
        //             fontAwesomeClassname: 'logos:chromatic-icon',
        //         },
        //         {
        //             skillName: 'Lighthouse',
        //             fontAwesomeClassname: 'logos:lighthouse',
        //         },
        //     ],
        // },
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
        subHeader: 'IT in Organisations, BSc.',
        duration: ', 2011',
        desc: '',
        grade: 'First Class with Honours',
    },
    // {
    //     schoolName: 'Reigate Grammar School',
    //     subHeader: '',
    //     duration: '',
    //     desc: '',
    //     grade: '',
    //     descBullets: [
    //         {
    //             qualification: 'A Levels',
    //             grade: 'Business Studies (A), Art (A), History (B)',
    //         },
    //         {
    //             qualification: "GCSE's",
    //             grade: '10 subjects at A*, A and B grades',
    //         },
    //     ],
    // },
]

export const experience = [
    {
        role: 'Senior Front End Developer (Remote)',
        company: 'Shelter Charity',
        url: 'https://england.shelter.org.uk/',
        friendly_url: 'www.shelter.org.uk',
        companylogo: '/img/icons/common/shelter.png',
        date: 'July 2019 - Sept 2022',
        desc: "UK's leading housing and homelessness charity",
        descBullets: [
            'Worked as part of an interdisciplinary, Agile team to re-platform the Shelter website and CMS using latest Web technologies',
            'Collaborated with the UX and design team to build a reusable Component Library with a focus on usability, accessibility and performance',
            'Delivered clean, modular, unit-tested code both on the front-end and back-end',
            'Performed regular code reviews to ensure code quality, maintainability and adherence to project requirements',
            'Diagnosed and resolved technical issues, bugs and performance bottlenecks',
            'Analysed existing team processes, identified areas for improvement and implemented strategies for more efficient workflows',
            'Contributed to team technical documentation, including the introduction of team accessibility guidelines',
            'Line-managed junior members of the team, conducting regular 1-2-1 meetings and upskilling them through pair programming sessions',
        ],
    },
    {
        role: 'Web Engineer',
        company: 'ASOS',
        url: 'https://www.asos.com/?',
        friendly_url: 'www.asos.com',
        companylogo: '/img/icons/common/asos.svg',
        date: 'May 2017 - July 2019',
        desc: 'A leading online global fashion retailer, with over 20 million active users',
        descBullets: [
            'Worked as part of a cross-functional, Agile team to rebuild the ASOS website following a micro-services architecture, using the latest Web technologies',
            'Collaborated with UX, QA and product specialists to deliver fully-tested features that met functional and end-user requirements',
            'Delivered clean, modular and scalable code with 100% unit test coverage',
            'Conducted regular code reviews to ensure code quality, maintainability and adherence to project requirements',
            'Mentored junior developers and regularly pair programmed with developers of all standards in order to share knowledge and complete tasks more efficiently',
        ],
    },
    {
        role: 'Consultant Front End Developer',
        company: 'BAE Systems',
        companylogo: '/img/icons/common/bae-systems.png',
        date: 'Oct 2015 - Mar 2017',
        desc: 'A creative agency providing consulting services to corporate and governmental clients, of which I worked on the following projects:',
        descBullets: [
            "<strong>Vodafone: </strong>Led the development of a Web App to promote Vodafone products that was deployed across 20 of Vodafone's international sites. Provided documentation and presentations to client stakeholders and technical teams, to aid them in customising and deploying the tool to their local markets",
            '<strong>Royal Navy: </strong>Worked as part of a small team to build a cross-platform Web App to manage and track engineering tasks, with a focus on security, reliability and offline availability',
            '<strong>Three Mobile: </strong>Styled the UI for a newly re-platformed Three Mobile blog microsite',
            '<strong>Home Office: </strong>Styled the UI for an internal-facing data entry portal',
        ],
    },
    {
        role: 'Front End Developer',
        company: 'First Utility',
        companylogo: '/img/icons/common/first-utility.png',
        date: 'June 2013 - Sept 2014',
        desc: '',
        descBullets: [
            'Worked as part of a small team to rebuild the First Utility website with a focus on responsive design, including the development of interactive graphs of customer usage data (winner of Utilities Website of the Year Award, 2014)',
        ],
    },
    {
        role: 'Junior Front End Developer',
        company: 'MyDeco',
        companylogo: '/img/icons/common/mydeco.png',
        date: 'Sep 2012 - May 2013',
        desc: '',
        descBullets: ['Developed responsive Web pages and email templates'],
    },
    {
        role: 'Junior Developer',
        company: 'OpenBet',
        companylogo: '/img/icons/common/openbet.jpeg',
        date: 'Sep 2011 - May 2012',
        desc: '',
        descBullets: [
            'Carried out maintenance tasks and bug fixes on enterprise-level front-end and back-end code ',
        ],
    },
    {
        role: 'Intern Developer',
        company: 'Verve Media',
        companylogo: '/img/icons/common/verve.jpeg',
        date: 'Aug 2010',
        desc: '',
        descBullets: [
            'Worked as part of a small team to deliver a fully functional and tested website that met the client requirements, within a tight deadline',
        ],
    },
]

export const projects = [
    // {
    //     name: 'Spot Library',
    //     desc: 'A Web App for mapping skateboarding spots worldwide, built following a serverless approach with a focus on performance and scalability. As the solo developer of the project I have been responsible for each phase of the software development lifecycle from design and UX, to development, testing and deployment.',
    //     github: 'https://github.com/chrisdale44/spot-library',
    //     link: 'https://spot-library.vercel.app/',
    // },
    {
        name: 'Renewal Ease',
        image: '/img/icons/common/re.png',
        desc: 'A website with customer management portal, for onboarding customers, taking payments and uploading documents. An automated process on the backend uses AI to scan documents uploaded and extract relevant data',
    },
    {
        name: "Prints 'n' Photos",
        url: 'https://printsnphotos.com/',
        friendly_url: 'www.printsnphotos.com',
        image: '/img/icons/common/pnp.png',
        desc: 'A website with content management system, built for a client to be able to display and easily edit his collection of limited edition etchings, prints and fine art photographs for private sales',
    },
]

export const feedbacks = []

export const showContactUs = false

// See object prototype on SEO.jsx page
export const seoData = {
    title: 'Chris Dale',
    description: 'A passionate Front End Developer',
    author: 'Chris Dale',
    image: '/img/avatar.png',
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
