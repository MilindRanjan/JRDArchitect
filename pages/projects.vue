<template>
<div>
  <Header />
  <div class="projects-container">
    <div class="project-list">
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.name }}
        </li>
      </ul>
    </div>
    <div class="project-images">
      <img v-for="project in projects" :src="project.image" :alt="project.name" :key="project.id">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'Project 1', image: 'path/to/image1.jpg' },
        { id: 2, name: 'Project 2', image: 'path/to/image2.jpg' },
        // Add more projects as needed
      ]
    };
  }
}
</script>

<style>
.projects-container {
  display: flex;
  justify-content: space-between;
}
.project-list ul {
  padding: 0;
}
.project-list li {
  margin-bottom: 20px;
  list-style: none;
}
.project-images img {
  width: 100px; /* Adjust size as needed */
  height: auto;
}
</style>