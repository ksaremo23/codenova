import { blogPosts } from "../constants";

const BlogSection = () => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24 px-4" id="blog">
      <div className="max-w-4xl mx-auto text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Blog & Playbooks
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold">
          Practical AI Content for{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Growth Teams
          </span>
        </h2>
        <p className="text-neutral-300 mt-4 text-base sm:text-lg">
          Use these guides to educate prospects, train your staff, and improve organic search rankings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-10">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="border border-neutral-800 rounded-2xl bg-neutral-900/60 p-6 flex flex-col hover:border-orange-500/60 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-wide text-neutral-500">{post.readTime}</p>
            <h3 className="text-xl font-semibold text-white mt-2">{post.title}</h3>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed flex-grow">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={post.url}
              className="mt-6 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
            >
              Read article →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

