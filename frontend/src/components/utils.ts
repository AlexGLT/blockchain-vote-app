import { ethers } from 'ethers';


export const parseName = (bytesProposal: string) => {
    const newName = ethers.utils.parseBytes32String(bytesProposal).replace('-', ' ');

    return newName[0].toUpperCase() + newName.substring(1);
};
