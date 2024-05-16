import styles from "./About.module.css";
import Image from "next/image";

export default function AboutTeam () {

    return (
        <>
            <div className={styles.AboutContainer}>
                <h3>About Our Team</h3>
                <div></div>

                <div className={styles.AboutInner}>
                    <h4 className={styles.division}>D3</h4>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/benIcon.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Ben</h5>
                        <p className={styles.desc}>Project Manager | Designer</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/JeromeIcon.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Jerome</h5>
                        <p className={styles.desc}>UX/UI | Designer</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/EvanIcon.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Evan</h5>
                        <p className={styles.desc}>Graphic Designer | Developer</p>
                    </div>
                </div>
                <div className={styles.AboutInner}>
                    <h4 className={styles.division}>FSWD</h4>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/Dev1.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Emmy</h5>
                        <p className={styles.desc}>Developer</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/Dev2.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Denis</h5>
                        <p className={styles.desc}>Developer</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <Image
                                src="/images/People/Dev3.svg"
                                width={200}
                                height={200}
                            />
                        </div>
                        <h5 className={styles.name}>Aless</h5>
                        <p className={styles.desc}>Developer</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}