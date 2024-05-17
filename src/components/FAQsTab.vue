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
          {{ faq.question }}
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
    }
  }
}
</script>




<style scoped>
#faq-header {
  margin-top: 0px;
  text-align: center;
  padding-bottom: 20px; /* Adds padding below the header for separation */
}

#faqs {
  margin-top: 20px;
  padding: 0 15px; /* Adds padding to the sides for better alignment */
}

.faq-item {
  margin-bottom: 30px; /* Increased spacing between items */
  padding: 20px; /* Padding inside each FAQ item */
  background-color: #f9f9f9; /* Subtle background to differentiate sections */
  border-radius: 8px; /* Rounded corners for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds depth with a subtle shadow */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions for background and shadow */
}

.faq-item:hover {
  background-color: #e6f7ff; /* Light blue background on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow for a "lifted" effect */
  transform: scale(1.03); /* Slightly increases the size of the FAQ item */
}

.faq-item h2 {
  margin: 0; /* Removes default margin */
  font-size: 20px; /* Increases size for better visibility */
  color: #2C3E50; /* A darker, richer color for questions */
  font-weight: bold;
  display: flex;
  align-items: center; /* Aligns icon with text */
  cursor: pointer; /* Indicates interactivity */
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

.faq-item h2:hover {
  color: #0056b3; /* Changes question text color on hover to match theme */
}

.faq-answer {
  margin-top: 15px; /* Spacing between question and answer */
  padding-left: 20px; /* Indentation for answers */
  color: #333; /* Darker for better readability */
  font-size: 16px; /* Adjusted for readability */
  line-height: 1.8; /* Line height for better readability */
}

.faq-answer ol {
  padding-left: 20px; /* Adds padding to the left for numbered list */
  list-style-type: decimal; /* Uses decimal numbers for the list */
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
    padding: 15px;
    margin-bottom: 20px;
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

  .faq-answer table, .faq-answer th, .faq-answer td {
    font-size: 14px; /* Smaller table text on mobile */
  }
}
</style>
