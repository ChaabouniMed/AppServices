import React from "react";
import { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { setDoc , getDocs, collection ,query,where, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { async } from "@firebase/util";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};
export default function SubmitStars(props)
{
    
    const docRef = doc(db ,'stars' ,props.profileId+props.user.uid)
    console.log('SubmitStars')
    const profileRef = doc(db,'users',props.profileId)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
      setCurrentValue(value)
      console.log(currentValue)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
    
    const [star,setStar] = useState({nombre : 0 , total : 0 })
    function handleSubmit()
    {
    setStar({nombre : 0 , total : 0})
      // submitting to star database
      setDoc(docRef , {note : currentValue , user : props.profileId }).then(console.log('done'))
      // updating user database profile with new value of the submitted value
      
      const getstar= async()=> {
        const q = query(collection(db, "stars"), where("user", "==", props.profileId))
        const querySnapshot =  await getDocs(q)
        querySnapshot.forEach((doc) => {
      setStar((old)=>{
          return ({
          nombre : old.nombre+1 ,
          total : old.total + doc.data().note
          })
        })
      })
      setDoc(profileRef,star,{merge :true})
      }
      getstar().then(console.log(star))
      
      // setDoc(profileRef,star,{merge :true})
    }
    return (
      <div style={styles.container}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={17}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
  
        <button
          style={styles.button}
          onClick={handleSubmit}
        >
          Submit
        </button>
        
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