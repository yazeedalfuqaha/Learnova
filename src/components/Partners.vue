<template>
<section class="partners">

  <h2>Our Partners</h2>
  <p>Trusted by leading companies worldwide</p>

  <div class="slider">

    <div class="slide-track">

      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />

      <!-- repeat for smooth scroll -->

      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />

    </div>

  </div>

</section>
</template>

<style>

.partners{
  padding:80px 10%;
  text-align:center;
  background:#fff;
}

.partners h2{
  font-size:32px;
  margin-bottom:10px;
}

.partners p{
  color:#777;
  margin-bottom:40px;
}

.slider{
  overflow:hidden;
  position:relative;
}

.slide-track{
  display:flex;
  width:calc(250px * 10);
  animation:scroll 20s linear infinite;
}

.slide-track img{
  width:120px;
  margin:0 40px;
  opacity:0.7;
  transition:0.3s;
}

.slide-track img:hover{
  opacity:1;
  transform:scale(1.1);
}

@keyframes scroll{

  0%{
    transform:translateX(0);
  }

  100%{
    transform:translateX(-50%);
  }

}

</style>