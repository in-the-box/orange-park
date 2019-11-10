import Vue from 'vue'
import ElSection from '../components/ElSection.vue'
import ElContainer from '../components/ElContainer.vue'
import ElSectionTitle from '../components/ElSectionTitle.vue'
import ElCard from '../components/ElCard.vue'
import ElScrollArea from '../components/ElScrollArea.vue'
import ElPageTitle from '../components/ElPageTitle.vue'
import ElForm from '../components/ElForm.vue'
import ElFormItem from '../components/ElFormItem.vue'
import ElInput from '../components/ElInput.vue'
import ElTextarea from '../components/ElTextarea.vue'
import ElButton from '../components/ElButton.vue'
[ElSection, ElContainer, ElSectionTitle, ElCard, ElScrollArea, ElPageTitle, ElForm, ElFormItem, ElInput, ElTextarea, ElButton].forEach((component) => {
  Vue.component(component.name, component)
})
