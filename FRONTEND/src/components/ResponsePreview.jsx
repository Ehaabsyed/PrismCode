import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

function ResponsePreview({ response }) {
  return (
    <div className="respond h-full w-full  rounded-md p-4 overflow-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, children, ...props }) {
            const language = node.properties?.className?.[0]?.replace("language-", "");
            if (!inline && language) {
              return (
                <pre className="rounded-md bg-zinc-900 p-3 overflow-x-auto">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: Prism.highlight(
                        String(children).replace(/\n$/, ""),
                        Prism.languages[language] || Prism.languages.javascript,
                        language
                      ),
                    }}
                  />
                </pre>
              );
            }
            return (
              <code className="bg-zinc-800 px-1 rounded">
                {children}
              </code>
            );
          },
        }}
      >
        {response}
      </ReactMarkdown>
    </div>
  );
}

export default ResponsePreview;
