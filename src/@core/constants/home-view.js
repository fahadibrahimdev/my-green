import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Ordering In Can Be Healthy!',
    subHeading: 'The app that doesn\'t just tell you where to eat healthily, but delivers it too',
    text: 'Keeping track of all the healthy food you should eat is hard. Every food app you turn to beckons you with greasy, fattening, and processed meals. With Mygreen you get tons of healthy food and local restaurant delivery options picked out specifically',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Sticking to a Healthy Diet Does Not Have to be Tedious; Nutritious Meals Should Not Have to be Bland',
    subHeading: 'THE APP TO KEEP YOU FOCUSED',
    features: [
        {
            title: 'Select Dietary Preferences',
            description: 'Match what you want in your meals and what you want to avoid from a set of options.',
            icon: 'nutrition-guide'
        },
        {
            title: 'Restaurant Offerings Near You',
            description: 'Choose from a list of healthy menu items from restaurants near your current location.',
            icon: 'date'
        },
        {
            title: 'Nutrition and Supplements',
            description: 'Order sports and fitness supplements from dedicated outlets near you.',
            icon: 'healthy-diet'
        },
        {
            title: 'Loyalty Program',
            description: 'Subscribe to Mygreen’s loyalty program to get free delivery and other benefits.',
            icon: 'safety'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'The most difficult part of a person’s fitness journey is to religiously stick to a healthy diet, which is arguably the biggest part of in achieving your fitness goals. However, it is difficult to scour for organic ingredients and prepare your own meals multiple times a day; especially if you are on a tight schedule.',
        'Don\'t settle for fast food when you can always rely on Mygreen to deliver your diet and supplements to your front door. The app is the first of its kind in food delivery apps to offer both restaurant food and sports nutrition product delivery.',
    ],
}

export const benefitsContent = {
    heading: 'Creating Opportunities',
    text: 'Mygreen is not just helping consumers achieve their fitness goals; it is dedicated to empowering communities and local outlets that deal in nutritious and organic products. In order to do that the service requires reliable drivers to be a part of its network. ',
    benefits: [
        {
            title: 'Great Side Hustle',
            description: 'You can work part-time and simply drive around your designated area to earn extra income. ',
            icon: 'fast-delivery'
        },
        {
            title: 'More Control',
            description: 'Choose your own hours. You can accept or decline delivery orders according to how many gigs you want to complete. ',
            icon: 'clock'
        },
        {
            title: 'Get Paid for your Commute',
            description: 'Find yourself driving all the time? Sign up with Mygreen and make money delivering along the same route.',
            icon: 'place-bids'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'How does the payment model work?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Can I order supplements and food at the same time?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What do I do if I received the wrong order?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Download Mygreen Before Your Next Meal!',
    text: 'From Scouring Restaurants to Delivering on Time. We have Got You Covered!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'Mygreen',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
