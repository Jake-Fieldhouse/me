import IconMicrosoft from '../components/icons/IconMicrosoft.vue'
import IconAzure from '../components/icons/IconAzure.vue'
import IconWindows from '../components/icons/IconWindows.vue'
import IconApple from '../components/icons/IconApple.vue'

export const supportedPlatforms = [
    {
        name: 'Microsoft 365',
        icon: IconMicrosoft,
        colorClass: 'text-blue-400',
        bgClass: 'bg-blue-500/10'
    },
    {
        name: 'Azure',
        icon: IconAzure,
        colorClass: 'text-cyan-400',
        bgClass: 'bg-cyan-500/10'
    },
    {
        name: 'Windows',
        icon: IconWindows,
        colorClass: 'text-blue-300',
        bgClass: 'bg-blue-600/10'
    },
    {
        name: 'macOS',
        icon: IconApple,
        colorClass: 'text-neutral-400',
        bgClass: 'bg-neutral-500/10'
    }
]

export const keyFeatures = [
    {
        name: '24/7 Remote Monitoring',
        description: 'Your servers and workstations are watched around the clock. Disk space alerts, CPU spikes, and offline warnings are all handled proactively.',
        dotColor: 'bg-blue-500'
    },
    {
        name: 'AI-Powered Threat Defense',
        description: 'EDR that catches AI-generated phishing and ransomware, the top threats UK SMEs face in 2026.',
        dotColor: 'bg-cyan-500'
    },
    {
        name: 'Backup & Disaster Recovery',
        description: 'Automated cloud backups ensure your critical business data is never lost, even in a catastrophe.',
        dotColor: 'bg-indigo-500'
    }
]

export const serviceTiers = [
    {
        name: 'Essential',
        description: 'For solopreneurs and small teams.',
        highlight: false,
        features: [
            'Remote Support',
            'Windows/Mac Patching',
            'Basic Antivirus'
        ]
    },
    {
        name: 'Growth',
        description: 'For growing agencies and offices.',
        highlight: true,
        tag: 'MOST POPULAR',
        features: [
            'Everything in Essential',
            'Microsoft 365 Management',
            'Cloud Backups (1TB)',
            'Priority SLA Response'
        ]
    }
]

export const faqs = [
    {
        question: 'What IT support is available for small businesses in Hull?',
        answer: 'I offer Managed IT Services for small businesses across Hull and East Yorkshire. Depending on what you need, that can include 24/7 monitoring, EDR cybersecurity, Microsoft 365 setup, cloud backups, and straightforward support when things go wrong.'
    },
    {
        question: 'How much does managed IT support cost for a small business?',
        answer: 'Pricing depends on your setup, whether that\'s per-device or per-user. I keep things flexible with Essential and Growth tiers so you\'re not paying for stuff you don\'t need. Drop me a message for a quote.'
    },
    {
        question: 'Do you offer cybersecurity services for businesses in East Yorkshire?',
        answer: 'Yes, security is baked into everything I do. That means Endpoint Detection & Response (EDR), ransomware protection, and keeping an eye on things so problems get caught early, not after the damage is done.'
    },
    {
        question: 'Can you help migrate our business to Microsoft 365 or Azure?',
        answer: 'Definitely. I\'ve moved plenty of businesses from clunky on-premise setups to Microsoft 365 and Azure. I handle the migration properly so you\'re not stuck with downtime or lost emails.'
    },
    {
        question: 'What areas do you cover for on-site IT support?',
        answer: 'I\'m based in Hull and cover Beverley, Driffield, Bridlington, Goole, Cottingham, Hessle, and the rest of East Yorkshire for on-site work. Remote support is available anywhere in the UK.'
    }
]
