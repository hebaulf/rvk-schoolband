import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="FooterInfo">
        <div className="FooterInfo__group" role="contactinfo">
          <h3 className="FooterInfo__grouptitle">Opnunartímar</h3>
          <div className="FooterInfo__groupcontent">
            <div>
              <p>Þjónustuver</p>
              <p><strong>Borgartún 12-14, 105 Reykjavík</strong><br />Virka daga kl. 8:30-16:00</p>
              <p><strong>Teikningaafgreiðsla</strong><br />Virka daga kl. 8:30-15:00</p>
              <p>Ráðhúsið</p>
              <p><strong>Tjarnargata 11, 101 Reykjavík</strong><br />Virka daga kl. 8:00-18:00<br />Laugardaga kl. 10:00-18:00<br />Sunnudaga kl. 12:00-18:00</p>
              <p><strong>Kennitala Reykjavíkurborgar:</strong><br />530269-7609</p>
            </div>
          </div>
        </div>
        <div className="FooterInfo__group">
          <h3 className="FooterInfo__grouptitle">Hafa samband</h3>
          <div className="FooterInfo__groupcontent">
            <ul>
              <li><a href="/">Ábendingar</a><span>Sendu okkur línu</span></li>
              <li><a href="/">Netspjall</a><span>Opið virka daga kl. 8:30-16:00</span></li>
              <li><a href="/">Spurt og svarað</a><span>Algengar spurningar og svör</span></li>
              <li><a href="tel:+3544111111">Þjónustuver 411 1111</a><span>Opið virka daga kl. 8:30-16:00</span></li>
              <li><a href="mailto:upplysingar@reykjavik.is">upplysingar@reykjavik.is</a><span>Sendu okkur línu</span></li>
            </ul>
          </div>
        </div>
        <div className="FooterInfo__group">
          <h3 className="FooterInfo__grouptitle">Alls konar</h3>
          <div className="FooterInfo__groupcontent">
            <ul>
              <li><a href="/">Laus störf</a></li>
              <li><a href="/">Ábendingar</a></li>
              <li><a href="/">Þjónustuver</a></li>
              <li><a href="/">Fréttir</a></li>
              <li><a href="/">Gjaldskrár</a></li>
              <li><a href="/">Teikningavefur</a></li>
              <li><a href="/">Skilmálar</a></li>
              <li><a href="/">Persónuvernd</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
