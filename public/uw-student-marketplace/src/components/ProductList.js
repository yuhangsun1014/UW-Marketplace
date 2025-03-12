import { db } from "../Firebase-config";
import { collection, getDocs, where, query } from "firebase/firestore";

export default async function fetchProducts(category = null) {
    console.log(category);
    let q;
    if (category !== null) {
        q = query(collection(db, "products"), where("imageUrl", "!=", null), where("category", "==", category));
    } else {
        q = query(collection(db, "products"), where("imageUrl", "!=", null));
    }
    
    const querySnapshot = await getDocs(q);

    return querySnapshot;
};
