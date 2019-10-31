import Vue from 'vue'
import ElSection from '../components/ElSection.vue'
import ElContainer from '../components/ElContainer.vue'
import ElSectionTitle from '../components/ElSectionTitle.vue'
import ElCard from '../components/ElCard.vue'
import ElScrollArea from '../components/ElScrollArea.vue'
import ElPageTitle from '../components/ElPageTitle.vue'
[ElSection, ElContainer, ElSectionTitle, ElCard, ElScrollArea, ElPageTitle].forEach((component) => {
  Vue.component(component.name, component)
})
