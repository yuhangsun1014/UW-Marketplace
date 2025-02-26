import { db } from "../Firebase-config";
import { collection, getDocs } from "firebase/firestore";

const fetchProducts = async() => {
    const querySnapshot = await getDocs(collection(db,"products"));
    querySnapshot.forEach((doc)=>{
        console.log(doc.id, "=>", doc.data());
    });
};