<template>
  <form @submit.prevent="handleSubmit">
    <FormField label="Company Name" v-model="form.company" required />
    <FormField label="Job Title" v-model="form.title" required />
    <FormField
      label="Description"
      v-model="form.description"
      type="textarea"
      required
    />

    <div class="row">
      <div class="col-md-6">
        <FormField
          label="Job Type"
          v-model="form.type"
          type="select"
          :options="jobTypes"
          required
        />
      </div>
      <div class="col-md-6">
        <FormField label="Location" v-model="form.location" required />
      </div>
    </div>

    <button type="submit" class="btn btn-primary mt-3">Post Job</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import FormField from "./FormField.vue";

const emit = defineEmits(["submit"]);

const jobTypes = ["Full-time", "Part-time", "Remote"];
const form = ref({
  company: "",
  title: "",
  description: "",
  type: "",
  location: "",
});

const handleSubmit = () => {
  emit("submit", form.value);
};
</script>
