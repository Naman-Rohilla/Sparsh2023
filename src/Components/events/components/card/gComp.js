import { debounce } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Images from './images';
import { motion } from 'framer-motion';

const GComp=(props)=>{
    // console.log(props, "propsNam")

    const [matches,setMatches]=useState(
        window.matchMedia("(min-width: 1075px)").matches
    )

    const [opct,setOpct]=useState(0);

    const [shadow,setShadow]=useState('0px 2px 4px 0px');

    const onHoverHandler=()=>{
        setShadow('0px -2px 4px 0px')
    }

    const oneOutHandler=()=>{
        setShadow('0px 2px 4px 0px')
    }

    useEffect(() => {
        window
        .matchMedia("(min-width: 1075px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    
      const scrollHandler=debounce((e)=>{
        if(window.scrollY>60){
            setOpct(1);
        }
      },50)
    
        useEffect(() => {
            scrollHandler();
            window.addEventListener('scroll', scrollHandler);
            
        });
    return(

        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            //   x: -120,
            //   position: "absolute",
              default: "easeIn",
            },
            visible: {
              opacity: 1,
            //   x: 0,

            //   position: "relative",
              default: "easeIn",
            },
          }}
          whileInView="visible"
          transition={{
            duration: "2",
          }}
          
        >
        <div style={{
            height:props.styles.height,    
            width:props.styles.width,
            // border:"2px solid black",
            margin:matches ? props.styles.margin : props.styles.margin2,
            boxShadow: `${shadow} ${props.event.shadowColor}`,
           
            
        }
        } onMouseOver={onHoverHandler} onMouseOut={oneOutHandler}>
            <Images event={props.event} tag={props.styles.tag} data={props.data} loading={props.loading} setloading={props.setloading} color={props.event.shadowColor}/>
        </div>

        </motion.div>
    )
}

export default GComp