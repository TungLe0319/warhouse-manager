const packages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
  },
  {
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
  },
];

// NOTE how to get a random element
const random = packages[Math.floor(Math.random() * packages.length)];

// const heavyFiltered = packages.filter((packages) => {
//   return packages.heavy;
// });
let heavy = packages.filter((package) => package.heavy);
console.log(heavy);
let priority = packages.filter((package) => package.priority);

let fragile = packages.filter((package) => package.fragile);

// console.log(heavyFiltered,priorityFiltered,fragileFiltered);

draw(packages);

function draw(data) {
  table.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    let row = `<table class="table table-bordered  table-success table-striped  ">
   
      <tr>
        <th>To:</th>
        <th >Tracking:</th>
        <th >Heavy</th>
        <th>Priority</th>
        <th >Fragile</th>
      </tr>
  
    <tbody class="table-group-divider">

    <tr>
    <td>${data[i].to}</td>
    <td>${data[i].trackingNumber}</td>
    <td>${data[i].heavy}</td>
    <td>${data[i].priority}</td>
    <td>${data[i].fragile}</td>
    </tr>


    </tbody>
  </table>`;

    table.innerHTML += row;
  }
}

function filterByHeavy() {
  /** REVIEW here im grabbing the table_div in html and setting it to an empty string to "reset"
   the div.**/
  let heavyTable = document.getElementById('table');
  heavyTable.innerHTML = '';

  // REVIEW taking my let filter i made and doing a function for reach (drawing them)
  heavy.forEach((package) => {
    let heavyRow = `
    
    <table class="table table-bordered  table-danger table-striped  ">
   
    <tr>
      <th>To:</th>
      <th >Tracking:</th>
      <th>Heavy</th>
      <th>Priority</th>
      <th >Fragile</th>
    </tr>


  <tbody class="table-group-divider">

  <tr>
  
  <td>${package.to}</td>
  <td>${package.trackingNumber}</td>
  <td><span class="text-success">${package.heavy}</span</td>
  <td>${package.priority}</td>
  <td>${package.fragile}</td>
  </tr>


  </tbody>
</table>`;
    heavyTable.innerHTML += heavyRow;
  });
}

function filterByPriority() {
  let PriorityTable = document.getElementById('table');
  PriorityTable.innerHTML = '';

  priority.forEach((package) => {
    let PriorityRow = `<table class="table table-bordered  table-warning table-striped  ">
   
    <tr>
      <th>To:</th>
      <th >Tracking:</th>
      <th>Heavy</th>
      <th><span class="text-success">Priority</span></th>
      <th >Fragile</th>
    </tr>


  <tbody class="table-group-divider">

  <tr>
  
  <td>${package.to}</td>
  <td>${package.trackingNumber}</td>
  <td>${package.heavy}</td>
  <td><span class="text-success">${package.priority}</span></td>
  <td>${package.fragile}</td>
  </tr>


  </tbody>
</table>`;
    PriorityTable.innerHTML += PriorityRow;
  });
}
function filterByFragile() {
  let FragileTable = document.getElementById('table');
  FragileTable.innerHTML = '';
  fragile.forEach((package) => {
    let fragileRow = `<table class="table table-bordered  table-primary table-striped  ">
   
    <tr>
      <th>To:</th>
      <th >Tracking:</th>
      <th>Heavy</th>
      <th>Priority</th>
      <th >Fragile</th>
    </tr>


  <tbody class="table-group-divider">

  <tr>
  
  <td>${package.to}</td>
  <td>${package.trackingNumber}</td>
  <td>${package.heavy}</td>
  <td>${package.priority}</td>
  <td><span class="text-success">${package.fragile}</span></td>
  </tr>


  </tbody>
</table>`;
    FragileTable.innerHTML += fragileRow;
  });
}
