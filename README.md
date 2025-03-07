# Personal Portfolio Landing Page

A modern, responsive personal portfolio website showcasing my expertise as a backend developer with full-stack capabilities. This landing page highlights my experience in building efficient, secure, and scalable applications, competitive programming background, and professional journey.

## Features

- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- **Modern UI**: Clean design with smooth animations and transitions
- **Component-Based Architecture**: Built with reusable React components
- **TypeScript**: Enhanced code quality and developer experience with static typing
- **Custom Styling**: Hand-crafted CSS with variables for easy theming
- **Contact Form**: Interactive form for visitors to reach out to me

## Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information highlighting backend expertise and competitive programming background
3. **Career Journey**: Timeline of professional growth and key milestones
4. **Projects**: Showcase of backend and full-stack work with descriptions and links
5. **Contact**: Contact form and alternative contact methods
6. **Footer**: Navigation links, social media, and copyright information

## My Expertise

- **Backend Development**: Years of experience building small, efficient, fast, and secure monolith applications as well as scalable, stable, and highly performant microservices architectures
- **Full-Stack Capabilities**: Complementary front-end skills to create complete solutions
- **Competitive Programming**: Strong algorithmic thinking and problem-solving skills honed through competitive programming
- **System Design**: Experience designing robust and scalable systems for various business needs

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation and Setup

1. Clone the repository
```
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm start
```

4. Open your browser and visit `http://localhost:3000`

### Customization

- **Personal Information**: Replace placeholder text and images in components with your own
- **Colors**: Modify color variables in `src/index.css` to match your personal brand
- **Projects**: Update the `projectsData` array in `src/components/Projects.tsx` with your own projects
- **Contact**: Update email and location information in the Contact component

## Building for Production

To create an optimized production build:

```
npm run build
```

The build files will be located in the `build` directory and can be deployed to any static hosting service.

## Deploying to Cloudflare Pages

This project is configured for easy deployment to Cloudflare Pages. Follow these steps:

1. Push your code to a GitHub repository

2. Log in to your Cloudflare dashboard and navigate to Pages

3. Click "Create a project" and select "Connect to Git"

4. Choose your repository and configure the deployment with these settings:
   - Production branch: `main` (or your preferred branch)
   - Build command: `npm run build`
   - Build output directory: `build`
   - Environment variables (optional): Add any environment variables needed

5. Click "Save and Deploy"

Cloudflare Pages will automatically build and deploy your site. Each new commit to your repository will trigger a new deployment.

### Custom Domain

To set up a custom domain:
1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Follow the instructions to configure your domain

The configured security headers, redirects, and routes in the public directory will ensure your site works correctly on Cloudflare Pages.

## Technologies Used

- React.js
- TypeScript
- CSS3
- HTML5

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Create React App for the project setup
- [Placeholder.com](https://placeholder.com) for placeholder images
