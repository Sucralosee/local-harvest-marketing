import React from 'react'
import Image from 'next/image'
import styles from './Feature.module.css'

export default function Feature() {
    return (

        <div>


            <div className={styles.container}>
                <h1 className={styles.title}>Features</h1>
                <div className={styles.content}>
                    <div>
                        <h2 className={styles.titleL}>Browse and Cart Management</h2>
                        <h4 className={styles.descL}>
                            Easily add desired items to your cart from a variety of local vendors at the farmers' market, ensuring your favorites are secured before you even arrive.
                        </h4>
                    </div>

                    <div className={styles.cart}>
                        <Image
                            src="/images/CartMobile.svg"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>
                <div className={styles.contentAlt}>
                    <div>
                        <h2 className={styles.titleL}>Favorites</h2>
                        <h4 className={styles.descL}>
                            Bookmark preferred items for quick access and future purchases, streamlining your shopping experience for repeated orders.

                        </h4>
                    </div>

                    <div className={styles.favourite}>
                        <Image
                            src="/images/favourite.svg"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <h2 className={styles.titleL}>Customized Experience</h2>
                        <h4 className={styles.descL}>
                            Tailor your marketplace experience to suit your preferences, whether you're a shopper seeking fresh produce or a vendor looking to connect with local customers.
                        </h4>
                    </div>

                    <div className={styles.vendor}>
                        <Image
                            src="/images/VendorCons.svg"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>
                <div className={styles.contentAlt}>
                    <div>
                        <h2 className={styles.titleL}>Community Engagement</h2>
                        <h4 className={styles.descL}>
                            Foster a sense of community by supporting local farmers and artisans while enjoying the convenience of pre-ordering and secure reservations through Local Harvest.
                        </h4>
                    </div>

                    <div className={styles.community}>
                        <Image
                            src="/images/Community.svg"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
