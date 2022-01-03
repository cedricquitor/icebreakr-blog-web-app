import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="py-8 border-b w-full inline-block border-blue-400">
        <div className="block md:float-left">
          <Link href="/">
            <span className="text-4xl text-blue-400 font-bold cursor-pointer">icebreakr</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 align-middle font-semibold text-blue-400 cursor-pointer md:float-right">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
