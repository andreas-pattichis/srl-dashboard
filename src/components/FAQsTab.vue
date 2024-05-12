<template>
  <v-container fluid>
    <v-row no-gutters id="faq-header" class="align-start">
      <v-col cols="12">
        <h1>{{ $t('faq.title') }}</h1>
      </v-col>
    </v-row>
    <v-row no-gutters id="faqs">
      <v-col cols="12" v-for="n in numberOfFaqs" :key="n" class="faq-item">
        <h2>{{ $t(`faq.question${n}`) }}</h2>
        <p>{{ $t(`faq.answer${n}`) }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FAQsTab",
  data() {
    return {
      numberOfFaqs: 3 // Adjust this number based on how many Q&A you have in your locales
    };
  }
}
</script>

<style scoped>
#faq-header {
  margin-top: 0px;
  text-align: left;
}

#faqs {
  margin-top: 20px;
  margin-bottom: 30px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-item h2 {
  color: #333;
  font-size: 18px;
}

.faq-item p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

#faq-header {
  margin-top: 0px;
  margin-bottom: 30px; /* Adds more space below the header */
}

#faqs {
  margin-top: 20px;
  padding: 0 15px; /* Adds padding to the sides for better alignment */
}

.faq-item {
  margin-bottom: 40px; /* Increases spacing between FAQ items */
  border-bottom: 1px solid #eaeaea; /* Adds a light border for separation */
  padding-bottom: 20px; /* Padding at the bottom of each item */
}

.faq-item:last-child {
  border-bottom: none; /* Removes border from the last item */
}

.faq-item h2 {
  color: #2C3E50; /* Darker color for questions for better focus */
  font-size: 20px; /* Larger font size for questions */
  font-weight: 600; /* Bold font weight for questions */
  display: flex;
  align-items: center; /* Aligns icon with text */
}

.faq-item h2:before {
  content: 'Q'; /* Adds a 'Q' before the question */
  background-color: #FFD700; /* Golden background for icon */
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px; /* Right margin for spacing between icon and text */
}

.faq-item p {
  color: #666; /* Subtle gray for answers */
  font-size: 16px; /* Increases font size for better readability */
  line-height: 1.8; /* Increases line height for better readability */
}

/* Responsive tweaks for mobile devices */
@media (max-width: 768px) {
  .faq-item h2 {
    font-size: 18px; /* Slightly smaller font size on smaller screens */
  }

  .faq-item p {
    font-size: 14px;
  }
}

#faq-header {
  text-align: center; /* Centers the title for a more balanced appearance */
  padding-bottom: 20px; /* Adds padding below the header for separation */
}

#faqs {
  margin-top: 10px;
}

.faq-item {
  margin-bottom: 30px; /* Increased spacing between items */
  padding: 20px; /* Padding inside each FAQ item */
  background-color: #f9f9f9; /* Subtle background to differentiate sections */
  border-radius: 8px; /* Rounded corners for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds depth with a subtle shadow */
}

.faq-item:not(:last-child) {
  margin-bottom: 30px; /* Ensures spacing is consistent except for last item */
}

.faq-item h2 {
  font-size: 20px; /* Increases size for better visibility */
  color: #2C3E50; /* A darker, richer color for questions */
  font-weight: bold;
}

.faq-item h2:before {
  content: 'Q'; /* Icon before the question */
  background-color: #0056b3; /* Changed to a blue that matches the overall theme */
  color: white;
  width: 30px;
  height: 30px;
  margin-right: 15px; /* Adjusted spacing */
  font-size: 16px; /* Adjust font size within the icon */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.faq-item p {
  font-size: 16px; /* Adjusted for readability */
  color: #333; /* Darker for better readability */
  line-height: 1.8;
}

@media (max-width: 768px) {
  .faq-item {
    padding: 15px;
    margin-bottom: 20px;
  }

  .faq-item h2 {
    font-size: 18px; /* Slightly smaller on mobile */
  }

  .faq-item p {
    font-size: 14px; /* Smaller text on mobile for proportionate scaling */
  }
}

.faq-item {
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions for background and shadow */
  cursor: pointer; /* Changes cursor to pointer to indicate interactivity */
  transform: scale(1); /* Ensures the default state is at normal scale */
}

.faq-item:hover {
  background-color: #e6f7ff; /* Light blue background on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow for a "lifted" effect */
  transform: scale(1.03); /* Slightly increases the size of the FAQ item */
}

.faq-item h2:hover {
  color: #0056b3; /* Changes question text color on hover to match theme */
}
</style>
