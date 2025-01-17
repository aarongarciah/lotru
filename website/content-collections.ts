import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";

import {
  rehypeComponentPreview,
  rehypeComponentSource,
  type UnistNode,
  type UnistTree,
} from "./src/lib/rehype";
import { getTableOfContents } from "./src/lib/toc";

const docs = defineCollection({
  name: "docs",
  directory: "src/content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    links: z
      .object({
        api: z.string().optional(),
        doc: z.string().optional(),
      })
      .optional(),
    toc: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            url: z.string().optional(),
          })
        ),
      })
      .optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeComponentSource,
        rehypeComponentPreview,
        function (): (tree: UnistTree) => Promise<void> {
          return async (tree: UnistTree): Promise<void> => {
            visit(tree, (node?: UnistNode): void => {
              if (node?.type === "element" && node.tagName === "pre") {
                const [codeElement] = node.children ?? [];

                if (codeElement.tagName !== "code") {
                  return;
                }

                node.__rawString__ = codeElement.children?.[0].value;
                node.__src__ = node.properties?.__src__;
              }
            });
          };
        },
        [rehypePrettyCode, { theme: "github-dark" }],
        function (): (tree: UnistTree) => Promise<void> {
          return async (tree: UnistTree): Promise<void> => {
            visit(tree, (node?: UnistNode): void => {
              if (node?.type === "element" && node.tagName === "figure") {
                if (!("data-rehype-pretty-code-figure" in (node.properties ?? {}))) {
                  return;
                }

                const preElement = node.children?.at(-1);

                if (preElement?.tagName !== "pre") {
                  return;
                }

                preElement.properties!["__rawString__"] = node.__rawString__;

                if (node.__src__) {
                  preElement.properties!["__src__"] = node.__src__;
                }
              }
            });
          };
        },
      ],
    });

    const toc = await getTableOfContents(document.content);

    return {
      ...document,
      toc,
      mdx,
    };
  },
});

export default defineConfig({
  // @ts-ignore -- TODO: Fix this
  collections: [docs],
});
