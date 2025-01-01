<template>
  <header :class="{ 'mobile-open': isMenuOpen }">
    <div class="logo-container">
      <!-- //<img src="/logo.jpeg" alt="Company Logo" class="logo" > -->
    </div>
    
    <button 
      class="hamburger" 
      @click="toggleMenu" 
      :aria-expanded="isMenuOpen" 
      aria-label="Toggle navigation menu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <nav :class="{ 'nav-open': isMenuOpen }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <nuxt-link 
            :to="item.path"
            @click="closeMenu"
            :class="{ 'active': $route.path === item.path }"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Overlay for mobile menu -->
    <div 
      v-if="isMenuOpen" 
      class="mobile-overlay"
      @click="closeMenu"
    ></div>

    <!-- Projects Section -->
    <section class="projects-section py-16">
      <div class="container mx-auto px-8 lg:px-16">
        <h2 class="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div class="masonry-grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="masonry-item"
            @click="openModal(project)"
          >
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
            />
            <div class="project-name">{{ project.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl">
        <button
          class="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
          @click="closeModal"
        >
          &times;
        </button>
        <img
          :src="selectedProject.image"
          :alt="selectedProject.name"
          class="w-full h-full object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-bold">{{ selectedProject.name }}</h3>
          <p class="mt-2">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const projects = ref([
  {
    id: 1,
    name: 'Project A',
    image: '/Projects/bus view.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 2,
    name: 'Project B',
    image: '/Projects/bust.jpg',
    description: 'E-commerce platform with real-time inventory management.',
    technologies: ['Nuxt.js', 'MongoDB', 'Express'],
    link: '#'
  },
  {
    id: 3,
    name: 'Project C',
    image: '/Projects/ZP BEGU.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 4,
    name: 'Project D',
    image: '/Projects/yarpur_view (1).jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 5,
    name: 'Project E',
    image: '/Projects/View nursing home TRIM copy.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 6,
    name: 'Project F',
    image: '/Projects/ek-bihari.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 7,
    name: 'Project G',
    image: '/Projects/south elevation.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 8,
    name: 'Project H',
    image: '/Projects/f1.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    id: 9,
    name: 'Project I',
    image: '/Projects/front pergola 28 10 24.jpg',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind', 'Node.js'],
    link: '#'
  },
  // Add more projects...
]);

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    // Simulated fetch call
    data.value = await fetchSomeData();
  } catch (err) {
    console.error('Failed to fetch data:', err);
    error.value = err;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* Masonry grid setup */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 1.5rem; /* Space between items */
  grid-auto-rows: 200px; /* Base height for rows */
}

.masonry-item {
  break-inside: avoid; /* Prevent breaking items */
  position: relative;
  overflow: hidden; /* Prevent overflow */
}

.masonry-item img {
  object-fit: cover; /* Maintain aspect ratio */
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.3s ease;
}

/* Alternate row heights for masonry effect */
.masonry-item:nth-child(3n+1) {
  grid-row: span 2; /* Taller item */
}

.masonry-item:nth-child(3n+2) {
  grid-row: span 1; /* Standard height */
}

.masonry-item:nth-child(3n+3) {
  grid-row: span 1.5; /* Medium height */
}

/* Hover effect */
.masonry-item:hover img {
  transform: scale(1.05); /* Slight zoom on hover */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }
}

@media (max-width: 640px) {
  .masonry-grid {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
}

/* Overlay styling */
.project-overlay {
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
  opacity: 0; /* Initially hidden */
}

.masonry-item:hover .project-overlay {
  opacity: 1; /* Visible on hover */
}
</style>