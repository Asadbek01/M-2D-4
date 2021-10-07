let inputName = document.getElementById("input-name")
let inputNumber = document.getElementById("input-number")
function press(){
let addName = document.getElementById('name')
entry=document.createElement("li")
entry.innerText = inputName.value
addName.appendChild(entry)
}
function createTeams() {
    for (let i = 1  ; i < inputNumber.innerHTML; i++) {

      // this is the template of a team, column, title + empty list (waiting for the names to be pushed inside)
      teamsRow.innerHTML += `
                      <div class="col-6 col-sm-3 team">
                          <h4>Team ${i + 1}</h4>
                          <ul class="list-group">
                          </ul>
                      </div>
                  `
    }
  }
  window.onload=function(){
      createTeams()
  }
function addTeam() {

    const teamNumber = parseInt(inputNumber.innerHTML) + 1 // increases the current number for the team counter

    inputNumber.innerHTML = teamNumber

    // this creates a new team with the appropriate number in the title taken from the teamNumber reference
    teamsRow.innerHTML += `
                  <div class="col-6 col-sm-3 team">
                      <h4>Team ${teamNumber}</h4>
                      <ul class="list-group">
                      </ul>
                  </div>
              `
  }

 