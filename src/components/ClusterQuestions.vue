<template>
  <v-col cols="12" md="5" class="questions-background">
    <div class="questions-section">
      <div v-for="n in numberOfQuestions" :key="n" class="question-item">
        <label :for="'question' + n">{{ getQuestion(n) }}</label>
        <input :id="'question' + n" type="text" :placeholder="$t('clusters.answerPlaceholder')" class="input-background">
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "QuestionsSection",
  props: {
    primaryClusterLabel: String,
    // secondaryClusterLabel: String,
    numberOfQuestions: {
      type: Number,
      default: 10
    }
  },
  methods: {
    getQuestion(n) {
      // Construct the key based on the cluster label and question number
      const key = `${this.primaryClusterLabel}.reflectiveQuestion${n}`;
      return this.$t(key); // Fetch the translated question text
    }
  }
}
</script>

<style scoped>
.questions-background {
    background-color: #EDF0F7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.questions-section {
    max-height: 420px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #c9cad8 #edf0f7;
}

/* Targets the scrollbar itself */
.questions-section::-webkit-scrollbar {
    width: 12px;  /* Width of the vertical scrollbar */
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
}

.question-item label {
  font-weight: bold; /* Makes text bold */
}

.question-item input[type="text"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.input-background {
  background-color: #edf0f7; /* Light grey */
  color: #333; /* Dark grey text for contrast */
}

</style>
