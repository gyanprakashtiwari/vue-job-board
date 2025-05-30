<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ job.title }}</h2>
      <h4 class="card-subtitle mb-3 text-muted">{{ job.company }}</h4>
      <div class="d-flex gap-2 mb-3">
        <span class="badge bg-primary">{{ job.type }}</span>
        <span class="badge bg-secondary">{{ job.location }}</span>
      </div>
      <div class="card-text" v-html="formattedDescription"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const formattedDescription = computed(() => {
  return props.job.fullDescription.replace(/\n/g, "<br>");
});
</script>
