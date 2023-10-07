// trunk-ignore(eslint/prettier/prettier)
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


type ILogoProps = {
    xl?: boolean;
};

const DigitalPlayLogo = (props: ILogoProps) => {

    const size = props.xl ? '44' : '32';
    const componentRef = useRef(null);

    const fontStyle = props.xl
        ? 'font-semibold text-3xl'
        : 'font-semibold text-xl';
    return (
        <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
            <h1 className="
      margin-right: auto;
      margin-left: auto;
      bg-gradient-to-r
    from-gameboy-primary
    via-gameboy-tertiary
    to-gameboy-quinary
      text-transparent
      animate-glowing
      bg-clip-text
      font-extrabold
      text-2xl
      font-minecraft">

                Digital

            </h1>

            <h1 className='
        font-comings
        text-2xl
        text-zinc-500
        '>

                play

            </h1>
            <div ref={componentRef}>
                <h1 className='
      pixel
    text-red-800
    hover:text-blue-900
      font-minecraft
      text-md'
                    style={{
                        fontSize: `${25}px`
                    }}>

                    .

                </h1>
            </div>
        </span>
    );
};

export { DigitalPlayLogo };
