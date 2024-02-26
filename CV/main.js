import './style.css'
import { headerTemplate } from './src/components/header/header'
import {
  mainTemplate,
  avatarRotate,
  changeDiv
} from './src/components/main/main'
import { footerTemplate } from './src/components/footer/footer'

const printTemplates = () => {
  document.querySelector('#app').innerHTML = `
  ${headerTemplate()}
  ${mainTemplate()}
  ${footerTemplate()}
  `
}
printTemplates()
avatarRotate()
changeDiv()
