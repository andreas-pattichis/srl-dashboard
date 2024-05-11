<template>
  <v-container>
    <v-row>
      <!-- Cluster Section -->
      <v-col cols="12" md="8" class="cluster-background">
        <div class="cluster-section">
          <div class="primary-cluster">
            <h2>Primary Cluster:</h2>
            <h3>Confident Producer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <v-progress-linear :value="80" color="blue" height="20"></v-progress-linear>
          </div>
          <div class="secondary-cluster">
            <h2>Secondary Cluster:</h2>
            <h3>Reflective Writer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <v-progress-linear :value="20" color="green" height="20"></v-progress-linear>
          </div>
        </div>
      </v-col>

      <!-- Questions Section -->
      <v-col cols="12" md="4" class="questions-background">
        <div class="questions-section">
          <div v-for="n in 5" :key="n" class="question-item">
            <label :for="'question' + n">Question {{ n }}:</label>
            <input :id="'question' + n" type="text" placeholder="Type your answer">
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClusterTab",
  data() {
    return {
      // Define any reactive data here if needed
    };
  },
  methods: {
    // Define any methods if needed
  }
}
</script>

<style scoped>
.cluster-background {
  background-color: #F5F5F5; /* Light gray background */
  padding: 20px; /* Padding for inner spacing */
  border-radius: 10px; /* Rounded corners */
}

.questions-background {
  background-color: #EDF0F7; /* White background */
  padding: 20px; /* Padding for inner spacing */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}

.cluster-section .primary-cluster,
.cluster-section .secondary-cluster {
  margin-bottom: 30px;
}

.primary-cluster h2,
.secondary-cluster h2 {
  color: #636C76;
}

.primary-cluster h3,
.secondary-cluster h3 {
  color: #2C3E50;
}

.primary-cluster p,
.secondary-cluster p {
  color: #666;
  font-size: 14px;
}

.v-progress-linear {
  margin-top: 10px;
}

.questions-section .question-item {
  margin-bottom: 20px;
}

.questions-section input[type="text"] {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
