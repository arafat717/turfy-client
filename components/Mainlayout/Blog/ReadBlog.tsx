import { blogPosts, type BlogPost } from "@/src/data/blogs";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ReadBlog = ({ post }: { post: BlogPost }) => {
  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3);
  const suggestedPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#020d1a] font-sans text-white">
      <section className="border-b border-white/10 bg-[#001428]">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-[#a4eb28]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all stories
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#83c400]/30 bg-[#83c400]/10 px-3 py-1.5 text-xs font-bold tracking-wider text-[#a4eb28] uppercase">
            {post.category}
          </p>
          <h1 className="text-3xl leading-tight font-black tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {post.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/10 py-4 text-sm text-slate-400">
            <span className="font-semibold text-white">{post.author}</span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#83c400]" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#83c400]" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="relative mt-9 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#061a2d] sm:mt-12">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#020d1a]/25 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl py-9 sm:py-12">
          <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            {post.content.map((paragraph, index) => (
              <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-[#83c400]/20 bg-[#83c400]/6 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#83c400] uppercase">
              Make time for the game
            </p>
            <p className="mt-2 text-xl leading-snug font-extrabold">
              Your next great match starts with getting the team together.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#83c400] px-5 py-3 text-sm font-black text-[#020d1a] transition-colors hover:bg-[#92dc00]"
            >
              Explore Turfy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {suggestedPosts.length > 0 && (
        <section className="border-t border-white/10 bg-[#001428]/70">
          <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
              Keep reading
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              More from the journal
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {suggestedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group rounded-2xl border border-white/10 bg-[#061a2d] p-5 transition-colors hover:border-[#83c400]/50"
                >
                  <span className="text-xs font-bold tracking-wider text-[#83c400] uppercase">
                    {relatedPost.category}
                  </span>
                  <h3 className="mt-3 text-lg leading-snug font-bold transition-colors group-hover:text-[#a4eb28]">
                    {relatedPost.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-[#a4eb28]">
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ReadBlog;
