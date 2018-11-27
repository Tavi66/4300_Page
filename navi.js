document.getElementById('nav1').innerHTML = `
<!-- Profile image -->
<!--
<img class="img-circle" src="assets/img/image_name.jpg" />
    -->
<div class="card-img-top img-circle collapse navbar-collapse" style="position: relative; margin-top: 15%;">
    <a href="#">
        <img id="profileImg" class="img-circle" src="assets/img/TingZhang.jpg"  />
    </a>
</div>
<!--  -->
<button class="navbar-toggler-left navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<!-- Name -->
<p class="name" style="color:black; padding-top:10px; font-weight:bold;"> Dr. Ting Zhang </p>
<!--  -->
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul style="list-style-type:none;" >
    <li class="nav-item">
        <a class="nav-link" href="home.html"> BIOGRAPHY </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="courses.html"> COURSES </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="education.html"> EDUCATION </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="projects.html"> PROJECTS </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="experience.html"> RESEARCH EXPERIENCE </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="teachingexperience.html"> TEACHING EXPERIENCE </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="publications.html"> PUBLICATIONS </a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="Award.html"> AWARD </a>
    </li>   
    <li class="nav-item">
    <a class="nav-link" href="activities.html"> ACTIVITIES </a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="services.html"> SERVICES </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="contact.html"> CONTACT </a>
    </li>

    </ul>
    </div>
`

var Accordion = function() {
  
    var
      toggleItems,
      items;
    
    var _init = function() {
      toggleItems     = document.querySelectorAll('.accordion__itemTitleWrap');
      toggleItems     = Array.prototype.slice.call(toggleItems);
      items           = document.querySelectorAll('.accordion__item');
      items           = Array.prototype.slice.call(items);
      
      _addEventHandlers();
      TweenLite.set(items, {visibility:'visible'});
      TweenMax.staggerFrom(items, 0.9,{opacity:0, x:-100, ease:Power2.easeOut}, 0.3)
    }
    
    var _addEventHandlers = function() {
      toggleItems.forEach(function(element, index) {
        element.addEventListener('click', _toggleItem, false);
      });
    }
    
    var _toggleItem = function() {
      var parent = this.parentNode;
      var content = parent.children[1];
      if(!parent.classList.contains('is-active')) {
        parent.classList.add('is-active');
        TweenLite.set(content, {height:'auto'})
        TweenLite.from(content, 0.6, {height: 0, immediateRender:false, ease: Back.easeOut})
        
      } else {
        parent.classList.remove('is-active');
        TweenLite.to(content, 0.3, {height: 0, immediateRender:false, ease: Power1.easeOut})
      }
    }
    
    return {
      init: _init
    }
    
  }();
  
  Accordion.init();