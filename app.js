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
    fragile: false,
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
let tableElement = document.getElementById('table');

function drawPackages(packages) {
  let template = '';
  packages.forEach((package) => {
    template += `
    
    <table class="table table-bordered table-striped table-primary">
    <thead>
      <tr>
        <th scope="col">To:</th>
        <th scope="col">Tracking#:</th>
        <th scope="col">Heavy</th>
        <th scope="col">Priority</th>
        <th scope="col">Fragile</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <td>${package.to}</td>
        <td>${package.trackingNumber}</td>
        <td>${package.heavy}</td>
        <td>${package.priority}</td>
        <td>${package.fragile}</td>
      </tr>


    </tbody>
  </table>

    `;
  });
  // .innerHTML CONVERTS TEMPLATE STRING FROM JAVASCRIPT TO HTML PAGE
  tableElement.innerHTML = template
}

drawPackages(packages)

function filterByHeavy(){
// NOTE HERE JAVASCRIPT ALREADY KNOWS YOU'RE ASKING A TRUE OR FALSE
  let heavyPackages = packages.filter(package=> package.heavy)

  drawPackages(heavyPackages)

};

function filterByFragile(){
  let fragilePackages = packages.filter(package => package.fragile)
  drawPackages(fragilePackages)
};

function filterByPriority(){
  let priorityPackages= packages.filter(package => package.priority)
  drawPackages(priorityPackages)
};
