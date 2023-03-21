import React from "react"
import './AnimatedText.css'

export default function AnimtaedText(props) {

    const mapText = () => {
        let num = 0;

        return props.text.split("").map((char, index) => (
            <div className='animated-char'
                style={{ "animation-delay": (num += 200).toString + "ms" }}
                key={index}
            >
                {char}
            </div>
        ))
    }

    return (
        <div className="animated-text">
            {mapText()}
        </div>
    )
}

