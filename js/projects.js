class Project {
    constructor (name, language, overview, website) {
        this.name = name;
        this.language = language;
        this.overview = overview;
        this.website = website;
    }
}

const projects = [
    new Project(
        'Registration Form', 
        '<span>HTML</span> <span>CSS</span>', 
        'This project was build <span class="outline">responsive</span>, using <span class="outline">mobile-first</span> approach. I learned about HTML form elements and media queries and why is it better to apply mobile-first approach. By creating this registration form I learn more about <span class="outline">CSS Selectors</span> and creating CSS using <span class="outline">DRY</span> method. Therefore, it was my first time learning about <span class="outline">Flex-Box</span> which truly changed the game for me.',
        'https://gretavait.github.io/techdegree-project-3/'
        ),
    
    new Project(
        'Web Style Guide',
        '<span>HTML</span> <span>CSS</span> <span>SCSS</span>',
        'For this project my goal was to create an interactive photo gallery with a serch bar using <span class="outline">JavaScript</span>. I used lightbox <span class="outline">plug-in</span> for displaying photos large on the screen. Search bar was created with <span class="outline">jQuery</span> library which is an easy way of building interactivity to your website.',
        'https://gretavait.github.io/techdegree-project-4/'
    ),
    
    new Project(
        'Photo Gallery',
        '<span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>jQuery</span>',
        'For this project my goal was to create an interactive photo gallery with a serch bar using <span class="outline">JavaScript</span>. I used lightbox <span class="outline">plug-in</span> for displaying photos large on the screen. Search bar was created with <span class="outline">jQuery</span> library which is an easy way of building interactivity to your website.',
        'https://gretavait.github.io/techdegree-project-5/'
    ),
    
    new Project(
        'Game Show App',
        '<span>HTML</span> <span>CSS</span> <span>JavaScript</span>',
        'So far the most fun project which tested my ability of JavaScript. In this project I created a game which shows random phrase each time the page loads. Once the phrase is showed players can guess it by pressing different letters until they either win or lose. Here I learned how <span class="outline">JavaScript interacts with DOM</span> and how <span class="outline">debug</span> your code with Developer Tools.',
        'https://gretavait.github.io/techdegree-project-6/'
    ),
    
    new Project(
        'WebApp Dashboard',
        '<span>HTML</span> <span>CSS</span> <span>JavaScript</span>',
        'On this project we came a litter further and created a personal dashboard. Here I had to implement <span class="outline">SVG</span> images into the page which is great for logos and small icons. As it is vector based it renders everytime you scale it. More importantly I learn about <span class="outline">CSS Grid Layout</span> which gives more control when creating websites.',
        'https://gretavait.github.io/techdegree-project-7/'
    ),
    
    new Project(
        'Employee Directory',
        '<span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Node.js</span>',
        'This project task was to create Employee Directory by using third-party <span class="outline">API</span>. I used external link to get employees information. Here I learned about importance of <span class="outline">classes</span>, <span class="outline">callback functions</span> and different <span class="outline">iteration methods</span>. More importantly we worked with <span class="outline">AJAX</span> and used <span class="outline">asynchronous programming approach</span>.',
        'https://gretavait.github.io/techdegree-project-8/'
    )
];

