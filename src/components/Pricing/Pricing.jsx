import React from 'react'
import cls from './style.module.scss'
import PricingCard from '../PricingCard/PricingCard'
import Enterprise from '../Enterprice/Enterprise'
const Pricing = () => {
    return (
        <div className={cls.pricing}>
            <div className="container">
                <div className={cls.center}>
                    <h1 className={cls.pricingTitle}>Price Table</h1>
                    <p className={cls.pricingText}>We offer competitive price</p>
                </div>
                <div className={cls.pricingTable}>
                    <PricingCard
                        title={'Free'}
                        description={'Brief price description'}
                        price={0}
                        operators={2}
                    />
                    <PricingCard
                        title={'Standard'}
                        description={'Brief price description'}
                        price={10}
                        operators={10}
                    />
                    <PricingCard
                        title={'Premium'}
                        description={'Brief price description'}
                        price={15}
                        operators={15}
                    />
                </div>
            </div>
            <Enterprise />

        </div>
    )
}

export default Pricing
