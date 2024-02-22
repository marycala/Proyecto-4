import './main.css'
import { data } from './CV/src/components/cv.js'

const section1 = () => `
 <section class="aboutme" id="aboutme"></section>
    <h2>About me</h2>
    <img class="avatar" src=${data.avatar} alt=${data.name}>
    <ul>
      ${data.skills
        .map(
          (hability) => `
        <li>
          <p>${hability}</p>
        </li>`
        )
        .join('')}
    </ul>
    <p>${data.aboutMe}</p>
    <p>${data.address}</p>
    <a href="${`mailto:${data.email}">Contact me</a>`}
`

const section2 = () => `
 <section class="education" id="education">
    <h2>Education</h2>
    <h3>${data.education.degree}</h3>
    <h4>${data.education.university}</h4>
    <p>${data.education.graduationYear}</p>
    <p>${data.education.honors}</p>
    <h3>Relevant Courses</h3>
    <ul id="relevantcourses">
    ${data.education.relevantCourses
      .map(
        (courses) => `
    <li>
      <p>${courses}</p>
    </li>
    `
      )
      .join('')}
     </ul>
 </section>
`

const section3 = () => `
 <section class="experience" id="experience">
    <h2>Experience</h2>
    <ul>
      ${data.workExperience
        .map(
          (we) => `
      <li>
        <h3>${we.startDate} - ${we.endDate}</h3>
        <h4>${we.company}</h4>
        <h4>${we.position}</h4>
        <p>${we.description}</p>
      </li>
      `
        )
        .join('')}
    </ul>
 </section>`

const section4 = () => `
 <section class="projects" id="projects">
   <h2>Recent Projects</h2>
   <ul>
     ${data.projects
       .map(
         (proj) => `
     <li>
       <img src=${proj.preview} alt=${proj.title}/>
       <h3>${proj.title}</h3>
       <p>${proj.description}</p>
       <a href=${proj.link}>Know more...</a>
     </li>
     `
       )
       .join('')}
   </ul>
 </section>
`

let i = 'Experience'
const main = () => `
 <main>
   ${section1()}
   <div class="change-container">
     <button id="change">Show ${i}</button>
   </div>
   <div id="content">
     ${section2()}
   </div>
   ${section3()}
 </main>
 `

;(change = () => {
  const button = document.querySelector('#change')
  button.addEventListener('click', () => {
    const div = document.querySelector('#content')
    i === 'Experience'
      ? ((r.innerHTML = `${$()}`), (i = 'Education'))
      : ((div.innerHTML = `${section4()}`), (i = 'Experience')),
      (button.textContent = `Show ${i}`)
  })
}),
  (renderMain = () => {
    document.querySelector('#app').innerHTML = `
    ${d()}
    ${D()}
    ${m()}
`
  })
