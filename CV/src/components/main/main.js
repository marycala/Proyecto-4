import './main.css'
const data = {
  name: 'Homer Simpson',
  address: '742 Evergreen Terrace, Springfield',
  email: 'homer.simpson@email.com',
  avatar:
    'https://static.simpsonswiki.com/images/0/06/Tapped_Out_Unlock_Homer.png',
  aboutMe:
    "I'm a dedicated nuclear safety inspector, donut enthusiast, and a loving father to three kids. My adventures at the Springfield Nuclear Power Plant often involve comical mishaps, but my heart is always in the right place. When I'm not working, you can find me at Moe's Tavern or spending quality time with my family.",

  education: {
    degree: 'High School Diploma',
    school: 'Springfield High School',
    graduationYear: 1974,
    honors: 'D- Student',
    relevantCourses: [
      'Advanced Couch Potato Studies',
      'Donut Economics',
      'Nuclear Safety Basics',
      "Introduction to D'oh!"
    ]
  },
  workExperience: [
    {
      position: 'Nuclear Safety Inspector',
      company: 'Springfield Nuclear Power Plant',
      startDate: '1979',
      endDate: 'Present',
      description:
        'As the safety inspector at the power plant, I have a unique talent for finding creative solutions to potential disasters. My daily tasks include napping, accidentally causing chaos, and enjoying the occasional donut.'
    },
    {
      position: 'Springfield Isotopes Mascot',
      company: 'Springfield Isotopes',
      startDate: '1975',
      endDate: '1979',
      description:
        'Served as the energetic mascot for the Springfield Isotopes baseball team. My performances were memorable, even if they sometimes ended in unexpected mishaps.'
    }
  ],
  skills: [
    'Expert in Napping',
    "D'oh! Mastery",
    'Donut Consumption',
    'Accidental Genius',
    'Safety Inspector Skills'
  ],
  projects: [
    {
      title: 'Power Plant Safety Improvement',
      description:
        "Implemented groundbreaking safety measures at the Springfield Nuclear Power Plant, such as the 'Donut-Induced Emergency Shutdown' and the 'Inadvertent Chaos Prevention Protocol.'",
      link: 'http://simpsonswiki.com/#',
      preview:
        'https://static.simpsonswiki.com/images/thumb/5/58/Monster_Hunter_Homer.png/136px-Monster_Hunter_Homer.png'
    },
    {
      title: 'Mr. Plow',
      description:
        "Successfully tackled the challenges of running 'Mr. Plow,' from facing stiff competition to delivering memorable snow removal services. A project with a commitment that extends beyond snowstorms.",
      link: 'http://simpsonswiki.com/#',
      preview:
        'https://static.simpsonswiki.com/images/thumb/6/66/Tapped_Out_Mr._Plow.png/96px-Tapped_Out_Mr._Plow.png'
    },
    {
      title: 'Astronaut',
      description:
        'Successfully navigated the challenges of being an astronaut, from tackling space exploration dilemmas to creating unforgettable cosmic memories. A project with a commitment that reaches beyond the stars.',
      link: 'http://simpsonswiki.com/#',
      preview:
        'https://static.simpsonswiki.com/images/thumb/0/0a/Deep_Space_Homer.png/139px-Deep_Space_Homer.png'
    }
  ]
}

const section1 = () => `
 <section class="aboutme" id="aboutme">
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
 </section>
`
export const avatarRotate = () => {
  const avatarElement = document.querySelector('.avatar')
  if (avatarElement) {
    avatarElement.addEventListener('click', (event) =>
      event.target.classList.toggle('rotate')
    )
  }
}

const section2 = () => `
 <section class="education" id="education">
    <h2>Education</h2>
    <h3>${data.education.degree}</h3>
    <h4>${data.education.school}</h4>
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

export const mainTemplate = () => `
 <main>
   ${section1()}
   <div class="change-container">
     <button id="change">Show ${i}</button>
   </div>
   <div id="content">
     ${section2()}
   </div>
   ${section4()}
 </main>
 `

export const changeDiv = () => {
  const button = document.querySelector('#change')
  if (button) {
    button.addEventListener('click', () => {
      const div = document.querySelector('#content')
      i === 'Experience'
        ? ((div.innerHTML = `${section3()}`), (i = 'Education'))
        : ((div.innerHTML = `${section2()}`), (i = 'Experience')),
        (button.textContent = `Show ${i}`)
    })
  }
}
