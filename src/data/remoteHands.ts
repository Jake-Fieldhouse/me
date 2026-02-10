import IconServer from '../components/icons/IconServer.vue'
import IconSignal from '../components/icons/IconSignal.vue'
import IconShieldCheck from '../components/icons/IconShieldCheck.vue'
import IconCheck from '../components/icons/IconCheck.vue'
import IconDatabase from '../components/icons/IconDatabase.vue'
import IconChip from '../components/icons/IconChip.vue'

export const remoteHandsTasks = [
    {
        name: 'Racking & Stacking',
        description: 'Server, switch, and storage installation. Precise positioning, power connection, and cable routing to your specifications.',
        icon: IconServer
    },
    {
        name: 'Cabling & Patching',
        description: 'Structured cabling, patch panel termination, fibre cross-connects, labelling, and cable management to industry standards.',
        icon: IconSignal
    },
    {
        name: 'Hardware Swap & Replacement',
        description: 'Hot-swap drives, PSU replacements, memory upgrades, and component-level changes with photographic confirmation.',
        icon: IconChip
    },
    {
        name: 'Power Cycling & Reboots',
        description: 'Physical server reboots, PDU power cycling, and sequential start-up procedures when remote access isn\'t cutting it.',
        icon: IconDatabase
    },
    {
        name: 'Visual Verification & Audits',
        description: 'LED status checks, asset audits, serial number capture, photographic rack surveys, and inventory reconciliation.',
        icon: IconCheck
    },
    {
        name: 'Vendor Escort & Site Access',
        description: 'Meet and escort third-party engineers, couriers, and contractors. Receive and unbox deliveries on your behalf.',
        icon: IconShieldCheck
    }
]

export const faqs = [
    {
        question: 'What are data centre remote hands?',
        answer: 'Remote hands is a service where a qualified technician physically attends a data centre on your behalf to perform tasks you can\'t do remotely. That includes racking servers, swapping hardware, running cables, power cycling equipment, and performing visual checks. Think of it as your on-site IT team without the full-time salary.'
    },
    {
        question: 'What data centres do you cover in Hull and East Yorkshire?',
        answer: 'I cover all data centre facilities across Hull, East Yorkshire, and the wider Humberside region. Whether your kit is in a managed colo, a comms room in an office block, or a purpose-built facility, I can get there. I\'m also happy to get pre-inducted at your facility so response times are faster from day one.'
    },
    {
        question: 'What\'s the typical response time for remote hands?',
        answer: 'Standard requests are actioned within 4 hours during business hours. Emergency callouts are available with a target response of 2 hours. For clients on a retainer, I offer priority dispatch with guaranteed SLAs. All jobs include a written report with photos.'
    },
    {
        question: 'What\'s the difference between Remote Hands and Smart Hands?',
        answer: 'Remote Hands covers routine physical tasks like racking, cabling, and power cycling — things that just need a reliable pair of hands. Smart Hands goes further: network troubleshooting, firmware updates, OS-level diagnostics, and complex hardware fault isolation. I offer both, so you can scale the level of expertise to the job.'
    },
    {
        question: 'How is this different from your MSP service?',
        answer: 'My MSP service is ongoing IT management: monitoring, patching, security, backups. Remote Hands is physical, on-demand data centre support. They complement each other well — many MSPs actually subcontract remote hands to someone local near the DC. If you need both, I can bundle them. If you just need someone to rack a switch at 7am on a Tuesday, that\'s remote hands.'
    }
]
