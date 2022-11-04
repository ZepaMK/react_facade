import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownGenerator = ({ markdown }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdown)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <ReactMarkdown
      className="text-[0.6rem] border border-black mb-4 p-1 bg-[#232323] text-white"
      children={content}
    ></ReactMarkdown>
  );
};

export default MarkdownGenerator;
