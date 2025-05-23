import { FaMoneyBill1 } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

import VerifierAdminBoxItem from "../VerifierAdminBoxItem";

import "./index.css";

const verifierAppliedLoansSectionDetails = [
  {
    id: 11,
    aboutUpdate: "Contact Email not Linked",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746899129/5_qgvlbx.png",
    customerName: "Tom Cruise",
    updatedDate: "June 09, 2021",
    status: "PENDING",
    updatedTime: "6:30 PM",
    loanAppliedDate: "on 24.05.2019",
    update: "1 day ago",
  },
  {
    id: 12,
    aboutUpdate: "Adding Images to Featured Posts",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967326/5_u3u4ok.png",
    customerName: "Matt Damon",
    updatedDate: "June 09, 2021",
    status: "PENDING",
    updatedTime: "8:00 AM",
    loanAppliedDate: "on 24.05.2019",
    update: "1 day ago",
  },
  {
    id: 13,
    aboutUpdate: "When will I be charged this month?",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967411/3_uipbgk.png",
    customerName: "Robert Downey",
    updatedDate: "June 08, 2021",
    status: "PENDING",
    updatedTime: "7:30 PM",
    loanAppliedDate: "on 24.05.2019",
    update: "1 day ago",
  },
  {
    id: 14,
    aboutUpdate: "Payment not going through",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967292/7_kxgqut.png",
    customerName: "Christian Bale",
    updatedDate: "June 08, 2021",
    status: "VERIFIED",
    updatedTime: "5:00 PM",
    loanAppliedDate: "on 24.05.2019",
    update: "2 day ago",
  },
  {
    id: 15,
    aboutUpdate: "Unable to add replies",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967285/6_ayznii.png",
    customerName: "Henry Cavil",
    updatedDate: "June 08, 2021",
    status: "VERIFIED",
    updatedTime: "4:00 PM",
    loanAppliedDate: "on 24.05.2019",
    update: "2 day ago",
  },
  {
    id: 16,
    aboutUpdate: "Downtime since last week",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967276/4_w6zzmw.png",
    customerName: "Chris Evans",
    updatedDate: "June 08, 2021",
    status: "VERIFIED",
    updatedTime: "2:00 PM",
    loanAppliedDate: "on 23.05.2019",
    update: "3 day ago",
  },
  {
    id: 17,
    aboutUpdate: "Referral Bonus",
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746967303/6_zzbsey.png",
    customerName: "Sam Smith",
    updatedDate: "June 08, 2021",
    status: "PENDING",
    updatedTime: "11:30 AM",
    loanAppliedDate: "on 22.05.2019",
    update: "4 day ago",
  },
];

const VerifierDashboard = () => (
  <div className="dash-inner-container">
    <p className="heading">
      DashBoard&gt;<span className="span-ele">Loans</span>
    </p>
    <div className="divs-container">
      <div className="div-cont">
        <div className="iconn-container">
          <FaMoneyBill1 />
        </div>
        <div className="text-container">
          <p className="total-count">50</p>
          <p className="about">LOANS</p>
        </div>
      </div>
      <div className="div-cont">
        <div className="iconn-container">
          <FaUserMinus />
        </div>
        <div className="text-container">
          <p className="total-count">100</p>
          <p className="about">BORROWERS</p>
        </div>
      </div>
      <div className="div-cont">
        <div className="iconn-container">
          <FaMoneyBills />
        </div>
        <div className="text-container">
          <p className="total-count">550,000</p>
          <p className="about">CASH DISBURSED</p>
        </div>
      </div>
      <div className="div-cont">
        <div className="iconn-container">
          <FaPiggyBank />
        </div>
        <div className="text-container">
          <p className="total-count">450,000</p>
          <p className="about">SAVINGS</p>
        </div>
      </div>
      <div className="div-cont">
        <div className="iconn-container">
          <FaUserCheck />
        </div>
        <div className="text-container">
          <p className="total-count">30</p>
          <p className="about">REPAID LOANS</p>
        </div>
      </div>
      <div className="div-cont">
        <div className="iconn-container">
          <TbCurrencyNaira />
        </div>
        <div className="text-container">
          <p className="total-count">1,000,000</p>
          <p className="about">CASH RECEIVED</p>
        </div>
      </div>
    </div>
    <div className="down-cont">
      <div className="applied-loans-heading-cont">
        <h1 className="heading">Applied Loans</h1>
        <div className="icons-container">
          <div className="sort-icon-cont">
            <FaSortAmountUp />
            <p>Sort</p>
          </div>
          <div className="filter-icon-cont">
            <FaFilter />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className="title-cont">
        <p className="title1">User Recent Activity</p>
        <p className="title2">Customer Name</p>
        <p className="title3">Date</p>
        <p className="title4">Action</p>
      </div>
      <div className="list-container">
        {verifierAppliedLoansSectionDetails.map((i) => (
          <VerifierAdminBoxItem key={i.id} item={i} />
        ))}
      </div>
    </div>
    <div className="graph1-cont">
      <p className="graph-heading">Loans Released Monthly</p>
      <img
        src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970350/Chart_1_jre3ed.png"
        alt="graph-green"
        className="graph-img"
      />
    </div>
    <div className="graph2-cont">
      <p className="graph-heading">Total Outstanding Open Loans - Monthly</p>
      <img
        src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970392/Chart_4_odeo4e.png"
        alt="graph-green"
        className="graph-img"
      />
    </div>
    <div className="graph3-cont">
      <p className="graph-heading">Number of Repayments Collected - Monthly</p>
      <img
        src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970361/Chart_3_bioopv.png"
        alt="graph-green"
        className="graph-img"
      />
    </div>
  </div>
);
export default VerifierDashboard;
