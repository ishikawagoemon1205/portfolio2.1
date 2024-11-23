type PortfolioContent =
  | { type: "text"; data: string }
  | { type: "image"; data: string }
  | { type: "link"; data: { text: string; url: string } }
  | { type: "codes"; data: string[] }
  | { type: "sectionTitle"; data: string };

type BlogPost = {
    id: number;
    title: string;
    subtitle?: string;
    author?: string;
    date: {
        published: string;
        updated?: string;
    };
    content: PortfolioContent[];
    tags: string[];
    categories: string[];
    technologies: string[];
    links: {
        title: string;
        url: string;
    }[];
    images?: {
        src: string;
        alt: string;
    }[];
    comments?: {
        user: string;
        comment: string;
        date: string;
    }[];
};

type BlogExample = {
    [key: string]: BlogPost;
}


export const DBBlogData: BlogExample = {
    post1: {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-01" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post2: {
      id: 2,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-10" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post3: {
      id: 3,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-03" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post4: {
      id: 4,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-04" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post5: {
      id: 5,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-05" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post6: {
      id: 6,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-06" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post7: {
      id: 7,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-06" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post8: {
      id: 8,
      title: "",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-21" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
};
  