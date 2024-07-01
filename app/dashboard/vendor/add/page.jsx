"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddUserPage = () => {
  const [idSupp, setIdSupp] = useState("");
  const [jenisSupp, setJenisSupp] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://assetapi.rihabmuhammad.my.id/supplier", {
        idsupplier: idSupp,
        jenis_supplier: jenisSupp,
      })
      .then((res) => {
        console.log(res);
        setIdSupp("");
        setJenisSupp("");
      });
    // router.push("/dashboard/vendor");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id Supplier"
          name="name"
          required
          value={idSupp}
          onChange={(e) => setIdSupp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Jenis Supplier"
          name="jenis"
          required
          value={jenisSupp}
          onChange={(e) => setJenisSupp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
