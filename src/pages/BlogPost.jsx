import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../constants";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <Navbar />
        <main className="pt-32 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-orange-500 hover:text-orange-400">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>
        <article className="pt-20 sm:pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-neutral-800 text-orange-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <p className="text-xl text-neutral-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="space-y-6 text-neutral-300">
                <p>
                  This is a placeholder for the full blog post content. In a real implementation,
                  you would fetch the full article content from a CMS or markdown files.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Key Takeaways
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Practical insights for Philippine businesses</li>
                  <li>Step-by-step implementation guides</li>
                  <li>Real-world case studies and examples</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Conclusion
                </h2>
                <p>
                  This blog post demonstrates how AI solutions can transform your business operations.
                  For more information, contact our team for a personalized consultation.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-800">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-8 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200 font-medium"
              >
                Get Started with AI Solutions
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

