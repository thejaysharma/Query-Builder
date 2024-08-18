import React from 'react'
import LOGO from "../../assets/Group1.svg"
import CHART from "../../assets/Chart.svg"
import CHARTGREY from "../../assets/Chart-grey.svg"
import SETTING from "../../assets/Setting.svg"
import AVATAR from "../../assets/Avatar.svg"

export default function Nav() {
    return (
        <div className='bg-[#292C33] h-20 pl-20 pr-28 py-5 flex items-center justify-between'>
            <div className='flex items-center gap-20'>

                <img src={LOGO} alt="logo" className='size-8' />
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2 p-2 text-[#FFFFFF] bg-[#FFFFFF0D] rounded-[37px]'>
                        <img src={CHART} alt="chart" />
                        <span>Themetic Analysis</span>
                    </div>
                    <div className='flex items-center gap-2 p-2 text-[#8B8C8C]'>
                        <img src={CHARTGREY} alt="chart" />
                        <span>Nascent Theme</span>
                    </div>
                    <div className='flex items-center gap-2 p-2 text-[#8B8C8C]'>
                        <img src={SETTING} alt="chart" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
            <img src={AVATAR} alt="Avatar" />
        </div>
    )
}
