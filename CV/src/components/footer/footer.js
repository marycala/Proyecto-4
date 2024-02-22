const footerTemplate = () => {
  return `
    <footer>
      <p>© Created by Homer Simpson</p>
    </footer>
  `
}

export const printFooterTemplate = () => {
  document.querySelector('#app').innerHTML = footerTemplate
}
