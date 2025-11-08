<script setup lang="ts">
import AppHeader from '@/layouts/default/AppHeader.vue'
import AppFooter from '@/layouts/default/AppFooter.vue'
import SidebarProvider from '@/components/ui/sidebar/SidebarProvider.vue'
import AppSidebar from '@/layouts/default/AppSidebar.vue'
import { SidebarInset } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <AppHeader />
      <main class="min-h-[calc(100vh-80px)]">
        <RouterView />
      </main>
      <AppFooter />
    </SidebarInset>
  </SidebarProvider>
</template>
