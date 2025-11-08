<script setup lang="ts">
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import AppBreadcrumbs from '@/layouts/default/AppBreadcrumbs.vue'
</script>

<template>
  <header class="flex h-12 shrink-0 items-center gap-2 border-b px-2">
    <SidebarTrigger />
    <Separator orientation="vertical" class="mr-2 max-h-5" />
    <AppBreadcrumbs />
  </header>
</template>
