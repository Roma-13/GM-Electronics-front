import React, { useState } from "react";
import styles from "./products.module.css";
import IMG1 from "./../../assets/1707289109360.png";
import IMG2 from "./../../assets/1713416670393.png"
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("კატეგორია 1");
  const [sortOption, setSortOption] = useState("თარიღი ზრდადი");
  
  const productsData = [
    {
      id: 1,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 2,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook ",
      price: "114.97ლ",
      imgSrc: IMG2,
      inStock: false,
      isNew: false,
      date: "2024-09-14"
    },
    {
      id: 3,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: false,
      isNew: false,
      date: "2024-03-01"
    },
    {
      id: 4,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-01-01"
    },
    {
      id: 5,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-09"
    },
    {
      id: 6,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: false,
      isNew: false,
      date: "2024-08-01"
    },
    {
      id: 7,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 8,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
  ];

  const categories = ["კატეგორია 1", "კატეგორია 2", "კატეგორია 3"];

  const sortProducts = (option) => {
    const sortedProducts = [...productsData];
    switch (option) {
      case "თარიღი კლებადი":
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "თარიღი ზრდადი":
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "ფასი ზრდადი":
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "ფასი კლებადი":
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "ახალი":
        sortedProducts.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const sortedProducts = sortProducts(sortOption);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>პროდუქტები</h2>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>კატეგორია</h3>
          <div className={styles.categoryButtons}>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`} 
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.actionsContainer}>
            <select className={styles.sortSelect} onChange={handleSortChange} value={sortOption}>
              <option value="თარიღი ზრდადი">თარიღი ზრდადი</option>
              <option value="თარიღი კლებადი">თარიღი კლებადი</option>
              <option value="ფასი ზრდადი">ფასი ზრდადი</option>
              <option value="ფასი კლებადი">ფასი კლებადი</option>
              <option value="ახალი">ახალი</option> 
            </select>
          </div>
          <div className={styles.list}>
            {sortedProducts.map(product => (
              <div className={styles.item} key={product.id}>
                <div className={styles.imager}>
                  <img src={product.imgSrc} alt={product.name} />
                  <div className={styles.additional}>
                    <RiShoppingCart2Line className={styles.cartIcon} />
                  </div>
                  <div className={styles.serialnumber}>{product.serialNumber}</div>
                  <div className={styles.name}>
                    {product.name}
                    {product.isNew && <span className={styles.newLabel}> ახალი </span>}
                  </div>
                  <div className={styles.price}>{product.price}</div>
                  <div className={styles.date}>{product.date}</div>
                  <div className={`${styles.stockStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? (
                      <>
                        <FaCheck className={styles.checkIcon} />
                        მარაგშია
                      </>
                    ) : (
                      <>
                        <ImCross className={styles.crossIcon} />
                        ამოიწურა
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;