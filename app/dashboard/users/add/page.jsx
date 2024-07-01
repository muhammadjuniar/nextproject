"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import axios from "axios";
import { useState } from "react";

const AddUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://nextlearning.theblueflame.my.id/public/pegawai", {
        name: name,
        email: email,
        mobile: mobile,
        course: course,
      })
      .then((res) => {
        console.log(res.data.message)
        setName("")
        setEmail("")
        setMobile("")
        setCourse("")
      });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="mobile"
          name="mobile"
          required
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="course"
          placeholder="course"
          name="course"
          required
          value={course} 
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
