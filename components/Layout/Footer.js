import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className="Layout__footer" role="complementary">
      <div className="FooterInfo">
        <div className="FooterInfo__group" role="contactinfo">
          <h3 className="FooterInfo__grouptitle">Opnunartímar</h3>
          <div className="FooterInfo__groupcontent">
            <h4>Þjónustuver</h4>
            <p>
                <strong>Borgartún&nbsp;12–14, 105&nbsp;Reykjavik</strong>
                <br />
                Virka daga kl. 08:30–16:00
            </p>
            <p>
                <strong>Teikniafgreiðsla</strong><br />
                Virka daga kl. 08:30–16:00
            </p>
            <h4>Ráðhúsið</h4>
            <p>
                <strong>Tjarnargata&nbsp;11, 101&nbsp;Reykjavík</strong><br />
                Virka daga kl. 8:00–18:00<br />
                Helgar kl. 10:00–18:00<br />
            </p>
          </div>
        </div>
        <div className="FooterInfo__group">
          <h3 className="FooterInfo__grouptitle">Hafa samband</h3>
          <div className="FooterInfo__groupcontent">
            <ul>
              <li><a href="/">Ábendingar</a><span><br />Sendu okkur línu</span></li>
              <li><a href="/">Netspjall</a><span><br />Opið virka daga kl. 8:30-16:00</span></li>
              <li><a href="/">Spurt og svarað</a><span><br />Algengar spurningar og svör</span></li>
              <li><a href="tel:+3544111111">Þjónustuver 411 1111</a><span><br />Opið virka daga kl. 8:30-16:00</span></li>
              <li><a href="mailto:upplysingar@reykjavik.is">upplysingar@reykjavik.is</a><span><br />Sendu okkur línu</span></li>
            </ul>
          </div>
        </div>
        <div className="FooterInfo__group">
          <h3 className="FooterInfo__grouptitle">Alls konar</h3>
          <div className="FooterInfo__groupcontent">
            <ul>
              <li><a href="https://minarsidur.reykjavik.is/">Mínar síður</a></li>
              <li><a href="https://reykjavik.is/laus-storf/oll-storf">Laus störf</a></li>
              <li><a href="https://abendingar.reykjavik.is/">Ábendingar</a></li>
              <li><a href="/thjonustuver">Þjónustuver</a></li>
              <li><a href="/frettir">Fréttir</a></li>
              <li><a href="/gjaldskrar">Gjaldskrár</a></li>
              <li><a href="http://teikningar.reykjavik.is/">Teikningavefur</a></li>
              <li><a href="/sites/default/files/ymis_skjol/skjol_utgefid_efni/personuverndarstefna_reykjavikurborgar_mars_2019.pdf">Persónuverndarstefna</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
