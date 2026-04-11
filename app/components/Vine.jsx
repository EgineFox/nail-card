export default function Vine({ side = "left" }) {
  const isRight = side === "right"

  return (
    <div
      className={`fixed top-0 ${isRight ? "right-0 scale-x-[-1]" : "left-0"} h-full w-16 pointer-events-none z-0`}
      style={{ opacity: 0.18 }}
    >
      <svg
        viewBox="0 0 60 1000"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Основной стебель */}
        <path
  d="M30 0 
     C16 10  40 120  24 210
     C10 280 46 330  30 420
     C20 480 36 540  22 630
     C10 700 44 750  32 840
     C22 900 34 960  30 3000"
  stroke="#fda4af" strokeWidth="1.5" fill="none" strokeLinecap="round"
/>

        {/* Листья — чередуются влево/вправо */}
        <path d="M28 90  Q8  70  12  50  Q24 48 28  90Z"  fill="#fda4af" opacity="0.75"/>
        <path d="M32 150 Q52 130 48 110 Q38 108 32 150Z" fill="#fda4af" opacity="0.75"/>
        <path d="M27 230 Q7  210 11  190 Q23 188 27 230Z" fill="#fda4af" opacity="0.75"/>
        <path d="M31 290 Q51 270 47 250 Q37 248 31 290Z" fill="#fda4af" opacity="0.75"/>

        {/* Цветок */}
        <circle cx="27" cy="360" r="3.5" fill="#fda4af" opacity="0.9"/>
        <circle cx="21" cy="354" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="33" cy="354" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="27" cy="348" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="21" cy="366" r="2.5" fill="#fda4af" opacity="0.5"/>
        <circle cx="33" cy="366" r="2.5" fill="#fda4af" opacity="0.5"/>

        <path d="M28 450 Q8  430 12 410 Q24 408 28 450Z" fill="#fda4af" opacity="0.75"/>
        <path d="M32 510 Q52 490 48 470 Q38 468 32 510Z" fill="#fda4af" opacity="0.75"/>
        <path d="M27 590 Q7  570 11 550 Q23 548 27 590Z" fill="#fda4af" opacity="0.75"/>
        <path d="M31 650 Q51 630 47 610 Q37 608 31 650Z" fill="#fda4af" opacity="0.75"/>

        {/* Цветок */}
        <circle cx="27" cy="720" r="3.5" fill="#fda4af" opacity="0.9"/>
        <circle cx="21" cy="714" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="33" cy="714" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="27" cy="708" r="2.8" fill="#fda4af" opacity="0.6"/>
        <circle cx="21" cy="726" r="2.5" fill="#fda4af" opacity="0.5"/>
        <circle cx="33" cy="726" r="2.5" fill="#fda4af" opacity="0.5"/>

        <path d="M28 800 Q8  780 12 760 Q24 758 28 800Z" fill="#fda4af" opacity="0.75"/>
        <path d="M32 860 Q52 840 48 820 Q38 818 32 860Z" fill="#fda4af" opacity="0.75"/>
        <path d="M27 930 Q7  910 11 890 Q23 888 27 930Z" fill="#fda4af" opacity="0.75"/>
      </svg>
    </div>
  )
}