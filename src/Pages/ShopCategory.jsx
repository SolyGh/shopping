import React from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { useSelector } from "react-redux";
import { ItemsList } from "../Components/ItemsList/ItemsList";

const styles = {
  shopCategory: {
    width: '100%',
  },
  shopCategoryBanner: {
    display: 'block',
    margin: '30px auto',
    background: 'linear-gradient(180deg, #fde1fd, #0e8b3322 22%)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  shopCategoryIndexSort: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px 30px',
  },
  shopCategorySort: {
    padding: '10px 20px',
    border: '1px solid #888',
  },
  shopCategoryIndexSortText: {
    fontWeight: '600',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    margin: '0 30px',
  },
};

const ShopCategory = (props) => {
  const target = useSelector((state) => state.products).filter(
    (item) => item.category === props.category
  );

  return (
    <div style={styles.shopCategory}>
      <img style={styles.shopCategoryBanner} src={props.banner} alt="" />
      <div style={styles.shopCategoryIndexSort}>
        <p>
          <span style={styles.shopCategoryIndexSortText}>Showing 1-12</span> out of 36 products
        </p>
        <div style={styles.shopCategorySort}>
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div style={styles.products}>
        <ItemsList items={target} />
      </div>
    </div>
  );
};

export default ShopCategory;
