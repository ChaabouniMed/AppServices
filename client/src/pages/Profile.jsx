import React from 'react'
import './profile.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect ,useState} from 'react';
import { db } from "../firebase-config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import  Post  from './Post' 
import './Post.css'
export default function Profile() {
    const {profileId} = useParams()
    const [services , setservices] = useState([])
    const [postLists, setPostList] = useState([]);
    const [link , setlink] = useState("https://img.icons8.com/bubbles/100/000000/user.png")
    const [userDoc ,setuserDoc] = useState({})
    const docref = doc(db, "users", profileId);
    const postsCollectionRef = collection(db, "posts");
    useEffect(()=>{
        const storage = getStorage();
        const starsRef = ref(storage, profileId +'.png');
        getDownloadURL(starsRef).then((url) => {setlink(url)}).catch((error)=>console.log("Pas d'image"))
    },[])
    useEffect(() => {
        const getuser = async () => {
          const data = await getDoc(docref);
          setuserDoc(data.data());
        };
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
          };
        getPosts();
        getuser()
    }, []);
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
      };
    
    const posts = postLists.map((post) => { if (post.useruid == profileId)
        return (
        <div>
        <Post  post={post} />
        <button
                      onClick={() => {
                        deletePost(post.id).then(console.log('post deleted'));
                      }}
                    ></button>
        </div>
        )
      })
    return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25">
                                    <img src={link} height='60px' className="img-radius" alt="User-Profile-Image"/>
                                </div>
                                <h6 className="f-w-600">{userDoc.nom} {userDoc.prénom}</h6>
                                <p>{userDoc.utilisateur}</p>
                                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row1">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{userDoc.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">{userDoc.numero}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Ville</p>
                                        <h6 className="text-muted f-w-400">{userDoc.ville}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Age</p>
                                        <h6 className="text-muted f-w-400">{userDoc.age}</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                <div className="row1">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Services</p>
                                        <h6 className="text-muted f-w-400">{services}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Rating</p>
                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {posts}
</div>
)
}
