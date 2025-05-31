import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Noida",
      state: "UP",
      type: "Part-time",
      postDate: "2 days ago",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript. You will work with a talented team of developers and designers to create beautiful, responsive user interfaces.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit est, in reprehenderit saepe dolor eius a id minus, corrupti architecto sint, assumenda eligendi explicabo vel repellat voluptas cupiditate maxime!",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Slam Tech Corp",
      location: "Bangalore",
      state: "KA",
      type: "Full-time",
      postDate: "2 weeks ago",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript. You will work with a talented team of developers and designers to create beautiful, responsive user interfaces.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit est, in reprehenderit saepe dolor eius a id minus, corrupti architecto sint, assumenda eligendi explicabo vel repellat voluptas cupiditate maxime!",
    },

    {
      id: 3,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript. You will work with a talented team of developers and designers to create beautiful, responsive user interfaces.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit est, in reprehenderit saepe dolor eius a id minus, corrupti architecto sint, assumenda eligendi explicabo vel repellat voluptas cupiditate maxime!",
    },
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
