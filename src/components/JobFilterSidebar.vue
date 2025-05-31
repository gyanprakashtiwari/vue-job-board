<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Filters</h5>
      <div class="mb-3">
        <h6>Location</h6>
        <div class="form-check" v-for="location in locations" :key="location">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'loc-' + location"
            :value="location"
            v-model="selectedLocations"
            @change="emitFilters"
          />
          <label class="form-check-label" :for="'loc-' + location">{{
            location
          }}</label>
        </div>
      </div>
      <div class="mb-3">
        <h6>Job Type</h6>
        <div class="form-check" v-for="type in jobTypes" :key="type">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'type-' + type"
            :value="type"
            v-model="selectedTypes"
            @change="emitFilters"
          />
          <label class="form-check-label" :for="'type-' + type">{{
            type
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const jobTypes = ["Full-time", "Part-time", "Remote"];
const locations = ["Bangalore", "Noida", "Gurgaon"];

const selectedTypes = ref([]);
const selectedLocations = ref([]);

const emit = defineEmits(["update-filters"]);

const emitFilters = () => {
  emit("update-filters", {
    types: selectedTypes.value,
    locations: selectedLocations.value,
  });
};
</script>
