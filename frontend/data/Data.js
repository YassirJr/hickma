const eventData = [
  {
    id: 0,
    imgSrc: "images/event_img_1.png",
    category: "school",
    location: "Dhaka, Bangladesh",
    time: "08.00 am - 10.00 am",
    title: "Outdoor This Games",
    longTitle: "Outdoor This Games - A Fun Day of Outdoor Activities",
    slug: "outdoor-this-games",
    desc: "We can provide you with a reliable handyan in London you need to included the today..",
    longDesc:
      "Join us for a day of exciting outdoor activities and games in the beautiful Dhaka, Bangladesh. Whether you're a student or just looking for some outdoor fun, this event is perfect for you.",
    name: "hasan mahmud",
    price: 50.0,
    color: "blue",
  },
  {
    id: 1,
    imgSrc: "images/event_img_2.png",
    category: "music",
    location: "New York, USA",
    time: "07.30 pm - 11.00 pm",
    title: "Live Music Concert",
    longTitle: "Live Music Concert - An Unforgettable Night of Music",
    slug: "live-music-concert",
    desc: "Join us for an unforgettable night of live music with your favorite artists.",
    longDesc:
      "Experience the magic of live music in the heart of New York City. This concert features some of the most talented musicians performing your favorite songs. Get ready for a night to remember!",
    name: "Sarah Johnson",
    price: 60.0,
    color: "orange",
  },
  {
    id: 2,
    imgSrc: "images/event_img_3.png",
    category: "sports",
    location: "Los Angeles, USA",
    time: "10.00 am - 12.00 pm",
    title: "Basketball Tournament",
    longTitle: "Basketball Tournament - Showcase Your Skills on the Court",
    slug: "basketball-tournament",
    desc: "Compete in our annual basketball tournament and show off your skills on the court.",
    longDesc:
      "Calling all basketball enthusiasts! Join us for our annual basketball tournament in Los Angeles. It's your chance to showcase your skills, compete with others, and have a great time!",
    name: "Michael Smith",
    price: 35.0,
    color: "green",
  },
  {
    id: 3,
    imgSrc: "images/event_img_4.png",
    category: "science",
    location: "Chicago, USA",
    time: "09.30 am - 11.30 am",
    title: "Science Fair",
    longTitle: "Science Fair - Explore the Wonders of Science",
    slug: "science-fair",
    desc: "Explore the wonders of science at our annual science fair. Fun for all ages!",
    longDesc:
      "Curious about the world of science? Join us at the Chicago Science Fair and embark on a journey of discovery. This family-friendly event promises fun and learning for everyone!",
    name: "Linda Anderson",
    price: 15.0,
    color: "red",
  },
  {
    id: 4,
    imgSrc: "images/event_img_5.png",
    category: "food",
    location: "Paris, France",
    time: "06.00 pm - 09.00 pm",
    title: "Gourmet Food Festival",
    longTitle: "Gourmet Food Festival - A Culinary Adventure",
    slug: "gourmet-food-festival",
    desc: "Indulge in a culinary adventure with a variety of gourmet dishes from around the world.",
    longDesc:
      "Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!",
    name: "Julie Martin",
    price: 45.0,
    color: "blue",
  },
  {
    id: 5,
    imgSrc: "images/event_img_6.png",
    category: "art",
    location: "London, UK",
    time: "02.00 pm - 05.00 pm",
    title: "Art Exhibition",
    longTitle: "Art Exhibition - Explore Contemporary Art",
    slug: "art-exhibition",
    desc: "Experience the beauty of contemporary art at our gallery exhibition featuring local artists.",
    longDesc:
      "Immerse yourself in the world of contemporary art at our gallery exhibition in London. Discover the creativity of local artists and explore the beauty of their unique artworks.",
    name: "David Wilson",
    price: 25.0,
    color: "green",
  },
  {
    id: 6,
    imgSrc: "images/event_img_7.png",
    category: "fitness",
    location: "Sydney, Australia",
    time: "07.00 am - 09.00 am",
    title: "Yoga and Wellness Retreat",
    longTitle: "Yoga and Wellness Retreat - Refresh Your Mind and Body",
    slug: "yoga-wellness-retreat",
    desc: "Join us for a rejuvenating yoga and wellness retreat to refresh your mind and body.",
    longDesc:
      "Take a break from the hustle and bustle of life and join us for a rejuvenating yoga and wellness retreat in the serene surroundings of Sydney, Australia. Recharge your mind and body!",
    name: "Emily Davis",
    price: 55.0,
    color: "orange",
  },
  {
    id: 7,
    imgSrc: "images/event_img_8.png",
    category: "technology",
    location: "San Francisco, USA",
    time: "11.00 am - 01.00 pm",
    title: "Tech Innovators Conference",
    longTitle: "Tech Innovators Conference - Explore the Latest Tech Trends",
    slug: "tech-innovators-conference",
    desc: "Stay updated on the latest tech trends at our Tech Innovators Conference.",
    longDesc:
      "Tech enthusiasts, don't miss the Tech Innovators Conference in San Francisco. Dive into discussions on the latest tech trends, network with industry experts, and gain valuable insights.",
    name: "John Doe",
    price: 75.0,
    color: "blue",
  },
  {
    id: 8,
    imgSrc: "images/event_img_9.png",
    category: "music",
    location: "Nashville, USA",
    time: "08.00 pm - 11.00 pm",
    title: "Country Music Festival",
    longTitle: "Country Music Festival - A Night of Country Hits",
    slug: "country-music-festival",
    desc: "Enjoy a night of country hits and live performances at our music festival.",
    longDesc:
      "Get ready for a boot-stompin' good time at the Country Music Festival in Nashville. Experience live performances of your favorite country hits and enjoy the vibrant atmosphere.",
    name: "Sarah Johnson",
    price: 65.0,
    color: "orange",
  },
  {
    id: 9,
    imgSrc: "images/event_img_10.png",
    category: "sports",
    location: "Miami, USA",
    time: "09.00 am - 12.00 pm",
    title: "Beach Volleyball Tournament",
    longTitle: "Beach Volleyball Tournament - Spike Your Way to Victory",
    slug: "beach-volleyball-tournament",
    desc: "Compete in a thrilling beach volleyball tournament by the sunny shores of Miami.",
    longDesc:
      "Bump, set, and spike your way to victory at the Beach Volleyball Tournament in Miami. Join fellow volleyball enthusiasts for a day of fun and competitive play on the beach.",
    name: "Michael Smith",
    price: 40.0,
    color: "green",
  },
  {
    id: 10,
    imgSrc: "images/event_img_11.png",
    category: "science",
    location: "Boston, USA",
    time: "10.30 am - 12.30 pm",
    title: "Astronomy Workshop",
    longTitle: "Astronomy Workshop - Explore the Cosmos",
    slug: "astronomy-workshop",
    desc: "Embark on a cosmic journey and explore the wonders of the universe.",
    longDesc:
      "Discover the mysteries of the cosmos at the Astronomy Workshop in Boston. Learn about stars, planets, and galaxies, and gaze at the night sky through telescopes.",
    name: "Linda Anderson",
    price: 20.0,
    color: "red",
  },
];

