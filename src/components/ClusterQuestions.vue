<template>
  <v-col cols="12" md="5" class="questions-background">
    <div class="questions-section">
      <h3 class="section-title">{{ $t('clusters.reflectiveQuestionsTitle') }}</h3>
      <transition-group name="question-fade" tag="div">
        <div v-for="n in numberOfQuestions" :key="n" class="question-item">
          <label :for="'question' + n">{{ getQuestion(n) }}</label>
          <textarea :id="'question' + n" :placeholder="$t('clusters.answerPlaceholder')"
                    class="input-background" v-model="answers[n]"></textarea>
        </div>
      </transition-group>
      <v-btn class="submit-button" @click="handleSubmit">Submit</v-btn>
    </div>
  </v-col>
  <transition name="fade">
    <div v-if="showPopup" class="popup">
      <p>{{ $t('clusters.answersSubmitted') }}</p>
    </div>
  </transition>
</template>


<script>
export default {
  name: "QuestionsSection",
  props: {
    primaryClusterLabel: String,
    numberOfQuestions: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      answers: Array(this.numberOfQuestions).fill(''),
      showPopup: false
    }
  },
  methods: {
    getQuestion(n) {
      // Construct the key based on the cluster label and question number
      const key = `${this.primaryClusterLabel}.reflectiveQuestion${n}`;
      return this.$t(key); // Fetch the translated question text
    },
    handleSubmit() {
      console.log(this.answers); // Log all answers
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 2000); // Show popup for 2 seconds
      this.answers = Array(this.numberOfQuestions).fill(''); // Clear all answers
      window.scrollTo({top: 0, behavior: 'smooth'}); // Scroll to the top
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
  max-height: 420px;
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
  font-size: 22px;
  margin-bottom: 20px;
  color: #2C3E50;
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
}

.input-background {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* Light grey */
  color: #333; /* Dark grey text for contrast */
}

.submit-button {
  background-color: #2C3E50; /* Matching the color scheme of the website */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px; /* Add some spacing from the text areas */
  display: block; /* Make the button full width */
  width: 100%; /* Make the button full width */
  text-align: center; /* Center the text */
}

.submit-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2C3E50; /* Matching the color scheme of the website */
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  font-size: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>