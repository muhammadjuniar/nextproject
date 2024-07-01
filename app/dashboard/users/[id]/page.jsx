"use client";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleUserPage = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `https://nextlearning.theblueflame.my.id/public/pegawai/${id}`
    );
    setItems(response.data.details);
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.userImage} />
        </div>
        {items.name}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Name</label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            value={items.name}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
            value={items.email}
          />

          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder="+628000..."
            value={items.mobile}
          />

          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="course"
            value={items.email}
          />

          <label>Status</label>
          <input
            type="text"
            name="course"
            placeholder="course"
            value={items.status ? "Active" : "Passive"}
          />
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
