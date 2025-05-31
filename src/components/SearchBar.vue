<template>
  <div class="input-group mb-4">
    <button class="btn btn-outline-secondary border-end-0" type="button">
      <img
        src="../assets/icons/mg.png"
        alt="Search"
        style="height: 1rem; width: 1rem"
      />
    </button>
    <input
      type="text"
      class="form-control border-start-0"
      placeholder="Search jobs..."
      v-model="searchTerm"
      @input="handleSearch"
    />
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

<style scoped>
/* Optional: Add hover effect */
.btn:hover img {
  opacity: 0.8;
}

/* Remove focus outline */
.btn:focus {
  box-shadow: none;
}
</style>
