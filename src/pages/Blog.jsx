import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../constants";

const Blog = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div className="text-center">
              <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
                Blog & Playbooks
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide font-bold">
                Practical AI Content for{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  Growth Teams
                </span>
              </h1>
              <p className="text-neutral-300 mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
                Use these guides to educate prospects, train your staff, and improve organic search rankings.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="border border-neutral-800 rounded-2xl bg-neutral-900/60 p-6 sm:p-8 flex flex-col hover:border-orange-500/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2 group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full hover:bg-orange-500/20 hover:text-orange-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    className="mt-6 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 border-t border-neutral-800 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              Need Help Implementing AI Solutions?
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Book a free consultation with our Taguig AI services team.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-8 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

