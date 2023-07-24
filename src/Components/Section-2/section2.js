import "./styles.css";
import { Link } from "react-router-dom";
import ImgBalance from "../../Images/balace-sheet.png";
import ImgCafe from "../../Images/cafe.png";
import ImgDocument from "../../Images/document.png";
import ImgFerrisWheel from "../../Images/ferris-wheel.png";
import ImgMagazine from "../../Images/newspaper.png";
import ImgPenguin from "../../Images/penguin.png";
import ImgPhotoGallery from "../../Images/photo-gallery.png";
import ImgPiano from "../../Images/piano.png";
import ImgProduct from "../../Images/product-page.png";
import ImgForm from "../../Images/register-form.png";
import ImgSkyline from "../../Images/sky-line.png";
import ImgReact from '../../Images/headline-react.png'

function Section2() {
  return (
    <section id="projects">
      <h2>These are some of my projects</h2>
      <div id="grid-projects">
        <Link className="project-tile" to={'/cafe'}>
          <img className="img-projects" src={ImgCafe} />
        </Link>
        <Link className="project-tile" to={'/register-form'}>
          <img className="img-projects" src={ImgForm} />
        </Link>
        <Link className="project-tile" to={'/flexbox'}>
          <img className="img-projects" src={ImgPhotoGallery} />
        </Link>
        <Link className="project-tile" to={'/blog'}>
          <img className="img-projects" src={ImgReact} />
        </Link>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgBalance} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgPiano} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgDocument} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgSkyline} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgMagazine} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgProduct} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgFerrisWheel} />
        </a>
        <a className="project-tile" href="">
          <img className="img-projects" src={ImgPenguin} />
        </a>
      </div>
    </section>
  );
}

export default Section2;
