import PostBody from '@/components/PostBody';
import PostHeader from '@/components/PostHeader';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <article>
        <PostHeader
          title={post.title ?? ''}
          coverImage={post.coverImage}
          author={post.author}
          date={post.date}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}