const faqData = [
  {
    id: 0,
    color: "orange",
    question: "What are the admission requirements for your school?",
    answer:
      "Admission requirements may vary depending on the grade level. Generally, we require a completed application form, transcripts, letters of recommendation, and a personal statement. Please visit our website or contact our admissions office for specific details.",
  },
  {
    id: 1,
    color: "green",
    question: "Do you offer financial aid or scholarships for students?",
    answer:
      "Yes, we offer financial aid and scholarships to eligible students. Our financial aid packages are based on financial need and academic merit. To apply for financial aid or scholarships, please fill out the appropriate forms available on our website.",
  },
  {
    id: 2,
    color: "red",
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a wide range of extracurricular activities, including sports, arts and crafts, debate club, and more. Students can explore their interests and passions outside of the classroom. Our school believes in a well-rounded education.",
  },
  {
    id: 3,
    color: "blue",
    question: "How can parents get involved in their child's education?",
    answer:
      "We encourage parental involvement in a child's education. Parents can attend parent-teacher conferences, join the PTA (Parent-Teacher Association), volunteer for school events, and stay connected with teachers and staff through regular communication channels.",
  },
];

const allFaqData = [
  {
    id: 0,
    color: "orange",
    title: "What is the importance of education?",
    desc: "Education plays a crucial role in personal and societal development by imparting knowledge, skills, and values.",
  },
  {
    id: 1,
    color: "green",
    title: "What are the different levels of education?",
    desc: "Education encompasses various stages, including preschool, primary, secondary, higher education, and lifelong learning.",
  },
  {
    id: 2,
    color: "red",
    title: "How do I choose the right school for my child?",
    desc: "Selecting the right school involves considering factors such as location, curriculum, facilities, and educational philosophy.",
  },
  {
    id: 3,
    color: "blue",
    title: "What is the difference between public and private education?",
    desc: "Public schools are funded by the government, while private schools are independently funded, leading to differences in resources and curriculum.",
  },
  {
    id: 4,
    color: "orange",
    title: "How can I finance my education?",
    desc: "Explore options like scholarships, grants, loans, and financial aid to help fund your education.",
  },
  {
    id: 5,
    color: "green",
    title: "What are the benefits of online education?",
    desc: "Online education offers flexibility and accessibility, but it's important to understand the advantages and challenges.",
  },
  {
    id: 6,
    color: "blue",
    title: "How can I improve my study skills?",
    desc: "Enhance your study techniques with effective strategies for time management, note-taking, and more.",
  },
  {
    id: 7,
    color: "orange",
    title: "What careers are in demand and require specific education?",
    desc: "Learn about careers that demand specialized education and training to excel.",
  },
];

