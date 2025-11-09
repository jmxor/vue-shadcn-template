<script setup lang="ts">
type FooterLink = {
  text: string
  url: string
}

const footerLinks: FooterLink[] = [
  { text: 'Terms and Conditions', url: '#' },
  { text: 'Privacy Policy', url: '#' },
]
</script>

<template>
  <footer
    class="text-muted-foreground flex h-8 flex-col justify-between gap-4 border-t px-4 text-sm md:flex-row md:items-center"
  >
    <p>&copy; {{ new Date().getFullYear() }} jmxor. All rights reserved.</p>
    <ul className="flex gap-4">
      <li v-for="(item, index) in footerLinks" :key="index" class="hover:text-primary underline">
        <RouterLink :to="item.url">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </footer>
</template>
