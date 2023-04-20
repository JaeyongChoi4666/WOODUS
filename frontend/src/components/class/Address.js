import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Address = () => {
    const [address, setAddress] = useState("");

    const handleComplete = (data) => {
        setAddress(data.address);
    };

    return (
        <div>
            <DaumPostcode onComplete={handleComplete} />
            {address && <p>{address}</p>}
        </div>
    );
};

export default Address;
