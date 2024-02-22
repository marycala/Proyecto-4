import './header.css'

const headerTemplate = () => {
  return `
    <header>
      <h1>Homer Simpson</h1>
      <nav>
        <ul>
          <li>
              <a href="#aboutme">About Me</a>
          </li>
          <li>
              <a href="#education">Education</a>
          </li>
          <li>
              <a href="#experience">Experience</a>
          </li>
          <li>
              <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  `
}

export const printHeaderTemplate = () => {
  document.querySelector('#app').innerHTML = headerTemplate()
}
printHeaderTemplate()
