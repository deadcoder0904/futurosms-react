import React from "react";

import { Title, Subtitle, Header, Wrapper } from "./glamarous";
import Card from "./Card";
import imgs, { features, uses, btns } from "./Data";

const renderCard = data =>
  data.map((item, i) => (
    <Card title={item.title} text={item.text} key={i} i={i} />
  ));

const renderBtns = btns =>
  btns.map((btn, i) => (
    <a href={btn.href} key={i} target="_blank" rel="noopener noreferrer">
      <img src={btn.src} alt={btn.alt} width="350" height="150" />
    </a>
  ));

const App = () => (
  <div>
    <Title>FUTURO SMS</Title>
    <Subtitle>Write SMS ahead of time & send them in the future</Subtitle>

    <Wrapper>
      <img
        src={imgs[0]}
        alt="Futuro SMS pic with frame"
        width="1000"
        height="900"
      />
    </Wrapper>
    <Header># Features</Header>
    <Wrapper>{renderCard(features)}</Wrapper>
    <Header># Use Cases</Header>
    <Wrapper>{renderCard(uses)}</Wrapper>
    <Header># Available On</Header>
    <Wrapper>{renderBtns(btns)}</Wrapper>
  </div>
);

export default App;
