import * as React from 'react';
import { Avatar } from '.';
export interface GroupAvatarProps {
    currentUser: any,
    memberList: any
}

export function GroupAvatar({ memberList, currentUser }: GroupAvatarProps) {
    const otherMember = memberList.filter((member: any) => member.id !== currentUser.id);
    if (otherMember.length === 1) {
        return (
            <div className="w-14 m-4">
                <Avatar
                    userInfo={otherMember[0]}
                />
            </div>
        )
    } else if (otherMember.length === 2) {
        <div className="w-14 h-14 m-4 rounded-full bg-blue-300 ring-1 flex flex-row flex-wrap items-center justify-center">

            {
                otherMember.map((member: any) => {
                    return (
                        <div className="w-6 h-6">
                            <Avatar
                                userInfo={member}
                            />
                        </div>
                    )
                })
            }
        </div>
    } else if (otherMember.length === 3) {
        <div className="w-14 h-14 m-4 rounded-full bg-blue-300 ring-1 
            flex flex-row flex-wrap items-center justify-center place-content-center pt-1
            overflow-hidden
            ">
            {
                otherMember.map((member: any) => {
                    return (
                        <div className="w-6 h-6">
                            <Avatar
                                userInfo={member}
                            />
                        </div>
                    )
                })
            }
        </div>
    } else if (otherMember.length === 4) {
        <div className="w-14 h-14 m-4 rounded-full bg-blue-300 ring-1 
            flex flex-row flex-wrap items-center justify-center place-content-center
            overflow-hidden
            ">
            {
                otherMember.map((member: any) => {
                    return (
                        <div className="w-6 h-6">
                            <Avatar
                                userInfo={member}
                            />
                        </div>
                    )
                })
            }
        </div>
    } else {
        <div className="w-14 h-14 m-4 rounded-full bg-blue-300 ring-1 
            flex flex-row flex-wrap items-center justify-center place-content-center
            overflow-hidden
            ">
            {
                otherMember.slice(0, 3).map((member: any) => {
                    return (
                        <div className="w-6 h-6">
                            <Avatar
                                userInfo={member}
                            />
                        </div>
                    )
                })
            }
            <div className="w-6 h-6 rounded-full bg-slate-300 ring-1 flex flex-row items-center justify-center text-sm font-semibold">
                {otherMember.length - 3}
            </div>
        </div>
    }
}
