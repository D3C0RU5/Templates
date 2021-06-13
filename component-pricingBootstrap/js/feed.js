const feedPricing = {
    plansTypes: [
        {
            title: ''
        },
        {
            title: 'Individual',
            color: 'rgb(50, 51, 56)',
            button: {
                text: 'Get Started',
                link: 'javscript:void(0)'
            }
        },
        {
            title: 'Basic',
            color: 'rgb(162, 93, 220)',
            button: {
                text: 'Try for free',
                link: 'javscript:void(0)'
            }
        },
        {
            title: 'Standard',
            color: 'rgb(0, 133, 255)',
            button: {
                text: 'Try for free',
                link: 'javscript:void(0)'
            }
        },
        {
            title: 'Pro',
            color: 'rgb(0, 162, 91)',
            button: {
                text: 'Try for free',
                link: 'javscript:void(0)'
            }
        },
        {
            title: 'Enterprise',
            color: 'rgb(43, 44, 93)',
            button: {
                text: 'Contact us',
                link: 'javscript:void(0)'
            }
        },
    ],
    plansItems: [
        {
            title: 'Essentials',
            items: [
                {
                    head: 'Maximum number of seats',
                    info: 'The maximum number of people per account',
                    individual: 'Up to 2 seats',
                    basic: 'Unlimited',
                    standard: 'Unlimited',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                },
                {
                    head: 'Items',
                    info: 'Within boards we have rows, or "Items" - An Item can be anything you want it to be - Task, project, customer, etc. Each free account starts with 200 free Items. You can get more Items by referring friends to create their own accounts.',
                    individual: 'Up to 1000',
                    basic: 'Unlimited',
                    standard: 'Unlimited',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                },
                {
                    head: 'File storage',
                    info: 'More storage means more space to save files, images, and important documents.',
                    individual: '500 MB',
                    basic: '5 GB',
                    standard: '20 GB',
                    pro: '100 GB',
                    enterprise: '1000 GB',
                },
                {
                    head: 'Activity log',
                    info: 'Track all changes to your work and see who changed what and when.',
                    individual: '1 week',
                    basic: '1 week',
                    standard: '6 months',
                    pro: '1 year',
                    enterprise: '5 years',
                },
                {
                    head: 'Unlimited boards',
                    info: 'Boards are the place for organizing all your work and data (e.g. projects, clients, processes) and you can add as many as you\'d like :)',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Over 20 column types',
                    info: 'Build your board the way you want with our variety of column types.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: '200+ templates',
                    info: 'Choose from over 200+ templates for every industry, and customize them to fit your team\'s needs.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'iOS and Android apps',
                    info: 'Stay connected on-the-go and access monday.com from your smart phone.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Unlimited free viewers',
                    info: 'Viewers have read only access to the data within the account with no editing rights.',
                    individual: '',
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
            ]
        },
        {
            title: 'Collaboration',
            items: [
                {
                    head: 'Embedded documents',
                    info: 'Collaborate on shared docs directly from within monday.com',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Whiteboard collaboration',
                    info: 'Brainstorm, edit, and create together on this shared collaborative whiteboard.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Updates section',
                    info: 'Communicate with your team, share files and documents, and stay-up-to-date in real-time.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Zoom integration',
                    info: 'Create and join Zoom meetings with other team members directly from your monday.com boards.',
                    individual: '',
                    basic: '',
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Guest access',
                    info: 'Collaborate on specific projects with your outside users without giving them access to your full account.',
                    individual: '',
                    basic: '',
                    standard: '4 guests billed as 1 seat',
                    pro: 'Unlimited',
                    enterprise: 'Unlimited',
                }
            ]
        },
        {
            title: 'Productivity',
            items: [
                {
                    head: 'iOS and Android apps',
                    info: 'Stay connected on-the-go and access monday.com from your smart phone.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Shareable forms',
                    info: 'Create and customize a form directly from your monday.com board and share it anywhere.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Customizable notifications',
                    info: 'Stay on top of your work at all times with customizable notifications to fit your exact needs.',
                    individual: true,
                    basic: true,
                    standard: true,
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Integrations',
                    info: 'Connect monday.com with the tools you already use to have all your team’s work in one place.',
                    individual: '',
                    basic: '',
                    standard: '250 actions/month',
                    pro: '25,000 actions/month',
                    enterprise: '250,000 actions/month',
                },
                {
                    head: 'Automations',
                    info: 'Automate repetitive work by setting customizable actions in your boards.',
                    individual: '',
                    basic: '',
                    standard: '250 actions/month',
                    pro: '25,000 actions/month',
                    enterprise: '250,000 actions/month',
                },
                {
                    head: 'Premium Integrations',
                    info: 'Connect monday.com with SalesForce or your ERP such as NetSuite.',
                    individual: '',
                    basic: '',
                    standard: '',
                    pro: '',
                    enterprise: true,
                },
                {
                    head: 'Time tracking',
                    info: 'Track and monitor the time spent on each task.',
                    individual: '',
                    basic: '',
                    standard: '',
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Formula column',
                    info: 'Create formulas to perform data calculations on your monday.com boards.',
                    individual: '',
                    basic: '',
                    standard: '',
                    pro: true,
                    enterprise: true,
                },
                {
                    head: 'Dependency column',
                    info: 'Dependency columns ensure a consistent relationship between items - for example: one item can only start after the other is complete.',
                    individual: '',
                    basic: '',
                    standard: '',
                    pro: true,
                    enterprise: true,
                }
            ]
        }
    ]
}

/*
    # If you want typescript

    interface Feed {
        planType: PlanType[];
        plansItems: PlansItems[];
    }

    interface PlanType {
        title: string;
        button: { text: string; link: string }
    }

    interface PlansItems {
        title: string;
        items: ContentItem[]
    }

    interface ContentItem {
        head: string,
        info: string,
        individual: any,
        basic: string | boolean,
        standard: string | boolean,
        pro: string | boolean,
        enterprise: string | boolean,
    }
*/