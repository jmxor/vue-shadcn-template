<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

interface DraggableItem {
  id: number
  parentId: number | null
  title: string
}

const items = ref<DraggableItem[]>([
  { id: 0, parentId: 1, title: 'Item A' },
  { id: 1, parentId: 1, title: 'Item B' },
  { id: 2, parentId: 2, title: 'Item C' },
])

const draggedOverId = ref<number | null>(null)

const listOne = computed(() => {
  return items.value.filter((item) => item.parentId === 1)
})

const listTwo = computed(() => {
  return items.value.filter((item) => item.parentId === 2)
})

// drag - a dragged item is dragged
// dragend – a drag ends (e.g. we let go of the mouse)
// dragover - a dragged item is moved over a droppable element (calls every hundred milliseconds or so)

// dragstart – we start dragging a draggable element
const onDragStart = (e: DragEvent, item: DraggableItem) => {
  const dt = e.dataTransfer
  if (!dt) return
  dt.dropEffect = 'move'
  dt.effectAllowed = 'move'
  dt.setData('itemID', item.id.toString())
}

// drop – a dragged item is dropped on a droppable element
const onDrop = (e: DragEvent, parent: number) => {
  const itemID = parseInt(e.dataTransfer?.getData('itemID') || '')
  const item = items.value.find((item) => item.id == itemID)
  if (item) item.parentId = parent
  draggedOverId.value = null
}

// dragenter - a dragged item enters a droppable element
const onDragEnter = (id: number) => {
  draggedOverId.value = id
}

// dragleave - a dragged item leaves a droppable element
const onDragExit = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  draggedOverId.value = null
}
</script>

<template>
  <h1>Draggable Example</h1>
  <div class="flex flex-col gap-2">
    <!-- DROPZONE -->
    <div
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter="onDragEnter(1)"
      @dragexit="onDragExit($event)"
      :class="cn('bg-accent mb-4 flex flex-col gap-2 p-2', draggedOverId === 1 && 'bg-green-300')"
    >
      <!-- DRAGGABLE -->
      <div
        v-for="item in listOne"
        :key="item.title"
        draggable="true"
        @dragstart="onDragStart($event, item)"
        class="bg-background p-4"
      >
        {{ item.title }}
      </div>
    </div>

    <!-- DROPZONE -->
    <div
      @drop="onDrop($event, 2)"
      @dragover.prevent
      @dragenter="onDragEnter(2)"
      @dragexit="onDragExit($event)"
      :class="cn('bg-accent mb-4 flex flex-col gap-2 p-2', draggedOverId === 2 && 'bg-green-300')"
    >
      <!-- DRAGGABLE -->
      <div
        v-for="item in listTwo"
        :key="item.title"
        draggable="true"
        @dragstart="onDragStart($event, item)"
        class="bg-background p-4"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
