import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TokenArtifact from '../ABI/Ballot.json';
import contractAddress from '../ABI/contract-address.json';
import {parseName} from './utils';

import './dapp.scss';

import type {ChangeEvent} from 'react';
import type {Contract} from 'ethers';
import type {Proposal} from './types';
import { candidates } from './constants';


// @ts-ignore
const provider = new ethers.providers.Web3Provider(window.ethereum);

export const DApp = () => {
    const [chairperson, setChairperson] = useState('');
    const [proposals, setProposals] = useState<Proposal[]>([]);
    const [token, setToken] = useState<any>();
    const [currentUser, setCurrentUser] = useState('');
    const [voter, setVoter] = useState('');
    const [chosenProposal, setChosenProposal] = useState<number | undefined>();    

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChosenProposal(Number(event.target.value));    
    };

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setVoter(event.target.value);
    };

    const onGiveRightsClick = () => {
        const user = provider.getSigner(currentUser);
        console.log(voter);

        console.log(token);
        
        
        token
            .giveRightToVote(voter)
            .then(() => {
                setVoter('');
                console.log('success!');
                
            })
            // @ts-ignore
            .catch(error => {
                console.log(error);
            })
    };

    const vote = () => {
        const user = provider.getSigner(currentUser);
        
        token
            .connect(user)
            .vote(chosenProposal)
            .then(() => {
                console.log('success!');
            })
            // @ts-ignore
            .catch(error => {
                console.log(error);
                
            });
    };

    useEffect(() => {
        const init = async () => {
            // @ts-ignore
            const [selectedAddress] = await window.ethereum.enable();
            setCurrentUser(selectedAddress);

            const token = new ethers.Contract(
                contractAddress.Token,
                TokenArtifact.abi,
                provider.getSigner(0)
            );

            const newChairperson = await token.chairperson();
            const newProposals = await token.getAllProposals();

            // @ts-ignore
            window.token = token;

            setChairperson(newChairperson);
            setProposals(newProposals);
            setToken(token);
            
            console.log('token', Object.keys(token).filter(key => token.hasOwnProperty(key)));
        };

        init();
    }, []);

    return (
        <div className='dapp'>
            <h1>Voting System</h1>
            <div>
                <h2>chairperson: {chairperson}</h2>
            </div>
            <div className="content">
                <div className='vote-column'>
                    <span className='label'>Proposal:</span>
                    <div className='proposals'>
                        {proposals.map((proposal, index) => {
                            const name = parseName(proposal.name);
                            const voteCount = Number(proposal.voteCount._hex);

                            return (
                                <div key={name} className='proposal'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="proposal"
                                            value={index}
                                            checked={chosenProposal === index}
                                            onChange={handleRadioChange}
                                            />
                                        {name}
                                    </label>
                                    {voteCount}
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={vote}>Vote</button>
                </div>
                <div className='admin-column'>
                    <span className='label'>Give rights to the next user:</span>
                    <select name="voter" onChange={handleSelect}>
                        {candidates.map(candidate => (
                            <option key={candidate} value={candidate}>{candidate}</option>
                        ))}
                    </select>
                    <button onClick={onGiveRightsClick}>Give</button>
                </div>
            </div>
        </div>
    );
}