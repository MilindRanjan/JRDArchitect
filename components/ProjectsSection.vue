<template>
  <section class="projects-section">
    <h1 class="projects-heading text-center">Our Projects</h1>
    
    <div class="gallery-container">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['project-item', `item-${index + 1}`]"
        @click="openModal(project)"
      >
        <div class="image-wrapper">
          <!-- Fallback if image fails to load -->
          <div v-if="!project.image" class="image-placeholder">
            <span>{{ project.name }}</span>
          </div>
          
          <img
            :src="project.image"
            :alt="project.name"
            class="project-image"
            @error="handleImageError(project)"
          />
        </div>
        <div class="project-overlay">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <span class="sr-only">Close</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="modal-image-container">
          <img
            :src="selectedProject.image"
            :alt="selectedProject.name"
            class="modal-image"
            @error="handleImageError(selectedProject)"
          />
        </div>
        
        <div class="modal-info">
          <h2 class="modal-title">{{ selectedProject.name }}</h2>
          <p class="modal-description">{{ selectedProject.description }}</p>
          <div class="modal-details">
            <p>{{ selectedProject.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedProject = ref(null);

// Updated projects with proper image paths
const projects = ref([
  {
    id: 1,
    name: 'South Elevation',
    image: 'Projects/south elevation1.jpg',
    description: 'Contemporary architectural design with sustainable elements',
    details: 'A flagship project showcasing modern architectural principles with emphasis on sustainability and functionality.'
  },
  {
    id: 2,
    name: 'Modern Living',
    image: 'Projects/20140720_163258(2).jpg',
    description: 'Luxurious residential complex with modern amenities',
    details: 'Spacious living spaces designed with comfort and elegance in mind.'
  },
  {
    id: 3,
    name: 'Urban Design',
    image: 'Projects/ek-bihari3.jpg',
    description: 'Urban architectural marvel',
    details: 'Innovative urban design that blends with the cityscape.'
  },
  {
    id: 4,
    name: 'Front Pergola',
    image: 'Projects/front pergola 28 10 24(4).jpg',
    description: 'Elegant outdoor living space',
    details: 'Custom-designed pergola that creates a seamless indoor-outdoor transition.'
  },
  {
    id: 5,
    name: 'Rear View',
    image: 'Projects/rear view5.JPG',
    description: 'Stunning rear facade design',
    details: 'Carefully crafted rear elevation that maximizes natural light and views.'
  },
  {
    id: 6,
    name: 'Modern Facade',
    image: 'Projects/f1(6).jpg',
    description: 'Contemporary facade treatment',
    details: 'Bold and modern facade design that makes a statement.'
  },
  {
    id: 7,
    name: 'Nursing Home',
    image: 'Projects/View nursing home TRIM copy7.jpg',
    description: 'Healthcare facility design',
    details: 'Purpose-built healthcare facility with focus on patient comfort.'
  },
  {
    id: 8,
    name: 'Yarpur View',
    image: 'Projects/yarpur_view (8).jpg',
    description: 'Panoramic residential project',
    details: 'Residential complex with emphasis on views and natural ventilation.'
  }
]);

const handleImageError = (project) => {
  project.image = ''; // Clear image if it fails to load
  console.error(`Failed to load image for ${project.name}`);
};

const openModal = (project) => {
  selectedProject.value = project; // Show modal with project details
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeModal = () => {
  selectedProject.value = null; // Hide modal
  document.body.style.overflow = ''; // Re-enable background scrolling
};

</script>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-heading {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.gallery-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  /* Remove fixed height to allow content to dictate height */
  height: 1200px; /* Change to auto to remove extra space */
  padding-bottom: 0; /* Ensure no padding is added at the bottom */
}


.project-item {
  position: absolute;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: #f5f5f5;
  height: auto; /* Keep height auto to fit content */
}

.project-image {
  width: 100%;
  height: 100%; /* Ensure the image takes full height of the parent */
  object-fit: cover; /* Maintain aspect ratio */
  display: block; /* Remove inline space */
}

/* Adjust padding of the overlay */
.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem; /* Ensure padding does not push content out */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Adjust hover effects */
.project-item:hover .project-overlay {
  transform: translateY(0);
}

.project-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.project-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  line-height: 1.4;
}

/* Hover effects */
.project-item:hover {
  transform: scale(1.02);
  z-index: 10;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Exact positioning for each item */
.item-1 {
  top: 60px;
  left: 6.5%;
  width: 25%;
  height: fit-content;
}

.item-2 {
  top: -40px;
  left: 33%;
  width: 32%;
  height: fit-content;
  background-size: cover;
}

.item-3 {
  top: 30px;
  right: 11.5%;
  width: 22%;
  height: fit-content;
}

.item-4 {
  top: 320px;
  left: 3.5%;
  width: 20%;
  height: fit-content;
}

.item-5 {
  top: 310px;
  left: 25%;
  width: 50%;
  height: fit-content;
}

.item-6 {
  top: 320px;
  right: 3.5%;
  width: 20%;
  height: fit-content;
}

.item-7 {
  bottom: 370px;
  left: 20%;
  width: 32%;
  height: fit-content;
}

.item-8 {
  bottom: 430px;
  right: 27%;
  width: 20%;
  height: fit-content;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  max-width: 800px;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
  padding: 1rem;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.modal-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.modal-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.modal-info {
  padding: 1rem;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.modal-description {
  margin-bottom: 0.5rem;
}

.modal-details {
  font-size: 0.875rem;
}
@media screen and (max-width: 768px) {
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns for two items per row */
    gap: 1rem; /* Space between the items */
    padding: 0 1rem; /* Optional padding for mobile view */
    height: fit-content;
    /* Ensure height adjusts based on content */
  }

  .project-item {
    position: static; /* Reset positioning */
    width: 100%; /* Make the item responsive */
    height: fit-content;
    /* Ensure height adjusts to fit content */
  }

  .project-image {
    width: 100%; /* Scale image to fit its container */
    height: fit-content;/* Maintain aspect ratio */
    object-fit: cover; /* Ensure image fits nicely */
  }

  /* Reset individual item positions for mobile view */
  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6,
  .item-7,
  .item-8 {
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
  }
  .project-overlay{
  display: none;
} 
}
</style>