import React from 'react'
import Pay from '../pay/Pay'
import styles from './Pays.module.css';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
const Pays = () => {
    let button = {
        height: 40,
        backgroundColor: "blue",
        borderRadius: 8,
        border: "1 solid #0D6EFD",
        color: "white",
        fontSize: 15,
        padding: 10
    }
    let pays = [{
        id: 1,
        name: <div style={{ color: "#6c757d", fontSize: 13 }}>FREE</div>,
        price: "$0",
        span: <div style={{ fontSize: 12, marginTop: 18, color: "grey" }}>/ mo.</div>,
        titles: [
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} /><strong>1 users</strong></>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Unlimited public projects</>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />5GB storage</>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Community access</>,
            <><RxCross2 style={{ fontSize: 13, marginRight: 10, color: "#717981" }} />Unlimited private projects</>,
            <><RxCross2 style={{ fontSize: 13, marginRight: 10, color: "#717981" }} />Dedicated support</>,
            <><RxCross2 style={{ fontSize: 13, marginRight: 10, color: "#717981" }} />Free linked domain</>,
            <><RxCross2 style={{ fontSize: 13, marginRight: 10, color: "#717981" }} />Monthly status reports</>
        ],
        button: "Choose plan"
    },
    {
        id: 2,
        name: <div style={{ color: "black", fontSize: 13 }}><FaStar style={{ color: '#FFC107', fontSize: 14, marginRight: 10 }} />PRO</div>,
        price: "$9",
        span: <div style={{ fontSize: 12, marginTop: 18, color: "grey" }}>/ mo.</div>,
        titles: [
            <> <FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} /><strong>5 users</strong></>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />5GB storage </>,
            <> <FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Unlimited public projects</>,
            <> <FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Community access</>,
            <> <FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Unlimited private projects</>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Dedicated support </>,
            <> <FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Free linked domain</>,
            <> <RxCross2 style={{ fontSize: 13, marginRight: 10, color: "#717981" }} />Monthly status reports</>,
        ],
        button: <div style={button}>Choose Plan</div>
    },
    {
        id: 3,
        name: <div style={{ fontSize: 14 }}>ENTERPRISE</div>,
        price: "$49",
        span: <div style={{ fontSize: 12, marginTop: 18, color: "grey" }}>/ mo.</div>,
        titles: [
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} /><strong>Unlimited users</strong></>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />5GB storage </>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Unlimited public projects </>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} /> Community access</>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Unlimited private projects </>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Dedicated support </>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} /><strong>Unlimited</strong> linked domain </>,
            <><FaCheck style={{ fontSize: 13, marginRight: 10, color: "#0D77FD" }} />Monthly status reports</>,
        ],
        button: "Choose plan"
    }
    ]
    return (
        <><div className={styles.pays_area}>
                <h2 style={{fontSize:40}}>Pay as you grow</h2>
                <p style={{fontSize:20,color:"grey"}}>With our no hassle pricing plans</p>
                </div>
        <div className={styles.pays}>
            {
                pays.map((pay) => (
                    <Pay
                        key={pay.id}
                        name={pay.name}
                        price={pay.price}
                        text={pay.span}
                        titles={pay.titles}
                        button={pay.button}
                    />

                ))
            }
        </div>
        </>
        
    )
}

export default Pays
