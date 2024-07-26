import React from 'react';
import SkillsCard from '@/components/UI/SkillsCard';

function page() {
  return (
    <div className="w-full h-full border-2 p-2 flex flex-wrap justify-center gap-4 overflow-scroll no-scrollbar">
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
    </div>
  )
}

export default page