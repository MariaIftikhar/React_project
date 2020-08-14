import React from 'react';
import Carousel from 'react-images';
const LandingPage = () => {
 const images = [{ source: 'https://images.unsplash.com/photo-1560088292-a9aa45f41714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=954&q=80' }
 ,{ source: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },{ source:'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}];

    return ( 
        <div style={{"backgroundColor":"black"}}>
            <Carousel views={images} loop={true} style={{"width":"100%"}} />;
            <h1  style={{"color":"Green" ,"text-align":"center","font-size":"3vw"}} >Dance First , Think Later</h1>
            <h1  style={{"color":"white" ,"text-align":"center"}} >--------------------------</h1>
            <h1  style={{"color":"Green" ,"text-align":"center","font-size":"3vw"}} >It’s the natural order</h1>
            <p style={{"color":"white" ,"text-align":"center","font-size":"1.5vw"}} >Proactively envisioned multimedia based expertise and cross-media  growth strategies. Seamlessly
            visualize quality intellectual <br/> capital without superior collaboration and idea-sharing. Holistically
                       pontificate installed base portals after maintainable products.</p>

         <h1  style={{"color":"black" ,"text-align":"center"}} >-------------</h1>
        </div>
        
     );
}
 
export default LandingPage;
