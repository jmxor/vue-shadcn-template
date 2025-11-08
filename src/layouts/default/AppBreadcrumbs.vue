<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Breadcrumb {
  name: string
  link: string
}

const route = useRoute()
const breadcrumbs = computed<Breadcrumb[]>(() => {
  return (route.meta.breadcrumbs as Breadcrumb[]) || []
})

//TODO handle compacting long breadcrumb strings in to BreadcrumbEllipsis
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(crumb, index) in breadcrumbs" :key="crumb.link">
        <BreadcrumbItem class="hidden md:block">
          <BreadcrumbLink v-if="index < breadcrumbs.length - 1" as-child>
            <RouterLink :to="crumb.link">{{ crumb.name }}</RouterLink>
          </BreadcrumbLink>
          <BreadcrumbPage v-else>{{ crumb.name }}</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" class="hidden md:block" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
