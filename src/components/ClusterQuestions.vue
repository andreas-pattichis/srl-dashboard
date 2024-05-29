<template>
  <v-col cols="12" md="5" class="questions-background">
    <div v-if="!submitted" class="questions-section" :style="{ maxHeight: maxHeight }">
      <h3 class="section-title" align="center">{{ $t('clusters.reflectiveQuestionsTitle') }}</h3>
      <transition-group name="question-fade" tag="div">
        <div v-for="n in numberOfQuestions" :key="n" class="question-item">
          <label :for="'question' + n">{{ getQuestion(n) }}</label>
          <textarea :id="'question' + n" :placeholder="$t('clusters.answerPlaceholder')" class="input-background"
                    v-model="answers[n - 1]"></textarea>
          <span v-if="errors[n - 1]" class="error-message">{{ errors[n - 1] }}</span>
        </div>
      </transition-group>
      <!--  Centered Button  -->
      <div class="d-flex justify-center">
        <v-btn @click="submitAnswers" class="custom-submit-button" dark>
          {{ $t('clusters.submitAnswers') }}
        </v-btn>
      </div>
    </div>
    <!-- Display tick icon when submitted -->
    <div v-else class="success-icon-layout">
      <v-icon large color="gray">mdi-check-circle</v-icon>
      <p class="submission-message">{{ $t('clusters.answersSubmitted') }}</p>
    </div>

  </v-col>
</template>

<script>
import { submitQuestions } from '@/services/reflectiveQuestions';
import { GET_USERNAME } from '@/store/storeconstants'

export default {
  name: "QuestionsSection",
  props: {
    primaryClusterLabel: String,
    maxHeight: String,
    // secondaryClusterLabel: String,
    numberOfQuestions: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      submitted: false,
      answers: Array(this.numberOfQuestions).fill(''),
      errors: Array(this.numberOfQuestions).fill('')
    }
  },
  methods: {
    getQuestion(n) {
      const key = `${this.primaryClusterLabel}.reflectiveQuestion${n}`;
      return this.$t(key); // Fetch the translated question text
    },
    submitAnswers() {
      this.errors = Array(this.numberOfQuestions).fill('');
      let valid = true;
      let firstUnansweredIndex = -1;

      for (let i = 0; i < this.numberOfQuestions; i++) {
        if (!this.answers[i]) {
          this.errors[i] = this.$t('clusters.answerRequired'); // Assuming you have a translation key for the error message
          valid = false;
          if (firstUnansweredIndex === -1) {
            firstUnansweredIndex = i;
          }
        }
      }

      if (valid) {
        const clusterData = {
          user_id: this.$store.getters[`auth/${GET_USERNAME}`],
          essay_id: this.$store.getters.selectedEssays[0].course_id,
          responses: this.answers.map((answer, index) => ({
            question_id: index, // Assuming questions are identified by their order
            answer: answer
          }))
        };

        submitQuestions(clusterData)
          .then(() => {
            this.submitted = true; // Show success message or icon
          })
          .catch(error => {
            console.log('Submitting answers:', clusterData)
            console.error('Failed to submit answers:', error);
          });

      } else if (firstUnansweredIndex !== -1) {
        this.$nextTick(() => {
          document.getElementById('question' + (firstUnansweredIndex + 1)).scrollIntoView({behavior: 'smooth'});
        });
      }
    }
  }
}
</script>

<style scoped>
.questions-background {
  background-color: #EDF0F7;
  padding: 20px;
  border-radius: 10px;
}

.questions-section {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c9cad8 #edf0f7;
}

/* Targets the scrollbar itself */
.questions-section::-webkit-scrollbar {
  width: 12px; /* Width of the vertical scrollbar */
}

/* Targets the draggable part of the scrollbar */
.questions-section::-webkit-scrollbar-thumb {
  background-color: #edf0f7; /* Color of the thumb */
  border-radius: 6px; /* Rounded corners of the thumb */
  border: 3px solid transparent; /* Optional: creating a 'gutter' */
  background-clip: content-box; /* Ensures 'border' space doesn't show the background */
}

