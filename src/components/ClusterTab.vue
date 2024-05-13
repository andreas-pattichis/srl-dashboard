<template>
  <v-container fluid>
    <v-row>
      <!-- Cluster Section -->
      <v-col cols="12" md="7" class="cluster-background">
        <div class="cluster-section">
          <div class="primary-cluster cluster-layout">
            <div class="cluster-content">
              <h3>{{ $t('clusters.primaryClusterTitle') }}</h3>
              <h2>{{ $t(primaryClusterLabel + '.title') }}</h2>
              <p>{{ $t(primaryClusterLabel + '.description') }}</p>
            </div>
            <div class="cluster-image">
              <img :src="clusterAImageUrl" alt="Confident Producer">
            </div>
          </div>

          <!-- Graph Placement -->
          <div class="bar-chart">
            <div class="bar primary" :style="{ width: primaryWidth + '%', backgroundColor: barColors.primary }">
              <span class="label" :class="{ 'visible': showLabels }" :style="{ color: calculateTextColor(barColors.primary) }">
                {{ primaryPercentage }}%
              </span>
            </div>
            <div class="bar secondary" :style="{ width: secondaryWidth + '%', backgroundColor: barColors.secondary }">
              <span class="label" :class="{ 'visible': showLabels }" :style="{ color: calculateTextColor(barColors.secondary) }">
                {{ secondaryPercentage }}%
              </span>
            </div>
            <div class="bar other" :style="{ width: otherWidth + '%', backgroundColor: barColors.other }">
              <span class="label" :class="{ 'visible': showLabels }" :style="{ color: calculateTextColor(barColors.other) }">
                {{ otherPercentage }}%
              </span>
            </div>
          </div>

          <div class="secondary-cluster cluster-layout">
            <div class="cluster-content">
              <h3>{{ $t('clusters.secondaryClusterTitle') }}</h3>
              <h2>{{ $t(secondaryClusterLabel + '.title') }}</h2>
              <p>{{ $t(secondaryClusterLabel + '.description') }}</p>
            </div>
            <div class="cluster-image">
              <img :src="clusterBImageUrl" alt="Reflective Writer">
            </div>
          </div>
        </div>
      </v-col>
      <!-- Questions Section -->
      <ClusterQuestions
          :primary-cluster-label="primaryClusterLabel"
          :secondary-cluster-label="secondaryClusterLabel"
      />
    </v-row>
  </v-container>
</template>

<script>
import clusterImageA from '@/assets/cluster1.svg';  // Ensure the path matches your file structure
import clusterImageB from '@/assets/cluster2.svg';  // Ensure the path matches your file structure
import ClusterQuestions from './ClusterQuestions.vue'; // Ensure the path is correct

export default {
  name: "ClusterTab",
  components: {
    ClusterQuestions
  },
  data() {
    return {
      primaryClusterLabel: 'efficientScribbler',
      secondaryClusterLabel: 'reflectiveWriter',
      primaryWidth: 0, // Start with 0% width
      secondaryWidth: 0,
      otherWidth: 0,
      // Data for percentages
      primaryPercentage: 59,
      secondaryPercentage: 28,
      showLabels: false,  // Controls the visibility of the labels
      clusterAImageUrl: clusterImageA,// Now using imported images
      clusterBImageUrl: clusterImageB // Now using imported images
    };
  },
  computed: {
    // Calculate the other percentage based on the primary and secondary
    otherPercentage() {
      return 100 - this.primaryPercentage - this.secondaryPercentage;
    },
    barColors() {
      return {
        primary: '#feefbd',
        secondary: '#2a8db5',
        other: '#d1d1d1'
      };
    }
  },
  methods: {
    calculateTextColor(backgroundColor) {
      const color = backgroundColor.replace('#', '');
      const r = parseInt(color.substr(0, 2), 16);
      const g = parseInt(color.substr(2, 2), 16);
      const b = parseInt(color.substr(4, 2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 125 ? '#636c76' : '#ffffff';
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.primaryWidth = this.primaryPercentage;
        this.secondaryWidth = this.secondaryPercentage;
        this.otherWidth = this.otherPercentage;
        setTimeout(() => {
          this.showLabels = true;  // Show labels after the bar animation
        }, 900);  // Corresponds to the width transition time
      }, 10); // Delay can be adjusted based on how you want the animation to start
    });
  }
};
</script>

<style scoped>
.bar-chart {
  display: flex;
  width: 100%; /* Control the overall width of the bar chart */
  height: 35px; /* Control the height of the bar chart */
  background-color: #f0f0f0; /* Light grey background */
  border-radius: 20px; /* Rounded edges */
  overflow: hidden; /* Ensures the child divs conform to the border radius */
  margin-bottom: 30px; /* Spacing between the bar chart and the next section */
  margin-top: 30px; /* Spacing between the bar chart and the next section */
}

.bar {
  height: 100%;
  transition: width 1.2s ease-out;
  display: flex;
  align-items: center; /* Centers the label vertically within the bar */
  position: relative; /* Ensure the span is relative to bar */
}

.primary {
  background-color: #feefbd; /* Blue */
}

.secondary {
  background-color: #2a8db5; /* Green */
}

.other {
  background-color: #E0E0E0;
}

.label {
  margin-left: 15px;
  color: #636c76;
  font-weight: bold;
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

.visible {
  opacity: 1; /* Make label fully visible after transition delay */
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
  flex: 1;
}

.cluster-image {
  flex-shrink: 0; /* Prevents the image from shrinking */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  max-width: 150px; /* Limits the width of the image */
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
}

.primary-cluster p,
.secondary-cluster p {
  color: #666;
  font-size: 14px;
}

/* Additional styles for spacing */
.cluster-content h3 {
  margin-bottom: 10px; /* Adds space below the h3 element */
}

.cluster-content h2 {
  margin-top: 10px; /* Adds space above the h2 element */
  margin-bottom: 20px; /* Adds space below the h2 element */
}

.cluster-content p {
  font-size: 0.95rem;
  color: #616161;
  margin-bottom: 20px;
  text-align: justify;
}

</style>
