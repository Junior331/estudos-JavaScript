
function getPeople() {
  const URL = "https://reqres.in/api/users?page=1";

  fetch(URL).then(response => response.json()).then(response => {

    const people = response.data;

    const containerHtml = document.querySelector(".container");
    console.log(containerHtml)

    var cards = "";

    for (let i = 0; i < people.length; i++) {
      cards = cards + `
      <div class="box">
      <div class="content">
          <img class="ImgUser" src="${people[i].avatar}" alt="">
          <h1>${people[i].first_name}</h1>
          <div>
              <a target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=${people[i].email}"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 382.117 382.117"
              style="enable-background:new 0 0 382.117 382.117;" xml:space="preserve" class="icone email">
              <path d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41
                  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354
                  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001
                  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987
                  L62.87,84.397h256.378L191.059,192.987z" />
          </svg>
          </a>
              <svg class="icone add" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288.021 288.021"
              style="enable-background:new 0 0 288.021 288.021;" xml:space="preserve">
              <g>
                  <path d="M144.01,230.365c47.617,0,86.356-38.739,86.356-86.355s-38.739-86.355-86.356-86.355
                      c-47.616,0-86.356,38.739-86.356,86.355S96.394,230.365,144.01,230.365z M131.51,100.01c0-6.903,5.597-12.5,12.5-12.5
                      c6.903,0,12.5,5.597,12.5,12.5v31.5h31.5c6.903,0,12.5,5.597,12.5,12.5s-5.597,12.5-12.5,12.5h-31.5v31.5
                      c0,6.903-5.597,12.5-12.5,12.5c-6.903,0-12.5-5.597-12.5-12.5v-31.5h-31.5c-6.903,0-12.5-5.597-12.5-12.5s5.597-12.5,12.5-12.5
                      h31.5V100.01z" />
                  <path d="M144.01,0.001c-17.753,0-34.762,3.237-50.478,9.139c5.988,5.967,10.268,13.648,12.024,22.239
                      c12.068-4.132,25.003-6.378,38.453-6.378c65.623,0,119.011,53.387,119.011,119.009c0,65.622-53.388,119.01-119.011,119.01
                      C78.388,263.02,25,209.632,25,144.01c0-23.637,6.928-45.685,18.857-64.224c-7.777-3.697-14.304-9.615-18.746-16.934
                      C9.277,85.977,0,113.929,0,144.01c0,79.407,64.603,144.01,144.01,144.01c79.408,0,144.011-64.603,144.011-144.01
                      C288.021,64.602,223.418,0.001,144.01,0.001z" />
                  <circle cx="62.611" cy="40.177" r="23.833" />
              </g>
          </svg>
          </div>
      </div>
  </div>
      `
    }


    containerHtml.innerHTML = cards;

  }).catch(error => {
    console.error("FALHA" + error)
  })

  var text = document.querySelector(".text");
  text.style.display = 'none';
}