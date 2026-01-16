'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Save, X, Eye } from 'lucide-react';
import { http, HttpError } from '@/lib/http';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  slug: string;
  publishDate: string;
  readTime: string;
  isPublished: boolean;
  featured: boolean;
  tags: string[];
}

const categories = [
  'Seguridad Industrial',
  'Equipos EPP',
  'Guías Técnicas',
  'Normativas',
  'Reseñas',
  'Noticias'
];

export default function AdminPerfilPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Seguridad Industrial',
    slug: '',
    readTime: '',
    isPublished: false,
    featured: false,
    tags: []
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await http('/api/admin/blogs');
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error instanceof HttpError) {
        alert(`Error al cargar posts: ${error.message}`);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Generate slug from title if not provided
      const slug = formData.slug || formData.title?.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || '';

      const dataToSubmit = {
        ...formData,
        slug,
        publishDate: editingPost ? editingPost.publishDate : new Date().toISOString(),
        id: editingPost ? editingPost.id : Date.now().toString()
      };

      if (editingPost) {
        // Update existing post
        await http(`/api/admin/blogs/${editingPost.id}`, {
          method: 'PUT',
          body: JSON.stringify(dataToSubmit),
        });
        alert('Post actualizado exitosamente');
      } else {
        // Create new post
        await http('/api/admin/blogs', {
          method: 'POST',
          body: JSON.stringify(dataToSubmit),
        });
        alert('Post creado exitosamente');
      }

      await fetchPosts();
      resetForm();

    } catch (error) {
      console.error('Error saving post:', error);
      if (error instanceof HttpError) {
        alert(`Error al guardar el post: ${error.message}`);
      } else {
        alert('Error inesperado al guardar el post');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (post: BlogPost) => {
    try {
      // Fetch the latest data for the post
      const freshData = await http(`/api/admin/blogs/${post.id}`);
      setEditingPost(freshData);
      setFormData({ ...freshData });
      setIsEditing(true);
    } catch (error) {
      console.error('Error loading post for editing:', error);
      // Fallback to using the post data we already have
      setEditingPost(post);
      setFormData({ ...post });
      setIsEditing(true);
      
      if (error instanceof HttpError) {
        console.warn(`Could not fetch fresh data: ${error.message}, using cached data`);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este post?')) {
      try {
        await http(`/api/admin/blogs/${id}`, {
          method: 'DELETE',
        });
        await fetchPosts();
        alert('Post eliminado exitosamente');
      } catch (error) {
        console.error('Error deleting post:', error);
        if (error instanceof HttpError) {
          alert(`Error al eliminar el post: ${error.message}`);
        } else {
          alert('Error inesperado al eliminar el post');
        }
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'Seguridad Industrial',
      slug: '',
      readTime: '',
      isPublished: false,
      featured: false,
      tags: []
    });
    setEditingPost(null);
    setIsEditing(false);
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Administración de Blog</h1>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2"
          >
            {isEditing ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isEditing ? 'Cancelar' : 'Nuevo Post'}
          </Button>
        </div>

        {/* Formulario de creación/edición */}
        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {editingPost ? 'Editar Post' : 'Crear Nuevo Post'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      value={formData.title || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Título del post"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Categoría</Label>
                    <select
                      id="category"
                      value={formData.category || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="url-amigable (opcional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="readTime">Tiempo de lectura</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                      placeholder="ej: 5 min"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="excerpt">Extracto</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Breve descripción del post"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Contenido *</Label>
                  <Textarea
                    id="content"
                    value={formData.content || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Contenido completo del post"
                    rows={10}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags (separadas por comas)</Label>
                  <Input
                    id="tags"
                    value={formData.tags?.join(', ') || ''}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    placeholder="epp, seguridad, cascos"
                  />
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.isPublished || false}
                      onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    />
                    Publicado
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.featured || false}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    />
                    Destacado
                  </label>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={loading} className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    {loading ? 'Guardando...' : (editingPost ? 'Actualizar' : 'Crear Post')}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Lista de posts */}
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold">Posts Existentes ({posts.length})</h2>
          
          {posts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">No hay posts aún. ¡Crea el primero!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{post.title}</h3>
                          <Badge variant={post.isPublished ? 'default' : 'secondary'}>
                            {post.isPublished ? 'Publicado' : 'Borrador'}
                          </Badge>
                          {post.featured && (
                            <Badge variant="outline">Destacado</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-2">{post.excerpt}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>📂 {post.category}</span>
                          <span>🕒 {post.readTime}</span>
                          <span>📅 {new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-1 mt-2">
                            {post.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          className="flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(post)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(post.id)}
                          className="flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}