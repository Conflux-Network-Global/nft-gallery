import React from 'react';

export type SvgIconProps = {
  className?: string;
  size?: number;
  color?: string;
  icon: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  className,
  size = 24,
  color,
  icon,
  width,
  height,
  onClick,
}: SvgIconProps) => (
  <svg
    className={className}
    width={width || size}
    height={height || size}
    style={{ color, cursor: 'pointer' }}
    onClick={onClick}
  >
    <use
      xlinkHref={`${process.env.PUBLIC_URL}/sprite-icons.svg#${String(icon)}`}
    />
  </svg>
);

export default SvgIcon;
