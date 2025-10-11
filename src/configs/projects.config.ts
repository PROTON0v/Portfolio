

 type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
}


export const projects: Project[] = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A comprehensive admin dashboard with real-time data visualization, user management, analytics, and system monitoring. Built with modern technologies for optimal performance and scalability.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5NzIwMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      category: "Web Application"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment integration, inventory management, order tracking, and customer analytics. Optimized for mobile and desktop experiences.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1OTcwMzAxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
      category: "E-Commerce"
    },
    {
      id: 3,
      title: "Marketing Landing Page",
      description: "High-converting marketing landing page with interactive elements, smooth animations, lead capture forms, and A/B testing capabilities. Designed for maximum conversion rates.",
      image: "https://images.unsplash.com/photo-1529119835860-ce3d90485424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTk3NzAwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Marketing"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Interactive portfolio website showcasing creative work with smooth animations, project galleries, contact integration, and optimized performance. Perfect for professionals.",
      image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1OTY2OTY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Portfolio"
    },
    {
      id: 5,
      title: "Educational Platform",
      description: "Comprehensive learning management system with course creation, student progress tracking, interactive content, and assessment tools. Built for scalable online education.",
      image: "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHBsYXRmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTc3MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      category: "Education"
    }
  ];
