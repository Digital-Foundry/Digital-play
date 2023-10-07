import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-black">
    <div className={props.color}>{props.children}</div>
  </div>
);

export { Background };
