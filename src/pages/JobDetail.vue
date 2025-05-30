<template>
  <div class="container mt-4" v-if="job">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <JobDescription :job="job" />
        <div class="d-flex gap-2 mt-4">
          <ApplyButton />
          <router-link to="/jobs" class="btn btn-outline-secondary"
            >Back to Jobs</router-link
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mt-4">
    <div class="alert alert-danger">Job not found</div>
    <router-link to="/jobs" class="btn btn-outline-secondary"
      >Back to Jobs</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "../store/jobs";
import JobDescription from "../components/JobDescription.vue";
import ApplyButton from "../components/ApplyButton.vue";

const route = useRoute();
const jobsStore = useJobsStore();

const job = computed(() => jobsStore.getJobById(route.params.id));
</script>
