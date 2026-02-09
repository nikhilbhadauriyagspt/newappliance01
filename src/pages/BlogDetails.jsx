import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { FaArrowLeft, FaUser, FaCalendarAlt, FaShareAlt, FaArrowRight } from 'react-icons/fa';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <Helmet>
           <title>Article Not Found - Appliance Vista</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-6xl font-black text-primary mb-6 tracking-tighter uppercase">404</h2>
          <p className="text-slate-500 mb-8 font-medium uppercase tracking-widest">Article Path Not Found</p>
          <Link to="/blog" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[3px] text-xs hover:bg-secondary transition-all shadow-xl">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{blog.title} - Appliance Vista Journal</title>
        <meta name="description" content={blog.shortDesc} />
        <link rel="canonical" href={`https://www.appliancevista.shop/blog/${blog.id}`} />
      </Helmet>
      
      {/* Dynamic Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
           <Link to="/blog" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[3px] text-[10px] mb-10 hover:gap-5 transition-all">
             <FaArrowLeft /> Journal Overview
           </Link>
           <div className="flex items-center justify-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-[3px] mb-8">
            <span className="flex items-center gap-2">
              <FaUser className="text-secondary" /> {blog.author || 'Master Tech'}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-secondary" /> {blog.date}
            </span>
          </div>
           <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
             {blog.title}
           </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl py-32 relative -mt-16 bg-white rounded-t-[60px] z-20">
        
        <div className="relative mb-20 group">
          <div className="absolute -inset-4 border-2 border-slate-50 rounded-[3rem] pointer-events-none"></div>
          <img 
            src={blog.image} 
            className="rounded-[3rem] shadow-premium w-full object-cover max-h-[700px] transition-transform duration-1000" 
            alt={blog.title} 
          />
          <div className="absolute -bottom-6 right-10">
            <button className="bg-secondary text-white w-16 h-16 rounded-3xl shadow-2xl hover:bg-primary transition-all group active:scale-95 flex items-center justify-center">
              <FaShareAlt size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
             
        <div className="prose prose-2xl max-w-none mb-32">
          <div className="blog-content text-slate-500 font-medium leading-[1.8] space-y-8 text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: blog.longDesc }} />
        </div>
             
        {/* Interaction Footer */}
        <div className="bg-slate-50 rounded-[60px] p-12 md:p-20 text-center border border-slate-100">
          <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-8">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Next Actions</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter uppercase">Requiring Technical Support?</h3>
          <p className="text-slate-400 max-w-lg mx-auto mb-12 font-medium text-lg leading-relaxed">
            Our expert technicians are available 24/7 to help you implement these repair strategies or handle the maintenance for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-primary text-white px-12 py-6 rounded-[24px] font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-secondary transition-all flex items-center justify-center gap-4"
            >
              Consult an Expert <FaArrowRight />
            </Link>
            <a 
              href="tel:+15305544817" 
              className="bg-white border border-slate-200 text-primary px-12 py-6 rounded-[24px] font-black uppercase tracking-[4px] text-xs hover:border-secondary hover:text-secondary transition-all shadow-sm flex items-center justify-center gap-4"
            >
              Instant Support
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;