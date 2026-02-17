import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from 'react-icons/fa';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Our Blog - appliance nerds | Professional Insights</title>
        <meta name="description" content="Read our latest articles about appliance maintenance, repair tips, and industry news." />
        <link rel="canonical" href="https://www.appliancenerds.shop/blog" />
      </Helmet>

      {/* Premium Page Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Intellectual Hub</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Repair <br />& Maintenance <span className="text-secondary">Journal</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Professional perspectives on high-end appliance maintenance, technical diagnostics, and industry advancements.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 bg-slate-50 relative -mt-16 rounded-t-[60px] z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-[48px] overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-700 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                  {blog.date}
                </div>
              </div>

              <div className="p-12 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-6">
                  <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full"><FaUser className="text-secondary" /> {blog.author}</span>
                  <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full"><FaTag className="text-secondary" /> Maintenance</span>
                </div>

                <h3 className="text-3xl font-black text-primary mb-6 group-hover:text-secondary transition-colors leading-tight tracking-tighter">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>

                <p className="text-slate-500 font-medium mb-10 line-clamp-3 leading-relaxed">
                  {blog.shortDesc}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-50">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[3px] text-primary group-hover:gap-6 transition-all"
                  >
                    Examine Article <FaArrowRight className="text-secondary" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Footer CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-white rounded-full border border-slate-100 shadow-sm">
            <div className="px-10 py-5 bg-primary rounded-full text-white">
              <p className="text-xs font-black uppercase tracking-[4px]">End of Directory • Check back weekly for new updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;