# Portfolio Website

This repository contains the source code for my personal portfolio website. The website showcases my skills, projects, and experiences, and provides visitors with a way to contact me directly.

## Features

- **Responsive Design**: Optimized for viewing on desktop, tablet, and mobile devices.
- **Interactive Particle Effects**: Adds a dynamic visual appeal to the website.
- **Dynamic Emoji Logo**: Random emojis change dynamically to enhance user interaction.
- **Smooth Scrolling**: Navigation between sections is smooth and visually pleasing.
- **Contact Form Integration**: Allows users to send messages directly via EmailJS.

## Technologies Used

### Frontend
- **HTML**
- **CSS**
- **JavaScript (ES4)**

### Libraries
- **[EmailJS](https://www.emailjs.com/)**: For contact form email functionality.
- **[particles.js](https://vincentgarreau.com/particles.js/)**: To create animated particle effects.
- **[Typed.js](https://github.com/mattboldt/typed.js/)**: For typing animations on the homepage.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Open `index.html` in your preferred browser.

### EmailJS Configuration

1. Sign up or log in to [EmailJS](https://www.emailjs.com/).
2. Create a new service and template for the contact form.
3. Note down your **Service ID**, **Template ID**, and **Public Key**.
4. Replace the placeholders in `script.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");

   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

## File Structure

```
portfolio-website/
├── index.html        # Main HTML file
├── styles.css        # CSS for styling
├── script.js         # JavaScript for functionality
├── particles.min.js  # Library for particle effects
├── typed.min.js      # Library for typing animations
└── README.md         # Project documentation
```

## Customization

- **Particles**: Customize the `particles.js` configuration in `script.js`.
- **Typing Animation**: Update the strings in `Typed.js` initialization for personalized text.
- **Emoji Logo**: Modify the emoji list in `script.js` to add or remove emojis.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or suggest improvements to make this portfolio even better!
