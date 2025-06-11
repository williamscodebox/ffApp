import { createContext, useState, useContext } from "react";

const ValueContext = createContext();
export const ValueProvider = ({ children }) => {
  const [values, setValues] = useState([
    "Sept 4",
    "Sept 5",
    "Sept 6",
    "Sept 7",
    "Sept 8",
    "Sept 9",
    "Sept 10",
  ]);

  //   const addBlog = (value) => {
  //     setBlogs([...blogs, blog]);
  //   };

  const updateValues = (updatedValues) => {
    setValues([...updatedValues]); // Always create a new array
    console.log(values);
  };

  //   const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <ValueContext.Provider value={{ values, updateValues }}>
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