const workData = [
  {
    id: 0,
    imgSrc: "images/work_img_1.jpg",
    task: "Classes Completed On Time",
    color: "orange",
    desc: "We can provide you with a reliable handyan in London. you need to included the today. However we feel like we should do more and have fun.",
  },
  {
    id: 1,
    imgSrc: "images/work_img_2.jpg",
    color: "green",
    task: "Research Papers Submitted Fully",
    desc: "Our students have submitted groundbreaking research papers in various fields of study, contributing to the advancement of knowledge.",
  },
  {
    id: 2,
    imgSrc: "images/work_img_3.jpg",
    task: "STEM Workshops Conducted",
    color: "red",
    desc: "We organize STEM workshops to engage students in hands-on learning experiences in science, technology, engineering, and mathematics.",
  },
  {
    id: 3,
    imgSrc: "images/work_img_4.jpg",
    task: "Language Proficiency Courses",
    color: "blue",
    desc: "Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.",
  },
];

const testimonialData = [
  {
    id: 0,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour",
    imgSrc: "images/client_img_1.png",
    name: "Andrew James",
    designation: "Developer",
  },
  {
    id: 1,
    desc: "I am extremely satisfied with the quality of education provided by this institution. It has helped me grow both academically and personally.",
    imgSrc: "images/client_img_2.png",
    name: "Emily Smith",
    designation: "Student",
  },
  {
    id: 2,
    desc: "The dedicated faculty and staff at this school make learning a joyful experience. I couldn't have asked for a better educational environment.",
    imgSrc: "images/client_img_3.png",
    name: "John Doe",
    designation: "Parent",
  },
  {
    id: 3,
    desc: "This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.",
    imgSrc: "images/client_img_2.png",
    name: "Lisa Anderson",
    designation: "Alumnus",
  },
];

