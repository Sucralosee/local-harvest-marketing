import Image from "next/image";
import styles from "./Landing.module.css"
import Link from "next/link";

export default function Landing() {


    return(
        <>
            <div className={styles.landingContainer}>
                <Image
                    src="/images/Landing_Page_People.svg"
                    width={600}
                    height={600}
                />
                <div className={styles.landingInfo}>
                    <h1>Connecting Famers Markets <br /> With Consumers Digitally</h1>
                    <h4>Local Harvest</h4>
                    <button className={styles.landingLink}>
                        <Link href={"https://www.google.com/"} target="_blank" className={styles.link}>Go To Site</Link>
                    </button>
                </div>
            </div>
        </>
    )
}