<template>
  <v-container fluid>
    <v-row no-gutters id="faq-header" class="align-start">
      <v-col cols="12">
        <h1>{{ $t('faq.title') }}</h1>
      </v-col>
    </v-row>
    <v-row no-gutters id="faqs">
      <v-col cols="12" v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <h2 @click="toggleAnswer(index)">
          <span class="faq-icon">Q</span>
          {{ faq.question }}
          <v-icon v-if="!faq.show" class="toggle-icon">mdi-plus</v-icon>
          <v-icon v-else class="toggle-icon">mdi-minus</v-icon>
        </h2>
        <div v-if="faq.show" v-html="faq.answer" class="faq-answer"></div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "FAQsTab",
  data() {
    return {
      faqs: [
        {
          question: this.$t('faq.question1'),
          answer: this.convertNewLines(this.$t('faq.answer1')),
          show: false
        },
        {
          question: this.$t('faq.question2'),
          answer: this.convertNewLines(this.$t('faq.answer2')),
          show: false
        },
        {
          question: this.$t('faq.question3'),
          answer: this.convertNewLines(this.$t('faq.answer3')),
          show: false
        }
      ],
      lastToggled: null
    };
  },
  methods: {
    toggleAnswer(index) {
      if (this.lastToggled !== null && this.lastToggled !== index) {
        this.faqs[this.lastToggled].show = false;
      }
      this.faqs[index].show = !this.faqs[index].show;
      this.lastToggled = index;
    },
    convertNewLines(text) {
      return text.replace(/\n/g, '<br>');
    },
    animateFAQs() {
      this.$nextTick(() => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach((item, index) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.transition = `opacity 0.5s ease-in-out ${index * 0.2}s, transform 0.5s ease-in-out ${index * 0.2}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        });
      });
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.name === 'FAQsTab') {
        this.animateFAQs();
      }
    }
  },
  activated() {
    this.animateFAQs();
  },
  mounted() {
    this.animateFAQs();
  }
}
</script>


<style scoped>
#faq-header {
  margin-top: 0;
  text-align: center;
  padding-bottom: 20px; /* Adds padding below the header for separation */
}

#faqs {
  animation: fadeIn 0.8s ease-in-out; /* Fade-in animation for the FAQ items */
  margin-top: 20px;
  padding: 0 15px; /* Adds padding to the sides for better alignment */
}

.faq-item {
  margin-bottom: 20px; /* Increased spacing between items */
  padding: 15px; /* Padding inside each FAQ item */
  background-color: #f1f1f1; /* Light gray background for better separation */
  border: 1px solid #ddd; /* Light border for a clean look */
  border-radius: 15px; /* Rounded corners for a softer look */
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, opacity 0.3s ease, transform 0.3s ease; /* Smooth transitions for background, shadow, scale, opacity, and position */
}

.faq-item:hover {
  background-color: #e0e0e0; /* Slightly darker background on hover */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds depth with a subtle shadow */
  transform: scale(1.02); /* Slightly enlarges the item on hover */
}

.faq-item h2 {
  margin: 0; /* Removes default margin */
  font-size: 20px; /* Adjust size for better visibility */
  color: #2C3E50; /* A darker, richer color for questions */
  font-weight: bold;
  display: flex;
  align-items: center; /* Aligns icon with text */
  cursor: pointer; /* Indicates interactivity */
}

.faq-item .faq-icon {
  background-color: #0056b3; /* Blue color to match the overall theme */
  color: white;
  width: 30px;
  height: 30px;
  margin-right: 10px; /* Adjusted spacing */
  font-size: 16px; /* Adjust font size within the icon */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.faq-item .toggle-icon {
  margin-left: auto;
  font-size: 24px;
  color: #0056b3; /* Icon color to match the overall theme */
  transition: transform 0.3s ease; /* Smooth transition for rotation */
}

.faq-answer {
  margin-top: 10px; /* Spacing between question and answer */
  padding: 15px; /* Indentation for answers */
  background-color: #ffffff; /* White background for answers */
  color: #333; /* Darker for better readability */
  font-size: 16px; /* Adjusted for readability */
  line-height: 1.6; /* Line height for better readability */
  text-align: justify;
  border-top: 1px solid #ddd; /* Separator between question and answer */
  border-radius: 0 0 15px 15px; /* Rounded bottom corners for answer section */
  animation: fadeIn 0.3s ease-in-out; /* Fade-in animation for answers */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-answer ol, .faq-answer ul {
  padding-left: 25px; /* Adds padding to the left for numbered and bulleted lists */
  margin-left: 15px; /* Adds margin to the left to separate lists from the border */
}

.faq-answer li {
  margin-bottom: 10px; /* Adds spacing between list items */
}

.faq-answer strong {
  color: #000; /* Makes bold text stand out more */
}

.faq-answer em {
  font-style: italic; /* Italicizes important notes */
  color: #555; /* Subtle color for italicized text */
}

.faq-answer p {
  margin-bottom: 10px; /* Adds spacing between paragraphs */
}

.faq-answer table {
  width: 100%; /* Full width table */
  border-collapse: collapse; /* Collapse borders */
  margin-top: 15px; /* Space above table */
  table-layout: fixed; /* Fixed layout for equal column widths */
}

.faq-answer th, .faq-answer td {
  border: 1px solid #ddd; /* Border around cells */
  padding: 8px; /* Padding inside cells */
  text-align: left; /* Left-align text */
  word-wrap: break-word; /* Breaks long words for proper fit */
}

.faq-answer th {
  background-color: #f2f2f2; /* Light gray background for headers */
  color: #333; /* Darker text color for headers */
}

/* Responsive tweaks for mobile devices */
@media (max-width: 768px) {
  .faq-item {
    padding: 10px;
    margin-bottom: 15px;
  }

  .faq-item h2 {
    font-size: 18px; /* Slightly smaller on mobile */
  }

  .faq-answer {
    font-size: 14px; /* Smaller text on mobile for proportionate scaling */
    padding-left: 10px; /* Adjusted indentation for answers on mobile */
  }

  .faq-answer ol {
    padding-left: 15px; /* Adjusted padding for numbered list on mobile */
  }

  .faq-answer ul {
    padding-left: 15px; /* Adjusted padding for bulleted list on mobile */
  }

  .faq-answer table, .faq-answer th, .faq-answer td {
    font-size: 14px; /* Smaller table text on mobile */
  }
}

</style>