const blogData = [
  {
    id: 0,
    imgSrc: "images/blog_1.jpg",
    category: "design",
    color: "light_blue",
    title: "Learn with these award-winning best blog collage courses",
    longTitle:
      "Learn with these Award-Winning Collage Courses for Design Enthusiasts",
    slug: "learn-with-these-award-winning-best-blog-collage-courses",
    desc: "We can provide you with a reliable hand in London you need today.",
    longDesc:
      "Are you passionate about design? Explore the world of design with our award-winning collage courses. Whether you're a novice or a seasoned designer, these courses will help you hone your skills and unleash your creativity.",
    author: "John Doe",
    date: "30 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/blog_2.jpg",
    category: "technology",
    color: "orange",
    title: "Mastering JavaScript: Tips and Tricks for Web Developers",
    longTitle: "Mastering JavaScript: Tips and Tricks for Web Developers",
    slug: "mastering-javascript-tips-and-tricks-for-web-developers",
    desc: "Explore advanced JavaScript techniques to enhance your web development skills.",
    longDesc:
      "Take your web development skills to the next level with our comprehensive guide to mastering JavaScript. This blog post is packed with tips and tricks that will help both novice and experienced web developers write cleaner, more efficient code.",
    author: "Jane Smith",
    date: "26 Sep 2023",
  },
  {
    id: 2,
    imgSrc: "images/blog_3.jpg",
    category: "travel",
    color: "green",
    title: "Top 10 Must-Visit Destinations for Adventure Seekers",
    longTitle: "Top 10 Must-Visit Destinations for Adventure Seekers",
    slug: "top-10-must-visit-destinations-for-adventure-seekers",
    desc: "Embark on thrilling adventures by visiting these breathtaking destinations around the world.",
    longDesc:
      "Are you an adventure seeker looking for your next adrenaline rush? Discover the top 10 must-visit destinations that will satisfy your craving for adventure. From mountain treks to exotic wildlife encounters, these destinations have it all.",
    author: "Alice Johnson",
    date: "18 Aug 2023",
  },
  {
    id: 3,
    imgSrc: "images/blog_4.jpg",
    category: "food",
    color: "red",
    title: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    longTitle: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    slug: "delicious-and-nutritious-healthy-recipes-for-a-balanced-diet",
    desc: "Discover tasty recipes that will help you maintain a healthy and balanced diet.",
    longDesc:
      "Maintaining a healthy and balanced diet doesn't mean sacrificing flavor. Dive into our collection of delicious and nutritious recipes that will not only tantalize your taste buds but also support your journey toward a healthier you.",
    author: "Jack Ackerman",
    date: "25 May 2023",
  },
  {
    id: 4,
    imgSrc: "images/blog_5.jpg",
    category: "technology",
    color: "blue",
    title: "The Future of Artificial Intelligence: Trends and Innovations",
    longTitle: "The Future of Artificial Intelligence: Trends and Innovations",
    slug: "the-future-of-artificial-intelligence-trends-and-innovations",
    desc: "Stay updated on the latest AI trends and innovations shaping the future.",
    longDesc:
      "Artificial Intelligence is evolving rapidly. In this blog, we explore the most recent trends and innovations in AI technology, providing insights into how AI is shaping the future across various industries.",
    author: "Emily Davis",
    date: "12 Apr 2023",
  },
  {
    id: 5,
    imgSrc: "images/blog_6.jpg",
    category: "travel",
    color: "purple",
    title: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    longTitle: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    slug: "exploring-hidden-gems-off-the-beaten-path-travel-destinations",
    desc: "Escape the crowds and discover unique travel destinations around the world.",
    longDesc:
      "If you're tired of tourist traps, it's time to explore hidden gems. This blog takes you on a journey to off-the-beaten-path travel destinations that offer authentic experiences and a break from the crowds.",
    author: "Sophia Martinez",
    date: "5 Jul 2023",
  },
  {
    id: 6,
    imgSrc: "images/blog_7.jpg",
    category: "design",
    color: "light_blue",
    title: "Your Guide to Creating Stunning Website Designs",
    longTitle: "Your Guide to Creating Stunning Website Designs",
    slug: "your-guide-to-creating-stunning-website-designs",
    desc: "Learn essential tips and tricks for designing visually appealing websites.",
    longDesc:
      "Designing websites that captivate users requires a blend of creativity and technical know-how. This blog provides valuable insights and techniques for creating stunning website designs.",
    author: "David Wilson",
    date: "19 Nov 2023",
  },
  {
    id: 7,
    imgSrc: "images/blog_8.jpg",
    category: "food",
    color: "red",
    title: "The Art of Baking: Mastering Delicious Pastries",
    longTitle: "The Art of Baking: Mastering Delicious Pastries",
    slug: "the-art-of-baking-mastering-delicious-pastries",
    desc: "Discover the secrets to baking delectable pastries and desserts.",
    longDesc:
      "If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and master the techniques to create mouthwatering pastries and desserts that will impress everyone.",
    author: "Ella Anderson",
    date: "8 Mar 2023",
  },
  {
    id: 8,
    imgSrc: "images/blog_9.jpg",
    category: "health",
    color: "green",
    title: "Mental Health Matters: Strategies for Well-Being",
    longTitle: "Mental Health Matters: Strategies for Well-Being",
    slug: "mental-health-matters-strategies-for-well-being",
    desc: "Explore effective strategies for maintaining mental health and well-being.",
    longDesc:
      "In today's fast-paced world, mental health is crucial. This blog delves into practical strategies and tips for maintaining mental well-being, reducing stress, and achieving a balanced and healthy life.",
    author: "Olivia Turner",
    date: "14 Feb 2023",
  },
  {
    id: 9,
    imgSrc: "images/blog_10.jpg",
    category: "technology",
    color: "orange",
    title: "Cybersecurity in a Digital World: Protecting Your Online Presence",
    longTitle:
      "Cybersecurity in a Digital World: Protecting Your Online Presence",
    slug: "cybersecurity-in-a-digital-world-protecting-your-online-presence",
    desc: "Learn essential cybersecurity practices to safeguard your online identity.",
    longDesc:
      "With the increasing reliance on the internet, cybersecurity is paramount. This blog discusses the importance of online security and provides tips and tools to protect your digital presence.",
    author: "Michael Carter",
    date: "22 Oct 2023",
  },
  {
    id: 10,
    imgSrc: "images/blog_11.jpg",
    category: "travel",
    color: "blue",
    title: "Culinary Adventures: Exploring World Cuisines",
    longTitle: "Culinary Adventures: Exploring World Cuisines",
    slug: "culinary-adventures-exploring-world-cuisines",
    desc: "Embark on a global culinary journey and savor the flavors of diverse cuisines.",
    longDesc:
      "Food is a universal language, and this blog takes you on a culinary adventure around the world. Discover the unique flavors, ingredients, and traditions of different cuisines that will tantalize your taste buds.",
    author: "Sophie Walker",
    date: "9 Jun 2023",
  },
  {
    id: 11,
    imgSrc: "images/blog_12.jpg",
    category: "science",
    color: "green",
    title: "The Wonders of Space: Exploring the Cosmos",
    longTitle: "The Wonders of Space: Exploring the Cosmos",
    slug: "the-wonders-of-space-exploring-the-cosmos",
    desc: "Journey through the cosmos and unravel the mysteries of space and astronomy.",
    longDesc:
      "Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the mysteries of the universe, from distant galaxies to the wonders of our own solar system.",
    author: "Daniel White",
    date: "3 Nov 2023",
  },
  {
    id: 12,
    imgSrc: "images/blog_13.jpg",
    category: "food",
    color: "green",
    title: "Gourmet Delights: Culinary Adventures for Foodies",
    longTitle: "Gourmet Delights: Culinary Adventures for Foodies",
    slug: "gourmet-delights-culinary-adventures-for-foodies",
    desc: "Embark on a culinary journey to discover gourmet delicacies and epicurean experiences.",
    longDesc:
      "Calling all food enthusiasts! Join us as we embark on a gastronomic adventure to explore gourmet delights, from truffle tastings in France to wine pairings in Italy. Get ready to tantalize your taste buds.",
    author: "Ella Turner",
    date: "11 Sep 2023",
  },
  {
    id: 13,
    imgSrc: "images/blog_14.jpg",
    category: "health",
    color: "red",
    title: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    longTitle: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    slug: "holistic-wellness-nurturing-body-mind-and-spirit",
    desc: "Discover the principles of holistic wellness and achieve a balanced and fulfilling life.",
    longDesc:
      "True wellness encompasses more than just physical health. This blog explores the principles of holistic wellness, guiding you on a journey to nurture your body, mind, and spirit for a fulfilling and balanced life.",
    author: "Sophie Anderson",
    date: "29 Nov 2023",
  },
  {
    id: 14,
    imgSrc: "images/blog_15.jpg",
    category: "design",
    color: "light_blue",
    title: "Creating Digital Art: From Sketch to Masterpiece",
    longTitle: "Creating Digital Art: From Sketch to Masterpiece",
    slug: "creating-digital-art-from-sketch-to-masterpiece",
    desc: "Unlock your creativity and learn the process of creating stunning digital artworks.",
    longDesc:
      "Digital art offers endless possibilities for creative expression. In this blog, we guide you through the journey of creating digital art, from the initial sketch to the final masterpiece, with tips and techniques along the way.",
    author: "Alex Turner",
    date: "7 Jan 2023",
  },
];

