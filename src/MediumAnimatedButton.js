import React from 'react';
import './LoginAnimation.css';
import { motion } from "framer-motion";

export function MediumAnimatedButton(props){
    const [scale, setScale]= React.useState(1);
    const shrinkButton = () => setScale(.85);
    const enlargeButton = () => setScale(1);

    return(
        <motion.button
        initial = {{opacity: 0}}
        animate = {{scale, opacity: 1}}
        transition = {{scale: {duration: .3}, opacity: {duration: 1.2, delay: 2.5}}}
        className = {props.isDark ? "darkRoundedButton" : "lightRoundedButton"}
        onMouseDown = {shrinkButton}
        onMouseUp = {enlargeButton}
        onMouseLeave = {enlargeButton}
        onClick = {props.input}
        > 
        {props.title} 
        </motion.button>
    );
}


export default MediumAnimatedButton;