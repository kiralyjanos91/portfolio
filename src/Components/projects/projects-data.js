import groupyximg1 from "../../images/groupyx-img-1.jpg"
import groupyximg2 from "../../images/groupyx-img-2.jpg"
import groupyximg3 from "../../images/groupyx-img-3.jpg"
import workoplanimg1 from "../../images/workoplan-img4.jpg"
import workoplanimg2 from "../../images/workoplan-img2.jpg"
import workoplanimg3 from "../../images/workoplan-img3.jpg"
import top100finestimg1 from "../../images/top100finest-img2.jpg"
import top100finestimg2 from "../../images/top100finest-img3.jpg"
import top100finestimg3 from "../../images/top100finest-img4.jpg"
import topwalletsimg1 from "../../images/topwallets-img4.jpg"
import topwalletsimg2 from "../../images/topwallets-img3.jpg"
import topwalletsimg3 from "../../images/topwallets-img2.jpg"

const projectData = [
    {
        img1:groupyximg1,
        img2:groupyximg2,
        img3:groupyximg3,
        title:"Groupyx",
        description:
            `     
            A web application designed to facilitate the arrangement and coordination of both physical and online activities, meetings, and events catering to individuals and communities with shared interests, hobbies, and professional backgrounds. This project is built on the MERN stack, which stands for MongoDB, Express, React, and Node.js. Users have the ability to create groups and events, search for other users, and send them private messages. The private messaging functionality utilizes socket.io`,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap", "Node.js" , "Express" , "Socket.io" , "Mongoose"],
        website:"https://groupyx.netlify.app",
        github:"https://github.com/kiralyjanos91/groups"
    },
    {
        img1:workoplanimg1,
        img2:workoplanimg2,
        img3:workoplanimg3,
        title:"Workoplan",
        description:
            `
            A web application for creating training schedules. The exercises are sourced from an external API and can be saved or added to the training plan. Additional rendering operations can be performed on the exercises within the training plan. The information is stored in local storage, allowing the user to access their saved exercises and training plan at a later time.`,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap", "REST API"],
        website:"https://workoplan.netlify.app",
        github:"https://github.com/kiralyjanos91/workoplan"
    },
    {
        img1:top100finestimg1,
        img2:top100finestimg2,
        img3:top100finestimg3,
        title:"Top100finest",
        description:
            `A web application that lists the 100 best movies ever made based on IMDB ratings.
        
            Movie data is provided by an external API.
            The movies can be listed in two different views and can be filtered by genre.
            The genre labels on the individual movie pages are also links to the main list filtered for that genre.
            Films of interest to the user can be saved.
            Saved movies are stored in local storage.`,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap"],
        website:"https://top100finest.netlify.app/",
        github:"https://github.com/kiralyjanos91/top100movies"
    },
    {
        img1:topwalletsimg1,
        img2:topwalletsimg2,
        img3:topwalletsimg3,
        title:"Topwallets",
        description:
            `A web application providing short reviews of the most popular crypto wallets.

            The coins sub-page calls current data of the most popular crypto coins from an external API are also displayed on graphs in one to three-day intervals.
            The news sub-page of the app displays crypto news from another API.`,
        tech:["HTML", "CSS", "JavaScript", "React", "React-Bootstrap", "REST API"],
        website:"https://topwallets.netlify.app/",
        github:"https://github.com/kiralyjanos91/topwallets"
    },
]

export default projectData