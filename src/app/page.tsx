'use client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #fafafa;
    color: #333;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #d71a28;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  color: #555;
  &:hover {
    color: #d71a28;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: #fff;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
`;

const Container = styled.main`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Section = styled.section`
  background: #fff;
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  border-bottom: 2px solid #d71a28;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  object-fit: cover;
`;

const StyledVideo = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Hero = styled.section`
  width: 100%;
  height: 500px;
  background-image: url('https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_2880,h_1600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/stage%20header%20attractions/image%20summer/50737_32001800.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px 30px;
  }
`;
export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <Header>
        <Logo>Switzerland</Logo>
        <Nav>
          <NavLink href="#general">Ерөнхий</NavLink>
          <NavLink href="#economy">Эдийн засаг</NavLink>
          <NavLink href="#facts">Баримтууд</NavLink>
          <NavLink href="#video">Видео</NavLink>
        </Nav>
      </Header>

      <Hero>
        <HeroTitle>Switzerland</HeroTitle>
      </Hero>

      <Container>
        <Section id="general">
          <SectionTitle>Ерөнхий Мэдээлэл</SectionTitle>
          <Paragraph>
            Швейцарь нь Төв Европын нэгэн бие даасан улс бөгөөд олон улсын түвшинд тогтвортой байдал, сөрөг бодлого, мөн төгс
            төгөлдөр бус нутгийн зохицуулалтай. Швейцарь улсын үүсэл нь 13‑р зуунд гурван кантон – Урн, Швиц, Үнтервалден –
            хамтран үүссэн эвслэлийг үндэс суур болгосноор эхэлдэг. 1815 онд Венагийн конгрессоор тус улс өөрийн тусгаар тогтнолыг
            баталгаажуулж, олон улсын хамтын ажиллагаанд нейтрал байдлыг баримтлуулахыг хүлээн зөвшөөрсөн.Үүнээс хойш 1848 онд
            шинэ үндсэн хууль батлагдаж улам төвлөрсөн холбооны төрийн систем болгон дахин шинэчлэгдсэн бөгөөд энэ шинэ систем нь
            дотоодын олон улсын эрх чөлөө, бие даасан байдлыг хамтад нь хамгаалж, орчин үеийн эдийн засаг, технологийн хөгжил, улс
            төрийн тогтвортой байдлыг дэмжсэн үндсэн суурийг бий болгосон юм. Холбооны бүгд найрамдах улсаар засагддаг бөгөөд
            хуулийн дагуу шууд ардчилалд чиглэсэн мөн эдийн засгийн тогтвортой байдал, өндөр амжилттай олон улсын банк санхүүгийн
            үйлчилгээ, өндөр технологийн салбар, эрүүл мэнд, боловсролын системээр алдартай. Газар нутгийн хэмжээ нь 41,290 км²
            нийслэл хот нь Берн, ойролцоогоор 8.7сая хүн амтай. Албан ёсны 4н хэлтэй герман, франц, итали,
          </Paragraph>
          <StyledImage
            src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180807165922/Zermatt.jpg"
            alt="Switzerland"
          />
        </Section>

        <Section id="economy">
          <SectionTitle>Эдийн Засаг</SectionTitle>
          <Paragraph>
            Швейцарь улсын эдийн засгийн үзүүлэлтүүд нь өндөр хөгжилтэй, төрөлжилттэй, тогтвортой байдалтай бөгөөд дотоодын нийт
            бүтээгдэхүүн нь 2024онд 900 тэрбум ам.доллар орчим хүрч, жилд 2-3% орчим өсөлттэй, инфляцийн түвшин 2024онд 2.1%,
            хөдөлмөрийн зах зээл нь өрсөлдөөнтэй бөгөөд ажилгүйдлийн түвшин нь маш бага, 2%-ийн орчим байдаг. Швейцарь нь дэлхийн
            тэргүүлэгч экспортлогч орнуудын нэг бөгөөд эм, химийн бүтээгдэхүүн, тоног төхөөрөмж, үнэт металл экспортолдог.
            Экспортын хэмжээ нь тус улсын ДНБ-ний 50%-иас дээш хувийг эзэлж, швейцар франк (CHF) нь дэлхийн санхүүгийн зах зээл
            дээр тогтвортой валютын хувьд өндөр байр суурь эзэлж нөөц валют гэж тооцогддог бөгөөд эдийн засгийн хямралын үед
            хөрөнгө оруулагчид CHF руу хөрөнгөө шилжүүлэх нь түгээмэл. Мөн, швейцарийн эдийн засгийн үндсэн салбаруудын нэг болох
            тамхи, ундаа, савлагаатай бүтээгдэхүүний үйлдвэрлэл нь олон улсын зах зээлд өрсөлдөөнтэй бөгөөд эдийн засгийн өсөлт,
            хөгжилд чухал хувь нэмэр оруулдаг. Санхүүгийн төвүүд болох Женева, Цюрих зэрэг хотууд нь олон улсын банк, хөрөнгө
            оруулалтын байгууллагуудын төвүүдийн нэг болж, өндөр нууцлал, шилдэг санхүүгийн үйлчилгээ, хөрөнгө оруулалтын
            боломжийг санал болгодог.
          </Paragraph>
        </Section>

        <Section id="facts">
          <SectionTitle>Сонирхолтой Баримтууд</SectionTitle>
          <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', paddingLeft: '20px', margin: 0 }}>
            <li>
              1. Берн хотын эртний хотын төв нь UNESCO-ын дэлхийн өвд бүртгэлтэй бөгөөд дундад зууны уран барилга, архитектурын
              өвийг хадгалсан байдаг.
            </li>
            <li>
              2. Rolex, Omega, Patek Philippe, Audemars Piguet зэрэг швейцарийн цаг үйлдвэрлэгчид нь дэлхийн зах зээл дээр хамгийн
              өндөр үнэлгээтэй, чанартай, нарийн хийцтэй бүтээгдэхүүнээрээ танигдсан бөгөөд эдгээр нь элит эрхэмлэгчдийн статусын
              бэлэг тэмдэг болжээ.
            </li>
            <li>
              3. Швейцарь улсын ихэнх нутаг Алпын уулсын бүсийг хамарч, өвөрмөц байгалийн үзэсгэлэн, цөл ба ногоон талбай,
              мөрөөдлийн уулзваруудад жилд дунджаар 10-13сая орчин жуулчид очдог. Энэ нь дэлхий дахины аялал жуулчлалын төв
            </li>
            <li>
              4. 1815 оноос хойш ямар ч олон улсын дайнд оролцогдоогүй, зөвхөн эв нэгдэл, нейтрал байдал, гадаад бодлого, олон
              улсын энх тайван болон харилцааны тал дээр идэвхтэй оролцоотой улс юм. Хэрвээ цөмийн дайн болох юм бол швейцарьчууд
              бүх ард түмнээ багтаах нуувчтай.
            </li>
            <li>5. Швейцарийн нийт хүн амын 23 хувь нь гадаадын иргэд байдаг.</li>
          </ul>
        </Section>

        <Section id="video">
          <SectionTitle>Видео</SectionTitle>
          <StyledVideo
            src="https://www.youtube.com/embed/ka-7ByunLAI?si=yGMVz5yMeGB36gNo"
            title="Switzerland"
            allowFullScreen
          ></StyledVideo>
        </Section>
      </Container>

      <Footer>© {new Date().getFullYear()} Switzerland. All rights reserved. <br/>Powered by M1-302 B.Suvdanchimeg</Footer>
    </main>
  );
}
