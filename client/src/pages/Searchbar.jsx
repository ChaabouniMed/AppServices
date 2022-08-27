import React, { useEffect , useState } from "react";
import "./Searchbar.css";
import { db } from "../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

export default function Searchbar() {
  const navigate = useNavigate()
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Datalist, setDatalist] = useState([]);
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(userCollectionRef);
      setDatalist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getdata();
  }, []);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    const newFilter = Datalist.filter((value) => {
      return value.utilisateur.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 8).map((value) => {
            return (
                <div onClick={()=>navigate('/profile/'+value.id) } className="seachitem">
                <p>{value.utilisateur} </p>
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
