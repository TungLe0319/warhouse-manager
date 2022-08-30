const packages = [{
  heavy: true,
  priority: false,
  fragile: false,
  to: 'Harrington',
  trackingNumber: '1324kjs'
},
{
  heavy: false,
  priority: true,
  fragile: true,
  to: 'Mark',
  trackingNumber: '1325sdk'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Mick',
  trackingNumber: 'jffd147'
},
{
  heavy: false,
  priority: false,
  fragile: false,
  to: 'Jake',
  trackingNumber: 'acdc145'
},
{
  heavy: true,
  priority: true,
  fragile: true,
  to: 'Brittany'
},
{
  heavy: false,
  priority: true,
  fragile: false,
  to: 'Zach',
  trackingNumber: '8081baz'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Jeremy',
  trackingNumber: 'suz2367'
}
]

  
// NOTE how to get a random element
const random = packages[Math.floor(Math.random() * packages.length)];


const heavyFiltered= packages.filter((packages) => {
  return packages.heavy
  
})

const priorityFiltered= packages.filter((packages) => {
  return packages.priority
 
})

const fragileFiltered= packages.filter((packages) => {
  return packages.fragile
 
})

// console.log(heavyFiltered,priorityFiltered,fragileFiltered);


draw(packages)
function draw(data){
  

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
  </table>`
    table.innerHTML += row
  }
}

function filterByHeavy(){
  
  heavyFiltered.forEach((package) =>{
   
    let heavyRow =`<table class="table table-bordered  table-danger table-striped  ">
   
    <tr>
      <th>To:</th>
      <th >Tracking:</th>
      <th><span class="text-danger">Heavy</span></th>
      <th>Priority</th>
      <th >Fragile</th>
    </tr>


  <tbody class="table-group-divider">

  <tr>
  
  <td>${package.to}</td>
  <td>${package.trackingNumber}</td>
  <td>${package.heavy}</td>
  <td>${package.priority}</td>
  <td>${package.fragile}</td>
  </tr>


  </tbody>
</table>`
table.innerHTML += heavyRow
  })
}











