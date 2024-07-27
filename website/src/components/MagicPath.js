import React from 'react';

const Position = (x, y) => ({ x, y });

const cardMarginTop = 20;
const cardMarginLeft = 20;
const cardHeight = 60;
const cardWidth = 200;
const cardSpaceWidth = 30;
const cardSpaceHeight = 30;


const Card = ({ label, position }) => {
  return (
    <g transform={`translate(${cardMarginLeft + position.x * (cardWidth + cardSpaceWidth)}, ${cardMarginTop + position.y * (cardHeight + cardSpaceHeight)})`}>
      <rect
        width={cardWidth}
        height={cardHeight}
        rx="10"
        ry="10"
        fill="#ef4444" // tw-red500
        stroke="#f8fafc"
        strokeWidth="2"
      />
      <text
        x={cardWidth / 2}
        y={cardHeight / 2}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="14"
        fill="#fef2f2" // tw-red50
        fontWeight="bold"
      >
        {label}
      </text>
    </g>
  );
};

const Edge = (start, end) => ({ start, end });

const MagicPath = () => {
  const styles = {
    fontSize: '24px',
    color: 'blue',
    textAlign: 'center',
    marginTop: '20px',
  };

  const containerStyles = {
    position: 'relative',
    height: '3000px',
    width: '3000px',
    overflow: 'auto',
    border: '1px solid #ddd',
    background: 'white'
  };

  const svgContainerStyles = {
    width: '3000px',
    height: '3000px',
  };

  const nodes = [
    { id: 'A', label: 'Simple Piano', position: Position(0, 0) },
    { id: 'B', label: 'Basic Notes', position: Position(0, 1) },
    { id: 'C', label: 'Basic Chords', position: Position(0, 3) },
    { id: 'C1', label: 'C Chord', position: Position(1, 2) },
    { id: 'C2', label: 'D Chord', position: Position(1, 3) },
  ];

  const edges = [
    Edge('A', 'B'),
    Edge('B', 'C'),
  ];

  const findNodeById = (id) => nodes.find(node => node.id === id);

  const lines = edges.map((edge, index) => {
    const startNode = findNodeById(edge.start);
    const endNode = findNodeById(edge.end);
    return (
      <line
        key={index}
        x1={cardMarginLeft + startNode.position.x * (cardWidth + cardSpaceWidth) + cardWidth / 2}
        y1={cardMarginTop + startNode.position.y * (cardHeight + cardSpaceHeight) + cardHeight / 2}
        x2={cardMarginLeft + endNode.position.x * (cardWidth + cardSpaceWidth) + cardWidth / 2}
        y2={cardMarginTop + endNode.position.y * (cardHeight + cardSpaceHeight) + cardHeight / 2}
        stroke="#737373"
        strokeWidth="2"
      />
    );
  });

  return (
    <div style={styles}>
      <div style={containerStyles} className="bg-red-500">
        <svg style={svgContainerStyles}>
          {lines}
          {nodes.map((node, index) => (
            <Card key={index} label={node.label} position={node.position} />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MagicPath;