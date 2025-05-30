<template>
  <div class="input-group mb-4">
    <input
      type="text"
      class="form-control"
      placeholder="Search jobs..."
      v-model="searchTerm"
      @input="handleSearch"
    />
    <button class="btn btn-outline-secondary" type="button">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchTerm = ref("");
const emit = defineEmits(["search"]);

const handleSearch = () => {
  emit("search", searchTerm.value);
};
</script>
