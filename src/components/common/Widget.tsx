import * as React from 'react';

export interface WidgetProps {
    title: string,
    children: React.ReactNode
}

export function Widget ({ title, children }: WidgetProps) {
  return (
    <div>
      <span>
          { title }
      </span>
      <div>
          { children }
      </div>
    </div>
  );
}
