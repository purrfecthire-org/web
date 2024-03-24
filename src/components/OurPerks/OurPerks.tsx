import React from 'react'
import { OUR_PERKS } from './OurPerks.config'
import Image from 'next/image'

export default function OurPerks() {
    return (
        <section className="m-0 lg:py-10">
            <h1 className="poppins py-8 text-indigo-950 font-extrabold text-center">
                Our perks
            </h1>
            <div className='padding-container max-container flex flex-wrap justify-center'>
                {
                    OUR_PERKS.map((data) => (
                        <>
                            <div className='flex flex-col items-center justify-start m-5 p-6 w-[290px] gap-10 h-auto' >
                                <Image
                                    key={data.img}
                                    className={data.marginTop}
                                    src={`/our-perks-img/${data.img}`}
                                    width={data.width}
                                    height={data.height}
                                    alt="imagen"
                                />
                                <p className='poppins text-gray-500 text-center'>{data.description}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </section>
    )
}
