console.log('Dict loaded')

const keys = Object.keys(dict)

document.getElementById('skills').innerHTML = keys.map(key => `
  <option value="${key}">
`).join('')

const colorhash = new ColorHash()

document.getElementById('go').addEventListener('click', () => {
  const value = document.getElementById('skill').value

  if (dict[value]) {
    const skills = Object.keys(dict[value]).sort(
      (a, b) => dict[value][b] - dict[value][a]
    )

    document.getElementById('results').innerHTML = skills.map(skill => `
      <li>${skill}: ${dict[value][skill]}</li>
    `).join('')

    new Chart(document.getElementById('chart'), {
      type: 'pie',
      data: {
        datasets: [{
          data: skills.map(skill => dict[value][skill]),
          backgroundColor: skills.map(skill => colorhash.hex(skill))
        }],
        labels: skills
      }
    })
  } else {
    console.log('Nothing found.')
  }
})
// 
//
// fetch('sample.json').then(res => res.json()).then(
//   console.log
// ).catch(console.log)
