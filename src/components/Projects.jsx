//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import recpImg from "../images/recp.png"
import BJImg from "../images/BJ.png"
import tdoImg from "../images/tdo.png"
import evtImg from "../images/eventPlanner.png"
import plntImg from "../images/plantShopping.png"
import shpImg from "../images/shpimage.png"
import bitImg from "../images/bitcoin.png"
import invImg from "../images/inventory.png"
import taskImg from "../images/tasks.png"




const projectList = [
  /* ADD category for JavaScript, Python, etc.  */
    {
      name: 'Smart Healthy Pets',
      desc: 'Informative website for all pets owners',
      img: shpImg,
      link: '#shp',
      url: 'https://github.com/MichaelFoisy/Smarthealthypets', 
    },
    {
      name: 'Recipes',
      desc: 'Recipe application - React',
      img: recpImg,
      link: '#recipes',
      url: 'https://github.com/MichaelFoisy/recipes', 
    },
    {
      name: 'Event Planner',
      desc: 'Event Planner  - React',
      img: evtImg,
      link: '#evp',
      url: 'https://github.com/MichaelFoisy/event-planner', 
    },
     {
      name: 'Plant Shopping',
      desc: 'e-commerce application - React',
      img: plntImg,
      link: '#plnt',
      url: 'https://github.com/MichaelFoisy/e-plantShopping', 
    },
    {
      name: 'Inventory Management System',
      desc: 'React + Python',
      img: invImg,
      link: '#inv',
      url: 'https://github.com/MichaelFoisy/inventory-management',
    },
     {
      name: 'Task Manager',
      desc: 'React + Python',
      img: taskImg,
      link: '#tsk',
      url: 'https://github.com/MichaelFoisy/task-manager', 
    },
     {
      name: 'BITCOIN API',
      desc: 'Python + pycoingecko',
      img: bitImg,
      link: '#btcoin',
       url: 'https://github.com/MichaelFoisy/bitcoin-api',
    },
    /*  {
      name: '',
      desc: '',
      img: '',
      link: '#',
       url: '', 
    }, */
    
  ];

export const Projects = () => {
  return (
   <section id="projects" className="py-16 bg-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">Projects</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((proj, idx) => (
        <a
          key={idx}
           href={proj.url || "#"} 
          target="_blank"
          rel="noreferrer"
          className="group relative block bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
        >
          {/* Project Image */}
          <img
            src={proj.img}
            alt={proj.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
            <h3 className="text-xl  font-semibold">{proj.name}</h3>
            <p className="text-orange-400 text-sm mt-1">{proj.desc}</p>

            {/* Optional Icons */}
            <div className="mt-2 flex space-x-3">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-indigo-400 transition"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-green-400 transition"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                </a>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
  )
}
export default Projects;