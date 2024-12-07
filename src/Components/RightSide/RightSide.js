import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className=" MyAccount">
        
      </div>
      <div>
        <h3>Thông báo đơn hàng</h3>
        <Updates />
      </div>
      <div>
        <h3>Đánh giá từ khách hàng</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
