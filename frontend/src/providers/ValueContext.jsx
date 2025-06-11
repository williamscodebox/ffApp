import { createContext, useState, useContext } from "react";

const ValueContext = createContext;
export const ValueProvider = ({ children }) => {
  const [values, setvalues] = useState;

  const addBlog = (value) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <ValueContext.Provider value={{ values, addBlog, updateBlog, deleteBlog }}>
      {children}
    </ValueContext.Provider>
  );
};

// useValues hook to access the ValueContext
// This hook can be used in any component that is a child of ValueProvider

export const useValues = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
