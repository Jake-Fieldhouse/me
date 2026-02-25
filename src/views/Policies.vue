<script setup lang="ts">
const policies = [
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal data under UK GDPR.',
    route: '/privacy',
    icon: '🔒',
    color: 'blue'
  },
  {
    title: 'Terms of Service',
    description: 'Service agreements, payment terms, and repair warranties.',
    route: '/terms',
    icon: '📋',
    color: 'neutral'
  },
  {
    title: 'Cookie Policy',
    description: 'Our use of cookies and your consent options.',
    route: '/cookies',
    icon: '🍪',
    color: 'amber'
  },
  {
    title: 'Refund & Cancellation',
    description: 'Our policy on refunds, cancellations, and cooling-off periods.',
    route: '/refunds',
    icon: '💳',
    color: 'purple'
  },
  {
    title: 'Complaints Policy',
    description: 'How to raise concerns and our resolution process.',
    route: '/complaints',
    icon: '📝',
    color: 'red'
  },
  {
    title: 'Service Commitment',
    description: 'Response time targets and availability goals for MSP clients.',
    route: '/service-commitment',
    icon: '⚡',
    color: 'blue'
  },
  {
    title: 'Environmental Policy',
    description: 'Our commitment to sustainable e-waste handling and recycling.',
    route: '/environmental-policy',
    icon: '🌱',
    color: 'emerald'
  },
  {
    title: 'Website Disclaimer',
    description: 'Legal limitations and liability notices for website content.',
    route: '/disclaimer',
    icon: '⚖️',
    color: 'neutral'
  },
  {
    title: 'Accessibility Statement',
    description: 'Our commitment to WCAG 2.2 accessibility standards.',
    route: '/accessibility',
    icon: '♿',
    color: 'purple'
  },
  {
    title: 'Cybersecurity Statement',
    description: 'Our security practices and data protection measures.',
    route: '/cybersecurity',
    icon: '🛡️',
    color: 'cyan'
  },
  {
    title: 'Security Acknowledgments',
    description: 'Recognising security researchers who help keep our systems safe.',
    route: '/security-acknowledgments',
    icon: '🏆',
    color: 'amber'
  }
]

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/60',
    neutral: 'bg-neutral-800/50 border-neutral-700 hover:border-neutral-500',
    amber: 'bg-amber-500/10 border-amber-500/30 hover:border-amber-500/60',
    purple: 'bg-purple-500/10 border-purple-500/30 hover:border-purple-500/60',
    red: 'bg-red-500/10 border-red-500/30 hover:border-red-500/60',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/60',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/60'
  }
  return colors[color] || colors.neutral
}
</script>

<template>
  <div class="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto text-white">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Policies & Legal</h1>
      <p class="text-neutral-400 text-lg max-w-2xl mx-auto">
        Transparency and compliance are core to how we operate. Browse our policies to understand your rights 
        and our commitments.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <router-link
        v-for="policy in policies"
        :key="policy.route"
        :to="policy.route"
        :class="[
          'group p-5 rounded-xl border transition-all duration-300',
          getColorClasses(policy.color)
        ]"
      >
        <div class="flex items-start gap-4">
          <span class="text-3xl">{{ policy.icon }}</span>
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {{ policy.title }}
            </h2>
            <p class="text-sm text-neutral-400 mt-1">{{ policy.description }}</p>
          </div>
          <span class="text-neutral-400 group-hover:text-white transition-colors">→</span>
        </div>
      </router-link>
    </div>

    <div class="mt-16 p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
      <h2 class="text-xl font-bold mb-4">Company Information</h2>
      <div class="grid sm:grid-cols-2 gap-6 text-neutral-300">
        <div>
          <p class="font-medium text-white">Jake Fieldhouse Consulting Ltd</p>
          <p class="text-sm mt-1">Registered in England & Wales</p>
          <p class="text-sm">Company Number: 16536646</p>
        </div>
        <div>
          <p class="font-medium text-white">Contact</p>
          <p class="text-sm mt-1">
            Email: <a href="mailto:jake@jakefieldhouse.co.uk" class="text-blue-400 hover:underline">jake@jakefieldhouse.co.uk</a>
          </p>
          <p class="text-sm">
            Website: <a href="https://jakefieldhouse.co.uk" class="text-blue-400 hover:underline">jakefieldhouse.co.uk</a>
          </p>
        </div>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <router-link to="/" class="text-neutral-400 hover:text-white transition-colors">← Back to Home</router-link>
    </div>
  </div>
</template>
