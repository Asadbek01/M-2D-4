// let inputName = document.getElementById("input-name")
// let inputNumber = document.getElementById("input-number")
// function press(){
// let addName = document.getElementById('name')
// entry=document.createElement("li")
// entry.innerText = inputName.value
// addName.appendChild(entry)
// }
let names = []
const press = function(){
 let inputName =document.getElementById("input-name")
 names.push(inputName.value)
 let listMember = document.getElementById("memberList")
  let member = document.createElement("li")
  member.classList.add("list-group-item")
  member.innerText=inputName.value
  listMember.appendChild(member)
  inputName.value =""
} 
function createTeams() {
    let inputNumber = document.getElementById("inputNumber")
    let totalTeams = inputNumber.value
    let teamContainer = document.getElementById("numberOfTeam")
    let teamList =document.createElement('div')
    teamList.classList.add('row')
    teamContainer.appendChild(teamList)
    for (let i = 0; i < totalTeams; i++) {
        let individualTeamDiv = document.createElement('div')
        individualTeamDiv.classList.add(`col-${ Math.floor(12 / totalTeams) }`)
        teamList.appendChild(individualTeamDiv)
        let teamName = document.createElement('p')
        teamName.innerText = `Team ${ i + 1 }`
        teamName.classList.add('teams')
        teamName.classList.add('text-light')
        individualTeamDiv.appendChild(teamName)
        let teamList1 = document.createElement('ul')
        teamList1.setAttribute('id', `team${ i + 1 }`)
        teamList1.classList.add('list-group')
        individualTeamDiv.appendChild(teamList1)
        let removeButton = document.createElement('button')
        removeButton.innerText = 'Remove Last Member'
        removeButton.classList.add('btn-sm')
        removeButton.classList.add('btn-danger')
        removeButton.classList.add('mt-3')
        removeButton.addEventListener('click', function () {
            addedNames.push(teamList1.lastChild.innerText)
            teamList1.removeChild(teamList1.lastChild)
        })
        individualTeamDiv.appendChild(removeButton)
    }
}


const resetApp = function () {
    window.location.reload()
}


 