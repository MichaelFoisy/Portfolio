import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "React", level: 70 },
  { skill: "JavaScript", level: 70 },
  { skill: 'HTML/CSS', level: 70 },
  { skill: "TailwindCSS", level: 70 },
  { skill: "Python", level: 50 },
  { skill: 'Java', level: 50 },
  { skill: "SQL", level:50 },
  { skill: "Node.js", level: 50 },
  { skill: 'GitHub', level: 50 },
];


export const Skills = () => {
  return (
        <div className="bg-slate-900  rounded-2xl p-6 w-full max-w-2xl mx-auto ">
      <h2 className="text-2xl font-bold text-white text-center mb-4">My Skills</h2>
      <ResponsiveContainer width="100%" height={600}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" tick={{ fill: "#fff"}} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#fff" />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#4F46E5"
            fill="#6366F1"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Skills;
