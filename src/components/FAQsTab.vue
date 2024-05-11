<template>
  <v-container fluid>
    <v-row id="faq-header">
      <h1>{{ $t('faq.title') }}</h1>
    </v-row>
    <v-row id="faqs">
      <div v-for="n in numberOfFaqs" :key="n" class="faq-item">
        <h2>{{ $t(`faq.question${n}`) }}</h2>
        <p>{{ $t(`faq.answer${n}`) }}</p>
      </div>
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
  margin-top: 10px;
  text-align: center;
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
</style>
