import './style.css';

export default function Wheel() {
    const items = [
        { text: "Music 1", color: "#f44336" }, 
        { text: "Music 2", color: "#e91e63" }, 
        { text: "Music 3", color: "#9c27b0" }, 
        { text: "Music 4", color: "#673ab7" }, 
        { text: "Music 5", color: "#3f51b5" }, 
        { text: "Music 6", color: "#2196f3" }, 
        { text: "Music 7", color: "#03a9f4" },
        { text: "Music 8", color: "#00bcd4" },
        { text: "Music 9", color: "#3f51b5" },
    ];

    const radius = 150; // Radius of the wheel
    const segmentAngle = 360 / items.length;

    return (
        <svg
            className="wheel"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            width={radius * 2}
            height={radius * 2}
        >
            {items.map((item, index) => {
                const startAngle = index * segmentAngle;
                const endAngle = startAngle + segmentAngle;
                const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                const x1 = radius + radius * Math.cos((startAngle * Math.PI) / 180);
                const y1 = radius + radius * Math.sin((startAngle * Math.PI) / 180);
                const x2 = radius + radius * Math.cos((endAngle * Math.PI) / 180);
                const y2 = radius + radius * Math.sin((endAngle * Math.PI) / 180);

                const pathId = `arc${index}`;

                return (
                    <g key={index}>
                        {/* Segment Path */}
                        <path
                            id={pathId}
                            d={`M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`}
                            fill={item.color}
                        />
                        
                        {/* Arc Path for Text */}
                        <path
                            id={`${pathId}-text`}
                            d={`M${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}`}
                            fill="none"
                            stroke="none"
                        />
                        
                        {/* Text on Arc */}
                        <text dy="-5">
                            <textPath
                                href={`#${pathId}-text`}
                                startOffset="50%"
                                textAnchor="middle"
                                fontSize="12"
                                fill="white"
                            >
                                {item.text}
                            </textPath>
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}