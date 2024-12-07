// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Đơn hàng",
    },
    {
      icon: UilUsersAlt,
      heading: "Users",
    },
    {
      icon: UilPackage,
      heading: 'Sản phẩm'
    },
    {
      icon: UilChart,
      heading: 'Báo cáo'
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Doanh thu",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "12,010,000 ",
      png: UilUsdSquare,
      series: [
        {
          name: "Số tiền",
          data: [3100000, 400000, 2800000, 5100000, 420000, 1090000, 100000],
        },
      ],
    },
    {
      title: "Chi phí",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "10,100,000",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Chi phí",
          data: [100000, 1000000, 500000, 7000000, 800000, 300000, 400000],
        },
      ],
    },
    {
      title: "Lợi nhuận",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "1,910,000",
      png: UilClipboardAlt,
      series: [
        {
          name: "Tiền lãi",
          data: [300000,250000, 400000, 200000, 150000, 310000, 300000],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Lê Đại Ánh",
      noti: "đơn đặt hàng số: 20241212LDA",
      time: "5 phút trước ",
    },
    {
      img: img2,
      name: "Lê Đại Ánh",
      noti: "đơn đặt hàng số: 20241212DA",
      time: "10 phút trước",
    },
    {
      img: img3,
      name: "Ngọc Ánh",
      noti: "đơn đặt hàng số: 20241212NA",
      time: "2 giờ trước",
    },
    {
        img: img3,
        name: "Trương Thị Ngọc Ánh",
        noti: "đơn đặt hàng số: 20241212TTNA",
        time: "5 giờ trước",
      },
  ];
  