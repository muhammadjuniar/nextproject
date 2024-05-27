import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill className={styles.userImage} />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />

          <label>Price</label>
          <input type="number" name="email" placeholder="30.00" />

          <label>Stock</label>
          <input type="number" name="stock" placeholder="32" />

          <label>Color</label>
          <input type="text" name="color" placeholder="red" />

          <label>Size</label>
          <input type="text" name="size" placeholder="XL" />

          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">computer</option>
          </select>

          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="Description" />
          
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
