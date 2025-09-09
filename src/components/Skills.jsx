import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
 /*const skills = ['JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Tailwindcss', 'Git', 'GitHub',
  'Java', 'CSS',
]; */
/*  const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'PHP', level: 70 },
  { name: 'MySQL', level: 75 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Express', level: 90 },
  { name: 'GitHub', level: 70 },
  { name: 'Java', level: 65 },
  { name: 'CSS', level: 65 },

];  */
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




// Mapping specific indexes to Tailwind classes
/* const indexStyles = {
    0:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    1:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    2:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    3:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    4:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    5:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    6:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    7:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    8:'hover:bg-gradient-to-br from-blue-500 to-green-600',
    9:'hover:bg-gradient-to-br from-blue-500 to-green-600',

} */

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


/* 
 <section id="skills" className="py-16 text-white bg-gray-500 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 ">
        {skills.map((skill, idx) => (
          <div key={idx} className="mx-auto bg-gradient-to-br from-blue-500 to-green-600 px-6 py-4 rounded-4xl w-40 shadow-md ">
            <div className="flex justify-center mb-1">
              <span className="font-medium text-white">{skill.name}</span>
             {/*  <span className="text-sm text-gray-600">{skill.level}%</span> 
            </div>
            {/* <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div> 
          </div>
        ))}
      </div>
    </section>


 */