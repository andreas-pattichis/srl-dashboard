<template>
  <v-container fluid>
    <v-row>
      <!-- Cluster Section -->
      <v-col cols="12" md="7" class="cluster-background">
        <h2 class="section-title">{{ $t("clusters.clusterAssessmentTitle") }}</h2> <!-- Added Title -->
        <div v-resize="updateMaxHeight" class="cluster-section" ref="clusterSection">
          <div class="primary-cluster cluster-layout">
            <div class="cluster-content">
              <!--              <h3>{{ $t('clusters.primaryClusterTitle') }}</h3>-->
              <h3>{{ $t("clusters.primaryClusterTitle", {user: getUsername()}) }}</h3>
              <h2>{{ $t(clusterResults.primaryClusterLabel + '.title') }}</h2>
              <p>{{ $t(clusterResults.primaryClusterLabel + '.description') }}</p>
            </div>
            <div class="cluster-image">
              <img :src="clusterAImageUrl" alt="Confident Producer" draggable="false">
            </div>
          </div>


          <!-- Graph Placement -->
          <div class="bar-chart">
            <div class="bar primary" :style="{ width: primaryWidth + '%', backgroundColor: barColors.primary }">
              <span class="label" :class="{ 'visible': showLabels }"
                    :style="{ color: calculateTextColor(barColors.primary) }">
                {{ clusterResults.primaryPercentage }}%
              </span>
            </div>
            <!-- Graph Placement -->
            <div class="bar secondary" :style="{ width: secondaryWidth + '%', backgroundColor: barColors.secondary }">
              <span class="label" :class="{ 'visible': showLabels }"
                    :style="{ color: calculateTextColor(barColors.secondary) }">
                {{ clusterResults.secondaryPercentage }}%
              </span>
            </div>
            <div class="bar other" :style="{ width: otherWidth + '%', backgroundColor: barColors.other }">
              <span class="label" :class="{ 'visible': showLabels }"
                    :style="{ color: calculateTextColor(barColors.other) }">
                {{ clusterResults.otherPercentage }}%
              </span>
            </div>
          </div>

          <!-- Legend Placement -->
          <div class="legend">
            <div class="legend-item">
              <span class="legend-color" style="background-color: #feefbd;"></span>
              <span class="legend-label">{{ $t("clusters.primaryLegendClusterLabel") }}</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background-color: #2a8db5;"></span>
              <span class="legend-label">{{ $t("clusters.secondaryLegendClusterLabel") }}</span>
            </div>
            <div class="legend-item">
              <span class="legend-color" style="background-color: #d1d1d1;"></span>
              <span class="legend-label">{{ $t("clusters.otherLegendClusterLabel") }}</span>
            </div>
          </div>


          <div class="secondary-cluster cluster-layout">
            <div class="cluster-content">
              <h3>{{ $t("clusters.secondaryClusterTitle", {user: getUsername()}) }}</h3>
              <h2>{{ $t(clusterResults.secondaryClusterLabel + '.title') }}</h2>
              <p>{{ $t(clusterResults.secondaryClusterLabel + '.description') }}</p>
            </div>
            <div class="cluster-image">
              <img :src="clusterBImageUrl" alt="Reflective Writer" draggable="false">
            </div>
          </div>


        </div>
      </v-col>
      <!-- Questions Section -->
      <ClusterQuestions
          :max-height="maxHeight"
          :primary-cluster-label="clusterResults.primaryClusterLabel"
          :secondary-cluster-label="clusterResults.secondaryClusterLabel"
      />
    </v-row>
  </v-container>
</template>

<script>
import clusterImageA from '@/assets/cluster1.svg';
import clusterImageB from '@/assets/cluster2.svg';
import ClusterQuestions from './ClusterQuestions.vue';
import {GET_USERNAME} from "@/store/storeconstants";

