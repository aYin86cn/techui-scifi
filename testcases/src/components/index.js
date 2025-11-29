import Radio from './radio.vue'
import Toggle from './toggle.vue'

export default {
  install(app) {
    app.component('TTuiRadio', Radio)
    app.component('TTuiToggle', Toggle)
  }
}