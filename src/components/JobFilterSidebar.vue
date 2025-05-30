<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Filters</h5>

      <div class="mb-3">
        <h6>Job Type</h6>
        <div class="form-check" v-for="type in jobTypes" :key="type">
          <input
            class="form-check-input"
            type="checkbox"
            :id="type"
            :value="type"
            v-model="selectedTypes"
          />
          <label class="form-check-label" :for="type">{{ type }}</label>
        </div>
      </div>

      <div class="mb-3">
        <h6>Location</h6>
        <input
          type="text"
          class="form-control"
          placeholder="Filter by location"
          v-model="locationFilter"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const jobTypes = ["Full-time", "Part-time", "Remote", "Contract"];
const selectedTypes = ref([]);
const locationFilter = ref("");
</script>
