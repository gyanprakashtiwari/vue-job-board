<template>
  <div class="container mt-4">
    <h1 class="mb-4">Job Listings</h1>

    <div class="row">
      <div class="col-md-3">
        <JobFilterSidebar />
      </div>
      <div class="col-md-9">
        <SearchBar @search="handleSearch" />

        <div v-if="filteredJobs.length > 0">
          <JobCard v-for="job in paginatedJobs" :key="job.id" :job="job" />
          <Pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-changed="changePage"
          />
        </div>

        <div v-else class="alert alert-info">
          No jobs found matching your criteria.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useJobsStore } from "../store/jobs";
import JobCard from "../components/JobCard.vue";
import SearchBar from "../components/SearchBar.vue";
import JobFilterSidebar from "../components/JobFilterSidebar.vue";
import Pagination from "../components/Pagination.vue";

const jobsStore = useJobsStore();
const searchTerm = ref("");
const currentPage = ref(1);
const jobsPerPage = 5;

const filteredJobs = computed(() => {
  return jobsStore.jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredJobs.value.length / jobsPerPage);
});

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * jobsPerPage;
  const end = start + jobsPerPage;
  return filteredJobs.value.slice(start, end);
});

const handleSearch = (term) => {
  searchTerm.value = term;
  currentPage.value = 1;
};

const changePage = (page) => {
  currentPage.value = page;
};
</script>