const services = [
  {
    id: 0,
    iClassName: "fa fa-graduation-cap",
    title: "Cours en Ligne",
    desc: "Accédez à une variété de cours en ligne pour améliorer vos compétences à tout moment et n'importe où.",
    color: "red",
  },
  {
    id: 1,
    iClassName: "fa fa-users",
    title: "Mentorat Personnalisé",
    desc: "Bénéficiez d'un accompagnement personnalisé par des experts dans votre domaine d'étude.",
    color: "gray",
  },
  {
    id: 2,
    iClassName: "fa fa-flask",
    title: "Laboratoires Pratiques",
    desc: "Mettez en pratique vos connaissances théoriques dans nos laboratoires virtuels interactifs.",
    color: "green",
  },
  {
    id: 3,
    iClassName: "fa fa-briefcase",
    title: "Préparation à la Carrière",
    desc: "Préparez votre avenir professionnel avec nos cours de développement de carrière et de préparation à l'emploi.",
    color: "blue",
  },
  {
    id: 4,
    iClassName: "fa fa-comments",
    title: "Ateliers Collaboratifs",
    desc: "Travaillez sur des projets de groupe et collaborez avec des étudiants du monde entier.",
    color: "orange",
  },
];

const courseDataArray = [
  {
    id: 0,
    imgSrc: "images/courses_img_1.jpg",
    color: "orange",
    slug: "development-theory-learn",
    title: "Development Theory Learn",
    category: "Drawing",
    price: "$50.00",
    instructor: "Smith John",
    lessons: "14 lessons",
    description: "Learn about development theory in this comprehensive course.",
    rating: 4,
    students: "50+ students",
    instructorImg: "images/team_1.jpg",
    review: 43,
    date: "24 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/courses_img_2.jpg",
    color: "green",
    slug: "learn-photography",
    title: "Learn Photography",
    category: "English",
    price: "$65.00",
    instructor: "Hasan Mahmud",
    lessons: "23 lessons",
    description: "Master the art of photography and take stunning pictures.",
    rating: 4,
    students: "94+ students",
    instructorImg: "images/team_2.jpg",
    review: 51,
    date: "28 Mar 2023",
  },
  {
    id: 2,
    imgSrc: "images/courses_img_3.jpg",
    color: "red",
    slug: "advance-wordpress",
    title: "Advance WordPress",
    category: "Design",
    price: "$99.00",
    instructor: "Khalid Hasan",
    lessons: "40 lessons",
    description:
      "Take your WordPress skills to the next level with advanced techniques.",
    rating: 4,
    students: "72+ students",
    instructorImg: "images/team_3.jpg",
    review: 21,
    date: "17 Jun 2023",
  },
  {
    id: 3,
    imgSrc: "images/courses_img_4.jpg",
    color: "blue",
    slug: "the-complete-financial-analyst",
    title: "The Complete Financial Analyst",
    category: "UI/UX",
    price: "$75.00",
    instructor: "Sazal Ahmed",
    lessons: "40 lessons",
    description:
      "Become a skilled financial analyst and excel in the world of finance.",
    rating: 4,
    students: "72+ students",
    instructorImg: "images/team_4.jpg",
    review: 35,
    date: "20 Apr 2023",
  },
  {
    id: 4,
    imgSrc: "images/courses_img_5.jpg",
    color: "orange",
    slug: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    category: "Marketing",
    price: "$89.00",
    instructor: "Sarah Johnson",
    lessons: "35 lessons",
    description:
      "Master the art of digital marketing and boost your online presence.",
    rating: 4,
    students: "68+ students",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 5,
    imgSrc: "images/courses_img_6.jpg",
    color: "green",
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    category: "Data Science",
    price: "$120.00",
    instructor: "Alex Wilson",
    lessons: "50 lessons",
    description:
      "Learn the basics of data science and start your journey into data analysis.",
    rating: 4,
    students: "60+ students",
    instructorImg: "images/team_6.jpg",
    review: 63,
    date: "24 Oct 2023",
  },
  {
    id: 6,
    imgSrc: "images/courses_img_7.jpg",
    color: "red",
    slug: "web-development-bootcamp",
    title: "Web Development Bootcamp",
    category: "Web Development",
    price: "$149.00",
    instructor: "David Smith",
    lessons: "60 lessons",
    description:
      "Become a full-stack web developer with this intensive bootcamp.",
    rating: 4.5,
    students: "120+ students",
    instructorImg: "images/team_7.jpg",
    review: 38,
    date: "24 Nov 2023",
  },
  {
    id: 7,
    imgSrc: "images/courses_img_8.jpg",
    color: "blue",
    slug: "artificial-intelligence-101",
    title: "Artificial Intelligence 101",
    category: "Artificial Intelligence",
    price: "$99.00",
    instructor: "Emily White",
    lessons: "30 lessons",
    description: "Introduction to AI and its applications in the real world.",
    rating: 4.2,
    students: "80+ students",
    instructorImg: "images/team_8.jpg",
    review: 74,
    date: "28 Jul 2023",
  },
  {
    id: 8,
    imgSrc: "images/courses_img_9.jpg",
    color: "orange",
    slug: "modern-frontend-frameworks",
    title: "Modern Frontend Frameworks",
    category: "Web Development",
    price: "$79.00",
    instructor: "Sophia Turner",
    lessons: "45 lessons",
    description:
      "Explore modern frontend frameworks like React, Vue, and Angular.",
    rating: 4.3,
    students: "90+ students",
    instructorImg: "images/team_9.jpg",
    review: 85,
    date: "19 Jan 2023",
  },
  {
    id: 9,
    imgSrc: "images/courses_img_10.jpg",
    color: "green",
    slug: "advanced-machine-learning",
    title: "Advanced Machine Learning",
    category: "Machine Learning",
    price: "$129.00",
    instructor: "Daniel Brown",
    lessons: "55 lessons",
    description: "Master advanced machine learning algorithms and techniques.",
    rating: 4.4,
    students: "70+ students",
    instructorImg: "images/team_10.jpg",
    review: 63,
    date: "08 Jun 2023",
  },
  {
    id: 10,
    imgSrc: "images/courses_img_11.jpg",
    color: "red",
    slug: "professional-graphic-design",
    title: "Professional Graphic Design",
    category: "Design",
    price: "$89.00",
    instructor: "Olivia Davis",
    lessons: "38 lessons",
    description:
      "Learn the art of professional graphic design with industry tools.",
    rating: 4.6,
    students: "100+ students",
    instructorImg: "images/team_11.jpg",
    review: 95,
    date: "15 Sep 2023",
  },
  {
    id: 11,
    imgSrc: "images/courses_img_12.jpg",
    color: "blue",
    slug: "digital-entrepreneurship",
    title: "Digital Entrepreneurship",
    category: "Business",
    price: "$109.00",
    instructor: "Benjamin Carter",
    lessons: "42 lessons",
    description:
      "Start and grow your digital business with this comprehensive course.",
    rating: 4.7,
    students: "110+ students",
    instructorImg: "images/team_12.jpg",
    review: 98,
    date: "24 Jan 2023",
  },
  {
    id: 12,
    imgSrc: "images/courses_img_13.jpg",
    color: "orange",
    slug: "advanced-data-analysis",
    title: "Advanced Data Analysis",
    category: "Data Science",
    price: "$149.00",
    instructor: "Ella Turner",
    lessons: "48 lessons",
    description:
      "Take your data analysis skills to an advanced level with real-world projects.",
    rating: 4.4,
    students: "85+ students",
    instructorImg: "images/team_13.jpg",
    review: 73,
    date: "27 Nov 2023",
  },
  {
    id: 13,
    imgSrc: "images/courses_img_14.jpg",
    color: "green",
    slug: "professional-photography",
    title: "Professional Photography",
    category: "Photography",
    price: "$119.00",
    instructor: "Luisa Rodriguez",
    lessons: "50 lessons",
    description:
      "Become a professional photographer and capture stunning moments.",
    rating: 4.5,
    students: "95+ students",
    instructorImg: "images/team_14.jpg",
    review: 78,
    date: "20 May 2023",
  },
  {
    id: 14,
    imgSrc: "images/courses_img_15.jpg",
    color: "red",
    slug: "marketing-strategies-masterclass",
    title: "Marketing Strategies Masterclass",
    category: "Marketing",
    price: "$99.00",
    instructor: "Sophie Anderson",
    lessons: "35 lessons",
    description: "Learn effective marketing strategies to grow your business.",
    rating: 4.3,
    students: "75+ students",
    instructorImg: "images/team_15.jpg",
    review: 68,
    date: "24 Jun 2023",
  },
];

