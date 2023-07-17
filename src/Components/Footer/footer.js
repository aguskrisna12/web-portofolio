import "./styles.css";

function Footer() {
  return (
    <section id="contact">
      <h1>Let's work together...</h1>
      <div class="contact-links">
        <a
          href="https://facebook.com/freecodecamp"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fa-brands fa-linkedin logo"></i>
          LinkedIn
        </a>
        <a
          id="profile-link"
          href="https://github.com/freecodecamp"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-github logo"></i>
          GitHub
        </a>
        <a href="mailto: aguskrisnau317@gmail.com" class="btn contact-details">
          <i class="fas fa-at logo"></i> Send a mail
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=62895630890096"
          class="btn contact-details"
        >
          <i class="fas fa-mobile-alt logo"></i>
          Call me
        </a>
      </div>
    </section>
  );
}

export default Footer;
