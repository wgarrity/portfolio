// // ClientCard.js
// import React from 'react';
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// const ClientCard = ({ client }) => {
//     if (!client) {
//         return null;
//     }
//     const baseUrl = process.env.PUBLIC_URL || '';
//     const { primaryImage, branding, className, project, role, linkPath , linkTarget} = client;
//     const linkClick = () => {window.open(linkPath, linkTarget);};

//     return (
//         <section className="clientCard" onClick={linkClick}>
//             <section>
//                 <img src={`${baseUrl}/assets/img/products/${primaryImage}`} className="product" />
//             </section>
//             <section>
//                 <img src={`${baseUrl}/assets/img/${branding}`} className={`branding ${className}`} alt={`Logo for ${branding}`} />
//                 <div>
//                     <label>Project: </label>
//                     <span>{project}</span>
//                 </div>
//                 <div>
//                     <label>Role: </label>
//                     <span>{role}</span>
//                 </div>
//                 <div>
//                     <label>Example: </label>
//                     <span><a href={`${linkPath}`} target={`${linkTarget}`}>Figma <FaArrowUpRightFromSquare /></a></span>
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default ClientCard;

// ClientCard.js
import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import RiveAnimation from './RiveAnimation';
import RiveBackground from './RiveBackground';

const ClientCard = ({ client }) => {
    if (!client) {
        return null;
    }

    const baseUrl = process.env.PUBLIC_URL || '';
    const { id, primaryImage, branding, className, project, role, linkPath, linkTarget, linkType, riveFile, riveStyle, riveWaveFile, riveWaveStyle } = client;
    const linkClick = () => { window.open(linkPath, linkTarget); };

    return (
        <section className="clientCard" onClick={linkClick}>
            <section>
                {id === 1 && riveFile ? (
                    <div className="riveCard">
                        <RiveAnimation riveSrc={`${baseUrl}/assets/rive/${riveFile}`} style={riveStyle} className="riveCard"/>
                        <RiveBackground riveSrc={`${baseUrl}/assets/rive/${riveWaveFile}`} style={riveWaveStyle} className="riveWave"/>   
                    </div>
                ) : (
                    <img src={`${baseUrl}/assets/img/products/${primaryImage}`} className="product" alt={`Product: ${project}`} />
                )}
            </section>
            <section>
            <img src={`${baseUrl}/assets/img/${branding}`} className={`branding ${className}`} alt={`Logo for ${branding}`} />
                <div>
                    <label>Project: </label>
                    <span>{project}</span>
                </div>
                <div>
                    <label>Role: </label>
                    <span>{role}</span>
                </div>
                <div>
                    <label>Example: </label>
                    <span><a href={linkPath} target={linkTarget}>{linkType}<FaArrowUpRightFromSquare /></a></span>
                </div>
            </section>
        </section>
    );
};

export default ClientCard;