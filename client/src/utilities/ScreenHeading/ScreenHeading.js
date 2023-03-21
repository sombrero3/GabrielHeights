import React from 'react'
import './ScreenHeading.css'
import classnames from 'classnames';

export default function ScreenHeading(props) {
    return (
        <div className={classnames('heading-container', (props.classes || ""))} >
            <div className='screen-heading'>
                <span>{props.title}</span>
            </div>
            
            {
                (props.subHeading)?(
                    <div className='screen-sub-heading'>
                        <span>{props.subHeading}</span>
                    </div>
                ):<div></div>   
            }

            <div className='heading-seperator'>
                <div className='seperator-line'>
                    <div className='seperator-blob'>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}