import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Landing.module.css"
import Link from "next/link";

export default function Landing() {

    // const [position, setPosition] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPosition(prevPosition => {
    //             if (prevPosition === -110 * 6) { // Adjust according to the number of boxes and their width
    //                 return 0;
    //             } else {
    //                 return prevPosition - 110; // Adjust according to the width of a single box
    //             }
    //         });
    //     }, 2000); // Adjust time interval as needed

    //     return () => clearInterval(interval);
    // }, []);
    return(
        <>
            <div className={styles.landingContainer}>
                <div className={styles.landImage}>
                    <Image
                        src="/images/Landing_Page_People.svg"
                        width={600}
                        height={600}
                        
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
            {/* <div className={styles.carousel} style={{ transform: `translateX(${position * 110}px)` }}> */}
            <div className={styles.trustContainer}>
                <div class={styles.trustLand}>
                    <h2 className={styles.line}>Trusted By</h2>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.box}>FreshFoods Co.</div>
                    <div className={styles.box}>Spice Emporium</div>
                    <div className={styles.box}>GreenGrocers Ltd.</div>
                    <div className={styles.box}>EcoCrate Farm</div>
                    <div className={styles.box}>SeaFresh Seafood</div>
                    <div className={styles.box}>Heavenly Bakes Bakery</div>
                </div>
            </div>
            

        </>
    )
}