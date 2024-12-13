import styles from "./Projects.module.css"
import { getImageUrl } from "../../utils"



export const Projects = () => {

    const Projects = [
        {
            img:"Project.png",
            title:"Project A",
            desc: "This is a project made to learn the latest languages by building an app",
            stacks: ["React","Express","Node"],
        },
        {
            img:"Project.png",
            title:"Project B",
            desc: "This is a project made to learn the latest languages by building an app",
            stacks: ["React","Express","Node"],
        },
        {
            img:"Project.png",
            title:"Project C",
            desc: "This is a project made to learn the latest languages by building an app",
            stacks: ["React","Express","Node"],
        },
    ]


  return (
    <section id="projects" className={styles.projectsContainer}> 

            <h3 className={styles.title}>Projects</h3>

            <div className={styles.projects}>
                {Projects.map((item,index)=>(
                    <div key={index} className={styles.project}>

                        <img src={getImageUrl(`projects/${item.img}`)} alt="" />

                        <h5 className={styles.projectTitle}>{item.title}</h5>

                        <p className={styles.projectDesc}>{item.desc}</p>

                        <div className={styles.stacks}>
                            {item.stacks.map((stack,index)=>(
                                <div key={index} className={styles.stack}>{stack}</div>
                            ))}
                        </div>

                        <div className={styles.buttons} >
                            <button className={styles.demoBTn} >Demo</button>
                            <button className={styles.sourceBTn} >Source</button>
                        </div>

                    </div>
                ))}
            </div>
    </section>
  )
}
