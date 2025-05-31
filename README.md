# Creative Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed for creative professionals, featuring a sleek dark theme and smooth animations.

## Features

- Responsive design that works on all devices
- Modern dark theme with smooth animations
- Sections for showcasing skills, projects, and contact information
- Smooth scrolling navigation
- Interactive project cards
- Contact form
- Social media integration

## Setup Instructions

1. Clone this repository to your local machine
2. Open `index.html` in your web browser to view the portfolio
3. Customize the content in `index.html` to add your personal information
4. Modify `styles.css` to adjust the styling to your preferences
5. Update `script.js` if you need to modify any interactive features

## Customization Guide

### Adding Projects

To add a new project, copy and paste the following HTML structure in the projects section:

```html
<div class="col-md-6 col-lg-4">
    <div class="project-card">
        <div class="project-image">
            <img src="path-to-your-image" alt="Project Title">
        </div>
        <div class="project-info">
            <h3>Project Title</h3>
            <p>Project description goes here</p>
            <div class="project-tags">
                <span>Tag 1</span>
                <span>Tag 2</span>
            </div>
        </div>
    </div>
</div>
```

### Changing Colors

The color scheme can be modified in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --dark-bg: #121212;
    --darker-bg: #0a0a0a;
    --text-color: #ffffff;
    --text-muted: #6c757d;
}
```

### Adding Social Media Links

Update the social media links in the footer section of `index.html`:

```html
<div class="social-links">
    <a href="your-github-url"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url"><i class="fab fa-linkedin"></i></a>
    <a href="your-behance-url"><i class="fab fa-behance"></i></a>
    <a href="your-dribbble-url"><i class="fab fa-dribbble"></i></a>
</div>
```

## Hosting on GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your portfolio will be available at `https://yourusername.github.io/repository-name`

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome Icons

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request. 