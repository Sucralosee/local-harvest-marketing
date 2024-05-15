import Image from "next/image";
import styles from "./Landing.module.css"
import Link from "next/link";

export default function Landing() {


    return(
        <>
            <div className={styles.landingContainer}>
                <div className={styles.landImage}>
                    <Image
                        src="/images/Landing_Page_People.svg"
                        width={700}
                        height={700}
                        
                    />
                </div>

                <div className={styles.landingInfo}>
                    <div className={styles.landingText}>
                        <h1 className={styles.landingh1}>Connecting Famers Markets <br /> With Consumers Digitally</h1>
                        <h4 className={styles.landingh4}>Secure your farm-fresh favorites with <br /> Local Harvest: Pre-order from local vendors <br /> for a guaranteed market haul!</h4>
                        <button className={styles.landingLink}>
                            <Link href={"https://www.google.com/"} target="_blank" className={styles.link}>Go To Site</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}