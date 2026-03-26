'use strict';

function generateRadarChart(resultCount, width, height) {
  const categories = ['health', 'career', 'home', 'docs', 'life', 'finance'];

  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) * 0.4;
  const angleStep = (Math.PI * 2) / categories.length;

  const points = categories.map((cat, index) => {
    const value = resultCount[cat] || 0;
    const radius = (value / 6) * maxRadius;
    const angle = index * angleStep - Math.PI / 2;

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  const cornerRadius = Math.min(width, height) * 0.02;
  const pathData = roundCorners(points, cornerRadius);

  const allX = points.map(p => p.x);
  const allY = points.map(p => p.y);
  const minX = Math.min(...allX);
  const maxX = Math.max(...allX);
  const minY = Math.min(...allY);
  const maxY = Math.max(...allY);

  const padding = 30;
  const filterX = minX - padding;
  const filterY = minY - padding;
  const filterWidth = (maxX - minX) + padding * 2;
  const filterHeight = (maxY - minY) + padding * 2;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="inset-glow"
          x="${filterX}"
          y="${filterY}"
          width="${filterWidth}"
          height="${filterHeight}"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">

          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-5" dy="-5" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.866667 0 0 0 0 0.984314 0 0 0 0.6 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.866667 0 0 0 0 0.984314 0 0 0 0.6 0" />
          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
      </defs>

      <path
        d="${pathData}"
        fill="#EADDFB"
        fill-opacity="0.3"
        filter="url(#inset-glow)"
      />
    </svg>
  `;
}

function roundCorners(points, radius) {
  if(points.length < 3) return '';

  let path = '';
  const total = points.length;

  for (let i = 0; i < total; i++) {
    const previous = points[(i - 1 + total) % total];
    const current = points[i];
    const next = points[(i + 1) % total];

    const toPrevious = {x: previous.x - current.x, y: previous.y - current.y};
    const toNext = {x: next.x - current.x, y: next.y - current.y};

    const lenToPrev = Math.sqrt(toPrevious.x ** 2 + toPrevious.y ** 2);
    const lenToNext = Math.sqrt(toNext.x ** 2 + toNext.y ** 2);

    const maxRadius = Math.min(lenToPrev, lenToNext) * 0.5;
    const cornerRadius = Math.min(radius, maxRadius);

    const normToPrev = { x: toPrevious.x / lenToPrev, y: toPrevious.y / lenToPrev };
    const normToNext = { x: toNext.x / lenToNext, y: toNext.y / lenToNext };

    const start = {
      x: current.x + normToPrev.x * cornerRadius,
      y: current.y + normToPrev.y * cornerRadius
    };

    const end = {
      x: current.x + normToNext.x * cornerRadius,
      y: current.y + normToNext.y * cornerRadius
    };

    if (i === 0) {
      path += `M ${start.x} ${start.y} `;
    } else {
      path += `L ${start.x} ${start.y} `;
    }

    path += `Q ${current.x} ${current.y} ${end.x} ${end.y} `;
  }

  path += 'Z';
  return path;
  }

// const svgDesktop = generateRadarChart(resultCount, 500, 500);
// const svgMobile = generateRadarChart(resultCount, 300, 300);

export {generateRadarChart}