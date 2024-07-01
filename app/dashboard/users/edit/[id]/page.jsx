"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://nextlearning.theblueflame.my.id/public/pegawai/${id}`, {
        name: name,
        email: email,
        mobile: mobile,
        course: course,
      })
      .then((res) => {
        console.log(res.data.message);
        setName("");
        setEmail("");
        setMobile("");
        setCourse("");
      });
    router.push("/dashboard/users", { scroll: false });
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `https://nextlearning.theblueflame.my.id/public/pegawai/${id}`
    );
    setName(response.data.details?.name);
    setEmail(response.data.details?.email);
    setMobile(response.data.details?.mobile);
    setCourse(response.data.details?.course);
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
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          value={email}
          // onChange={handleChange}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="mobile"
          name="mobile"
          required
          value={mobile}
          // onChange={handleChange}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="course"
          placeholder="course"
          name="course"
          required
          value={course}
          // onChange={handleChange}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUserPage;