const teamData = [
  
  {
    id: 6,
    imgSrc: "images/team_7.jpg",
    name: "FATHI Ismail",
    designation: "Etudiant",
    slug: "FATHI Ismail",
    about:
      "#",
    phone: "+1 (789) 012-3456",
  },
  {
    id: 7,
    imgSrc: "images/team_8.jpg",
    name: "HAMMACH Chaimae",
    designation: "Etudiante",
    slug: "HAMMACH Chaimae",
    about:
      "#",
    phone: "+1 (890) 123-4567",
  },
  {
    id: 8,
    imgSrc: "images/team_9.jpg",
    name: "FARHI Mouad",
    designation: "Etudiant",
    slug: "FARHI Mouad",
    about:
      "#",
    phone: "+1 (901) 234-5678",
  },
  {
    id: 9,
    imgSrc: "images/team_10.jpg",
    name: "FRIK Aya",
    designation: "Etudiante",
    slug: "FRIK Aya",
    about:
      "#",
    phone: "+1 (012) 345-6789",
  },
  {
    id: 10,
    imgSrc: "images/team_11.jpg",
    name: "KOUAME Konan Jean Aime",
    designation: "Etudiant",
    slug: "KOUAME Konan Jean Aime",
    about:
      "#",
    phone: "+1 (123) 456-7890",
  },
  
];

const activitiesData = [
  {
    id: 0,
    color: "light_blue",
    iClassName: "fa fa-chalkboard-teacher",
    title: "Formations pour Enseignants",
  },
  {
    id: 1,
    color: "green",
    iClassName: "fa fa-microscope",
    title: "Sciences et Ingénierie",
  },
  {
    id: 2,
    color: "orange",
    iClassName: "fa fa-laptop-code",
    title: "Développement Informatique",
  },
  {
    id: 3,
    color: "blue",
    iClassName: "fa fa-balance-scale",
    title: "Droit et Administration",
  },
  {
    id: 4,
    color: "red",
    iClassName: "fa fa-business-time",
    title: "Gestion d'Entreprise",
  },
];

export {
  eventData,
  faqData,
  workData,
  testimonialData,
  blogData,
  services,
  courseDataArray,
  teamData,
  activitiesData,
  allFaqData,
};
