import React from 'react';
import cn from 'classnames';

import styles from './<%name%>.module.scss';

export type <%name%>Props = {
  className?: string;
};

const <%name%>: React.FC<<%name%>Props> = ({ className }) => {
  return <div className={cn(styles.root, className)}><%name%></div>;
};

export default <%name%>;
