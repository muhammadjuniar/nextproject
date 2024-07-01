"use client";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const userEndpoint = "https://assetapi.rihabmuhammad.my.id/supplier";
  useEffect(() => {
    const getData = async () => {
      const { data: res } = await axios.get(userEndpoint,{
        headers : 'Access-Control-Allow-Origin: *'
      });
      setSuppliers(res);
      console.log(res);
    };
    getData();
  }, []);

//   const deleteUserById = async (id) => {
//     const response = await axios.delete(
//       `https://nextlearning.theblueflame.my.id/public/pegawai/${id}`
//     );
//     console.log(response);
//     window.location.reload();
//   };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/vendor/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Id Supplier</td>
            <td>Jenis Supplier</td>
            <td>Status Supplier</td>
            <td>Created At</td>
            <td>Updated At</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
        {suppliers.data_supplier?.map((supplier) => (
          <tr key={supplier.idsupplier}>
            <td>{supplier.idsupplier}</td>
            <td>{supplier.jenis_supplier}</td>
            <td>{supplier.status_supplier == 1 ? "Active" : "Passive"}</td>
            <td>{supplier.created_at}</td>
            <td>{supplier.updated_at}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/1`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={`/dashboard/users/edit/1`}>
                  <button className={`${styles.button} ${styles.edit}`}>
                    Edit
                  </button>
                </Link>
                <button
                  className={`${styles.button} ${styles.delete}`}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          ))}
          {/* {users.items?.map((user) => (
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
