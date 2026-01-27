# Contributing to Jake Fieldhouse Consulting Site

Thank you for your interest in contributing. This document outlines our development standards.

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **GSAP** for animations

## Code Style

### Vue Components

```vue
<script setup lang="ts">
// Imports first
import { ref, computed } from 'vue'
import type { SomeType } from '@/types'

// Props and emits
const props = defineProps<{
  title: string
  count?: number
}>()

// Reactive state
const isActive = ref(false)

// Computed
const displayTitle = computed(() => props.title.toUpperCase())

// Functions
function handleClick() {
  isActive.value = !isActive.value
}
</script>

<template>
  <!-- Template here -->
</template>
```

### TypeScript

- Avoid `any` types - use proper typing
- Define interfaces for complex objects
- Use type imports: `import type { X } from '...'`

### Tailwind

- Use utility classes directly in templates
- Avoid custom CSS where Tailwind suffices
- Follow mobile-first responsive design (`sm:`, `md:`, `lg:`)

## Commit Messages

Follow conventional commits:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting only
refactor: code restructure
chore: maintenance tasks
```

## Branch Naming

```
feature/description-here
fix/bug-description
docs/what-changed
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run build`
4. Submit PR with clear description
5. Await review

## Local Development

```bash
npm install
npm run dev
```

## Questions?

Contact: jake@jakefieldhouse.co.uk
