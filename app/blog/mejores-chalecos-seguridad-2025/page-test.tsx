'use client';

import { useState, useEffect } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';

export default function TestPage() {
  return (
    <BlogLayout>
      <div className="min-h-screen">
        <h1>Test Page</h1>
      </div>
    </BlogLayout>
  );
}