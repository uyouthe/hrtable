console.log('Dict loaded')
const keys = Object.keys(dict)

const wrap = (arr, template) => arr.map(template).join('')
const goButton = document.getElementById('go')
const resultsList = document.getElementById('results')
const chart = document.getElementById('chart')
const skillInput = document.getElementById('skill')
const sortObjDesc = obj => (a, b) => obj[b] - obj[a]
const skillsDatalist = document.getElementById('skills')

skillsDatalist.innerHTML = wrap(keys, key => `
  <option value="${key}">
`)

// const colorhash = new ColorHash()

goButton.addEventListener('click', () => {
  const value = skillInput.value
  const skill = dict[value]

  if (skill) {
    const similars = Object.keys(skill).sort(sortObjDesc(skill))

    resultsList.innerHTML = wrap(similars, similar => `
      <li>${similar}: ${skill[similar]}</li>
    `)

    // new Chart(chart, {
    //   type: 'pie',
    //   data: {
    //     datasets: [{
    //       data: skills.map(skill => dict[value][skill]),
    //       backgroundColor: skills.map(skill => colorhash.hex(skill))
    //     }],
    //     labels: skills
    //   }
    // })
  }
})

// fetch('sample.json').then(res => res.json()).then(console.log).catch(console.log)
