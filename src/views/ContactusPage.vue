<template>
  <section class="contact-page">
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us and we'll get back to you shortly.</p>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" class="btn contact-btn">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  alert("Form submitted! (Demo only)");
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 60px 20px;
  background: #f6f8fc;
}

.contact-container {
  background: white;
  padding: 50px 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  text-align: center;
}

.contact-container h1 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #111827;
}

.contact-container p {
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
}

.contact-form .form-group {
  text-align: left;
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.contact-form input,
.contact-form textarea {
  width: 90%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #4f46e5;
}

.contact-btn {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 14px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.contact-btn:hover {
  background: #3730a3;
}

/* Responsive */
@media (max-width: 480px) {
  .contact-container {
    padding: 30px 20px;
  }
}
</style>