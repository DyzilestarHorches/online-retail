import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Category.css";

const categoryList = [
  {
    title: "Amazon Basics",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg",
  },

  {
    title: "Electronic",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg",
  },

  {
    title: "Oculus",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_2x._SY608_CB667158353_.jpg",
  },

  {
    title: "Gaming Accessories",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg",
  },

  {
    title: "Computer Accessories",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg",
  },
];

function Category() {
  return categoryList.map((value, index) => (
    <Link
      onClick={changeFocusProduct({ value })}
      className="link"
      to="/product-detail"
    >
      <CategoryItems title={value.title} image={value.img} />
    </Link>
  ));
}

function CategoryItems({ title, image }) {
  const [state, dispatch] = useStateValue();

  const changeFocusProduct = (value) => {
    dispatch({
      type: "CHANGE_FOCUS_PRODUCT",
      item: {
        title: value.title,
        img: value.img,
      },
    });
  };
  return (
    <div className="category-item">
      <h5>{title}</h5>
      <img src={image} />
    </div>
  );
}

export default Category;
