"use client";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const userEndpoint = "https://nextlearning.theblueflame.my.id/public/pegawai";
  useEffect(() => {
    const getData = async () => {
      const { data: res } = await axios.get(userEndpoint);
      setUsers(res);
      console.log(res);
    };
    getData();
  }, []);

  const deleteUserById = async (id) => {
    const response = await axios.delete(
      `https://nextlearning.theblueflame.my.id/public/pegawai/${id}`
    );
    console.log(response);
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Photo</td>
            <td>Name</td>
            <td>Email</td>
            <td>Course</td>
            <td>Create At</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.items?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.course}</td>
              <td>{user.created_at}</td>
              <td>{user.status ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <Link href={`/dashboard/users/edit/${user.id}`}>
                    <button className={`${styles.button} ${styles.edit}`}>
                      Edit
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => deleteUserById(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
