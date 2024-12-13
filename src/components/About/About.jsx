import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {
    const aboutItems = [
        {
        title: "Frontend Developer",
        description:"I’m a front-end developer with experience in building responsive and optimized sites",
        image: "image1.png",
        },
        {
        title: "Backend Developer",
        description:"I have experience developing fast and optimized back-end systems and APIs",
        image: "image2.png",
        },
        {
        title: "UI Designer",
        description:"I have designed multiple landing pages and have created design systems as well",
        image: "image3.png",
        }
    ]

  return (
    <section  id="about" className={styles.About}>
        <div className={styles.leftside}>
            <h3 className={styles.title}>About</h3>
            <img src={getImageUrl("about/AboutImage.png")} alt="AboutImg" />
        </div>

        <div className={styles.aboutItems}>
            {aboutItems.map((item,index)=>(
                <div key={index} className={styles.aboutItem}>
                    <img src={getImageUrl(`about/${item.image}`)} alt=""  className={styles.aboutItemImage}/>
                    <h4 className={styles.aboutItemTitle}> {item.title} </h4>
                    <p className={styles.aboutItemDescription}> {item.description} </p>
                </div> 
            ))}
        </div>

    </section>
  )
}
