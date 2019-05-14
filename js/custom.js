console.log('Dict loaded')
const keys = Object.keys(dict)

const wrap = (arr, template) => arr.map(template).join('')
const goButton = document.getElementById('go')
const resultsList = document.getElementById('results')
const resultsBlock = document.getElementById('results-block')
const chart = document.getElementById('chart')
const skillInput = document.getElementById('skill')
const sortObjDesc = obj => (a, b) => obj[b] - obj[a]
const skillsDatalist = document.getElementById('skills')
const whereToPrintOriginalSkill = document.getElementById('search-query')

const scrollToResults = () => $(document.documentElement).animate({
    scrollTop: $(resultsBlock).offset().top
}, 300)

const showResultsBlock = () => resultsBlock.removeAttribute('hidden')

skillsDatalist.innerHTML = wrap(keys, key => `
  <option value="${key}">
`)

// const colorhash = new ColorHash()

goButton.addEventListener('click', () => {
  const value = skillInput.value
  const skill = dict[value]

  if (skill && value) {
    const similars = Object.keys(skill).sort(sortObjDesc(skill)).slice(0, 20)

    resultsList.innerHTML = wrap(similars, similar => `
      <div class="frame-97 ae-3 padding-bottom-3 margin-top-2">
        <h2 class="small align-left cropBottom inline-block padding-top-1">
          <span class="light">
            ${similar}
          </span>
          <span class="regular stat">
            ${skill[similar]}
          </span>
        </h2>
      </div>
    `)

    whereToPrintOriginalSkill.innerHTML = value

    showResultsBlock()
    scrollToResults()

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
