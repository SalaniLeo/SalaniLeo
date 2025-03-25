<div id="footer">
  <div id="footer-wrapper" class="flexbox">
    <div class="left" id="aboutbox">
      <h2>About</h2>
      <div class="content">
        <p><i class="fa-solid fa-location-dot"></i> From Ferrara, Italy</p>
        <p><i class="fa-solid fa-star"></i> 18 Years Old</p>
        <p><i class="fa-brands fa-linux"></i> Linux user for more than 4 years!</p>
      </div>
    </div>
    <div class="right" id="contactbox">
      <h2>      
          <a 
          class="contact hover"
          id="share"
          href="https://me.salanileo.dev">Socials <small><i class="fa-solid fa-link"></i></small></a></h2>
      <div id="list">
        <a
          class="contact"
          id="instagram"
          href="https://www.instagram.com/leonardo.salanii/"
          ><i class="fa-brands fa-instagram"></i> Instagram</a
        >
        <!-- <a class="contact" id="email"     href="mailto:leonardo07.salani@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a> -->
        <a class="contact" id="telegram" href="https://t.me/sudatoLeo"
          ><i class="fa-brands fa-telegram"></i> Telegram</a
        >
        <a
          class="contact"
          id="linkedin"
          href="https://www.linkedin.com/in/leonardo-salani/"
          ><i class="fa-brands fa-linkedin"></i> LinkedIn</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  #aboutbox {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex-grow: 1;
  }
  #aboutbox p{
    margin-top: 0.5rem;
  }
  #contactbox {
    flex-grow: 1;
  }
  #contactbox > #list {
    margin-top: 2rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .contact {
    text-decoration: none;
  }
  .hover small {
    font-size: 1.25rem;
  }
</style>
