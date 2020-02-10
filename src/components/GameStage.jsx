import React from 'react';
import PropTypes from 'prop-types';
// import { ListGroup, Col } from 'react-bootstrap';

import './GameStage.scss';

const GameStage = props => {
  const { stages, activeStage } = props;

  const stageStatusItems = stages.map((stage, index) => {
    if (activeStage === index) return <li className="stage-status-item active">{stage}</li>;
    if (activeStage > index) return <li className="stage-status-item passed">{stage}</li>;
    return <li className="stage-status-item">{stage}</li>;
  });

  return (
    <nav className="margin-top-down">
      <ul className="stage-status">{stageStatusItems}</ul>
    </nav>
  );
  // <Col
  //   fluid="sm"
  //   sm={{ size: 12, offset: 0 }}
  //   md={{ size: 10, offset: 0 }}
  //   lg={{ size: 8, offset: 0 }}
  //   xl={{ size: 6, offset: 0 }}
  // >
  //   <ListGroup horizontal="md">{stagesPanel}</ListGroup>
  // </Col>

  // const stagesToPanel = stages.map((stage, index) => {
  //   let styleClass = 'gamestage-item';
  //   if (activeStage === stage) styleClass = `${styleClass} active`;

  //   return (
  //     <li className={`${styleClass} ${stage > index ? 'passed' : ''}`} key={stage}>
  //       {stage}
  //     </li>
  //   );
  // });

  // return (
  //   <nav className="gamestage clearfix">
  //     <ul>{stagesToPanel}</ul>
  //   </nav>
  // );
};

GameStage.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.string),
  activeStage: PropTypes.number,
};

GameStage.defaultProps = {
  stages: [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие Птицы',
    'Хищные птицы',
    'Морские птицы',
  ],
  activeStage: 0,
};

export default GameStage;
