import Link from 'next/link';
import React from 'react';

export default function BlogList() {
  const blogLinks = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <ul>
      {blogLinks.map((blogNumber) => (
        <li key={blogNumber}>
          <Link href={`/blog/${blogNumber}`}>Blog {blogNumber}</Link>
        </li>
      ))}
    </ul>
  );
}