export default {
  name: "ClusterTab",
  components: {
    ClusterQuestions
  },
  data() {
    return {
      maxHeight: '0px', // Initialize maxHeight to QuestionsSection
      // primaryClusterLabel: 'efficientScribbler',
      // secondaryClusterLabel: 'reflectiveWriter',
      primaryWidth: 0, // Start with 0% width
      secondaryWidth: 0,
      otherWidth: 0,
      showLabels: false,  // Controls the visibility of the labels
      clusterAImageUrl: clusterImageA, // Now using imported images
      clusterBImageUrl: clusterImageB // Now using imported images
    };
  },
  computed: {
    // Calculate the other percentage based on the primary and secondary
    selectedEssays() {
      return this.getSelectedEssays();
    },
    clusterResults() {
      let primaryClusterLabel = '';
      let secondaryClusterLabel = '';
      let primaryPercentage = 0;
      let secondaryPercentage = 0;
      let otherPercentage = 0;
      this.selectedEssays.forEach(essay => {
        const clusterProbs = essay.cluster_probs
        primaryPercentage = clusterProbs[0]; // Ensure addition as float
        secondaryPercentage = clusterProbs[1]; // Ensure addition as float
        const clusterNames = essay.cluster_names
        primaryClusterLabel = clusterNames[0]; // Ensure addition as float
        secondaryClusterLabel = clusterNames[1]; // Ensure addition as float
      });
      otherPercentage = 1 - (primaryPercentage + secondaryPercentage);
      return {
        primaryClusterLabel: primaryClusterLabel,
        secondaryClusterLabel: secondaryClusterLabel,
        primaryPercentage: parseFloat(primaryPercentage * 100).toFixed(0),
        secondaryPercentage: parseFloat(secondaryPercentage * 100).toFixed(0),
        otherPercentage:  parseFloat(otherPercentage * 100).toFixed(0)
      };
    },
    barColors() {
      return {
        primary: '#feefbd',
        secondary: '#2a8db5',
        other: '#d1d1d1'
      };
    },
  },
  methods: {
    getSelectedEssays() {
      return this.$store.getters.selectedEssays;
    },
    getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`];
    },
    calculateTextColor(backgroundColor) {
      const color = backgroundColor.replace('#', '');
      const r = parseInt(color.substr(0, 2), 16);
      const g = parseInt(color.substr(2, 2), 16);
      const b = parseInt(color.substr(4, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 125 ? '#636c76' : '#ffffff';
    },
    initialize() {
      // Initialization logic here
      this.updateMaxHeight();
      this.animateBars();
    },
    updateMaxHeight() {
      this.maxHeight = `${this.$refs.clusterSection.offsetHeight+65}px`;
    },
    animateBars() {
      this.primaryWidth = 0;
      this.secondaryWidth = 0;
      this.otherWidth = 0;
      this.showLabels = false;

      setTimeout(() => {
        this.primaryWidth = this.primaryPercentage;
        this.secondaryWidth = this.secondaryPercentage;
        this.otherWidth = this.otherPercentage;

        setTimeout(() => {
          this.showLabels = true;  // Show labels after the bar animation
        }, 900);  // Corresponds to the width transition time
      }, 10); // Delay can be adjusted based on how you want the animation to start
    }
  },
  mounted() {
    setTimeout(() => {
      this.initialize();
    }, 50);  // Corresponds to the width transition time
  }
};
</script>

<style scoped>
.section-title {
  font-size: 26px;
  font-weight: bold;
  color: #2C3E50;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 10px;
}

/* Keyframes for bar chart animation */
@keyframes growWidth {
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
}

.bar-chart {
  display: flex;
  width: 100%; /* Control the overall width of the bar chart */
  height: 35px; /* Control the height of the bar chart */
  background-color: #f0f0f0; /* Light grey background */
  border-radius: 20px; /* Rounded edges */
  overflow: hidden; /* Ensures the child divs conform to the border radius */
  margin-bottom: 20px; /* Spacing between the bar chart and the next section */
  margin-top: 30px; /* Spacing between the bar chart and the next section */
}

.bar {
  height: 100%;
  animation: growWidth 1.2s ease-out forwards;
  display: flex;
  align-items: center; /* Centers the label vertically within the bar */
  position: relative; /* Ensure the span is relative to bar */
}

.primary {
  background-color: #feefbd; /* Blue */
  --target-width: 59%; /* Set the target width using CSS variables */
}

.secondary {
  background-color: #2a8db5; /* Green */
  --target-width: 28%; /* Set the target width using CSS variables */
}

.other {
  background-color: #E0E0E0;
  --target-width: 13%; /* Set the target width using CSS variables */
}

.label {
  margin-left: 15px;
  color: #636c76;
  font-weight: bold;
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  user-select: none; /* Prevent text selection */
  -webkit-user-select: none; /* Safari specific */
  pointer-events: none; /* Prevent mouse events, useful if there's interactivity */
}

.visible {
  opacity: 1; /* Make label fully visible after transition delay */
}

/* Keyframes for fade-in animation */
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

.legend {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Add margin at the top of the legend */
  margin-bottom: 40px; /* Add margin at the bottom of the legend */
  text-align: center; /* Center the legend items */
  gap: 25px; /* Add spacing between legend items */
}

.legend-item {
  display: flex;
  align-items: center;
  padding: 10px 15px; /* Add padding for better spacing */
  border: 1px solid #ddd; /* Lighter border for a softer look */
  border-radius: 10px; /* Rounded corners for a polished look */
  background-color: #f9f9f9; /* Slightly darker background for better contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Enhanced shadow for more depth */
  opacity: 0; /* Start with opacity 0 for animation */
  animation: fadeIn 0.8s ease-in-out forwards; /* Apply the fade-in animation */
}

.legend-item:nth-child(1) {
  animation-delay: 0.2s; /* Delay for the first item */
}

.legend-item:nth-child(2) {
  animation-delay: 0.4s; /* Delay for the second item */
}

.legend-item:nth-child(3) {
  animation-delay: 0.6s; /* Delay for the third item */
}

.legend-color {
  width: 20px; /* Slightly larger for better visibility */
  height: 20px; /* Slightly larger for better visibility */
  margin-right: 10px; /* Increase space between color and label */
  border-radius: 50%; /* Make the color indicators round */
  border: 1px solid #ccc; /* Add border for better definition */
}

.legend-label {
  font-size: 1rem; /* Increase font size */
  font-weight: 600; /* Increase font weight */
  color: #333; /* Darker text color for better readability */
}

.cluster-background {
  background-color: #F5F5F5; /* Light gray background */
  padding: 20px; /* Padding for inner spacing */
  border-radius: 10px; /* Rounded corners */
}

.cluster-layout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.cluster-content {
  flex: 1; /* Allows the content to grow and shrink */
}

.cluster-image {
  flex-shrink: 0; /* Prevents the image from shrinking */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  max-width: 180px; /* Limits the width of the image */
  width: 100%; /* Ensures the image uses the full width of its container */
  height: auto; /* Maintains the aspect ratio of the image */
}

@media (max-width: 768px) {
  .cluster-layout {
    flex-direction: column;
    align-items: center; /* Center aligns all children, including images */
  }

  .cluster-image {
    padding-top: 0;
    margin-top: 10px; /* Adds space above the image when in column layout */
    width: 80%; /* Allows the image to scale appropriately */
    max-width: 150px; /* Increases maximum width for better visibility */
  }
}

img {
  max-width: 150px; /* Increased from 100px to 150px */
  width: 100%; /* Ensures the image uses the full width of its container */
  height: auto; /* Maintains the aspect ratio of the image */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.cluster-section .primary-cluster,
.cluster-section .secondary-cluster {
  margin-bottom: 0;
}

.primary-cluster h2,
.secondary-cluster h2 {
  color: #2C3E50;
}

.primary-cluster h3,
.secondary-cluster h3 {
  color: #636C76;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 16px;
}

.primary-cluster p,
.secondary-cluster p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

/* Additional styles for spacing */
.cluster-content h2 {
  margin-top: 0; /* Removes default margin above the h2 element */
  margin-bottom: 10px; /* Adds space below the h2 element */
}

.cluster-content p {
  font-size: 0.95rem;
  color: #616161;
  margin-bottom: 20px;
  text-align: justify;
}
</style>
