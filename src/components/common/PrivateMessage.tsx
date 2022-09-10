import * as React from 'react';
// import { faPenToSquare, faComment } from '@fortawesome/free-regular-svg-icons';
import { faCheckDouble, faCheck, faMicrophoneLines, faPaperclip, faPen, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';

export interface PrivateMessageProps {
}

export function PrivateMessage(props: PrivateMessageProps) {
    return (
        <div className="w-full bg-blue-200 border-l-4 border-sky-500 h-24 flex flex-row items-center px-2">
            <div className="rounded-full bg-slate-400 w-16 h-16 relative text-xs">
                <span className="h-3 w-3 flex absolute bottom-1 right-1 text-green-500">
                    <FontAwesomeIcon icon={faCircle}
                        className="absolute cursor-pointer animate-ping" />
                    <FontAwesomeIcon icon={faCircle}
                        className="cursor-pointer" />
                </span>
            </div>
            <div className="flex-1 flex flex-col px-4">
                <span className="text-xl text-slate-700 mb-2 whitespace-nowrap text-ellipsis">
                    Lê Đức Dũng
                </span>
                <span className="text-slate-400 text-md flex flex-row">
                    <span className="text-sky-500 text-sm mr-2 animate-bounce">
                        <FontAwesomeIcon icon={faPen}
                            className="cursor-pointer" />
                    </span>
                    <span className="text-sm">
                        is typing...
                    </span>

                </span>
            </div>
            <div className="flex flex-col">
                <FontAwesomeIcon icon={faCheckDouble}
                    className="cursor-pointer text-green-500 text-sm" />
                <span className="text-sm text-slate-500">
                    {moment().format('HH:mm')}
                </span>
            </div>
        </div>
    );
}
