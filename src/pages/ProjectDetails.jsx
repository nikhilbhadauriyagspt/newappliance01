import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaCogs } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <Helmet>
          <title>Project Not Found - appliance nerds</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-6xl font-black text-primary mb-6 tracking-tighter uppercase">404</h2>
          <p className="text-slate-500 mb-8 font-medium uppercase tracking-widest">Project Path Not Found</p>
          <Link to="/projects" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[3px] text-xs hover:bg-secondary transition-all shadow-xl">
            Return to Repository
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{project.title} - appliance nerds Case Studies</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://www.appliancenerds.shop/project/${project.id}`} />
      </Helmet>

      {/* Premium Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[3px] text-[10px] mb-10 hover:gap-5 transition-all">
            <FaArrowLeft /> View All Cases
          </Link>
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            {project.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 relative -mt-16 bg-white rounded-t-[60px] z-20">
        <div className="flex flex-col lg:flex-row gap-24 items-start">

          {/* Content Side */}
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl font-black text-primary mb-10 uppercase tracking-tighter">Technical Narrative</h2>
            <div className="prose prose-2xl text-slate-500 font-medium mb-16 max-w-none">
              <p className="text-2xl text-primary font-black mb-10 leading-tight">
                {project.description}
              </p>
              <div className="text-lg leading-relaxed space-y-8">
                {project.fullDescription}
              </div>
            </div>

            {/* Service Benchmarks */}
            <div className="bg-slate-50 rounded-[48px] p-8 md:p-16 border border-slate-100">
              <h3 className="text-2xl font-black text-primary mb-12 uppercase tracking-tighter flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg"><FaCogs /></div>
                Operational Benchmarks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                    <span className="font-black text-primary text-[11px] uppercase tracking-wider group-hover:text-secondary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs Sidebar */}
          <div className="w-full lg:w-4/12 sticky top-32">
            <div className="bg-primary rounded-[48px] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-bl-full"></div>

              <h3 className="text-2xl font-black mb-12 uppercase tracking-tighter pb-6 border-b border-white/10">Project Metrics</h3>

              <div className="space-y-10">
                {[
                  { icon: <FaUser />, label: 'Lead Client', val: project.client },
                  { icon: <FaCalendarAlt />, label: 'Closure Date', val: project.date },
                  { icon: <FaClock />, label: 'Fix Duration', val: project.duration },
                  { icon: <FaMapMarkerAlt />, label: 'Zone Location', val: project.location }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 mb-1">{item.label}</p>
                      <p className="font-black text-lg tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-slate-400 text-sm font-medium mb-8">Requiring similar technical restoration?</p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-4 w-full bg-secondary text-white py-6 rounded-2xl font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-white hover:text-primary transition-all active:scale-95"
                >
                  Get Quote <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Visual Context */}
      <section className="pb-32 container mx-auto px-4 md:px-8">
        <div className="rounded-[60px] overflow-hidden shadow-premium h-[600px] border-[12px] border-slate-50">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;