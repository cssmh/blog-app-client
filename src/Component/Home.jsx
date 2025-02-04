import BlogHelmet from "./BlogHelmet";
import { useState } from "react";
import SearchBlog from "./SearchBlog";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <div className="max-w-[1200px] 2xl:max-w-[85%] mx-auto">
        <BlogHelmet title="Home" />
        <SearchBlog onSearch={handleSearch} />
      </div>
    </>
  );
};

export default Home;
