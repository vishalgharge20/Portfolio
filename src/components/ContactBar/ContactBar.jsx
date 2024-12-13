import { getImageUrl } from "../../utils"
import styles from "./ContactBar.module.css"


export const ContactBar = () => {
  return (
    <nav id="contact" className={styles.navBar}>
        <div className={styles.navBarContainer}> 
            <div className={styles.leftBox}>
                <h2>Contact</h2>
                <h3>Feel free to reach out!</h3>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.contact}>
                    <a href="mailto:vishalgharge20@gmail.com">
                        <img src={getImageUrl("contact/mail.png")} alt="mail" />
                    </a>
                    <h5><a href="mailto:vishalgharge20@gmail.com">vishalgharge20</a></h5>
                </div>
                <div className={styles.contact}>
                    <a href="https://www.linkedin.com/in/vishal-h-gharge" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/linkedIn.png")} alt="LinkedIn" />
                    </a>
                    <h5><a href="https://www.linkedin.com/in/vishal-h-gharge" target="_blank" rel="noopener noreferrer">vishal-h-gharge</a></h5>
                </div>
                <div className={styles.contact}>
                    <a href="https://github.com/vishalgharge20" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/github.png")} alt="GitHub" />
                    </a>
                    <h5><a href="https://github.com/vishalgharge20" target="_blank" rel="noopener noreferrer">github.com/vishalgharge20</a></h5>
                </div>
            </div>
        </div>

    </nav>
  )
}
