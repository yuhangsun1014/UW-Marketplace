import React from "react";
import { Link } from "react-router-dom";
import './ItemPostedPage.css';
import MiddleSection from "../components/MiddleSection";
function ItemPostedPage() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <div className="successful-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/768px-Eo_circle_green_checkmark.svg.png?20200417132424" className="checkmark" />
                        <h1 className="Posted-message">Item Posted!</h1>
                        <Link to= "/Home"></Link>
                    </div>
                </MiddleSection>
            </div>
        </div>
    );
}
export default ItemPostedPage;