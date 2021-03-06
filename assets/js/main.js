/*=============== Github Repos ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/exploits.my.id/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('sitor').innerText =  this.response.value;
}
xhr.send();
 
 var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.waifu.pics/sfw/waifu");
xhr.responseType = "json";
xhr.onload = function() {
 
 var pekob = this.response.url;
 
$('#profile').addClass('active')
      $('#profile').attr('href', '#')
      $.ajax({
        url: 'https://api.github.com/users/koleksibot/repos',
        type: 'get',
        dataType: 'json',
        success: function (result) {
  
          $.each(result, function (i, data) {
         
            $('#prj').html(data.length);
            $('#projects').append(`
            
            
					</br>
            <article class="projects__card">
                            
                            <img src="${pekob}" alt="${data.name}" class="projects__img">
                          
                            <div class="projects__modal">
                                <div>
                                    <span class="projects__subtitle">${data.name}</span>
                                    <h3 class="projects__title">${(data.description == null) ? "Click Here": data.description}</h3>
                                    <a href="${data.svn_url}" class="projects__button button button__small">
                                        <i class="ri-link"></i>
                                    </a>
                                </div>
                            </div>
                        </article>
            
            
            
            
            
            
            
            
            
            
            
              
              `);
          });

        }
      });

}
xhr.send();

$(document).bind("contextmenu",function(e){
	
  
  return false;
    });
    
    





sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 200})
sr.reveal(`.profile__profession`, {delay: 300})
sr.reveal(`.profile__social`, {delay: 600})
sr.reveal(`.profile__info-group`, {interval: 200, delay: 400})
sr.reveal(`.profile__buttons`, {delay: 500})
sr.reveal(`.filters__content`, {delay: 700})
sr.reveal(`.filters`, {delay: 1000})
