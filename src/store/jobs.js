import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "New York",
      type: "Full-time",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript. You will work with a talented team of developers and designers to create beautiful, responsive user interfaces.",
    },
    // Add more jobs here (at least 10)
  ]);

  const addJob = (newJob) => {
    jobs.value.push({
      id: jobs.value.length + 1,
      ...newJob,
    });
  };

  const getJobById = (id) => {
    return jobs.value.find((job) => job.id === Number(id));
  };

  return { jobs, addJob, getJobById };
});