/* Targets the part of the scrollbar track not covered by the thumb */
.questions-section::-webkit-scrollbar-track {
  background-color: #edf0f7; /* Color of the track */
  border-radius: 6px; /* Rounded corners of the track */
}

.question-item {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.question-item label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #2C3E50;
}

.question-item input[type="text"] {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.input-background {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #ccc;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  resize: vertical;
  transition: all 0.3s ease;
}

.input-background:focus {
  border-color: #2a8db5;
  box-shadow: 0 2px 8px rgba(0, 100, 200, 0.2);
}

.question-item {
  margin-bottom: 30px; /* Increased spacing between questions */
  display: flex;
  flex-direction: column;
}

.question-item label {
  font-weight: bold; /* Keeps text bold */
  margin-bottom: 8px; /* Adds space between the label and the input */
  color: #2C3E50; /* Darker color for better readability */
}

.question-item input[type="text"] {
  padding: 12px 15px; /* Slightly larger padding for better touch interaction */
  border: 2px solid #ccc; /* Adds a subtle border */
  border-radius: 8px; /* Rounds the corners of the input field */
  transition: border-color 0.3s; /* Smooth transition for interactions */
}

.question-item input[type="text"]:focus {
  border-color: #2a8db5; /* Changes border color on focus */
  outline: none; /* Removes the default focus outline */
}

.questions-section::-webkit-scrollbar {
  width: 8px; /* Narrower scrollbar */
}

.questions-section::-webkit-scrollbar-thumb {
  background-color: #b0bec5; /* A color that fits the design */
  border-radius: 4px;
}

.questions-section::-webkit-scrollbar-track {
  background-color: #e2e2e2; /* A lighter track color */
}


.questions-section::-webkit-scrollbar {
  width: 8px; /* Narrower scrollbar */
}

.questions-section::-webkit-scrollbar-thumb {
  background-color: #b0bec5; /* A color that fits the design */
  border-radius: 4px;
}

.questions-section::-webkit-scrollbar-track {
  background-color: #e2e2e2; /* A lighter track color */
}


.input-background {
  background-color: #ffffff; /* Using a plain white background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Soft shadow for depth */
}

@media (max-width: 768px) {
  .question-item input[type="text"] {
    padding: 8px 10px; /* Smaller padding on smaller screens */
  }

  .questions-section {
    max-height: 300px; /* Smaller fixed height on mobile devices */
  }
}

.section-title {
  font-size: 26px;
  margin-bottom: 30px;
  color: #2C3E50;
  margin-top: 10px;
}

.input-background {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #ccc;
  background-color: #ffffff;
  resize: none;
}

.question-item label {
  font-weight: 600;
  color: #333;
  font-size: 16px;
  margin-bottom: 12px;
}

.input-background {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* Light grey */
  color: #333; /* Dark grey text for contrast */
}

@keyframes fadeInScaleUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.success-icon-layout {
  display: flex;
  flex-direction: column; /* Align items vertically */
  justify-content: center;
  align-items: center;
  height: 100%; /* Match the height of the container to center vertically */
  font-size: 35px; /* Icon size */
  animation: fadeInScaleUp 0.5s ease-out forwards; /* Apply the animation */
}

.custom-submit-button {
  background-color: #2C3E50; /* Matching the color scheme of the website */
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 5px; /* Add some spacing from the text areas */
  //display: block; /* Make the button full width */
  width: 100%; /* Make the button full width */
  text-align: center; /* Center the text */

  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; /* Set a fixed height */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  font-weight: 600; /* Bold font weight */
  text-transform: uppercase; /* Uppercase text */
  letter-spacing: 1px; /* Increase letter spacing */
}

.custom-submit-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.error-message {
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
}

.submission-message {
  margin-top: 10px;
  font-size: 20px;
  color: #2C3E50;
  text-align: center;
  font-weight: bold; /* Make the text bold */
  margin-bottom: 0; /* Remove any bottom margin */
}

.v-icon {
  margin-bottom: 10px; /* Add space between the icon and the message */
}


</style>