"use client";

import Pagination from "@/components/Pagination";
import { blogPosts } from "@/src/data/blogs";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("blog-posts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#020d1a] font-sans text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#001428]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(131,196,0,0.16),transparent_48%)]" />
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#83c400]/30 bg-[#83c400]/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#a4eb28] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#83c400]" />
              The Turfy Journal
            </p>
            <h1 className="text-4xl leading-tight font-black tracking-tight sm:text-6xl lg:text-7xl">
              More game.
              <span className="block text-[#83c400]">More to know.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Training tips, pitch guides, and stories for the love of the
              game. Find your next read and bring a little more to your next
              match.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>
                <span className="font-bold text-white">{blogPosts.length}</span>{" "}
                stories to explore
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-[#83c400] sm:block" />
              <span>Made for the game, by Turfy</span>
            </div>
          </div>
        </div>
        <div className="absolute right-[8%] -bottom-20 -z-10 h-64 w-64 rounded-full border border-[#83c400]/10 sm:h-96 sm:w-96" />
        <div className="absolute right-[14%] -bottom-8 -z-10 h-48 w-48 rounded-full border border-[#83c400]/10 sm:h-72 sm:w-72" />
      </section>

      <section
        id="blog-posts"
        className="mx-auto max-w-[1400px] scroll-mt-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
              Fresh from the sidelines
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Latest stories
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            Showing {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, blogPosts.length)} of{" "}
            {blogPosts.length} articles
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#061a2d] transition duration-300 hover:-translate-y-1 hover:border-[#83c400]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Link
                href={`/blog/${post.id}`}
                className="flex h-full flex-col"
                aria-label={`Read ${post.title}`}
              >
                <div className="relative aspect-16/10 overflow-hidden bg-[#0b2a45]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#020d1a]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-[#001428]/85 px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#a4eb28] uppercase backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-[#83c400]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5 text-[#83c400]" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl leading-snug font-extrabold transition-colors group-hover:text-[#a4eb28]">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#83c400]">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-2">
          <Pagination
            currentPage={currentPage}
            totalItem={blogPosts.length}
            limit={POSTS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
