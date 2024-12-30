<template>
  <header>
    <div class="logo-container">
      <img src="/logo.jpeg" alt="Company Logo" class="logo">
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/about">About Us</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact Me</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
}

.logo-container {
  flex-grow: 1;
}

.logo {
  height: 50px; /* Adjust size as needed */
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05); /* Slight hover effect for logo */
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}

nav li {
  margin: 0 15px;
  position: relative;
}

nav a {
  text-decoration: none;
  font-size: 16px;
  color: #000;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #555;
}

nav li::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -5px;
  left: 0;
}

nav li:hover::after {
  width: 100%; /* Underline expands on hover */
}
</style>