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
                            width={200}
                            height={400}
                        />
                    </div>

                <h5 className={styles.text}>
                    <p>Local Harvest is your digital gateway to the freshest produce and goods from your neighborhood farmers' market.</p>


                    <p>Seamlessly browse, pre-order, and secure your favorite items from local vendors with ease. </p>

                    <p>Whether you're a discerning shopper looking for the finest organic produce or a passionate vendor eager to connect with your community, Local Harvest provides a convenient platform for both.</p>

                

                </h5>

            </div>


        </div>
    )
}
