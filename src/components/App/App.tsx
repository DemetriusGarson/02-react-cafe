import css from "./App.module.css"
import CafeInfo from "../CafeInfo/CafeInfo"
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from 'react';
import { type Votes, type VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";





export default function App() {

  const [votes, setVote] = useState<Votes>(
    {
      good: 0,
      neutral: 0,
      bad: 0
    });
  
  const handleVote = (type:  VoteType) => {
    setVote({
      ...votes,
      [type]: votes[type] + 1,
    })
  };
    
  const resetVotes = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  
  return (<div className={css.app}>
    <CafeInfo></CafeInfo>
    <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true}></VoteOptions>
    <VoteStats votes={votes} totalVotes={0} positiveRate={0}></VoteStats>
  </div>)
}