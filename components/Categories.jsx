import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="p-8 pb-12 mb-8 bg-teal-50 shadow-xl rounded-lg">
      <h3 className="mb-8 pb-4 border-b text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="pb-3 mb-3 block cursor-pointer">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
