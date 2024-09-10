import React from "react";
import "./NewCollections.css";
import { Items } from "../Items/Items";
import new_collections from "../Assets/new_collections";

const NewCollection = () => {
    return (
        <div className="new-collections">
            <h1>New Collection</h1>
            <div className="collection">
                {" "}
                {new_collections.map((item, idx) => (
                    <Items key={idx} {...item} />
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
