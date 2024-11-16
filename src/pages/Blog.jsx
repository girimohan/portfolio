// src/pages/Blog.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, TagIcon, ChevronRightIcon } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/blog/${blog.slug}`)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
        cursor-pointer border border-gray-100"
    >
      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            {blog.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {blog.date}
          </div>
        </div>

        {/* Title and Summary */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <div className="flex items-center text-blue-600 text-sm font-medium">
          Read More
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing my experiences and insights in Machine Learning, Data Science, and Software Development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}