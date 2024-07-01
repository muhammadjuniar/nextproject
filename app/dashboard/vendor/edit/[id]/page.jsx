"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditUserPage = () => {
  const [idSupp, setIdSupp] = useState("");
  const [jenisSupp, setJenisSupp] = useState("");
  const [statusSupp, setStatusSupp] = useState("1");
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://nextlearning.theblueflame.my.id/public/pegawai/${id}`, {
        idSupp: idSupp,
        jenisSupp: jenisSupp,
        statusSupp: statusSupp,
      })
      .then((res) => {
        console.log(res.data.message);
        setIdSupp("");
        setJenisSupp("");
        setStatusSupp("");
      });
    router.push("/dashboard/vendor", { scroll: false });
  };

  const listOptions = () => {
    return (
      <>
        <option value="1">Active</option>
        <option value="0">Passive</option>
      </>
    );
  };

  // useEffect(() => {
  //   getUserById();
  // }, []);

  // const getUserById = async () => {
  //   const response = await axios.get(
  //     `https://nextlearning.theblueflame.my.id/public/pegawai/${id}`
  //   );
  //   setName(response.data.details?.name);
  //   setEmail(response.data.details?.email);
  //   setMobile(response.data.details?.mobile);
  //   setCourse(response.data.details?.course);
  // };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id Supplier"
          name="id"
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
        <select name="stat" onChange={(e) => setStatusSupp(e.target.value)}>
          <option>Set Status</option>
          {listOptions()}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUserPage;
