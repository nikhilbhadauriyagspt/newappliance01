import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaProjectDiagram, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Portfolio of Excellence - Appliance Nerds</title>
        <meta name="description" content="View our portfolio of successful appliance repairs and maintenance projects." />
        <link rel="canonical" href="https://www.appliancenerds.shop/projects" />
      </Helmet>

      {/* Premium Page Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Success Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Specialized <br />Case <span className="text-secondary">Studies</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A curated selection of complex restoration projects demonstrating our commitment to engineering perfection.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 bg-slate-50 relative -mt-16 rounded-t-[60px] z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group relative h-[500px] rounded-[48px] overflow-hidden shadow-sm hover:shadow-premium transition-all duration-700 border border-white"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/20 backdrop-blur-md flex items-center justify-center text-secondary">
                    <FaProjectDiagram size={16} />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-[4px]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 leading-tight tracking-tighter uppercase">{project.title}</h3>

                <div className="flex items-center gap-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-[10px] font-black uppercase tracking-[3px]">Examine Results</span>
                  <FaArrowRight size={12} />
                </div>
              </div>

              {/* Top info badge */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Completed</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
