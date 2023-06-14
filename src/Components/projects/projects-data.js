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

const rapidApi = "Link"

const projectData = [
    {
        img1:groupyximg1,
        img2:groupyximg2,
        img3:groupyximg3,
        title:"Groupyx",
        description:
            `     
            A React-based web app for creating groups based on shared interests.
            The application is built on the MERN stack. It utilizes socket.io for real-time messaging. The group or profile images uploaded by users are stored on Amazon S3.`,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap", "REST API" , "Node.js" , "Express" , "Socket.io" , "Mongoose" , "Amazon S3"],
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
            A React application for creating training schedules. The exercises are sourced from an external API and can be saved or added to the training plan. With all information stored in localStorage, access to saved exercises and training plans is readily available whenever needed.`,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap", "REST API"],
        website:"https://workoplan.netlify.app",
        github:"https://github.com/kiralyjanos91/workoplan"
    },
    {
        img1:top100finestimg1,
        img2:top100finestimg2,
        img3:top100finestimg3,
        title:"Top100finest",
        rapidApiLink: "https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/",
        description:
            `A React application that lists the 100 best movies ever made based on IMDB ratings.
            The app retrieves data from an API that I created myself and deployed to Google Firebase. I also uploaded the API to the largest REST API marketplace, where it is currently one of the most popular ones. Link:
            `,
        tech:["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "React-Bootstrap" , "REST API" , "Node.js" , "Express" , "Google Firebase"],
        website:"https://top100finest.netlify.app/",
        github:"https://github.com/kiralyjanos91/top100movies"
    },
    {
        img1:topwalletsimg1,
        img2:topwalletsimg2,
        img3:topwalletsimg3,
        title:"Topwallets",
        description:
            `A React based application providing short reviews of the most popular crypto wallets.

            The coins sub-page calls current data of the most popular crypto coins from an external API are also displayed on graphs in one to three-day intervals.
            The news sub-page of the app displays crypto news from another API.`,
        tech:["HTML", "CSS", "JavaScript", "React", "React-Bootstrap", "REST API"],
        website:"https://topwallets.netlify.app/",
        github:"https://github.com/kiralyjanos91/topwallets"
    },
]

export default projectData