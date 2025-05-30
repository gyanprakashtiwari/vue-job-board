<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ job.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ job.company }} • {{ job.location }}
      </h6>
      <p class="card-text">{{ job.description }}</p>
      <span class="badge bg-primary me-2">{{ job.type }}</span>
      <router-link
        :to="`/jobs/${job.id}`"
        class="btn btn-sm btn-outline-primary"
        >View Details</router-link
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>
