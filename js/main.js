console.log('Starting up');
var gProjs = [{
  id: 'mineSweeper',
  name: 'Mine Sweeper',
  title: 'Better push those boxes',
  desc: 'lorem ipsum lorem ipsum lorem ipsum',
  url: 'https://avishaietach.github.io/Sprint1/',
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},
{
  id: 'packman',
  name: 'packman',
  title: 'Better push those boxes',
  desc: 'lorem ipsum lorem ipsum lorem ipsum',
  url: 'https://avishaietach.github.io/packman/',
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},
];

$(onInit)

function onInit() {
  renderThumbnails()
  renderModals()
}


function renderModals() {
  var num = 1;
  var strHtmls = gProjs.map(function (modal) {
    return `    
        <div class="portfolio-modal modal fade" id="portfolioModal${num++}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${modal.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${modal.id}.png" alt="">
                <p>${modal.desc}
                  <a href="${modal.url}">click here!!!!</a></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Window</li>
                  <li>Category: Game</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    `
  });
  $('.container-Modals').html(strHtmls)
}

function renderThumbnails() {
  var num = 1;
  var strHtmls = gProjs.map(function (modal) {
    return `    
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${num++}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${modal.id}-thum.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${modal.name}</h4>
      <p class="text-muted">Game</p>
    </div>
  </div>
    `
  });
  $('.container-Thumbnails').html(strHtmls)
}





