import React from 'react'
import styles from './Description.module.css'
import Image from 'next/image'

export default function Description() {
    return (
        <div className={styles.container}>
            <h2>Description</h2>
            <div className={styles.content}>
                <div className={styles.cart}>
                        <Image
                            src="/images/LH-Mobile.svg"
                            width={500}
                            height={800}
                        />
                    </div>

                <h4 className={styles.text}>
                    <p>Local Harvest is your digital gateway to the freshest produce and goods from your neighborhood farmers' market.</p>


                    <p>Seamlessly browse, pre-order, and secure your favorite items from local vendors with ease. Whether you're a discerning shopper looking for the finest organic produce or a passionate vendor eager to connect with your community, Local Harvest provides a convenient platform for both.</p>

                    <p>Embrace the essence of local commerce, where every purchase strengthens community bonds and promotes sustainable living.</p>

                    <p>Join us in celebrating the abundance of seasonal delights and supporting the vibrant tapestry of local producers with Local Harvest.</p>

                </h4>

            </div>


        </div>
    )
}
