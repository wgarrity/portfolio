// ClientCard.js
import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ClientCard = ({ client }) => {
    if (!client) {
        return null;
    }
    const baseUrl = process.env.PUBLIC_URL || '';
    const { primaryImage, branding, className, project, role, linkPath , linkTarget} = client;
    const linkClick = () => {window.open(linkPath, linkTarget);};

    return (
        <section className="clientCard" onClick={linkClick}>
            <section>
                <img src={`${baseUrl}/assets/img/products/${primaryImage}`} className="product" />
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
                    <span><a href={`${linkPath}`} target={`${linkTarget}`}>Figma <FaArrowUpRightFromSquare /></a></span>
                </div>
            </section>
        </section>
    );
};

export default ClientCard;