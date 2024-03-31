import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  CarProps,
  ContactInfoType,
  FilterProps,
  NavigationsType,
  WhoWeAreDataType,
} from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const extractNavigation = (t: any) => {
  const nav1 = [
    { name: "menu1", submenu: true },
    { name: "menu2", submenu: true },
    { name: "menu3", submenu: false },
    { name: "menu4", submenu: false },
  ] as const;
  const nav2 = [
    "submenu1",
    "submenu2",
    "submenu3",
    "submenu4",
    "submenu5",
  ] as const;
  let navigations: NavigationsType[] = nav1.map((nav, indx) => {
    const name = nav.name;

    const submenu = nav.submenu
      ? nav2.map((subkey, index) => {
          return {
            title: t(`${name}.submenu.${subkey}.title`),
            link: t(`${name}.submenu.${subkey}.link`),
            id: `${index + 1}sub`,
          };
        })
      : [];
    return {
      title: t(`${name}.title`),
      link: t(`${name}.link`),
      id: `${indx + 1}`,
      submenu,
    };
  });

  return navigations;
};
export const extractHeroSection = (t: any) => {
  const title = t("title");
  const description = t("description");
  const buttonViewProducts = t("buttonViewProducts");
  const buttonRequestQuote = t("buttonRequestQuote");

  return { title, description, buttonViewProducts, buttonRequestQuote };
};
export const extractContactInfo = (t: any) => {
  const menus = [
    {
      name: "contact1",
      linkText: false,
      Icon: EnvelopeIcon,
      value: "ibrahimnazaryweb@gmail.com",
      id: 1,
      link: "mailto:ibrahimnazaryweb@gmail.com",
    },
    {
      name: "contact2",
      linkText: false,
      Icon: PhoneIcon,
      value: "(+1) 434 342 232",
      id: 2,
      link: "tel:+1434 342 232",
    },
    {
      name: "contact3",
      linkText: true,
      Icon: MapPinIcon,
      value: "",
      id: 3,
      link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1664532162126!2d-74.0005234880454!3d40.714352071274035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a26f7cdb6db%3A0xdbdb03722e7ad673!2sDoyers%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709214524532!5m2!1sen!2s`,
    },
  ] as const;
  let contacts: ContactInfoType[] = menus.map((menu, indx) => {
    const name = menu.name;
    const LinkText = menu.linkText ? t(`${name}.linkText`) : null;
    return {
      Icon: menu.Icon,
      label: t(`${name}.label`),
      title: t(`${name}.title`),
      value: LinkText || menu.value,
      link: menu.link,
      id: menu.id,
    };
  });

  return contacts;
};

export const extractWhoWeAreData = (t: any): WhoWeAreDataType => {
  const experience = t("whoweare.experience");
  const title = t("whoweare.title");
  const description = t("whoweare.description");
  const contactButtonText = t("whoweare.contactButtonText");

  return {
    experience,
    title,
    description,
    contactButtonText,
  };
};

export const locales = ["en", "es"];
export const generateStaticParamsLanguage=()=> {
  return locales.map((locale) => ({ locale }));
}