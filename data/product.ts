import { ProductType, ServiceType } from "@types";

export const services: ServiceType[] = [
  {
    title: { en: "Food Service", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "food-service",
    id: 1,
  },
  {
    title: { en: "Scientific", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "scientific",
    id: 2,
  },
  {
    title: { en: "Floral Coolers", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "floral-coolers",
    id: 3,
  },
  {
    title: { en: "Grocery Store Coolers", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "grocery-store-coolers",
    id: 4,
  },
  {
    title: { en: "Food Distribution", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "food-distribution",
    id: 5,
  },
  {
    title: { en: "Warehouse", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "warehouse",
    id: 6,
  },
  {
    title: { en: "Food Manufacturing And Processing", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "food-manufacturing-and-processing",
    id: 7,
  },
  {
    title: { en: "Walk-In Freezer & Cooler Containers", es: "" },
    description: { en: ["Walk-In Freezer & Cooler Containers"], es: [""] },
    image: "/1.jpg",
    slug: "walk-in-freezer-and-cooler-containers",
    id: 8,
  },
];
/*

Convenience Store Cooler

Drive In Coolers & Freezers



*/

export const products: ProductType[] = [
  {
    title: { en: "Walk In Coolers", es: "" },
    description: { en: [{title:"",description:"Walk-In Freezer & Cooler Containers"}], es: [{title:"",description:"Walk-In Freezer & Cooler Containers"}] },
    image: "/1.jpg",
    slug: "walk-in-coolers",
    id: 1,
  },
  {
    title: { en: "Walk-In Freezers", es: "" },
    description: { en: [{title:"",description:"Walk-In Freezer & Cooler Containers"}], es: [{title:"",description:"Walk-In Freezer & Cooler Containers"}] },
    image: "/1.jpg",
    slug: "walk-in-freezers",
    id: 2,
  },
  {
    title: { en: "Walk-In Cooler & Freezer Combo", es: "" },
    description: { en: [{title:"",description:"Walk-In Freezer & Cooler Containers"}], es: [{title:"",description:"Walk-In Freezer & Cooler Containers"}] },
    image: "/1.jpg",
    slug: "walk-in-cooler-&-freezer-combo",
    id: 3,
  },
  {
    title: { en: "Convenience Store Cooler", es: "" },
    description: { en: [{title:"",description:"Walk-In Freezer & Cooler Containers"}], es: [{title:"",description:"Walk-In Freezer & Cooler Containers"}] },
    image: "/1.jpg",
    slug: "convenience-store-cooler",
    id: 4,
  },
  {
    title: { en: "Drive In Coolers & Freezers", es: "" },
    description: { en: [{title:"",description:"Walk-In Freezer & Cooler Containers"}], es: [{title:"",description:"Walk-In Freezer & Cooler Containers"}] },
    image: "/1.jpg",
    slug: "drive-in-coolers-&-freezers",
    id: 5,
  },
];

export const getOneService= async(slug:string):Promise< ServiceType | null>=>{
  return new Promise((resolve,reject)=>{
    const result:ServiceType[]=services.filter(service=>service.slug==slug)
  if(result.length > 0){
    resolve(result[0])
  }
   resolve(null)
  })
  
}
export const getOneProduct= async(slug:string):Promise< ProductType | null>=>{
  return new Promise((resolve,reject)=>{
    const result:ProductType[]=products.filter(product=>product.slug==slug)
  if(result.length > 0){
    resolve(result[0])
  }
   resolve(null)
  })
  
}
