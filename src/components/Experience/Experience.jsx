
import { getImageUrl } from "../../utils"
import styles from "./Experience.module.css"

export const Experience = () => {
    const skills = [
        {
            name: "HTML",
            img: "html.png",
        },
        {
            name: "CSS",
            img: "css.png",
        },
        {
            name: "React",
            img: "react.png",
        },
        {
            name: "Node",
            img: "node.png",
        },
        {
            name: "GraphQL",
            img: "graphQL.png",
        },
        {
            name: "MongoDB",
            img: "mongoDB.png",
        },
        {
            name: "Figma",
            img: "figma.png",
        },
    ]

    const experience = [
        {
            img:"google.png",
            title:"Software Engineer, Google",
            years:"Sept, 2022 - Present",
            desc: [
                "Worked on Google Maps",
                "Reduced load times by 50%"
            ]
        },
        {
            img:"windows.png",
            title:"UI Designer, Microsoft",
            years:"Aug, 2021 - Aug, 2022",
            desc: [
                "Worked on Windows 11",
                "Designed the control panel"
            ]
        },
        {
            img:"netflix.png",
            title:"SWE Intern, Netflix",
            years:"Apr, 2020 - Jun, 2020",
            desc: [
                "Worked on Google Maps",
                "Reduced load times by 50%"
            ]
        },
    ]

  return (
    <section id="experiance" className={styles.mainBox}>
        <h3 className={styles.title}>Experience</h3>
        <div className={styles.container}>
            <div className={styles.leftBox}>
            {skills.map((skill,index)=>(
                <div key={index} className={styles.skillBox}>
                    <div className={styles.skillItems}>
                    <img src={getImageUrl(`experience/${skill.img}`)} alt="skillImage" />
                    </div>
                    <h5 className={styles.skillName}>{skill.name}</h5>
                </div>
            ))}
            </div>
        <div className={styles.rightBox}>
            {experience.map((exp,index)=>(
                <div key={index} className={styles.experienceContainer}>
                    <div className={styles.experienceBox}>
                        <div className={styles.companyImage}>
                            <img src={getImageUrl(`experience/${exp.img}`)} alt="companyImage" />
                        </div>
                        <div className={styles.experience}>
                            <h3 className={styles.companyName}>{exp.title}</h3>
                            <p className={styles.years}>{exp.years}</p>
                            <ul className={styles.description}>
                                {exp.desc.map((des,index)=>(
                                    <li key={index}>{des}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>

  )
}