/**
 * In-memory blog post storage
 * For production, replace with a real database
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
}

class BlogStore {
  private posts: Map<string, BlogPost> = new Map();
  private nextId: number = 1;

  constructor() {
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePosts: Omit<BlogPost, 'id'>[] = [
      {
        title: 'Guía Completa de EPP para Seguridad Industrial',
        slug: 'guia-completa-epp-seguridad-industrial',
        excerpt: 'Descubre todo lo que necesitas saber sobre Equipos de Protección Personal en entornos industriales.',
        content: '# Guía Completa de EPP\n\nEl Equipo de Protección Personal (EPP) es fundamental...',
        coverImage: '/images/blog/epp-guide.jpg',
        author: 'Admin',
        category: 'Seguridad Industrial',
        tags: ['EPP', 'Seguridad', 'Industrial'],
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isPublished: true,
        views: 150,
        likes: 25,
      },
      {
        title: 'Cómo Elegir el Casco de Seguridad Perfecto',
        slug: 'como-elegir-casco-seguridad',
        excerpt: 'Aprende a seleccionar el casco de seguridad adecuado según tu industria y necesidades.',
        content: '# Cascos de Seguridad\n\nLa protección craneal es esencial...',
        coverImage: '/images/blog/safety-helmet.jpg',
        author: 'Admin',
        category: 'Equipamiento',
        tags: ['Cascos', 'Protección', 'Seguridad'],
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isPublished: true,
        views: 89,
        likes: 12,
      },
    ];

    samplePosts.forEach((post) => {
      const id = String(this.nextId++);
      this.posts.set(id, { ...post, id });
    });
  }

  // Get all posts
  getAll(): BlogPost[] {
    return Array.from(this.posts.values());
  }

  // Get post by ID
  getById(id: string): BlogPost | undefined {
    return this.posts.get(id);
  }

  // Get post by slug
  getBySlug(slug: string): BlogPost | undefined {
    return Array.from(this.posts.values()).find((post) => post.slug === slug);
  }

  // Create new post
  create(post: Omit<BlogPost, 'id'>): BlogPost {
    const id = String(this.nextId++);
    const newPost: BlogPost = {
      ...post,
      id,
      publishedAt: post.publishedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.posts.set(id, newPost);
    return newPost;
  }

  // Update existing post
  update(id: string, updates: Partial<BlogPost>): BlogPost | null {
    const post = this.posts.get(id);
    if (!post) return null;

    const updatedPost: BlogPost = {
      ...post,
      ...updates,
      id, // Preserve ID
      updatedAt: new Date().toISOString(),
    };
    this.posts.set(id, updatedPost);
    return updatedPost;
  }

  // Delete post
  delete(id: string): boolean {
    return this.posts.delete(id);
  }

  // Get posts by category
  getByCategory(category: string): BlogPost[] {
    return Array.from(this.posts.values()).filter(
      (post) => post.category === category
    );
  }

  // Get published posts
  getPublished(): BlogPost[] {
    return Array.from(this.posts.values()).filter((post) => post.isPublished);
  }

  // Search posts
  search(query: string): BlogPost[] {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.posts.values()).filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }
}

// Export singleton instance
export const blogStore = new BlogStore();
