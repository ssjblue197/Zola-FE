import * as React from 'react';

export interface MessageContentProps {
  own: boolean;
  message: any;
}

export function MessageContent({ own, message }: MessageContentProps) {
  // console.log(message);

  return (
    <span
      className={
        own
          ? 'flex flex-row justify-end basis-1/2'
          : 'flex flex-row justify-start basis-1/2'
      }
    >
      <div className={
        own
          ? 'p-3 text-xl rounded-xl w-fit bg-blue-300 rounded-tr-none break-all'
          : 'p-3 text-xl rounded-xl w-fit bg-slate-100 rounded-tl-none  break-all'
      }
      >
        {message.message}
      </div>
    </span>
  );
}
