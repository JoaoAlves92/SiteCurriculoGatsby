import React from "react";

import BackToTop from 'react-back-to-top';
import { FaArrowUp } from 'react-icons/fa';

const BackTop = () => {
    return(
        <BackToTop
            mainStyle={{
                width:'100%',
                height:'100%',
                marginTop: '20px'
            }}
            percentStyle={{
                display: 'none'
            }}
            animate='rotate'
            offsetTop={0}
            //step={50}
            //percent={true}
            //visiblePercent={50}
        >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #60C85B', borderRadius: '50%', height: '40px'}}>
                <FaArrowUp size={26} color="#60C85B"/>
            </div>
        </BackToTop>
    )
}

export default BackTop;