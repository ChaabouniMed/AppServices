import React from "react";
import { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { setDoc , getDocs, collection ,query,where, deleteDoc, doc, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { async } from "@firebase/util";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};
export default function Stars(props)
{
    const stars = Array(5).fill(0)
    // useEffect(()=>{
    //     const setstars = async ()=>{
    //     const data =  await getDoc(profileRef)
    //     setCurrentValue(data.data().total/data.data().number)
    //     console.log(currentValue)
    //     }
    //     setstars()
    // },[])
    return (
      <div style={styles.container}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={17}
                color={(props.nombre) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
      </div>
    );
  };
  
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  }