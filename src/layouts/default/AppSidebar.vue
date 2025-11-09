<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'About',
          url: '/About',
        },
        {
          title: 'Draggable Example',
          url: '/examples/draggable',
        },
        {
          title: 'Project Structure',
          url: '#',
        },
      ],
    },
    {
      title: 'Building Your Application',
      url: '#',
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarContent>
      <SidebarGroup v-for="item in data.navMain" :key="item.title">
        <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
              <SidebarMenuButton as-child :is-active="$route.path === childItem.url">
                <RouterLink :to="childItem.url">{{ childItem.title }}</RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
