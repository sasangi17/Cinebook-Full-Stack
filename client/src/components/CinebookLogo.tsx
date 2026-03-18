const CinebookLogo = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-14 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ticket Shape */}
    <path
      d="M30 60 
         Q30 45 45 45 
         L155 45 
         Q170 45 170 60 
         L170 75 
         Q150 85 170 95 
         L170 140 
         Q170 155 155 155 
         L45 155 
         Q30 155 30 140 
         L30 125 
         Q50 115 30 105 
         Z"
      fill="white"
    />

    {/* Dashed Center Line */}
    <line
      x1="100"
      y1="60"
      x2="100"
      y2="140"
      stroke="black"
      strokeWidth="3"
      strokeDasharray="6 6"
    />

    {/* Play Button Circle */}
    <circle
      cx="100"
      cy="100"
      r="25"
      fill="red"
    />

    {/* Play Icon */}
    <path
      d="M95 85 
         L120 100 
         L95 115 
         Z"
      fill="white"
    />
  </svg>
);

export default CinebookLogo;