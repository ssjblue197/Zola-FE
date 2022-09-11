import * as React from 'react';

export interface MessageContentProps {
    own: boolean;
    message: any;
}

export function MessageContent ({ own, message }: MessageContentProps) {
    console.log(message);
    
  return (
    <div className={
            own
            ? 'p-3 text-xl rounded-xl w-fit bg-blue-300 rounded-tr-none'
            : 'p-3 text-xl rounded-xl w-fit bg-slate-100 rounded-tl-none'
        }
    >
      { message.message }
    </div>
  );
}
