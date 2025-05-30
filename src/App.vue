<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link to="/" class="navbar-brand">Job Board</router-link>
      <div class="navbar-nav">
        <router-link to="/jobs" class="nav-link">Browse Jobs</router-link>
        <router-link to="/post-job" class="nav-link">Post a Job</router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
