import siteConfig from "../siteConfig";

export async function getAllProducts() {
    const url = siteConfig.serverUrl + "products";
    const res = await fetch(url, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyV2l0aG91dFBhc3N3b3JkIjp7InVzZXJuYW1lIjoiamFjayIsImVtYWlsIjoiamFja0BnbWFpbC5jb20ifSwiaWF0IjoxNzI3NjgyODY4fQ.UWJSSZk3iNVfxLxu5sHDHMNMsJCv-7Le6Ll0OZ-h51A"}});
    const resJ = await res.json();          
    return resJ; 
}