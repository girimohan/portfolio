// src/pages/BlogPost.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarIcon, ArrowLeftIcon, Clock } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-500 hover:text-blue-600"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header Section */}
          <div className="p-8">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-gray-600 hover:text-blue-600 mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>

            <div className="mb-8">
              {/* Category and Date */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {blog.date}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  5 min read
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed italic">
                {blog.summary}
              </p>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-8">
              {blog.sections?.map((section, index) => (
                <section key={index} className="space-y-4">
                  {section.title && (
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  )}
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.bulletPoints && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.bulletPoints.map((point, bIndex) => (
                        <li key={bIndex} className="text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.code && (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{section.code}</code>
                    </pre>
                  )}
                </section>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 mt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => navigate('/blog')}
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to All Posts
              </button>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                  Share
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}