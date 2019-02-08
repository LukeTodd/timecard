let dayArray = [0, 0, 0, 0, 0]
let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']


function combineHours(index) {
  var total = 0;
  for (var i = 0; i < dayArray.length; i++) {
    let day = dayArray[i];
    total = total + day
  } return total
}




function addANDsubtract(index, val) {
  if (!(dayArray[index] + val < 0) && !(dayArray[index] + val > 24)) {
    dayArray[index] += val
    updateDisplay()

  }
}



function updateDisplay() {
  let template = ''
  for (var i = 0; i < dayArray.length; i++) {
    template += `
    <div class="col-2 d-flexs">
      <p>${days[i]}</p>
      <button onclick="addANDsubtract(${i}, 1) ">+</button>
      <p>${dayArray[i]}</p>
      <button onclick="addANDsubtract(${i}, -1)">-</button>
    </div>
    `
  }
  template += `<div class="col-2">
    <h3>Total Hours</h3>
    <p id="total-time"></p>
  </div>`
  document.getElementById('days').innerHTML = template
  document.getElementById('total-time').innerText = combineHours().toString()
}

updateDisplay()



// document.getElementById('hourdisplay').innertext = array[indexNumber].tostring()