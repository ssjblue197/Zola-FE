import * as React from 'react';
import userMale from '../../assets/user-male.png';
import userFemale from '../../assets/user-female.png';

export interface AvatarProps {
    userInfo: any
}

export function Avatar({ userInfo }: AvatarProps) {
    return (
        <img src={userInfo.profileImageUrl
            ? userInfo.profileImageUrl
            : userInfo.gender
                ? userInfo.gender === 'male'
                    ? userMale
                    : userFemale
                : userMale}
            alt="avatar" className="rounded-full w-full ring-1 cursor-pointer" />
    );
}
