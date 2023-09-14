import React from "react";
import "./Footer.scss";
import facebook from "../../assets/img/icons8-facebook-48.png";
import instagram from "../../assets/img/icons8-instagram-48.png";
import twitter from "../../assets/img/icons8-twitter-48.png";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <p>Telif Hakkı</p>
        <p>
          Ucus firmasının Web sitesinin isim hakları, içeriği, şablonu, tasarımı
          ve site içindeki tüm dokümanlara ait hakları saklıdır. Site içerisinde
          yer alan sayfalarda aksi belirtilmediği sürece, site içindeki hiçbir
          doküman, sayfa, grafik, tasarım unsuru ve diğer unsurlar izin
          alınmaksızın kopyalanamaz, başka yere taşınamaz, alıntı yapılamaz,
          internet üzerinde veya her ne şekilde olursa olsun yayınlanamaz ve
          kullanılamaz (arama motorlarının dizinleri için kullandıkları geçici
          bellek kayıtlarından alınmış olsalar dahi).
        </p>
      </div>
      <div className="footer-center">
        <p>Linkler</p>
        <ul>
          <li>
            <a href="">Anasayfa</a>
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
          </li>
        </ul>
      </div>

      <div className="footer-right">
        <p>Bizi takip et!</p>
        <div className="socialmedia-icons">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
